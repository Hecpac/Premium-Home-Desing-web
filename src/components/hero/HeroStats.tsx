export function HeroStats() {
  const stats = [
    { value: "15+", label: "Years of creating spaces" },
    { value: "90+", label: "Amazing projects brought to life" },
    { value: "75+", label: "Happy clients, happy spaces" },
    { value: "11", label: "Designs that earn awards" },
  ]

  return (
    <section aria-label="Key metrics" className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-neutral-950/75 backdrop-blur-md border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={[
                  "p-6 md:p-8",
                  "min-h-[120px] md:min-h-[140px]",
                  "flex flex-col justify-between",
                  // divisores (como el ejemplo)
                  i % 2 === 1 ? "border-l border-white/10" : "",
                  i >= 2
                    ? "border-t border-white/10 md:border-t-0 md:border-l md:border-white/10"
                    : "",
                  i === 2 ? "md:border-l-0" : "",
                ].join(" ")}
              >
                <div className="text-4xl md:text-5xl font-medium tracking-tight text-white tabular-nums">
                  {s.value}
                </div>
                <p className="mt-3 text-sm md:text-base leading-snug text-white/70 max-w-[20ch]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
