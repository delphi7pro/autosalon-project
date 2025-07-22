
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Services from "./pages/Services";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import Team from "./pages/Team";
import History from "./pages/History";
import Careers from "./pages/Careers";
import Location from "./pages/Location";
import Offices from "./pages/Offices";
import HowWeWork from "./pages/HowWeWork";
import Feedback from "./pages/Feedback";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/team" element={<Team />} />
          <Route path="/history" element={<History />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
