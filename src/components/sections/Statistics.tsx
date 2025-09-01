import { useInView } from '@/hooks/useInView';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { label: 'Siswa Aktif', value: 61 },
  { label: 'Guru Produktif', value: 4 },
  { label: 'Mitra Industri', value: 25 },
  { label: 'Lulusan Tersertifikasi', value: 180 },
];

const Statistics = () => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prestasi & Pencapaian</h2>
          <p className="text-lg text-blue-100">Data dan statistik konsentrasi Teknika Kapal Niaga</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isInView && <AnimatedCounter target={stat.value} />}
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;