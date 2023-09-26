import "./App.css";
import Header from "./components/header/Header";
import Hello from "./components/hello/Hello";
import UserClicks from "./components/userclicks/UserClicks";
import CustomComponent from "./components/customComponent/CustomComponent";
import StateandProps from "./components/stateandprops/StateandProps";
import MappingData from "./components/mappingdata/MappingData";
import CompData from "./components/mapdatacomponent/CompData";
import LoginForm from "./components/buildform/LoginForm";
import RenderingData from "./components/renderingJSON/RenderingData";
import FetchData from "./components/fetchdata/FetchData";
function App() {
  return (
    <>
      <Header />
      <Hello />
      <UserClicks />
      <CustomComponent />
      <StateandProps />
      <MappingData />
      <CompData />
      <LoginForm />
      <RenderingData />
      <FetchData />
    </>
  );
}

export default App;
