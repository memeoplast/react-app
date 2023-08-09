import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return dom("div", null, dom("p", null, "You have clicked the button ", count, " times."), dom("button", {
    onClick: () => setCount(count + 1)
  }, "Click here"));
}