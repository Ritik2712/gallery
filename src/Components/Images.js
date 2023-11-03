import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Images = ({ theme }) => {
  const images = useSelector((state) => state.images);
  console.log("image", images);
  return (
    <div className={`flexbox ${theme ? "dark" : null}`}>
      {images.length ? (
        images.map((item, index) => {
          return (
            <div
              key={index}
              className={`card ${
                theme ? " border-x-white border-y-white dark " : null
              }`}
            >
              <Card image={item} />
            </div>
          );
        })
      ) : (
        <h1 className={` text-lg font-bold ${theme ? "dark" : null}`}>
          No Images
        </h1>
      )}
    </div>
  );
};

export default Images;
