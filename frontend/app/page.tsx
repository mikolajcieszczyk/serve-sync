// import { LoginForm } from "#components/Form/CredentialsForms/LoginForm.tsx";
import { auth } from "#app/auth/index.ts";
import AuthButtonServer from "./api/AuthButton.server";

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
