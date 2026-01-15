import { projects } from "@/data/projects";

export default function Projects () {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold">Projects</h2>
                    <p className="mt-2 text-sm text-zinc-400">
                        A few things I've worked on recently.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
                    >
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 flex gap-3 text-sm">
                            {p.links.demo && (
                                <a className="text-zinc-200 hover:text-white underline underline-offset-4" href={p.links.github}>
                                    Github
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}