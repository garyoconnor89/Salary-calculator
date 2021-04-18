import "./App.css";
import Header from "./components/Header";
import SalaryInput from "./components/SalaryInput";
import SalaryDisplay from "./components/SalaryDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <SalaryInput />
      <SalaryDisplay />
    </div>
  );
}

export default App;
