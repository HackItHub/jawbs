import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
} from "react";

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
  const [currentUser, setCurrentUser] = useState(
    "9b07e47b-22e7-4d49-9ac1-0ec51414fac2",
  );

  const authValue = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser, setCurrentUser]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
