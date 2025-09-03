import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Programs from '@/components/sections/Programs';
import RelevantLinks from '@/components/sections/RelevantLinks'; // Import komponen baru

const ProgramsPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Programs />
        <RelevantLinks /> {/* Menambahkan komponen tautan di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;