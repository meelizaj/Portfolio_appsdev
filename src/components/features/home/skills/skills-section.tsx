import { ServiceIcon } from "@/components/ui/serviceIcon"

export default function skillsSection(){
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
  return (
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
  )
}