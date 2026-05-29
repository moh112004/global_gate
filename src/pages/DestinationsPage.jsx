import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Destinations from '../sections/Destinations';

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="وجهاتنا التعليمية"
          subtitle="نوفر فرصاً تعليمية في أبرز الوجهات الدولية مع استشارات متخصصة تساعدك على الاختيار الأنسب."
        />
        <Destinations hideHeader={true} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
