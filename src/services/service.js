import data from '../Data.js'
export default class Service {  
    getMovies() {
        return data();
    } 
    getMovieById(id) {
        return data()[id];
    }
}

