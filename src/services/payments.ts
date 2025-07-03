
import { apiClient } from './api';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentData {
  amount: number;
  currency: string;
  receipt: string;
  notes: any;
}

export interface CustomerData {
  name: string;
  email: string;
  contact: string;
}

export interface PhonePePaymentData {
  amount: number;
  merchantTransactionId: string;
  merchantUserId: string;
  redirectUrl: string;
  redirectMode: string;
  callbackUrl: string;
  mobileNumber?: string;
  paymentInstrument: {
    type: string;
    targetApp?: string;
  };
}

export interface UPIPaymentData {
  amount: number;
  currency: string;
  merchantTransactionId: string;
  customerData: CustomerData;
  upiId?: string;
}

// API Response interfaces
export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export interface PhonePeInitiateResponse {
  success: boolean;
  code: string;
  message: string;
  data?: {
    merchantId: string;
    merchantTransactionId: string;
    instrumentResponse?: {
      type: string;
      redirectInfo?: {
        url: string;
        method: string;
      };
    };
  };
}

export interface PhonePeStatusResponse {
  success: boolean;
  code: string;
  message: string;
  data?: {
    merchantId: string;
    merchantTransactionId: string;
    transactionId: string;
    amount: number;
    state: string;
    responseCode: string;
    paymentInstrument?: {
      type: string;
      utr?: string;
    };
  };
}

export interface UPIPaymentResponse {
  success: boolean;
  transactionId: string;
  upiRefId: string;
  amount: number;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
}

export type PaymentProvider = 'razorpay' | 'phonepe' | 'upi' | 'cod';

// Initialize Razorpay SDK
export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Razorpay payment processing with UPI support
export const processRazorpayPayment = async (
  paymentData: PaymentData,
  customerData: CustomerData,
  onSuccess: (response: any) => void,
  onError: (error: any) => void,
  preferUPI: boolean = false
) => {
  const res = await initializeRazorpay();

  if (!res) {
    onError('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  try {
    // Create order via API
    const order = await apiClient.createRazorpayOrder(paymentData) as RazorpayOrderResponse;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Roots and Richness',
      description: 'Natural Wood-Pressed Oils & Wellness Products',
      order_id: order.id,
      method: preferUPI ? {
        upi: true,
        card: false,
        netbanking: false,
        wallet: false,
        emi: false
      } : undefined,
      handler: async (response: any) => {
        try {
          // Verify payment
          await apiClient.verifyRazorpayPayment(response);
          onSuccess(response);
        } catch (error) {
          onError(error);
        }
      },
      prefill: {
        name: customerData.name,
        email: customerData.email,
        contact: customerData.contact,
      },
      theme: {
        color: '#D4A441',
      },
      modal: {
        ondismiss: () => {
          onError('Payment cancelled by user');
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    onError(error);
  }
};

// PhonePe payment processing
export const processPhonePePayment = async (
  paymentData: PhonePePaymentData,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  try {
    // Initiate PhonePe payment via API
    const response = await apiClient.initiatePhonePePayment(paymentData) as PhonePeInitiateResponse;
    
    if (response.success && response.data?.instrumentResponse?.redirectInfo?.url) {
      // Redirect to PhonePe payment page
      window.location.href = response.data.instrumentResponse.redirectInfo.url;
    } else {
      onError('Failed to initiate PhonePe payment');
    }
  } catch (error) {
    onError(error);
  }
};

// UPI payment processing
export const processUPIPayment = async (
  paymentData: UPIPaymentData,
  onSuccess: (response: UPIPaymentResponse) => void,
  onError: (error: any) => void
) => {
  try {
    // In a real implementation, this would use a UPI payment gateway
    // For now, we'll simulate the UPI payment process
    
    const transactionId = `UPI_${Date.now()}`;
    const upiRefId = `${transactionId}_REF`;
    
    // Simulate payment processing
    setTimeout(() => {
      // Simulate success/failure (90% success rate for demo)
      const success = Math.random() > 0.1;
      
      if (success) {
        onSuccess({
          success: true,
          transactionId,
          upiRefId,
          amount: paymentData.amount,
          status: 'SUCCESS'
        });
      } else {
        onError('UPI payment failed. Please try again.');
      }
    }, 2000);
    
  } catch (error) {
    onError(error);
  }
};

// Cash on Delivery processing
export const processCODPayment = async (
  orderData: any,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  try {
    // Add COD charges (₹50)
    const codCharges = 50;
    const totalWithCOD = orderData.total + codCharges;
    
    const orderResponse = {
      success: true,
      orderId: `COD_${Date.now()}`,
      paymentMethod: 'Cash on Delivery',
      total: totalWithCOD,
      codCharges,
      status: 'ORDER_PLACED'
    };
    
    onSuccess(orderResponse);
  } catch (error) {
    onError(error);
  }
};

// Check PhonePe payment status
export const checkPhonePePaymentStatus = async (transactionId: string): Promise<PhonePeStatusResponse> => {
  try {
    const response = await apiClient.checkPhonePeStatus(transactionId) as PhonePeStatusResponse;
    return response;
  } catch (error) {
    console.error('Error checking PhonePe status:', error);
    throw error;
  }
};

// Unified payment processor
export const processPayment = async (
  provider: PaymentProvider,
  paymentData: any,
  customerData: CustomerData,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  switch (provider) {
    case 'razorpay':
      return processRazorpayPayment(paymentData, customerData, onSuccess, onError);
    case 'phonepe':
      return processPhonePePayment(paymentData, onSuccess, onError);
    case 'upi':
      return processRazorpayPayment(paymentData, customerData, onSuccess, onError, true); // Use Razorpay with UPI preference
    case 'cod':
      return processCODPayment(paymentData, onSuccess, onError);
    default:
      onError('Invalid payment provider');
  }
};

// Webhook handler for payment verification
export const handlePaymentWebhook = async (webhookData: any) => {
  try {
    // This would be implemented on the backend
    // Frontend just needs to handle the response
    console.log('Payment webhook received:', webhookData);
    
    // Verify webhook signature and process payment confirmation
    return {
      success: true,
      orderId: webhookData.orderId,
      paymentId: webhookData.paymentId,
      status: webhookData.status
    };
  } catch (error) {
    console.error('Webhook processing error:', error);
    throw error;
  }
};
