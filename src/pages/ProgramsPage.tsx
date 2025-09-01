import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Programs from '@/components/sections/Programs';

const ProgramsPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;