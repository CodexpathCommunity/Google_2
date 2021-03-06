import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="data:image/png;base64,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"
        />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">store </p>
        </div>
        <div className="flex space-x-4 items-center p-5">
          <p className="link">Gmail</p>
          <p className="link">Images </p>
          <ViewGridIcon className="h-10 w-10 p-2  rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/69096827?v=4" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-40 sm:mt-44 flex-grow w-4/5 m-auto">
        <Image src="/images/ggle.png" height={100} width={300} />
        <div className="flex w-full mt-5 px-5 py-3 px-px- rounded-full border border-gray-200 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8
         sm:space-y-0 sm:flex-row sm:space-x-4
        "
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
