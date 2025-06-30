
import { User, Heart, Lightbulb, Target, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: User,
      title: t.about.whoIAm,
      description: t.about.whoIAmDesc
    },
    {
      icon: Heart,
      title: t.about.whatILove,
      description: t.about.whatILoveDesc
    },
    {
      icon: Lightbulb,
      title: t.about.myApproach,
      description: t.about.myApproachDesc
    },
    {
      icon: Target,
      title: t.about.myGoal,
      description: t.about.myGoalDesc
    }
  ];

  const experiences = [
    {
      company: "PT HUMMA TEKNOLOGI INDONESIA",
      role: "Frontend Developer",
      period: "2023 - Present",
      type: "work"
    },
    {
      company: "UI School (Self-Taught)",
      role: "Frontend Developer & Backend",
      period: "2024 - Present",
      type: "education"
    }
  ];

  const education = [
    {
      school: "SMK Al Azhar",
      degree: "Vocational High School",
      field: "Rekayasa Perangkat Lunak",
      period: "2020 - 2023"
    },
    {
      school: "UI School (Self-Taught)",
      degree: "UI Programming",
      field: "UI Development",
      period: "2023 - Present"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.about.title} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">{t.about.journey}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t.about.journeyText1}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t.about.journeyText2}
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">{t.about.beyond}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t.about.beyondText}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
                alt="John Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl">
              <p className="font-semibold">2+ Years</p>
              <p className="text-sm opacity-90">{t.about.experience}</p>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="text-white font-semibold">{exp.role}</h4>
                  <p className="text-blue-400 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-purple-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                  <h4 className="text-white font-semibold">{edu.degree}</h4>
                  <p className="text-purple-400 text-sm">{edu.school}</p>
                  <p className="text-gray-300 text-sm">{edu.field}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
