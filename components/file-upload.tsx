"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import Image from "next/image";
import { X } from "lucide-react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: keyof typeof ourFileRouter;
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  if (value) {
    return (
      <>
        {endpoint === "userIdentifier" ? (
          <div className="relative w-full h-[200px]">
            <Image fill src={value} alt="Upload" className="object-cover" />
            <button
              onClick={() => onChange("")}
              className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="relative h-20 w-20">
            <Image fill src={value} alt="Upload" className="rounded-full" />
            <button
              onClick={() => onChange("")}
              className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};

export default FileUpload;
