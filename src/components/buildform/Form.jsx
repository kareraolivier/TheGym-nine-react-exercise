/* eslint-disable react/prop-types */
const Form = ({ handleChange, submitForm, inputValue }) => {
  return (
    <div className="bg-white px-6 py-12 rounded-lg shadow-xl shadow-black/20">
      <form className="block gap-4">
        <div>
          <input
            type="text"
            value={inputValue.firstName}
            onChange={handleChange}
            placeholder="firstName"
            name="firstName"
            className="bg-gray-300 outline-amber-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
          />
        </div>
        <div>
          <input
            type="text"
            value={inputValue.lastName}
            onChange={handleChange}
            placeholder="lastName"
            name="lastName"
            className="bg-gray-300 outline-amber-400 placeholder-slate-400 py-3 px-2 w-80 my-4 rounded-sm"
          />
        </div>
        <button
          type="button"
          onClick={submitForm}
          className="bg-yellow-500 hover:shadow-lg font-semibold text-white py-3 w-80 my-4 rounded-sm"
        >
          Great me
        </button>
      </form>
    </div>
  );
};

export default Form;
