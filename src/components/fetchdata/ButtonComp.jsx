/* eslint-disable react/prop-types */
const ButtonComp = ({ hundleClick }) => {
  return (
    <div className="py-5 flex justify-center">
      <button
        type="button"
        onClick={hundleClick}
        className="w-60 rounded-md text-yellow-500 font-semibold text-lg py-5 bg-white hover:shadow-lg"
      >
        Fetch data
      </button>
    </div>
  );
};

export default ButtonComp;
