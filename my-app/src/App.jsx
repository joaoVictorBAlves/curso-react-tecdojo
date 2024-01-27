import React, { useState } from "react";

const App = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  const fetchJoke = () => {
    let url = "https://api.chucknorris.io/jokes/random";

    if (category !== "all") {
      url += `?category=${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value); // Define o valor da piada no estado
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar a piada:", error);
      });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="App">
      <div className="logo">
        <img src="logo_chuck.png" alt="logo do chuck norris" />
      </div>
      <div className="content">
        <textarea value={joke} cols="30" rows="10" readOnly></textarea>
        <select name="category" id="" onChange={handleCategoryChange}>
          <option value="all">Any category</option>
          {categories.map((x) => (
            <option key={x} value={x}>
              {x.toUpperCase()}
            </option>
          ))}
        </select>
        <button onClick={fetchJoke}>New Joke!</button>
      </div>
    </div>
  );
};

export default App;
