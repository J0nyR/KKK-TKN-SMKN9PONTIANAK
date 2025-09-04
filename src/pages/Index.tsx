import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import AgendaSection from '@/components/sections/AgendaSection'; // Import komponen baru
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <AgendaSection /> {/* Menambahkan komponen agenda di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;