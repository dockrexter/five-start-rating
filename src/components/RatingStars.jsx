import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // Full star icon
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Empty star icon
import { useState } from 'react';

const RatingStars = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(-1);

  const getStarColor = (value) => {
    if (value === 0) return 'grey';
    if (value > 0 && value < 3) return 'orange';
    return 'green';
  };

  const feedbackMessages = [
    "Terrible",
    "Poor",
    "Average",
    "Good",
    "Excellent",
  ];

  return (
    <div className="flex flex-col items-center my-4">
      <Rating
        name="rating"
        value={hover !== -1 ? hover : rating} 
        onChange={(e, newValue) => onRatingChange(newValue)}
        size="large"
        precision={0.5} 
        onMouseOver={(e, newHover) => setHover(newHover)}
        onMouseLeave={() => setHover(-1)}
        icon={<StarIcon style={{ color: getStarColor(hover !== -1 ? hover : rating) }} />} 
        emptyIcon={<StarBorderIcon style={{ color: getStarColor(0) }} />} 
        highlightSelectedOnly
      />
      <div className="text-center mt-2">
        {rating > 0 && (
          <span className="text-green-700 font-semibold">
            {feedbackMessages[Math.round(rating) - 1]} 
          </span>
        )}
      </div>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingStars;
