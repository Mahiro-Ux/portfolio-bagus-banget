
import { File, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadedFile } from "./types";
import { formatFileSize } from "./utils";

interface UploadedFileCardProps {
  uploadedFile: UploadedFile;
  index: number;
  onUpdateFileInfo: (index: number, field: keyof UploadedFile, value: string) => void;
  onRemoveFile: (index: number) => void;
}

const UploadedFileCard = ({
  uploadedFile,
  index,
  onUpdateFileInfo,
  onRemoveFile
}: UploadedFileCardProps) => {
  return (
    <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30">
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
            onClick={() => onRemoveFile(index)}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label htmlFor={`name-${index}`} className="text-gray-300">Nama Aplikasi</Label>
            <Input
              id={`name-${index}`}
              value={uploadedFile.name}
              onChange={(e) => onUpdateFileInfo(index, 'name', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Masukkan nama aplikasi"
            />
          </div>
          <div>
            <Label htmlFor={`publisher-${index}`} className="text-gray-300">Nama Publisher</Label>
            <Input
              id={`publisher-${index}`}
              value={uploadedFile.publisher}
              onChange={(e) => onUpdateFileInfo(index, 'publisher', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Nama developer/publisher"
            />
          </div>
          <div>
            <Label htmlFor={`category-${index}`} className="text-gray-300">Kategori</Label>
            <Input
              id={`category-${index}`}
              value={uploadedFile.category}
              onChange={(e) => onUpdateFileInfo(index, 'category', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Contoh: Produktivitas"
            />
          </div>
          <div>
            <Label htmlFor={`description-${index}`} className="text-gray-300">Deskripsi Singkat</Label>
            <Input
              id={`description-${index}`}
              value={uploadedFile.description}
              onChange={(e) => onUpdateFileInfo(index, 'description', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Deskripsi aplikasi"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadedFileCard;
