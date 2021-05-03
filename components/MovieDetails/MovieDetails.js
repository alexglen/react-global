import { useEffect, useState } from 'react';
import { resetedState } from '../../constants';
import styles from './MovieDetails.module.scss';

const MovieDetails = ({ movie }) => {
  const [detailsMovie, setDetailsMovie] = useState(resetedState);

  useEffect(() => {
    if (movie) {
      setDetailsMovie({ ...movie });
    }
  }, [movie]);

  return (
    <article className={styles.container}>
      <div className={styles.details}>
        <div className={styles.picture}>
          <img src={detailsMovie.img} alt={detailsMovie.title} />
        </div>
        <div className={styles.info}>
          <div className={styles.titles}>
            <p className={styles.title}>{detailsMovie.title}</p>
            <p className={styles.rating}>{detailsMovie.rating}</p>
          </div>

          <div className={styles.extra}>
            <div className={styles.duration}>
              <p className={styles.year}>{new Date(detailsMovie.releaseDate).getFullYear()}</p>
              <p className={styles.duration}>{detailsMovie.duration} min</p>
            </div>
            <p className={styles.description}>{detailsMovie.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieDetails;
