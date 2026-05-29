import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Team from '../sections/Team';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="فريق العمل"
          subtitle="نخبة من المختصين في الإرشاد الأكاديمي والتوجيه المهني يعملون بشغف لمساعدة الطلاب."
        />
        <Team />
      </main>
      <Footer />
    </>
  );
}
