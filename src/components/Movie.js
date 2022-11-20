import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //브라우저의 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트

function Movie ({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>  {/*<a>태그 대신 <Link>를 사용 (<a>태그를 사용하면 리액트의 장점이 사라짐) */}
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul> 
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;