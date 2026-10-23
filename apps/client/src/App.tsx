import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/Index";
import Index from "./pages/home/Index";
import CatalogPage from "./pages/catalog/Index";
import ProductDetail from "./pages/products/Detail";
import QuoteRequestPage from "./pages/quote/Index";
import Confirmation from "./pages/quote/Confirmation";
import AboutPage from "./pages/about/Index";
import ContactPage from "./pages/contact/Index";
import PrivacyPage from "./pages/legal/Privacy";
import TermsPage from "./pages/legal/Terms";
import NotFound from "./pages/not-found/Index";
import { QuoteProvider } from "./lib/quote-context";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <QuoteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produse" element={<CatalogPage />} />
            <Route path="/produse/:slug" element={<ProductDetail />} />
            <Route path="/cerere-oferta" element={<QuoteRequestPage />} />
            <Route path="/cerere-oferta/confirmare" element={<Confirmation />} />
            <Route path="/despre-noi" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/politica-confidentialitate" element={<PrivacyPage />} />
            <Route path="/termeni-si-conditii" element={<TermsPage />} />
            <Route path="/auth" element={<AuthPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuoteProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
