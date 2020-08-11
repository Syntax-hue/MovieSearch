import React, { useState } from "react";

export default function SearchMovie() {
  const query = "Jurassic Park";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=b09f5ecdeb396875af29df81f091a15a&language=en-US&query=${query}&page=1&include_adult=false`;

  const seacrhMovies = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={seacrhMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Type a movie"
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
