import { BiHome, BiMapPin, BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

import FooterContactList from "./FooterContactList";
import FooterLinks from "./FooterLinks";

const footerNavigation = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Listings", href: "/listings" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <BiHome className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RentHome</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Your trusted partner in finding verified rental properties across
              the United States. We connect renters with quality homes and
              trusted agents.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            {footerNavigation.map((section) => (
              <FooterLinks
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <FooterContactList
              items={[
                {
                  icon: <CgMail className="w-4 h-4" />,
                  label: "info@renthome.com",
                },
                {
                  icon: <BiPhone className="w-4 h-4" />,
                  label: "(800) 555-RENT",
                },
                {
                  icon: <BiMapPin className="w-4 h-4" />,
                  label: "Nationwide, USA",
                },
              ]}
            />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>&copy; 2025 RentHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
