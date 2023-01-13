import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension);
    }
  }, [toggle]);

  //   useLayoutEffect(() => {
  //     console.log("useLayoutEffect");
  //   }, [toggle]);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    </>
  );
};

export default App;
