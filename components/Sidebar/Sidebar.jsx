import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

export default function Sidebar() {
  return (
    <div id="sidebar" className="bg-white w-[240px]">
      <Logo />
      <Menu />
    </div>
  );
}
