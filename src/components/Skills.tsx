import { useState } from "react";
import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Code,
      title: t.skills.frontend,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 }
      ]
    },
    backend: {
      icon: Database,
      title: t.skills.backend,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 78 }
      ]
    },
    design: {
      icon: Palette,
      title: t.skills.design,
      skills: [
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 82 },
        { name: "Photoshop", level: 85 },
        { name: "UI Design", level: 90 },
        { name: "UX Research", level: 80 },
        { name: "Prototyping", level: 88 }
      ]
    },
    tools: {
      icon: Zap,
      title: t.skills.tools,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 78 },
        { name: "Webpack", level: 85 },
        { name: "Jest", level: 88 },
        { name: "CI/CD", level: 80 }
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

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "5+ Years", subtitle: t.about.experience },
            { icon: Zap, title: "50+ Projects", subtitle: "Successfully Completed" },
            { icon: Smartphone, title: "100%", subtitle: "Client Satisfaction" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">{stat.title}</h4>
                <p className="text-gray-400 text-sm">{stat.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
