import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Album } from './Albums';

interface Props extends RouteComponentProps<{ id: string }> {}
const Details: React.FC<Props> = props => {
  const [album, setAlbum] = useState<Album | null>(null);

  const id = props.match.params.id;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/albums/${id}`);
        const album = await response.json();

        setAlbum(album);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className='row my-5'>
      <article className='col-md-12'>
        <div className='card m-1 p-1 shadom'>
          <div className='card-header'>Featured</div>
          <div className='card-body'>
            <h5 className='card-title'>{album && album.title}</h5>
            <button
              onClick={() => {
                props.history.goBack();
              }}
              className='btn btn-primary'
            >
              Go Back
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Details;
