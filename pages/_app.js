import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'
import { FormspreeProvider } from '@formspree/react'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false} >
      <ChakraProvider>
        {/* <FormspreeProvider project="{FormulaireCantin}"> */}
           <Component key={router.route} {...pageProps} />
        {/* </FormspreeProvider> */}
      </ChakraProvider>
    </AnimatePresence>
  )
}

export default MyApp
