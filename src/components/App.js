import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import items from "../data/items"; // or wherever your item list is from

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchText={searchText}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default App;

