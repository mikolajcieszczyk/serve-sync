"use client";
import { getAccessToken } from "#utils/token.ts";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckToken = (): boolean => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const errorPages = ["/404", "/500"]; // Dodaj tutaj inne strony błędów, jeśli masz więcej

    if (errorPages.includes(pathname)) {
      setLoading(false);
      return;
    }

    const checkToken = async () => {
      const token = await getAccessToken();
      if (token) {
        console.log(token);
        router.push("/dashboard");
      } else {
        console.log("nietoken");
        router.push("/");
      }
      setLoading(false);
    };

    checkToken();
  }, [router, pathname]);

  return loading;
};
