import react, {useState} from 'react';
// import axios from 'axios'
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Row from './components/Row';
import Series from './components/Series';
import Search from './components/Search';
import Slideshow from './components/Slideshow';
import More from './components/More';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [id,setId] = useState();
  const[category,setcategory]=useState();
  // console.log(id);
  let tv="tv";
  let movie="movie";
  return (
  
    <BrowserRouter>
    <Navbar/>
        <Slideshow />
      <Routes>

        <Route exact path="/" element={<Row setId={setId}/>} />
        <Route exact path="more" element={<More id={id} type={movie}/>} />
        <Route exact path="movies" element={<Movies setId={setId} />} />
        <Route exact path="movies/more" element={<More id={id} type={movie}/>} />
        <Route exact path="series" element={<Series setId={setId} />} />
        <Route exact path="series/moredetail" element={<More id={id} type={tv}/>} />
        <Route exact path="search" element={<Search setId={setId} setcategory={setcategory}/>} />
        <Route exact path="search/more" element={<More id={id} type={category}/>} />
        
      </Routes>
    </BrowserRouter>
    
    
   
  
  );
}

export default App;
