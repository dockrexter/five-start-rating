const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 to-green-200 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-700 mb-6">Rate Your Freelancers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Share your experiences with top-rated freelancers based on their performance in various categories.
        </p>
        <a href="#review" className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition">
          Leave a Review
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
