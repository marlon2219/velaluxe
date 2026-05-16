import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import WhatsAppButton from "../components/WhatsAppButton";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Navbar />
          <WhatsAppButton />
          <Hero />
        </div>
      </section>

      <Services />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}