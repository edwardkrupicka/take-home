import './App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { fetchData } from './services/api';
import Home from './views/Home/Home';
import Article from './views/Article/Article';
import reduceIds from './utils/reduceIds';
import reduceSections from './utils/reduceSections';



const App = () => {
  const [data, setData] = useState({})
  const [fullData, setFullData] = useState({})
  const [stories, setStories] = useState([])
  const [storySection, setStorySection] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=B7d3XOGnFQ78NDEocmGG4vBQinkTMpgI')
    .then(res => {
      setData(reduceIds(res))
      setFullData(res)
      setStorySection(reduceSections(res))
      setStories(res.results)
      setLoaded(true)
    })
  }, [])

  return (
    <div className="App">
      <NavLink  to="/" className="nav-link" ><h1 className='app-title' >NY Times News Reader</h1></NavLink>
      <Routes>
        <Route path='/' element={ <Home stories={stories} storySection={storySection} /> } />
        <Route path='/article/:id' element={<Article data={data} loaded={loaded} />} />
      </Routes>
      <h1 className='copyright' >{fullData.copyright}</h1>
    </div>
  );
}

export default App;
