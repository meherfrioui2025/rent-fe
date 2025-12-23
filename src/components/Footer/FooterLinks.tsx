import { Link } from "react-router";
import { FC } from "react";

interface FooterLinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title?: string;
  links: FooterLinkItem[];
}

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      {title && (
        <h4 className="font-semibold mb-4 text-white">{title}</h4>
      )}

      <ul className="space-y-2 text-sm text-gray-400">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
