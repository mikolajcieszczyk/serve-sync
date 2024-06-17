import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LoginApiResponse } from "./api";

export const isTokenValid = (expiresAt: string): boolean => {
  return new Date().getTime() < Number(expiresAt);
};

export const getAccessToken = async (): Promise<string | null> => {
  const accessToken = localStorage.getItem("accessToken");
  const accessTokenExpiresAt = localStorage.getItem("accessTokenExpiresAt");

  if (
    accessToken &&
    accessTokenExpiresAt &&
    isTokenValid(accessTokenExpiresAt)
  ) {
    return accessToken;
  }

  const refreshToken = localStorage.getItem("refreshToken");
  const refreshTokenExpiresAt = localStorage.getItem("refreshTokenExpiresAt");

  if (
    refreshToken &&
    refreshTokenExpiresAt &&
    isTokenValid(refreshTokenExpiresAt)
  ) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      if (data.accessTokenExpiresAt) {
        localStorage.setItem(
          "accessTokenExpiresAt",
          data.accessTokenExpiresAt.toString()
        );
      }
      return data.accessToken;
    }
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessTokenExpiresAt");
  localStorage.removeItem("refreshTokenExpiresAt");
  return null;
};

export const checkToken = async (router: AppRouterInstance) => {
  const token = await getAccessToken();

  if (token) {
    router.push("/dashboard");
    return;
  } else {
    router.push("/");
  }
};

export const setToken = async (response: LoginApiResponse) => {
  localStorage.setItem("accessToken", response.accessToken);
  localStorage.setItem("refreshToken", response.refreshToken);
  localStorage.setItem(
    "accessTokenExpiresAt",
    response.accessTokenExpiresAt.toString()
  );
  localStorage.setItem(
    "refreshTokenExpiresAt",
    response.refreshTokenExpiresAt.toString()
  );
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessTokenExpiresAt");
  localStorage.removeItem("refreshTokenExpiresAt");
};
