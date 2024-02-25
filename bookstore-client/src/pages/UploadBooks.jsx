import React, { useState } from "react";
import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Alert,
} from "flowbite-react";

const UploadBooks = () => {
  const bookCategories = [
    "Select the category",
    "Action and Adventure",
    "Anthology",
    "Art",
    "Autobiography",
    "Biography",
    "Business",
    "Children's",
    "Classics",
    "Comics and Graphic Novels",
    "Computers and Technology",
    "Cookbooks",
    "Crime",
    "Drama",
    "Education",
    "Encyclopedia",
    "Fantasy",
    "Health and Fitness",
    "History",
    "Horror",
    "Humor",
    "Journalism",
    "Literary Criticism",
    "Math",
    "Medical",
    "Memoir",
    "Mystery",
    "Nature",
    "Parenting",
    "Philosophy",
    "Photography",
    "Poetry",
    "Political Science",
    "Psychology",
    "Religion",
    "Romance",
    "Science",
    "Science Fiction",
    "Self-help",
    "Social Science",
    "Sports",
    "Travel",
    "True Crime",
    "Western",
  ];

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};

    // Validate title
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }

    // Validate author
    if (!formData.author.trim()) {
      errors.author = "Author is required";
    }

    // Validate coverImage
    if (!formData.coverImage.trim()) {
      errors.coverImage = "Cover Image URL is required";
    }

    // Validate category
    if (selectedCategory === bookCategories[0]) {
      errors.category = "Please select a valid category";
    }

    // Validate description
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }

    // Validate pdfURL
    if (!formData.pdfURL.trim()) {
      errors.pdfURL = "PDF URL is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChangeSelectedBookCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      title: form.title.value,
      author: form.author.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      category: form.category.value,
      pdfURL: form.pdfURL.value,
    };

    if (validateForm(formData)) {
      const bookObj = {
        title: formData.title,
        author: formData.author,
        bookCategory: formData.category,
        description: formData.description,
        image: formData.coverImage,
        url: formData.pdfURL,
      };

      console.log(bookObj);

      fetch("http://localhost:5000/upload-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj),
      })
        .then((res) => res.json())
        .then((data) => {
          // Display an alert when the book is uploaded successfully
          alert("Book uploaded successfully");
        })
        .catch((error) => {
          // Display an alert for an error
          alert("Book upload failed");
          form.reset();
        });
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Book</h2>

      <form
        className="flex lg:w-[1100px] flex-col flex-wrap gap-4"
        onSubmit={submitFormHandler}
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Book Name"
              required
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput
              id="author"
              type="text"
              placeholder="Author Name"
              required
              className={errors.author ? "border-red-500" : ""}
            />
            {errors.author && <p className="text-red-500">{errors.author}</p>}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="coverImage" value="Image Cover" />
            </div>
            <TextInput
              id="coverImage"
              type="text"
              placeholder="Image URL"
              required
              className={errors.coverImage ? "border-red-500" : ""}
            />
            {errors.coverImage && (
              <p className="text-red-500">{errors.coverImage}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select
              id="category"
              className={`w-full rounded ${
                errors.category ? "border-red-500" : ""
              }`}
              value={selectedCategory}
              onChange={handleChangeSelectedBookCategory}
              required
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </div>
        </div>

        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            placeholder="Book Description"
            required
            rows={6}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="pdfURL" value="PDF Upload Link" />
          </div>
          <TextInput
            id="pdfURL"
            type="text"
            placeholder="Upload URL Link"
            required
            className={errors.pdfURL ? "border-red-500" : ""}
          />
          {errors.pdfURL && <p className="text-red-500">{errors.pdfURL}</p>}
        </div>
        <Button
          type="submit"
          className="mt-5 hover:bg-black transition-all ease-in duration-300"
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBooks;
