import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/client" className="flex items-center">
      <div className="relative w-48 h-14">
        <Image
          src="/galaxy.png"
          alt="Galaxy Cinema"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

