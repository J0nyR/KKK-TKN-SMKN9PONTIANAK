import { useInView } from '@/hooks/useInView';
import { Eye, Target, Trophy } from 'lucide-react';

const Profile = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="profil" ref={ref} className={`py-20 bg-gray-50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Profil Konsentrasi Keahlian</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Teknika Kapal Niaga SMK Negeri 9 Pontianak berkomitmen menghasilkan lulusan yang kompeten di bidang maritim</p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-8 mb-16">
          {/* Visi */}
          <div className="text-center bg-blue-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Visi</h3>
            <p className="text-gray-600">Menjadi Institusi Pendidikan yang Berstandar Internasional serta menghasilkan Sumber Daya Manusia yang Profesional, Kompeten, dan Kompetitif.</p>
          </div>
          
          {/* Misi */}
          <div className="bg-green-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Misi</h3>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1 max-w-2xl mx-auto">
              <li>Menanamkan Iman dan Takwa kepada Tuhan Yang Maha Esa;</li>
              <li>Mengembangkan sumber daya manusia yang unggul dan berkarakter;</li>
              <li>Meningkatkan kemampuan tenaga pendidik dan kependidikan yang berkompeten dan inovatif;</li>
              <li>Meningkatkan tata kelola administrasi pendidikan yang transparan dan akuntabel berbasis pada sistem manajemen mutu ISO 9001:2015;</li>
              <li>Menciptakan lingkungan sekolah yang kondusif, sehat, dan nyaman bagi warga sekolah;</li>
              <li>Mengembangkan kerjasama dengan Dunia Usaha/ Dunia Industri dan berbagai lembaga terkait.</li>
            </ul>
          </div>
          
          {/* Tujuan */}
          <div className="bg-purple-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Tujuan</h3>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1 max-w-2xl mx-auto">
              <li>Menghasilkan lulusan yang beriman, profesional, prima, dan berkarakter;</li>
              <li>Menghasilkan lulusan yang memiliki kompetensi berstandard internasional;</li>
              <li>Mewujudkan tenaga pendidik dan kependidikan yang mempunyai etos kerja dan kompetensi berstandar internasional;</li>
              <li>Tercapainya sistem tata kelola administrasi pendidikan yang transparan dan akuntabel dengan sistem manajemen mutu ISO 9001:2015;</li>
              <li>Terwujudnya layanan pendidikan yang mudah, ramah, dan fleksibel antara warga sekolah, masyarakat, dan Dunia Usaha/ Dunia Industri.</li>
              <li>Mewujudkan lingkungan sekolah yang kondusif bagi warga sekolah.</li>
              <li>Terciptanya kerjasama yang baik dengan Dunia Usaha/ Dunia Industri dan berbagai lembaga terkait untuk menyediakan lapangan pekerjaan yang luas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;