export function ServiceIcon({ type }: { type: string }) {
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
