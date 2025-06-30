import React from "react";
import Home from "./Home";
import Price from "./Price";
import Support from "./Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Login-Page/Login";
import TrialPage from "./Free-Trail/Trial";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Pricing/",
      element: <Price />,
    },
    {
      path: "/support/",
      element: <Support />,
    },
    {
      path: "/login/",
      element: <LoginPage />,
    },
    {
      path: "/launch-trial/",
      element: <TrialPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
