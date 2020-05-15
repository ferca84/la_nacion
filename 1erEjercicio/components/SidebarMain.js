import React, {useState} from 'react';
import Title from './Title'
import TagsMenu from './TagsMenu'
import ListArticle from './ListArticle';
import ButtonSeeMore from './ButtonSeeMore';

const SidebarMain = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="sidebar__main">

            <Title>Acumulado Grilla</Title>

            <TagsMenu />

            <ListArticle expanded={expanded} />

            {expanded ? 
                <ButtonSeeMore setExpanded={setExpanded} expanded={expanded}>MENOS NOTAS DE ACUMULADO GRILLA</ButtonSeeMore>
            : 
                <ButtonSeeMore setExpanded={setExpanded} expanded={expanded}>MÁS NOTAS DE ACUMULADO GRILLA</ButtonSeeMore> 
            }
        </div>
    )
};

export default SidebarMain;