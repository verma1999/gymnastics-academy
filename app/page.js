import Hero from './components/Hero';
import Classes from './components/Classes';
import SuccessStories from './components/SuccessStories';
import Importance from './components/Importance';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Classes />
      <SuccessStories />
      <Importance />
      <Gallery />
      <Contact />
    </main>
  );
}
