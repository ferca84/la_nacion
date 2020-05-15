import React, { useContext, useState, useEffect } from 'react';
import ArticlesContext from '../components/context/articlesContext'
import TagItem from './TagItem';

const TagsMenu = () => {

    //estado interno para evaluar si el componente ha sido montado o no para evitar dif entre server render y client render
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const context = useContext(ArticlesContext)

    //Creo un único array con todos los tags de cada artículo
    const singleArray = context.articles.reduce((data, articulo) => {
        return data.concat(articulo.taxonomy.tags)
    }, []);

    //Creo un objeto donde cada key-value representa un slug y la cantidad de repeticiones
    const group = singleArray.reduce((data, tag) => {
        data[tag.slug] = data[tag.slug] ? { 'cantidad': (data[tag.slug].cantidad + 1), 'tag': tag } : { 'cantidad': 1, 'tag': tag };
        return data;
    }, {})

    //Obtengo los primeros 10 elementos de un array de tags ordenados de mayor a menor segun su cantidad de aparaciones
    const tagsSorted = Object.keys(group).sort(function (a, b) { return group[b].cantidad - group[a].cantidad })
                                         .map(slug => group[slug])
                                         .slice(0, 10);

    const renderTags = tags => {
        return tags.map((item,i) => {
            return <TagItem key={i} slug={`/tema/${item.tag.slug}`}>{item.tag.text}</TagItem>
        })
    }

    return (
        <div className="row">
            <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
                {
                //preguntar si el componente esta montado para renderizar correctamente los tags, sino habia inconsistencias
                isMounted && renderTags(tagsSorted)
                }
            </div>
        </div>
    )
};

export default TagsMenu;