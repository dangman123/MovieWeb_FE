"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl?: string;
  movieTitle?: string;
}

export default function TrailerModal({
  isOpen,
  onClose,
  trailerUrl,
  movieTitle,
}: TrailerModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  // Chuyển đổi URL YouTube sang embed format
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return "";

    // Xử lý các định dạng URL YouTube khác nhau
    const videoIdMatch =
      url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
      ) || url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);

    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&modestbranding=1`;
    }

    return url;
  };

  const embedUrl = getYoutubeEmbedUrl(trailerUrl || "");

  if (!embedUrl) {
    return null; // Không hiển thị modal nếu không có URL
  }

  const modalContent = (
    <div className="fixed inset-0 z-[1000]" role="presentation">
      {/* Overlay/Backdrop - Màu xám */}
      <div
        className="fixed inset-0 z-[-1] modal-overlay-animate"
        onClick={onClose}
        aria-hidden="true"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* Modal Container */}
      <div
        className="h-full outline-0 overflow-x-hidden overflow-y-auto flex items-center justify-center"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Modal Content */}
        <div
          className="inline-block align-middle text-left bg-transparent relative overflow-y-auto mx-6 my-6 min-w-[400px] max-w-[90vw] w-[90vw] rounded modal-content-animate"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video Wrapper - 80vh height */}
          <div className="h-[80vh] ">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title={`${movieTitle} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
