import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { mockedData } from "../../mockedData";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const { details, setDetail } = useState({});

  useEfffect(() => {}, []);

  return (
    <div className="container">
      <div className="movie-details">
        <div className="picture">
          <img
            src="https://i.pinimg.com/736x/23/cc/bb/23ccbbe91857a6ef93c55dfeed9b2a05--fight-club--book-art.jpg"
            alt="scwc"
          />
        </div>
        <div className="info">
          <div className="titles">
            <p className="title">Pulp Fiction</p>
            <p className="rating">4.3</p>
          </div>

          <div className="info-extra">
            <p className="info-awards">Oscar winning Movie</p>
            <div className="year-and-duration">
              <p className="year">1994</p>
              <p className="duration">154 min</p>
            </div>
            <p className="description">
              Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating
              scenes that Avary originally wrote for True Romance
              (1993)[citation needed]. Its plot occurs out of chronological
              order. The film is also self-referential from its opening moments,
              beginning with a title card that gives two dictionary definitions
              of "pulp". Considerable screen time is devoted to monologues and
              casual conversations with eclectic dialogue revealing each
              character's perspectives on several subjects, and the film
              features an ironic combination of humor and strong violence.
              TriStar Pictures reportedly turned down the script as "too
              demented". Then Miramax co-chairman Harvey Weinstein was
              enthralled, however, and the film became the first that Miramax
              fully financed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;