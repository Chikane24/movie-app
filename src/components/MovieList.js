import React from 'react'
import "../App.css"

export default function (props) {

    const FavouriteComponent = props.favouriteComponent;

  return (
    <>
        {props.movies.map((movie,index)=>(
            <div key={index} className="image-container justify-start">
                <img src={movie.Poster} alt="movie"></img>
                <div className='overlay d-flex align-center justify-center' onClick={() => {props.handleFavouritesClick(movie)}}>
                    <FavouriteComponent/>
                </div>
            </div>
        ))}
    </>
  )
}
