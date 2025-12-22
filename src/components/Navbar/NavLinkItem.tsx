import { Link } from "react-router";
import { FC } from "react";

interface NavLinkItemProps {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: (path: string) => boolean;
}

const NavLinkItem: FC<NavLinkItemProps> = ({
  path,
  label,
  icon: Icon,
  isActive,
}) => {
  const active = isActive(path);

  return (
    <Link
      to={path}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? "text-blue-600 bg-blue-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
};

export default NavLinkItem;
