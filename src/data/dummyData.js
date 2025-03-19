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

export const communities = [
  {
    id: 1,
    name: 'React Indonesia',
    description: 'Komunitas pengembang React terbesar di Indonesia. Diskusi, tutorial, dan event tentang ekosistem React.',
    members: 1250,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsoAHcu7RzGzUcl-dOR1_yx8ij4XXvGdeaQ&s',
    isJoined: true,
    tags: ['react', 'frontend', 'javascript', 'web']
  },
  {
    id: 2,
    name: 'JavaScript Enthusiasts',
    description: 'Komunitas untuk semua pecinta JavaScript, dari pemula hingga ahli. Berbagi pengetahuan tentang JavaScript dan ekosistemnya.',
    members: 3421,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    banner: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    isJoined: true,
    tags: ['javascript', 'ecmascript', 'typescript', 'frontend']
  },
  {
    id: 3,
    name: 'UI/UX Design',
    description: 'Komunitas desainer UI/UX di Indonesia. Berdiskusi tentang desain, pengalaman pengguna, dan tren UI/UX terkini.',
    members: 987,
    avatar: 'https://cdn-icons-png.flaticon.com/512/5278/5278663.png',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVED2E9riwsu52Un9Xd_fgsTEL_Bm25Ps8aQ&s',
    isJoined: false,
    tags: ['ui', 'ux', 'design', 'figma', 'user-experience']
  },
  {
    id: 4,
    name: 'Backend Developers',
    description: 'Komunitas pengembang backend Indonesia. Diskusi tentang API, database, arsitektur, dan teknologi server.',
    members: 1758,
    avatar: 'https://cdn-icons-png.flaticon.com/512/8099/8099237.png',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90Z8t3ys3DEr3dHQP3rcWBiPHsNAfsIt6YA&s',
    isJoined: true,
    tags: ['backend', 'api', 'database', 'cloud', 'server']
  },
  {
    id: 5,
    name: 'DevOps Indonesia',
    description: 'Komunitas DevOps Indonesia untuk berbagi pengetahuan tentang otomatisasi, CI/CD, infrastruktur, dan cloud.',
    members: 842,
    avatar: 'https://cdn-icons-png.flaticon.com/512/8637/8637727.png',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXslgYTaelR64-w7iRysWaiRZzQSXennrz0g&s',
    isJoined: false,
    tags: ['devops', 'cloud', 'docker', 'kubernetes', 'ci-cd']
  },
  {
    id: 6,
    name: 'Flutter Indonesia',
    description: 'Komunitas pengembang Flutter di Indonesia. Berbagi tips dan trik pengembangan aplikasi mobile dengan Flutter.',
    members: 1125,
    avatar: 'https://storage.googleapis.com/cms-storage-bucket/7cd0a0d99f0b5350ede8.png',
    banner: 'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png',
    isJoined: false,
    tags: ['flutter', 'dart', 'mobile', 'cross-platform', 'ui']
  },
  {
    id: 7,
    name: 'Data Science ID',
    description: 'Forum data scientist dan analis data Indonesia. Berbagi tips, tutorial, dan diskusi tentang ilmu data.',
    members: 954,
    avatar: 'https://cdn-icons-png.flaticon.com/512/9190/9190721.png',
    banner: 'https://sainsdata.pens.ac.id/wp-content/uploads/2024/02/jurusan-sains-data.jpg',
    isJoined: false,
    tags: ['data-science', 'machine-learning', 'python', 'analytics', 'big-data']
  },
  {
    id: 8,
    name: 'Cloud Native Indonesia',
    description: 'Komunitas untuk teknologi cloud native, kubernetes, microservices, dan infrastruktur modern di Indonesia.',
    members: 732,
    avatar: 'https://cdn-icons-png.flaticon.com/512/4252/4252374.png',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHnNwQmKb4h_KMOldiKdtictDwV2m2YZ-Ew&s',
    isJoined: true,
    tags: ['cloud', 'kubernetes', 'microservices', 'docker', 'serverless']
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
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/3.jpg'
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
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg'
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
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/4.jpg'
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
      avatar: 'https://cdn-icons-png.flaticon.com/512/8090/8090261.png'
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
    description: 'Library JavaScript untuk visualisasi data geografis Indonesia dengan berbagai fitur interaktif dan layer data demografis.',
    owner: 'GeoTech Indonesia',
    stars: 342,
    watchers: 128,
    contributors: 24,
    forks: 87,
    language: 'JavaScript',
    tags: ['maps', 'visualization', 'data', 'geospatial', 'web'],
    rating: 4,
    lastUpdated: '2 hari yang lalu',
    isFeatured: true,
    isRecent: false
  },
  {
    id: 2,
    name: 'E-commerce Component Library',
    description: 'Kumpulan komponen React untuk aplikasi e-commerce yang mendukung aksesibilitas, responsif, dan kustomisasi tema.',
    owner: 'ShopTech',
    stars: 215,
    watchers: 95,
    contributors: 17,
    forks: 42,
    language: 'TypeScript',
    tags: ['react', 'e-commerce', 'ui-components', 'frontend', 'web'],
    rating: 5,
    lastUpdated: '1 minggu yang lalu',
    isFeatured: true,
    isRecent: false
  },
  {
    id: 3,
    name: 'Auth Microservice',
    description: 'Microservice untuk autentikasi dan otorisasi berbasis JWT dengan dukungan OAuth2, 2FA, dan login sosial.',
    owner: 'Security Guild',
    stars: 178,
    watchers: 64,
    contributors: 12,
    forks: 34,
    language: 'Node.js',
    tags: ['authentication', 'microservice', 'security', 'api', 'backend'],
    rating: 4,
    lastUpdated: '3 hari yang lalu',
    isFeatured: true,
    isRecent: false
  },
  {
    id: 4,
    name: 'Indonesian NLP Toolkit',
    description: 'Library Natural Language Processing untuk Bahasa Indonesia dengan dukungan untuk analisis sentimen, klasifikasi teks, dan ekstraksi entity.',
    owner: 'AI Indonesia',
    stars: 156,
    watchers: 73,
    contributors: 9,
    forks: 28,
    language: 'Python',
    tags: ['nlp', 'ai', 'machine-learning', 'data-science', 'language'],
    rating: 5,
    lastUpdated: '2 minggu yang lalu',
    isFeatured: false,
    isRecent: false
  },
  {
    id: 5,
    name: 'BalisaJS',
    description: 'Framework JavaScript ringan untuk aplikasi web dengan fokus pada performa dan developer experience.',
    owner: 'Balisa Team',
    stars: 423,
    watchers: 187,
    contributors: 32,
    forks: 106,
    language: 'JavaScript',
    tags: ['framework', 'javascript', 'frontend', 'web', 'performance'],
    rating: 4,
    lastUpdated: '1 hari yang lalu',
    isFeatured: false,
    isRecent: true
  },
  {
    id: 6,
    name: 'Flutter Fintech UI Kit',
    description: 'Paket komponen UI untuk aplikasi fintech Flutter dengan desain modern dan workflow transaksi lengkap.',
    owner: 'FinDev Indonesia',
    stars: 287,
    watchers: 124,
    contributors: 18,
    forks: 65,
    language: 'Dart',
    tags: ['flutter', 'mobile', 'ui-kit', 'fintech', 'finance'],
    rating: 5,
    lastUpdated: '5 hari yang lalu',
    isFeatured: false,
    isRecent: true
  },
  {
    id: 7,
    name: 'Serverless API Boilerplate',
    description: 'Template untuk membangun API serverless dengan AWS Lambda, API Gateway, dan DynamoDB dengan fitur otentikasi terintegrasi.',
    owner: 'Cloud Native ID',
    stars: 132,
    watchers: 43,
    contributors: 7,
    forks: 29,
    language: 'TypeScript',
    tags: ['serverless', 'aws', 'api', 'cloud', 'backend'],
    rating: 3,
    lastUpdated: '1 bulan yang lalu',
    isFeatured: false,
    isRecent: false
  },
  {
    id: 8,
    name: 'React Admin Dashboard',
    description: 'Template admin dashboard React dengan tema yang dapat dikustomisasi, banyak komponen, dan integrasi dengan berbagai backend.',
    owner: 'UI Masters',
    stars: 345,
    watchers: 156,
    contributors: 21,
    forks: 78,
    language: 'TypeScript',
    tags: ['react', 'admin', 'dashboard', 'ui', 'frontend'],
    rating: 4,
    lastUpdated: '2 minggu yang lalu',
    isFeatured: false,
    isRecent: false
  },
  {
    id: 9,
    name: 'IoT Home Platform',
    description: 'Platform open source untuk mengontrol dan memantau perangkat IoT rumah dengan dashboard web dan aplikasi mobile.',
    owner: 'Smart Home ID',
    stars: 178,
    watchers: 89,
    contributors: 15,
    forks: 42,
    language: 'JavaScript',
    tags: ['iot', 'smart-home', 'raspberry-pi', 'hardware', 'embedded'],
    rating: 4,
    lastUpdated: '3 minggu yang lalu',
    isFeatured: false,
    isRecent: true
  }
];

