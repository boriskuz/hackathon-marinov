import { createContext, useState, ReactNode } from "react";


interface LanguageProps {
  language: string;
  setLanguage: (value: string) => void;
}

export const LanguageContext = createContext<LanguageProps>({
  language: "en",
  setLanguage: () => {},
});

interface ReactProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: ReactProps) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
