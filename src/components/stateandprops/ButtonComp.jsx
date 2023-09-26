/* eslint-disable react/prop-types */

const ButtonComp = ({ hundleClick }) => {
  return (
    <div>
      <button
        onClick={hundleClick}
        className="py-4 px-8 rounded-md shadow-md hover:shadow-lg font-bold bg-yellow-500 text-white"
      >
        Button
      </button>
    </div>
  );
};

export default ButtonComp;
