import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--main-font)",
      },
      colors: {
        /** PRIMARY COLORS */
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",

        "primary-opacity-lighter": "var(--primary-opacity-lighter)",
        "primary-opacity-light": "var(--primary-opacity-light)",
        "primary-opacity-main": "var(--primary-opacity-main)",
        "primary-opacity-dark": "var(--primary-opacity-dark)",
        "primary-opacity-darker": "var(--primary-opacity-darker)",

        /** SECONDARY COLORS */
        "secondary-100": "var(--secondary-100)",
        "secondary-200": "var(--secondary-200)",
        "secondary-300": "var(--secondary-300)",
        "secondary-400": "var(--secondary-400)",
        "secondary-500": "var(--secondary-500)",
        "secondary-600": "var(--secondary-600)",
        "secondary-700": "var(--secondary-700)",
        "secondary-800": "var(--secondary-800)",
        "secondary-900": "var(--secondary-900)",

        "secondary-opacity-lighter": "var(--secondary-opacity-lighter)",
        "secondary-opacity-light": "var(--secondary-opacity-light)",
        "secondary-opacity-main": "var(--secondary-opacity-main)",
        "secondary-opacity-dark": "var(--secondary-opacity-dark)",
        "secondary-opacity-darker": "var(--secondary-opacity-darker)",

        /** INFO COLOR (BLUE) COLORS */
        "info-100": "var(--info-100)",
        "info-200": "var(--info-200)",
        "info-300": "var(--info-300)",
        "info-400": "var(--info-400)",
        "info-500": "var(--info-500)",
        "info-600": "var(--info-600)",
        "info-700": "var(--info-700)",
        "info-800": "var(--info-800)",
        "info-900": "var(--info-900)",

        "info-opacity-lighter": "var(--info-opacity-lighter)",
        "info-opacity-light": "var(--info-opacity-light)",
        "info-opacity-main": "var(--info-opacity-main)",
        "info-opacity-dark": "var(--info-opacity-dark)",
        "info-opacity-darker": "var(--info-opacity-darker)",

        /** SUCCESS (GREEN) COLORS */
        "success-100": "var(--success-100)",
        "success-200": "var(--success-200)",
        "success-300": "var(--success-300)",
        "success-400": "var(--success-400)",
        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",
        "success-800": "var(--success-800)",
        "success-900": "var(--success-900)",

        "success-opacity-lighter": "var(--success-opacity-lighter)",
        "success-opacity-light": "var(--success-opacity-light)",
        "success-opacity-main": "var(--success-opacity-main)",
        "success-opacity-dark": "var(--success-opacity-dark)",
        "success-opacity-darker": "var(--success-opacity-darker)",

        /** WARNING (YELLOW) COLORS */
        "warning-100": "var(--warning-100)",
        "warning-200": "var(--warning-200)",
        "warning-300": "var(--warning-300)",
        "warning-400": "var(--warning-400)",
        "warning-500": "var(--warning-500)",
        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",
        "warning-900": "var(--warning-900)",

        "warning-opacity-lighter": "var(--warning-opacity-lighter)",
        "warning-opacity-light": "var(--warning-opacity-light)",
        "warning-opacity-main": "var(--warning-opacity-main)",
        "warning-opacity-dark": "var(--warning-opacity-dark)",
        "warning-opacity-darker": "var(--warning-opacity-darker)",

        /** ERROR (RED) COLORS */
        "error-100": "var(--error-100)",
        "error-200": "var(--error-200)",
        "error-300": "var(--error-300)",
        "error-400": "var(--error-400)",
        "error-500": "var(--error-500)",
        "error-600": "var(--error-600)",
        "error-700": "var(--error-700)",
        "error-800": "var(--error-800)",
        "error-900": "var(--error-900)",

        "error-opacity-lighter": "var(--error-opacity-lighter)",
        "error-opacity-light": "var(--error-opacity-light)",
        "error-opacity-main": "var(--error-opacity-main)",
        "error-opacity-dark": "var(--error-opacity-dark)",
        "error-opacity-darker": "var(--error-opacity-darker)",

        /** GRAY (BLACK) COLORS */
        "action-focus": "var(--action-focus)",
        "main-02": "var(--main-02)",
        "action-disabled": "var(--action-disabled)",
        "text-disabled": "var(--text-disabled)",
        "main-05": "var(--main-05)",
        "action-active": "var(--action-active)",
        "text-secondary": "var(--text-secondary)",
        "main-08": "var(--main-08)",
        "text-primary": "var(--text-primary)",

        /** EXTRA */
        "main-color": "var(--main-color)",
        "action-hover": "var(--action-hover)",
        "action-selected": "var(--action-selected)",
        divider: "var(--divider)",
        "action-disabled-bg": "var(--action-disabled-bg)",
        "outline-border": "var(--outline-border)",
        "input-border": "var(--input-border)",
        "backdrop-overlay": "var(--backdrop-overlay)",
        facebook: "var(--bg-facebook)",
        twitter: "var(--bg-twitter)",

        "gray-opacity-lighter": "var(--gray-opacity-lighter)",
        "gray-opacity-light": "var(--gray-opacity-light)",
        "gray-opacity-main": "var(--gray-opacity-main)",
        "gray-opacity-dark": "var(--gray-opacity-dark)",
        "gray-opacity-darker": "var(--gray-opacity-darker)",
        snackbar: "var(--snackbar)",
        "body-bg": "var(--body-bg)",
        "paper-bg": "var(--paper-bg)",
        "table-header": "var(--table-header)",
        "chat-bg": "var(--chat-bg)",
        "track-bg": "var(--track-bg)",
        "grey-light": "var(--grey-light)",

        "box-shadow-focus": "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
      },
      boxShadow: {
        md: "0px 3px 12px 0px rgba(47, 43, 61, 0.14)",
      },
      opacity: {
        "opacity-lighter": "var(--opacity-lighter)",
        "opacity-light": "var(--opacity-light)",
        "opacity-main": "var(--opacity-main)",
        "opacity-dark": "var(--opacity-dark)",
        "opacity-darker": "var(--opacity-darker)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
