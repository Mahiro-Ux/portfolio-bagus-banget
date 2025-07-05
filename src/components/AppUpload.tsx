
import { useState, useRef } from "react";
import { Upload, File, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface UploadedFile {
  file: File;
  name: string;
  description: string;
  category: string;
  preview?: string;
}

const AppUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList) => {
    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      file,
      name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
      description: "",
      category: "Aplikasi",
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const updateFileInfo = (index: number, field: keyof UploadedFile, value: string) => {
    setUploadedFiles(prev => prev.map((file, i) => 
      i === index ? { ...file, [field]: value } : file
    ));
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30">
        <CardHeader>
          <CardTitle className="text-white text-xl">Upload Aplikasi Anda</CardTitle>
          <CardDescription className="text-gray-400">
            Upload file aplikasi Anda untuk ditampilkan di halaman download
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-purple-500 bg-purple-500/10' 
                : 'border-slate-600 hover:border-slate-500'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-white mb-2">
              Drag & drop file aplikasi Anda di sini
            </p>
            <p className="text-sm text-gray-400 mb-4">
              atau klik untuk memilih file
            </p>
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900"
            >
              Pilih File
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".apk,.ipa,.exe,.dmg,.zip"
              onChange={handleInputChange}
              className="hidden"
            />
          </div>

          {uploading && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Uploading...</span>
                <span className="text-sm text-gray-400">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">File yang Diupload</h3>
          
          {uploadedFiles.map((uploadedFile, index) => (
            <Card key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {uploadedFile.preview ? (
                      <img 
                        src={uploadedFile.preview} 
                        alt="Preview"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center">
                        <File className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-medium">{uploadedFile.file.name}</h4>
                      <p className="text-sm text-gray-400">
                        {formatFileSize(uploadedFile.file.size)} • {uploadedFile.file.type || 'Unknown type'}
                      </p>
                      <div className="flex items-center mt-1">
                        <Check className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-sm text-green-400">Upload berhasil</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`name-${index}`} className="text-gray-300">Nama Aplikasi</Label>
                    <Input
                      id={`name-${index}`}
                      value={uploadedFile.name}
                      onChange={(e) => updateFileInfo(index, 'name', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Masukkan nama aplikasi"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`category-${index}`} className="text-gray-300">Kategori</Label>
                    <Input
                      id={`category-${index}`}
                      value={uploadedFile.category}
                      onChange={(e) => updateFileInfo(index, 'category', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Contoh: Produktivitas"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${index}`} className="text-gray-300">Deskripsi Singkat</Label>
                    <Input
                      id={`description-${index}`}
                      value={uploadedFile.description}
                      onChange={(e) => updateFileInfo(index, 'description', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Deskripsi aplikasi"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppUpload;
