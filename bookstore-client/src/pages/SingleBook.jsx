import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, title, coverImage } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={coverImage} alt="" className="h-80" />
      <h2>{title}</h2>
    </div>
  );
};

export default SingleBook;
