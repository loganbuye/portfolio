import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="relative min-h-screen text-zinc-100
    bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10" />
      </div>

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
