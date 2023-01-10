import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  useEffect(() => {
    document.title = `${otherCount} new messages!`;
  }, [otherCount, count]);

  return (
    <div>
      <h3>{count} new Messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Other Count : {otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount + 5)}>
        Increase by 5
      </button>
    </div>
  );
};

export default App;
