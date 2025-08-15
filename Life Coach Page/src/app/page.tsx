
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { Products } from '@/components/products';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
