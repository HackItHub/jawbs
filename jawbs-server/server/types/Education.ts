import School from "./School";

type Education = {
  userId: string;
  educationLevel: string;
  create?: School[];
  school?: School[];
};

export default Education;
