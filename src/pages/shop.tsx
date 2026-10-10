import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { FactStrip, FactTile, LaptopCard } from "../lib/cards";
import { FilterPanel, matches, NO_FILTERS, Pager, type Filters } from "../lib/modules";
import { FACTS, LAPTOPS, PAGES, REFERENCE, SPARK_SPECS, type Fact, type Laptop } from "../content";
import "../styles.css";

const fact = (f: Fact): Cell => (_x, _k, flat) => flat ? <FactStrip f={f} /> : <FactTile f={f} />;
const laptop = (l: Laptop): Cell => (x, key) => <LaptopCard l={l} x={x} slotKey={key} />;
const SHAPES = [{ variant: 1 }, { variant: 4 }, { variant: 0 }];

function App() {
  const [f, setF] = useState<Filters>(NO_FILTERS);
  const [per, setPer] = useState(15);
  const [page, setPage] = useState(1);
  const list = useMemo(() => LAPTOPS.filter((l) => matches(l, f)), [f]);
  const pages = Math.max(1, Math.ceil(list.length / per));
  const cur = Math.min(page, pages);
  const show = list.slice((cur - 1) * per, cur * per);
  // Each count is what choosing that value would show, with the other filters held.
  const counts = useMemo(() => {
    const c = { cores: {} as Record<number, number>, makers: {} as Record<string, number>, memory: {} as Record<number, number>, inch: {} as Record<number, number> };
    for (const l of LAPTOPS) {
      if (matches(l, { ...f, cores: [] })) c.cores[l.cores] = (c.cores[l.cores] ?? 0) + 1;
      if (matches(l, { ...f, makers: [] })) c.makers[l.maker] = (c.makers[l.maker] ?? 0) + 1;
      if (matches(l, { ...f, memory: [] })) c.memory[l.memory] = (c.memory[l.memory] ?? 0) + 1;
      if (matches(l, { ...f, inch: [] })) c.inch[l.inch] = (c.inch[l.inch] ?? 0) + 1;
    }
    return c;
  }, [f]);
  const setFilters = (n: Filters) => { setF(n); setPage(1); };
  const groups: Laptop[][] = [];
  for (let i = 0; i < show.length; i += 5) groups.push(show.slice(i, i + 5));
  return (
    <Page current={PAGES.shop} source={REFERENCE.shop} market>
      <div className="wrap crumbs"><span>Home</span><span aria-hidden="true"> / </span><span aria-current="page">RTX Spark</span></div>
      <div className="wrap shophead">
        <h1 className="shophead__title">GIFvidia RTX Spark</h1>
        <p className="shophead__sub">A new beginning for Windows PCs.</p>
        <ul className="shophead__specs" aria-label="What is in every one">{SPARK_SPECS.map(([k, v]) => <li key={k}><strong>{k}</strong> {v}</li>)}</ul>
      </div>
      <div className="wrap withfilters">
        <FilterPanel f={f} set={setFilters} counts={counts} />
        <div className="withfilters__main">
          <Pager page={cur} pages={pages} setPage={setPage} per={per} setPer={setPer} from={(cur - 1) * per + 1} to={(cur - 1) * per + show.length} total={list.length} />
          {groups.length === 0 && <p className="none">No laptops match these filters. <button type="button" className="textbtn" onClick={() => setFilters(NO_FILTERS)}>Clear all filters</button></p>}
          {groups.map((g, i) => (
            <GridBand key={`${cur}-${i}-${g.length}`} id={`laptops-${i + 1}`} title={`Laptops ${(cur - 1) * per + i * 5 + 1} to ${(cur - 1) * per + i * 5 + g.length}`} quiet variant={SHAPES[i % 3].variant}
              cells={[...g.map(laptop), ...(g.length < 3 ? [fact(i % 2 ? FACTS.memory : FACTS.cores)] : [])]} />
          ))}
          {show.length > 0 && <GridBand id="facts" title="RTX Spark in numbers" quiet variant={2} from={2} cells={[fact(FACTS.laptops), fact(FACTS.cores), fact(FACTS.memory)]} strip={fact(FACTS.top500)} />}
        </div>
      </div>
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
