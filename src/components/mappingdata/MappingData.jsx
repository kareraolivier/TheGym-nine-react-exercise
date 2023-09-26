import DataList from "./DataList";
import CompanyData from "../data/companyLog.json";
const MappingData = () => {
  return (
    <div
      id="exfive"
      className="h-screen flex justify-center items-center bg-yellow-500"
    >
      <DataList DataLists={CompanyData} />
    </div>
  );
};

export default MappingData;
