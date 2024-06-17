import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Menghapus import untuk faTimes
import Header from './Header';

const initialFilmData = [
  { id: 23, title: 'I Dream in Another Language', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 24, title: 'Benched', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 25, title: 'Whitney', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 26, title: 'Blindspotting', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 27, title: 'I Dream in Another Language', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 28, title: 'Benched', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
  { id: 29, title: 'Whitney', rating: 7.9, category: 'Romansa/Drama', date: '24 oct 21', status: 'visible' },
];

const FilmCatalog = () => {
  const [films, setFilms] = useState(initialFilmData);

  const handleToggleVisibility = (id) => {
    const updatedFilms = films.map(film => {
      if (film.id === id) {
        return { ...film, status: film.status === 'visible' ? 'hidden' : 'visible' };
      }
      return film;
    });
    setFilms(updatedFilms);
  };

  return (
    <>
    <Header />

    <div className="catalog">
      <h1 className="title">Catalog Film</h1>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="header-cell">ID Film</th>
              <th className="header-cell">Film</th>
              <th className="header-cell">CATEGORY</th>
              <th className="header-cell">CREATED DATE</th>
              <th className="header-cell">STATUS</th>
              <th className="header-cell">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {films.map(film => (
              <tr key={film.id} className="data-row">
                <td className="data-cell" data-th="ID Film">{film.id}</td>
                <td className="data-cell" data-th="Film">{film.title}</td>
                <td className="data-cell" data-th="CATEGORY">{film.category}</td>
                <td className="data-cell" data-th="CREATED DATE">{film.date}</td>
                <td className="data-cell" data-th="STATUS">{film.status}</td>
                <td className="data-cell" data-th="ACTIONS">
                  <button 
                    className="toggle-visibility-button" 
                    onClick={() => handleToggleVisibility(film.id)} 
                    aria-label="Toggle Visibility" 
                    title={film.status === 'visible' ? 'Hide' : 'Show'}
                  >
                    <FontAwesomeIcon icon={film.status === 'visible' ? faEyeSlash : faEye} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default FilmCatalog;
