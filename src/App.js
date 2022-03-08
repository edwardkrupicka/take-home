import './App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchData } from './services/api';
import Home from './views/Home/Home';


const App = () => {
  const [data, setData] = useState({})
  const [stories, setStories] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=B7d3XOGnFQ78NDEocmGG4vBQinkTMpgI')
    .then(res => {
      setData(res)
      setStories(res.results)
      setLoaded(true)
    })
  }, [])

  return (
    <div className="App">
      <h1 className='app-title' >NY Times News Reader</h1>
      <Routes>
        <Route path='/' element={ <Home stories={stories} /> } />
      </Routes>
    </div>
  );
}

export default App;
