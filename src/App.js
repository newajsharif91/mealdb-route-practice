import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Meal from "./Meal/Meal";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>this is defult page</div> },
    { path: "/home", element: <Home></Home> },
    { path: "/about", element: <About></About> },
    { path: "/contact", element: <Contact></Contact> },
    { path: "/meal", element: <Meal></Meal> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
