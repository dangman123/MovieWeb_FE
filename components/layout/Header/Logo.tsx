import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-[77px] h-[40px] lg:w-[115px] lg:h-[60px]">
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

