import { ChakraProvider } from '@chakra-ui/react'
/* import '../styles/globals.css'
import '../styles/shows.css'
import '../styles/show.css' */
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

function MyApp({ Component, pageProps, router }) {
  return <ChakraProvider >
    <Layout router = {router}>
      <Component {...pageProps} />
    </Layout>

  </ChakraProvider>
  /* return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  ) */
}

export default MyApp
