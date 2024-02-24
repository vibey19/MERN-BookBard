import React from "react";
import Banner from "../components/Banner";
import FavoritePage from "./FavoritePage";
import BookBundle from "./BookBundle";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoritePage />
      <BookBundle />
      <PromoBanner />
    </div>
  );
};

export default Home;
