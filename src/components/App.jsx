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

  function addToy(newToy){
    setToys(previousToys => [...previousToys, newToy])
  }

  const donateToy = donateToyId => setToys(previousToys => previousToys.filter(toy => toy.id !== donateToyId));

  const updateToy = updatedToys => setToys(previousToys => previousToys.map(toy => toy.id === updatedToys.id ? updatedToys : toy))

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm  addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={donateToy} updateToy={updateToy}/>
    </>
  );
}

export default App;
