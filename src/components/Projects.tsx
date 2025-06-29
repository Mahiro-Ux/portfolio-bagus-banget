
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance. Built with accessibility in mind.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, natural language processing, and smart response suggestions.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: ["Next.js", "OpenAI API", "WebSocket", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive dashboard for data analysis with customizable charts, real-time updates, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View Live Project"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <span>Source</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-400 text-gray-300 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
