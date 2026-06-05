import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jotcanva",
  description: "Capture ideas before they disappear. Jotcanva is a simple and intuitive note-taking app designed to help you quickly jot down your thoughts, ideas, and inspirations before they slip away. With a clean and user-friendly interface, Jotcanva allows you to create, organize, and access your notes effortlessly. Whether you're brainstorming for a project, capturing fleeting ideas, or simply keeping track of your thoughts, Jotcanva is the perfect tool to ensure that your ideas are always within reach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
            {children}
        </ClerkProvider>
        </body>
    </html>
  );
}
