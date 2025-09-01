import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;