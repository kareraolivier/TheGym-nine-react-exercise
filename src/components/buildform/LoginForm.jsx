import FormComp from "./FormComp";
import { useState } from "react";
const LoginForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const hundleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitForm = () => {
    alert(`Good morning ${formData.firstName} ${formData.lastName}`);
    setFormData({ firstName: "", lastName: "" });
  };
  return (
    <div id="exseven">
      <div className="h-screen flex justify-center items-center bg-yellow-500">
        <FormComp
          hundleChange={hundleChange}
          submitForm={submitForm}
          inputValue={formData}
        />
      </div>
    </div>
  );
};

export default LoginForm;
