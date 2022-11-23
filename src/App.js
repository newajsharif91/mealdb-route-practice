import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Meal from "./Division/Division";
import Main from "./Layout/Main";
import WrongRoute from "./WrongRoute/WrongRoute";
import Division from "./Division/Division";
import Distric from "./Distric/Distric";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> },
        {
          path: "/division",
          loader: async () => {
            return fetch("https://bdapis.herokuapp.com/api/v1.1/divisions");
          },
          element: <Division></Division>,
        },
        {
          path: "/distric",
          loader: async () => {
            return fetch("https://bdapis.herokuapp.com/api/v1.1/districts/");
          },
          element: <Distric></Distric>,
        },
      ],
    },

    { path: "*", element: <WrongRoute></WrongRoute> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
