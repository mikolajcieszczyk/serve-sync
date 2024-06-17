"use client";
import { getAccessToken } from "#utils/token.ts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckToken = (): boolean => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [router]);

  return loading;
};
