import { useRouter } from 'next/router'
import { getSlugs } from '../../lib/api'

export default ({slug}) => {

  const router = useRouter()

  // Si la pagina todavia no fue generada, se mostrara esto hasta tanto getStaticProps termine
  if (router.isFallback) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1 className="com-title-section-xl hlp-marginBottom-40">Slug Buscado {slug}</h1>
    </>
  )
}

export async function getStaticProps({params}) {
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