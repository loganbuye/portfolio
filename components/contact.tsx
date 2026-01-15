export default function Contact () {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="mt-2 text-sm text-zinc-400">
                    Get in touch with me.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
                        href="mailto:logan.buye@gmail.com"
                    >
                        Email me
                    </a>
                    <a
                        className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        href="https://github.com/loganbuye"
                    >
                        Github
                    </a>
                    <a
                        className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        href="https://www.linkedin.com/in/loganbuye/"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}