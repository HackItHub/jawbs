import React from "react";
import "./assets/styles/styles.css";
import "./assets/styles/scrollbar.css";
import { BallBackground } from "./utils";
import { ResumeFields } from "./pages";

//  eslint-disable-next-line
const App: React.FC = () => (
  <div className='background'>
    <BallBackground />
    <ResumeFields />
  </div>
);

export default App;
