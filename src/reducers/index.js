const initialState = {
    moviesListed: [],
    movieDetails: {},
    favorites: [],
}

export default function rootReducer (state=initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                moviesListed: action.movies.Search
            };
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetails: action.movie
            }
        case 'ADD_MOVIE_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.movie]
            }
        case 'REMOVE_MOVIE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.imdbID !== action.id)
            }
        default:
            return state;
    }
}