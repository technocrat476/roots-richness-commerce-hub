
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

export type PaymentProvider = 'razorpay' | 'phonepe';

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

// Razorpay payment processing
export const processRazorpayPayment = async (
  paymentData: PaymentData,
  customerData: CustomerData,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  const res = await initializeRazorpay();

  if (!res) {
    onError('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  try {
    // Create order via API
    const order = await apiClient.createRazorpayOrder(paymentData);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Roots and Richness',
      description: 'Natural Wood-Pressed Oils & Wellness Products',
      order_id: order.id,
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
    const response = await apiClient.initiatePhonePePayment(paymentData);
    
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

// Check PhonePe payment status
export const checkPhonePePaymentStatus = async (transactionId: string) => {
  try {
    const response = await apiClient.checkPhonePeStatus(transactionId);
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
    default:
      onError('Invalid payment provider');
  }
};
