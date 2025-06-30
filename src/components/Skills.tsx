
import { useState } from "react";
import { Code, Palette, Database, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Code,
      title: t.skills.frontend,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap 5", level: 88 }
      ]
    },
    backend: {
      icon: Database,
      title: t.skills.backend,
      skills: [
        { name: "Laravel", level: 85 },
        { name: "PHP", level: 90 },
        { name: "MySQL", level: 82 },
        { name: "C#", level: 70 },
        { name: "HTML & CSS", level: 95 },
        { name: "Nginx", level: 65 }
      ]
    },
    design: {
      icon: Palette,
      title: t.skills.design,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Canva", level: 88 },
        { name: "ShadCn", level: 80 },
        { name: "UI Design", level: 85 },
        { name: "UX Research", level: 75 },
        { name: "Prototyping", level: 82 }
      ]
    },
    tools: {
      icon: Zap,
      title: t.skills.tools,
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 80 },
        { name: "ChatGPT 4.1", level: 90 },
        { name: "Overflow", level: 75 }
      ]
    }
  };

  const categoryKeys = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.skills.title} & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryKeys.map((category) => {
            const categoryData = skillCategories[category];
            const Icon = categoryData.icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="hidden sm:inline">{categoryData.title}</span>
                <span className="sm:hidden">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <div className="flex items-center space-x-3 mb-6">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="text-blue-400" size={24} />;
                })()}
                <h3 className="text-2xl font-semibold text-white">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Circular Progress Rings */}
              <div className="absolute inset-0">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.slice(0, 4).map((skill, index) => {
                  const radius = 120 - (index * 25);
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  
                  return (
                    <svg
                      key={index}
                      className="absolute inset-0 w-full h-full transform -rotate-90"
                      style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
                    >
                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="rgba(71, 85, 105, 0.3)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  );
                })}
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {(() => {
                      const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                      return <Icon className="text-white" size={24} />;
                    })()}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Expertise Level</h4>
                  <p className="text-blue-400 text-2xl font-bold">
                    {Math.round(
                      skillCategories[activeCategory as keyof typeof skillCategories].skills
                        .reduce((sum, skill) => sum + skill.level, 0) /
                      skillCategories[activeCategory as keyof typeof skillCategories].skills.length
                    )}%
                  </p>
                </div>
              </div>

              {/* Skill Labels */}
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.slice(0, 4).map((skill, index) => {
                const angle = (index * 90) - 45;
                const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div
                    key={index}
                    className="absolute bg-slate-800/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-slate-600/50"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
