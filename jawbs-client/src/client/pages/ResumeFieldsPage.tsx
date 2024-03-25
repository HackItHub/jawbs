import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../assets/styles/forms/form.css";
import {
  EducationForm,
  ExperienceForm,
  PersonForm,
  AddressForm,
} from "../components/resume-fields";
import { useAuthContext } from "../contexts";

const ResumeFieldsPage: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);

  const { token } = useAuthContext().userAuth;
  const handleFormChange = () => {
    setFormIndex((formIndex + 1) % 4);
  };
  const navigate = useNavigate();

  if (!token) {
    navigate("/sign-in");
  }

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
          {formIndex === 0 && (
            <PersonForm handleFormChange={handleFormChange} />
          )}
          {formIndex === 1 && (
            <AddressForm handleFormChange={handleFormChange} />
          )}
          {formIndex === 2 && (
            <EducationForm handleFormChange={handleFormChange} />
          )}
          {formIndex === 3 && (
            <ExperienceForm handleFormChange={handleFormChange} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResumeFieldsPage;
