"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">Pro-ducts</div>

        {/* Centered Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div>
          <Link
            href="/login"
            className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
