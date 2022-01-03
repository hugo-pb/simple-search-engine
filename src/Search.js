import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [search, setSearch] = useState("");
  let [message, setmessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ca5da085c3334fa2974d520a9a4b8c12&units=metric`;
    axios.get(url).then(showT);
  }
  function showT(r) {
    setmessage(
      <p>
        the Weather in {search} is {Math.round(r.data.main.temp)}{" "}
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="looking for weather?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {message}
    </div>
  );
}
