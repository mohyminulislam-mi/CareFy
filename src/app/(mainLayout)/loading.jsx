import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        {/* Text */}
        <p className="text-sm text-gray-500 font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
