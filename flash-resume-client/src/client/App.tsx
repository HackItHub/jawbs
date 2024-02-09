import React from "react";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import "./assets/styles/react-spring.css";
import { BallBackground } from "./utils";
import { ResumeFields } from "./pages";
import { ThemeContextProvider, AuthContextProvider } from "./contexts";
//  eslint-disable-next-line
const App: React.FC = () => (
  <ThemeContextProvider>
    <AuthContextProvider>
      <div className='background'>
        <BallBackground />
        <ResumeFields />
      </div>
    </AuthContextProvider>
  </ThemeContextProvider>
);

export default App;
