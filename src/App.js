
import './App.css';
import {useState} from 'react';
import SearchBar from './components/SearchBar';
import ListMovies from './components/ListMovies';

function App() {

  const [movies,setMovies] =useState([]);

  const API = {
    base:'http://www.omdbapi.com/?apikey=1468b66e&t=movie&s=',
    key:''
  }

  const fetchmovies = (query) =>{
    console.log(query);
    let url= `${API.base}${query}`;

      fetch(url)
      .then(response =>{
        //console.log(response);
        return response.json();
      }).then (data =>{
        if(data.Error){
          // setMovies({});
          console.log(Error);
        }
        else{
          console.log(data);
          setMovies(data.Search);
        }
      })
  }


  return (
    <div className="App">
        <SearchBar fetchmovies={fetchmovies}/>
        <ListMovies movies={movies}/>
    </div>
  );
}

export default App;
