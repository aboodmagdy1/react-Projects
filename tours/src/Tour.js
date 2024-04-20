import { useState } from "react";

function Tour({ tour, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={`${tour.name}-image`} />
      <footer>
        <div className="tour-inf">
          <h4>{tour.name}</h4>
          <h4>{tour.price}</h4>
        </div>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
