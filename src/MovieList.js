/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=86fce8bfeb204a7e8c71d14290ae5016&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',);
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
      <div>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</div>
    );
  }
}

export default MovieList;
