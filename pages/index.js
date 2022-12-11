import Head from 'next/head'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abstract Clone</title>
        <meta name="description" content="Abstract Clone for Frontend Practice" />
        <link rel="icon" href="//theme.zdassets.com/theme_assets/2197739/1a71d05024d0bf628f47cb2a498903409ad571f0.png" />
      </Head>
      <Navbar/>
      <Search/>
      <Main/>
      <Footer/>
    </div>
  )
}
