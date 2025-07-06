
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import { AdminProvider } from "@/contexts/AdminContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductDetail from "@/pages/ProductDetail";
import ProductSEO from "@/components/SEO/ProductSEO";

export { Page };

function Page({ product }) {
  return (
    <TooltipProvider>
      <AdminProvider>
        <CartProvider>
          {product && <ProductSEO product={product} />}
          <Toaster />
          <Sonner />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <ProductDetail />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AdminProvider>
    </TooltipProvider>
  );
}
