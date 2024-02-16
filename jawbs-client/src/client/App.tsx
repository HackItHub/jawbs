import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFields, Portfolio } from "./pages";
import {
  ThemeContextProvider,
  AuthContextProvider,
  UserInfoContextProvider,
} from "./contexts";
import { MainContainer } from "./components/layout";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='background'>
          <BallBackground />
          <ResumeFields />
        </div>
      ),
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
  ]);

  return (
    <ThemeContextProvider>
      <MainContainer>
        <AuthContextProvider>
          <UserInfoContextProvider>
            <RouterProvider router={router} />
          </UserInfoContextProvider>
        </AuthContextProvider>
      </MainContainer>
    </ThemeContextProvider>
  );
};

export default App;
