import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/markdown-codeblock-theme.css'

function SlyniteWeb({ Component, pageProps }: AppProps) {
  return(
      <Component {...pageProps} />
  )
}

export default SlyniteWeb
