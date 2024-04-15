import { Link } from "react-router-dom";

import logo from "../assets/potential.svg";

export const Logo = () => {
  return (
    <Link to="/feed" className="">
      <img className="pulsating-circle animate-pulse" src={logo} alt="" />
      {/* <p className="text-[40px] font-bold text-white">Potencial</p> */}
    </Link>
  );
};
