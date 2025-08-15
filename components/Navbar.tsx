import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
          <div className="flex items-center gap2">
            <SignInButton>
              <button className="btn-signin cursor-pointer">Sign in</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
