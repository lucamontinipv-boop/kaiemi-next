import AntiFuffaSection from "@/components/AntiFuffaSection";
import AuthoritySection from "@/components/AuthoritySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearnSection from "@/components/LearnSection";
import MethodSection from "@/components/MethodSection";
import Navbar from "@/components/Navbar";
import OfferSection from "@/components/OfferSection";
import ProblemSection from "@/components/ProblemSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import WhatsappCta from "@/components/WhatsappCta";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <LearnSection />
        <BeforeAfterSection />
        <OfferSection />
        <AntiFuffaSection />
        <AuthoritySection />
        <FaqSection />
        <WhatsappCta />
      </main>
      <Footer />
    </>
  );
}
