import { Button } from '@/components/ui/button';
import { FolderOpen, GraduationCap, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="beranda" className="bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <User className="text-blue-600 h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Jony Rabuansyah, S.ST</h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">Kepala Konsentrasi Keahlian</p>
            <p className="text-lg md:text-xl text-blue-200">Teknika Kapal Niaga</p>
            <p className="text-base md:text-lg text-blue-300 mt-2">SMK Negeri 9 Pontianak</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/dokumen">
                <FolderOpen className="mr-2 h-5 w-5" />Lihat Dokumen
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/program">
                <GraduationCap className="mr-2 h-5 w-5" />Program Keahlian
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;