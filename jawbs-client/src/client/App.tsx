import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFields, Portfolio, ErrorPage } from "./pages";
import {
  ThemeContextProvider,
  AuthContextProvider,
  UserInfoContextProvider,
} from "./contexts";
import { MainContainer } from "./components/layout";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <MainContainer>
        <AuthContextProvider>
          <UserInfoContextProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path='/'
                  element={<Portfolio />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/resume-fields'
                  element={
                    <div className='background'>
                      <BallBackground />
                      <ResumeFields />
                    </div>
                  }
                />
              </Routes>
            </BrowserRouter>
          </UserInfoContextProvider>
        </AuthContextProvider>
      </MainContainer>
    </ThemeContextProvider>
  );
};

export default App;
