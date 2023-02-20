import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Navbar from "./Components/Navbar";
import Showall from "./Components/Showall";
import Live from "./Components/Live";
import Select from "./Components/Select";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Live />} />
        <Route exact path="/add" element={<AddProduct />} />
        <Route exact path="/all" element={<Showall />} />
        <Route exact path="/select" element={<Select />} />
      </Routes>
    </Router>
  );
}

export default App;
