import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const FavoritePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 6)));
  }, []);
  return (
    <div className="my-16 px-4 lg:px-24">
      <BookCard books={books} headline="All Time Classic Books" />
    </div>
  );
};

export default FavoritePage;
