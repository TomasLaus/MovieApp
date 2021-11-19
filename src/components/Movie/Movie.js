import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

function Movie(props) {


    const {id} = useParams();
    props.getMovieDetail(id);

        return (
            

            <div className='movieCardDetail' key={props.movieDetails.imdbID}>
            <div className="info_sectionDetail">
            <div className="movie_headerDetail">
                <img className = 'locandinaDetail' src={props.movieDetails.Poster} alt="poster"/>
                <h1>{props.movieDetails.Title}</h1> 
                <p className="typeDetail">{props.movieDetails.Type}</p>
                <h4 className="yearDetail">{props.movieDetails.Year}</h4>
            </div>
            <div className="movie_descDetail">
            <p className="textDetail">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            </div>
            </div>


// <div className='movieCard' key={movies.imdbID}>
// <div className="info_section">
//   <div className="movie_header">
//     <Link to={`movie/${movies.imdbID}`}>  
//     <img className = 'locandina' src={movies.Poster} alt="poster"/>
//     <h1>{movies.Title}</h1> 
//     </Link>
//     <p className="type">{movies.Type}</p>
//     <h4 className="year">{movies.Year}</h4>
//     {props.favorites.indexOf(movies) === -1?<button className='fav' onClick={() => props.addToFavorites(movies)}>☆</button>:<button className='fav' onClick={() => props.removeFromFavorites(movies.imdbID)}>⭐</button>}

//   </div>
//   <div className="movie_desc">
//   <p className="text">
//   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//   </p>
// </div>
// </div>
// </div>


        );
}

function mapStateToProps (state) {
    return {
        movieDetails: state.movieDetails,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);