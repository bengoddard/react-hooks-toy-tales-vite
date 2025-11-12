import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function fetchToys(){
    fetch("http://localhost:3001/toys")
      .then(r => {
        if(!r.ok) {throw new Error("Failed to get listings") }
        return r.json()
      })
      .then(setToys)
      .catch(error => console.log(error.message));
  }

  useEffect(fetchToys, []);
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
