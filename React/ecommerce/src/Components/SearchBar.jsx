import React, { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const timerId = useRef(null);

  async function getData() {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length == 0) return;
    const apiData = await fetch(
      `https://dummyjson.com/products/search?q=${trimmedQuery}`,
    );
    const jsonData = await apiData.json();
    setSearchSuggestion(jsonData.products);
  }

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(getData, 400);
  }, [searchQuery]);

  let showSearchSuggestion =
    searchQuery.trim().length > 0 && searchSuggestion.length > 0;

  return (
    <div className="w-2/8 h-3/4 z-20">
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="bg-white w-full h-full rounded-2xl   focus:outline-none border-none pl-5 pr-5"
        type="text"
      />
      {showSearchSuggestion && (
        <div className="bg-white rounded-xl border-2 border-gray-200 p-3 mt-1 z-20">
          {searchSuggestion.map((pObj) => {
            return (
              <div className="bg-gray-100 mb-1 p-2 rounded-xl">
                <p className="text-sm text-gray-600">{pObj.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
