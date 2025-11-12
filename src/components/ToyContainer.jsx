import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy, updateToy }) {
  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard
      key={toy.id}
      {...toy}
      donateToy={donateToy}
      updateToy={updateToy}
    />)}</div>
  );
}

export default ToyContainer;
