import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — House of Marble" },
      {
        name: "description",
        content:
          "Enquire about House of Marble stone furniture, basins and bespoke projects. Based in Pakistan.",
      },
      { property: "og:title", content: "Contact — House of Marble" },
      {
        property: "og:description",
        content: "Enquire about stone furniture, basins and bespoke projects.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
      <div>
        <p className="eyebrow">Enquiries</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Contact</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Tell us about the space, the piece or the project. We reply to every enquiry within
          two working days.
        </p>

        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="eyebrow">Studio</dt>
            <dd className="mt-2 text-muted-foreground">{site.address}</dd>
          </div>
          <div>
            <dt className="eyebrow">WhatsApp</dt>
            <dd className="mt-2 text-muted-foreground">{site.phone}</dd>
          </div>
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="mt-2 text-muted-foreground">{site.email}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={whatsappLink("Hello House of Marble, I have an enquiry.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-7 py-3 text-[0.7rem] tracking-[0.24em] text-background uppercase transition-opacity hover:opacity-85"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="size-5 text-muted-foreground hover:text-foreground" />
          </a>
          {site.facebook && (
  <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="size-5 text-muted-foreground hover:text-foreground" />
          </a>
          )}
        </div>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "subject", label: "Subject", type: "text" },
        ].map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="eyebrow block">
              {f.label}
            </label>
            <input
              id={f.id}
              type={f.type}
              required
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
            />
          </div>
        ))}

        <div>
          <label htmlFor="message" className="eyebrow block">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
          />
        </div>

        <button
          type="submit"
          className="border border-foreground bg-foreground px-8 py-3 text-[0.7rem] tracking-[0.24em] text-background uppercase transition-opacity hover:opacity-85"
        >
          Send enquiry
        </button>

        {sent && (
          <p className="text-sm text-muted-foreground">
            Thank you — your enquiry has been noted. We will be in touch shortly.
          </p>
        )}
      </form>
    </div>
  );
}
