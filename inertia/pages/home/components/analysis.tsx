export function Analysis() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-main">
        <div className="flex justify-end">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              Workflow Builder
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Build. Test.
              <span className="block text-primary">Understand.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Create sophisticated network test scenarios without writing a single line of code.
              Drag nodes, connect them visually, and watch your equipment respond in real-time.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <div className="text-2xl font-bold text-primary">Infinite</div>
                <div className="mt-1 text-sm text-muted-foreground">Test scenarios possible</div>
              </div>
              <div className="rounded-lg border border-border bg-card/50 p-4">
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="mt-1 text-sm text-muted-foreground">Lines of code required</div>
              </div>
            </div>

            <p className="mt-8 text-muted-foreground">
              Simulate communications, test your network architecture, or simply understand how your
              network reacts to specific traffic patterns.{' '}
              <span className="font-medium text-foreground">
                The only limit is your imagination.
              </span>
            </p>
          </div>

          <div className="absolute -left-4 top-1/2 hidden flex-1 -translate-y-1/3 md:block lg:-left-8 xl:-left-16">
            <div className="-rotate-1 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-muted/50 px-4">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <img
                src="/analysis.jpeg"
                alt="Visual workflow builder for creating network test scenarios"
                className="w-175 lg:w-200 xl:w-225"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:hidden">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <div className="flex h-7 items-center gap-1.5 border-b border-border bg-muted/50 px-3">
              <div className="size-2.5 rounded-full bg-red-500/80" />
              <div className="size-2.5 rounded-full bg-yellow-500/80" />
              <div className="size-2.5 rounded-full bg-green-500/80" />
            </div>
            <img
              src="/analysis.jpeg"
              alt="Visual workflow builder for creating network test scenarios"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
