"use client"
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects () {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl px-4 py-10"
        >
        <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-teal-400">Projects</h2>
                    <p className="mt-2 text-sm text-zinc-400">
                        A few things I've worked on recently.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6
                                    transition duration-300
                                    hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
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

                        <div className="mt-5 flex gap-4 text-sm">
                            {p.links.github && (
                                <a className="text-zinc-200 hover:text-white hover:underline underline-offset-4" 
                                href={p.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Github <span>↗</span>
                                </a>
                            )}
                        
                            {p.links.demo && (
                                <a className="text-zinc-200 hover:text-white hover:underline underline-offset-4" 
                                href={p.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    Live <span>↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </motion.section>
    )
}