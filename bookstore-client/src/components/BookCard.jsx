import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  return (
    <div>
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      {/* CARDS */}
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to="/">
                <div>
                  <img
                    src={book.coverImage}
                    alt="coverImage"
                    style={{
                      width: "270px",
                      height: "290px",
                      border: "3/2px solid black",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div>
                  <h3>{book.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
