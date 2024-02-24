import React from "react";
import Banner from "../components/Banner";
import FavoritePage from "./FavoritePage";
import BookBundle from "./BookBundle";
import PromoBanner from "./PromoBanner";
import TrendingBooks from "./TrendingBooks";
import Review from "../components/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoritePage />
      <BookBundle />
      <PromoBanner />
      <TrendingBooks />
      <Review />
    </div>
  );
};

export default Home;
