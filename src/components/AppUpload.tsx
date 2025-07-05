
import { useState } from "react";
import FileUploadArea from "./upload/FileUploadArea";
import UploadedFileCard from "./upload/UploadedFileCard";
import { UploadedFile } from "./upload/types";
import { simulateUpload } from "./upload/utils";

const AppUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFiles = (files: FileList) => {
    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      file,
      name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
      description: "",
      category: "Aplikasi",
      publisher: "",
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    simulateUpload(setUploading, setUploadProgress);
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

  const updateFileInfo = (index: number, field: keyof UploadedFile, value: string) => {
    setUploadedFiles(prev => prev.map((file, i) => 
      i === index ? { ...file, [field]: value } : file
    ));
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <FileUploadArea
        dragActive={dragActive}
        uploading={uploading}
        uploadProgress={uploadProgress}
        onDrag={handleDrag}
        onDrop={handleDrop}
        onFilesSelected={handleFiles}
      />

      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">File yang Diupload</h3>
          
          {uploadedFiles.map((uploadedFile, index) => (
            <UploadedFileCard
              key={index}
              uploadedFile={uploadedFile}
              index={index}
              onUpdateFileInfo={updateFileInfo}
              onRemoveFile={removeFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppUpload;
