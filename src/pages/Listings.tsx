import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Perfect Home
          </h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={() => {}}
          />
        </div>
      </section>
    </div>
  );
};

export default Listings;
