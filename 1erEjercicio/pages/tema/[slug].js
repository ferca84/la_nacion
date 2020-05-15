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
  const slug = params.slug;
  return { props: { slug } }
}

export async function getStaticPaths() {
  const slugs = getSlugs()
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug: slug,
        },
      }
    }),
    fallback: true,// Habilita generación de paginas staticas adicionales
  }
}