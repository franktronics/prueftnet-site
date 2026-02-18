import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import { Network, Github, ArrowLeft } from 'lucide-react'
import { Button } from '~/components/button'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Pruftnet - Visual Network Analyser</title>
        <meta
          name="description"
          content="Learn about Pruftnet, the open-source visual network analyser. Our story, mission, and the team behind the project."
        />
      </Head>

      <div className="min-h-screen">
        <header className="border-b border-border">
          <nav className="container-main flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Network className="size-7 text-primary" strokeWidth={2.5} />
              <span className="text-xl font-bold tracking-tight">Pruftnet</span>
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
            </Button>
          </nav>
        </header>

        <main className="py-20 md:py-28">
          <div className="container-main">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About Pruftnet
              </h1>

              <div className="mt-12 space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground">The Story</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Pruftnet started as an academic project at{' '}
                      <span className="font-medium text-foreground">
                        Technische Hochschule Nürnberg
                      </span>{' '}
                      as part of a Bachelor's degree program. What began as a classroom assignment
                      quickly evolved into something more ambitious.
                    </p>
                    <p>
                      Today, Pruftnet is a fully open-source project, available to network
                      professionals, security researchers, and curious minds around the world. Our
                      mission is simple: make network analysis accessible, visual, and powerful.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">The Creator</h2>
                  <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                      WT
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Wilson Tenepo</h3>
                      <p className="mt-1 text-sm text-primary">Creator & Lead Maintainer</p>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        Wilson is a software developer with over 6 years of experience building
                        applications. Currently studying at Technische Hochschule Nürnberg and
                        working at Siemens AG for over 2 years, he combines academic knowledge with
                        industry expertise to push Pruftnet forward. As the creator of the current
                        version and principal maintainer, he is dedicated to making network analysis
                        more intuitive and accessible for everyone.
                      </p>
                      <div className="mt-4 flex gap-4">
                        <a
                          href="https://github.com/franktronics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github className="size-4" />
                          GitHub
                        </a>
                        <a
                          href="https://x.com/franktronics_w"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          X
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">Open Source</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Pruftnet is released under the MIT License, meaning you are free to use,
                      modify, and distribute it. We believe in the power of open collaboration and
                      welcome contributions from the community.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <a
                        href="https://github.com/franktronics/pruftnet.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="size-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-border py-8">
          <div className="container-main text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pruftnet. Open source under MIT License.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
