export default function Hero() {
    return (
        <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                    <span className="text-zinc-200">Logan Buye</span>
                </h1>

                <p className="mt-3 text-4xl font-semibold tracking-tight sm:text-lg">
                    Software Developer & Computer Science Student
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
        </section>
    )
}