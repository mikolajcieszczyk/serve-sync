import Image from "next/image";
import Link from "next/link";

export function NavbarTop() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex-col items-center	 max-w-screen-xl flex flex-wrap mx-auto p-4">
        <Image
          src={"/img/serve_sync_logo.png"}
          alt={"ServeSync logo"}
          width={100}
          height={100}
        />
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-indigo-500">
            ServeSync
          </span>
        </Link>
      </div>
    </nav>
  );
}
