import data from "../data/question.json";
import RenderCard from "./RenderCard";
const RenderingData = () => {
  return (
    <div id="exeight">
      <div className="h-screen flex justify-center items-center">
        <RenderCard datas={data} />
      </div>
    </div>
  );
};

export default RenderingData;