// Data acara mendatang
export const upcomingEvents = [
  {
    id: 1,
    title: 'React Conf Indonesia 2023',
    date: '15 Juni 2023',
    time: '09:00 - 17:00 WIB',
    location: 'Jakarta Convention Center',
    organizer: 'React Indonesia',
    attendees: 350,
    isOnline: false,
    isRegistered: true
  },
  {
    id: 2,
    title: 'Workshop: Building Microservices with Node.js',
    date: '22 Juni 2023',
    time: '13:00 - 16:00 WIB',
    location: 'Online via Zoom',
    organizer: 'Backend Developers',
    attendees: 120,
    isOnline: true,
    isRegistered: false
  },
  {
    id: 3,
    title: 'UI/UX Meetup: Design System',
    date: '28 Juni 2023',
    time: '19:00 - 21:00 WIB',
    location: 'Co-working Space XYZ, Bandung',
    organizer: 'UI/UX Design',
    attendees: 75,
    isOnline: false,
    isRegistered: true
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
    completed: 23,
    total: 30,
    dueDate: '2 jam lagi'
  },
  {
    id: 2,
    title: 'Debug aplikasi React dengan React DevTools',
    difficulty: 'Easy',
    points: 30,
    completed: 45,
    total: 20,
    dueDate: 'Hari ini'
  },
  {
    id: 3,
    title: 'Buat REST API dengan Express.js',
    difficulty: 'Hard',
    points: 100,
    completed: 12,
    total: 60,
    dueDate: '2 hari lagi'
  }
];

// Data leaderboard
export const leaderboard = [
  {
    id: 1,
    name: 'Rachmat Ganteng',
    username: 'rachmat_dev',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
    points: 3450,
    badge: 'Diamond'
  },
  {
    id: 2,
    name: 'Dewi Candra',
    username: 'dewi_coder',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg',
    points: 2980,
    badge: 'Platinum'
  },
  {
    id: 3,
    name: 'Muhammad Firdaus',
    username: 'firdaus_dev',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
    points: 2750,
    badge: 'Gold'
  }
];

// Data koneksi yang disarankan
export const suggestedConnections = [
  {
    id: 1,
    name: 'Indra Kusuma',
    username: 'indra_dev',
    role: 'Frontend Developer',
    company: 'Tokopedia',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
    mutualConnections: 5
  },
  {
    id: 2,
    name: 'Siti Nurhayati',
    username: 'siti_dev',
    role: 'Backend Developer',
    company: 'Gojek',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
    mutualConnections: 3
  },
  {
    id: 3,
    name: 'Bambang Wijaya',
    username: 'bambang_dev',
    role: 'DevOps Engineer',
    company: 'Bukalapak',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
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