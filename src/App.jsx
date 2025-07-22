import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./component/LandingPage";
import AppLayout from "./component/Profilepage/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AppLayout" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
