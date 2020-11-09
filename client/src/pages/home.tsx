import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './home.scss';

interface homeProps{
    error: string
}

const Home  = () => {
  const [movie, setMovie] = useState<any>([])
  const [error, setError] = useState('');
  const currentUser = useSelector((state:any) => state.user.currentUser);

  const bookMovie = (e:any) => {
    fetch('/api/book-movie', {
      method:"POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:currentUser.username,movie: movie[0]})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
          alert('Movie successfully booked.')
        }else if(data.error){
          alert(data.error)
        }
    })
  }

  const searchMovie = (e: any) => {
    if(e.key == 'Enter'){
      setMovie([])
      setError('')
      fetch(`http://www.omdbapi.com/?i=tt3896198&t=${e.target.value}&apikey=fc4ec3d3`)
      .then(response => response.json())
      .then(data => {
        if(data.Error){
          setError(data.Error)
        }else{
          let tempArray = []
          tempArray.push(data)
          setMovie(tempArray)
        }
      })
    }
  }
  return (
    <div className="result-div">
        <div className="search-movies" >
           <input type="search"  placeholder="Search a movie..." onKeyDown={searchMovie} />
        </div>
        <div className="movies">
            {
                movie.length>0?
                <div className="movie">
                    <img src={movie[0].Poster} width={200} height={200} />
                    <div className="movie-details">
                        <div ><strong>Title: </strong> {movie[0].Title}</div>
                        <div ><strong>Released: </strong> {movie[0].Released}</div>
                        <div ><strong>Summary: </strong>{movie[0].Plot}</div>
                    </div>
                    <button onClick={bookMovie}className="book-movie">Book movie</button>
                </div>
                : null
            }
            { 
                error?
                  <div className="error">
                    {error}
                  </div>
                :null
            }
        </div>
    </div>
  );
}

export default Home
