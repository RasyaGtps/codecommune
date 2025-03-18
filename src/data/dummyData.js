// Data dummy untuk CodeCommune

// Data pengguna
export const currentUser = {
  id: 1,
  name: 'Rayy',
  username: 'RayyDev',
  email: 'firdaus@example.com',
  avatar: 'https://i.pinimg.com/736x/dd/8a/37/dd8a37cb2457a5915e09b18f0f9a1e97.jpg',
  role: 'Full Stack Developer',
  company: 'Tech Innovate Indonesia',
  location: 'Jakarta, Indonesia',
  bio: 'Passionate developer dengan 5 tahun pengalaman di React dan Node.js',
  followers: 245,
  following: 132,
  badges: ['Pro Contributor', 'Project Leader', 'Top Mentor'],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB']
};

// Data komunitas
export const communities = [
  {
    id: 1,
    name: 'React Indonesia',
    members: 1250,
    avatar: 'https://i.pravatar.cc/150?img=30',
    isJoined: true
  },
  {
    id: 2,
    name: 'JavaScript Enthusiasts',
    members: 3421,
    avatar: 'https://i.pravatar.cc/150?img=31',
    isJoined: true
  },
  {
    id: 3,
    name: 'UI/UX Design',
    members: 987,
    avatar: 'https://i.pravatar.cc/150?img=32',
    isJoined: false
  },
  {
    id: 4,
    name: 'Backend Developers',
    members: 1758,
    avatar: 'https://i.pravatar.cc/150?img=33',
    isJoined: true
  },
  {
    id: 5,
    name: 'DevOps Indonesia',
    members: 842,
    avatar: 'https://i.pravatar.cc/150?img=34',
    isJoined: false
  }
];

