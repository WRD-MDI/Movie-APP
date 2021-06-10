import React from "react";
import { Rate } from "../Rate/Rate";

export const Moviecard = ({ movie }) => {
  return (
    <div>
      <img src={movie.image} alt="pic" />
      <div>
        <Rate rating={movie.rating} />
        <span>{movie.name}</span>
        <br />
        <span>{movie.date}</span>
        <br />
        <span>{movie.description}</span>
      </div>
    </div>
  );
};
