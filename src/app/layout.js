"use client";
import { getSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "notistack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const APP_NAME = "The Masters Academy";
const APP_DEFAULT_TITLE = "The Masters Academy";
const APP_TITLE_TEMPLATE = "%s - TMA Learning Platform";
const APP_DESCRIPTION = "The Masters Academy Learning Platform";

// export const metadata = {
//   applicationName: APP_NAME,
//   title: {
//     default: APP_DEFAULT_TITLE,
//     template: APP_TITLE_TEMPLATE,
//   },
//   description: APP_DESCRIPTION,
//   manifest: "/manifest.json",
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "default",
//     title: APP_DEFAULT_TITLE,
//     // startUpImage: [],
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     siteName: APP_NAME,
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
//   twitter: {
//     card: "summary",
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
// };

export default function RootLayout({ children }) {
  const session = getSession();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>
          <SnackbarProvider maxSnack={2} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            {children}
          </SnackbarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
