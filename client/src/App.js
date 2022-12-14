import { NavLink } from "react-router-dom";
import "./App.css";
import FBPost from "./components/shubham/fbPosts";
import { Publishing } from "./pages/Publishing";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      {/* <NavLink to="/publishing">Publish</NavLink> */}
      <Publishing />
    </div>
  );
}

export default App;
