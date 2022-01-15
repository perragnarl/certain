import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import styles from "./Popover.module.css";

export default function Popover({ buttonContent, panelWidth, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative">
        <motion.button
          whileHover={{ y: "-0.1rem", color: "rgba(168, 85, 247, 1)" }}
          whileFocus={{ y: "-0.1rem", color: "rgba(168, 85, 247, 1)" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {buttonContent}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="popover"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.1 }}
              className={`absolute bg-white z-10 shadow-2xl p-4 mt-3 right-0 rounded-3xl ${styles[panelWidth]}`}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OutsideClickHandler>
  );
}
