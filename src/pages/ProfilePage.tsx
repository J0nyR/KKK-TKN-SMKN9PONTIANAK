import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Profile from '@/components/sections/Profile';

const ProfilePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-16">
        <Profile />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;