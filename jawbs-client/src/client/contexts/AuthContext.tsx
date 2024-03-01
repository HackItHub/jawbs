import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
  useEffect,
} from "react";
import Cookies from "universal-cookie";

type SetCurrentUserType = React.Dispatch<SetStateAction<string>>;

interface AuthContextType {
  currentUser: string;
  setCurrentUser: SetCurrentUserType;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: "",
  setCurrentUser: () => {},
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
  const [currentUser, setCurrentUser] = useState("");

  const getUser = async (token: string) => {
    try {
      const user = await axios.get("/api/user", {
        headers: {
          Authorization: token,
        },
      });
      setCurrentUser(user.data.id);
    } catch (err) {
      // eslint-disable-next-line
      console.error("something went wrong");
    }
  };

  const getToken = () => {
    const cookies = new Cookies(null, { path: "/" });
    const token = cookies.get("token");

    if (!token) {
      return;
    }

    getUser(token);
  };

  useEffect(getToken, []);

  const authValue = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser, setCurrentUser]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
