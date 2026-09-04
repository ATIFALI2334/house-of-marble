import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-[0.4em]">NAURA</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Luxury stone interiors. Marble basins, furniture and décor objects made for
            refined contemporary spaces.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/collections" className="link-underline hover:text-foreground">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-underline hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Studio</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Lahore, Pakistan</li>
            <li>+92 330 666 2872</li>
            <li>hello@nauraliving.com</li>
            <li>Mon – Sat, 11am – 7pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase md:px-10">
        © {new Date().getFullYear()} Naura Living — All rights reserved
      </div>
    </footer>
  );
}
