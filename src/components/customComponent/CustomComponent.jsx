import ButtonComp from "./ButtonComp";
const CustomComponent = () => {
  const openAlert = (button) => {
    alert(`clicked ${button}`);
  };
  let clickedButtons = ["1", "2", "3"];
  return (
    <div className="" id="exthree">
      <ButtonComp clickedButtons={clickedButtons} openAlert={openAlert} />
    </div>
  );
};

export default CustomComponent;
