import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Subscribe</h1>
        <h4>sign up with your email address to receive news and updates.</h4>

        <div className="input-container">
          <Input placeholder={"Name"} />
          <Input placeholder={"Compagny"} />
          <Input placeholder={"Email"} />
        </div>

        <Checkbox />
        <div className="button-container">
          <Button text={"Reset"} />
          <Button text={"Submit"} />
        </div>
      </div>
    </div>
  );
}

export default App;
