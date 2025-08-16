"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Home", url: "/" },
    { label: "Companions", url: "/companions" },
    { label: "My Journey", url: "/my-journey" },
    { label: "Subscription", url: "/subscription" },
  ];

const NavItems = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <nav className="flex items-center gap-4">
      {links.map(({label,url}, index) => (
        <Link 
            key={index} 
            href={url} 
            className={cn(pathname===url && 'font-semibold text-purple-700')}
            >
                {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
