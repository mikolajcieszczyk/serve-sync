"use client";
import { Box } from "#components/Box/Box.tsx";
import { Button } from "#components/Button/Button.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import { logout } from "@components/utils/token";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-body-bg">
      {/* aside */}
      <Box className="w-64 p-4 flex flex-col bg-white">
        <aside className="">
          <Typography variant="h3">ServeSync</Typography>
          <nav>
            <ul></ul>
          </nav>
        </aside>
      </Box>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* header */}
        <header className="p-4">
          <Box className="flex flex-row justify-between">
            <Typography>Header</Typography>
            <Button size="small" onClick={handleLogout}>
              logout
            </Button>
          </Box>
        </header>

        {/* main */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Box className="min-h-full">main</Box>
        </main>

        {/* footer */}
        <footer className="p-4 text-center">
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}

// getServerSideProps
