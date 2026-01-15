import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
