import { useInView } from '@/hooks/useInView';
import { Cog, Wrench, Anchor, Shield, Award, GraduationCap, ArrowRight } from 'lucide-react';
import React from 'react';

const programData = [
  { title: 'Mesin Induk Kapal', icon: <Cog className="text-white h-6 w-6" />, color: 'blue', description: 'Pemeliharaan dan operasional mesin utama kapal niaga sesuai standar internasional' },
  { title: 'Mesin Bantu', icon: <Wrench className="text-white h-6 w-6" />, color: 'green', description: 'Sistem pendukung kapal meliputi generator, pompa, dan peralatan bantu lainnya' },
  { title: 'Permesinan Geladak', icon: <Anchor className="text-white h-6 w-6" />, color: 'purple', description: 'Operasional crane, winch, dan peralatan geladak untuk kegiatan bongkar muat' },
  { title: 'Keselamatan Kerja', icon: <Shield className="text-white h-6 w-6" />, color: 'orange', description: 'Prosedur K3 dan emergency response sesuai standar maritim internasional' },
  { title: 'Sertifikasi', icon: <Award className="text-white h-6 w-6" />, color: 'red', description: 'Basic Safety Training sesuai STCW Convention untuk pelaut profesional' },
  { title: 'Praktik Industri', icon: <GraduationCap className="text-white h-6 w-6" />, color: 'indigo', description: 'Program magang di perusahaan pelayaran terkemuka' },
];

const colorVariants = {
  blue: { gradient: 'from-blue-50 to-blue-100', iconBg: 'bg-blue-600', text: 'text-blue-600' },
  green: { gradient: 'from-green-50 to-green-100', iconBg: 'bg-green-600', text: 'text-green-600' },
  purple: { gradient: 'from-purple-50 to-purple-100', iconBg: 'bg-purple-600', text: 'text-purple-600' },
  orange: { gradient: 'from-orange-50 to-orange-100', iconBg: 'bg-orange-600', text: 'text-orange-600' },
  red: { gradient: 'from-red-50 to-red-100', iconBg: 'bg-red-600', text: 'text-red-600' },
  indigo: { gradient: 'from-indigo-50 to-indigo-100', iconBg: 'bg-indigo-600', text: 'text-indigo-600' },
};

const Programs = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="program" ref={ref} className={`py-20 bg-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Program Keahlian</h2>
          <p className="text-lg text-gray-600">Kompetensi dan program unggulan Teknika Kapal Niaga</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program) => {
            const colors = colorVariants[program.color as keyof typeof colorVariants];
            return (
              <div key={program.title} className={`bg-gradient-to-br ${colors.gradient} rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
                <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className={`flex items-center ${colors.text} font-medium`}>
                  <ArrowRight className="mr-2 h-4 w-4" />Pelajari Lebih Lanjut
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;