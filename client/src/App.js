import "./App.css";
import Admin from "./pages/Admin";
import AllRoutes from "./routes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AdminPrivateAuth from "./routes/AdminPrivateAuth";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
      <Routes>
        <Route
          exact
          path="/admin"
          element={
            <AdminPrivateAuth>
              <Admin />
            </AdminPrivateAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
