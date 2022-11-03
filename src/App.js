import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import "./App.css"


function App() {
  return <div data-theme='light' className="App">
 <RouterProvider router={router} />
  </div>;
}

export default App;
