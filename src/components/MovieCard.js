import "./moviecard.css";
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";
export default function MovieCard({ele}) {
    var x=`/movie/${ele.title}`;
    return (
        <div className="MovieCard">
                <div>
                    <div>
                        <Link to={x}><img width="300" src={ele.img} alt="pic" /></Link>
                        
                    
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Rate : {ele.rating}</h3>
                    <h4>{ele.posterURL}</h4>
                    
                    <StarRatingComponent
        name="rate1"
        starCount={10}
        value={ele.rating}
       
      />
                    </div>
                </div>
            </div>
    )
}