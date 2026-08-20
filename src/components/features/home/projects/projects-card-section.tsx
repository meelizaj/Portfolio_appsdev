import  image1  from "@/_imgs/Alcabs.png"
import image2 from "@/_imgs/Portfolio.png"
import image3 from "@/_imgs/Case Study.png"

export default function ProjectsSection(){
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
  
  
  return (
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
  )
}