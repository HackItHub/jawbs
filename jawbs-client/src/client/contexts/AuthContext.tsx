import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
  useEffect,
} from "react";
import Cookies from "universal-cookie";

type SetTokenType = React.Dispatch<SetStateAction<string>>;

interface AuthContextType {
  token: string;
  setToken: SetTokenType;
}

const AuthContext = createContext<AuthContextType>({
  token: "",
  setToken: () => {},
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
  const [token, setToken] = useState("");

  const getToken = () => {
    const cookies = new Cookies(null, { path: "/" });
    const userToken = cookies.get("token");

    if (!userToken) {
      return;
    }

    setToken(token);
  };

  useEffect(getToken, []);

  const authValue = useMemo(() => {
    return { token, setToken };
  }, [token, setToken]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
