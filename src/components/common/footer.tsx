import { LeafLine } from "../ui/leafline"
import { BrandMark } from "../ui/brandmark"

export function NavFooter(){
  return (
     <footer className="relative overflow-hidden bg-[#717761] px-7 py-8 text-[#f6f1e9] md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
          <BrandMark inverted />
          <p className="max-w-[360px] text-[12px] font-semibold leading-6 text-[#ebe4d8]">
            BSIT student passionate about creating simple and meaningful digital experiences.
          </p>
          <nav className="flex flex-wrap justify-start gap-5 text-[9px] font-bold uppercase tracking-[0.22em] md:justify-end">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-[1240px] text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[#dcd6c8]">
          &copy;Meeliza Jean
UI/UX Designer&nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved
        </p>
        <LeafLine className="-bottom-8 right-4 h-48 w-32 text-[#e9e1d2]" />
      </footer>
  )
}