import Hero from './components/Hero';
import MethodStory from './components/MethodStory';
import Onboarder from './components/Onboarder';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

/*
 * One story, top to bottom: who I am, how I work (shown through Latitude59),
 * what that turned into (Onboarder), the same method elsewhere, the person,
 * and a door to reach me.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <MethodStory />
      <Onboarder />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
