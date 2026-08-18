import  image1  from "@/_imgs/Alcabs.png"
import image2 from "@/_imgs/Portfolio.png"
import image3 from "@/_imgs/Case Study.png"
import pfp from "@/_imgs/mj.png"

const navItems = ["Home", "About", "Skills", "Process", "Projects",];

const services = [
  {
    icon: "leaf",
    title: "UI Design",
    copy: "Creating clean and visually appealing interfaces that are easy to understand and use.",
  },
  {
    icon: "pencil",
    title: "UX Design",
    copy: "Designing experiences based on users’ needs, goals, and behaviors.",
  },
  {
    icon: "screen",
    title: "Wireframing",
    copy: "Turning ideas into simple layouts and structures before creating the final design.",
  },
  {
    icon: "mail",
    title: "Prototyping",
    copy: "Creating interactive prototypes to visualize and test how a website or app will work.",
  },
];

const process = [
  ["01", "Discover", "I learn about the project, its users, and the main goals."],
  ["02", "Plan", "I organize ideas and create a clear structure for the design."],
  ["03", "Design", "I turn the ideas into clean and user-friendly interfaces."],
  ["04", "Refine & Deliver", "I review the design, gather feedback, and make improvements"],
];

const projects = [
  {
    title: "Alcabs Eatery",
    type: "A group project",
    image: image1,
    web_link: "https://bocchi-69.github.io/Alcabs-Landing-Page/"
  },
  {
    title: "My Portfolio",
    type: "A previous portfolio",
    image: image2,
    web_link: "https://portfolio-9wk6.vercel.app/"
  },
  {
    title: "Case Study",
    type: "Accessibility Rights for PWDs",
    image: image3,      
    web_link: "https://bocchi-69.github.io/SOCIAL-ISSUES-INFOGRAPHICS/"
  },
];

function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={`leading-none ${inverted ? "text-[#f6f1e9]" : "text-[#4c5042]"}`}>
      <div className="flex items-center gap-2">
        <span className="font-serif text-[34px] italic tracking-wide md:text-[37px]">Portfolio</span>
        <span className="relative h-9 w-8 shrink-0">
          <span className="absolute left-4 top-0 h-9 w-px -rotate-12 bg-current opacity-70" />
          <span className="absolute left-2 top-2 h-4 w-2 rotate-[-35deg] rounded-[100%_0] border border-current opacity-70" />
          <span className="absolute left-4 top-5 h-4 w-2 rotate-[35deg] rounded-[0_100%] border border-current opacity-70" />
          <span className="absolute left-0 top-4 h-4 w-2 rotate-[-35deg] rounded-[100%_0] border border-current opacity-70" />
        </span>
      </div>
      
    </div>
  );
}

function LeafLine({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="relative h-full w-full text-current">
        <span className="absolute left-1/2 top-0 h-full w-px -rotate-12 bg-current opacity-55" />
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={`absolute h-12 w-6 rounded-[100%_0] border border-current opacity-55 ${
              index % 2 ? "rotate-[35deg] rounded-[0_100%]" : "rotate-[-35deg]"
            }`}
            style={{
              top: `${10 + index * 12}%`,
              left: index % 2 ? "50%" : "25%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "pencil") {
    return <span className="block h-8 w-2 rotate-45 rounded-full border-2 border-current before:block before:h-2 before:w-2 before:-translate-x-[2px] before:-translate-y-2 before:rotate-45 before:border before:border-current" />;
  }

  if (type === "screen") {
    return (
      <span className="relative block h-8 w-9 rounded-sm border-2 border-current">
        <span className="absolute -bottom-3 left-1/2 h-3 w-px -translate-x-1/2 bg-current" />
        <span className="absolute -bottom-3 left-2 right-2 h-px bg-current" />
      </span>
    );
  }

  if (type === "mail") {
    return (
      <span className="relative block h-7 w-9 rounded-sm border-2 border-current">
        <span className="absolute left-1 top-1/2 h-px w-6 origin-center rotate-32 bg-current" />
        <span className="absolute right-1 top-1/2 h-px w-6 origin-center -rotate-32 bg-current" />
      </span>
    );
  }

  return (
    <span className="relative block h-9 w-7">
      <span className="absolute left-1/2 top-0 h-9 w-px -rotate-12 bg-current" />
      <span className="absolute left-0 top-2 h-4 w-2 -rotate-45 rounded-[100%_0] border border-current" />
      <span className="absolute left-4 top-5 h-4 w-2 rotate-45 rounded-[0_100%] border border-current" />
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3eee7] text-[#3e3f35]">
      <header className="mx-auto flex max-w-[1350px] items-center justify-between px-7 py-6 md:px-12 lg:px-20">
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

      <section id="services" className="mx-auto max-w-[1350px] px-7 py-7 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="font-script text-[28px] leading-none text-[#9b9385]">what i do</p>
          <h2 className="font-serif text-[44px] leading-none text-[#3f4137]">My skills</h2>
        </div>
        <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`flex flex-col items-center px-7 text-center ${index > 0 ? "lg:border-l lg:border-[#cfc8bc]" : ""}`}
            >
              <div className="grid h-20 w-20 place-items-center rounded-full bg-[#727963] text-[#f6f1e9]">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="mt-5 font-serif text-[22px] text-[#3f4137]">{service.title}</h3>
              <p className="mt-3 max-w-[245px] text-[13px] font-semibold leading-6 text-[#5d5d52]">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section id="portfolio" className="mx-auto max-w-[1350px] px-7 py-10 md:px-12 lg:px-20">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div className="text-center md:flex-1">
            <p className="font-script text-[27px] leading-none text-[#9b9385]">recent work</p>
            <h2 className="font-serif text-[42px] leading-none text-[#3f4137]">Selected Projects</h2>
          </div>
          
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a href={project.web_link}>
              <article key={project.title}>
              <img className="aspect-[1.95] w-full object-cover" src={project.image} alt={`${project.title} brand project`} />
              <h3 className="mt-4 text-[14px] font-bold uppercase tracking-[0.06em] text-[#3f4137]">{project.title}</h3>
              <p className="mt-1 text-[12px] font-semibold text-[#69675d]">{project.type}</p>
            </article>
            </a>
          ))}
        </div>
      </section>

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
    </main>
  );
}
