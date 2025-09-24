import { useInView } from '@/hooks/useInView';
import { Cog, Wrench, Anchor, Settings, Award, GraduationCap, ArrowRight, Leaf } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button'; // Import Button component

const programData = [
  { title: 'Bahasa Inggris Maritim 1', icon: <Cog className="text-white h-6 w-6" />, color: 'blue', description: 'Materi dasar Bahasa Inggris untuk komunikasi di lingkungan maritim.', driveUrl: 'https://bim-1.vercel.app/' },
  { title: 'Bahasa Inggris Maritim 2', icon: <Wrench className="text-white h-6 w-6" />, color: 'green', description: 'Materi lanjutan Bahasa Inggris untuk operasional dan prosedur kapal.', driveUrl: 'https://bim-2.vercel.app/' },
  { title: 'Bahasa Inggris Maritim 3', icon: <Anchor className="text-white h-6 w-6" />, color: 'purple', description: 'Bahasa Inggris khusus untuk sertifikasi dan dokumen pelayaran internasional.', driveUrl: 'https://bim-3.vercel.app/' },
  { title: 'Dinas Jaga Mesin', icon: <Settings className="text-white h-6 w-6" />, color: 'orange', description: 'Prosedur dan praktik dinas jaga mesin di kapal niaga sesuai standar internasional.', driveUrl: 'https://dnj-tkn.vercel.app/' },
  { title: 'Kepedulian Lingkungan & Pencegahan Polusi', icon: <Leaf className="text-white h-6 w-6" />, color: 'teal', description: 'Mempelajari praktik terbaik untuk menjaga kelestarian lingkungan maritim dan mencegah polusi laut.', driveUrl: 'https://kl-pp-tkn.vercel.app/' },
  { title: 'Mesin Penggerak Utama 1', icon: <Cog className="text-white h-6 w-6" />, color: 'red', description: 'Mempelajari komponen, prinsip kerja, dan perawatan mesin penggerak utama kapal.', driveUrl: 'https://mpu-1.vercel.app/' }, // Kartu baru
];

const colorVariants = {
  blue: { gradient: 'from-blue-50 to-blue-100', iconBg: 'bg-blue-600', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
  green: { gradient: 'from-green-50 to-green-100', iconBg: 'bg-green-600', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
  purple: { gradient: 'from-purple-50 to-purple-100', iconBg: 'bg-purple-600', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
  orange: { gradient: 'from-orange-50 to-orange-100', iconBg: 'bg-orange-600', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
  red: { gradient: 'from-red-50 to-red-100', iconBg: 'bg-red-600', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700' },
  indigo: { gradient: 'from-indigo-50 to-indigo-100', iconBg: 'bg-indigo-600', text: 'text-indigo-600', button: 'bg-indigo-600 hover:bg-indigo-700' },
  teal: { gradient: 'from-teal-50 to-teal-100', iconBg: 'bg-teal-600', text: 'text-teal-600', button: 'bg-teal-600 hover:bg-teal-700' },
};

const Programs = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="program" ref={ref} className={`py-20 bg-sky-50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Program Keahlian</h2>
          <p className="text-lg text-gray-600">Kompetensi dan program unggulan Teknika Kapal Niaga</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program) => {
            const colors = colorVariants[program.color as keyof typeof colorVariants];
            return (
              <div key={program.title} className={`bg-gradient-to-br ${colors.gradient} rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col`}>
                <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                <Button asChild className={`mt-4 w-full ${colors.button}`}>
                  <a href={program.driveUrl} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="mr-2 h-4 w-4" />Pelajari Lebih Lanjut
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;