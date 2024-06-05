import { Login } from "@components/components/Login/Login";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row w-2/3 mx-auto mt-10 mb-10 bg-white shadow-lg z-2">
      <div className="rounded px-7 py-4 w-full lg:w-1/2 border-r-0">
        <div className="flex items-center justify-center">
          <Image
            src={"/img/serve_sync_logo.png"}
            alt={"ServeSync logo"}
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-extrabold">ServeSync</h1>
        </div>
        <p>
          ServeSync is designed to be the all-in-one solution for managing
          tennis courts and enhancing the overall tennis experience for everyone
          involved. Whether you&apos;re a club manager, coach, or player,
          ServeSync offers the tools you need to succeed.
        </p>
        <Image
          src={"/img/dashboard_miniature.png"}
          alt={"ServeSync logo"}
          width={500}
          height={100}
          className="rounded shadow-lg my-4 mx-auto"
        />
        <p>
          The application offers a range of features aimed at enhancing the
          efficiency of court reservations, tournament scheduling, and real-time
          court status tracking.
        </p>
      </div>
      <div className="rounded px-7 py-4 w-full lg:w-1/2">
        <Login />
      </div>
    </div>
  );
}
