import DataList from "./DataList";
import companyData from "../data/companyLog.json";
const CompData = () => {
  return (
    <div id="exsix" className="h-screen">
      <div className="h-screen flex justify-center items-center px-4">
        <DataList dataLists={companyData} />
      </div>
    </div>
  );
};

export default CompData;
