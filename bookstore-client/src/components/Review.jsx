import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Happy Customers
      </h2>
      <div className="">
        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 75,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    As the world of Harry Potter unfolded on the pages of my
                    creation, I must say, the experience of purchasing books
                    from this online bookstore has been nothing short of
                    enchanting. The seamless process, from selecting the
                    Philosopher's Stone to witnessing the Deathly Hallows in my
                    cart, was as delightful as a trip to Honeydukes. The timely
                    delivery by owl post – I mean, express courier – ensured
                    that readers around the world could embark on their Hogwarts
                    journey without delay. Well done,for making the magic
                    accessible to Muggles and wizards alike.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-02.jpg"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">JK Rowling</h5>
                  <p className="font-base">
                    Waving wands and paying bills – the only two things I'm good
                    at!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    Elementary, my dear readers! As I, Arthur Conan Doyle,
                    delved into the mysteries of Sherlock Holmes, I must commend
                    this online bookstore for its deductive prowess. The search
                    functionality was as keen as Holmes's powers of observation,
                    and the checkout process was faster than Dr. Watson
                    realizing the solution to a case. The books arrived
                    promptly, as if delivered by the Baker Street Irregulars
                    themselves. Well done, dear bookstore, for making the
                    adventures of Holmes and Watson easily accessible to eager
                    detectives.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-03.webp"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">
                    Sir Arthur Conan Doyle
                  </h5>
                  <p className="font-base">
                    Solving crimes and creating awkward social situations – it's
                    elementary, my dear Watson.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    Stepping through the wardrobe into the enchanting land of
                    Narnia has always been a wondrous experience, and so was
                    navigating through this online bookstore. From The
                    Magician's Nephew to The Last Battle, the website provided a
                    seamless journey akin to riding on Aslan's back. The
                    checkout process was as straightforward as following the
                    path to Cair Paravel, and the delivery was as reliable as
                    Mr. Tumnus himself. A job well done, dear bookstore, for
                    ensuring readers can access Narnia with the click of a
                    button.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-04.jpg"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">C.S. Lewis</h5>
                  <p className="font-base">
                    For the record, I am still in the closet
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    As the tales of Percy Jackson unfolded, I couldn't help but
                    appreciate the modern twist this online bookstore brought to
                    the demigod experience. The lightning-fast search feature
                    made finding my own adventures a breeze, and the checkout
                    process was smoother than a ride on Blackjack. The books
                    arrived in pristine condition, guarded as if by a celestial
                    bronze shield. Kudos to the bookstore for making these
                    mythological escapades easily accessible to mortals and
                    demigods alike.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-05.jpg"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">Rick Riordan</h5>
                  <p className="font-base">
                    Making mythology cool since Zeus thought lightning was too
                    mainstream
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    In the realm of Middle-earth, where the fate of the One Ring
                    hung in the balance, I found myself pleasantly surprised by
                    the efficiency of this online bookstore. From the Shire to
                    Mount Doom, the navigation through the website was as smooth
                    as Frodo's journey, and the checkout process felt swifter
                    than Legolas shooting arrows. The books arrived with the
                    punctuality befitting a journey to Rivendell, and the
                    packaging ensured they were as protected as the secrets of
                    the Council of Elrond.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-06.jpg"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">J.R.R. Tolkien</h5>
                  <p className="font-base">
                    Created a whole language, but still can't decide if it's
                    'orc' or 'elf'ish.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow-2xl bg-white py-5 px-4 md:m-5 rounded-lg border"
              style={{ width: "300px", height: "515px" }}
            >
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="mt-7">
                  <p className="mb-5">
                    In the moonlit world of vampires and werewolves, I found the
                    online bookstore to be as captivating as the love story
                    between Bella, Edward, and Jacob. The website's design was
                    as alluring as Edward's gaze, and the checkout process
                    smoother than a werewolf's transformation. The books arrived
                    promptly, wrapped securely as if shielded by vampire venom.
                    A job well done, dear bookstore, for making the romantic
                    saga of Twilight easily accessible to fans of eternal love.
                  </p>
                  <Avatar
                    img="/src/assets/images/profile-07.jpg"
                    alt="avatar of Jese"
                    rounded
                    style={{ objectFit: "contain" }}
                    className="w-10 mb-4"
                  />
                  <h5 className="text-lg font-medium">Stephenie Meyer</h5>
                  <p className="font-base">
                    Romance so intense, even vampires are asking for
                    relationship advice.
                  </p>
                </div>
              </div>
            </SwiperSlide>{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
