import { React } from "react";
import "./Movies.css";

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
};

export default Movies;
