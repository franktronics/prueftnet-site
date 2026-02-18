import { Github, Network } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <Network className="size-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Prüftnet</span>
          </div>

          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="https://github.com/franktronics/pruftnet.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/franktronics_w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pruftnet. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
