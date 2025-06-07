import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    
    <Header activeSection="Hero" setActiveSection={Services} />
    <Hero/>
    <Services/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
   </div>
  );
}
