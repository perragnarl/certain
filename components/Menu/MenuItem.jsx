import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuItem({ children, href, active }) {
  const activeClass = active ? "border-black" : "border-white";

  return (
    <Link href={href}>
      <a className={`pl-[calc(2rem-4px)] font-semibold border-l-[6px] transition-all hover:border-brand ${activeClass}`}    >
        <motion.span
          whileHover={{ x: '0.25rem' }}
          className="flex py-1 items-center pr-8 hover:text-brand"
        >
          {children}
        </motion.span>
      </a>
    </Link>
  );
}
