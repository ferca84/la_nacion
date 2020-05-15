import React from 'react';
import Title from './Title'
import TagsMenu from './TagsMenu'
import ListArticle from './ListArticle';
import ButtonSeeMore from './ButtonSeeMore';

const SidebarMain = () => {
    

    return (
        <div className="sidebar__main">

            <Title>Acumulado Grilla</Title>

            <TagsMenu />

            <ListArticle />

            <ButtonSeeMore />

        </div>
    )
};

export default SidebarMain;