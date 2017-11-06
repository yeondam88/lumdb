/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import API_KEY from './apiKey';

class MovieList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
