import { useState } from "react";
import Button from "./Button";
const StateAndProps = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="h-screen" id="exfour">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="py-4 text-lg font-semibold">
          Button has been clicked:
          <span className="text-yellow-600"> {counter} </span>
          times
        </h1>
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
};

export default StateAndProps;
