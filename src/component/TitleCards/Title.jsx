import React, { useEffect, useState } from "react";
import './Title.css';
import { Link } from "react-router-dom";

export default function Title({ title, category }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTM1Yjk0YTMwYTJjNjU5NDliMzZiM2I5ODk0ZDM1ZCIsIm5iZiI6MTc1NDc0MzAxMy4wNTc5OTk4LCJzdWIiOiI2ODk3NDBlNWJhMDUzMDM2YTY2ZDYzOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.22LRaQve4wtXyaPdn9JXYcLhua3hll-JbV4LoJHI6qk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => ( 
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}