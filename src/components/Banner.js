import axios from '../axios';
import React, { useEffect } from 'react'
import requests from '../Request';
import "./Banner.css"

export default function Banner() {

    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
     async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
     }
      fetchData()
    }, [])

    //console.log(movie);

   function trauncate(string, n){
      return (string?.length > n? string.substr(0, n - 1) + "..." : string);
   }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
    }}>

    <div className="banner_contents">
        <h1 className="banner_title">{movie.original_name || movie.title || movie.name}</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h2 className="banner_description">
          {trauncate (movie.overview, 150) }
        </h2>
    </div>
    <div className="banner_fadeBottom" />
    </header>
  )
}
