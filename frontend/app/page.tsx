// import { LoginForm } from "#components/Form/CredentialsForms/LoginForm.tsx";
import AuthButtonServer from "./api/AuthButton.server";
import { auth } from "./auth";

export default async function Page() {
  const session = await auth();

  console.log(`🙈 --> file: page.tsx:7 --> Page --> session:`, session);

  return (
    <div>
      {session ? "Logged in" : "Logged out"}
      <div>{JSON.stringify(session, null, 2)}</div>
      <AuthButtonServer />
    </div>
  );
}
