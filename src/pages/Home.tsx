const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Verified Rental Homes
              <span className="block text-blue-600 mt-2">Across the U.S.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover quality rental properties with verified listings and
              trusted agents nationwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
