const { poolConnect, pool } = require("../db/db");

const getBooks = async (req, res) => {
  await poolConnect; // chờ kết nối đến DB
  try {
    const result = await pool.request().query("SELECT * FROM Books");
    res.json(result.recordset); // trả về dữ liệu dưới dạng JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBook = async (req, res) => {
    const { Title, Author, Price } = req.body;
    await poolConnect;
  
    try {
      const result = await pool.request()
        .input("Title", Title)
        .input("Author", Author)
        .input("Price", Price)
        .query("INSERT INTO Books (Title, Author, Price) VALUES (@Title, @Author, @Price)");
      res.status(201).json({ message: "Book added successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const updateBook = async (req, res) => {
    const { id } = req.params;
    const { Title, Author, Price } = req.body;
    await poolConnect;
  
    try {
      await pool.request()
        .input("Id", id)
        .input("Title", Title)
        .input("Author", Author)
        .input("Price", Price)
        .query("UPDATE Books SET Title = @Title, Author = @Author, Price = @Price WHERE Id = @Id");
      res.json({ message: "Book updated successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const deleteBook = async (req, res) => {
    const { id } = req.params;
    await poolConnect;
  
    try {
      await pool.request()
        .input("Id", id)
        .query("DELETE FROM Books WHERE Id = @Id");
      res.json({ message: "Book deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
  };
  

