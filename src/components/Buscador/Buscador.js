import React, {  useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addToFavorite, getMovies, removeFromFavorites } from "../../actions";
import './Buscador.css';
import Lupa from '../../assets/lupa.png'
import Home from "../Home/Home";



export function Buscador (props) {

  const [title, setTitle] = useState("")


  function handleChange(event) {
    setTitle(event.target.value );
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.getMovies(title)
  }


    return (
      <div className='containerBuscador'>
        <form className='formBuscador' onSubmit={(e) => handleSubmit(e)}>
          <div className='search-container'>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
              placeholder='Busca una pelicula...'
              className='search-input'
            />
          <button type="submit" className='submitBtn' ><img src={Lupa} width="20" height="20" alt={'search'}/> </button>
          </div>   
        </form>
        <ul id='moviesList'>
         {
           props.moviesListed.length === 0 ? <Home/> : props.moviesListed.map(movies => 
            <div className='movieCard' key={movies.imdbID}>
              <div className="info_section">
                <div class="movie_header">
                  <Link to={`movie/${movies.imdbID}`}>  
                  <img className = 'locandina' src={movies.Poster} alt="poster"/>
                  <h1>{movies.Title}</h1> 
                  </Link>
                  <p className="type">{movies.Type}</p>
                  <h4 className="year">{movies.Year}</h4>
                  {props.favorites.indexOf(movies) === -1?<button className='fav' onClick={() => props.addToFavorites(movies)}>☆</button>:<button className='fav' onClick={() => props.removeFromFavorites(movies.imdbID)}>⭐</button>}

                </div>
                <div class="movie_desc">
                <p class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              </div>
            </div>
            )
         }
        </ul>
      </div>
    );
  
}

function mapStateToProps(state) {
  return {
    moviesListed: state.moviesListed,
    favorites: state.favorites,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title)),
    addToFavorites: (id) => dispatch(addToFavorite(id)),
    removeFromFavorites: id => dispatch(removeFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
