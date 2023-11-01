const UserClicks = () => {
  const openAlert = () => {
    alert("clicked");
  };
  return (
    <div className="" id="extwo">
      <div className="h-screen flex justify-center items-center">
        <button
          onClick={openAlert}
          className="py-4 px-8 rounded-md shadow-md hover:shadow-lg font-bold bg-yellow-500 text-white"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default UserClicks;
