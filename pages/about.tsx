import NavMenu from "../components/nav-menu/";
import Main from "../components/pages/about/main";
import { NavProvider } from "../components/nav-menu/context";

export default function About() {
  return (
    <>
      <NavProvider>
        <NavMenu />
      </NavProvider>
      <Main />
    </>
  );
}
