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
  const [token, setToken] = useState(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIiwidXNlciI6ImE3ZjNjYzJjLTJiNzItNDFhZi1hZTRiLTA2ZTNlMTAwN2YyNyIsImlhdCI6MTcwOTQ4OTYwMn0.U6U8xWnxIso3Z21N4XSRzpmAs6knwF0uxwnLLZz5YgCxjDhcXCCqHmhwtOax1hD5Cqx0eco-kkqYZsVitlXs6MLhFo8-B0rnIwG8RxNDTrR1sOYhDKOr2UEO-kxPcsAfucNkwBGZiOC5p-UvpE5gWLNVo2VbF8PlyG44V4r5vINYk-dgOXdmJleKHQCMIzoVCHe23Afy0kjXFanRcjz5Nd6-45SySCBm6kbXjnx_AbZlGABQ-VdamO-P1peKihMucKSRw6TvTgHg9bSrys91anAe1uRpZmydQKWT96u-mn7qchFOdqfgUUcQ85QfRZp8iSPUIR_qg8dQeijh4STZ8g",
  );

  const getToken = () => {
    const cookies = new Cookies(null, { path: "/" });
    const userToken = cookies.get("userToken");

    if (!userToken) {
      return;
    }

    setToken(userToken);
  };

  useEffect(getToken);

  const authValue = useMemo(() => {
    return { token, setToken };
  }, [token, setToken]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
