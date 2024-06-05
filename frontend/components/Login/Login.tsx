"use client";
import { checkToken, getAccessToken } from "@components/utils/token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { NavbarTop } from "../Layout/Navbar/NavbarTop";

const fetcher = async (url: string, data?: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    (error as any).info = await res.json();
    (error as any).status = res.status;
    throw error;
  }
  return res.json();
};

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  let [loading, setLoading] = useState(true);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetcher("/auth/login", { email, password });
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
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed");
    }
  };

  useEffect(() => {
    checkToken(router);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <LoadingSpinner loading={loading} />
  ) : (
    <div className="flex-col">
      <div className="flex min-h-full flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-gray-900"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {error && (
            <p className="mt-2 text-center text-sm text-red-500">{error}</p>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-gray-900"
            >
              Create account here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}