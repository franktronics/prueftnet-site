import { ArrowRight, Github } from 'lucide-react'
import { Button } from '~/components/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,88,12,0.1),transparent)]" />

      <div className="container-main">
        <div className="flex items-center gap-8 py-36 flex-row lg:gap-12 lg:py-64">
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Visual Network Analyser
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              See Your Network
              <span className="block text-primary">Like Never Before</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Capture packets in real-time, visualize your network topology, and build custom
              analysis workflows with an intuitive drag-and-drop interface. No coding required.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="gap-2 text-base">
                Join the Waitlist
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-base" asChild>
                <a
                  href="https://github.com/franktronics/pruftnet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Web version</span>
              </div>
            </div>
          </div>

          <div className="relative flex-1 items-center justify-center hidden lg:flex">
            <div className="relative w-full max-w-lg">
              <img
                src="/home_svg.svg"
                alt="Network visualization showing interconnected devices and servers"
                className="w-full scale-170"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
