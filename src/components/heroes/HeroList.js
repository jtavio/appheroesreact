import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {

    //esto se momoriza ya que se renderiza cuando hay un cambio de publisher
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);
    //const heroes = getHeroByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}>
                    </HeroCard>
                ))
            }
        </div>
    )
}

export default HeroList
