import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/form.css";
import { Education } from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  const handleFormChange = () => {
    setFormIndex(formIndex + 1);
  };

  return (
    <motion.div animate={{ translateX: "20px" }}>
      <Education handleFormChange={handleFormChange} />
    </motion.div>
  );
};

export default ResumeFields;
