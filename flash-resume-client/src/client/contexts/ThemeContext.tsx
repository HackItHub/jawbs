import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  useMemo,
} from "react";

type SetThemeType = React.Dispatch<SetStateAction<string>>;

interface ThemeType {
  theme: string;
  setTheme: SetThemeType;
}

const ThemeContext = createContext<ThemeType>({
  theme: "",
  setTheme: () => {},
});

const useThemeContext = (): ThemeType => {
  const authContext = useContext(ThemeContext);

  if (!authContext) {
    throw new Error(
      "useThemeContext must be used within an AuthContextProvider",
    );
  }

  return authContext;
};

const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState("");

  const themeValue = useMemo(() => {
    return { theme, setTheme };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider, useThemeContext };
