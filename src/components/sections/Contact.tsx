import { useInView } from '@/hooks/useInView';
import { User, Badge, Award, MapPin } from 'lucide-react';

const contactInfo = [
    { icon: <User className="text-blue-600" />, title: 'Jony Rabuansyah, S.ST', subtitle: 'Kepala Konsentrasi Keahlian', color: 'blue' },
    { icon: <Badge className="text-green-600" />, title: 'NPSN: 30110024', subtitle: 'Sekolah Data Kemdikbud', color: 'green' },
    { icon: <Award className="text-purple-600" />, title: 'Status: Negeri', subtitle: 'Akreditasi B', color: 'purple' },
    { icon: <MapPin className="text-red-600" />, title: 'SMK Negeri 9 Pontianak', subtitle: 'Jl. Tabrani Ahmad, Paal Lima, Pontianak Barat, Kota Pontianak, Kalimantan Barat, Kode Pos 78114', color: 'red' },
];

const colorVariants = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    red: 'bg-red-100',
};

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="kontak" ref={ref} className={`py-20 bg-gray-50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600">Informasi kontak dan lokasi SMK Negeri 9 Pontianak</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Informasi Kontak</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className={`w-12 h-12 ${colorVariants[info.color as keyof typeof colorVariants]} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{info.title}</p>
                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;