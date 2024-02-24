import React from "react";
import Banner from "../components/Banner";
import FavoritePage from "./FavoritePage";
import BookBundle from "./BookBundle";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoritePage />
      <BookBundle />
    </div>
  );
};

export default Home;
