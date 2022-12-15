import NavBarList from "./navBarList";
import { navItemsLeft, navItemsRight } from './navItems';
const NavBar = () => {
  return <nav className="h-16 flex text-white font-heading justify-between items-center max-w-[1400px] mx-auto px-10 text-lg">
    <NavBarList
      items={navItemsLeft}
    />
     <NavBarList
      items={navItemsRight}
    />
  </nav>
}

export default NavBar;