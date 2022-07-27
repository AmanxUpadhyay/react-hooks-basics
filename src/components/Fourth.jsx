import React, { useState } from "react";

function Fourth() {
    const [count, setCount] = useState(0);

    return (
        <div>
            Count is {count}
            <div>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
                <button onClick={() => setCount(count - 1)}>Decrease Count</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Fourth;