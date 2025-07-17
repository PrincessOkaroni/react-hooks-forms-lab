import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import Item from "./Item";
import items from "../data/items"; 

function ShoppingList({ items: initialItems }) {
  const [itemsList, setItemsList] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearchChange(value) {
    setSearch(value);
  }

  function handleAddItem(newItem) {
    setItemsList([...itemsList, newItem]);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

