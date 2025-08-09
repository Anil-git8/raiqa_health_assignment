"use client";
import { useState } from "react";
import Counter from "../component/Counter";
import ListView from "../component/ListView";

export default function main() {
  const [list, setList] = useState<number[]>([]);

  function addToList(num: number) {
    setList([num, ...list]);
  }

  function removeItem(index: number) {
    setList(list.filter((_, i) => i !== index));
  }

  function resetList() {
    setList([]);
  }

  function sortListAsc() {
    setList([...list].sort((a, b) => a - b)); // Ascending
  }

  function sortListDesc() {
    setList([...list].sort((a, b) => b - a)); // Descending
  }

  return (
    <main style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Counter & List App</h1>
      <Counter onAdd={addToList} />
      <ListView 
        list={list} 
        onRemove={removeItem} 
        onReset={resetList} 
        onSortAsc={sortListAsc} 
        onSortDesc={sortListDesc} 
      />
    </main>
  );
}
