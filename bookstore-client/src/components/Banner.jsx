import SwiperCard from "../components/SwiperCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Unveiling Worlds, <br /> One Page at a Time.
          </h2>
          <p className="">
            BookBard, your premier destination for affordable book shopping
            online. Explore, buy, and sell with ease, making us your go-to book
            website
          </p>
          <div className="">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black rounded-sm outline-none transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="">
          <SwiperCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
