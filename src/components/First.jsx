import React, { useState } from "react";

function First() {
  let [age, setAge] = React.useState(0);
  let increaseAge = () => setAge(age + 1);

  return (
    <div>
      I am {age} years old!
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default First;
