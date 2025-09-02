import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Wrench, LineChart, Handshake, Award, ClipboardCheck, FolderPlus, Download, Search } from 'lucide-react';
import React from 'react';

// Fungsi untuk mengambil thumbnail dari Google Drive
// Catatan: Thumbnail hanya akan berfungsi jika file/folder di Google Drive diatur untuk dapat diakses publik.
function getDriveThumbnail(driveUrl: string): string | null {
  const match = driveUrl.match(/[-\w]{25,}/); // Mencari ID file/folder
  if (!match) return null;
  const fileId = match[0];
  // Untuk folder, thumbnail mungkin tidak selalu tersedia atau relevan.
  // Untuk file, formatnya biasanya drive.google.com/thumbnail?id=FILE_ID
  // Untuk folder, ini mungkin tidak menghasilkan thumbnail yang berguna.
  return `https://drive.google.com/thumbnail?id=${fileId}`;
}

const documentCategoriesData = [
  { title: 'Manajerial & Kelembagaan', icon: <Users className="text-blue-600 h-6 w-6" />, color: 'blue', items: ['SK Penugasan Kepala Konsentrasi', 'Struktur Organisasi', 'Rencana Kerja Tahunan (RKT)', 'Program Kerja', 'LAKIP Konsentrasi', 'Inventaris Peralatan', 'Kalender Akademik', 'Notulen Rapat'], driveUrl: 'https://drive.google.com/drive/folders/1iE_movw7JP0tykDdm6NqML4v59GYEAnD?usp=sharing' },
  { title: 'Kurikulum & Pembelajaran', icon: <BookOpen className="text-green-600 h-6 w-6" />, color: 'green', items: ['Kurikulum Merdeka SMK PK', 'Struktur Kurikulum', 'Capaian Pembelajaran (CP)', 'Silabus Mata Pelajaran', 'RPP/Modul Ajar', 'Program Semester & Tahunan', 'Bahan Ajar Digital', 'Bank Soal & Rubrik'], driveUrl: 'https://drive.google.com/drive/folders/1stdbjc_DQW74OSGJWaIhC0dZ02W5h1WO?usp=sharing' },
  { title: 'Praktik & Bengkel', icon: <Wrench className="text-orange-600 h-6 w-6" />, color: 'orange', items: ['SOP Bengkel/Lab', 'Daftar Peralatan Praktik', 'Jadwal Laboratorium', 'Job Sheet Praktik', 'Pemeliharaan Alat', 'Logbook Peralatan', 'Dokumen K3', 'Peta Evakuasi & APD'], driveUrl: 'https://drive.google.com/drive/folders/1LjIFVUrUtpxHUvXoJ9zbh3TNOrbE499G?usp=sharing' },
  { title: 'Evaluasi & Penilaian', icon: <LineChart className="text-purple-600 h-6 w-6" />, color: 'purple', items: ['Kriteria Ketuntasan Minimal', 'Instrumen Penilaian', 'Rekap Nilai Siswa', 'Rubrik Ujian Praktik', 'Evaluasi PKL/Prakerin', 'Supervisi Pembelajaran', 'Monitoring & Evaluasi', 'Analisis Hasil Belajar'], driveUrl: 'https://drive.google.com/drive/folders/1JA6NeWy1Ve26YtxqUfe53DSn0X1IXJAr?usp=sharing' },
  { title: 'Kemitraan & Link and Match', icon: <Handshake className="text-red-600 h-6 w-6" />, color: 'red', items: ['MoU/PKS dengan DUDI', 'Kerjasama Instansi Maritim', 'Program PKL', 'Sinkronisasi Kurikulum', 'Data Alumni', 'Tracer Study'], driveUrl: 'https://drive.google.com/drive/folders/1ntrL3ddeLjTYm6GezGWTiu7ZhKZ4Q97K?usp=sharing' },
  { title: 'Ujian & Sertifikasi', icon: <Award className="text-indigo-600 h-6 w-6" />, color: 'indigo', items: ['Paket Soal UKK', 'SK Tim Pelaksana UKK', 'Asesmen Berbasis SKKNI', 'Dokumen LSP/TUK', 'Sertifikat Peserta Didik', 'BST, ATT, dll'], driveUrl: 'https://drive.google.com/drive/folders/1G77b4Ij66Lm0gOQafiYwPgQKzp5Tw6FN?usp=sharing' },
  { title: 'Monitoring & Evaluasi', icon: <ClipboardCheck className="text-teal-600 h-6 w-6" />, color: 'teal', items: ['Instrumen Supervisi Guru', 'Evaluasi Pembelajaran', 'Analisis Hasil Belajar', 'Rekomendasi Perbaikan', 'Monitoring PKL Siswa'], driveUrl: 'https://drive.google.com/drive/folders/1X8jmQ88uaP2ssyZd-ZpZueME3Qs7m-tz?usp=sharing' },
  { title: 'Dokumen Pendukung', icon: <FolderPlus className="text-yellow-600 h-6 w-6" />, color: 'yellow', items: ['Data Guru Produktif', 'Sertifikasi Kompetensi', 'Data Siswa Konsentrasi', 'Profil Konsentrasi', 'Dokumentasi Kegiatan', 'Media Digital Jurusan'], driveUrl: 'https://drive.google.com/drive/folders/1mIUDyuB1na_Nq9M6__pZ_3GALq20GTvx?usp=sharing' },
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
    <section id="dokumen" ref={ref} className={`py-20 bg-gray-50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📂 Dokumen Wajib Kepala Konsentrasi Keahlian</h2>
          <p className="text-lg text-gray-600">Koleksi lengkap dokumen administrasi dan manajerial Teknika Kapal Niaga</p>
        </div>

        {/* Input Pencarian */}
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
            const thumbnailUrl = getDriveThumbnail(cat.driveUrl);
            return (
              <div key={cat.title} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col">
                {/* Thumbnail */}
                {thumbnailUrl && (
                  <img
                    src={thumbnailUrl}
                    alt={`Thumbnail ${cat.title}`}
                    className="w-full h-32 object-cover rounded-md mb-4 border border-gray-200"
                  />
                )}

                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{cat.title}</h3>
                <ul className="text-sm text-gray-600 space-y-2 flex-grow">
                  {cat.items.map(item => <li key={item}>• {item}</li>)}
                </ul>
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