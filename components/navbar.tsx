export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <a href="#top" className="font-semibold tracking-tight">
                    LoganBuye<span className="text-zinc-400">.dev</span>
                </a>

                <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
                    <a className="hover:text-white" href="#about">About</a>
                    <a className="hover:text-white" href="#projects">Projects</a>
                    <a className="hover:text-white" href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}