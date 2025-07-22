import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./component/LandingPage";
import Profilepage from "./component/Profilepage/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProfilePage" element={<Profilepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
