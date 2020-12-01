import { React } from "react";
import "./Movies.css";

<<<<<<< HEAD
const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (e) => {
    const API_KEY = process.env.REACT_APP_ACCESS_KEY;
    const API_URL = `//www.omdbapi.com/?t=${query}&apikey=${API_KEY}`;

    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  let movieList = undefined;

  if (isLoading) {
    movieList = <p>Loading...</p>;
  } else {
    movieList = (
      <div>
        <form className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            Movie Name
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder="Jurassic Park"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <div className="card-list">
          {
            <div className="card" key={movies.id}>
              <img
                className="card--image"
                src={`${movies.Poster}`}
                alt={`${movies.Title} poster `}
              />
              <div className="card-content">
                <h3 className="card--title">{movies.Title}</h3>
                <p>GENRE: {movies.Genre}</p>
                <p>
                  <small>RELEASE DATE: {movies.Released}</small>
                </p>
                <p>
                  <small>RATING: {movies.imdbRating}</small>
                </p>
                <p className="card-desc">{movies.Plot}</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
  return movieList;
=======
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";
const API_KEY = process.env.ACCESS_KEY;

const Movies = () => {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Jurassic Park"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
>>>>>>> parent of a4d31d1... added movie-app functionality and API call
};

export default Movies;
