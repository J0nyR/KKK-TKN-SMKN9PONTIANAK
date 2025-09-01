import { FolderOpen, GraduationCap, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="beranda" className="relative text-white pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
            Selamat Datang
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-blue-100 animate-slide-up">
            Portal Digital Teknika Kapal Niaga
          </div>
          <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
            SMK Negeri 9 Pontianak - Membangun Generasi Pelaut Profesional dengan Teknologi Modern dan Kompetensi Internasional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link to="/dokumen" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <FolderOpen className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dokumen Digital</h3>
            <p className="text-blue-200 text-sm">Akses lengkap dokumen administrasi dan manajerial</p>
          </Link>

          <Link to="/program" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Program Keahlian</h3>
            <p className="text-blue-200 text-sm">Kurikulum dan kompetensi maritim terdepan</p>
          </Link>

          <Link to="/profil" className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <User className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Profil Jurusan</h3>
            <p className="text-blue-200 text-sm">Visi, misi, dan keunggulan konsentrasi keahlian</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;