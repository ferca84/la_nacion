import React, {useContext} from 'react';
import ArticlesContext from '../components/context/articlesContext'

const ButtonSeeMore = (props) => {

    const {expanded, setExpanded} = useContext(ArticlesContext)
    const texto = {'true': 'MENOS NOTAS DE ACUMULADO GRILLA', 'false': 'MÁS NOTAS DE ACUMULADO GRILLA'}

    return (
        <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
                    <button onClick={() => setExpanded(!expanded)} className="--btn --secondary">
                        {texto[expanded]}
                    </button>
            </div>
        </section>
    )
};

export default ButtonSeeMore;