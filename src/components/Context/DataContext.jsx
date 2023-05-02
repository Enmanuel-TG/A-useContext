import { createContext, useState } from "react";

export const DataContext = createContext();

const DataFix = {
  name: "Enmnauel",
  age: 19,
};

export function DataProvider({ children }) {
  const [data, setData] = useState(DataFix);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
