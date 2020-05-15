import React from 'react';

const Title = (props) => (
    <div className="row">
        <div className="com-titleWithfollow hlp-marginBottom-15">
            <h1 className="com-title-section-xl hlp-marginBottom-40">{props.children}</h1>
        </div>
    </div>
);

export default Title;