import Link from "next/link";

export default function MenuItem({ children, href, active }) {
  const activeClass = active ? 'border-black' : 'border-white';

  return (
    <Link href={href}>
      <a className={`pl-[calc(2rem-4px)] border-l-[6px] py-1 ${activeClass}`}>
        <span className="flex items-center pr-8 hover:translate-x-2 transition-all">
          {children}
        </span>
      </a>
    </Link>
  )
}
