import "./movielist.css";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function MovieList({list}){
    const[liist,setliist]=useState(list)
    const deleteByValue = value => {
        setliist(oldValues => {
          return oldValues.filter(movie => movie !== value)
        })
      }
    return(
        <div className="MovieList">{
        liist.map( (ele)=>(
            <>
            <MovieCard  ele={ele} />
            <button className="bts" onClick={() => deleteByValue(ele)}>Delete</button>
            </>
          

        ))
        }
        </div>
    );
}

export default MovieList;