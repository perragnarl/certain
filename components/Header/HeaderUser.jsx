import { Logout, MessageQuestion, User } from "iconsax-react";
import Popover from "../Popover/Popover";
import HeaderUserLink from "./HeaderUserLink";

export default function HeaderUser() {
  return (
    <Popover buttonContent={<User className="w-8 h-8" />} panelWidth="small">
      <div className="pb-4 mb-2 px-5 border border-x-0 border-t-0">
        <p>Signed in as</p>
        <strong>John Doe</strong>
      </div>
      <nav>
        <HeaderUserLink href="/account">
          <User width={24} height={24} className="mr-4" /> Account
        </HeaderUserLink>
        <HeaderUserLink href="/help">
          <MessageQuestion width={24} height={24} className="mr-4" /> Help
        </HeaderUserLink>
        <HeaderUserLink href="/logout">
          <Logout width={24} height={24} className="mr-4" /> Log out
        </HeaderUserLink>
      </nav>
    </Popover>
  );
}
