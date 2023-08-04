import { Route, Routes } from "react-router";
import Signup from "./Signup";
import Welcome from "./Welcome";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-100 text-center">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
