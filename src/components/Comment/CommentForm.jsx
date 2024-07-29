import React from "react";
import title_design from "../../bashkent-image/design/rotate.png";

const CommentForm = () => {
  return (
    <div className="col-12 col-xl-6">
      <form className="comment-form">
        <div className="section-title">
          <h1 className="title">Rəy yazın</h1>
          <img src={title_design} alt="design" />
        </div>
        <input type="text" placeholder="Adınız *" required />
        <input type="text" placeholder="Email *" required />
        <select id="branch-options" required>
          <option disabled selected className="selected">
            Filialı seçin
          </option>
          <option value="Başkent Nərimanov">Başkent Nərimanov</option>
          <option value="Başkent 28 May">Başkent 28 May</option>
          <option value="Başkent Memar Əcəmi">Başkent Memar Əcəmi</option>
          <option value="Başkent Yasamal">Başkent Yasamal</option>
          <textarea id="comment" required></textarea>
          <button type="submit" className="btn-submit active">
            Göndər
          </button>
        </select>
        <textarea id="comment" placeholder="Rəyiniz *" required></textarea>
        <button type="submit" className="btn-submit active">
          Göndər
        </button>
      </form>
    </div>
  );
};
export default CommentForm;
