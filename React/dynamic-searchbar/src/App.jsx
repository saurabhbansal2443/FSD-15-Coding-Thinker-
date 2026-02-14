import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function getData() {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length == 0) return;
    console.log("api called", trimmedQuery);
    let apiData = await fetch(
      `https://dummyjson.com/products/search?q=${trimmedQuery}`,
    );
    let jsonData = await apiData.json();
    setSuggestions(jsonData.products);
  }
  let timerId = useRef(null);
  useEffect(
    function () {
      console.log("timerId", timerId);
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(() => {
        getData();
      }, 300);
    },
    [query],
  );

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        type="text"
      />
      <div className="suggestionBox">
        {suggestions.map((pObj) => {
          return <p>{pObj.title}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
