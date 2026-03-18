export default function About () {
    return (
        <section id="about" className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold">About</h2>
                    <p className="mt-2 text-sm text-zinc-400">A quick introduction </p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="leading-relaxed text-zinc-300">
                        I'm currently a student pursuing a bachelor degree in Computer Science 
                        from the University of Lethbridge. I also have a diploma in Software Development 
                        from SAIT. I am passionate about learning new technologies and improving my skills 
                        as a developer. 
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Tailwind", "Docker", "Firebase"].map(
                        (t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                        >
                        {t}
                        </span>
                        )
                        )}
                    </div>
                </div>            
            

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-sm font-medium text-zinc-200">Education</h3>

                    <div className="mt-4 space-y-4">
                        <div>
                            <p className="font-medium text-zinc-100">
                                Bachelor of Science - Computer Science
                            </p>
                            <p className="text-sm text-zinc-400">
                                University of Lethbridge | September 2025 - Present
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-zinc-100">
                                Software Development Diploma
                            </p>
                            <p className="text-sm text-zinc-400">
                                SAIT | September 2023 - June 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}