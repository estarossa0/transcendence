import NavMenu from "../components/nav-menu";
import { NavProvider } from "../components/nav-menu/context";
import Main from "../components/pages/profile/main";

export default function Profile() {
  return (
    <>
      <NavProvider>
        <NavMenu />
      </NavProvider>
      <Main />
    </>
  );
}
