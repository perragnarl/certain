import MenuItem from "./MenuItem";
import { Home2, Profile2User, Setting3 } from "iconsax-react";

export default function Menu() {
  return (
    <nav className="flex flex-col gap-8 mt-12">      
      <MenuItem active href="/">
          <Home2 className="mr-6" size={32} /> Home
        </MenuItem>
        <MenuItem href="/people">
          <Profile2User className="mr-6" size={32} /> People
        </MenuItem>
        <MenuItem href="/settings">
          <Setting3 className="mr-6" size={32} /> Settings
        </MenuItem>
    </nav>
  )
}
