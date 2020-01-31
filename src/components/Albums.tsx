import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './CounterUseReducer';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const getAlbums = async () => {
    const response = await fetch('/albums');
    const albums = await response.json();

    setAlbums(albums);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <section className='row my-2'>
      <ul className='col-md-6 offset-md-3 list-group'>
        <li className='list-group-item d-flex justify-content-between'>
          <Link to={`/counter`} className='btn btn-primary'>
            Go To Counter
          </Link>
          <br />
          <br />
        </li>
        {albums.map(album => (
          <li
            key={album.id}
            className='list-group-item d-flex justify-content-between'
          >
            <h3>{album.title}</h3>
            <Link to={`${album.id}/details`}>Get Detail</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Albums;
