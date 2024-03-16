import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jawbsLogo from "../../assets/images/logos/jawbs-logo-original-copy.png";
import { useAuthContext, useUserInfoContext } from "../../contexts";

const Header: React.FC = () => {
  const { userAuth, setUserAuth } = useAuthContext();
  const { setUserInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });

  const signOut = () => {
    if (userAuth.token) {
      cookies.remove(userAuth.token);
    }
    setUserAuth({});
    setUserInfo({});
    navigate("/sign-in");
  };

  return (
    <header className='pb-2 drop-shadow-md border-b-black'>
      <div className='flex justify-between'>
        <NavLink to='/' className='flex text-heading text-lg items-center'>
          <img
            src={jawbsLogo}
            className='w-12 h-14 mr-2'
            alt='Jawbs Logo: Shark in a Suit'
          />
        </NavLink>
        {userAuth.token && (
          <div>
            <button
              type='button'
              onClick={signOut}
              className='border-none underline bg-transparent text-lg text-blue'
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
