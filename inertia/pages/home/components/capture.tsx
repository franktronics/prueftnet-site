export function Capture() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-main">
        <div className="flex">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Real-Time Packet Capture
            </h2>

            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Powered by a{' '}
                <span className="text-foreground font-medium">high-performance C++ core</span>,
                Pruftnet captures network packets in real-time with minimal overhead.
              </p>
              <p>
                Monitor live traffic, analyze protocols, and inspect every byte flowing through your
                network interfaces.
              </p>
              <p>
                Support for Ethernet, IPv4, IPv6, TCP, UDP, ICMP, ARP, and many more protocols out
                of the box.
              </p>
            </div>

            <ul className="mt-10 space-y-3">
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="size-2 rounded-full bg-primary" />
                Live traffic monitoring
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="size-2 rounded-full bg-primary" />
                Deep packet inspection
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="size-2 rounded-full bg-primary" />
                Export captures in PCAP format for use with other tools
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="size-2 rounded-full bg-primary" />
                Run the capture remotely on a server and stream results to the web interface.
              </li>
            </ul>
          </div>

          <div className="absolute -right-4 top-1/2 hidden flex-1 -translate-y-1/3 md:block lg:-right-8 xl:-right-16">
            <div className="rotate-1 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-muted/50 px-4">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <img
                src="/capture.jpeg"
                alt="Screenshot of Pruftnet's packet capture interface showing real-time network traffic visualization and analysis tools"
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
              src="/capture.jpeg"
              alt="Screenshot of Pruftnet's packet capture interface"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
