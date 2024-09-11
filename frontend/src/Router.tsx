import { createBrowserRouter } from "react-router-dom";
import MainPage from "@pages/MainPage.tsx";
import SpeakingTestPage from "@pages/SpeakingTestPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "speak",
    element: <SpeakingTestPage />,
  },
]);
