import { BrowserRouter } from "react-router";
import LandingPage from "./component/LandingPage";
import Profilepage from "./component/Profilepage/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Profilepage /> */}
    </div>
  );
}
export default App;
