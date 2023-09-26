/* eslint-disable react/prop-types */
const RenderCard = ({ datas }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {datas.map((data) => (
        <div
          key={data.id}
          className="w-72 bg-yellow-500 text-white p-4 rounded-lg shadow-xl shadow-black/20"
        >
          <h1 className="py-2 text-lg font-bold text-center">{data.setup}</h1>
          <p className="py-2 text-lg font-semibold text-center">
            {data.punchline}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RenderCard;
