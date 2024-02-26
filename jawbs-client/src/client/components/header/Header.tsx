import React from "react";
import { NavLink } from "react-router-dom";
import jawbsLogo from "../../assets/images/logos/jawbs-logo-original-copy.png";

const Header: React.FC = () => {
  return (
    <header className='pb-2 drop-shadow-md border-b-black'>
      <NavLink to='/' className='flex text-heading text-lg items-center'>
        <img
          src={jawbsLogo}
          className='w-12 h-14 mr-2'
          alt='Jawbs Logo: Shark in a Suit'
        />
      </NavLink>
    </header>
  );
};

export default Header;
