import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

export function Footer() {
  return (
    <footer className=" md:flex md:items-center md:justify-between p-4 mx-4">
      <ul className="flex items-center justify-center flex-wrap mb-6 md:mb-0">
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Terms and conditions
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Licensing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
          >
            Cookie Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal text-gray-500 hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <FaFacebookF className="text-facebook" />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <FaTwitter className="text-twitter" />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <PiGithubLogoFill className="text-text-primary" />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <FaGoogle className="text-error-500" />
        </a>
      </div>
    </footer>
  );
}
