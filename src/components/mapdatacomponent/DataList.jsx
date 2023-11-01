/* eslint-disable react/prop-types */
const DataList = ({ dataLists }) => {
  return (
    <ul className="flex gap-5 flex-wrap justify-center">
      {dataLists?.map((list) => (
        <li
          key={list.id}
          className="flex flex-col justify-center cursor-pointer item-center h-32"
        >
          <img src={list.image} alt={list.name} width={150} height={100} />
          <a
            href={list.link}
            className="text-xl font-semibold hover:text-red-500 hover:border-b-2 text-center"
          >
            {list.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
