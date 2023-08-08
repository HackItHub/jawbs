import React from "react";
import { IoMdAddCircle } from "react-icons/io";

interface ExperienceEntries {
  experience: string;
  title: string;
  responsibilities: string[] | null;
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
}

const Experience: React.FC = () => {
  return (
    <form action='submit'>
      <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
        <button type='button' className='w-full py-4'>
          <div className='text-text-placeholder flex justify-center items-center gap-2'>
            Add Education
            <IoMdAddCircle />
          </div>
        </button>
      </div>
    </form>
  );
};

export default Experience;
