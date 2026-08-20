export default function ProcessSection(){
  const process = [
  ["01", "Discover", "I learn about the project, its users, and the main goals."],
  ["02", "Plan", "I organize ideas and create a clear structure for the design."],
  ["03", "Design", "I turn the ideas into clean and user-friendly interfaces."],
  ["04", "Refine & Deliver", "I review the design, gather feedback, and make improvements"],
];

  return(
    <section id="process" className="mt-8 bg-[#7e856d] px-7 py-8 text-[#f9f3eb] md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="font-script text-[25px] leading-none text-[#ded9ca]">my process</p>
          <h2 className="font-serif text-[35px] leading-tight md:text-[41px]">A Simple, Thoughtful Process</h2>
          <div className="mt-7 grid gap-8 md:grid-cols-4 md:gap-4">
            {process.map(([number, title, copy], index) => (
              <article key={title} className="relative flex flex-col items-center px-3">
                {index > 0 && <span className="absolute right-1/2 top-8 hidden h-px w-full border-t border-dashed border-[#d4d1c5] md:block" />}
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-[#eee8df] font-serif text-[18px] text-[#737762]">{number}</div>
                <h3 className="mt-5 text-[12px] font-bold uppercase tracking-[0.22em]">{title}</h3>
                <p className="mt-3 text-[12px] font-semibold leading-5 text-[#f1ece3]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
  )
}