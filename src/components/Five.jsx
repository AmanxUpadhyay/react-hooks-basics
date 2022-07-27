import React, { useEffect, useState } from "react";

function Five() {
    const [age, setAge] = useState(0);
    let increaseAge = () => setAge(age + 1);
    useEffect(() => {
        document.title = `You are ${age} years old!`;
    })

    return (
        <div>
            <p>
                Look at the console to see the effect of the useEffect hook.
            </p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default Five;