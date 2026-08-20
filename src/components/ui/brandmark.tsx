export function BrandMark({ inverted = false }: { inverted?: boolean }) {
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