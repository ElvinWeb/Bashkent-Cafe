import React from "react";
import CommentCard from "./CommentCard";
import { CommentsData } from "../../Data/CommentsData";
import CommentForm from "./CommentForm";

const Comment = () => {
  return (
    <div className="comment">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <div className="comment-container">
              {CommentsData.map((slide) => (
                <CommentCard slide={slide} MaxRating={5} />
              ))}
            </div>
          </div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};
export default Comment;
