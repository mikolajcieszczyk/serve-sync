"use client";
import { getAccessToken } from "#utils/token.ts";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckToken = (): boolean => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const errorPages = ["/404", "/500"];

    if (errorPages.includes(pathname)) {
      setLoading(false);
      return;
    }

    const checkToken = async () => {
      const token = await getAccessToken();
      if (token) {
        console.info("[useCheckToken]: Token exists");
        router.push(pathname);
      } else {
        console.info("[useCheckToken]: Token does not exist");
        router.push("/");
      }
      setLoading(false);
    };

    checkToken();
  }, [router, pathname]);

  return loading;
};
