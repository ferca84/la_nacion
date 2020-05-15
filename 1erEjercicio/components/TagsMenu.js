import React, { useContext } from 'react';
import ArticlesContext from '../components/context/articlesContext'
import TagItem from './TagItem';
import { sortByCantidadAndFirstLetters } from '../utils/functions';

const TagsMenu = () => {

    const {articles} = useContext(ArticlesContext)

    //Creo un único array con todos los tags de cada artículo
    const singleArray = articles.reduce((data, articulo) => {
        return data.concat(articulo.taxonomy.tags)
    }, []);

    //Creo un objeto donde cada key-value representa un slug y la cantidad de repeticiones
    const group = singleArray.reduce((data, tag) => {
        data[tag.slug] = data[tag.slug] ? { 'cantidad': (data[tag.slug].cantidad + 1), 'tag': tag } : { 'cantidad': 1, 'tag': tag };
        return data;
    }, {})

    //Obtengo los primeros 10 elementos de un array de tags ordenados de mayor a menor segun su cantidad de aparaciones y sus primeras dos letras del texto
    const tagsSorted = sortByCantidadAndFirstLetters(Object.keys(group), group).map(slug => group[slug])
                                                                               .slice(0, 10);
   
    const renderTags = tags => {
        return tags.map((item,i) => {
            return <TagItem key={item.tag.slug} slug={item.tag.slug}>{item.tag.text}</TagItem>
        })
    }

    return (
        <div className="row">
            <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
                {renderTags(tagsSorted)}
            </div>
        </div>
    )
};

export default TagsMenu;