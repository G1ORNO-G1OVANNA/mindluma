import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Journal } from "./components/Journal";
import { Connect } from "./components/Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "journal", Component: Journal },
      { path: "connect", Component: Connect },
    ],
  },
]);
