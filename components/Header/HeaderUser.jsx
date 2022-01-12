import { Menu, Transition } from "@headlessui/react";
import { QuestionMarkCircle, User } from "iconoir-react";
import { Logout } from "iconsax-react";
import { Fragment } from "react";
import HeaderUserLink from "./HeaderUserLink";

export default function HeaderUser() {
  // const menuItems

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <User
          width={32}
          height={32}
          className="cursor-pointer hover:-translate-y-[0.1rem] mb-2 hover:text-brand transition-all"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-400"
        enterFrom="opacity-0 -translate-y-3"
        enterTo="opacity-100 -translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-3"
      >
        <Menu.Items className="absolute flex flex-col bg-white z-10 shadow-2xl py-5 mt-3 right-0 rounded-3xl min-w-[14rem]">
          <div className="pb-4 mb-2 px-5 border border-x-0 border-t-0">
            <p>Signed in as</p>
            <strong>John Doe</strong>
          </div>
          <Menu.Item>
            <HeaderUserLink href="/account" className="py-3 px-5 transition-all text-sm font-semibold hover:bg-brand hover:text-white flex items-center">
              <User width={24} height={24} className="mr-4" /> Account
            </HeaderUserLink>
          </Menu.Item>
          <Menu.Item>
            <HeaderUserLink href="/account" className="py-3 px-5 transition-all text-sm font-semibold hover:bg-brand hover:text-white flex items-center">
              <QuestionMarkCircle width={24} height={24} className="mr-4" /> Help
            </HeaderUserLink>
          </Menu.Item>
          <Menu.Item>
            <HeaderUserLink href="/account" className="py-3 px-5 transition-all text-sm font-semibold hover:bg-brand hover:text-white flex items-center">
              <Logout width={24} height={24} className="mr-4" /> Log out
            </HeaderUserLink>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    // <Popover className="relative">
    //   <Popover.Button>
    //     <User width={32} height={32} className="cursor-pointer hover:-translate-y-[0.1rem] hover:text-brand transition-all" />
    //   </Popover.Button>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-400"
    //     enterFrom="opacity-0 -translate-y-3"
    //     enterTo="opacity-100 -translate-y-0"
    //     leave="transition ease-in duration-150"
    //     leaveFrom="opacity-100 -translate-y-0"
    //     leaveTo="opacity-0 -translate-y-3"
    //   >
    //     <Popover.Panel className="absolute bg-[rgba(255,255,255,0.8)] z-10 shadow-2xl p-4 mt-3 right-0 rounded-3xl min-w-[28rem]">
    //       <ul className="flex flex-col gap-3">
    //         hej
    //       </ul>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  );
}
