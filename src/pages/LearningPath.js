import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, ChevronRightIcon, BookOpenIcon, ClockIcon, CheckCircleIcon, LockClosedIcon } from '@heroicons/react/outline';

const LearningPath = () => {
  const { paths } = useAppContext();
  const [selectedPathId, setSelectedPathId] = useState(paths[0]?.id || null);
  
  // Temukan path yang dipilih
  const selectedPath = paths.find(path => path.id === selectedPathId) || paths[0];
  
  // Modul dummy untuk learning path yang dipilih
  const modules = [
    {
      id: 1,
      title: 'Pengenalan dan Setup',
      description: 'Mempelajari dasar-dasar dan menyiapkan lingkungan pengembangan',
      duration: '2 jam',
      isCompleted: true,
      lessons: [
        { id: 101, title: 'Pendahuluan', duration: '15 menit', isCompleted: true },
        { id: 102, title: 'Menyiapkan Lingkungan Development', duration: '30 menit', isCompleted: true },
        { id: 103, title: 'Struktur Project', duration: '25 menit', isCompleted: true },
        { id: 104, title: 'Hello World!', duration: '20 menit', isCompleted: true }
      ]
    },
    {
      id: 2,
      title: 'Fundamental',
      description: 'Memahami konsep-konsep dasar yang penting',
      duration: '4 jam',
      isCompleted: true,
      lessons: [
        { id: 201, title: 'Konsep Dasar', duration: '45 menit', isCompleted: true },
        { id: 202, title: 'Syntax dan Expressions', duration: '1 jam', isCompleted: true },
        { id: 203, title: 'Data Types dan Structures', duration: '1 jam', isCompleted: true },
        { id: 204, title: 'Functions dan Modules', duration: '1 jam 15 menit', isCompleted: true }
      ]
    },
    {
      id: 3,
      title: 'Pemrograman Lanjutan',
      description: 'Mempelajari teknik-teknik tingkat lanjut',
      duration: '6 jam',
      isCompleted: false,
      lessons: [
        { id: 301, title: 'Asynchronous Programming', duration: '1 jam 30 menit', isCompleted: true },
        { id: 302, title: 'Error Handling', duration: '1 jam', isCompleted: true },
        { id: 303, title: 'Design Patterns', duration: '2 jam', isCompleted: false },
        { id: 304, title: 'Performance Optimization', duration: '1 jam 30 menit', isCompleted: false }
      ]
    },
    {
      id: 4,
      title: 'Project Praktis',
      description: 'Membangun aplikasi dunia nyata',
      duration: '8 jam',
      isCompleted: false,
      isLocked: true,
      lessons: [
        { id: 401, title: 'Project Setup', duration: '1 jam', isCompleted: false, isLocked: true },
        { id: 402, title: 'Building the Core Features', duration: '3 jam', isCompleted: false, isLocked: true },
        { id: 403, title: 'Testing', duration: '2 jam', isCompleted: false, isLocked: true },
        { id: 404, title: 'Deployment', duration: '2 jam', isCompleted: false, isLocked: true }
      ]
    }
  ];
  
  // Menghitung persentase penyelesaian modul
  const calculateCompletion = (module) => {
    if (module.isLocked) return 0;
    
    const totalLessons = module.lessons.length;
    const completedLessons = module.lessons.filter(lesson => lesson.isCompleted).length;
    
    return Math.round((completedLessons / totalLessons) * 100);
  };
  
  return (
    <div className="max-h-[calc(100vh-140px)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Learning Path</h1>
        <p className="text-sm text-gray-500">
          Jalur pembelajaran terstruktur untuk meningkatkan keahlian Anda
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar: Daftar Learning Path */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Pilih Learning Path</h2>
            </div>
            
            <div className="divide-y divide-gray-200 max-h-[calc(100vh-270px)] overflow-y-auto scrollbar-hide">
              {paths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setSelectedPathId(path.id)}
                  className={`w-full text-left px-4 py-4 hover:bg-gray-50 ${
                    path.id === selectedPathId ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className={`font-medium ${
                        path.id === selectedPathId ? 'text-primary-700' : 'text-gray-900'
                      }`}>
                        {path.title}
                      </h3>
                      <div className="mt-1 relative pt-1">
                        <div className="flex mb-1 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-primary-600">
                              {path.progress}% Selesai
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-primary-200">
                          <div
                            style={{ width: `${path.progress}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
                          ></div>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {path.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronRightIcon className={`h-5 w-5 ${
                      path.id === selectedPathId ? 'text-primary-600' : 'text-gray-400'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Konten: Detail Learning Path yang dipilih */}
        <div className="lg:col-span-2">
          {selectedPath && (
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide pr-2">
              {/* Header */}
              <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
                <div className="px-6 py-5 border-b border-gray-200">
                  <div className="flex items-center">
                    <AcademicCapIcon className="h-8 w-8 text-primary-600 mr-3" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedPath.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Tingkatkan keahlian Anda dalam {selectedPath.tags.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-700">Progress</h3>
                      <div className="mt-2 relative pt-1">
                        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-primary-200">
                          <div
                            style={{ width: `${selectedPath.progress}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{selectedPath.progress}% selesai</span>
                          <span>{selectedPath.completedModules}/{selectedPath.modules} modul</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-700">Skill yang didapat</h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {selectedPath.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Modul Pembelajaran</h3>
                    {selectedPath.progress < 100 && (
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        Lanjutkan Belajar
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    {modules.map((module) => {
                      const completion = calculateCompletion(module);
                      
                      return (
                        <div key={module.id} className={`border rounded-lg overflow-hidden ${
                          module.isLocked ? 'border-gray-200 bg-gray-50' : 'border-gray-200'
                        }`}>
                          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                            <div className="flex items-center">
                              {module.isCompleted ? (
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                              ) : module.isLocked ? (
                                <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                              ) : (
                                <BookOpenIcon className="h-5 w-5 text-primary-500 mr-2" />
                              )}
                              <h4 className={`font-medium ${
                                module.isLocked ? 'text-gray-500' : 'text-gray-900'
                              }`}>
                                {module.title}
                              </h4>
                            </div>
                            <div className="flex items-center text-sm">
                              <ClockIcon className={`h-4 w-4 mr-1 ${
                                module.isLocked ? 'text-gray-400' : 'text-gray-500'
                              }`} />
                              <span className={module.isLocked ? 'text-gray-400' : 'text-gray-500'}>
                                {module.duration}
                              </span>
                            </div>
                          </div>
                          
                          {!module.isLocked && (
                            <>
                              <div className="relative">
                                <div className="h-1 bg-gray-200">
                                  <div
                                    className="h-1 bg-primary-500"
                                    style={{ width: `${completion}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div className="px-4 py-2 text-sm text-gray-600">
                                <p>{module.description}</p>
                              </div>
                              
                              <div className="px-4 pb-3">
                                <div className="space-y-2">
                                  {module.lessons.map((lesson) => (
                                    <div
                                      key={lesson.id}
                                      className={`flex justify-between items-center py-2 px-3 rounded-md ${
                                        lesson.isCompleted
                                          ? 'bg-green-50'
                                          : lesson.isLocked
                                            ? 'bg-gray-50'
                                            : 'bg-primary-50'
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        {lesson.isCompleted ? (
                                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                                        ) : lesson.isLocked ? (
                                          <LockClosedIcon className="h-4 w-4 text-gray-400 mr-2" />
                                        ) : (
                                          <BookOpenIcon className="h-4 w-4 text-primary-500 mr-2" />
                                        )}
                                        <span className={`text-sm ${
                                          lesson.isLocked ? 'text-gray-500' : 'text-gray-800'
                                        }`}>
                                          {lesson.title}
                                        </span>
                                      </div>
                                      <div className="flex items-center text-xs">
                                        <ClockIcon className={`h-3 w-3 mr-1 ${
                                          lesson.isLocked ? 'text-gray-400' : 'text-gray-500'
                                        }`} />
                                        <span className={lesson.isLocked ? 'text-gray-400' : 'text-gray-500'}>
                                          {lesson.duration}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                          
                          {module.isLocked && (
                            <div className="p-4 text-center">
                              <p className="text-sm text-gray-500 mb-2">
                                Modul ini terkunci. Selesaikan modul sebelumnya untuk membukanya.
                              </p>
                              <button disabled className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-gray-500 bg-gray-100 cursor-not-allowed">
                                <LockClosedIcon className="h-4 w-4 mr-1" />
                                Terkunci
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPath; 