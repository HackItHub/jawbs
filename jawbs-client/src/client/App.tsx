import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFieldsPage, PortfolioPage } from "./pages";
import {
  ThemeContextProvider,
  AuthContextProvider,
  UserInfoContextProvider,
} from "./contexts";
import { MainContainer } from "./components/layout";
import { SignIn, SignUp } from "./components/auth";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PortfolioPage />,
    },
    {
      path: "/resume-fields",
      element: (
        <div className='background'>
          <BallBackground />
          <ResumeFieldsPage />
        </div>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <div className='background'>
          <BallBackground />
          <SignIn />
        </div>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <>
          <div className='background'>
            <BallBackground />
          </div>
          <SignUp />
        </>
      ),
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
