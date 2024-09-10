import { createBrowserRouter } from "react-router-dom";

import MainPageRoute from "./pages/MainPage/MainPageRoute";
import ThreadContentRoute from "./pages/ThreadContent/ThreadContentRoute";

export const router = createBrowserRouter([MainPageRoute, ThreadContentRoute]);
