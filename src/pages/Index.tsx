import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import AgendaSection from '@/components/sections/AgendaSection'; // Import komponen baru
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16"> {/* Added pt-16 here */}
        <Hero />
        <AgendaSection /> {/* Menambahkan komponen agenda di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;