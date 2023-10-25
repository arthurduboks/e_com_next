"use client";

const StarRating = ({ totalStars = 5, value = 0 }) => {
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          className={`h-6 w-6 ${
            index < value ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.4 7.2h7.6l-6.2 4.8l2.4 7.2l-6.2-4.8l-6.2 4.8l2.4-7.2l-6.2-4.8h7.6z"></path>
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
