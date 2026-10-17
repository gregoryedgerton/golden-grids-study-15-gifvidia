import type { ReactNode } from "react";
import { ExpandedCell, type ExpandGroup } from "./expand";
import { Fact as FactBox } from "./boxes";
import { Fit } from "./fit";
import { Imprint, Icon, type IconName } from "../icons";
import { photo, seen } from "../photos";
import { SPARK, type Card, type Fact, type Industry, type Laptop, type Report, type Story } from "../content";
export { Icon };

/**
 * What goes in a square. The reference's story card is a picture, a small
 * green kicker, a bold title of two or three lines and a line of body. Here
 * the same card takes whatever square the grid gives it and its type scales
 * with that square (`--u`, set in styles.css from the square's side): what a
 * square cannot hold it leaves out whole. A card with no picture is a flat
 * tile with its title fitted to the square.
 */
export function Pic({ k, sizes = "(min-width: 1100px) 50vw, 100vw", eager, pos }: { k: string; sizes?: string; eager?: boolean; pos?: string }) {
  const p = photo(k);
  seen.add(k);
  return <img src={p.src} srcSet={p.srcSet} sizes={sizes} alt={p.alt} loading={eager ? "eager" : "lazy"} decoding="async" style={pos ? { objectPosition: pos } : undefined} />;
}
export function Credit({ k }: { k: string }) {
  const p = photo(k);
  return <figcaption className="credit">Photograph: <a href={p.page}>{p.credit}</a>, {p.source}, {p.licence}. It stands in for the subject and does not show it.</figcaption>;
}

/** A button that looks like the reference's green one, for show unless it has somewhere to go. */
export function Cta({ label, href, ghost }: { label: string; href?: string; ghost?: boolean }) {
  const cls = `btn${ghost ? " btn--ghost" : ""}`;
  return href ? <a className={cls} href={href}>{label}</a> : <span className={cls}>{label}</span>;
}

