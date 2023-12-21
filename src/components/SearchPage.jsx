import { useState } from "react";
import SearchBar from "./SearchBar"
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;
export default () => {
    const [persons, setPersons] = useState()
    const [error, setError] = useState()
    const searchPerson = (searchValue) => {
        const URLParams = new URLSearchParams({
            query: searchValue,
            api_key: apiKey,
            include_adult: 'false',
            language: 'en-US',
            page: 1
        })
        fetch(`https://api.themoviedb.org/3/search/person?${URLParams.toString()}`)
            .then(response => response.json())
            .then(obj => {
                console.log(obj);
                setPersons(obj.results)
            })
            .catch(er => {
                console.error(er)
                setError('Whoops! Something went wrong, please try again')
            })
    }

    return (
        <section id="search-page">
            <SearchBar onSearch={searchPerson} />
            <div className="card-container">
                {error ?
                    <h2>{error}</h2>
                    :
                    <>{persons ?
                        <>{persons.length !== 0 ?
                            persons.map(p => (
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
                            ))
                            :
                            <div><h2>Sorry, looks like there are no results for that</h2></div>
                        }
                        </>
                        :
                        <><h2>Type a name and click the "Find" button</h2></>
                    }</>
                }
            </div>
        </section>
    )
}
