const apiKey = '8ca8b737'

export function getMovies (title) {
    return function (dispatch){
        fetch ((`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`))
        .then(respuesta => respuesta.json())
        .then (json => dispatch({ type: 'GET_MOVIES', movies: json}))
    }
}

export function getMovieDetail (id) {
    return function (dispatch) {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then(respuesta => respuesta.json())
            .then(json => dispatch({type: 'GET_MOVIE_DETAIL', movie: json}))
    }
}

export function addToFavorite (movie) {
    return {type: 'ADD_MOVIE_FAVORITE', movie}
}


export function removeFromFavorites (id) {
    return {type: 'REMOVE_MOVIE_FAVORITE', id}
}