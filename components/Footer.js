import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 tx-ms text-gray-500">
      <div className="px-8 py-3">
        <p className="">Nigeria</p>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex justify-center">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral since
          2007
        </div>
        <div className="flex justify-center space-x-3 whitespace-nowrap md:justify-self-start">
          <p className="">Advertising</p>
          <p className="">Business</p>
          <p className="">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto , ">
          <p className="">Privacy</p>
          <p className="">Terms</p>
          <p className="">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
