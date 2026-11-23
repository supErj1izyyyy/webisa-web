import type { ServiceItem, PortfolioItem, WorkflowStep } from '../types';

export const SITE_CONFIG = {
  name: 'Webisa',
  fullName: 'Webisa Website Studio',
  tagline: 'website-mu, but make it ✨ NEXT LEVEL ✨',
  punchline: '“Bisnismu udah keren, Masa Websitemu jadul”',
  valueProp: 'Bikin Website dengan visual yang bikin betah customer',
  location: 'Malang, Jawa Timur',
  instagramUrl: 'https://www.instagram.com/webisa_website/',
  instagramHandle: '@webisa_website',
  whatsappNumber: '6281252060132',
  email: 'halo.webisa@gmail.com',
  websiteUrl: 'https://webisa.vercel.app'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing',
    title: 'Landing Page Interaktif',
    category: 'High Conversion & Product Launch',
    tagline: 'Halaman promosi fokus tinggi untuk konversi penjualan instan',
    description: 'Dirancang khusus untuk kampanye produk, launching brand, atau promosi jasa. Dilengkapi animasi micro-interaction halus dan struktur copywriting persuasif yang mengarahkan pengunjung langsung melakukan pembelian.',
    benefits: [
      'Struktur AIDA untuk konversi lead & penjualan',
      'Micro-interactions & animasi modern',
      'Integrasi tombol WhatsApp & formulir direct',
      'Mobile-first responsive (100% cepat di ponsel)'
    ],
    recommendedFor: 'Peluncuran produk baru, event kampus/bisnis, promosi jasa UMKM, promo diskon',
    startingPrice: 650000,
    deliveryDays: '3-5 Hari Kerja',
    badge: 'Paling Populer',
    accentColor: '#2C29FF'
  },
  {
    id: 'company',
    title: 'Company Profile Elegan',
    category: 'Corporate Identity & Brand Trust',
    tagline: 'Wajah digital profesional yang membangun kepercayaan klien & investor',
    description: 'Mempresentasikan visi, layanan, rekam jejak, dan portofolio perusahaan kamu dengan estetika modern. Menjadikan bisnismu tampak kredibel dan berkelas saat ditinjau oleh calon partner.',
    benefits: [
      'Navigasi multi-halaman atau single sleek narrative',
      'Section profil tim, visi-misi, & portofolio',
      'Domain custom .com / .id & integrasi Google Maps',
      'SEO dasar agar terindeks di pencarian Google'
    ],
    recommendedFor: 'Perusahaan rintisan, agensi konsultan, klinik, kontraktor, firma jasa',
    startingPrice: 1200000,
    deliveryDays: '5-7 Hari Kerja',
    accentColor: '#00B349'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Toko Online',
    category: 'Sales Automation & Catalog',
    tagline: 'Katalog belanja otomatis yang memudahkan customer order 24/7',
    description: 'Toko digital mandiri tanpa potongan fee marketplace yang besar. Dilengkapi etalase produk interaktif, filter kategori cepat, checkout WhatsApp atau payment gateway otomatis.',
    benefits: [
      'Katalog produk visual dengan varian & galeri',
      'Fitur keranjang belanja (Shopping Cart)',
      'Direct order to WhatsApp dengan format rapi',
      'Dashboard manajemen produk yang mudah diisi'
    ],
    recommendedFor: 'Brand fashion, merchandise, kuliner, aksesoris, toko retail modern',
    startingPrice: 1750000,
    deliveryDays: '7-12 Hari Kerja',
    badge: 'Siap Jualan',
    accentColor: '#FF1E27'
  },
  {
    id: 'portfolio',
    title: 'Website Portfolio Kreatif',
    category: 'Personal Branding & Creative Studio',
    tagline: 'Pameran karya estetik yang membuat klien langsung ingin hire kamu',
    description: 'Dibuat untuk kreator konten, arsitek, fotografer, developer, dan desainer. Tata letak grid visual dinamis dengan modal preview resolusi tinggi untuk menonjolkan karya terbaikmu.',
    benefits: [
      'Galeri interaktif dengan filter kategori karya',
      'Story case-study detail di setiap proyek',
      'Tautan resume / CV digital & kontak cepat',
      'Optimasi visual cepat tanpa kompresi pecah'
    ],
    recommendedFor: 'Fotografer, arsitek, desainer grafis, videografer, konsultan lepas',
    startingPrice: 850000,
    deliveryDays: '4-6 Hari Kerja',
    accentColor: '#FF2E93'
  },
  {
    id: 'custom',
    title: 'Custom Web Applications',
    category: 'Advanced Interactive & Tech-Driven',
    tagline: 'Fitur unik yang tidak ada di template WordPress biasa',
    description: 'Butuh kalkulator harga real-time, simulasi 3D interaktif, generator dokumen, atau sistem reservasi khusus? Kami membangunnya dari nol menggunakan React, Three.js, dan arsitektur modern.',
    benefits: [
      'Pengembangan fitur komputasi / logika interaktif',
      'Dukungan WebGL 3D Canvas & animasi dinamis',
      'Integrasi API pihak ketiga (payment, database)',
      'Performa ultra cepat tanpa bloatware CMS'
    ],
    recommendedFor: 'Technopreneur, startup teknologi, SaaS, layanan kalkulasi tarif khusus',
    startingPrice: 2500000,
    deliveryDays: '10-18 Hari Kerja',
    badge: 'Next Level',
    accentColor: '#2C29FF'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'treedible',
    title: 'Treedible 3D Printing Service',
    client: 'Treedible (Technopreneur Project)',
    category: 'Custom Interactive Web & Slicing Estimator',
    description: 'Website resmi layanan cetak 3D FDM modern berbasis mesin Bambu Lab P1S di Malang. Dilengkapi fitur kalkulator instan dengan Three.js WebGL yang membedah geometri .STL/.OBJ, menghitung gramasi filament otomatis, dan terhubung langsung ke WhatsApp pemesanan.',
    image: './images/treedible-calculator.png',
    liveUrl: 'https://supErj1izyyyy.github.io/treedible-web/',
    tags: ['React 19', 'Three.js WebGL', 'Tailwind CSS', 'Instant Price Engine', 'Bambu Lab P1S Integration'],
    highlights: [
      'Client-side 3D parser untuk file .STL & .OBJ',
      'Estimator berat filament real-time berdasarkan infill & densitas',
      'Kamera orbit 360° interaktif di atas build-plate 256mm',
      'Dark/Light mode persistence'
    ],
    isFeatured: true
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Brainstorm & Discovery',
    description: 'Diskusi santai seputar target bisnismu, referensi visual yang kamu suka, dan struktur konten utama.',
    duration: '1-2 Hari',
    deliverables: ['Sitemap website', 'Moodboard visual & color palette', 'Rangkuman fitur utama']
  },
  {
    step: '02',
    title: 'Desain UI/UX Interaktif',
    description: 'Kami merancang tampilan visual yang modern, interaktif, dan sesuai karakter brand bisnismu.',
    duration: '2-3 Hari',
    deliverables: ['Desain mockup responsif', 'Penataan tipografi & elemen grafis', 'Preview alur interaksi']
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Proses koding menggunakan teknologi modern (React / Next.js / Tailwind) agar website kencang dan responsif.',
    duration: '3-5 Hari',
    deliverables: ['Website fungsional di staging link', 'Pengujian mobile, tablet, & desktop', 'Optimasi kecepatan loading']
  },
  {
    step: '04',
    title: 'Go Live & Handover',
    description: 'Website resmi meluncur dengan domain pilihanmu, terhubung ke Google, WhatsApp, dan siap digunakan promosi.',
    duration: '1 Hari',
    deliverables: ['Domain & SSL aktif', 'Akses dashboard / source code', 'Panduan update konten']
  }
];

