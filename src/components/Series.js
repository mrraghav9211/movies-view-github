import React,{useState,useEffect} from "react";
import axios from "axios";
import './Row.css'
import { Link } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";

function Series(props) {
  let API_KEY='8d382a141ad7361add2d2c8cf067b425';
    const [movie,setMovie]=useState([]);
    const [page, setPage] = useState(1);
    // const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
      fetchData();
      // eslint-disable-next-line
    }, [])

  const fetchData = async ()=>{
       let res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`);
      
       setMovie(res.data.results);
  }
 
  const nextData = async ()=>{
    let res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page + 1}`);
    setPage(page + 1);
    setMovie(res.data.results);
    // setTotalResults(res.data.total_results);
  }
  const prevData = async ()=>{
    let res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page - 1}`);
    setPage(page - 1);
    setMovie(res.data.results);
    // setTotalResults(res.data.total_results);
  }
  const getMore = (e)=>{
    props.setId(e.target.id);
    }


    return (
        <>
        <div className="trending-row-container">
            <h2>TV Series</h2>

            {/* <InfiniteScroll
        dataLength={movie.length}
        next={fetchMoreData}
        // hasMore={movie.length !== totalResults}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}
            <div className="trending-img-container">
          {
            movie.map((value)=>{
              return(
                <Link to='moredetail'>
                <img  onClick={getMore} id={value.id} src={"https://image.tmdb.org/t/p/original"+value.poster_path}
                alt="" />
                </Link>
              )
            })
          }
            
                
            </div>
            {/* </InfiniteScroll> */}
            <div className="button-container">
            <span disabled={page === 1} className="prev" onClick={prevData}><i class="fa-solid fa-angle-left"></i></span>
            <span className="page-no">{page}</span>
            <span className="next" onClick={nextData}><i class="fa-solid fa-angle-right"></i></span>
        </div>
        </div>
        </>
      );
}
export default Series
