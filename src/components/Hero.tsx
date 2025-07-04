
import { useState, useEffect } from "react";
import { ChevronDown, Github, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = t.hero.roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayText(currentRole.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex, t.hero.roles]);

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animation: `twinkle 3s linear infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                I'm a{" "}
                <span className="text-blue-400 font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={handleScrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                {t.hero.viewWork}
              </button>
              <a
                href="/cv-john.pdf"
                download
                className="px-8 py-3 border border-gray-400 text-gray-300 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                {t.hero.downloadCV}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              {[
                { Icon: Github, href: "https://github.com/john", label: "GitHub" },
                { Icon: Instagram, href: "https://instagram.com/john", label: "Instagram" },
                { Icon: Mail, href: "mailto:John@gEzample.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 transform hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="text-gray-400 hover:text-white transition-colors duration-300" size={32} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
