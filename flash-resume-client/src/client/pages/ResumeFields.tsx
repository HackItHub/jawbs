import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/form.css";
import {
  Education,
  Experience,
  Person,
  Address,
} from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  const handleFormChange = () => {
    setFormIndex((formIndex + 1) % 4);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          exit={{ x: "100%" }}
        >
          <Person handleFormChange={handleFormChange} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          exit={{ x: "100%" }}
        >
          <Address handleFormChange={handleFormChange} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          exit={{ x: "100%" }}
        >
          <Education handleFormChange={handleFormChange} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          exit={{ x: "100%" }}
        >
          <Experience handleFormChange={handleFormChange} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ResumeFields;
