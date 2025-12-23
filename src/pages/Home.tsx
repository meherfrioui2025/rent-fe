import { BiCheckCircle, BiMapPin, BiShield } from "react-icons/bi";
import { Link } from "react-router";
import { useState } from "react";

import PropertyCard from "../components/PropertyCard/PropertyCard.tsx";
import FeatureItem from "../components/FeatureItem/FeatureItem.tsx";
import SearchBar from "../components/SearchBar/SearchBar";
import { properties } from "../data/mockData.ts";
import Button from "../components/UI/Button.tsx";
import { BsArrowRight } from "react-icons/bs";

export const FEATURES = [
  {
    label: "Verified Listings",
    icon: BiCheckCircle,
    iconClassName: "text-green-600",
  },
  {
    label: "Trusted Agents",
    icon: BiShield,
    iconClassName: "text-blue-600",
  },
  {
    label: "Nationwide Coverage",
    icon: BiMapPin,
    iconClassName: "text-purple-600",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement search logic here, e.g., filter properties based on searchTerm
    console.log("Searching for:", searchTerm);
  };

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Verified Rental Homes
              <span className="block text-blue-600 mt-2">
                Across the World.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover quality rental properties with verified listings and
              trusted agents nationwide.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-8">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSearch={handleSearch}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.label}
                label={feature.label}
                icon={feature.icon}
                iconClassName={feature.iconClassName}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Properties
              </h2>
              <p className="text-gray-600 mt-2">
                Hand-picked properties just for you
              </p>
            </div>
            <Link to="/listings">
              <Button variant="outline" className="group">
                View All
                <BsArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
