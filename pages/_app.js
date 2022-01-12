import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import '../styles/globals.css'
import "@fontsource/inter/variable.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Sidebar />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
