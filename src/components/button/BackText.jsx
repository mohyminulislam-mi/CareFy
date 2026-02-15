"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const BackText = ({ children }) => {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleBack = () => {
    setIsLeaving(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center cursor-pointer transition-all duration-200
        ${isLeaving ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"}
        text-gray-600 hover:text-blue-600`}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span className="font-medium">{children}</span>
    </button>
  );
};

export default BackText;
