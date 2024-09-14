import React from 'react';
import Home from './components/Home';
import { DataProvider } from './context/dataContext';
import './App.css'


function App(): React.ReactElement {
  // console.log(`https://github.com/MujtabaKably/bhive-interview-project-data/blob/main/${dataRes[0]?.images[0]}`)
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
