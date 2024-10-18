import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText,setReviewText] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const result = {rating,reviewText};
        console.log("result : ",result);
    } catch (error) {
        console.log("Error While Submitting The FeedBack in frontend : ",error);
    }
  };

  return (
    <form action="">

      <div>
        <h3 className="text-headingColor text-[16px] font-semibold mb-4">
          How Would You Rate The Overall Experience
        </h3>

        <div>
          {[...Array(5)].map((_, index) => {
            const currentIndex = index + 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  currentIndex <= (hover || rating)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-22 cursor-pointer`}
                onClick={() => setRating(currentIndex)}
                onMouseEnter={() => setHover(currentIndex)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
            Share your Feedbacks or suggestions
        </h3>

        <textarea 
            className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
            rows="5"
            value={reviewText}
            placeholder="Write your message" 
            onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      <button 
        type="button"
        className="btn"
        onClick={handleSubmit}
      >
        Submit Feedback
      </button>


    </form>
  );
};

export default FeedbackForm;
