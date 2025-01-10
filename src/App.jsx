import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sia-pipeline-exam/login" element={<Login />} />
        <Route path="/sia-pipeline-exam/register" element={<Register />} />
        <Route path="/sia-pipeline-exam/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
