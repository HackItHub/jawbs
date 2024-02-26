import School from "./School";

interface Education {
  userId: string;
  educationLevel: string;
  create?: School[];
  school?: School[];
}

export default Education;
