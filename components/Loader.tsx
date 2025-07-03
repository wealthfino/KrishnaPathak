"use client";

import { useLoading } from "@/app/context/LoadingContext";

export default function Loader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <img
        src="/assets/logo-no-bg.png"
        alt="Loading..."
        className="w-50 h-50 animate-pulse"
      />
    </div>
  );
}
