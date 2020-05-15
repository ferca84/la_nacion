import React from 'react';
import {dateConvertByHand} from '../utils/functions'

const Article = ({article}) => (
    <article className="mod-caja-nota lugares w-100-mobile">
        <section id="" className="cont-figure">
            <a href="" className="figure">
                <picture id="" className="content-pic picture">
                    <img src={article.promo_items.basic.url} alt="" className="content-img" />
                </picture>
            </a>
        </section>
        <div className="mod-caja-nota__descrip">
            <h2 className="com-title-acu"><a href="">{article.headlines.basic}</a></h2>
            <h4 className="com-date">{dateConvertByHand(article.display_date)}</h4>
        </div>
    </article>
);

export default Article;