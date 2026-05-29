import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Testimonials from '../sections/Testimonials';
import PartnersContent from '../sections/Partners';

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="شركاؤنا"
          subtitle="نفخر بشراكاتنا مع مؤسسات تعليمية وجامعات ومراكز تدريب تسهم في تعزيز فرص التعليم للشباب."
        />
        <Testimonials />
        <PartnersContent />
      </main>
      <Footer />
    </>
  );
}
