import React, { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

const App = () => { 
  console.log(process.env.REACT_APP_TMDB_TOKEN)
  useEffect(() => {
    apiTest()
  }, [])

  const apiTest = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
        console.log(res)
      })
  }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
