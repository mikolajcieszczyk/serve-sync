import { CredentialsWrapper } from "#components/Credentials/CredentialsWrapper.tsx";
import { Typography } from "#components/Typography/index.tsx";
import Link from "next/link";

export default function Page() {
  const loginDescription = {
    header: "Welcome to ServeSync! 🎾",
    description: "Please sign-in to your account and start the adventure",
    footerDescription: (
      <Typography className="text-text-secondary">
        New on our platform?{" "}
        <Link href="/register" className="text-primary-500">
          Create an account
        </Link>
      </Typography>
    ),
  };

  return (
    <CredentialsWrapper description={loginDescription}>
      <div>form</div>
    </CredentialsWrapper>
  );
}
