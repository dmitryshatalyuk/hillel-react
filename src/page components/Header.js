import logo from "../Logo.svg";
import { NavMenu } from "./NavMenu.js";

export function Header() {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <img src={logo} alt="logo"/>
        <NavMenu items={["Home", "Shop", "About us", "Career", "Contact"]} />
      </div>
    </header>
  );
}
