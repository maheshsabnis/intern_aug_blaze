// This is the bootstrap file that contains
// Higher-Order-Component (HoC)
import '../styles/globals.css'

// Component: The COmponent Object to be rendered
// pagePops: Is the props used for data across components 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
