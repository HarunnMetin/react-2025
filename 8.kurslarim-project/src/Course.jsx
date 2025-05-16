import React from "react";

function Course({ course }) {
  const { id, title, description, price, image } = course;

  return (
    <div className="course">
      <div>
        <img src={image} />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        
      </div>
    </div>
  );
}

export default Course;
