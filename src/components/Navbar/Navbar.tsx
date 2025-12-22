import { BiHome, BiPhone, BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router";
import { BsInfo } from "react-icons/bs";

import NavLinkItem from "./NavLinkItem";

export interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/", icon: BiHome },
  { label: "Listings", path: "/listings", icon: BiSearch },
  { label: "About", path: "/about", icon: BsInfo },
  { label: "Contact", path: "/contact", icon: BiPhone },
];

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BiHome className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">RentHome</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLinkItem
                key={item.path}
                path={item.path}
                label={item.label}
                icon={item.icon}
                isActive={isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
