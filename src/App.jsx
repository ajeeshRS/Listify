import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddTaskPage from "./Pages/AddTaskPage";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/add-task" element={<AddTaskPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
