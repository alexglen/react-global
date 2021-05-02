import { useState } from 'react';
import MenuMovieCard from './MenuMovieCard/MenuMovieCard';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './MovieCard.module.scss';

const MovieCard = ({ img, title, releaseDate, genre, id }) => {
  const [isMovieCardWithHover, setIsMovieCardWithHover] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const fullYear = new Date(releaseDate).getFullYear();

  return (
    <article
      className={styles.movie}
      onMouseEnter={() => setIsMovieCardWithHover(true)}
      onMouseLeave={() => setIsMovieCardWithHover(false)}>
      <Link href={`/movies/${encodeURIComponent(id)}`} id='1'>
        <div className={styles.img}>
          <img src={img} alt={title} />
        </div>
      </Link>
      <div className={styles.info}>
        <p>{title}</p>
        <p className={styles.year}>{fullYear}</p>
      </div>
      <p className={styles.genre}>{genre}</p>
      <div
        className={isMovieCardWithHover ? styles.dotsIcon : undefined}
        onClick={() => setIsMenuModalOpen(true)}></div>
      <MenuMovieCard
        isMenuModalOpen={isMenuModalOpen}
        setIsMenuModalOpen={setIsMenuModalOpen}
        movieCardId={id}
      />
    </article>
  );
};

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string,
};

export default MovieCard;
