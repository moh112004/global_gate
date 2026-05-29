import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Statistics from '../components/Statistics';
import Hero from '../sections/Hero';
import HomeTeaser from '../sections/HomeTeaser';

export default function Home() {
  return (
    <>
      <Navbar darkHero={true} />
      <main>
        <Hero />
        <HomeTeaser />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
