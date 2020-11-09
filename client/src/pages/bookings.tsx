import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import  './bookings.scss'

interface booking{
  movie_image:string,
  movie_title:string,
  movie_summary:string,
  movie_year:string  
}
interface bookingsProps{
  bookings: Array<booking>
  
}

const Bookings: React.FC<bookingsProps> = () => {
  const [bookings, setBookings] = useState([]);
  const currentUser = useSelector((state:any) => state.user.currentUser);
  useEffect(() => {
     fetch('/api/bookings', {
       method:"POST",
       headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({username: currentUser.username})
     })
     .then(response => response.json())
     .then(data => {
          setBookings(data)
     })
  },[])
  return (
    <div className="bookings-container">

        <div className="search-bookings" >
           <input type="search"  placeholder="Search a booking..."  />
        </div>
        <div className="bookings">
            {
              bookings.length>0 ?
                <div>
                  {
                    bookings.map((movie:booking) => (
                        <div className="booking">
                          <img src={movie.movie_image} width={150} height={150} />
                          <div className="booking-details">
                            <div ><strong>Title: </strong> {movie.movie_title}</div>
                            <div ><strong>Released: </strong> {movie.movie_year}</div>
                            <div ><strong>Summary: </strong>{movie.movie_summary}</div>
                          </div>
                        </div>
                    ))
                  }
                </div>
              : <div className="no-bookings">You don't have any bookings</div>
            }          
        </div>
    </div>
  );
}
export default Bookings
