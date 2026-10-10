import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "../icons";
import { seen, photo } from "../photos";
import { SOURCES, cited, type SourceKey } from "../sources";
import { CATEGORIES, INCHES, LANGS, MAKERS, MEMORIES, OSES, SERIES, driverFor, type Laptop } from "../content";
import { Cta } from "./cards";

/** Flat modules: bars, lists and forms. They are not grids because their content has no hierarchy to descend. */

/** A bar that sticks under the notice tells the page its height, so an opened square's head and in-page links clear it. */
export function useBarHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    const set = () => document.documentElement.style.setProperty("--bar-h", `${Math.round(el.getBoundingClientRect().height)}px`);
    set();
    const ro = new ResizeObserver(set); ro.observe(el);
    return () => { ro.disconnect(); document.documentElement.style.removeProperty("--bar-h"); };
  }, []);
  return ref;
}

/** The marketplace's filters, in the order the reference lists them. */
export interface Filters { cores: number[]; makers: string[]; memory: number[]; inch: number[] }
export const NO_FILTERS: Filters = { cores: [], makers: [], memory: [], inch: [] };
export const matches = (l: Laptop, f: Filters) => (!f.cores.length || f.cores.includes(l.cores)) && (!f.makers.length || f.makers.includes(l.maker)) && (!f.memory.length || f.memory.includes(l.memory)) && (!f.inch.length || f.inch.includes(l.inch));

export function FilterPanel({ f, set, counts }: { f: Filters; set: (f: Filters) => void; counts: { cores: Record<number, number>; makers: Record<string, number>; memory: Record<number, number>; inch: Record<number, number> } }) {
  const [more, setMore] = useState(false);
  const tog = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((i) => i !== v) : [...list, v]);
  const any = f.cores.length + f.makers.length + f.memory.length + f.inch.length > 0;
  const group = <T extends string | number>(legend: string, items: readonly T[], key: keyof Filters, count: Record<string, number>, label: (v: T) => string) => (
    <fieldset className="filters__group">
      <legend>{legend}</legend>
      {items.map((v) => (
        <label key={String(v)}><input type="checkbox" checked={(f[key] as unknown as T[]).includes(v)} onChange={() => set({ ...f, [key]: tog(f[key] as unknown as T[], v) } as Filters)} /><span>{label(v)}</span><em>{count[String(v)] ?? 0}</em></label>
      ))}
    </fieldset>
  );
  return (
    <aside className="filters" aria-label="Filter the laptops">
      <fieldset className="filters__group"><legend>Category</legend><label><input type="radio" checked readOnly /><span>RTX Spark Laptops</span></label></fieldset>
      {group("GPU", [6144, 5120] as const, "cores", counts.cores as never, (v) => `GIFvidia Blackwell RTX ${v.toLocaleString("en-US")}-core`)}
      {group("Manufacturer", more ? MAKERS : MAKERS.slice(0, 3), "makers", counts.makers, (v) => v)}
      {MAKERS.length > 3 && <button type="button" className="textbtn" aria-expanded={more} onClick={() => setMore(!more)}>{more ? "Show Less" : "Show More"}</button>}
      {group("System Memory", MEMORIES, "memory", counts.memory as never, (v) => `${v} GB`)}
      {group("Screen Size", INCHES, "inch", counts.inch as never, (v) => `${v}"`)}
      {any && <button type="button" className="btn btn--ghost" onClick={() => set(NO_FILTERS)}>Clear all filters</button>}
    </aside>
  );
}

