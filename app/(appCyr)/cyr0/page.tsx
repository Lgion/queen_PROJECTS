import Hero from '../components/Hero';
import News from '../components/News';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <News />
      <CallToAction />
    </div>
  );
}