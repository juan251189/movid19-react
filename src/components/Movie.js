
import React from 'react';

function Movie({movie}) {
    return (
       
       
           <div className="movie">


   <div className="movie-poster">
  <img src={movie.Poster} className=" img img-thumbnail" alt="" />
 
  {/* <p className="mt-2 movie-title" style={{color:'white'}}>{movie.Title}</p> */}
    
</div>
 

</div>
        
    )
}

export default Movie
