import React, { useState } from "react";
import API from "../services/api";

interface AddBookFormProps {
  onAddBook: () => void;
}

export default function AddBookForm({ onAddBook }: AddBookFormProps) {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post("/books", {
        Title: title,
        Author: author,
        Price: parseFloat(price),
      });
      setTitle("");
      setAuthor("");
      setPrice("");
      onAddBook(); // Call the onAddBook function passed from parent to refresh the book list
    } catch (err) {
      setError("Error adding book.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
