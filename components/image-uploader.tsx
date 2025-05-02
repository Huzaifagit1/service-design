"use client";

import { useState, useRef } from "react";
import { Upload, UploadCloud, X, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

type ImageFile = {
  file: File;
  id: string;
  preview: string;
  status: "idle" | "uploading" | "success" | "error";
  progress: number;
  error?: string;
  path?: string;
  url?: string;
};

type ImageUploaderProps = {
  userId: string;
  bucketName?: string;
  folderPath?: string;
  maxFiles?: number;
  onUploadComplete?: (files: Array<{ name: string; url: string; path: string }>) => void;
  onDelete?: (path: string) => void;
  existingImages?: Array<{ name: string; url: string; path: string }>;
};

export default function ImageUploader({
  userId,
  bucketName = "customer-uploads",
  folderPath = "",
  maxFiles = 10,
  onUploadComplete,
  onDelete,
  existingImages = [],
}: ImageUploaderProps) {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    // Check if we would exceed the max number of files
    if (files.length + selectedFiles.length + existingImages.length > maxFiles) {
      toast.error(`You can only upload up to ${maxFiles} files in total`);
      return;
    }

    const newFiles: ImageFile[] = Array.from(selectedFiles).map((file) => ({
      file,
      id: Math.random().toString(36).substring(2, 11),
      preview: URL.createObjectURL(file),
      status: "idle",
      progress: 0,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((file) => file.id !== id);
    });
  };

  const removeExistingImage = async (path: string) => {
    if (!onDelete) return;
    
    try {
      onDelete(path);
    } catch (error) {
      console.error("Error removing image:", error);
      toast.error("Failed to remove image");
    }
  };

  const uploadFile = async (file: ImageFile) => {
    // Update status to uploading
    setFiles((prev) =>
      prev.map((f) =>
        f.id === file.id ? { ...f, status: "uploading" } : f
      )
    );

    try {
      const fileExt = file.file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}.${fileExt}`;
        
      const filePath = folderPath 
        ? `${userId}/${folderPath}/${fileName}`
        : `${userId}/${fileName}`;

      // Placeholder for Firebase Storage upload
      console.log(`Placeholder: Uploading ${filePath} to Firebase Storage...`);
      // const { data, error } = await // Firebase storage upload logic needed here

      // if (error) throw error; // Throw Firebase error if needed

      // Placeholder for getting Firebase public URL
      const publicUrlData = { publicUrl: `https://fake-firebase-url.com/${filePath}` }; // Replace with actual Firebase URL logic
      // const { data: publicUrlData } = // Firebase get public URL logic needed here

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? {
                ...f,
                status: "success",
                progress: 100,
                path: filePath,
                url: publicUrlData.publicUrl,
              }
            : f
        )
      );

      return {
        name: file.file.name,
        url: publicUrlData.publicUrl,
        path: filePath,
      };
    } catch (error: any) {
      console.error("Upload error:", error);
      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? {
                ...f,
                status: "error",
                progress: 0,
                error: error.message || "Upload failed",
              }
            : f
        )
      );
      return null;
    }
  };

  const uploadAllFiles = async () => {
    if (files.length === 0) {
      toast.warning("Please select at least one file to upload");
      return;
    }

    // Filter out already uploaded or errored files
    const filesToUpload = files.filter((file) => file.status !== "success");
    
    if (filesToUpload.length === 0) {
      toast.info("All files are already uploaded");
      return;
    }

    const results = [];
    
    for (const file of filesToUpload) {
      const result = await uploadFile(file);
      if (result) {
        results.push(result);
      }
    }

    if (results.length > 0) {
      toast.info(`Placeholder: Would have uploaded ${results.length} files. Firebase logic needed.`);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Upload Images</CardTitle>
          <CardDescription>
            Drag and drop your images or click to browse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragging
                ? "border-primary bg-primary/10"
                : "border-gray-300 hover:border-primary/50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={triggerFileInput}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <UploadCloud className="h-10 w-10 text-gray-400" />
              <h3 className="text-lg font-medium">Drop files here or click to upload</h3>
              <p className="text-sm text-gray-500">
                Supports JPG, PNG, GIF up to 5MB each
              </p>
              <p className="text-xs text-gray-400">
                {existingImages.length + files.length}/{maxFiles} files
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <div className="text-sm text-gray-500">
            {files.filter((f) => f.status === "success").length}/{files.length} uploaded
          </div>
          <Button
            onClick={uploadAllFiles}
            disabled={files.length === 0 || files.every((f) => f.status === "success")}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload All
          </Button>
        </CardFooter>
      </Card>

      {files.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Selected Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="relative group border rounded-lg overflow-hidden"
                >
                  <img
                    src={file.preview}
                    alt={file.file.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.id);
                      }}
                      className="bg-red-500 text-white p-1 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {file.status === "uploading" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Loader2 className="h-8 w-8 text-white animate-spin" />
                    </div>
                  )}
                  {file.status === "success" && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="h-6 w-6 text-green-500 bg-white rounded-full" />
                    </div>
                  )}
                  {file.status === "error" && (
                    <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                      <p className="text-white text-xs p-2">{file.error}</p>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-1">
                    <p className="text-xs truncate px-2">{file.file.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {existingImages.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Existing Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {existingImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group border rounded-lg overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeExistingImage(image.path);
                      }}
                      className="bg-red-500 text-white p-1 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-1">
                    <p className="text-xs truncate px-2">{image.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 
