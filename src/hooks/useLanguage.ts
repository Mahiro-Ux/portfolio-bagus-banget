
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
    frontend: string;
    backend: string;
    design: string;
    tools: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    letsConnect: string;
    letsConnectDesc: string;
    quickResponse: string;
    quickResponseDesc: string;
    footer: string;
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
      name: 'Mardev Rahman',
      roles: ['Full Stack Developer', 'Frontend Specialist', 'React Expert'],
      description: 'Seorang developer berpengalaman yang fokus pada pengembangan aplikasi web modern dengan React, Next.js, dan teknologi terdepan. Siap membantu mewujudkan ide digital Anda.',
      viewWork: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV'
    },
    about: {
      title: 'Tentang',
      subtitle: 'Saya adalah Full Stack Developer dengan spesialisasi di frontend development. Berpengalaman 4+ tahun dalam membangun aplikasi web yang responsif, user-friendly, dan performant menggunakan teknologi modern.',
      journey: 'Perjalanan Karir',
      journeyText1: 'Memulai perjalanan sebagai self-taught developer pada tahun 2020. Fokus utama pada ekosistem JavaScript dengan React sebagai library favorit. Telah menangani berbagai proyek mulai dari landing page hingga aplikasi web kompleks.',
      journeyText2: 'Saat ini aktif mengembangkan solusi digital untuk klien lokal dan internasional, dengan fokus pada pengalaman pengguna yang optimal dan kode yang clean & maintainable.',
      beyond: 'Di Luar Coding',
      beyondText: 'Ketika tidak sedang coding, saya aktif berbagi knowledge melalui blog dan komunitas developer. Hobi fotografi dan travelling yang membantu mengasah kreativitas dalam problem solving.',
      whoIAm: 'Siapa Saya',
      whoIAmDesc: 'Full Stack Developer dengan passion pada frontend development dan user experience design.',
      whatILove: 'Yang Saya Sukai',
      whatILoveDesc: 'React ecosystem, TypeScript, modern CSS, performance optimization, dan membangun UI yang indah.',
      myApproach: 'Pendekatan Kerja',
      myApproachDesc: 'Mobile-first design, component-based architecture, clean code principles, dan continuous learning.',
      myGoal: 'Tujuan Saya',
      myGoalDesc: 'Membantu bisnis berkembang melalui solusi digital yang inovatif dan user-centered.',
      experience: 'Pengalaman'
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Berikut adalah beberapa proyek yang telah saya kerjakan, menunjukkan kemampuan dalam berbagai teknologi dan pendekatan development.',
      featured: 'Unggulan',
      liveDemo: 'Demo Langsung',
      source: 'Source Code',
      viewAll: 'Lihat Semua Proyek'
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Teknologi dan tools yang saya kuasai untuk membangun aplikasi web modern dan berkualitas.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      design: 'Design & UI/UX',
      tools: 'Tools & Platform'
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Mari berkolaborasi! Hubungi saya untuk mendiskusikan proyek atau peluang kerja sama.',
      name: 'Nama',
      email: 'Email',
      subject: 'Subjek',
      message: 'Pesan',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: 'Terima kasih! Pesan Anda telah terkirim. Saya akan segera membalas.',
      letsConnect: 'Mari Terhubung',
      letsConnectDesc: 'Terbuka untuk diskusi project baru, kolaborasi, atau sekadar berbagi pengalaman seputar web development. Jangan ragu untuk menghubungi saya!',
      quickResponse: 'Respon Cepat',
      quickResponseDesc: 'Biasanya merespon dalam 2-4 jam untuk hari kerja. Untuk project urgent, bisa hubungi via WhatsApp.',
      footer: '© 2024 Mardev Rahman. Dibuat dengan React, TypeScript & Tailwind CSS.'
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
      name: 'Mardev Rahman',
      roles: ['Full Stack Developer', 'Frontend Specialist', 'React Expert'],
      description: 'An experienced developer focused on building modern web applications with React, Next.js, and cutting-edge technologies. Ready to bring your digital ideas to life.',
      viewWork: 'View My Work',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About',
      subtitle: 'I\'m a Full Stack Developer specializing in frontend development. With 4+ years of experience building responsive, user-friendly, and performant web applications using modern technologies.',
      journey: 'Career Journey',
      journeyText1: 'Started my journey as a self-taught developer in 2020. Main focus on JavaScript ecosystem with React as my favorite library. Have handled various projects from landing pages to complex web applications.',
      journeyText2: 'Currently actively developing digital solutions for local and international clients, focusing on optimal user experience and clean & maintainable code.',
      beyond: 'Beyond Code',
      beyondText: 'When not coding, I actively share knowledge through blogs and developer communities. Photography and traveling hobbies help sharpen creativity in problem solving.',
      whoIAm: 'Who I Am',
      whoIAmDesc: 'Full Stack Developer with passion for frontend development and user experience design.',
      whatILove: 'What I Love',
      whatILoveDesc: 'React ecosystem, TypeScript, modern CSS, performance optimization, and building beautiful UIs.',
      myApproach: 'My Approach',
      myApproachDesc: 'Mobile-first design, component-based architecture, clean code principles, and continuous learning.',
      myGoal: 'My Goal',
      myGoalDesc: 'Help businesses grow through innovative and user-centered digital solutions.',
      experience: 'Experience'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Here are some projects I\'ve worked on, showcasing skills in various technologies and development approaches.',
      featured: 'Featured',
      liveDemo: 'Live Demo',
      source: 'Source Code',
      viewAll: 'View All Projects'
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use to build modern and quality web applications.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      design: 'Design & UI/UX',
      tools: 'Tools & Platform'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s collaborate! Contact me to discuss projects or collaboration opportunities.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Thank you! Your message has been sent. I\'ll get back to you soon.',
      letsConnect: 'Let\'s Connect',
      letsConnectDesc: 'Open for new project discussions, collaborations, or just sharing experiences about web development. Don\'t hesitate to contact me!',
      quickResponse: 'Quick Response',
      quickResponseDesc: 'Usually respond within 2-4 hours on working days. For urgent projects, you can contact via WhatsApp.',
      footer: '© 2024 Mardev Rahman. Built with React, TypeScript & Tailwind CSS.'
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
      name: 'Mardev Rahman',
      roles: ['フルスタック開発者', 'フロントエンド専門家', 'React エキスパート'],
      description: 'React、Next.js、最先端技術を使用してモダンなWebアプリケーションの構築に焦点を当てた経験豊富な開発者です。あなたのデジタルアイデアを実現する準備ができています。',
      viewWork: '作品を見る',
      downloadCV: 'CV をダウンロード'
    },
    about: {
      title: 'について',
      subtitle: 'フロントエンド開発を専門とするフルスタック開発者です。モダンテクノロジーを使用して、レスポンシブでユーザーフレンドリーでパフォーマンスの高いWebアプリケーションを構築する4年以上の経験があります。',
      journey: 'キャリアの歩み',
      journeyText1: '2020年に独学の開発者として旅を始めました。ReactをメインライブラリとするJavaScriptエコシステムに主に焦点を当てています。ランディングページから複雑なWebアプリケーションまで、さまざまなプロジェクトを手がけてきました。',
      journeyText2: '現在、国内外のクライアント向けにデジタルソリューションを積極的に開発しており、最適なユーザーエクスペリエンスとクリーンで保守可能なコードに焦点を当てています。',
      beyond: 'コード以外',
      beyondText: 'コーディング以外では、ブログや開発者コミュニティを通じて知識を積極的に共有しています。写真撮影と旅行の趣味は、問題解決における創造性を磨くのに役立ちます。',
      whoIAm: '私について',
      whoIAmDesc: 'フロントエンド開発とユーザーエクスペリエンスデザインに情熱を持つフルスタック開発者。',
      whatILove: '私が愛するもの',
      whatILoveDesc: 'Reactエコシステム、TypeScript、モダンCSS、パフォーマンス最適化、美しいUIの構築。',
      myApproach: '私のアプローチ',
      myApproachDesc: 'モバイルファーストデザイン、コンポーネントベースアーキテクチャ、クリーンコード原則、継続的学習。',
      myGoal: '私の目標',
      myGoalDesc: '革新的でユーザー中心のデジタルソリューションを通じてビジネスの成長を支援すること。',
      experience: '経験'
    },
    projects: {
      title: 'プロジェクト',
      subtitle: 'さまざまな技術と開発アプローチでのスキルを示す、私が手がけたプロジェクトをご紹介します。',
      featured: '注目',
      liveDemo: 'ライブデモ',
      source: 'ソースコード',
      viewAll: 'すべてのプロジェクトを見る'
    },
    skills: {
      title: 'スキル',
      subtitle: 'モダンで質の高いWebアプリケーションを構築するために使用する技術とツール。',
      frontend: 'フロントエンド開発',
      backend: 'バックエンド開発',
      design: 'デザイン & UI/UX',
      tools: 'ツール & プラットフォーム'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'コラボレーションしましょう！プロジェクトやコラボレーションの機会について話し合うためにお気軽にお問い合わせください。',
      name: '名前',
      email: 'メール',
      subject: '件名',
      message: 'メッセージ',
      send: 'メッセージを送信',
      sending: '送信中...',
      success: 'ありがとうございます！メッセージが送信されました。すぐにご連絡いたします。',
      letsConnect: 'つながりましょう',
      letsConnectDesc: '新しいプロジェクトの議論、コラボレーション、またはWeb開発に関する経験の共有を歓迎します。お気軽にお問い合わせください！',
      quickResponse: '迅速な対応',
      quickResponseDesc: '平日は通常2-4時間以内に対応いたします。緊急プロジェクトの場合は、WhatsAppでお問い合わせください。',
      footer: '© 2024 Mardev Rahman. React、TypeScript、Tailwind CSSで構築。'
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
