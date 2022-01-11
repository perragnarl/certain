import Link from "next/link";

export default function MenuItem({ children, href, active }) {
  const activeClass = active ? 'border-black' : 'border-white';

  return (
    <Link href={href}>
      <a className={`pl-[calc(2rem-4px)] border-l-[6px] transition-all hover:border-brand ${activeClass}`}>
        <span className="flex py-1 items-center pr-8 hover:text-brand hover:translate-x-1 transition-all">
          {children}
        </span>
      </a>
    </Link>
  )
}
