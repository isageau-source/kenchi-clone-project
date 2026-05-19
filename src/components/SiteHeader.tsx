import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Our Portfolio" },
  { to: "/quote", label: "Request A Quote" },
  { to: "/contact", label: "Contact Us" },
  { to: "/partners", label: "Our Partners" },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-serif italic text-5xl tracking-widest text-foreground">
          KENCHI
          <span className="block text-sm tracking-[0.3em] font-sans not-italic text-muted-foreground mt-1">Lifestyle Gardens</span>
        </Link>
        <div className="text-right text-muted-foreground">
          <p className="text-lg leading-snug">Professionals in all aspects of</p>
          <p className="text-lg leading-snug">residential &amp; commercial landscaping</p>
          <a href="tel:0412730370" className="underline text-foreground hover:text-foreground/80 text-base mt-1 inline-block">
            Call Ken: 0412 730 370
          </a>
        </div>
      </div>
      <nav className="border-y border-border bg-secondary">
        <ul className="mx-auto max-w-6xl flex flex-wrap justify-center md:justify-end gap-1 px-4 py-2">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-background" }}
                className="px-4 py-2 inline-block text-sm tracking-wide text-foreground hover:bg-background transition-colors rounded-sm"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} Kenchi Lifestyle Gardens. All rights reserved.</p>
        <p>Gold Coast, QLD · <a className="underline hover:text-foreground" href="tel:0412730370">0412 730 370</a></p>
      </div>
    </footer>
  );
}