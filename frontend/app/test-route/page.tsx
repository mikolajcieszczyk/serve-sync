import { auth } from "#app/auth/index.ts";

export default async function TestRoute() {
  const session = await auth();

  return (
    <main>
      <h1>Test Route</h1>
      <div>User: {session?.user?.email}</div>
    </main>
  );
}