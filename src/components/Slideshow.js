import React,{useState,useEffect} from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css'


// const slideImages = [
//   {
//     url: 'https://image.tmdb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg',
//     caption: 'Slide 1'
//   },
//   {
//     url: 'https://image.tmdb.org/t/p/original/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg',
//     caption: 'Slide 2'
//   },
//   {
//     url: 'https://image.tmdb.org/t/p/original/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg',
//     caption: 'Slide 3'
//   },
// ];

const Slideshow = () => {

  const [slideImages, setSlideImages] =useState([]);

  const fetchData = async ()=>{
    let res = await axios.get(`https://api.themoviedb.org/3/trending/all/days?api_key=8d382a141ad7361add2d2c8cf067b425&page=1`);
   
    setSlideImages(res.data.results);
}
useEffect(() => {
  fetchData();
}, [])

  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${"https://image.tmdb.org/t/p/original"+slideImage.backdrop_path})`}}>
              <div className='overview'>
                <h1>{slideImage.title}</h1>
              <span>{slideImage.overview}</span>
              </div>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export default Slideshow;
