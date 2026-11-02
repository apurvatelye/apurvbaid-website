import { Route, Routes } from "react-router-dom";
import ProjectDetails from "../components/Portfolio/ProjectDetails";
import About from "../pages/About";
import Awards from "../pages/Awards";
import Blogs from "../pages/Blogs";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import ServicesWeOffer from "../pages/ServicesWeOffer";
import SpacePsychology from "../pages/SpacePsychology";
import WhyChooseUs from "../pages/WhyChooseUs";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/services-we-offer" element={<ServicesWeOffer />} />
      <Route path="/space-psychology" element={<SpacePsychology />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/career" element={<Career />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
    </Routes>
  );
};

export default AppRouter;
