export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-crimson flex items-center justify-center text-xs font-bold">H</div>
          <span className="text-sm text-neutral-400">© {new Date().getFullYear()} Hammad. Crafted in Karachi.</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-neutral-500">
          <a href="#" className="hover:text-crimson transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-crimson transition-colors">GitHub</a>
          <a href="#" className="hover:text-crimson transition-colors">X / Twitter</a>
          <a href="#contact" className="hover:text-crimson transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
