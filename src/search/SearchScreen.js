import React, { useMemo } from 'react';
import queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
import HeroCard from '../components/heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHerosByName } from '../selectors/getHerosByName';

const SearchScreen = ({history}) => {

    const location = useLocation()
    // console.log(location.search);
    //console.log(queryString.parse(location.search))
    const {q = ''} = queryString.parse(location.search)
    //console.log(q)
    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText} = formValues;

    const memoFilterHero = useMemo(() => getHerosByName(q), [q])

    //const heroesFilter = getHerosByName(searchText);


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <p>{searchText}</p>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                            name="searchText"
                        />
                        <button
                            className="btn mt-2 btn-outline-primary"
                            type="submit"
                           
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                    (q==='') && <div className="alert alert-info animate__animated animate__fadeIn">
                        Search a hero
                    </div>
                    }
                    {
                    (q !=='' && memoFilterHero.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">
                        There is no a hero with {q}
                    </div>
                    }
                    {
                        memoFilterHero.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchScreen
