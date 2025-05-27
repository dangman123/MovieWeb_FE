import Link from "next/link";
import Image from "next/image";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  genre: string;
  duration: number;
}

export default function MovieCard({
  id,
  title,
  poster,
  genre,
  duration,
}: MovieCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto">
      <Image
        src={poster}
        alt={title}
        width={200}
        height={300}
        className="w-full h-auto object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        loading="lazy"
      />
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold truncate">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {genre} | {duration} phút
        </p>
        <div className="mt-2 flex flex-col sm:flex-row gap-2">
          <Link href={`/client/movies/${id}`}>
            <button className="w-full sm:w-auto bg-blue-600 text-white px-3 py-2 text-sm sm:text-base rounded hover:bg-blue-700">
              Xem chi tiết
            </button>
          </Link>
          <Link href={`/client/booking/${id}`}>
            <button className="w-full sm:w-auto bg-red-600 text-white px-3 py-2 text-sm sm:text-base rounded hover:bg-red-700">
              Đặt vé
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
