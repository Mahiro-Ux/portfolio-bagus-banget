
export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const simulateUpload = (
  setUploading: (uploading: boolean) => void,
  setUploadProgress: (progress: number) => void
) => {
  setUploading(true);
  setUploadProgress(0);
  
  const interval = setInterval(() => {
    setUploadProgress((prev: number) => {
      if (prev >= 100) {
        clearInterval(interval);
        setUploading(false);
        return 100;
      }
      return prev + 10;
    });
  }, 200);
};
