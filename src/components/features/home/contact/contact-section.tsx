export default function ContactSection(){
  return(
    <section id="contact" className="mx-auto grid max-w-[1350px] gap-0 px-7 pb-10 md:grid-cols-3 md:px-12 lg:px-20">
        <div className="relative min-h-[290px] overflow-hidden bg-[#dbd9ca] px-10 py-10">
          <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-tl-[75%] bg-[#f3eee7]" />
          <p className="relative font-script text-[30px] leading-none text-[#9b9385]">my design values</p>
          <h2 className="relative font-serif text-[35px] text-[#3f4137]">Design should be simple, useful, and enjoyable.</h2>
          <p className="relative mt-5 text-[58px] leading-none text-[#7d826d]">"</p>
          <p className="relative -mt-7 max-w-[410px] pl-11 text-[13px] font-semibold leading-6 text-[#55564c]">
           I believe good design is not only about looking good. It should also make things easier for people. As I continue learning, I aim to create designs that are both beautiful and meaningful.
          </p>
         
          <div className="relative mt-5 flex gap-2 pl-11">
            {[0, 1, 2, 3].map((dot) => (
              <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-[#747965]" : "border border-[#747965]"}`} />
            ))}
          </div>
        </div>

        <div className="bg-[#f5f0e9] px-10 py-10">
          <p className="font-script text-[29px] leading-none text-[#9b9385]">my goal</p>
          <h2 className="font-serif text-[34px] text-[#3f4137]">Creating today, growing for tomorrow.</h2>
          <p className="relative mt-5 text-[58px] leading-none text-[#7d826d]">"</p>
          <p className="relative -mt-7 max-w-[410px] pl-11 text-[13px] font-semibold leading-6 text-[#55564c]">
           "I’m still at the beginning of my design journey, but every project gives me an opportunity to learn something new. My goal is to become a UI/UX designer who creates thoughtful designs that people enjoy using."
          </p>
          <div className="relative mt-5 flex gap-2 pl-11">
            {[0, 1, 2, 3].map((dot) => (
              <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-[#747965]" : "border border-[#747965]"}`} />
            ))}
          </div>
        </div>

        <div className="relative min-h-[290px] overflow-hidden bg-[#e5d5c9] px-10 py-12 text-center">
          <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-b-[45%] rounded-t-[55%] bg-[#eadccf]" />
          <div className="relative">
            <p className="font-script text-[28px] leading-none text-[#9b9385]">let's connect</p>
            <h2 className="font-serif text-[32px] leading-tight text-[#3f4137]">Have an idea in mind?</h2>
            <p className="mx-auto mt-5 max-w-[330px] text-[13px] font-semibold leading-6 text-[#55564c]">
              I’d love to learn, collaborate, and create something meaningful together.
            </p>
            <a
              href="meelizajean.mingasca@gmail.com"
              className="mt-6 inline-flex bg-[#717761] px-9 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#5f6653]"
            >
              Let's Work Together
            </a>
            <p className="mt-5 text-[13px] font-semibold text-[#55564c]">meelizajean.mingasca@gmail.com</p>
           
          </div>
        </div>
      </section>
  )
}