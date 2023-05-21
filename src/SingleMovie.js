import React from 'react'
import { useParams } from 'react-router-dom'

function SingleMovie(props) {
    
        const params = useParams()
        const found= props.movie.find(Element=> Element.title==params.id)
      return (
    <div className='found'>
      <h1 >{params.id}</h1>
      <h3>{found.description}</h3>
      <h5>{found.posterURL}</h5>
      <h4>{found.rating}</h4>
     
      <img src={found.img}/>
    </div>
  )
}

export default SingleMovie
