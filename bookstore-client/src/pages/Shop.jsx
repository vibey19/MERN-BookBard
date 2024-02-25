import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-8">
        Pick What You Love!!
      </h2>

      <div className="grid gap-8 my-12 mt-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
        {books.map((book) => (
          <Card
            key={book.id}
            className="max-w-sm h-full flex flex-col justify-between"
          >
            <img
              src={book.coverImage}
              alt=""
              className="h-65 w-full object-cover mb-4"
            />
            <div className="flex flex-col h-full justify-between">
              <div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  {book.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-4 overflow-hidden">
                  {book.description}
                </p>
              </div>
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black rounded-sm outline-none transition-all ease-in duration-200">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
