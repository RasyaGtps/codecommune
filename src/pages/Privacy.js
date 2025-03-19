import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  UserIcon, 
  DocumentTextIcon, 
  ServerIcon, 
  LockClosedIcon,
  EyeIcon,
  TrashIcon,
  GlobeIcon,
  CogIcon,
  ExclamationIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FingerPrintIcon
} from '@heroicons/react/outline';

const PrivacyCard = ({ title, icon, children, color }) => {
  return (
    <div className={`${color} border border-gray-200 rounded-lg shadow-sm p-5 mb-5`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          <div className="text-gray-700 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Privacy = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };
  
  const dataSections = [
    {
      id: 'collected',
      title: 'Data yang Kami Kumpulkan',
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-600" />,
      content: 'Kami mengumpulkan data akun (nama, email), konten yang Anda posting, interaksi dengan platform, dan data teknis seperti IP dan cookies untuk menyediakan layanan yang optimal.',
      color: 'bg-blue-50'
    },
    {
      id: 'usage',
      title: 'Penggunaan Data',
      icon: <CogIcon className="h-8 w-8 text-indigo-600" />,
      content: 'Data Anda digunakan untuk menyediakan layanan, personalisasi pengalaman, analitik platform, komunikasi dengan pengguna, dan menjaga keamanan.',
      color: 'bg-indigo-50'
    },
    {
      id: 'sharing',
      title: 'Pembagian Data',
      icon: <ServerIcon className="h-8 w-8 text-purple-600" />,
      content: 'Kami tidak menjual data Anda. Data hanya dibagikan dengan pihak ketiga untuk layanan esensial, kepatuhan hukum, dan perlindungan pengguna.',
      color: 'bg-purple-50'
    },
    {
      id: 'security',
      title: 'Keamanan Data',
      icon: <LockClosedIcon className="h-8 w-8 text-green-600" />,
      content: 'Kami menggunakan enkripsi modern, akses terbatas, dan review keamanan berkala untuk melindungi data Anda dari akses tidak sah.',
      color: 'bg-green-50'
    },
    {
      id: 'rights',
      title: 'Hak Privasi Anda',
      icon: <ShieldCheckIcon className="h-8 w-8 text-yellow-600" />,
      content: 'Anda memiliki hak untuk mengakses, mengubah, menghapus data, dan menolak pemrosesan. Semua permintaan privasi dapat diajukan melalui halaman kontak.',
      color: 'bg-yellow-50'
    },
    {
      id: 'cookies',
      title: 'Cookies & Teknologi',
      icon: <FingerPrintIcon className="h-8 w-8 text-red-600" />,
      content: 'Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda, mengingat preferensi, dan analitik penggunaan platform.',
      color: 'bg-red-50'
    }
  ];

  return (
    <div className="max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide pb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Kebijakan Privasi</h1>
        <p className="text-sm text-gray-500">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="p-6 md:p-8 md:flex items-center">
          <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white bg-opacity-20 mb-4 md:mb-0 md:mr-6">
            <ShieldCheckIcon className="h-10 w-10 text-white" />
          </div>
          <div className="md:flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-white">Kami Menjaga Privasi Anda</h2>
            <p className="mt-2 text-blue-100 text-sm md:text-base">
              Di CodeCommune, kami berkomitmen untuk melindungi data pribadi Anda dan menggunakannya dengan transparan. Dokumen ini menjelaskan bagaimana kami memproses data Anda.
            </p>
          </div>
        </div>
        <div className="bg-blue-700 p-4 md:px-8 text-blue-100 text-sm flex items-center">
          <ExclamationIcon className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>Dengan menggunakan platform kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto scrollbar-hide -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'general'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <InformationCircleIcon className="h-5 w-5 mr-2" />
              <span>Umum</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'data'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              <span>Data Anda</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('rights')}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === 'rights'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" />
              <span>Hak Anda</span>
            </div>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === 'general' && (
          <div>
            <div className="bg-blue-50 border border-gray-200 rounded-lg p-5 mb-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <InformationCircleIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tentang Kebijakan Ini</h3>
                  <p className="text-gray-700 text-sm">
                    Kebijakan ini menjelaskan bagaimana CodeCommune mengumpulkan, menggunakan, dan melindungi
                    data pribadi Anda saat Anda menggunakan platform kami. Kami menjunjung tinggi transparansi
                    dan kontrol pengguna atas data mereka.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-gray-200 rounded-lg p-5 mb-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <UserIcon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Pihak yang Bertanggung Jawab</h3>
                  <p className="text-gray-700 text-sm">
                    CodeCommune adalah pengontrol data untuk informasi pribadi yang dikumpulkan melalui platform kami.
                    Jika Anda memiliki pertanyaan tentang kebijakan ini, hubungi kami di privacy@codecommune.id.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-gray-200 rounded-lg p-5 mb-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CogIcon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Perubahan Kebijakan</h3>
                  <p className="text-gray-700 text-sm">
                    Kami dapat memperbarui kebijakan ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami.
                    Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan di platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-4">
            {dataSections.map((section) => (
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
        )}

        {activeTab === 'rights' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <EyeIcon className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Akses Data</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Anda berhak meminta salinan data pribadi Anda yang kami simpan.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Koreksi Data</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Anda dapat meminta kami memperbaiki data pribadi Anda yang tidak akurat.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <TrashIcon className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Hapus Data</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Anda dapat meminta penghapusan data pribadi Anda dalam keadaan tertentu.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <GlobeIcon className="h-6 w-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Portabilitas Data</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Anda dapat meminta data Anda dalam format yang dapat dibaca mesin.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="font-medium text-gray-900 mb-2">Cara Menggunakan Hak Anda</h3>
              <p className="text-sm text-gray-700">
                Untuk menggunakan hak privasi Anda, silakan hubungi kami di privacy@codecommune.id atau melalui 
                <Link to="/contact" className="text-primary-600 hover:text-primary-800 font-medium ml-1">
                  halaman kontak
                </Link>. Kami akan merespons permintaan Anda dalam waktu 30 hari.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Additional Info Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <div className="md:flex items-start">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 mb-4 md:mb-0 md:mr-4">
            <ShieldCheckIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Komitmen Kami Terhadap Privasi</h3>
            <p className="text-gray-700 text-sm">
              Privasi pengguna adalah prioritas utama kami. Kami tidak akan pernah menjual data Anda atau menggunakannya
              di luar tujuan yang dijelaskan dalam kebijakan ini. Kami secara teratur meninjau dan meningkatkan praktik
              keamanan kami untuk memastikan data Anda tetap aman.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link to="/terms" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <DocumentTextIcon className="h-4 w-4 mr-2" />
          Ketentuan Layanan
        </Link>
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Privacy; 