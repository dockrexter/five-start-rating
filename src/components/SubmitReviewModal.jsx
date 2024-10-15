import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Button, TextField } from '@mui/material';
import RatingStars from './RatingStars';

const SubmitReviewModal = ({ open, onClose, onAddReview }) => {
  const [rating, setRating] = useState({
    communication: 0,
    quality: 0,
    timeliness: 0,
  });

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating.communication > 0 && comment) {
      onAddReview({ rating, comment });
      setRating({ communication: 0, quality: 0, timeliness: 0 });
      setComment('');
      onClose();
    }
  };

  // Calculate average rating
  const averageRating = (
    (rating.communication + rating.quality + rating.timeliness) / 3
  ).toFixed(1); 

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ borderRadius: '16px', boxShadow: 24 }}>
      <DialogTitle className="text-green-700 text-center text-3xl">Rate the Freelancer</DialogTitle>
      <DialogContent sx={{ padding: '20px', borderRadius: '12px', boxShadow: 2 }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="container mb-4">
            <label className="block text-green-700">Communication</label>
            <RatingStars rating={rating.communication} onRatingChange={(value) => setRating({ ...rating, communication: value })} />
          </div>

          <div className="container mb-4">
            <label className="block text-green-700">Quality of Work</label>
            <RatingStars rating={rating.quality} onRatingChange={(value) => setRating({ ...rating, quality: value })} />
          </div>

          <div className="container mb-4">
            <label className="block text-green-700">Timeliness</label>
            <RatingStars rating={rating.timeliness} onRatingChange={(value) => setRating({ ...rating, timeliness: value })} />
          </div>

          <div className="container mb-4">
            <label className="block text-green-700">Overall Rating</label>
            <RatingStars rating={averageRating} onRatingChange={() => {}} /> 
          </div>

          <TextField
            label="Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="my-4 shadow-md"
            sx={{ borderRadius: '8px' }} 
          />

          <Button variant="contained" color="success" type="submit" className="w-full py-3" sx={{ borderRadius: '8px', boxShadow: 2 }}>
            Submit Review
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

SubmitReviewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddReview: PropTypes.func.isRequired,
};

export default SubmitReviewModal;
