import React from "react";

const CommentCard = ({ slide, MaxRating }) => {
  return (
    <div className="comment-card" key={slide.id}>
      <div className="user">
        <div className="user-img">
          <img src={slide.image} alt="user" />
        </div>
        <div className="rating-stars">
          {Array.from({ length: MaxRating }, (_, i) =>
            slide.star >= i + 1 ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )
          )}
        </div>
      </div>
      <div className="comment">
        <p>{slide.comment}</p>
      </div>
    </div>
  );
};
export default CommentCard;
