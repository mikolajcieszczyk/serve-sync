// import { LoginForm } from "@/Form/CredentialsForms/LoginForm";
import AuthButtonServer from "./api/AuthButton.server";
import { auth } from "./auth";
// import { logIn } from "./lib/api/auth/login";
// import { loginOrRegisterUser } from "utils/api";

const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

// export async function logIn(email: string, password: string) {
//   try {
//     const response = await fetch(loginUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(`🙈 --> file: index.ts:16 --> getToken --> data:`, data);

//     return data;
//   } catch (error) {
//     console.error(`🙈 --> file: index.ts:22 --> getToken --> error:`, error);
//     return { error: error.message };
//   }
// }

export default async function Page() {
  const session = await auth();

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  // const response = await fetch("http://127.0.0.1:3201/");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch, Miki");
  // }

  // const data = await response.json();

  // console.log(`🙈 --> file: page.tsx:44 --> Page --> data:`, data);

  // console.log(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`);

  // const response = await loginOrRegisterUser(loginUrl, "asd@asd.pl", "asd");

  // console.log(`🙈 --> file: page.tsx:14 --> Page --> response:`, response);

  const email = "asd@asd.pl";
  const password = "asd";
  // const loginData = await logIn(email, password);

  // console.log(`🙈 --> file: page.tsx:44 --> Page --> loginData:`, loginData);

  // console.log(`🙈 --> file: page.tsx:11 --> Page --> response:`, response);

  return (
    <div>
      {session ? "Logged in" : "Logged out"}
      <div>{JSON.stringify(session, null, 2)}</div>
      <AuthButtonServer />
    </div>
    // <LoginForm />
  );
}
