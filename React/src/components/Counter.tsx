import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Cups Ordered: {count}</p>
      <button onClick={() => setCount((e) => e + 1)}>One more!</button>
    </div>
  );
}
