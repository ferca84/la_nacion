import React, {useContext} from 'react';
import ArticlesContext from '../components/context/articlesContext'

const ButtonSeeMore = (props) => {

    const {expanded, setExpanded} = useContext(ArticlesContext)


    return (
        <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
                    <button onClick={() => setExpanded(!expanded)} className="--btn --secondary">
                        {expanded ? "MENOS NOTAS DE ACUMULADO GRILLA" : "MÁS NOTAS DE ACUMULADO GRILLA"}
                    </button>
            </div>
        </section>
    )
};

export default ButtonSeeMore;