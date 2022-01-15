import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Home2, Profile2User, Setting3 } from "iconsax-react";

export default function Menu() {
  const router = useRouter();
  return (
    <nav className="flex flex-col gap-8 mt-12">
      <MenuItem 
        active={router.pathname === "/" ? true : false} 
        href="/"
      >
        <Home2 className="w-8 h-8 mr-6" /> Home
      </MenuItem>
      <MenuItem
        active={router.pathname === "/people" ? true : false}
        href="/people"
      >
        <Profile2User className="w-8 h-8 mr-6" /> People
      </MenuItem>
      <MenuItem
        active={router.pathname === "/settings" ? true : false}
        href="/settings"
      >
        <Setting3 className="w-8 h-8 mr-6" /> Settings
      </MenuItem>
    </nav>
  );
}
