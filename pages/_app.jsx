import Layout from '../components/layout'
import '../style/index.scss'


export default function MyApp({ Component, pageProps }) {
  return (
  <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )}
