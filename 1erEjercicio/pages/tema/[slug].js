import { getSlugs } from '../../lib/api'
import Layout from '../../components/Layout'

export default ({ slug }) => {

  return (
      <Layout>
        <div className="sidebar__main">
          <h1 className="com-title-section-xl hlp-marginBottom-40">Slug Buscado {slug}</h1>
        </div>
      </Layout>
  )
}

export async function getStaticProps({ params }) {
  // Se busca la data necesaria para el slug que esta en el parametro
  const slug = params.slug;
  return { props: { slug } }
}

export async function getStaticPaths() {
  //Retorna una lista de posibles valores de slug (por ahora dummy slugs)
  const paths = getSlugs();
  return {
    paths,
    fallback: true,// Habilita generación de paginas staticas adicionales
  }
}