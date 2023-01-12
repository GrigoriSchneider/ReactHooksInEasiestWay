import React, { useRef } from "react";

const App1 = () => {
  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current);
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputEle} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default App1;
