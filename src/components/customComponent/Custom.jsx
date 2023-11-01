import Button from "./Button";
const CustomComponent = () => {
  const openAlert = (button) => {
    alert(`clicked ${button}`);
  };
  let clickedButtons = ["1", "2", "3"];
  return (
    <div className="" id="exthree">
      <Button clickedButtons={clickedButtons} openAlert={openAlert} />
    </div>
  );
};

export default CustomComponent;
