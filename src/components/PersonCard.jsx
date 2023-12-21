import { Link } from "react-router-dom"

export default ({
    id,
    name,
    occupation,
    sex,
    popularity,
    works,
    imagePath
}) => {
    return (
        <Link className="card" to={`/person/${id}`}>
            <div>
                <h3>{`${name}  `}<span>{sex === 1 ? '(F)' : '(M)'}</span></h3>
            </div>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w400/${imagePath}`} alt={`${name}'s picture`} />
            </figure>

            <div className="details">
                <p><b>{`Occupation: `}</b>{occupation}</p>
                <p><b>{`Popularity: `}</b>{popularity}</p>
                <p><b>{`Works: `}</b></p>
                <ul>{works.map((m, i) => (
                    <li key={`${name}_${i}`}>{m}</li>
                ))}
                </ul>
            </div>
        </Link>
    )
}