import React from 'react';
import { FolderOpen, GraduationCap, User, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Data untuk Agenda
const agendaData = {
  'bulan-lalu': [
    { title: 'Rapat Koordinasi Kurikulum', date: '15 Juli 2025', description: 'Pembahasan evaluasi kurikulum semester genap.' },
    { title: 'Pelatihan K3 Bengkel', date: '20 Juli 2025', description: 'Pelatihan keselamatan kerja di bengkel untuk siswa dan guru.' },
    { title: 'Pendaftaran Siswa Baru', date: '1-31 Agustus 2025', description: 'Pembukaan pendaftaran untuk tahun ajaran baru.' },
    { title: 'Orientasi Siswa Baru', date: '5 Agustus 2025', description: 'Pengenalan lingkungan sekolah dan program keahlian.' },
    { title: 'Upacara Bendera HUT RI', date: '17 Agustus 2025', description: 'Perayaan Hari Kemerdekaan Republik Indonesia.' },
    { title: 'Ujian Tengah Semester', date: '15-20 September 2025', description: 'Pelaksanaan ujian tengah semester ganjil.' },
    { title: 'Kunjungan Industri', date: '25 September 2025', description: 'Kunjungan ke perusahaan pelayaran mitra industri.' },
  ],
  'bulan-ini': [], // Dikosongkan untuk bulan Oktober 2025
  'bulan-depan': [], // Dikosongkan
};

const Hero = () => {
  return (
    <section id="beranda" className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        {/* Bagian Selamat Datang */}
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

        {/* Kartu Aksi */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
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
        
        {/* Bagian Agenda */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Agenda Kegiatan</h2>
          <p className="text-lg text-blue-100">Informasi kegiatan penting Teknika Kapal Niaga</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="bulan-lalu" className="w-full"> {/* Changed defaultValue to "bulan-lalu" */}
            <TabsList className="grid w-full grid-cols-3 bg-blue-800 text-white">
              <TabsTrigger value="bulan-lalu" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Lalu</TabsTrigger>
              <TabsTrigger value="bulan-ini" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Ini</TabsTrigger>
              <TabsTrigger value="bulan-depan" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Bulan Depan</TabsTrigger>
            </TabsList>
            <TabsContent value="bulan-lalu" className="mt-6">
              <div className="space-y-4">
                {agendaData['bulan-lalu'].map((item, index) => (
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
                ))}
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

export default Hero;