
import { useRef } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FileUploadAreaProps {
  dragActive: boolean;
  uploading: boolean;
  uploadProgress: number;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFilesSelected: (files: FileList) => void;
}

const FileUploadArea = ({
  dragActive,
  uploading,
  uploadProgress,
  onDrag,
  onDrop,
  onFilesSelected
}: FileUploadAreaProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFilesSelected(e.target.files);
    }
  };

  const handleButtonClick = () => {
    console.log("Button clicked, file input ref:", fileInputRef.current);
    fileInputRef.current?.click();
  };

  return (
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
          onDragEnter={onDrag}
          onDragLeave={onDrag}
          onDragOver={onDrag}
          onDrop={onDrop}
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
            onClick={handleButtonClick}
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
  );
};

export default FileUploadArea;
