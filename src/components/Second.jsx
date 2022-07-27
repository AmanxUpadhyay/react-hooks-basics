import React, { useState } from "react";

function Second() {
  let [age, setAge] = React.useState(0);
  let [siblings, setSiblings] = React.useState(4);

  let increaseAge = () => setAge(age + 1);
  let increaseSiblings = () => setSiblings(siblings + 1);

  return (
    <div>
      I am {age} years old! and I have {siblings} siblings!
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={increaseSiblings}>Increase Siblings</button>
    </div>
  );
}

export default Second;
