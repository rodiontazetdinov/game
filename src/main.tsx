import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Root } from "./routes/Root.tsx";
import { Feed } from "./pages/Feed.tsx";
import { Quests } from "./pages/Quests.tsx";
import { Team } from "./pages/Team.tsx";
import { Profile } from "./pages/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/quests",
        element: <Quests />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
