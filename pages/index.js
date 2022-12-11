import Head from 'next/head';
import Nav from '../components/Nav';
import Showcase from '../components/showcase';
import Sponsors from '../components/Sponsors';
import Footer from "../components/Footer";

export default function Home() {
   
  return (
    <>
   <Head>
      <title>FoodHero | Save money and reduce food waste </title>
    </Head>
   <Nav />
   <Showcase />
   <Sponsors />
   <Footer />
   </>
  )
}
