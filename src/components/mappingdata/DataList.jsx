/* eslint-disable react/prop-types */
const DataList = ({ DataLists }) => {
  return (
    <div>
      {DataLists?.map((list) => (
        <li key={list.id} className="font-bold text-xl text-white">
          {list.title}
        </li>
      ))}
    </div>
  );
};

export default DataList;
