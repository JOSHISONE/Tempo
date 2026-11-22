import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../Pages/Home.jsx";
import Templates from "../Pages/Templates.jsx";
import TemplateDetail from "../Pages/TemplateDetail.jsx";
import Pricing from "../Pages/Pricing.jsx";
import HowItWorks from "../Pages/HowItWorks.jsx";
import Cart from "../Pages/Cart.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
