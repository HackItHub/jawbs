import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
} from "react";
import { UserInfoType } from "../utils/Types";

type SetCurrentUserType = React.Dispatch<SetStateAction<UserInfoType>>;

interface UserInfoContextType {
  userInfo: UserInfoType;
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
