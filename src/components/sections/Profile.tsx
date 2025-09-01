import { useInView } from '@/hooks/useInView';
import { Eye, Target, Trophy } from 'lucide-react';

const Profile = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="profil" ref={ref} className={`py-20 bg-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Profil Konsentrasi Keahlian</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Teknika Kapal Niaga SMK Negeri 9 Pontianak berkomitmen menghasilkan lulusan yang kompeten di bidang maritim</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-blue-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Visi</h3>
            <p className="text-gray-600">Menjadi pusat keunggulan pendidikan teknika kapal niaga yang menghasilkan lulusan berkarakter, kompeten, dan berdaya saing global</p>
          </div>
          
          <div className="text-center bg-green-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Misi</h3>
            <p className="text-gray-600">Menyelenggarakan pendidikan berkualitas dengan kurikulum yang selaras dengan kebutuhan industri maritim</p>
          </div>
          
          <div className="text-center bg-purple-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Unggulan</h3>
            <p className="text-gray-600">Fasilitas bengkel modern, kerjasama industri yang kuat, dan sertifikasi kompetensi internasional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;