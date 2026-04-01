export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md shadow-lg">
                    <a href="#top" className="font-semibold tracking-tight">
                        LoganBuye<span className="text-zinc-400">.</span>
                    </a>

                    <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
                        {[
                            { name: 'About', href: '#about' },
                            { name: 'Skills', href: '#skills' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contact', href: '#contact' },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative transition hover:text-white"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}