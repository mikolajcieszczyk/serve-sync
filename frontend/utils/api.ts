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

export const loginOrRegisterUser = async (
  url: string,
  email: string,
  password: string
) => {
  const res = await fetch(url, {
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
