import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromFavorites } from "../../actions";
import './Favorites.css';

export function ConnectedList (props) {


    return (
      <div>
        <ul>
          {
            props.favorites.length === 0 ? 
            <div className="contenedorFav">
            <h2>No hay ninguna pelicula en tus favoritas.</h2>
            </div>
            :
            props.favorites.map(movies => 
              <div  key={movies.imdbID}>
            <div className="container">
              <div className="cellphone-container">    
                  <div className="movie">       
                    <img src={movies.Poster} className="movie-img" alt="img not found"/>
                    <div className="text-movie-cont">
                      <div className="mr-grid">
                        <div className="col1">
                          <Link to={`/movie/${movies.imdbID}`}> <h1>{movies.Title}</h1> </Link>
                          <ul className="movie-gen">
                            <li>PG-13  /</li>
                            <li>1h 49min  /</li>
                            <li>Adventure, Drama, Sci-Fi</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mr-grid summary-row">
                        <div className="col2">
                          <h5>RESUMEN</h5>
                        </div>
                      </div>
                      <div className="mr-grid">
                        <div className="col1">
                          <p className="movie-description">                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                      </div>
                      <div className="mr-grid action-row">
                        <div className="col2">
                        
                        <div className="col2"><button className="watch-btn" onClick={() => props.removeFromFavorites(movies.imdbID)}>ELIMINAR</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
              )
    
          }
        </ul>
      </div>
    );
}

function mapStateToProps (state) {
  return {
    moviesListed: state.moviesListed,
    favorites: state.favorites
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeFromFavorites: id => dispatch(removeFromFavorites(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
