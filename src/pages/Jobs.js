import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BriefcaseIcon,
  SearchIcon,
  LocationMarkerIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChipIcon,
  AcademicCapIcon,
  OfficeBuildingIcon,
  ExternalLinkIcon,
  FilterIcon
} from '@heroicons/react/outline';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all', // all, fulltime, parttime, contract
    location: 'all', // all, remote, onsite, hybrid
    experience: 'all' // all, junior, mid, senior
  });

  // Data dummy untuk jobs
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Indonesia',
      location: 'Remote',
      type: 'fulltime',
      salary: 'Rp 20.000.000 - 35.000.000',
      experience: 'senior',
      posted: '2 hari yang lalu',
      applicants: 12,
      description: 'Kami mencari Senior Frontend Developer yang berpengalaman dalam React.js dan ekosistemnya',
      requirements: [
        'Minimal 5 tahun pengalaman dengan React.js',
        'Familiar dengan state management (Redux, MobX)',
        'Pemahaman yang kuat tentang JavaScript modern',
        'Pengalaman dengan testing dan CI/CD'
      ],
      skills: ['React.js', 'TypeScript', 'Redux', 'Jest', 'Webpack'],
      logo: 'https://source.unsplash.com/100x100/?tech',
      companySize: '100-500 karyawan',
      industry: 'Technology'
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'Startup Digital',
      location: 'Jakarta',
      type: 'fulltime',
      salary: 'Rp 15.000.000 - 25.000.000',
      experience: 'mid',
      posted: '3 hari yang lalu',
      applicants: 8,
      description: 'Bergabunglah dengan tim engineering kami untuk membangun sistem backend yang scalable',
      requirements: [
        'Minimal 3 tahun pengalaman dengan Node.js',
        'Familiar dengan database SQL dan NoSQL',
        'Pemahaman tentang microservices',
        'Pengalaman dengan AWS'
      ],
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      logo: 'https://source.unsplash.com/100x100/?startup',
      companySize: '50-100 karyawan',
      industry: 'Financial Technology'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Hybrid',
      type: 'fulltime',
      salary: 'Rp 12.000.000 - 20.000.000',
      experience: 'mid',
      posted: '1 minggu yang lalu',
      applicants: 15,
      description: 'Mencari UI/UX Designer yang kreatif untuk merancang produk digital yang inovatif',
      requirements: [
        'Minimal 3 tahun pengalaman dalam UI/UX Design',
        'Portfolio yang kuat',
        'Familiar dengan Figma dan Adobe Suite',
        'Pengalaman dalam user research'
      ],
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      logo: 'https://source.unsplash.com/100x100/?design',
      companySize: '10-50 karyawan',
      industry: 'Creative Agency'
    },
    {
      id: 4,
      title: 'Junior Mobile Developer',
      company: 'Mobile Tech',
      location: 'Surabaya',
      type: 'parttime',
      salary: 'Rp 8.000.000 - 12.000.000',
      experience: 'junior',
      posted: '5 hari yang lalu',
      applicants: 20,
      description: 'Kesempatan untuk fresh graduate bergabung dengan tim mobile development kami',
      requirements: [
        'Minimal 1 tahun pengalaman atau projek mobile development',
        'Familiar dengan Flutter atau React Native',
        'Pemahaman dasar tentang REST API',
        'Kemampuan belajar yang cepat'
      ],
      skills: ['Flutter', 'Dart', 'React Native', 'Git'],
      logo: 'https://source.unsplash.com/100x100/?mobile',
      companySize: '10-50 karyawan',
      industry: 'Mobile Technology'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filters.type === 'all' || job.type === filters.type;
    const matchesLocation = filters.location === 'all' || job.location.toLowerCase() === filters.location;
    const matchesExperience = filters.experience === 'all' || job.experience === filters.experience;
    
    return matchesSearch && matchesType && matchesLocation && matchesExperience;
  });

  const experienceLevels = [
    { id: 'all', name: 'Semua Level' },
    { id: 'junior', name: 'Junior' },
    { id: 'mid', name: 'Mid-Level' },
    { id: 'senior', name: 'Senior' }
  ];

  const jobTypes = [
    { id: 'all', name: 'Semua Tipe' },
    { id: 'fulltime', name: 'Full-time' },
    { id: 'parttime', name: 'Part-time' },
    { id: 'contract', name: 'Contract' }
  ];

  const locations = [
    { id: 'all', name: 'Semua Lokasi' },
    { id: 'remote', name: 'Remote' },
    { id: 'onsite', name: 'On-site' },
    { id: 'hybrid', name: 'Hybrid' }
  ];

  return (
    <div className="max-h-[calc(100vh-140px)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
        <p className="text-sm text-gray-500">
          Temukan peluang karir terbaik di industri teknologi
        </p>
      </div>

      {/* Search dan Filter */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari pekerjaan..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          >
            {jobTypes.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>

          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>

          <select
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          >
            {experienceLevels.map(level => (
              <option key={level.id} value={level.id}>{level.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Daftar Pekerjaan */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <OfficeBuildingIcon className="h-4 w-4 mr-1" />
                    {job.company}
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {job.companySize}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <LocationMarkerIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BriefcaseIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                      {jobTypes.find(t => t.id === job.type)?.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <AcademicCapIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                      {experienceLevels.find(l => l.id === job.experience)?.name}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                        >
                          <ChipIcon className="h-3 w-3 mr-1" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1.5" />
                      Diposting {job.posted}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="h-4 w-4 mr-1.5" />
                      {job.applicants} pelamar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs; 