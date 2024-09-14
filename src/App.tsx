import React from 'react';
import Home from './components/Home';
import { DataProvider } from './context/dataContext';
import './App.css'


function App(): React.ReactElement {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
