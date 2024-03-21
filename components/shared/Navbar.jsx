import Link from "next/link";
import Image from "next/image";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import LangMenu from "./LangMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="bg-[#fbd721] h-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div>
          <Link href="/">
            <Image src="/wu_logo.svg" width={200} height={100} />
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-6">
          <div className="flex items-center space-x-4 font-bold">
            <Link href="/" className="hidden md:inline-block">
              Send money
            </Link>
            <Link href="/" className="hidden md:inline-block">
              Track a transfer
            </Link>
            <div>
              <LangMenu />
            </div>
            <div>
              <NavMenu />
            </div>
          </div>
          <div className="hidden md:inline-block space-x-4">
            <Button className="rounded-full text-[#fbd721]">Login</Button>
            <Button variant="ghost">Register</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
