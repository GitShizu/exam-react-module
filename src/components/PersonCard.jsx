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
        <div className="card">
            <div>
                <h3>{name}</h3><span>{sex === 1 ? ('F') : ('M')}</span>
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w400/${imagePath}`} alt={`${name}'s picture`} />
                </figure>
            </div>
            <div className="details">
                <p><b>{`Occupation: `}</b>{occupation}</p>
                <p><b>{`Popularity: `}</b>{popularity}</p>
                <p><b>{`Works: `}</b></p>
                <ul>{works.map((m, i) => (
                    <li key={`${name}_${i}`}>{m}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}