import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Wrench, LineChart, Handshake, Award, ClipboardCheck, FolderPlus, Download, Search } from 'lucide-react';
import React from 'react';

const documentCategoriesData = [
  { title: 'Manajerial & Kelembagaan', icon: <Users className="text-blue-600 h-8 w-8" />, color: 'blue', items: ['SK Penugasan Kepala Konsentrasi', 'Struktur Organisasi', 'Rencana Kerja Tahunan (RKT)', 'Program Kerja', 'LAKIP Konsentrasi', 'Inventaris Peralatan', 'Kalender Akademik', 'Notulen Rapat'], driveUrl: 'https://drive.google.com/drive/folders/1iE_movw7JP0tykDdm6NqML4v59GYEAnD?usp=sharing' },
  { title: 'Kurikulum & Pembelajaran', icon: <BookOpen className="text-green-600 h-8 w-8" />, color: 'green', items: ['Kurikulum Merdeka SMK PK', 'Struktur Kurikulum', 'Capaian Pembelajaran (CP)', 'Silabus Mata Pelajaran', 'RPP/Modul Ajar', 'Program Semester & Tahunan', 'Bahan Ajar Digital', 'Bank Soal & Rubrik'], driveUrl: 'https://drive.google.com/drive/folders/1stdbjc_DQW74OSGJWaIhC0dZ02W5h1WO?usp=sharing' },
  { title: 'Praktik & Bengkel', icon: <Wrench className="text-orange-600 h-8 w-8" />, color: 'orange', items: ['SOP Bengkel/Lab', 'Daftar Peralatan Praktik', 'Jadwal Laboratorium', 'Job Sheet Praktik', 'Pemeliharaan Alat', 'Logbook Peralatan', 'Dokumen K3', 'Peta Evakuasi & APD'], driveUrl: 'https://drive.google.com/drive/folders/1LjIFVUrUtpxHUvXoJ9zbh3TNOrbE499G?usp=sharing' },
  { title: 'Evaluasi & Penilaian', icon: <LineChart className="text-purple-600 h-8 w-8" />, color: 'purple', items: ['Kriteria Ketuntasan Minimal', 'Instrumen Penilaian', 'Rekap Nilai Siswa', 'Rubrik Ujian Praktik', 'Evaluasi PKL/Prakerin', 'Supervisi Pembelajaran', 'Monitoring & Evaluasi', 'Analisis Hasil Belajar'], driveUrl: 'https://drive.google.com/drive/folders/1JA6NeWy1Ve26YtxqUfe53DSn0X1IXJAr?usp=sharing' },
  { title: 'Kemitraan & Link and Match', icon: <Handshake className="text-red-600 h-8 w-8" />, color: 'red', items: ['MoU/PKS dengan DUDI', 'Kerjasama Instansi Maritim', 'Program PKL', 'Sinkronisasi Kurikulum', 'Data Alumni', 'Tracer Study'], driveUrl: 'https://drive.google.com/drive/folders/1ntrL3ddeLjTYm6GezGWTiu7ZhKZ4Q97K?usp=sharing' },
  { title: 'Ujian & Sertifikasi', icon: <Award className="text-indigo-600 h-8 w-8" />, color: 'indigo', items: ['Paket Soal UKK', 'SK Tim Pelaksana UKK', 'Asesmen Berbasis SKKNI', 'Dokumen LSP/TUK', 'Sertifikat Peserta Didik', 'BST, ATT, dll'], driveUrl: 'https://drive.google.com/drive/folders/1G77b4Ij66Lm0gOQafiYwPgQKzp5Tw6FN?usp=sharing' },
  { title: 'Monitoring & Evaluasi', icon: <ClipboardCheck className="text-teal-600 h-8 w-8" />, color: 'teal', items: ['Instrumen Supervisi Guru', 'Evaluasi Pembelajaran', 'Analisis Hasil Belajar', 'Rekomendasi Perbaikan', 'Monitoring PKL Siswa'], driveUrl: 'https://drive.google.com/drive/folders/1X8jmQ88uaP2ssyZd-ZpZueME3Qs7m-tz?usp=sharing' },
  { title: 'Dokumen Pendukung', icon: <FolderPlus className="text-yellow-600 h-8 w-8" />, color: 'yellow', items: ['Data Guru Produktif', 'Sertifikasi Kompetensi', 'Data Siswa Konsentrasi', 'Profil Konsentrasi', 'Dokumentasi Kegiatan', 'Media Digital Jurusan'], driveUrl: 'https://drive.google.com/drive/folders/1mIUDyuB1na_Nq9M6__pZ_3GALq20GTvx?usp=sharing' },
  { title: 'ISO', icon: <Award className="text-gray-600 h-8 w-8" />, color: 'gray', items: ['Sertifikat ISO 9001:2015', 'Prosedur Mutu', 'Audit Internal', 'Tinjauan Manajemen'], driveUrl: 'https://drive.google.com/drive/folders/YOUR_ISO_FOLDER_ID' }, // Kartu baru
  { title: '8 Standar Pendidikan', icon: <ClipboardCheck className="text-lime-600 h-8 w-8" />, color: 'lime', items: ['Standar Kompetensi Lulusan', 'Standar Isi', 'Standar Proses', 'Standar Penilaian', 'Standar Pendidik & Tenaga Kependidikan', 'Standar Sarana & Prasarana', 'Standar Pengelolaan', 'Standar Pembiayaan'], driveUrl: 'https://drive.google.com/drive/folders/YOUR_8_STANDAR_PENDIDIKAN_FOLDER_ID' }, // Kartu baru
];

const colorVariants = {
  blue: { bg: 'bg-blue-100', button: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'bg-green-100', button: 'bg-green-600 hover:bg-green-700' },
  orange: { bg: 'bg-orange-100', button: 'bg-orange-600 hover:bg-orange-700' },
  purple: { bg: 'bg-purple-100', button: 'bg-purple-600 hover:bg-purple-700' },
  red: { bg: 'bg-red-100', button: 'bg-red-600 hover:bg-red-700' },
  indigo: { bg: 'bg-indigo-100', button: 'bg-indigo-600 hover:bg-indigo-700' },
  teal: { bg: 'bg-teal-100', button: 'bg-teal-600 hover:bg-teal-700' },
  yellow: { bg: 'bg-yellow-100', button: 'bg-yellow-600 hover:bg-yellow-700' },
  gray: { bg: 'bg-gray-100', button: 'bg-gray-600 hover:bg-gray-700' }, // Varian warna baru
  lime: { bg: 'bg-lime-100', button: 'bg-lime-600 hover:bg-lime-700' }, // Varian warna baru
};

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredCategories = documentCategoriesData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <section id="dokumen" ref={ref} className={`py-20 bg-slate-50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📂 Dokumen Wajib Kepala Konsentrasi Keahlian</h2>
          <p className="text-lg text-gray-600">Koleksi lengkap dokumen administrasi dan manajerial Teknika Kapal Niaga</p>
        </div>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari dokumen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => {
            const colors = colorVariants[cat.color as keyof typeof colorVariants];
            return (
              <div key={cat.title} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col text-center">
                <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex-grow">{cat.title}</h3>
                <Button asChild className={`mt-4 w-full ${colors.button}`}>
                  <a href={cat.driveUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />Lihat di Google Drive
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

export default Documents;