
import { Volume2, VolumeX, Globe } from "lucide-react";
import { useState } from "react";
import { useMusic } from "@/hooks/useMusic";
import { useLanguage, Language } from "@/hooks/useLanguage";

const Controls = () => {
  const { isPlaying, toggleMusic } = useMusic();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: 'id' as Language, name: 'Indonesia', flag: '🇮🇩' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="fixed top-20 right-4 z-40 flex flex-col gap-2">
      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? "Matikan musik" : "Hidupkan musik"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* Language Control */}
      <div className="relative">
        <button
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 flex items-center gap-2"
          aria-label="Ganti bahasa"
        >
          <Globe size={20} />
          <span className="text-sm">{currentLang?.flag}</span>
        </button>

        {/* Language Menu */}
        {showLanguageMenu && (
          <div className="absolute right-0 top-full mt-2 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700/50 py-2 min-w-[150px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setShowLanguageMenu(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-700/50 transition-colors duration-200 flex items-center gap-3 ${
                  currentLanguage === lang.code ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Controls;
