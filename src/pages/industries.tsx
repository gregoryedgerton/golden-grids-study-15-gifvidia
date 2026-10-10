import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { FactStrip, FactTile, GetStarted, IndustryTile, ReportCard } from "../lib/cards";
import { FACTS, GET_STARTED, INDUSTRIES, PAGES, REFERENCE, REPORTS, type Fact, type Industry } from "../content";
import "../styles.css";

const fact = (f: Fact): Cell => (_x, _k, flat) => flat ? <FactStrip f={f} /> : <FactTile f={f} />;
const ind = (i: Industry): Cell => (x, key) => <IndustryTile i={i} x={x} slotKey={key} />;

function App() {
  // A search for an industry arrives here with ?open=; open its tile.
  useEffect(() => {
    const id = new URLSearchParams(location.search).get("open"); if (!id) return;
    const t = setTimeout(() => { const el = document.querySelector<HTMLButtonElement>(`#in-${id} .media__open`); el?.scrollIntoView({ block: "center" }); el?.click(); }, 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <Page current={PAGES.industries} source={REFERENCE.industries}>
      <section className="indhero" aria-labelledby="ind-title">
        <div className="wrap">
          <p className="indhero__kicker">Industries</p>
          <h1 id="ind-title" className="indhero__title">Fueling the Future of Industries With AI</h1>
          <p className="indhero__body">Discover the possibility, power and performance of AI and accelerated computing, from the cloud to the edge, across industries.</p>
          <nav className="indhero__tabs" aria-label="On this page"><a href="#industries">Our Industries</a><a href="#reports">State of AI Survey Reports</a><span>Use Cases and Success Stories</span><a href="#get-started">Get Started</a><span>Stay Informed</span></nav>
        </div>
      </section>
      <GridBand id="industries" title="Our Industries" sub="Fourteen of them. Open one for what it covers." variant={1} cells={INDUSTRIES.slice(0, 5).map(ind)} />
      <GridBand id="industries-2" title="More industries" quiet variant={3} cells={INDUSTRIES.slice(5, 10).map(ind)} />
      <GridBand id="industries-3" title="The rest" quiet variant={0} from={2} cells={INDUSTRIES.slice(10, 13).map(ind)} strip={ind(INDUSTRIES[13])} />
      <GridBand id="reports" title="State of AI Reports" sub="Take a deeper dive into AI across industries." variant={4}
        cells={[(x, key) => <ReportCard r={REPORTS[0]} x={x} slotKey={key} tone="black" />, (x, key) => <ReportCard r={REPORTS[1]} x={x} slotKey={key} tone="green" />, (x, key) => <ReportCard r={REPORTS[2]} x={x} slotKey={key} tone="grey" />, (x, key) => <ReportCard r={REPORTS[3]} x={x} slotKey={key} tone="black" />, fact(FACTS.reports)]} />
      <GridBand id="surveys" title="The surveys in numbers" quiet variant={2} from={2} cells={[fact(FACTS.telco), fact(FACTS.fin), fact(FACTS.industries)]} strip={fact(FACTS.top500)} />
      <GridBand id="get-started" title="Get Started" sub="Develop, learn and plan." variant={5}
        cells={GET_STARTED.map((g, i): Cell => () => <GetStarted title={g.title} body={g.body} cta={g.cta} tone={i === 1 ? "green" : "black"} />)} />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
