import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProductSection from '@/components/ProductSection';
import WhatsInside from '@/components/WhatsInside';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="product">
        <ProductSection />
      </div>
      <div id="whats-inside">
        <WhatsInside />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
