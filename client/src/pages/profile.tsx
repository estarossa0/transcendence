import NavMenu from "components/nav-menu";
import Main from "components/pages/profile/main";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Profile() {
  return (
    <>
      <NavMenu />
      <Main />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
