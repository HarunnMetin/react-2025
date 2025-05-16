import React from "react";

function Course({ course }) {
  const { id, title, description, price, image } = course;

  return (
    <div className="course">
      <div>
        <img className="img" src={image} />
        <div className="info">
          <h4>{title}</h4>
          <h5>{description}</h5>
          <h3 className="price" >{price} $</h3>
        </div>
      </div>
    </div>
  );
}

export default Course;
