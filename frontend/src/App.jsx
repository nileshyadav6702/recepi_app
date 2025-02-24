import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Login from "./components/Auth/login";
import Example from "./components/Example";
import Signup from "./components/Auth/signup";
import FavoriteList from "./components/recepi/favoriteList";
import Viewdetail from "./components/recepi/viewdetails";
import { Dataprovider } from "./components/datacontext";

function App() {
  const routeData = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/favorite",
      element: <FavoriteList />,
    },
    {
      path:'/detail/:id',
      element:<Viewdetail/>
    }
  ];

  return (
    <div>
      <Dataprovider>
        <BrowserRouter>
          <Routes>
            {routeData.map((route) => {
              return <Route path={route.path} element={route.element} />;
            })}
          </Routes>
        </BrowserRouter>

      </Dataprovider>
    </div>
  );
}

export default App;
