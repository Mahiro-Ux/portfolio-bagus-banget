
import { User, Heart, Lightbulb, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: User,
      title: "Who I Am",
      description: "A passionate developer with 5+ years of experience creating digital solutions that make a difference."
    },
    {
      icon: Heart,
      title: "What I Love",
      description: "Clean code, beautiful design, and the satisfaction of solving complex problems with elegant solutions."
    },
    {
      icon: Lightbulb,
      title: "My Approach",
      description: "I believe in user-centered design, continuous learning, and building applications that are both functional and delightful."
    },
    {
      icon: Target,
      title: "My Goal",
      description: "To create impactful digital experiences that help businesses grow and users achieve their objectives."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a creative developer who loves turning ideas into reality through code. 
            With a strong background in both frontend and backend development, I create 
            comprehensive solutions that deliver real value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started as a curious student who fell in love with programming during my first 
                "Hello World" moment. Since then, I've been on an incredible journey of continuous 
                learning and growth in the tech industry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I've had the privilege of working with startups and established companies, 
                helping them bring their visions to life through innovative web solutions.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Beyond Code</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying outdoor photography. I believe that diverse 
                experiences make me a better developer and a more creative problem solver.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl">
              <p className="font-semibold">5+ Years</p>
              <p className="text-sm opacity-90">Experience</p>
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
