import { FormWrapper } from "#components/FormWrapper/FormWrapper.tsx";
import { Typography } from "#components/Typography/index.tsx";
import Link from "next/link";

export default function Page() {
  const loginDescription = {
    header: "Welcome to ServeSync! 🎾",
    description: "Please sign-in to your account and start the adventure",
    footerDescription: (
      <Typography className="text-text-secondary">
        New on our platform?{" "}
        <Link href="/register" className="text-primary-500">
          Create an account
        </Link>
      </Typography>
    ),
  };

  return (
    <FormWrapper description={loginDescription}>
      <div className="relative">
        <input
          id="email"
          type="email"
          className="peer block border border-zinc-500 px-4 pb-1 pt-6"
          placeholder=""
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
        >
          Email
        </label>
      </div>
    </FormWrapper>
  );
}
