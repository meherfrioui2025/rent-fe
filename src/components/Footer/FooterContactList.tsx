import { FC, ReactNode } from "react";

interface FooterContactItem {
  icon: ReactNode;
  label: string;
}

interface FooterContactListProps {
  items: FooterContactItem[];
}

const FooterContactList: FC<FooterContactListProps> = ({ items }) => {
  return (
    <ul className="space-y-2 text-sm text-gray-400">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="w-4 h-4 flex items-center justify-center">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FooterContactList;
