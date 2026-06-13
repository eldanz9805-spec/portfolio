import villaAdmin from '../assets/projects/villa-admin.png'
import villaMobile from '../assets/projects/villa-mobile.png'
import cirengAsgard from '../assets/projects/cireng-asgard.png'

export const featuredProjects = [
  {
    slug: 'villa-adhita-reservation-system',
    title: 'Villa Adhita Reservation System',
    role: 'Fullstack Developer',
    description:
      'Sistem reservasi villa berbasis web yang dikembangkan menggunakan Laravel sebagai project perkuliahan. Memiliki dashboard admin untuk mengelola kamar, booking, check-in, pengguna, serta menghasilkan laporan operasional.',
    shortDescription:
      'Sistem reservasi villa berbasis web untuk mengelola kamar, booking, check-in, pengguna, dan laporan operasional.',
    challenge:
      'Tantangan utama project ini adalah membuat sistem reservasi yang dapat menggantikan proses manual agar data kamar, booking, check-in, dan laporan lebih terstruktur.',
    solution:
      'Solusi yang dibuat adalah dashboard admin berbasis Laravel dengan fitur pengelolaan kamar, booking, check-in, pengguna, dan laporan operasional.',
    result:
      'Hasil akhirnya adalah sistem reservasi yang lebih rapi, mudah digunakan admin, dan membantu proses operasional villa menjadi lebih efisien.',
    image: villaAdmin,
    gallery: [villaAdmin],
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: '',
    demo: '',
    figma: '',
  },
  {
    slug: 'villa-adhita-mobile-app',
    title: 'Villa Adhita Mobile App',
    role: 'Flutter Developer',
    description:
      'Aplikasi mobile reservasi villa yang memungkinkan pengguna login, melihat informasi villa, dan melakukan pemesanan secara praktis melalui perangkat mobile.',
    shortDescription:
      'Aplikasi mobile reservasi villa untuk melihat informasi villa dan melakukan pemesanan melalui perangkat mobile.',
    challenge:
      'Tantangan project ini adalah membuat tampilan mobile yang sederhana, nyaman digunakan, dan mudah dipahami oleh pengguna.',
    solution:
      'Aplikasi dibuat menggunakan Flutter dengan alur login, tampilan informasi villa, dan proses pemesanan yang lebih praktis.',
    result:
      'Aplikasi membantu pengguna melakukan reservasi villa dengan lebih mudah melalui smartphone.',
    image: villaMobile,
    gallery: [villaMobile],
    tech: ['Flutter', 'Dart'],
    github: '',
    demo: '',
    figma: '',
  },
  {
    slug: 'cireng-asgard-uiux',
    title: 'Cireng Asgard UI/UX',
    role: 'UI/UX Designer',
    description:
      'Perancangan antarmuka dan pengalaman pengguna untuk Cireng Asgard mulai dari user flow, wireframe, hingga high fidelity prototype menggunakan Figma.',
    shortDescription:
      'Desain UI/UX untuk produk Cireng Asgard mulai dari user flow, wireframe, sampai prototype.',
    challenge:
      'Tantangan project ini adalah membuat desain yang menarik untuk produk makanan, tetapi tetap mudah dipahami oleh pengguna.',
    solution:
      'Desain dibuat melalui proses user flow, wireframe, dan high fidelity prototype menggunakan Figma.',
    result:
      'Hasilnya adalah rancangan UI/UX yang lebih modern, jelas, dan siap dikembangkan ke tahap website atau aplikasi.',
    image: cirengAsgard,
    gallery: [cirengAsgard],
    tech: ['Figma', 'Prototype', 'UI/UX'],
    github: '',
    demo: '',
    figma: '',
  },
]

export const otherProjects = [
  {
    title: 'Bersih Iman',
    category: 'UI/UX Design',
    image: cirengAsgard,
    tech: ['Figma'],
  },
  {
    title: 'Zensio Kost',
    category: 'UI/UX Design',
    image: villaMobile,
    tech: ['Figma'],
  },
  {
    title: 'Bouquet',
    category: 'UI/UX Design',
    image: cirengAsgard,
    tech: ['Figma'],
  },
  {
    title: 'Villa Adhita UI/UX',
    category: 'UI/UX Design',
    image: villaAdmin,
    tech: ['Figma'],
  },
  {
    title: 'Landing Page Bootstrap',
    category: 'Frontend',
    image: villaAdmin,
    tech: ['Bootstrap'],
  },
]