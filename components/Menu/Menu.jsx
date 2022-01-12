import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Group, HomeSimpleDoor, Settings } from "iconoir-react";

export default function Menu() {
  const router = useRouter();
  return (
    <nav className="flex flex-col gap-8 mt-12">
      <MenuItem 
        active={router.pathname === "/" ? true : false} 
        href="/"
      >
        <HomeSimpleDoor className="w-8 h-8 mr-6" /> Home
      </MenuItem>
      <MenuItem
        active={router.pathname === "/people" ? true : false}
        href="/people"
      >
        <Group className="w-8 h-8 mr-6" /> People
      </MenuItem>
      <MenuItem
        active={router.pathname === "/settings" ? true : false}
        href="/settings"
      >
        <Settings className="w-8 h-8 mr-6" /> Settings
      </MenuItem>
    </nav>
  );
}
