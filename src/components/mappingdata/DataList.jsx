/* eslint-disable react/prop-types */
const DataList = ({ dataLists }) => {
  return (
    <ul>
      {dataLists?.map((list) => (
        <li key={list.id} className="font-bold text-xl text-white">
          {list.title}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
