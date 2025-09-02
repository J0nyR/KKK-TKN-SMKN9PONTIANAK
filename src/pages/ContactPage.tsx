import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import RelevantLinks from '@/components/sections/RelevantLinks'; // Import komponen baru

const ContactPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Contact />
        <RelevantLinks /> {/* Menambahkan komponen tautan di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;