import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../assets/styles/form.css";
import {
  Experience,
  Person,
  Address,
  Education,
} from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  const handleFormChange = () => {
    setFormIndex(formIndex + 1);
  };

  return (
    <motion.div animate={{ translateX: "20px" }}>
      <Address handleFormChange={handleFormChange} />
    </motion.div>
  );
};

export default ResumeFields;
