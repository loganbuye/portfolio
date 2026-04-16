import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
        
        <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
          
          <div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Logan Buye
              </span>
            </h1>

            <p className="mt-3 text-lg text-zinc-400">
              Computer Science Student & Software Developer
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl"></div>

            <div className="relative h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-full border border-white/10">
              <Image
                src="/headshot.jpg"
                alt="Logan Buye headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}