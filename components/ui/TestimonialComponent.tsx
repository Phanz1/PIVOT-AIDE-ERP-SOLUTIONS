import { useState } from "react";
import { FaStar } from "react-icons/fa"; // import Font Awesome star icons

interface Review {
  name: string;
  message: string;
  rating: number;
}

const TestimonialComponent = () => {
  const [reviews, setReviews] = useState<Review[]>([
    { name: "Sarah M.", message: "At DMV Tax Pro, they made tax season stress-free. Their knowledge saved me money, and I feel confident knowing they have my back for IRS audits.”", rating: 5 },
    { name: "John D.", message: "The team at DMV Tax Pro has been instrumental in helping my business thrive. Their bookkeeping services are top-notch, and I always feel supported when I have questions about taxes or finances.”", rating: 4 },
   
  ]);
  const [currentReviews, setCurrentReviews] = useState(reviews.slice(0, 3));
  const [newReview, setNewReview] = useState<Review>({ name: "", message: "", rating: 0 });
  const [currentPage, setCurrentPage] = useState(0);

  const handleAddReview = () => {
    if (newReview.name && newReview.message) {
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setNewReview({ name: "", message: "", rating: 0 });
      paginateReviews(currentPage, updatedReviews);
    }
  };

  const paginateReviews = (page: number, reviewList = reviews) => {
    const start = page * 3;
    const end = start + 3;
    setCurrentReviews(reviewList.slice(start, end));
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * 3 < reviews.length) {
      paginateReviews(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      paginateReviews(currentPage - 1);
    }
  };

  return (
    <div className="w-full px-8 py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">User Testimonials</h2>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {currentReviews.map((review, index) => (
          <div key={index} className="p-6 border border-purple-200 rounded-lg bg-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-3">
              <h3 className="font-semibold text-lg text-indigo-800 mr-4">{review.name}</h3>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic">"{review.message}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-lg ${currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * 3 >= reviews.length}
          className={`px-4 py-2 rounded-lg ${(currentPage + 1) * 3 >= reviews.length ? "bg-gray-300 cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}`}
        >
          Next
        </button>
      </div>

      <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">Add Your Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="w-full p-3 mb-4 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
        <textarea
          placeholder="Your Review"
          value={newReview.message}
          onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
          className="w-full p-3 mb-4 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
        
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg text-gray-700 mr-3">Rating:</span>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                className={i < newReview.rating ? "text-yellow-500 cursor-pointer" : "text-gray-300 cursor-pointer"}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleAddReview}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default TestimonialComponent;
