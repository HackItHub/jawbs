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
    "acc4f061-1a0f-4d24-b98b-9f5e6a724efb",
  );

  const authValue = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser, setCurrentUser]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
