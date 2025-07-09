
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import { AdminProvider } from "@/contexts/AdminContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/pages/About";
import AboutSEO from "@/components/SEO/AboutSEO";

export { Page };

function Page() {
  return (
    <TooltipProvider>
      <AdminProvider>
        <CartProvider>
          <AboutSEO />
          <Toaster />
          <Sonner />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <About />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AdminProvider>
    </TooltipProvider>
  );
}
