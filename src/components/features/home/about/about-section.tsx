import { LeafLine } from "@/components/ui/leafline"
import pfp from "@/_imgs/mj.png"

export default function aboutSection(){
  return(
    <section id="about" className="relative mx-auto grid max-w-[1350px] items-center gap-12 overflow-hidden px-7 py-14 md:px-12 lg:grid-cols-[1fr_1fr] lg:px-20 lg:py-16">
        <div className="relative">
          <div className="relative aspect-[1.55] max-w-[550px] overflow-hidden rounded-tl-[48%] rounded-tr-[48%] rounded-br-[4rem] rounded-bl-[4rem] bg-[#d6d1c6]">
            <img
              className="h-full w-full object-contain"
              src={pfp}
              alt="Designer writing in a notebook"
            />
          </div>
          <div className="absolute bottom-6 right-5 grid h-32 w-32 place-items-center rounded-full border border-[#ddd4c4] bg-[#ede5d6] text-center text-[10px] font-bold uppercase leading-5 tracking-[0.22em] text-[#777360] shadow-sm md:right-12">
            Strategic<br />Creative<br />Intentional
          </div>
        </div>
        <div className="relative z-10 max-w-[520px]">
          <p className="font-script text-[30px] leading-none text-[#9b9385]">about me</p>
          <h2 className="mt-2 font-serif text-[42px] leading-[1.02] text-[#3f4137] md:text-[52px]">
            Hi, I’m Meeliza, a BSIT student and aspiring UI/UX designer.
          </h2>
          <div className="my-7 h-px w-36 bg-[#bfb8aa]" />
          <p className="text-[15px] font-semibold leading-7 text-[#5d5d52]">
            I’m currently studying Information Technology and exploring the world of UI/UX design. I enjoy turning ideas into simple and meaningful designs while continuously learning new skills
          </p>
         
        </div>
        <div className="absolute bottom-0 right-0 hidden h-[270px] w-[360px] rounded-tl-[80%] bg-[#c8c9bb] text-[#f5efe7] md:block">
          <LeafLine className="right-10 top-8 h-44 w-28" />
        </div>
      </section>
  )
}