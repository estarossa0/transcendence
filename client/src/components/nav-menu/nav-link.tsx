import { Text, useBoolean } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MotionBox } from "components/motion/motionComponent";

interface NavLinkProps {
  page: string;
  isOpen: boolean;
  isPhone: boolean;
}

const NavLinkItem = ({
  page,
  isOpen,
  isPhone,
  isCurrentPage,
}: NavLinkProps & { isCurrentPage: boolean }) => {
  const linkTextProps = {
    fontFamily: "inter, sans-serif",
    fontWeight: "400",
    cursor: isCurrentPage ? "unset" : "pointer",
    fontSize: { base: "18px", lg: "20px", "2xl": "23px" },
    textColor: (isOpen || isPhone) && page !== "login" ? "black" : "white",
  };

  if (page === "login") {
    return (
      <Link href="/api/auth/login">
        <Text {...linkTextProps}>Login</Text>
      </Link>
    );
  }

  return (
    <Link href={page === "Home" ? "/" : `/${page.toLowerCase()}`}>
      <Text {...linkTextProps}>{page}</Text>
    </Link>
  );
};

function useIsCurrentPage(page: string): boolean {
  const href = useRouter().asPath;
  if (page === "Home") page = "";
  return `/${page.toLowerCase()}` === href;
}

function NavLink(props: NavLinkProps) {
  const { page, isOpen, isPhone } = props;

  const isCurrentPage = useIsCurrentPage(page);
  const [hovering, setHovering] = useBoolean();

  const linkBoxProps = {
    onMouseEnter: () => setHovering.toggle(),
    onMouseLeave: () => setHovering.toggle(),
    initial: { transformOrigin: "bottom", scaleY: 0 },
    animate: {
      transformOrigin: "bottom",
      scaleY: isOpen || !isPhone ? 1 : 0,
    },
  };

  const linkUnderlineProps = {
    h: "1px",
    bg: (isOpen || isPhone) && page !== "login" ? "black" : "white",
    initial: { transformOrigin: hovering ? "right" : "left" },
    animate: {
      transformOrigin: hovering ? "right" : "left",
      scaleX: hovering || isCurrentPage ? 1 : 0,
    },
  };

  return (
    <MotionBox {...linkBoxProps}>
      <NavLinkItem
        page={page}
        isOpen={isOpen}
        isPhone={isPhone}
        isCurrentPage={isCurrentPage}
      />
      <MotionBox {...linkUnderlineProps} />
    </MotionBox>
  );
}

export default NavLink;
export type { NavLinkProps };
