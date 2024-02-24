import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const BookCard = ({ headline, books }) => {
  return (
    <div>
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      {/* CARDS */}
      <div className="mt-12">
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
              <Link to={`/book/${book._id}`}>
                <div className="relative">
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
                  <div className="absolute top-2 right-3 p-2 rounded">
                    <FaCartShopping />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                  <div>
                    <p>$10.00</p>
                  </div>
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
