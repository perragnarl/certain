import Link from "next/link";

export default function HeaderUserLink({ href, children }) {
  return (
    <div>
      <Link href={href}>
        <a className="py-3 px-5 transition-all text-sm font-semibold hover:bg-brand hover:text-white flex items-center">
          {children}
        </a>
      </Link>
    </div>
  );
}
