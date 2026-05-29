import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import About from '../sections/About';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="عن الأكاديمية"
          subtitle="تعرّف على Global Gate Academy — رؤيتنا، رسالتنا، وقيمنا التي تحرك عملنا كل يوم."
        />
        <About hideHeader={true} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
