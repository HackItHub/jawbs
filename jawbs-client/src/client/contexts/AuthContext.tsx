import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
  useEffect,
} from "react";
import Cookies from "universal-cookie";

type UserAuth = {
  token?: string;
  isActivated?: boolean;
};

type SetUserAuthType = React.Dispatch<SetStateAction<UserAuth>>;

interface AuthContextType {
  userAuth: UserAuth;
  setUserAuth: SetUserAuthType;
}

const AuthContext = createContext<AuthContextType>({
  userAuth: {
    token: "",
  },
  setUserAuth: () => {},
});

const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider",
    );
  }

  return authContext;
};

const AuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [userAuth, setUserAuth] = useState({});

  const getToken = () => {
    const cookies = new Cookies(null, { path: "/" });
    const token = cookies.get("userToken");

    if (!userAuth) {
      return;
    }

    setUserAuth({ ...userAuth, token });
  };

  useEffect(getToken, []);

  const authValue = useMemo(() => {
    return { userAuth, setUserAuth };
  }, [userAuth, setUserAuth]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
