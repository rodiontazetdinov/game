import { Outlet, useLocation } from "react-router-dom";
import { Logo } from "../components/Logo";
import FooterNavbar from "../components/FooterNavbar";
import cls from "classnames";
// import { HeaderNavbar } from "../components/HeaderNavbar";
// import logo from "../assets/вектор_белый-19.svg";

export const Root = () => {
  const location = useLocation().pathname;
  const isRoot = location === "/";
  return (
    <div
      className={cls({
        "w-screen h-screen flex": true,
        "flex-col justify-center items-center": isRoot,
      })}
    >
      {/* {location !== "/" ? <HeaderNavbar /> : null} */}
      {location === "/" ? <Logo /> : null}
      <Outlet />
      {location !== "/" ? <FooterNavbar /> : null}
    </div>
  );
};
