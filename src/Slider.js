import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { LogoItem } from "./LogoItem";

function Slider() {
  const [count, setCount] = React.useState(0);

  function moveLeft() {
    if (count === 0) {
      setCount(-1);
    } else if (count === 1) {
      setCount(0);
    } else {
      setCount(1);
    }
  }
  
  function moveRight() {
    if (count === 0) {
      setCount(1);
    } else if (count === 1) {
      setCount(-1);
    } else {
      setCount(0);
    }
  }
  
  return (
    <div className="App">
      <button className="button6" onClick={moveLeft}>
        <AiFillCaretLeft className="button-icon"/>
      </button>

      <div className="logos-container">
        <LogoItem position={-1} count={count}/>
        <LogoItem position={0} count={count}/>
        <LogoItem position={1} count={count}/>
      </div>

      <button className="button6" onClick={moveRight}>
        <AiFillCaretRight className="button-icon"/>
      </button>
    </div>
  );
}

export default Slider;
