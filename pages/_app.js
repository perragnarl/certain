import Header from '../components/Header/Header'
import Logo from '../components/Logo/Logo'
import Sidebar from '../components/Sidebar/Sidebar'
import '../styles/globals.css'

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
