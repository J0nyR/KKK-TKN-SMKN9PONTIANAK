import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import Documents from '@/components/sections/Documents';
import Programs from '@/components/sections/Programs';
import Statistics from '@/components/sections/Statistics';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Documents />
        <Programs />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;