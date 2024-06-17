import { Box } from "#components/Box/Box.tsx";
import { Button } from "#components/Button/Button.tsx";
import { Typography } from "#components/Typography/Typography.tsx";

interface HeaderProps {
  handleLogout: () => void;
}

export function Header({ handleLogout }: HeaderProps) {
  return (
    <header className="p-4">
      <Box className="flex flex-row justify-between">
        <Typography>Header</Typography>
        <Button size="small" onClick={handleLogout}>
          logout
        </Button>
      </Box>
    </header>
  );
}
