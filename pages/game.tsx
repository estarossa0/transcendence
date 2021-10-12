import NavMenu from "../components/nav-menu";
import { NavProvider } from "../components/nav-menu/context";
import Main from "../components/pages/game/main";

export default function Game() {
  return (
    <>
      <NavProvider>
        <NavMenu />
      </NavProvider>
      <Main />
    </>
  );
}
