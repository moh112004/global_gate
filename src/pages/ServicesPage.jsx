import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ServicesSection from '../sections/Services';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="منظومة الخدمات"
          subtitle="منظومة خدمات متكاملة تغطي كل مراحل رحلتك الأكاديمية من الاستشارة الأولى حتى الاستقرار في وجهتك."
        />
        <ServicesSection hideHeader={true} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
