import { createBrowserRouter } from "react-router-dom";

import MainPageRoute from "./pages/MainPage/MainPageRoute";
import ThreadPageRoute from "./pages/ThreadPage/ThreadPageRoute";

export const router = createBrowserRouter([MainPageRoute, ThreadPageRoute]);