export function Pager({ page, pages, setPage, per, setPer, from, to, total }: { page: number; pages: number; setPage: (n: number) => void; per: number; setPer: (n: number) => void; from: number; to: number; total: number }) {
  return (
    <div className="pager">
      <label>Display <select value={per} onChange={(e) => { setPer(Number(e.target.value)); setPage(1); }}><option value={15}>15</option><option value={30}>30</option></select> per page</label>
      <p role="status" aria-live="polite">{total ? `${from} - ${to} of ` : "0 of "}<strong>{total}</strong> items</p>
      <nav aria-label="Pages">
        <button type="button" aria-label="Previous page" disabled={page <= 1} onClick={() => setPage(page - 1)}>‹</button>
        <label className="visually-hidden" htmlFor="pg">Page</label>
        <select id="pg" value={page} onChange={(e) => setPage(Number(e.target.value))}>{Array.from({ length: Math.max(1, pages) }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}</select>
        <button type="button" aria-label="Next page" disabled={page >= pages} onClick={() => setPage(page + 1)}>›</button>
      </nav>
    </div>
  );
}

/** Manual driver search: four selects that each wait on the one before, then a result the study works out from them. */
export function DriverFinder() {
  const id = useId();
  const [cat, setCat] = useState(""); const [series, setSeries] = useState(""); const [product, setProduct] = useState(""); const [os, setOs] = useState(""); const [lang, setLang] = useState<string>(LANGS[0]);
  const [kind, setKind] = useState<"recommended" | "beta">("recommended");
  const [found, setFound] = useState<ReturnType<typeof driverFor> | null>(null);
  const [err, setErr] = useState("");
  const seriesList = cat ? Object.keys(SERIES[cat] ?? {}) : [];
  const productList = cat && series ? SERIES[cat]?.[series] ?? [] : [];
  const ready = cat && series && product && os;
  const sel = (label: string, value: string, set: (v: string) => void, options: readonly string[], placeholder: string, disabled?: boolean, sid?: string) => (
    <label className="finder__field"><span>{label}</span>
      <select id={sid} value={value} disabled={disabled} onChange={(e) => { set(e.target.value); setFound(null); setErr(""); }}>
        <option value="">{placeholder}</option>{options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
  return (
    <section className="finder" aria-labelledby={`${id}-t`}>
      <h2 id={`${id}-t`} className="finder__title">Manual Driver Search</h2>
      <form className="finder__form" onSubmit={(e) => { e.preventDefault(); if (!ready) { setErr("Choose a category, a series, a product and an operating system first."); return; } setFound(driverFor(cat, series, product, os, kind)); }}>
        {sel("Product Type", cat, (v) => { setCat(v); setSeries(""); setProduct(""); }, CATEGORIES, "Select Product Category")}
        {sel("Product Series", series, (v) => { setSeries(v); setProduct(""); }, seriesList, "Select Product Series", !cat)}
        {sel("Product", product, setProduct, productList, "Select Product", !series)}
        {sel("Operating System", os, setOs, OSES, "Select Operating System")}
        <label className="finder__field"><span>Language</span><select value={lang} onChange={(e) => setLang(e.target.value)}>{LANGS.map((l) => <option key={l}>{l}</option>)}</select></label>
        <fieldset className="finder__field finder__kind"><legend>Driver type</legend>
          <label><input type="radio" name={`${id}-k`} checked={kind === "recommended"} onChange={() => { setKind("recommended"); setFound(null); }} />Recommended/Certified</label>
          <label><input type="radio" name={`${id}-k`} checked={kind === "beta"} onChange={() => { setKind("beta"); setFound(null); }} />Beta</label>
        </fieldset>
        <button type="submit" className="btn finder__go">Find</button>
        <p className="finder__err" role="alert">{err}</p>
      </form>
      {found && (
        <div className="finder__result" role="status">
          <h3>{found.name}</h3>
          <dl className="sum">
            <div><dt>Version</dt><dd>{found.version}</dd></div>
            <div><dt>Release date</dt><dd>{found.date}</dd></div>
            <div><dt>Operating system</dt><dd>{found.os}</dd></div>
            <div><dt>Language</dt><dd>{lang}</dd></div>
            <div><dt>File size</dt><dd>{found.size}</dd></div>
          </dl>
          <ul className="bullets">{found.notes.map((n) => <li key={n}>{n}</li>)}</ul>
          <p><Cta label="Download" /> <span className="note">Nothing is downloaded: the driver, its version and its date are invented for this study.</span></p>
        </div>
      )}
    </section>
  );
}

/** Every photograph and every source on the page, for the disclosure. Rendered after the page has drawn. */
export function Credits() {
  const [keys, setKeys] = useState<string[]>([]);
  const [src, setSrc] = useState<SourceKey[]>([]);
  useEffect(() => {
    const read = () => {
      const k = [...seen], s = [...cited];
      setKeys((old) => (old.join() === k.join() ? old : k));
      setSrc((old) => (old.join() === s.join() ? old : s));
    };
    read();
    const t = setInterval(read, 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      {keys.length > 0 && (
        <details>
          <summary>Photographs on this page ({keys.length})</summary>
          <ul>{keys.map((k) => { const p = photo(k); return <li key={k}>{p.alt}. <a href={p.page}>{p.credit}</a>, {p.source}, {p.licence}.</li>; })}</ul>
        </details>
      )}
      {src.length > 0 && (
        <details>
          <summary>Sources for the page ({src.length})</summary>
          <ul>{src.map((k) => <li key={k}>{SOURCES[k].full}</li>)}</ul>
        </details>
      )}
    </>
  );
}
export { Icon };
