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
    "072cd781-4ce8-4708-82be-14206be52cc2",
  );

  const authValue = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser, setCurrentUser]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