export const FAQS = [
  {
    question: 'Berapa lama proses pembuatan website di Webisa?',
    answer: 'Rata-rata pengerjaan berkisar antara 3 hingga 7 hari kerja untuk Landing Page dan Company Profile standar. Untuk aplikasi custom dengan fitur interaktif seperti kalkulator atau 3D, memakan waktu 10-14 hari.'
  },
  {
    question: 'Apakah saya perlu menyiapkan teks materi dan foto sendiri?',
    answer: 'Jika sudah ada materi, tim kami akan merapikan dan menatanya secara profesional. Namun jika belum ada, tim Webisa siap membantu menyusun copywriting yang memikat customer serta memilih aset visual beresolusi tinggi.'
  },
  {
    question: 'Bagaimana jika website diakses lewat ponsel / smartphone?',
    answer: '100% website buatan Webisa mengadopsi prinsip mobile-first. Tampilan otomatis menyesuaikan ukuran layar ponsel, ringan dibuka di jaringan seluler, dan tombol WhatsApp selalu mudah dijangkau jari.'
  },
  {
    question: 'Apakah ada biaya langganan bulanan tersembunyi?',
    answer: 'Tidak ada biaya bulanan tersembunyi. Biaya awal sudah mencakup pengerjaan website, setup hosting, dan SSL. Di tahun berikutnya kamu hanya perlu memperpanjang sewa domain tahunan standar.'
  },
  {
    question: 'Bisa minta revisi jika ada bagian yang kurang pas?',
    answer: 'Tentu saja! Kami memberikan kesempatan revisi minor gratis untuk memastikan warna, font, dan konten sudah benar-benar sesuai dengan ekspektasi bisnismu.'
  }
];

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

export function generateWhatsAppConsultationUrl(serviceTitle?: string, note?: string): string {
  const phone = SITE_CONFIG.whatsappNumber;
  const greeting = `Halo Tim Webisa, saya melihat profil Webisa di Instagram @webisa_website dan tertarik untuk konsultasi pembuatan website.`;
  const serviceDetail = serviceTitle ? `\nLayanan yang diminati: ${serviceTitle}` : '';
  const extraNote = note ? `\nCatatan kebutuhan: ${note}` : '';
  const closing = `\nBisa dibantu untuk estimasi dan alur kerjasamanya? Terima kasih!`;
  
  const text = `${greeting}${serviceDetail}${extraNote}${closing}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
