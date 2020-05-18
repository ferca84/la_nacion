import React, { useState } from 'react'
import SidebarMain from '../components/SidebarMain'
import ArticlesContext from "../components/context/articlesContext";
import { getArticles } from '../lib/api'
import Layout from '../components/Layout';


const indexPage = ({ articles }) => {

    const [expanded, setExpanded] = useState(false)

    return (
        <Layout>
            <ArticlesContext.Provider value={{ articles, expanded, setExpanded }}>
                <SidebarMain />
            </ArticlesContext.Provider>
        </Layout>
    )
}

//function que es llamada en cada request de la página. Solo será renderizada cuando esten los datos (mejor para el SEO)
export async function getStaticProps(context) {
    const articles = await getArticles();
    // Le envio a la página los articulos via props
    return { props: { articles } }
}

export default indexPage