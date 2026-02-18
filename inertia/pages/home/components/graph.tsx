export function Graph() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-main">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:max-w-2xl md:text-5xl">
          Visual Network Topology
        </h2>

        <div className="mt-6 space-y-4 text-lg text-muted-foreground md:max-w-2xl">
          <p>
            Watch your network come alive as devices communicate.{' '}
            <span className="font-medium text-foreground">
              Pruftnet automatically maps every connection
            </span>{' '}
            into an interactive force-directed graph.
          </p>
          <p>
            Identify devices instantly with vendor lookup, spot unusual traffic patterns, and
            understand your network architecture at a glance.
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          <li className="flex items-center gap-3 font-medium text-foreground">
            <div className="size-2 rounded-full bg-primary" />
            Real-time topology updates
          </li>
          <li className="flex items-center gap-3 font-medium text-foreground">
            <div className="size-2 rounded-full bg-primary" />
            Automatic device identification
          </li>
          <li className="flex items-center gap-3 font-medium text-foreground">
            <div className="size-2 rounded-full bg-primary" />
            Interactive pan, zoom, and selection
          </li>
          <li className="flex items-center gap-3 font-medium text-foreground">
            <div className="size-2 rounded-full bg-primary" />
            Traffic flow visualization
          </li>
        </ul>
      </div>

      <div className="container-main mt-12">
        <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-xl">
          <div className="flex h-8 items-center gap-1.5 border-b border-neutral-700 bg-neutral-800 px-4">
            <div className="size-3 rounded-full bg-red-500/80" />
            <div className="size-3 rounded-full bg-yellow-500/80" />
            <div className="size-3 rounded-full bg-green-500/80" />
          </div>
          <img
            src="/graph.jpeg"
            alt="Network topology graph showing interconnected devices and traffic flows"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
