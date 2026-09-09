import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/real-collection", label: "Real Collection" },
  { to: "/projects", label: "Projects" },
  { to: "/clients", label: "Clients & Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-stone-deep px-4 py-2 text-center text-[0.65rem] tracking-[0.22em] text-primary-foreground uppercase">
        For any queries please whatsapp us at {site.phone}
      </div>

      <div className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <button
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <nav className="hidden gap-7 text-[0.65rem] tracking-[0.2em] uppercase md:flex">
            {nav.slice(1, 6).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="font-display text-xl leading-tight tracking-[0.3em] md:text-2xl"
          >
            HOUSE OF MARBLE
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="size-4 text-muted-foreground hover:text-foreground" />
            </a>
            {site.facebook && (
  <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="size-4 text-muted-foreground hover:text-foreground" />
            </a>
            )}
            <Link
              to="/contact"
              className="link-underline text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground"
            >
              Enquire
            </Link>
          </div>
          <span className="w-5 md:hidden" />
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 text-[0.75rem] tracking-[0.22em] uppercase md:hidden">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="flex gap-5 pt-2">
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="size-4" />
              </a>
              {site.facebook && (
  <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="size-4" />
              </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
