import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"], // درجات السماكة
});
export const metadata = {
  title: "My Website",
  description: "Simple Next.js site",
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
