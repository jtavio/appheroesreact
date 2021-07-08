import React from 'react'
import { Link } from 'react-router-dom';
import {heroesImg} from '../../helpers/heroImages'

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card mb-3 mx-auto animate__animated animate__fadeIn" style={{maxwidth: 400}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={heroesImg(`./${id}.jpg`).default} className="img-fluid rounded-start" alt={superhero}/>

                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters) 
                            && <p className="card-text">{characters}</p>
                    }
                    <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                    <Link 
                    className="btn btn-outline-primary"
                    to={`./heroe/${id}`}>
                        Más...
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
