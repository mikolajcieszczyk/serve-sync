"use client";
import { logout } from "@components/utils/token";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="container">
      <div>Dashboard</div>
      <button className="border-l-orange-900" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
