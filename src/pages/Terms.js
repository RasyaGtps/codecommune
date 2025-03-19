import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  UserIcon, 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ScaleIcon, 
  LockClosedIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GlobeIcon,
  ClockIcon,
  ExclamationIcon
} from '@heroicons/react/outline';

const Terms = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };
  
  const sections = [
    {
      id: 1,
      title: 'Ketentuan Umum',
      icon: <DocumentTextIcon className="h-8 w-8 text-primary-600" />,
      content: 'Selamat datang di CodeCommune. Dengan menggunakan platform ini, Anda menyetujui ketentuan layanan kami. Platform ini ditujukan untuk developer di Indonesia sebagai ruang untuk berkolaborasi dan berbagi pengetahuan.',
      color: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Akun Pengguna',
      icon: <UserIcon className="h-8 w-8 text-indigo-600" />,
      content: 'Anda bertanggung jawab atas akun Anda dan harus memberikan informasi yang akurat saat pendaftaran. Kami berhak menonaktifkan akun yang melanggar ketentuan atau menimbulkan risiko bagi pengguna lain.',
      color: 'bg-indigo-50'
    },
    {
      id: 3,
      title: 'Konten Pengguna',
      icon: <BookOpenIcon className="h-8 w-8 text-purple-600" />,
      content: 'Anda mempertahankan hak atas konten yang Anda bagikan, namun memberikan kami lisensi untuk menggunakannya dalam platform. Konten tidak boleh melanggar hukum, melecehkan, atau merugikan pihak lain.',
      color: 'bg-purple-50'
    },
    {
      id: 4,
      title: 'Privasi dan Keamanan',
      icon: <ShieldCheckIcon className="h-8 w-8 text-green-600" />,
      content: 'Kami menghargai privasi Anda dan melindungi data pribadi sesuai dengan Kebijakan Privasi kami. Data Anda diproses sesuai standar keamanan industri.',
      color: 'bg-green-50'
    },
    {
      id: 5,
      title: 'Batasan Tanggung Jawab',
      icon: <ScaleIcon className="h-8 w-8 text-yellow-600" />,
      content: 'Platform disediakan "sebagaimana adanya" tanpa jaminan. Kami tidak bertanggung jawab atas kerugian tidak langsung yang mungkin timbul dari penggunaan layanan.',
      color: 'bg-yellow-50'
    },
    {
      id: 6,
      title: 'Kekayaan Intelektual',
      icon: <LockClosedIcon className="h-8 w-8 text-red-600" />,
      content: 'Semua konten asli pada platform dilindungi hak cipta, merek dagang, dan hak kekayaan intelektual lainnya. Anda tidak boleh menggunakan atau mendistribusikan konten tersebut tanpa izin.',
      color: 'bg-red-50'
    },
    {
      id: 7,
      title: 'Hukum yang Berlaku',
      icon: <GlobeIcon className="h-8 w-8 text-cyan-600" />,
      content: 'Ketentuan ini diatur oleh hukum Indonesia. Sengketa akan diselesaikan melalui negosiasi atau arbitrase sesuai dengan aturan Badan Arbitrase Nasional Indonesia (BANI).',
      color: 'bg-cyan-50'
    },
    {
      id: 8,
      title: 'Perubahan Ketentuan',
      icon: <ClockIcon className="h-8 w-8 text-orange-600" />,
      content: 'Kami dapat merevisi ketentuan ini dari waktu ke waktu. Perubahan signifikan akan kami informasikan melalui email atau notifikasi di platform.',
      color: 'bg-orange-50'
    }
  ];

  return (
    <div className="max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ketentuan Layanan</h1>
        <p className="text-sm text-gray-500">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Banner */}
      <div className="bg-primary-600 rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="p-6 md:p-8 md:flex items-center">
          <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-20 mb-4 md:mb-0 md:mr-6">
            <DocumentTextIcon className="h-10 w-10 text-white" />
          </div>
          <div className="md:flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-white">Ringkasan Ketentuan Layanan</h2>
            <p className="mt-2 text-primary-100 text-sm md:text-base">
              Dokumen ini menjelaskan aturan penggunaan platform CodeCommune. Dengan menggunakan layanan kami, Anda menyetujui semua ketentuan yang tercantum di bawah ini.
            </p>
          </div>
        </div>
        <div className="bg-primary-700 p-4 md:px-8 text-primary-100 text-sm flex items-center">
          <ExclamationIcon className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>Penting untuk membaca dan memahami ketentuan ini sebelum menggunakan platform kami.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`${section.color} border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-200`}
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  {section.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
              </div>
              {expandedSection === section.id ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="px-6 pb-4 pt-2 text-gray-700">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-start">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-900">Perlu informasi lebih lanjut?</h3>
          <p className="mt-1 text-sm text-gray-600">
            Jika Anda memiliki pertanyaan tentang Ketentuan Layanan kami, silakan hubungi tim dukungan kami di{' '}
            <Link to="/contact" className="text-primary-600 hover:text-primary-800 font-medium">
              halaman kontak
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <Link to="/privacy" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <ShieldCheckIcon className="h-4 w-4 mr-2" />
          Kebijakan Privasi
        </Link>
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Terms; 