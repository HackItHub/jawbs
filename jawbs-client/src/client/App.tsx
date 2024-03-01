import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFieldsPage, PortfolioPage, ErrorPage } from "./pages";
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
