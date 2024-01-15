import Item from "./Item";
import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
  
    if (sortBy === "description")
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  
    else if (sortBy === "packed")
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
            <li>
            {sortedItems.map((item) => <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />)}
            </li>
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description order</option>
            <option value="packed">Sort by packed order</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  }