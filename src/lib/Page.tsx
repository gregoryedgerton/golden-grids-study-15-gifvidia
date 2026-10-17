import { useState, type ReactNode } from "react";
import { Tools } from "./tools";
import { StudyBanner, StudyDisclosure } from "./study";
import { Credits } from "./modules";
import { Icon } from "../icons";
import { FOOTER, INDUSTRIES, MARKET_NAV, NAV, PAGES } from "../content";
import { useFontsReady } from "./fonts";

/**
 * The shell, after the reference's: a black bar with the mark, Products,
 * Solutions, Industries, Shop, Drivers and Support, then a search and the
 * region (the reference's Sign In is left out: the study has no accounts, see
 * CLAUDE.md, Safe Browsing remediation); a darker marketplace bar on the shop
 * page; a footer of three
 * columns of lists and the legal links. The items are the reference's, for
 * show; the study's pages are the links, and the search works on the study's
 * own four. Nothing in the shell leaves for the reference: its pages are
 * linked only from the notice and the disclosure.
 */
function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [msg, setMsg] = useState("");
  const go = () => {
    const n = q.trim().toLowerCase(); if (!n) return;
    const ind = INDUSTRIES.find((i) => i.name.toLowerCase().includes(n) || n.includes(i.id));
    if (/driver|download|geforce|firmware/.test(n)) location.href = PAGES.drivers;
    else if (/laptop|spark|shop|buy|marketplace|notebook/.test(n)) location.href = PAGES.shop;
    else if (ind) location.href = `${PAGES.industries}?open=${ind.id}`;
    else if (/industr|solution|health|auto|robot|retail|telecom/.test(n)) location.href = PAGES.industries;
    else setMsg(`Nothing for "${q.trim()}": the study holds industries, laptops and drivers.`);
  };
  return (
    <div className="hsearch">
      <button type="button" className="hbtn" aria-expanded={open} aria-controls="hsearch-form" aria-label="Search" onClick={() => setOpen(!open)}><Icon name="search" size={20} /></button>
      {open && (
        <form id="hsearch-form" className="hsearch__form" role="search" onSubmit={(e) => { e.preventDefault(); go(); }}>
          <label className="visually-hidden" htmlFor="hq">Search</label>
          <input id="hq" type="search" autoFocus placeholder="Search" value={q} onChange={(e) => { setQ(e.target.value); setMsg(""); }} />
          <button type="submit" className="btn">Search</button>
          <span className="hsearch__msg" role="status">{msg}</span>
        </form>
      )}
    </div>
  );
}

export function Page({ current, source, market, children }: { current: string; source: { label: string; url: string }; market?: boolean; children: ReactNode }) {
  useFontsReady(["400 1em Barlow", "600 1em Barlow", "700 1em Barlow"]);
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <StudyBanner />
      <Tools />
      <header className="top">
        <div className="wrap top__row">
          <a className="mark" href={PAGES.home}>GIFvidia</a>
          <nav className="hnav" aria-label="Primary">
            <ul>{NAV.map((n) => <li key={n.label}>{n.href ? <a href={n.href} aria-current={n.href === current ? "page" : undefined}>{n.label}</a> : <span>{n.label}</span>}</li>)}</ul>
          </nav>
          <div className="top__right">
            <Search />
            <span className="top__region"><Icon name="globe" size={18} />US</span>
          </div>
        </div>
      </header>
      {market && (
        <nav className="marketbar" aria-label="Marketplace">
          <div className="wrap marketbar__row">{MARKET_NAV.map((m, i) => <span key={m} className={i === 1 ? "is-here" : undefined}>{m}</span>)}</div>
        </nav>
      )}
      <main id="content">{children}</main>
      <footer className="foot">
        <div className="wrap foot__cols">
          {FOOTER.map(([title, items]) => <div key={title}><h2>{title}</h2><ul>{items.map((i) => <li key={i}><span>{i}</span></li>)}</ul></div>)}
          <div><h2>GIFvidia</h2><ul><li><a href={PAGES.home}>Home</a></li><li><a href={PAGES.industries}>Industries</a></li><li><a href={PAGES.shop}>RTX Spark laptops</a></li><li><a href={PAGES.drivers}>Drivers</a></li></ul></div>
        </div>
        <p className="wrap foot__legal"><span>Privacy Policy</span><span>Your Privacy Choices</span><span>Terms of Service</span><span>Accessibility</span><span>Corporate Policies</span><span>Product Security</span><span>Contact</span></p>
        <p className="wrap foot__copy">Copyright © 2026 GIFvidia</p>
      </footer>
      <StudyDisclosure>
        <p>This page follows <a href={source.url}>{source.label}</a> as it was shown on October 9, 2026.</p>
        <Credits />
      </StudyDisclosure>
    </>
  );
}
