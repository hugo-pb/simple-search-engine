import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [search, setSearch] = useState("");
  let [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c69faf9d2df6cf97f08634b08792a39d&units=metric`;
  axios.get(url).then(showT);
  function handleSubmit(event) {
    event.preventDefault();
    if (search === "") return;
    setMessage(
      <p>
        {" "}
        the temperature in {search} is {result}{" "}
      </p>
    );
  }
  function showT(r) {
    setResult(r.data.main.temp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="looking for weather?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {message}
    </div>
  );
}
