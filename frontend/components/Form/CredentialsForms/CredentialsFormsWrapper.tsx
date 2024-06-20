import { ReactNode } from "react";
import { Divider } from "#components/Divider/Divider.tsx";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa6";
import { Box } from "#components/Box/Box.tsx";
import { Typography } from "#components/Typography/Typography.tsx";
import Image from "next/image";
import Logo from "public/img/serve_sync_logo.png";
interface DescriptionProps {
  header: string;
  description: string;
  footerDescription: ReactNode;
}

interface FormWrapperProps {
  children: ReactNode;
  description: DescriptionProps;
}

export function CredentialsFormsWrapper({
  children,
  description,
}: FormWrapperProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col relative">
      <Box className="w-full md:w-2/3 lg:w-2/3 xl:w-1/3 h-full md:h-5/6 p-12 flex items-center justify-between relative">
        <div
          className="hidden md:block absolute -top-8 -left-8 w-48 h-48 bg-blue-100 rounded-md"
          style={{ zIndex: -1 }}
        ></div>
        <div
          className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 rounded-md p-4 border-dashed border-2 border-primary-opacity-light"
          style={{ zIndex: -1 }}
        >
          <div className="bg-blue-100 h-40 rounded-md"></div>
        </div>

        <div className="flex flex-col md:self-start">
          <div className="grid md:grid-cols-2 items-center">
            <div className="flex flex-col gap-2">
              <Typography variant="h2" className="mb-4">
                ServeSync{" "}
              </Typography>
              <Typography variant="h4">{description.header} </Typography>
              <Typography variant="p" className="text-text-secondary">
                {description.description}
              </Typography>
            </div>

            <div className="mx-auto">
              <Image width={200} src={Logo} alt="serve sync logo" />
            </div>
          </div>
        </div>
        {children}
        <div className="pt-2">
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
