import { useInView } from '@/hooks/useInView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import React from 'react';

interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

const relevantLinksData: LinkItem[] = [
  { title: 'Fisika Kelautan', url: 'https://example.com/fisika-kelautan', description: 'Mempelajari prinsip fisika dalam lingkungan laut.' },
  { title: 'Navigasi Maritim', url: 'https://example.com/navigasi-maritim', description: 'Panduan lengkap tentang navigasi kapal.' },
  { title: 'Mesin Kapal Diesel', url: 'https://example.com/mesin-diesel', description: 'Dasar-dasar dan perawatan mesin diesel kapal.' },
  { title: 'Hukum Maritim Internasional', url: 'https://example.com/hukum-maritim', description: 'Peraturan dan konvensi di dunia pelayaran.' },
  { title: 'Teknologi Perikanan', url: 'https://example.com/teknologi-perikanan', description: 'Inovasi dalam penangkapan dan budidaya ikan.' },
  { title: 'Meteorologi Kelautan', url: 'https://example.com/meteorologi', description: 'Prediksi cuaca dan iklim di laut.' },
  { title: 'Keselamatan Pelayaran', url: 'https://example.com/keselamatan', description: 'Prosedur dan standar keselamatan di kapal.' },
  { title: 'Manajemen Pelabuhan', url: 'https://example.com/manajemen-pelabuhan', description: 'Operasional dan pengelolaan fasilitas pelabuhan.' },
  { title: 'Elektronika Maritim', url: 'https://example.com/elektronika-maritim', description: 'Sistem elektronik dan komunikasi kapal.' },
  { title: 'Hidrografi', url: 'https://example.com/hidrografi', description: 'Pemetaan dasar laut dan navigasi.' },
  { title: 'Oseanografi', url: 'https://example.com/oseanografi', description: 'Studi tentang lautan dan ekosistemnya.' },
  { title: 'Bahasa Inggris Maritim', url: 'https://example.com/english-maritim', description: 'Terminologi dan komunikasi bahasa Inggris di laut.' },
  { title: 'Kimia Kelautan', url: 'https://example.com/kimia-kelautan', description: 'Komposisi kimia air laut dan dampaknya.' },
  { title: 'Biologi Laut', url: 'https://example.com/biologi-laut', description: 'Kehidupan organisme di ekosistem laut.' },
  { title: 'Stabilitas Kapal', url: 'https://example.com/stabilitas-kapal', description: 'Prinsip-prinsip stabilitas dan keseimbangan kapal.' },
  { title: 'Pencegahan Polusi Laut', url: 'https://example.com/polusi-laut', description: 'Upaya menjaga kebersihan dan kelestarian laut.' },
  { title: 'Sistem Propulsi Kapal', url: 'https://example.com/propulsi-kapal', description: 'Mekanisme penggerak kapal.' },
  { title: 'Peraturan Klasifikasi Kapal', url: 'https://example.com/klasifikasi-kapal', description: 'Standar dan aturan untuk konstruksi kapal.' },
  { title: 'Teknik Pengelasan Kapal', url: 'https://example.com/pengelasan-kapal', description: 'Metode pengelasan dalam konstruksi dan perbaikan kapal.' },
  { title: 'Sistem Pendingin Kapal', url: 'https://example.com/pendingin-kapal', description: 'Prinsip kerja sistem pendingin di kapal.' },
  { title: 'Sistem Bahan Bakar Kapal', url: 'https://example.com/bahan-bakar-kapal', description: 'Manajemen dan distribusi bahan bakar di kapal.' },
  { title: 'Sistem Pelumasan Kapal', url: 'https://example.com/pelumasan-kapal', description: 'Fungsi dan perawatan sistem pelumasan mesin kapal.' },
  { title: 'Pompa dan Pipa Kapal', url: 'https://example.com/pompa-pipa', description: 'Jenis dan fungsi pompa serta sistem perpipaan di kapal.' },
  { title: 'Generator dan Listrik Kapal', url: 'https://example.com/generator-listrik', description: 'Pembangkit listrik dan sistem kelistrikan di kapal.' },
  { title: 'Sistem Kemudi Kapal', url: 'https://example.com/kemudi-kapal', description: 'Mekanisme dan operasional sistem kemudi kapal.' },
  { title: 'Perawatan Mesin Bantu', url: 'https://example.com/perawatan-mesin-bantu', description: 'Pemeliharaan rutin mesin-mesin pendukung kapal.' },
  { title: 'Sistem Hidrolik Kapal', url: 'https://example.com/hidrolik-kapal', description: 'Aplikasi sistem hidrolik di kapal.' },
  { title: 'Sistem Pneumatik Kapal', url: 'https://example.com/pneumatik-kapal', description: 'Penggunaan sistem pneumatik di kapal.' },
  { title: 'Pengendalian Kerusakan Kapal', url: 'https://example.com/pengendalian-kerusakan', description: 'Prosedur penanganan kerusakan dan darurat di kapal.' },
  { title: 'Simulasi Pelayaran', url: 'https://example.com/simulasi-pelayaran', description: 'Pelatihan menggunakan simulator untuk pengalaman pelayaran.' },
];

const RelevantLinks = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className={`py-20 bg-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tautan Website Mata Pelajaran Relevan</h2>
          <p className="text-lg text-gray-600">Sumber daya eksternal untuk mendukung pembelajaran Teknika Kapal Niaga</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantLinksData.map((link, index) => (
            <Card key={index} className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />Kunjungi Website
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantLinks;