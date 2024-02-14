// import logo from './logo.svg';
// import './App.css';
import React ,{useState,useEffect} from 'react';
import NewsGrid from './NewsGrid';
import './News.css'
// import Menu from './components/Menu';

function App()
{
  const[items,setItems] = useState([])
  
  // const[category,setCategory] = useState("general")

  useEffect(()=> {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9be5cc92fc914473bf60d173c45f6ffd')
    .then(res => res.json())
    .then(data => setItems(data.articles))
  },[])

  return (
    <div className='App'>
      <h1 className='title' >See The Latest Medical News</h1>
      {/* <Menu active={active} setActive={setActive} /> */}
      <NewsGrid items={items}/>
    </div>
  )
}

export default App;