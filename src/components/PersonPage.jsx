import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const apiKey = import.meta.env.VITE_API_KEY;
export default ()=>{
    const [person, setPerson] = useState()
    const [error,setError] = useState()
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
        .then(response=>response.json())
        .then(obj=>setPerson(obj))
        .catch(er=>{
            console.error('Sorry, no persons found')
            setError(er)
        })
    },[id])
    const age= ()=>{
        return(Number('2023')-Number(person.birthday.substring(0,5)))
    }
    return(
<section className="person-page-container">
    <>{error || person===undefined? 
    <h2>{error}</h2>
    :
        <article className="person-page">
            <figure>
                <img src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} alt={`${person.name}'s picture`} />
            </figure>
            <div className="person-page-info">
                <p><b>Name:</b>{person.name}</p>
                <p><b>Gender:</b>{person.gender}</p>
                <p><b>Occupation:</b>{person.known_for_department}</p>
                <p><b>Age:</b>{age()}</p>
                <p><b>Bio:</b>{person.biography}</p>
            </div>
        </article>
    }
    </>
</section>
    )
}