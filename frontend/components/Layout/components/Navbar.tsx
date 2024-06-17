import { Box } from "#components/Box/Box.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import Image from "next/image";
import Logo from "public/img/serve_sync_logo.png";
export function Navbar() {
  return (
    <Box className="w-64 p-4 flex flex-col bg-white items-start">
      <aside className="">
        <div className="flex items-center justify-items-end">
          <Image
            src={Logo}
            width={40}
            height={40}
            alt="serve sync logo"
            placeholder="blur"
          />
          <Typography variant="h3">ServeSync</Typography>
        </div>
        <nav>
          <ul>asasas</ul>
        </nav>
      </aside>
    </Box>
  );
}
