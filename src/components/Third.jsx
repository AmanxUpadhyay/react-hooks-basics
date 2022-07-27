import React, {useState} from "react";

function Third() {
    let [state, setState] = React.useState({
        age: 10,
        siblings: 100
    });

    let { age, siblings } = state;

    let changeHealth = (val) => {
      setState({
        age: age + 1,
        siblings: siblings + 1,
      });
    };

    return (
        <div>
            I am {age} years old! and I have {siblings} siblings!
            <button onClick={changeHealth}>Increase Health</button>
        </div>
    )
}

export default Third;