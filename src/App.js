import { Route, Routes } from "react-router";
import Main from "./Main";
import Signup from "./Signup";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
