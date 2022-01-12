import { SearchNormal1 } from "iconsax-react";
import Notifications from "./HeaderNotifications";
import HeaderSearch from "./HeaderSearch";
import User from "./HeaderUser";

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-end gap-32 pr-8">
      <HeaderSearch />
      <div className="flex gap-8">
        <Notifications />
        <User />
      </div>
    </div>
  );
}
