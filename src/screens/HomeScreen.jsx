import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SubmitReviewModal from '../components/SubmitReviewModal';

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Review Section */}
      <section id="review" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-6">Leave a Review</h2>
          <p className="text-lg text-gray-600 mb-8">
            Rate the freelancer based on their communication, quality of work, and timeliness.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition"
          >
            Leave a Review
          </button>
        </div>
      </section>

      {/* Modal for Submitting Review */}
      <SubmitReviewModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAddReview={() => {}} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
