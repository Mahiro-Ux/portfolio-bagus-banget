
import { Download as DownloadIcon, Star, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Download = () => {
  const apps = [
    {
      id: 1,
      name: "MyTask Manager",
      description: "Aplikasi manajemen tugas yang membantu Anda mengorganisir pekerjaan sehari-hari dengan lebih efisien.",
      version: "v2.1.0",
      size: "12.5 MB",
      rating: 4.8,
      downloads: "10K+",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      downloadUrl: "#",
      category: "Produktivitas",
      releaseDate: "15 Des 2024",
      features: [
        "Manajemen tugas dengan prioritas",
        "Reminder dan notifikasi",
        "Sinkronisasi multi-device",
        "Mode offline"
      ]
    },
    {
      id: 2,
      name: "Budget Tracker Pro",
      description: "Aplikasi keuangan personal untuk melacak pengeluaran, mengatur budget, dan mencapai tujuan finansial Anda.",
      version: "v1.5.2",
      size: "8.2 MB",
      rating: 4.6,
      downloads: "5K+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      downloadUrl: "#",
      category: "Keuangan",
      releaseDate: "10 Des 2024",
      features: [
        "Tracking pengeluaran otomatis",
        "Laporan finansial detail",
        "Goal setting dan progress",
        "Multi-currency support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Download <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Aplikasi</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Unduh aplikasi mobile terbaru yang telah saya kembangkan. Tersedia untuk Android dan iOS.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {apps.map((app) => (
              <Card key={app.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <img 
                          src={app.image} 
                          alt={app.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl mb-1">{app.name}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md">
                            {app.category}
                          </span>
                          <span>{app.version}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{app.downloads}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {app.description}
                  </CardDescription>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-medium mb-3">Fitur Utama:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* App Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-slate-700/30">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{app.releaseDate}</span>
                    </div>
                    <span>{app.size}</span>
                  </div>

                  {/* Download Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium"
                    onClick={() => window.open(app.downloadUrl, '_blank')}
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mb-16">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Aplikasi Lainnya Segera Hadir
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Saya sedang mengembangkan aplikasi-aplikasi baru yang menarik. 
                Stay tuned untuk update terbaru!
              </p>
              <Button 
                variant="outline" 
                className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900"
              >
                Subscribe untuk Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
