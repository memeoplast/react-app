import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You have clicked the button {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
            Click here
            </button>
        </div>
    )
}