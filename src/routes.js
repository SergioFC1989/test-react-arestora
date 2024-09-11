import { createBrowserRouter } from "react-router-dom";

import MainPageRoute from "./pages/MainPage/MainPageRoute";
import ThreadPageRoute from "./pages/ThreadPage/ThreadPageRoute";
import NotFoundPageRoute from "./pages/NotFoundPage/NotFoundPageRoute";

export const router = createBrowserRouter([
  MainPageRoute,
  ThreadPageRoute,
  NotFoundPageRoute,
]);
