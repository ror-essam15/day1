import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"], 
});
export const metadata = {
  title: "Pro-ducts",
  description: "Simple Next.js site",
    icons: {
    icon: "/favicon.ico",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
