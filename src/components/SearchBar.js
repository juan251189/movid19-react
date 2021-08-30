import React,{useState} from 'react'

function SearchBar({fetchmovies}) {

    const [search,setSearch] =useState("");



    const handler =(e) => {  
        console.log(e.target.value);
        setSearch(e.target.value) ;
    }


  const fetchMoviesHandler = (e) =>{
    e.preventDefault();
    fetchmovies(search);
  }

    return (
        <section id="header" class="mb-2">

        <nav className="navbar navbar-dark justify-content-between">
        <a className="navbar-brand" onClick={()=>console.log("Did you press me ?")}>Movied-19 <i className="fas fa-ticket-alt" ></i></a>
        <form className="form-inline" onSubmit={fetchMoviesHandler}>
          <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"
         id="input-search" value={search} onChange={handler}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
        onClick={fetchMoviesHandler}>Search</button>
        </form>
        <li className="nav-item">
          <a className="nav-link" href="#" >MY FAVORITES <i className="far fa-heart"></i>
      
          </a>
        </li>
      </nav>
      </section>
    )
}

export default SearchBar
