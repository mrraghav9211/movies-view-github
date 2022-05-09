import React, { useState, useEffect } from "react";
import axios from "axios";
import "./More.css";
import { useNavigate } from "react-router-dom";

const More = (props) => {
  const [detail, setDetail] = useState([]);
  const [casts, setCasts] = useState([]);
  console.log(props.type);
  useEffect(() => {
    fetchImg();
    fetchData();
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    let res = await axios(
      `https://api.themoviedb.org/3/${props.type}/${props.id}?api_key=8d382a141ad7361add2d2c8cf067b425`
    );
    // console.log(res.data)
    setDetail(res.data);
  };

  const fetchImg = async () => {
    let response = await axios(
      `https://api.themoviedb.org/3/${props.type}/${props.id}/credits?api_key=8d382a141ad7361add2d2c8cf067b425`
    );

    setCasts(response.data.cast);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="more-container">
        <>
          <div className="left-container">
            <img
              src={"https://image.tmdb.org/t/p/original" + detail.poster_path}
              alt=""
            />
          </div>
          <div className="right-container">
            <span onClick={() => navigate(-1)} className="xcros"><i class="fa-solid fa-xmark"></i></span>
            <h2>{detail.title}</h2>

            {/* <button>{detail.genres[0].name}</button>
            <button>{detail.genres[1].name}</button> */}

            <p>
             {detail.overview}
            </p>
            <span style={{backgroundColor:'#C56824',padding:'5px'}}>{detail.release_date}</span><span style={{backgroundColor:'#4E944F',marginLeft:'50px',padding:'5px'}}>{detail.vote_average}</span>
            <div className="casts">
              <h2>Casts</h2>
              <div className="img-slide">
                {casts.map((elem) => {
                  return (
                    <div className="img-card">
                      <img
                        src={"https://image.tmdb.org/t/p/original"+elem.profile_path}
                        alt=""
                      />
                      <h6>{elem.name}</h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default More;
