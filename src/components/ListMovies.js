import React from 'react';
import Movie from './Movie';


function ListMovies({movies}){
    return(
        <section id="movies" >
        <div className="container-fluid">
          <div className="row">
    

            {console.log(movies)}

             {movies.map((item,index)=>(
                <Movie movie={item} key={index}/>
    
             ))
            }
            
    
          </div>
    
        </div>
      </section>
    
    )
}

export default ListMovies;