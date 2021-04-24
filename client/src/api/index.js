import axios from 'axios'

// const api = axios.create({
//     // baseURL: 'http://localhost:8000/api/v1',
//     baseURL: 'https://moviesapi.eu-gb.mybluemix.net/api/v1'
// });

export const insertMovie = payload => axios.post(`xioaxios/v1/movie`, payload)
export const getAllMovies = () => axios.get(`/api/v1/movies`)
export const updateMovieById = (id, payload) => axios.put(`/api/v1/movie/${id}`, payload)
export const deleteMovieById = id => axios.delete(`/api/v1/movie/${id}`)
export const getMovieById = id => axios.get(`/api/v1/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis