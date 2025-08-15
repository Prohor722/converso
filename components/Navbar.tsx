import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" height={44} width={46} alt="logo" />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems/>
        <SignedOut>
          <div className="flex items-center"></div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
