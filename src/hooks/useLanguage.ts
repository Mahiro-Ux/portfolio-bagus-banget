
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
      name: 'John',
      roles: ['Frontend Developer', 'Web Designer', 'UI Programmer'],
      description: 'A passionate Frontend Developer with basic Backend understanding, Web Designer using Figma & Canva, and self-taught UI Programmer from Japan. I create intuitive user interfaces and functional web applications.',
      viewWork: 'View My Work',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About',
      subtitle: 'I\'m a Frontend Developer with a basic understanding of Backend, Web Designer (Figma, Canva), and a self-taught UI Programmer from Japan. I am passionate about creating intuitive user interfaces and developing functional web applications.',
      journey: 'Career Journey',
      journeyText1: 'My learning journey has been shaped by hands-on experience and the pursuit of knowledge through online resources and personal projects. Currently working at PT HUMMA TEKNOLOGI INDONESIA as a Frontend Developer since 2023.',
      journeyText2: 'I enjoy working with both frontend and backend technologies, and I\'m constantly improving my skills through self-taught learning at UI School since 2024.',
      beyond: 'Beyond Code',
      beyondText: 'In my free time, I like exploring new design tools, creating prototypes, and learning about the latest web development trends. I also love playing around with design concepts and experimenting with different UI designs.',
      whoIAm: 'Who I Am',
      whoIAmDesc: 'Frontend Developer with Backend understanding and Web Designer passionate about UI/UX.',
      whatILove: 'What I Love',
      whatILoveDesc: 'React ecosystem, Laravel, Figma design, Tailwind CSS, and creating beautiful user interfaces.',
      myApproach: 'My Approach',
      myApproachDesc: 'Self-taught learning, hands-on experience, continuous improvement, and user-centered design.',
      myGoal: 'My Goal',
      myGoalDesc: 'Creating intuitive user interfaces and developing functional web applications that users love.',
      experience: 'Experience'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some code and projects I\'ve made trying to put my dent in the universe.',
      featured: 'Featured',
      liveDemo: 'Live Demo',
      source: 'View on GitHub',
      viewAll: 'View All Projects'
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use to build modern and quality web applications.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      design: 'Design & Tools',
      tools: 'Development Tools'
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
      quickResponseDesc: 'Usually respond within 2-4 hours on working days. For urgent projects, you can contact via social media.',
      footer: '© 2024 John. Built with React, TypeScript & Tailwind CSS.'
    }
  },
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
      name: 'John',
      roles: ['Frontend Developer', 'Web Designer', 'UI Programmer'],
      description: 'Seorang Frontend Developer dengan pemahaman dasar Backend, Web Designer menggunakan Figma & Canva, dan UI Programmer otodidak dari Jepang. Saya menciptakan antarmuka pengguna yang intuitif dan aplikasi web fungsional.',
      viewWork: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV'
    },
    about: {
      title: 'Tentang',
      subtitle: 'Saya adalah Frontend Developer dengan pemahaman dasar Backend, Web Designer (Figma, Canva), dan UI Programmer otodidak dari Jepang. Saya bersemangat menciptakan antarmuka pengguna yang intuitif dan mengembangkan aplikasi web fungsional.',
      journey: 'Perjalanan Karir',
      journeyText1: 'Perjalanan belajar saya dibentuk oleh pengalaman langsung dan pencarian pengetahuan melalui sumber online dan proyek pribadi. Saat ini bekerja di PT HUMMA TEKNOLOGI INDONESIA sebagai Frontend Developer sejak 2023.',
      journeyText2: 'Saya menikmati bekerja dengan teknologi frontend dan backend, dan terus meningkatkan kemampuan melalui pembelajaran otodidak di UI School sejak 2024.',
      beyond: 'Di Luar Coding',
      beyondText: 'Di waktu senggang, saya suka mengeksplorasi alat desain baru, membuat prototipe, dan mempelajari tren pengembangan web terbaru. Saya juga suka bermain dengan konsep desain dan bereksperimen dengan desain UI yang berbeda.',
      whoIAm: 'Siapa Saya',
      whoIAmDesc: 'Frontend Developer dengan pemahaman Backend dan Web Designer yang bersemangat tentang UI/UX.',
      whatILove: 'Yang Saya Sukai',
      whatILoveDesc: 'Ekosistem React, Laravel, desain Figma, Tailwind CSS, dan menciptakan antarmuka pengguna yang indah.',
      myApproach: 'Pendekatan Kerja',
      myApproachDesc: 'Pembelajaran otodidak, pengalaman langsung, peningkatan berkelanjutan, dan desain yang berpusat pada pengguna.',
      myGoal: 'Tujuan Saya',
      myGoalDesc: 'Menciptakan antarmuka pengguna yang intuitif dan mengembangkan aplikasi web fungsional yang disukai pengguna.',
      experience: 'Pengalaman'
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Beberapa kode dan proyek yang telah saya buat untuk memberikan kontribusi pada dunia teknologi.',
      featured: 'Unggulan',
      liveDemo: 'Demo Langsung',
      source: 'Lihat di GitHub',
      viewAll: 'Lihat Semua Proyek'
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Teknologi dan alat yang saya gunakan untuk membangun aplikasi web modern dan berkualitas.',
      frontend: 'Frontend Development',
      backend: 'Backend Development',
      design: 'Design & Tools',
      tools: 'Development Tools'
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
      quickResponseDesc: 'Biasanya merespon dalam 2-4 jam untuk hari kerja. Untuk project urgent, bisa hubungi via media sosial.',
      footer: '© 2024 John. Dibuat dengan React, TypeScript & Tailwind CSS.'
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
      name: 'John',
      roles: ['フロントエンド開発者', 'ウェブデザイナー', 'UIプログラマー'],
      description: '基本的なバックエンドの理解を持つフロントエンド開発者、FigmaとCanvaを使用するウェブデザイナー、そして日本出身の独学UIプログラマーです。直感的なユーザーインターフェースと機能的なウェブアプリケーションを作成することに情熱を注いでいます。',
      viewWork: '作品を見る',
      downloadCV: 'CV をダウンロード'
    },
    about: {
      title: 'について',
      subtitle: '私は基本的なバックエンドの理解を持つフロントエンド開発者、ウェブデザイナー（Figma、Canva）、そして日本出身の独学UIプログラマーです。直感的なユーザーインターフェースの作成と機能的なウェブアプリケーションの開発に情熱を注いでいます。',
      journey: 'キャリアの歩み',
      journeyText1: '私の学習の旅は、実践的な経験とオンラインリソースおよび個人プロジェクトを通じた知識の追求によって形作られました。現在、2023年からPT HUMMA TEKNOLOGI INDONESIAでフロントエンド開発者として働いています。',
      journeyText2: 'フロントエンドとバックエンドの両方の技術で働くことを楽しんでおり、2024年からUI Schoolでの独学を通じて常にスキルを向上させています。',
      beyond: 'コード以外',
      beyondText: '自由時間には、新しいデザインツールの探索、プロトタイプの作成、最新のウェブ開発トレンドについて学ぶことが好きです。また、デザインコンセプトで遊んだり、さまざまなUIデザインを実験したりすることも好きです。',
      whoIAm: '私について',
      whoIAmDesc: 'UI/UXに情熱を持つバックエンド理解とウェブデザイナーを持つフロントエンド開発者。',
      whatILove: '私が愛するもの',
      whatILoveDesc: 'Reactエコシステム、Laravel、Figmaデザイン、Tailwind CSS、そして美しいユーザーインターフェースの作成。',
      myApproach: '私のアプローチ',
      myApproachDesc: '独学、実践的経験、継続的改善、そしてユーザー中心のデザイン。',
      myGoal: '私の目標',
      myGoalDesc: 'ユーザーが愛する直感的なユーザーインターフェースと機能的なウェブアプリケーションの作成。',
      experience: '経験'
    },
    projects: {
      title: 'プロジェクト',
      subtitle: '宇宙に私の足跡を残そうとして作ったいくつかのコードとプロジェクト。',
      featured: '注目',
      liveDemo: 'ライブデモ',
      source: 'GitHubで見る',
      viewAll: 'すべてのプロジェクトを見る'
    },
    skills: {
      title: 'スキル',
      subtitle: 'モダンで質の高いウェブアプリケーションを構築するために使用する技術とツール。',
      frontend: 'フロントエンド開発',
      backend: 'バックエンド開発',
      design: 'デザイン & ツール',
      tools: '開発ツール'
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
      letsConnectDesc: '新しいプロジェクトの議論、コラボレーション、またはウェブ開発に関する経験の共有を歓迎します。お気軽にお問い合わせください！',
      quickResponse: '迅速な対応',
      quickResponseDesc: '平日は通常2-4時間以内に対応いたします。緊急プロジェクトの場合は、ソーシャルメディアでお問い合わせください。',
      footer: '© 2024 John. React、TypeScript、Tailwind CSSで構築。'
    }
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

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
