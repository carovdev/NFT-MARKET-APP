import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { Colors } from "../Theme";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenuEl = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(80px);
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const Link = styled.a`
  font-size: 1.7rem;
  ${(p) => (p.active ? `color:${Colors.Primary}` : "")};
  position: relative;
  cursor: pointer;

  ::before {
    ${(p) => (!p.active ? "display:none" : "")}
    content:'';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    height: 0.3rem;
    background-color: ${Colors.Primary};
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

export default function NavMenu() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <NavMenuEl>
      <Link
      active={pathname === "/"}
        onClick={() => {
          nav("/");
        }}
      >
        <BiHomeAlt />
      </Link>
      <Link
        active={pathname === "/store" || pathname === "/products" }
        onClick={() => {
          nav("/store");
        }}
      >
        <BiStore />
      </Link>
      <Link>
        <AiOutlineUser />
      </Link>
    </NavMenuEl>
  );
}
