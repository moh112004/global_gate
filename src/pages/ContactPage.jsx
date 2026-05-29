import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="ابدأ رحلتك التعيلمية معنا"
          subtitle="يسعدنا دائماً استقبال استفسارات الطلاب وأولياء الأمور والشركاء. نحن هنا للمساعدة."
        />
        <Contact hideHeader={true} />
      </main>
      <Footer />
    </>
  );
}
