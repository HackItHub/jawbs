import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFields, Portfolio } from "./pages";
import { ThemeContextProvider, AuthContextProvider } from "./contexts";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/resume-fields",
      element: (
        <div className='background'>
          <BallBackground />
          <ResumeFields />
        </div>
      ),
    },
    {
      path: "/",
      element: <Portfolio />,
    },
  ]);

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
