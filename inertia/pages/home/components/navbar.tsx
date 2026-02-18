import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Network, Menu, Github } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '~/components/sheet'
import { Button } from '~/components/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/doc', label: 'Docs' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <nav className="container-main flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Network className="size-7 text-primary" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tight">Prüftnet</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/franktronics/pruftnet.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
            aria-label="View on GitHub"
          >
            <Github className="size-5" />
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm">Join the Waitlist</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-75 sm:w-87.5">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Network className="size-6 text-primary" strokeWidth={2.5} />
                <span className="font-bold">Pruftnet</span>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <a
                href="https://github.com/franktronics/pruftnet.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="size-5" />
                GitHub
              </a>
              <div className="mt-4 border-t pt-4">
                <SheetClose asChild>
                  <Button className="w-full" size="lg">
                    Join the Waitlist
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
