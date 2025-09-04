import { Ship, Facebook, Instagram, Youtube, MapPin, Badge, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Ship className="text-blue-400 h-8 w-8 mr-3" />
              <span className="font-bold text-xl">Teknika Kapal Niaga</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">SMK Negeri 9 Pontianak - Konsentrasi Keahlian Teknika Kapal Niaga menghasilkan lulusan yang siap kerja di industri maritim.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300"><Facebook /></a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300"><Instagram /></a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300"><Youtube /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Beranda</Link></li>
              <li><Link to="/profil" className="text-gray-300 hover:text-blue-400 transition duration-300">Profil</Link></li>
              <li><Link to="/dokumen" className="text-gray-300 hover:text-blue-400 transition duration-300">Dokumen</Link></li>
              <li><Link to="/program" className="text-gray-300 hover:text-blue-400 transition duration-300">Program</Link></li>
              <li><Link to="/kontak" className="text-gray-300 hover:text-blue-400 transition duration-300">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />Jl. Tabrani Ahmad, Paal Lima, Pontianak Barat</p>
              <p className="flex items-center"><Badge className="w-4 h-4 mr-2 flex-shrink-0" />NPSN: 30110024</p>
              <p className="flex items-center"><Award className="w-4 h-4 mr-2 flex-shrink-0" />Status: Negeri - Akreditasi B</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; Jony Rabuansyah, S.ST - Kepala Konsentrasi Keahlian Teknika Kapal Niaga SMK Negeri 9 Pontianak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;