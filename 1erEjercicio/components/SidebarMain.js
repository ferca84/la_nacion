import React from 'react';
import Title from './Title'
import TagsMenu from './TagsMenu'
import ListArticle from './ListArticle';
import ButtonSeeMore from './ButtonSeeMore';

const SidebarMain = () => {


    return (
        <>
            <Title>Acumulado Grilla</Title>

            <TagsMenu />

            <ListArticle />

            <ButtonSeeMore />

        </>
    )
};

export default SidebarMain;