import Link from "next/link"
import LogoImage from "./LogoImage";

export default function Logo() {
  return (
    <Link href="/">
      <a id="logo" className="flex pl-8 h-[80px] items-center hover:text-brand transition-all">
        <LogoImage />
      </a>
    </Link>
  );
}
