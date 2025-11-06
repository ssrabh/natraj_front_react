import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Bootcamp from "./pages/Bootcamp";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment"; // optional for future

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ✅ Shared Layout with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ✅ Example of a page without layout (like payment) */}
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