/** A story or a news card: with a picture it is a photograph over text; without, a flat tile. It opens in place. */
export function NewsCard({ c, x, slotKey }: { c: Card; x: ExpandGroup; slotKey: string }) {
  if (!c.photo) {
    return (
      <FactBox label={c.kicker} fitClass="fit--title" max={72} tone={c.tone ?? "black"} body={<p>{c.body}</p>}
        expand={{ group: x, slotKey, title: c.title, full: <div className="cell__prose"><p className="detail__kicker">{c.kicker}</p><p>{c.body}</p><p className="note">The story is the study's own wording of a subject the reference covers. Nothing leaves this page.</p></div> }}>
        {c.title}
      </FactBox>
    );
  }
  return (
    <>
      <article className="card card--news">
        <div className="card__media">
          <Pic k={c.photo} />
          <button className="media__open" {...x.triggerProps(slotKey)}><span className="visually-hidden">More: {c.title}</span></button>
          <span className="card__pill" aria-hidden="true">{c.title}</span>
        </div>
        <div className="card__text">
          <p className="card__kicker">{c.kicker}</p>
          <p className="card__title">{c.title}</p>
          <p className="card__body card__line--more">{c.body}</p>
        </div>
      </article>
      {x.isOpen(slotKey) && (
        <ExpandedCell id={x.panelId(slotKey)} title={c.title} onClose={x.close} closeRef={x.closeRef}>
          <div className="cell__split">
            <figure className="cell__photo"><Pic k={c.photo} sizes="(min-width: 1100px) 60vw, 100vw" /><Credit k={c.photo} /></figure>
            <div className="detail"><p className="detail__kicker">{c.kicker}</p><p className="detail__lead">{c.title}</p><p>{c.body}</p><p className="note">The story is the study's own wording of a subject the reference covers. Nothing leaves this page.</p></div>
          </div>
        </ExpandedCell>
      )}
    </>
  );
}

/** The hero: the chosen story, over its photograph. */
export function HeroCell({ s }: { s: Story }) {
  return (
    <div className="hero" aria-live="polite">
      {s.photo && <div className="hero__photo"><Pic k={s.photo} sizes="100vw" eager /></div>}
      <div className="hero__text">
        <p className="hero__kicker">{s.kicker}</p>
        <div className="hero__fit"><Fit as="h2" className="fit--title" min={18} max={64}>{s.title}</Fit></div>
        <div className="hero__body"><Fit as="div" className="fit--body" min={13} max={22}><p>{s.body}</p></Fit></div>
        <p className="hero__cta"><Cta label={s.cta ?? "Learn More"} href={s.href} /></p>
      </div>
    </div>
  );
}

/** A small tab: choosing it puts its story in the hero. */
export function StoryTab({ s, on, pick }: { s: Story; on: boolean; pick: () => void }) {
  return (
    <button type="button" className={`tab${on ? " tab--on" : ""}`} aria-pressed={on} aria-label={`${s.kicker}: ${s.title}`} onClick={pick}>
      <span className="tab__kicker" aria-hidden="true">{s.kicker}</span>
      <span className="tab__fit" aria-hidden="true"><Fit as="span" className="fit--title" min={10} max={44}>{s.title}</Fit></span>
      <span className="tab__more" aria-hidden="true">Show</span>
    </button>
  );
}

export function FactTile({ f }: { f: Fact }) {
  return (
    <FactBox imprint={f.icon ? <Imprint name={f.icon} /> : undefined} label={f.label} fitClass="fit--display fit--num" max={150} tone={`${f.tone ?? "black"}${(f.body?.length ?? 0) > 110 ? " box--wordy" : ""}`} body={f.body ? <p>{f.body}</p> : undefined}>
      {f.line}
    </FactBox>
  );
}
export function FactStrip({ f }: { f: Fact }) {
  return (
    <div className={`box box--strip box--${f.tone ?? "black"}`} role="group" aria-label={`${f.line}: ${f.label}`}>
      <p className="box__label">{f.label}</p>
      <div className="box__fit"><Fit as="span" className="fit--display fit--num" min={8} max={150}>{f.line}</Fit></div>
    </div>
  );
}

/** An industry: its picture and name, opening to what it covers. */
export function IndustryTile({ i, x, slotKey }: { i: Industry; x: ExpandGroup; slotKey: string }) {
  return (
    <>
      <article className="card card--industry" id={`in-${i.id}`}>
        <div className="card__media">
          <Pic k={i.photo} />
          <button className="media__open" {...x.triggerProps(slotKey)}><span className="visually-hidden">More: {i.name}</span></button>
          <span className="card__pill" aria-hidden="true">{i.name}</span>
        </div>
        <div className="card__text"><p className="card__title">{i.name}</p><p className="card__body card__line--more">{i.body}</p></div>
      </article>
      {x.isOpen(slotKey) && (
        <ExpandedCell id={x.panelId(slotKey)} title={i.name} onClose={x.close} closeRef={x.closeRef}>
          <div className="cell__split">
            <figure className="cell__photo"><Pic k={i.photo} sizes="(min-width: 1100px) 60vw, 100vw" /><Credit k={i.photo} /></figure>
            <div className="detail">
              <p className="detail__lead">{i.body}</p>
              <ul className="bullets">{i.examples.map((e) => <li key={e}>{e}</li>)}</ul>
              <p className="detail__actions"><Cta label="Explore the industry" /></p>
              <p className="note">The examples are the study's own, in the shape of the reference's lists.</p>
            </div>
          </div>
        </ExpandedCell>
      )}
    </>
  );
}

export function ReportCard({ r, x, slotKey, tone }: { r: Report; x: ExpandGroup; slotKey: string; tone: "black" | "green" | "grey" }) {
  return (
    <FactBox label="State of AI" fitClass="fit--title" min={12} max={64} tone={tone} body={<p>{r.lead}</p>}
      expand={{ group: x, slotKey, title: r.title, full: <div className="cell__prose"><p className="detail__lead">{r.title}</p><p>{r.body}</p><p><Cta label="Read Report" /></p><p className="note">The report is not reproduced; the study shows how the reference describes it.</p></div> }}>
      {r.short}
    </FactBox>
  );
}

/** A laptop in the marketplace listing: its picture, name and the lines the reference lists under it. */
export function LaptopCard({ l, x, slotKey }: { l: Laptop; x: ExpandGroup; slotKey: string }) {
  const title = `${l.name} - ${l.model}`;
  return (
    <>
      <article className="card card--laptop">
        <div className="card__media">
          <Pic k={l.photo} />
          <button className="media__open" {...x.triggerProps(slotKey)}><span className="visually-hidden">More: {title}</span></button>
          <span className="card__pill" aria-hidden="true">{l.inch}″ · {l.memory} GB</span>
        </div>
        <div className="card__text">
          <p className="card__title">{title}</p>
          <ul className="specs card__line--more">
            <li>{SPARK.line(l.cores, l.cpu)}</li>
            <li>{SPARK.gpu}</li><li>{SPARK.cpuName}</li>
            <li>{l.inch}&quot; {l.screen}</li>
            <li>{l.memory} GB LPDDR5X Unified Memory</li>
            <li>{l.storage}</li>
          </ul>
          <p className="card__cta card__line--more"><Cta label="Learn More" /></p>
        </div>
      </article>
      {x.isOpen(slotKey) && (
        <ExpandedCell id={x.panelId(slotKey)} title={title} onClose={x.close} closeRef={x.closeRef}>
          <div className="cell__split">
            <figure className="cell__photo"><Pic k={l.photo} sizes="(min-width: 1100px) 60vw, 100vw" /><Credit k={l.photo} /></figure>
            <div className="detail">
              <p className="detail__kicker">{l.maker}</p>
              <p className="detail__lead">{title}</p>
              <dl className="sum">
                <div><dt>Chip</dt><dd>{SPARK.line(l.cores, l.cpu)}</dd></div>
                <div><dt>GPU</dt><dd>{SPARK.gpu}, {l.cores.toLocaleString("en-US")} cores</dd></div>
                <div><dt>CPU</dt><dd>{SPARK.cpuName}, {l.cpu} cores</dd></div>
                <div><dt>Display</dt><dd>{l.inch}&quot; {l.screen}</dd></div>
                <div><dt>Memory</dt><dd>{l.memory} GB LPDDR5X unified</dd></div>
                <div><dt>Storage</dt><dd>{l.storage}</dd></div>
              </dl>
              <p className="note">The maker, the model and the configuration are invented for this study. Nothing can be bought.</p>
            </div>
          </div>
        </ExpandedCell>
      )}
    </>
  );
}

/** A get-started square: a title, a line and either the reference's button or, where the button would offer software, a plain note in its place. */
export function GetStarted({ title, body, cta, note, tone = "black", href }: { title: string; body: string; cta?: string; note?: string; tone?: "black" | "green" | "grey"; href?: string }): ReactNode {
  return (
    <div className={`box box--${tone} getstarted`}>
      <div className="box__fit"><Fit as="h3" className="fit--title" min={14} max={52}>{title}</Fit></div>
      <div className="box__body"><Fit as="div" className="fit--body" min={12} max={20}><p>{body}</p></Fit></div>
      {(cta || note) && <div className="box__foot">{cta ? <Cta label={cta} href={href} /> : <span className="box__source">{note}</span>}</div>}
    </div>
  );
}
export type { IconName };
