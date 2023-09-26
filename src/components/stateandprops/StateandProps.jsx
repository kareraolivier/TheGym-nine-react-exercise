import { useState } from "react";
import ButtonComp from "./ButtonComp";
const StateandProps = () => {
  const [counter, setCounter] = useState(0);
  const hundleClick = () => {
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
        <ButtonComp hundleClick={hundleClick} />
      </div>
    </div>
  );
};

export default StateandProps;
