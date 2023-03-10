import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Spinner} from "react-bootstrap";
import NavBar from "./components/NavBar";
import AppRouter from "./route/router";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }
  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
