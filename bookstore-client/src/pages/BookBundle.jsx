import React from "react";
import { Link } from "react-router-dom";

const BookBundle = () => {
  return (
    <div className="px-4 lg:px-4 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img
          src="/src/assets/images/favoritebook.jpg"
          alt="A collage of books"
          className="rounded md:w-10/12"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          eveniet animi ipsum, numquam commodi dignissimos excepturi praesentium
          cupiditate blanditiis quo non eum ex obcaecati fuga nostrum
          reprehenderit. Dolor, amet labore.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div className="">
            <h3 className="text-3xl font-bold ">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold ">550+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold ">1200+</h3>
            <p className="text-base">Downloads</p>
          </div>
        </div>

        <Link to="/shop" className="mt-8 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookBundle;
