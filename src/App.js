
import { useEffect, useState } from 'react';
import './App.css';
import AddFavourites from './components/AddFavourites';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import RemoveFavourites from './components/RemoveFavourites';
import SearchBox from './components/SearchBox';

function App() {
  const [movies,setMovies] = useState([]);
  const [favourites,setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a17c80db`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }

  }

  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);

  useEffect(()=>{
    const movieFavourites = JSON.parse(localStorage.getItem("react-movie-app-favourites"));
    setFavourites(movieFavourites)
  },[]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouritesMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
  }

  return (
    <div className="movie-app">
      <div className='row d-flex align-center justify-between'>
        <MovieListHeading heading="Movies"></MovieListHeading>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
      </div>
      <div className="row">
      <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites}>
      </MovieList>
      </div> 
      <div className='row d-flex align-center justify-between'>
        <MovieListHeading heading="Favourites"></MovieListHeading>
      </div> 
      <div className="row">
      <MovieList movies={favourites} handleFavouritesClick={removeFavouritesMovie} favouriteComponent={RemoveFavourites}>
      </MovieList>
      </div>
    </div>
  );
}

export default App;
