import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

interface AgendaItem {
  title: string;
  date: string;
  description: string;
}

const agendaData = {
  'bulan-lalu': [
    { title: 'Rapat Koordinasi Kurikulum', date: '15 Juli 2024', description: 'Pembahasan evaluasi kurikulum semester genap.' },
    { title: 'Pelatihan K3 Bengkel', date: '20 Juli 2024', description: 'Pelatihan keselamatan kerja di bengkel untuk siswa dan guru.' },
  ],
  'bulan-ini': [
    { title: 'Pendaftaran Siswa Baru', date: '1-31 Agustus 2024', description: 'Pembukaan pendaftaran untuk tahun ajaran baru.' },
    { title: 'Orientasi Siswa Baru', date: '5 Agustus 2024', description: 'Pengenalan lingkungan sekolah dan program keahlian.' },
    { title: 'Upacara Bendera HUT RI', date: '17 Agustus 2024', description: 'Perayaan Hari Kemerdekaan Republik Indonesia.' },
  ],
  'bulan-depan': [
    { title: 'Ujian Tengah Semester', date: '15-20 September 2024', description: 'Pelaksanaan ujian tengah semester ganjil.' },
    { title: 'Kunjungan Industri', date: '25 September 2024', description: 'Kunjungan ke perusahaan pelayaran mitra industri.' },
  ],
};

const AgendaSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="agenda" ref={ref} className={`relative py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800 text-white transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))] opacity-30"></div> {/* Changed opacity-20 to opacity-30 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Agenda Kegiatan</h2>
          <p className="text-lg text-blue-100">Informasi kegiatan penting Teknika Kapal Niaga</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="bulan-ini" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-blue-800 text-white">
              <TabsTrigger value="bulan-lalu" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Lalu</TabsTrigger>
              <TabsTrigger value="bulan-ini" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Ini</TabsTrigger>
              <TabsTrigger value="bulan-depan" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Depan</TabsTrigger>
            </TabsList>
            <TabsContent value="bulan-lalu" className="mt-6">
              <div className="space-y-4">
                {agendaData['bulan-lalu'].length > 0 ? (
                  agendaData['bulan-lalu'].map((item, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/10 text-white border border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                        <CalendarDays className="h-5 w-5 text-blue-200" />
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-blue-100 mb-2">{item.date}</p>
                        <p className="text-sm text-blue-50">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-blue-200">Tidak ada agenda untuk bulan lalu.</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="bulan-ini" className="mt-6">
              <div className="space-y-4">
                {agendaData['bulan-ini'].length > 0 ? (
                  agendaData['bulan-ini'].map((item, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/10 text-white border border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                        <CalendarDays className="h-5 w-5 text-blue-200" />
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-blue-100 mb-2">{item.date}</p>
                        <p className="text-sm text-blue-50">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-blue-200">Tidak ada agenda untuk bulan ini.</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="bulan-depan" className="mt-6">
              <div className="space-y-4">
                {agendaData['bulan-depan'].length > 0 ? (
                  agendaData['bulan-depan'].map((item, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/10 text-white border border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                        <CalendarDays className="h-5 w-5 text-blue-200" />
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-blue-100 mb-2">{item.date}</p>
                        <p className="text-sm text-blue-50">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-blue-200">Tidak ada agenda untuk bulan depan.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;