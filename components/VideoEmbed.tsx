"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  reviewer: string;
}

export default function VideoEmbed({ videoId, title, reviewer }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video bg-gray-900 cursor-pointer group" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb} alt={`Video review by ${reviewer}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-[#122259] text-sm">{reviewer}</p>
        <p className="text-xs text-gray-500 mt-0.5">UK Parent Video Review</p>
      </div>
    </div>
  );
}
