import HHNav from '../components/HHNav';
import HHHero from '../components/HHHero';
import HHFeatures from '../components/HHFeatures';
import HHScreenshots from '../components/HHScreenshots';
import HHFAQ from '../components/HHFAQ';
import HHCTA from '../components/HHCTA';
import HHFooter from '../components/HHFooter';

export default function Index() {
  return (
    <>
      <HHNav />
      <main>
        <HHHero />
        <HHFeatures />
        <HHScreenshots />
        <HHFAQ />
        <HHCTA />
      </main>
      <HHFooter />
    </>
  );
}
