import React from 'react';


const ButtonSeeMore = (props) => {

    return (
        <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
                <button onClick={() => props.setExpanded(!props.expanded)} className="--btn --secondary">{props.children}</button>
            </div>
        </section>
    )
};

export default ButtonSeeMore;