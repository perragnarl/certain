import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

export default function Sidebar() {
  return (
    <div id="sidebar" className="h-screen bg-white">
      <Logo />
      <Menu />
    </div>
  );
}
