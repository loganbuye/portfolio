export default function About () {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 sm:grid-cols-3">
                <div className="sm:col-span-1">
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="mt-2 text-sm text-zinc-400">
                        I am currently studying Computer Science at the University of Lethbridge. I graduated from SAIT with a diploma in software development in 2025. 
                    </p>
                </div>

                <div className="sm:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="leading-relaxed text-zinc-300">
                        I'm a developer focused on building polished UIs, dashboards, and full-stack projects. I like clean design, strong structure,
                        and shipping things that work.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node"].map((t) =>(
                            <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}