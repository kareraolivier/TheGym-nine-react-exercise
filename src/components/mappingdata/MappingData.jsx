import DataList from "./DataList";
import companyData from "../data/companyLog.json";
const MappingData = () => {
  return (
    <div
      id="exfive"
      className="h-screen flex justify-center items-center bg-yellow-500"
    >
      <DataList dataLists={companyData} />
    </div>
  );
};

export default MappingData;
