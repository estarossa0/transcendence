import { Text, useBoolean } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIsPhone } from ".";
import { MotionBox } from "../motion/motionComponent";
import { useNavStore } from "./context";

interface NavLinkProps {
  page: string;
}

function useIsCurrentPage(page: string): boolean {
  const href = useRouter().asPath;
  if (page === "Home") page = "";
  return `/${page.toLowerCase()}` === href;
}

function NavLink(props: NavLinkProps) {
  const { page } = props;

  const isCurrentPage = useIsCurrentPage(page);
  const isPhone = useIsPhone();
  const [hovering, setHovering] = useBoolean();
  const { isOpen } = useNavStore();

  const linkBoxProps = {
    onMouseEnter: () => setHovering.toggle(),
    onMouseLeave: () => setHovering.toggle(),
    initial: { transformOrigin: "bottom" },
    animate: {
      transformOrigin: "bottom",
      scaleY: isOpen || !isPhone ? 1 : [0.9, 0.1, 0]
      // scaleY: isOpen ? 1 : [0.9, 0.1, 0]
    }
  };

  const linkTextProps = {
    fontFamily: "alata, sans-serif",
    fontWeight: "400",
    cursor: isCurrentPage ? "unset" : "pointer",
    fontSize: "18px",
    textColor: isOpen ? "black" : ["black", "white"]
  };

  const linkUnderlineProps = {
    h: "1px",
    bg: isOpen ? "black" : ["black", "white"],
    initial: { transformOrigin: hovering ? "right" : "left" },
    animate: {
      transformOrigin: hovering ? "right" : "left",
      scaleX: hovering || isCurrentPage ? 1 : 0
    }
  };

  return (
    <MotionBox {...linkBoxProps}>
      <Link href={page === "Home" ? "/" : `/${page.toLowerCase()}`}>
        <Text {...linkTextProps}>{page}</Text>
      </Link>
      <MotionBox {...linkUnderlineProps} />
    </MotionBox>
  );
}

export default NavLink;
export type { NavLinkProps };
