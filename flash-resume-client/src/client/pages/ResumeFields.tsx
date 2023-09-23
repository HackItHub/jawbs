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
    <div className='flex justify-center items-center py-10'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={`form-${formIndex}`}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.25 }} // Customize the transition
        >
          {formIndex === 0 && <Person handleFormChange={handleFormChange} />}
          {formIndex === 1 && <Address handleFormChange={handleFormChange} />}
          {formIndex === 2 && <Education handleFormChange={handleFormChange} />}
          {formIndex === 3 && (
            <Experience handleFormChange={handleFormChange} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResumeFields;
