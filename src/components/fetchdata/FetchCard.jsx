/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Loading from "../loading/Loading";
const FetchCard = ({ items }) => {
  return (
    <>
      {items.length != 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="group h-96 w-96 [perspective:1000px] rounded-xl"
          >
            <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-white rounded-xl">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/20"
                  src={item.avatar}
                  alt={item.first_name}
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">{item.first_name}</h1>
                  <p className="text-lg">{item.employment.title}</p>
                  <p className="text-lg">{item.phone_number}</p>
                  <p className="text-base">More info Here</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FetchCard;
