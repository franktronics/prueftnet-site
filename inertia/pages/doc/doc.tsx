import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import { Network, ArrowLeft, FileText } from 'lucide-react'
import { Button } from '~/components/button'

export default function Doc() {
  return (
    <>
      <Head>
        <title>Documentation | Pruftnet - Visual Network Analyser</title>
        <meta
          name="description"
          content="Documentation for Pruftnet, the visual network analyser. Installation guides, tutorials, and API reference."
        />
      </Head>

      <div className="flex min-h-screen flex-col">
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

        <main className="flex flex-1 items-center justify-center py-20">
          <div className="text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10">
              <FileText className="size-10 text-primary" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Documentation Coming Soon
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              We're working hard to bring you comprehensive documentation. Check back soon or join
              our waitlist to get notified.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/franktronics/pruftnet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
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
