import { motion } from "framer-motion";
import { CloseSquare } from "iconsax-react";
import styles from "./Notification.module.css";

const closeButton = {
  buttonHidden: { opacity: 0 },
  buttonVisible: { opacity: 1 },
};

export default function Notification({ id, type, title, body, handleClose }) {
  return (
    <motion.div
      initial="buttonHidden"
      whileHover="buttonVisible"
      className={`relative rounded-xl py-4 px-6 ${styles[type]}`}
    >
      <h3 className="font-semibold mb-3 pr-4">{title}</h3>
      <p className="text-sm">{body}</p>
      <motion.button
        variants={closeButton}
        className="absolute right-3 top-3"
        onClick={() => handleClose(id)}
      >
        <CloseSquare className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
