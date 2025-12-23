"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, PlayCircle } from "lucide-react";
import { Movie } from "@/store/features/movieTypes";
import TrailerModal from "./TrailerModal";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative">
          {/* Hover overlay - chỉ hiện trên xl screens */}
          <div className="hidden xl:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex flex-col justify-center items-center w-full h-full gap-3">
              <Link
                href={movie.buyTicketUrl || `/dat-ve/${movie.slug}`}
                className="text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]"
              >
                <img
                  alt="Buy Ticket"
                  width={20}
                  height={20}
                  src="/ticket.svg"
                  className="mr-2"
                  style={{ color: "transparent" }}
                />
                Mua vé
              </Link>
              <button
                type="button"
                onClick={() => setShowTrailer(true)}
                className="text-white w-[120px] h-[40px] border border-white hover:bg-[#fb9440]/80 hover:border-transparent rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Trailer
              </button>
            </div>
          </div>

          {/* IMAX Tag */}
          {movie.isImax && (
            <div className="absolute right-1 top-1">
              <img
                alt="Film Tag"
                width={34}
                height={62}
                className="object-contain"
              />
            </div>
          )}

          {/* Movie Poster */}
          {movie.poster ? (
            <Image
              src={movie.poster}
              alt={movie.title}
              width={300}
              height={500}
              className="w-full h-auto object-cover duration-500 ease-in-out "
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 300px"
              loading="lazy"
            />
          ) : (
            <div className="w-full aspect-[3/5] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          )}

          {/* Rating */}
          <div className="absolute right-[5px] bottom-10">
            <p className="flex items-center gap-1">
              <Star className="text-yellow-300 w-3 h-3 fill-yellow-300" />
              <span className="text-[18px] font-bold text-white">
                {movie.rating}
              </span>
            </p>
          </div>

          {/* Age Limit Badge */}
          {movie.ageLimit && (
            <div className="absolute bottom-[6px] right-[6px]">
              <span className="inline-flex items-center justify-center w-[38px] h-7 bg-primary rounded text-sm text-center text-white font-bold not-italic">
                {movie.ageLimit}
              </span>
            </div>
          )}
        </div>

        {/* Movie Title */}
        <div className="mt-2">
          <h3 className="text-black md:text-base font-semibold line-clamp-2 min-h-[2.5rem]">
            {movie.title}
          </h3>
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        movieTitle={movie.title}
      />
    </div>
  );
}
