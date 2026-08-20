import { BrandMark } from "../ui/brandmark"

export function NavBar(){
  const navItems = ["Home", "About", "Skills", "Process", "Projects",];
  return (
      <header className="flex max-w-[1350px] items-center justify-between px-7 py-6 md:px-12 lg:px-20">
        <BrandMark />
        <nav className="hidden items-center gap-9 text-[10px] font-bold uppercase tracking-[0.24em] text-[#5a5a4c] lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#7c846c]">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden bg-[#717761] px-9 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition hover:bg-[#5f6653] md:inline-flex"
        >
          Let's Work Together
        </a>
      </header>

  )
}