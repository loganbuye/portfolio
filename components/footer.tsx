export default function Footer() {
    return (
        <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-sm text-zinc-500">
            <div className="border-t border-white/10 pt-6">
                © {new Date().getFullYear()} Logan Buye.
            </div>
        </footer>
    )
}