// Data aktivitas feed
export const activityFeed = [
  {
    id: 1,
    type: 'post',
    user: {
      id: 2,
      name: 'Rina Wijaya',
      username: 'rina_dev',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    content: 'Baru saja menyelesaikan tutorial React Hooks terbaru. Keren banget fiturnya!',
    timestamp: '2 jam yang lalu',
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    type: 'project',
    user: {
      id: 3,
      name: 'Budi Santoso',
      username: 'budi_code',
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    content: 'Meluncurkan project open source baru: React Native UI Kit untuk aplikasi fintech',
    projectName: 'RN-Fintech-UI',
    timestamp: '5 jam yang lalu',
    stars: 17,
    forks: 3
  },
  {
    id: 3,
    type: 'discussion',
    user: {
      id: 4,
      name: 'Nina Putri',
      username: 'nina_tech',
      avatar: 'https://i.pravatar.cc/150?img=7'
    },
    content: 'Memulai diskusi baru tentang praktik terbaik TypeScript di aplikasi enterprise',
    discussionTitle: 'TypeScript Best Practices 2023',
    timestamp: 'Kemarin',
    participants: 12,
    replies: 34
  },
  {
    id: 4,
    type: 'event',
    user: {
      id: 5,
      name: 'Tech Community ID',
      username: 'tech_id',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
    content: 'Mengumumkan webinar gratis: "Scaling Microservices di Indonesia"',
    eventName: 'Scaling Microservices',
    timestamp: '2 hari yang lalu',
    attendees: 156,
    date: '12 April 2023'
  }
];

// Data trending discussions
export const trendingDiscussions = [
  {
    id: 1,
    title: 'Masa depan React dengan Concurrent Mode',
    community: 'React Indonesia',
    participants: 78,
    replies: 42,
    hot: true
  },
  {
    id: 2,
    title: 'Tips mengoptimalkan performa Next.js app',
    community: 'JavaScript Enthusiasts',
    participants: 45,
    replies: 31,
    hot: true
  },
  {
    id: 3,
    title: 'Pengalaman migrasi dari MongoDB ke PostgreSQL',
    community: 'Backend Developers',
    participants: 63,
    replies: 29,
    hot: false
  },
  {
    id: 4,
    title: 'Cara mendapatkan pekerjaan remote sebagai developer',
    community: 'Tech Career',
    participants: 112,
    replies: 87,
    hot: true
  }
];

// Data proyek unggulan
export const featuredProjects = [
  {
    id: 1,
    name: 'Indonesia Maps API',
    description: 'Library JavaScript untuk visualisasi data geografis Indonesia',
    owner: 'GeoTech Indonesia',
    stars: 342,
    forks: 87,
    language: 'JavaScript',
    tags: ['maps', 'visualization', 'data']
  },
  {
    id: 2,
    name: 'E-commerce Component Library',
    description: 'Kumpulan komponen React untuk aplikasi e-commerce',
    owner: 'ShopTech',
    stars: 215,
    forks: 42,
    language: 'TypeScript',
    tags: ['react', 'e-commerce', 'ui-components']
  },
  {
    id: 3,
    name: 'Auth Microservice',
    description: 'Microservice untuk autentikasi dan otorisasi berbasis JWT',
    owner: 'Security Guild',
    stars: 178,
    forks: 34,
    language: 'Node.js',
    tags: ['authentication', 'microservice', 'security']
  }
];

// Data acara mendatang
export const upcomingEvents = [
  {
    id: 1,
    name: 'Jakarta JavaScript Meetup',
    date: '15 April 2023',
    time: '19:00 WIB',
    location: 'Online via Zoom',
    attendees: 89,
    type: 'Meetup'
  },
  {
    id: 2,
    name: 'Workshop: Docker untuk Developer',
    date: '20 April 2023',
    time: '09:00 WIB',
    location: 'Tech Hub Jakarta',
    attendees: 45,
    type: 'Workshop'
  },
  {
    id: 3,
    name: 'Indonesia Tech Conference 2023',
    date: '5-7 Mei 2023',
    time: 'All day',
    location: 'JCC Senayan, Jakarta',
    attendees: 512,
    type: 'Conference'
  }
];

// Data statistik developer
export const developerStats = {
  totalContributions: 782,
  projectsCompleted: 8,
  discussionsStarted: 15,
  solutionsProvided: 47,
  reputationPoints: 1250,
  ranking: 'Gold',
  streak: 14
};

// Data challenges harian
export const dailyChallenges = [
  {
    id: 1,
    title: 'Optimasi algoritma pencarian',
    difficulty: 'Medium',
    points: 50,
    completedBy: 23,
    timeEstimate: '30 menit'
  },
  {
    id: 2,
    title: 'Debug aplikasi React dengan React DevTools',
    difficulty: 'Easy',
    points: 30,
    completedBy: 45,
    timeEstimate: '20 menit'
  },
  {
    id: 3,
    title: 'Buat REST API dengan Express.js',
    difficulty: 'Hard',
    points: 100,
    completedBy: 12,
    timeEstimate: '1 jam'
  }
];

// Data leaderboard
export const leaderboard = [
  {
    id: 1,
    name: 'Rachmat Ganteng',
    username: 'rachmat_dev',
    avatar: 'https://i.pravatar.cc/150?img=11',
    points: 3450,
    badges: 12
  },
  {
    id: 2,
    name: 'Dewi Candra',
    username: 'dewi_coder',
    avatar: 'https://i.pravatar.cc/150?img=12',
    points: 2980,
    badges: 10
  },
  {
    id: 3,
    name: 'Muhammad Firdaus',
    username: 'firdaus_dev',
    avatar: 'https://i.pravatar.cc/150?img=1',
    points: 2750,
    badges: 9
  },
  {
    id: 4,
    name: 'Anisa Permata',
    username: 'anisa_tech',
    avatar: 'https://i.pravatar.cc/150?img=13',
    points: 2680,
    badges: 8
  },
  {
    id: 5,
    name: 'Reza Programmer',
    username: 'reza_p',
    avatar: 'https://i.pravatar.cc/150?img=14',
    points: 2540,
    badges: 7
  }
];

// Data koneksi yang disarankan
export const suggestedConnections = [
  {
    id: 1,
    name: 'Indra Kusuma',
    username: 'indra_dev',
    avatar: 'https://i.pravatar.cc/150?img=15',
    role: 'Frontend Developer',
    company: 'Tokopedia',
    mutualConnections: 5
  },
  {
    id: 2,
    name: 'Siti Nurhayati',
    username: 'siti_code',
    avatar: 'https://i.pravatar.cc/150?img=16',
    role: 'Backend Developer',
    company: 'Gojek',
    mutualConnections: 3
  },
  {
    id: 3,
    name: 'Bambang Wijaya',
    username: 'bambang_tech',
    avatar: 'https://i.pravatar.cc/150?img=17',
    role: 'DevOps Engineer',
    company: 'Bukalapak',
    mutualConnections: 2
  }
];

// Data learning paths
export const learningPaths = [
  {
    id: 1,
    title: 'Menjadi Full Stack Developer',
    progress: 65,
    modules: 12,
    completedModules: 8,
    tags: ['react', 'node.js', 'mongodb']
  },
  {
    id: 2,
    title: 'Menguasai DevOps',
    progress: 30,
    modules: 15,
    completedModules: 4,
    tags: ['docker', 'kubernetes', 'ci/cd']
  },
  {
    id: 3,
    title: 'Mobile App Development',
    progress: 10,
    modules: 10,
    completedModules: 1,
    tags: ['react-native', 'firebase', 'redux']
  }
];

// Data menu navigasi
export const navigationItems = [
  { id: 1, name: 'Dashboard', path: '/', icon: 'home' },
  { id: 2, name: 'Komunitas', path: '/communities', icon: 'users' },
  { id: 3, name: 'Proyek', path: '/projects', icon: 'code' },
  { id: 4, name: 'Diskusi', path: '/discussions', icon: 'chat' },
  { id: 5, name: 'Acara', path: '/events', icon: 'calendar' },
  { id: 6, name: 'Learning Path', path: '/learning', icon: 'academic-cap' },
  { id: 7, name: 'Resources', path: '/resources', icon: 'book-open' },
  { id: 8, name: 'Job Board', path: '/jobs', icon: 'briefcase' }
]; 