import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src={logo} alt=" " />
      </div>
      <ul className="flex gap-12 text-lg font-bold">
        <li>
          <a>
            <NavLink to={"/"}>Home</NavLink>
          </a>
        </li>
        <li>
          <a>
            <NavLink to={"/donation"}>Donation</NavLink>
          </a>
        </li>
        <li>
          <a>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
