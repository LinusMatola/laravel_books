import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('/api/authors');
        const data = await response.json();

        if (data.status === 200) {
          setAuthors(data.data);
        } else {
          console.error('Error fetching authors:', data.message);
        }
      } catch (error) {
        console.error('Error fetching authors:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Authors</h1>
      {loading ? (
        <p>Loading...</p>
      ) : authors.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
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

export default Authors;
