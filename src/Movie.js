import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
  <div>
    <h3>{props.movie.title}</h3>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
