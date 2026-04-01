"use client"
import { motion } from "framer-motion"


const skills = {
    Languages: ['Python', 'C#', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    Frameworks: ['React', 'Node.js', 'Angular'],
    Database: ['PostgreSQL', 'MongoDB', 'Neon DB'],
    Tools: ['Git/Github/Gitlab', 'Docker', 'Trello', 'Figma']
}

export default function Skills() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl px-4 py-10"
        >
        <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-10">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-teal-400">Skills</h2>
                    <p className="mt-2 text-sm text-zinc-400">Technologies I work with</p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Object.entries(skills).map(([category, items]) => (
                    <div 
                        key={category}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6
                                    transition duration-300
                                    hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <h3 className="text-sm font-medium text-zinc-200">{category}</h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
        </motion.section>
    )
}
