import React from "react";
import "./assets/styles/styles.css";
import BallBackground from "./utils/BallBackground";
import ResumeFields from "./pages/ResumeFields";

//  eslint-disable-next-line
const App: React.FC = () => (
  <div className='background'>
    <BallBackground />
    <ResumeFields />
  </div>
);

export default App;
