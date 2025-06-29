
import { useState, useEffect } from 'react';

export type Language = 'id' | 'en' | 'ja';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    description: string;
    viewWork: string;
    downloadCV: string;
  };
  about: {
    title: string;
    subtitle: string;
    journey: string;
    journeyText1: string;
    journeyText2: string;
    beyond: string;
    beyondText: string;
    whoIAm: string;
    whoIAmDesc: string;
    whatILove: string;
    whatILoveDesc: string;
    myApproach: string;
    myApproachDesc: string;
    myGoal: string;
    myGoalDesc: string;
    experience: string;
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    liveDemo: string;
    source: string;
    viewAll: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      skills: 'Keahlian',
      contact: 'Kontak'
    },
    hero: {
      greeting: 'Hai, saya',
      name: 'Alex Johnson',
      roles: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
      description: 'Bersemangat dalam menciptakan pengalaman digital yang indah, fungsional, dan berpusat pada pengguna. Mari bangun sesuatu yang luar biasa bersama.',
      viewWork: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV'
    },
    about: {
      title: 'Tentang',
      subtitle: 'Saya adalah developer kreatif yang suka mengubah ide menjadi kenyataan melalui kode. Dengan latar belakang yang kuat dalam pengembangan frontend dan backend, saya menciptakan solusi komprehensif yang memberikan nilai nyata.',
      journey: 'Perjalanan Saya',
      journeyText1: 'Dimulai sebagai mahasiswa yang penasaran dan jatuh cinta dengan pemrograman saat pertama kali menulis "Hello World". Sejak itu, saya telah menjalani perjalanan luar biasa dalam pembelajaran berkelanjutan dan pertumbuhan di industri teknologi.',
      journeyText2: 'Saya memiliki kesempatan untuk bekerja dengan startup dan perusahaan mapan, membantu mereka mewujudkan visi mereka melalui solusi web yang inovatif.',
      beyond: 'Di Luar Koding',
      beyondText: 'Ketika tidak sedang coding, Anda akan menemukan saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau menikmati fotografi outdoor. Saya percaya bahwa pengalaman yang beragam membuat saya menjadi developer yang lebih baik dan pemecah masalah yang lebih kreatif.',
      whoIAm: 'Siapa Saya',
      whoIAmDesc: 'Developer berpengalaman 5+ tahun yang bersemangat menciptakan solusi digital yang membuat perbedaan.',
      whatILove: 'Yang Saya Sukai',
      whatILoveDesc: 'Kode yang bersih, desain yang indah, dan kepuasan memecahkan masalah kompleks dengan solusi yang elegan.',
      myApproach: 'Pendekatan Saya',
      myApproachDesc: 'Saya percaya pada desain yang berpusat pada pengguna, pembelajaran berkelanjutan, dan membangun aplikasi yang fungsional dan menyenangkan.',
      myGoal: 'Tujuan Saya',
      myGoalDesc: 'Menciptakan pengalaman digital yang berdampak yang membantu bisnis berkembang dan pengguna mencapai tujuan mereka.',
      experience: 'Pengalaman'
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Berikut adalah beberapa proyek terbaru saya yang menunjukkan keahlian dan semangat saya dalam menciptakan pengalaman digital yang luar biasa.',
      featured: 'Unggulan',
      liveDemo: 'Demo Langsung',
      source: 'Source',
      viewAll: 'Lihat Semua Proyek'
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang luar biasa.'
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Mari berkolaborasi! Hubungi saya untuk mendiskusikan proyek Anda atau sekadar menyapa.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      send: 'Kirim Pesan'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Alex Johnson',
      roles: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
      description: 'Passionate about creating beautiful, functional, and user-centered digital experiences. Let\'s build something amazing together.',
      viewWork: 'View My Work',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About',
      subtitle: 'I\'m a creative developer who loves turning ideas into reality through code. With a strong background in both frontend and backend development, I create comprehensive solutions that deliver real value.',
      journey: 'My Journey',
      journeyText1: 'Started as a curious student who fell in love with programming during my first "Hello World" moment. Since then, I\'ve been on an incredible journey of continuous learning and growth in the tech industry.',
      journeyText2: 'I\'ve had the privilege of working with startups and established companies, helping them bring their visions to life through innovative web solutions.',
      beyond: 'Beyond Code',
      beyondText: 'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or enjoying outdoor photography. I believe that diverse experiences make me a better developer and a more creative problem solver.',
      whoIAm: 'Who I Am',
      whoIAmDesc: 'A passionate developer with 5+ years of experience creating digital solutions that make a difference.',
      whatILove: 'What I Love',
      whatILoveDesc: 'Clean code, beautiful design, and the satisfaction of solving complex problems with elegant solutions.',
      myApproach: 'My Approach',
      myApproachDesc: 'I believe in user-centered design, continuous learning, and building applications that are both functional and delightful.',
      myGoal: 'My Goal',
      myGoalDesc: 'To create impactful digital experiences that help businesses grow and users achieve their objectives.',
      experience: 'Experience'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.',
      featured: 'Featured',
      liveDemo: 'Live Demo',
      source: 'Source',
      viewAll: 'View All Projects'
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use to create amazing digital solutions.'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s collaborate! Get in touch to discuss your project or just say hello.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: 'について',
      projects: 'プロジェクト',
      skills: 'スキル',
      contact: 'お問い合わせ'
    },
    hero: {
      greeting: 'こんにちは、私は',
      name: 'Alex Johnson',
      roles: ['フルスタック開発者', 'UI/UXデザイナー', '問題解決者'],
      description: '美しく、機能的で、ユーザー中心のデジタル体験を創造することに情熱を注いでいます。一緒に素晴らしいものを作りましょう。',
      viewWork: '作品を見る',
      downloadCV: 'CV をダウンロード'
    },
    about: {
      title: 'について',
      subtitle: 'アイデアをコードで現実に変えることが大好きなクリエイティブな開発者です。フロントエンドとバックエンドの両方で強力なバックグラウンドを持ち、真の価値を提供する包括的なソリューションを作成します。',
      journey: '私の旅',
      journeyText1: '初めての「Hello World」の瞬間にプログラミングに恋した好奇心旺盛な学生として始まりました。それ以来、技術業界での継続的な学習と成長の素晴らしい旅を続けています。',
      journeyText2: 'スタートアップから確立された企業まで、革新的なWebソリューションを通じて彼らのビジョンを実現するお手伝いをする特権を得ています。',
      beyond: 'コード以外',
      beyondText: 'コーディングをしていないとき、新しい技術を探求したり、オープンソースプロジェクトに貢献したり、アウトドア写真を楽しんでいます。多様な経験が私をより良い開発者とより創造的な問題解決者にすると信じています。',
      whoIAm: '私について',
      whoIAmDesc: '違いを生むデジタルソリューションを作成する5年以上の経験を持つ情熱的な開発者。',
      whatILove: '私が愛するもの',
      whatILoveDesc: 'クリーンなコード、美しいデザイン、そしてエレガントなソリューションで複雑な問題を解決する満足感。',
      myApproach: '私のアプローチ',
      myApproachDesc: 'ユーザー中心の設計、継続的な学習、そして機能的で楽しいアプリケーションの構築を信じています。',
      myGoal: '私の目標',
      myGoalDesc: 'ビジネスの成長とユーザーの目標達成を支援するインパクトのあるデジタル体験を作成すること。',
      experience: '経験'
    },
    projects: {
      title: 'プロジェクト',
      subtitle: '優れたデジタル体験を創造するスキルと情熱を示す最近のプロジェクトをご紹介します。',
      featured: '注目',
      liveDemo: 'ライブデモ',
      source: 'ソース',
      viewAll: 'すべてのプロジェクトを見る'
    },
    skills: {
      title: 'スキル',
      subtitle: '素晴らしいデジタルソリューションを作成するために使用する技術とツール。'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'コラボレーションしましょう！プロジェクトについて話し合うか、お気軽にご挨拶ください。',
      name: '名前',
      email: 'メール',
      message: 'メッセージ',
      send: 'メッセージを送信'
    }
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('id');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['id', 'en', 'ja'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('portfolio-language', language);
  };

  return {
    currentLanguage,
    changeLanguage,
    t: translations[currentLanguage]
  };
};
