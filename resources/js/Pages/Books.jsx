import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from 'react-bootstrap';


const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();

        if (data.status === 200) {
          setBooks(data.data);
        } else {
          console.error('Error fetching books:', data.message);
        }
      } catch (error) {
        console.error('Error fetching books:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
      try {
        const response = await fetch(`/api/books/${id}/delete`, {
          method: 'DELETE',
        });

        const data = await response.json();

        if (data.status === 200) {
          // Update the local state to reflect the deletion
          setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== id));
          alert('Book deleted successfully');
        } else {
          alert('Something went wrong while deleting the book');
        }
      } catch (error) {
        console.error('Error deleting book:', error.message);
      }
    }
  };
  return (
    <div>
      <h1>Books</h1>
      <Link href='/addbook'><button>Add Book</button></Link>
      {loading ? (
        <p>Loading...</p>
      ) : books.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>ISBN</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.ISBN}</td>
                <td>{book.author_id}</td>
                <td>
                <Link href={`/editbook/${book.id}`}>
                <button>Edit</button>
                </Link>

                <button onClick={() => handleDelete(book.id)}>Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default Books;
