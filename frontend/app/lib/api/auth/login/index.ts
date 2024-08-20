import { AuthService } from "@/api/src/auth/auth.service";
import { UsersService } from "../../../../../../api/src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { add } from "@shared/utils";

export async function logIn(email: string, password: string) {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   }
  // );

  // try {
  //   const data = await response.json();

  //   console.log(`🙈 --> file: index.ts:16 --> getToken --> data:`, data);

  //   return data;
  // } catch (error) {
  //   console.error(`🙈 --> file: index.ts:22 --> getToken --> error:`, error);
  // }

  const authService = new AuthService(UsersService, JwtService);
  return authService.login({ email, password });
}
