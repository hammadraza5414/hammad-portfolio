const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammad-raza-971bb0373/" },
  { label: "GitHub",   href: "https://github.com/hammadraza5414" },
  { label: "X",        href: "https://x.com/Hammadianx" },
  { label: "Instagram", href: "https://www.instagram.com/hammadraza_/" },
  { label: "Email",    href: "mailto:hammadraza.upwork@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-crimson flex items-center justify-center text-xs font-bold">H</div>
          <span className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Hammad Raza. Crafted in Multan.
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-neutral-500">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="hover:text-crimson transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
