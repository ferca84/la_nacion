import '../styles/site.css'

// Este export default es requerido para agregar estilos globales a toda la aplicación
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}