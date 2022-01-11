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
        <Home2 className="mr-6" size={32} /> Home
      </MenuItem>
      <MenuItem
        active={router.pathname === "/people" ? true : false}
        href="/people"
      >
        <Profile2User className="mr-6" size={32} /> People
      </MenuItem>
      <MenuItem
        active={router.pathname === "/settings" ? true : false}
        href="/settings"
      >
        <Setting3 className="mr-6" size={32} /> Settings
      </MenuItem>
    </nav>
  );
}
