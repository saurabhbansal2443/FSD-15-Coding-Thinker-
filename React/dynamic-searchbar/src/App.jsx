import React, { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  async function getData() {
    const trimmedQuery = query.trim(); 
    if (trimmedQuery.length == 0) return;
    let apiData = await fetch(
      `https://dummyjson.com/products/search?q=${trimmedQuery}`,
    );
    let jsonData = await apiData.json();
    console.log(jsonData);
  }

  useEffect(
    function () {
      getData();
    },
    [query],
  );

  return (
    <div>
      {console.log(query)}
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        type="text"
      />
      <div className="suggestionBox"></div>
    </div>
  );
};

export default App;
