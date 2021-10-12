import NavMenu from "../components/nav-menu";
import Main from "../components/pages/home/main";
import Logo from "../components/logo";
import { NavProvider } from "../components/nav-menu/context";

export default function Home() {
  return (
    <>
      <Logo />
      <NavProvider>
        <NavMenu />
      </NavProvider>
      <Main />
    </>
  );
}
