import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Profiles from "@/components/Profiles";
import Results from "@/components/Results";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Profiles />
      <Technology />
      <Process />
      <Results />
      <CTAForm />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
