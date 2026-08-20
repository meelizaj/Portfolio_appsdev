export function LeafLine({ className = "" }: { className?: string }) {
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
