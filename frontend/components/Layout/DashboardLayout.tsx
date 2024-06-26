import { Box } from "#components/Box/Box.tsx";
import { logout } from "#utils/token.ts";
import { useRouter } from "next/navigation";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ReactNode, useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-body-bg">
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header handleLogout={handleLogout} />
        <main className="flex-1 px-4 overflow-y-auto shadow-md">
          <Box className="min-h-full">{children}</Box>
        </main>
        <Footer />
      </div>
    </div>
  );
}
