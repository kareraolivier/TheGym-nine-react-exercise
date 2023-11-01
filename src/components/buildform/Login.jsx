import Form from "./Form";
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitForm = () => {
    formData.firstName != "" &&
      alert(`Good morning ${formData.firstName} ${formData.lastName}`);
    setFormData({ firstName: "", lastName: "" });
  };
  return (
    <div id="exseven">
      <div className="h-screen flex justify-center items-center bg-yellow-500">
        <Form
          handleChange={handleChange}
          submitForm={submitForm}
          inputValue={formData}
        />
      </div>
    </div>
  );
};

export default Login;
