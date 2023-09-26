/* eslint-disable react/prop-types */

const ButtonComp = ({ clickedButtons, openAlert }) => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-yellow-500 gap-4">
        {clickedButtons?.map((clickbutton, index) => (
          <button
            key={index}
            onClick={() => openAlert(clickbutton)}
            className="py-4 px-8 rounded-md shadow-md hover:shadow-lg font-bold text-yellow-500 bg-white"
          >
            Button {clickbutton}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonComp;
