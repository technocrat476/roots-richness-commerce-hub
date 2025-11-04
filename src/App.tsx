
import { Routes, Route } from "react-router-dom";
import React from "react";
import { AppWrapper } from "./AppWrapper";
import Loading from "./components/ui/Loading";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Eager imports for SSR to avoid Suspense mismatch
import AdminRoute from "./components/admin/AdminRoute";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { UspBar } from "./components/ui/UspBar";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import ReturnRefundPolicy from "./pages/policies/ReturnRefundPolicy";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsAndConditions from "./pages/policies/TermsAndConditions";

const App = () => (
  <AppWrapper>
    <div className="min-h-screen flex flex-col">
      <Routes>
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={
                    <AdminLogin />
                  } />
                  <Route path="/admin" element={
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  } />
                  
                  {/* Public Routes */}
                  <Route path="/*" element={
                    <>
                      <UspBar />
                      <Header />
                      <main className="flex-1">
                        <ErrorBoundary>
                          <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:slug" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/order-confirmation" element={<OrderConfirmation />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/shipping-policy" element={<ShippingPolicy />} />
                            <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </ErrorBoundary>
                      </main>
                      <Footer />
                    </>
                  } />
      </Routes>
    </div>
  </AppWrapper>
);

export default App;
