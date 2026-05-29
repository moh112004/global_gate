import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Statistics from '../components/Statistics';
import Programs from '../sections/Programs';

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="برامج الأكاديمية"
          subtitle="ثلاثة برامج متخصصة تغطي كل احتياجات الطالب من التوجيه الأولي حتى الوصول إلى وجهته الدراسية."
        />
        <Programs hideHeader={true} />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
