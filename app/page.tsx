import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
