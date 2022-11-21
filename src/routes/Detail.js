import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";


function Detail() {
    const [loading, setLoading] = useState([true]);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovies(json.data.movie);
            setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[])
    return (
        <div className={styles.container}>
            {loading ? <div className={styles.loader}><span>Loading...</span></div> : 
            <div className={styles.detail}>
                <img src={movies.medium_cover_image}/>
                <ul>
                     <li><strong>id:</strong> {movies.id}</li>
                     <li><strong>title:</strong> {movies.title}</li>
                     <li><strong>description:</strong> {movies.description_full.length > 150 ? `${movies.description_full.slice(0,150)}...` : movies.description_full }</li>
                     <li><strong>rating:</strong> {movies.rating}</li>            
                     <li>
                        <strong>genres</strong>
                        <ul>
                            {movies.genres.map((g) => (
                            <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}
export default Detail;