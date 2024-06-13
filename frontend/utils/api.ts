export interface LoginApiRequest {
  email: string;
  password: string;
}

export interface LoginApiResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  refreshTokenExpiresAt: number;
}

export interface ApiError extends Error {
  info?: {
    message?: string;
  };
  status?: number;
}

const loginUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data."
    ) as ApiError;
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
