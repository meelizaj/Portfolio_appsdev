import { LeafLine } from "@/components/ui/leafline"

export default function heroSection(){
  return(
    <section id="home" className="relative mx-auto grid max-w-[1350px] overflow-hidden px-7 md:px-12 lg:grid-cols-[0.9fr_1.6fr] lg:px-20">
        <LeafLine className="-left-12 bottom-0 h-56 w-36 text-[#8e927e] md:left-0" />
        <div className="relative z-10 flex min-h-[510px] flex-col justify-center pb-12 pt-12">
          <p className="font-script text-[42px] leading-none text-[#9b9385] md:text-[54px]">Designing simple experiences,
</p>
          <h1 className="max-w-[450px] font-serif text-[68px] leading-[0.92] tracking-normal text-[#424438] md:text-[92px]">
            made for people.
          </h1>
          <p className="mt-9 max-w-[365px] text-[15px] font-semibold leading-7 text-[#5d5d52]">
            I’m a BSIT student passionate about UI/UX design. I enjoy creating clean, simple, and user-friendly digital experiences that make technology easier to use.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-flex w-fit bg-[#717761] px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#5f6653]"
          >
            View My Work
          </a>
        </div>
        <div className="relative min-h-[390px] lg:min-h-[520px]">
          <div className="absolute inset-0 rounded-bl-[46%] bg-[#ded8cf]" />
          <img
            className="relative h-full min-h-[390px] w-full rounded-bl-[43%] object-cover object-center"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
            alt="Brand designer holding a cup at a bright desk"
          />
        </div>
      </section>
  )
}