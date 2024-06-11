import { ReactNode } from "react";
import { Box } from "../Box/Box";
import { Typography } from "../Typography";
import { Divider } from "#components/Divider/Divider.tsx";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

interface DescriptionProps {
  header: string;
  description: string;
  footerDescription: ReactNode;
}

interface CredentialsWrapperProps {
  children: ReactNode;
  description: DescriptionProps;
}

export function CredentialsWrapper({
  children,
  description,
}: CredentialsWrapperProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <Box className="w-full md:w-2/3 h-3/4 p-12 flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <Typography variant="h2" className="self-center mb-4">
            ServeSync
          </Typography>
          <Typography variant="h4">{description.header}</Typography>
          <Typography variant="p" className="text-text-secondary">
            {description.description}
          </Typography>
        </div>
        {children}
        <div className="">
          {description.footerDescription}
          <Divider title="or" />
          <div className="flex justify-center items-center gap-4">
            <FaFacebookF className="text-facebook" />
            <FaTwitter className="text-twitter" />
            <PiGithubLogoFill className="text-text-primary" />
            <FaGoogle className="text-error-500" />
          </div>
        </div>
      </Box>
    </div>
  );
}
