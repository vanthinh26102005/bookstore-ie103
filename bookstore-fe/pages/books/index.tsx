import React, { useEffect, useState } from "react";
import API from "../../services/api";
import AddBookForm from "../../components/AddBookForms";

interface Book {
  Id: number;
  Title: string;
  Author: string;
  Price: number;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  // Function to refresh the book list
  const fetchBooks = async () => {
    try {
      const response = await API.get("/books");
      setBooks(response.data); // Update the books state with the new data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books when the component is mounted
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1> Danh sách sách</h1>
      <AddBookForm onAddBook={fetchBooks} /> {/* Pass fetchBooks as the callback */}
      <table border={1} cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.Id}>
              <td>{book.Id}</td>
              <td>{book.Title}</td>
              <td>{book.Author}</td>
              <td>{book.Price} đ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
