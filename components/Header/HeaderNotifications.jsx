import { Popover, Transition } from "@headlessui/react";
import { Bell } from "iconoir-react";
import { Fragment, useEffect, useState } from "react";
import styles from "./HeaderNotifications.module.css";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/notifications`)
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      });
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button>
        <Bell width={32} height={32} className="w-8 h-8 cursor-pointer hover:-translate-y-[0.1rem] hover:text-brand transition-all" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-400"
        enterFrom="opacity-0 -translate-y-3"
        enterTo="opacity-100 -translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-3"
      >
        <Popover.Panel className="absolute bg-[rgba(255,255,255,0.8)] z-10 shadow-2xl p-4 mt-3 right-0 rounded-3xl min-w-[28rem]">
          <ul className="flex flex-col gap-3">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`rounded-xl py-4 px-6 ${styles[notification.type]}`}
              >
                <h3 className="font-semibold mb-3">{notification.title}</h3>
                <p className="text-sm">{notification.body}</p>
              </li>
            ))}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
