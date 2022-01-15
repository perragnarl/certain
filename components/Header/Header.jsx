import { SidebarLeft } from "iconsax-react";
import Notifications from "./HeaderNotifications";
import HeaderSearch from "./HeaderSearch";
import HeaderUser from "./HeaderUser";

export default function Header({ toggleSidebar }) {
  return (
    <div id="header" className="flex justify-between h-[80px]">
      <button onClick={toggleSidebar} className="pl-8">
        <SidebarLeft className="w-8 h-8" />
      </button>
      <div className="flex items-center justify-end gap-32 pr-8">
        <HeaderSearch />
        <div className="flex gap-8">
          <Notifications />
          <HeaderUser />
        </div>
      </div>
    </div>
  );
}
