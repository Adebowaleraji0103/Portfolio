import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/Landing";
import Profilepage from "./component/Profilepage/ProfilePage";

function App() {
  return (
    <div>
      <Router>
        <Landing />
        {/* <Profilepage /> */}
      </Router>
    </div>
  );
}
export default App;
