import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;