import DataList from "./DataList";
import CompanyData from "../data/companyLog.json";
const CompData = () => {
  return (
    <div id="exsix" className="h-screen">
      <div className="h-screen flex justify-center items-center px-4">
        <DataList DataLists={CompanyData} />
      </div>
    </div>
  );
};

export default CompData;
