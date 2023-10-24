import "./globals.css";
import Nav from "./components/Nav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";
import { Roboto, Lobster_Two } from "next/font/google";

// Main font
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const lobster = Lobster_Two({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

export const metadata = {
  title: "Fontify | Lightroom Presets",
  description: "Shop Lightroom Presets Online.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch user
  const session = await getServerSession(authOptions);

  return (
    <html className={`${roboto.variable} ${lobster.variable}`} lang="en">
      <body className={`mx-4 lg:mx-2 ${roboto.className}`}>
        <Hydrate>
          <Nav user={session?.user} expires={session?.expires as string} />
          {children}
        </Hydrate>
        <Footer />
      </body>
    </html>
  );
}
