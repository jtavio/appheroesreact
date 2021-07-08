import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; //recurso estaticos

const heroesImg = require.context('../../assets/heroes', true);

const HereosScreen = ({history}) => {

    //este hook extrae los parametros que trae la url
    const {heroeId} = useParams();
    //esto se momoriza ya que se renderiza cuando hay un cambio de publisher
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    
    
    if(!hero){
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack()
        }
    }

     const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
     } = hero
    return (
        <div className="card mb-3" style={{maxwidth: 540}}>
        <div className="row g-0 animate__animated animate__fadeInLeft">
            <div className="col-md-4">
            <img
                // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
                //src={batman} //import
                src={heroesImg(`./${heroeId}.jpg`).default}
                className="img-fluid rounded-start animate__animated animate__fadeInLeft" alt={superhero}
              />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text"> <b>Alter ego:</b> {alter_ego}</p>
                <p className="card-text"><b>characteres: </b>{characters}</p>
                <p className="card-text"><b>publisher: </b>{publisher}</p>
                
                <p className="card-text"><b>First apparence: </b>{first_appearance}</p>
                <button
                onClick={handleReturn}
                className="btn btn-primary">Return</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default HereosScreen
