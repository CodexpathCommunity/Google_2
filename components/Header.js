import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <header>
      <Image
        src="/images/ggle.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input
          type="text"
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
        />
      </form>
    </header>
  );
}

export default Header;
