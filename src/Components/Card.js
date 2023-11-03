import React from "react";
import { BiLike } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
const Card = ({ image }) => {
  return (
    <div>
      <img src={image.largeImageURL} className=" card-img-top" />
      <div className="p-3">
        <h5 className=" font-semibold text-purple-500">
          Photo by: {image.user}
        </h5>
        <div className="flex justify-between">
          <p className="w-full">
            <b>Likes</b> {image.likes}
          </p>
          <p className="w-full">
            <b>Downloads</b> {image.downloads}
          </p>
          <p className="w-full">
            <b>Views</b> {image.views}
          </p>
        </div>
        <p className="tags">
          {image.tags.split(",").map((item, index) => {
            return (
              <span
                key={index}
                className=" bg-green-300 px-2 py-1 rounded-3xl inline-block mx-4 my-2"
              >
                #{item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
