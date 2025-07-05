
import { Download as DownloadIcon, Star, Users, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Download = () => {
  const [selectedApp, setSelectedApp] = useState(null);

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
      ],
      detailedDescription: "MyTask Manager adalah solusi komprehensif untuk manajemen produktivitas pribadi dan tim. Aplikasi ini dirancang khusus untuk membantu pengguna mengorganisir tugas-tugas harian dengan sistem prioritas yang cerdas.",
      screenshots: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop"
      ],
      requirements: ["Android 7.0+", "RAM 2GB", "Storage 50MB"],
      changelog: [
        "Perbaikan bug pada sinkronisasi",
        "Penambahan tema dark mode",
        "Optimisasi performa aplikasi"
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
      ],
      detailedDescription: "Budget Tracker Pro adalah aplikasi keuangan personal yang memberikan kontrol penuh atas keuangan Anda. Dengan fitur tracking otomatis dan analisis mendalam, aplikasi ini membantu Anda mencapai tujuan finansial.",
      screenshots: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=200&fit=crop"
      ],
      requirements: ["Android 6.0+", "RAM 1GB", "Storage 30MB"],
      changelog: [
        "Penambahan support mata uang baru",
        "Perbaikan UI dashboard",
        "Fitur export laporan PDF"
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

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="flex-1 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Lihat Detail
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-800 border-slate-700">
                        <DialogHeader>
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                              <img 
                                src={app.image} 
                                alt={app.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl text-white mb-2">{app.name}</DialogTitle>
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-md">
                                  {app.category}
                                </span>
                                <span className="text-gray-400">{app.version}</span>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-yellow-400">{app.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogHeader>

                        <div className="space-y-6">
                          <DialogDescription className="text-gray-300 text-base leading-relaxed">
                            {app.detailedDescription}
                          </DialogDescription>

                          {/* Screenshots */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Screenshot</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {app.screenshots.map((screenshot, index) => (
                                <div key={index} className="rounded-lg overflow-hidden">
                                  <img 
                                    src={screenshot} 
                                    alt={`Screenshot ${index + 1}`}
                                    className="w-full h-32 object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Detailed Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Fitur Lengkap</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {app.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-gray-300">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Sistem Requirement</h4>
                            <div className="space-y-2">
                              {app.requirements.map((req, index) => (
                                <div key={index} className="text-gray-300 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                                  {req}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Changelog */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Update Terbaru</h4>
                            <div className="space-y-2">
                              {app.changelog.map((change, index) => (
                                <div key={index} className="text-gray-300 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  {change}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* App Info Detail */}
                          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/30 rounded-lg">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{app.size}</div>
                              <div className="text-sm text-gray-400">Ukuran</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{app.downloads}</div>
                              <div className="text-sm text-gray-400">Download</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{app.rating}</div>
                              <div className="text-sm text-gray-400">Rating</div>
                            </div>
                          </div>

                          {/* Download Button in Modal */}
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium text-lg py-3"
                            onClick={() => window.open(app.downloadUrl, '_blank')}
                          >
                            <DownloadIcon className="w-5 h-5 mr-2" />
                            Download {app.name}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium"
                      onClick={() => window.open(app.downloadUrl, '_blank')}
                    >
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
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
