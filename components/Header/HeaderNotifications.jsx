import { AnimatePresence, motion } from "framer-motion";
import { Notification as Bell } from "iconsax-react";
import { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import Popover from "../Popover/Popover";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/notifications`)
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
      });
  }, []);

  return (
    <Popover
      buttonContent={<Bell className="w-8 h-8" />}
      panelWidth="medium"
    >
      <ul className="flex flex-col gap-3">
        <AnimatePresence>
          {notifications.map((notification, i) => (
            <motion.li
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ ease: "linear", duration: 0.1 }}
              key={i}
            >
              <Notification
                id={notification.id}
                type={notification.type}
                title={notification.title}
                body={notification.body}
                handleClose={removeNotification}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Popover>
  );
}
