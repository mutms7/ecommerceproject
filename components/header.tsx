import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            {APP_NAME}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-600">
              Products
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/cart" 
            className="hover:text-gray-600"
          >
            Cart
          </Link>
          <Link 
            href="/account" 
            className="hover:text-gray-600"
          >
            Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;