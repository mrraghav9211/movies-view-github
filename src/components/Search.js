import react, { useState } from "react";
import "./Search.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Search(props) {
  const [text, setText] = useState("Search movie");
  const [movie, setMovie] = useState([]);
  const [type,setType]=useState('movie');
  props.setcategory(type);
  const changeText = (event) => {
    setText(event.target.value);
  };
  const getData =(e)=>{
    setType(e.target.id);
    getMovie();
   
   }
  const getMovie =async (e) => {
    // e.prevenDefault();
    let res=await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=8d382a141ad7361add2d2c8cf067b425&query=${text}`);
      setMovie(res.data.results);
  };
  const getMore = (e)=>{
    props.setId(e.target.id);
    }
   
  return (
    <>
      <div className="search-container">
        <div className="input-container">
        <input
          type="text"
          placeholder="Search.."
          value={text}
          onChange={changeText}
        />
        <button onClick={getMovie}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>

        <br />
        <div className="search-nav">
          <span onClick={getData} id='movie' >MOVIES</span>
          <span onClick={getData} id='tv'>TV SERIES</span>
        </div>
        </div>
      

      <div className="trending-row-container">
        <h2>Search</h2>
        <div className="trending-img-container">
          {movie.map((value) => {
            return (
              <Link to='more'>
            <img onClick={getMore} id={value.id} src={"https://image.tmdb.org/t/p/original"+value.poster_path} alt="" />
            </Link>
            )
          })
          }
        </div>
      </div>
      </div>
    </>
  );
}

export default Search;
