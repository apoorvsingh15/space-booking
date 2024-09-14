// src/context/DataContext.tsx
import { createContext, useState, useEffect } from 'react';

interface DataContextProps {
  children: React.ReactNode;
}
interface DataContextValue {
  dataRes: never[];
  setDataRes: React.Dispatch<React.SetStateAction<never[]>>;
}

const DataContext = createContext<DataContextValue>({ dataRes: [], setDataRes: () => { } });

const DataProvider = ({ children }: DataContextProps) => {
  const [dataRes, setDataRes] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDataRes(data)
        console.log(data); // Here you can use the JSON data in your app
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [])

  return (
    <DataContext.Provider value={{ dataRes, setDataRes }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };