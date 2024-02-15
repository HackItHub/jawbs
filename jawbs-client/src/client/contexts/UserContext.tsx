import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
} from "react";
import { User } from "../utils/Interfaces";

type SetCurrentUserType = React.Dispatch<SetStateAction<string>>;

interface UserInfoContextType {
  userInfo: Partial<User>;
  setUserInfo: SetCurrentUserType;
}

const UserInfoContext = createContext<UserInfoContextType>({
  userInfo: {},
  setUserInfo: () => {},
});

const useUserInfoContext = (): UserInfoContextType => {
  const userInfoContext = useContext(UserInfoContext);

  if (!userInfoContext) {
    throw new Error(
      "useUserInfoContext must be used within an UserInfoContextProvider",
    );
  }

  return userInfoContext;
};

const UserInfoContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState({});

  const userInfoValue = useMemo(() => {
    return { userInfo, setUserInfo };
  }, [userInfo, setUserInfo]);

  return (
    <UserInfoContext.Provider value={userInfoValue}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContextProvider, useUserInfoContext };
