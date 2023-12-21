import { useEffect } from "react"
import { useState } from "react"
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {

    const [persons, setPersons] = useState([])
    const [error, setError] = useState()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
            .then(response => response.json())
            .then(obj => {
                console.log(obj);
                setPersons(obj.results)
            })
            .catch(er => {
                console.error(er)
                setError('Whoops! Something went wrong, please try again')
            })
    }, [])

    return (
        <section id="home">
            <h2>Today's most popular people</h2>
            <div className="card-container">
                {error ?
                    <h2>{error}</h2>
                    :
                    <>{persons.map(p => (
                        <PersonCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            occupation={p.known_for_department}
                            sex={p.gender}
                            popularity={p.popularity}
                            works={p.known_for.map(m => m.title)}
                            imagePath={p.profile_path}
                        />
                    ))}</>
                }
            </div>
        </section>
    )
}