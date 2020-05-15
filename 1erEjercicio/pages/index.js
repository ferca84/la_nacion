import React, {useState} from 'react'
import BannerTop from '../components/BannerTop'
import SidebarRight from '../components/SidebarRight'
import SidebarMain from '../components/SidebarMain'
import ArticlesContext from "../components/context/articlesContext";
import { getArticles } from '../lib/api'


const indexPage = ({ articles }) => {
   
    const [expanded, setExpanded] = useState(false)

    return (
        <main>

            <BannerTop />

            <div className="lay-sidebar">
            
                <ArticlesContext.Provider value={{ articles, expanded, setExpanded }}>
                    <SidebarMain />
                </ArticlesContext.Provider>

                <SidebarRight />

            </div>
        </main>
    )
}

//function que es llamada en cada request de la página. Solo será renderizada cuando esten los datos (mejor para el SEO)
export async function getStaticProps() {
    const articles = await getArticles();
    // Le envio a la página los articulos via props
    return { props: { articles } }
}

export default indexPage