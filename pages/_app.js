import '../styles/billboards.css'
import '../styles/footer.css'
import '../styles/galleryGrid.css'
import '../styles/globals.css'
import '../styles/heading.css'
import '../styles/navbarStyles.css'
import '../styles/Slider.css'
import '../styles/teamSection.css'
import '../styles/teamSlider.css'
import '../styles/videoSection.css'
import Navbar from '../Components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  {/* <link rel="stylesheet" href="  https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link> */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"></link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></link>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
