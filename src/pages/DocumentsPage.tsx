import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Documents from '@/components/sections/Documents';

const DocumentsPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Documents />
      </main>
      <Footer />
    </div>
  );
};

export default DocumentsPage;