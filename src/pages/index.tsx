import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { FactStrip, FactTile, GetStarted, HeroCell, NewsCard, StoryTab } from "../lib/cards";
import { AI_CARDS, FACTS, GAME_CARDS, GTC, HERO, HPC_CARDS, PAGES, REFERENCE, SECTIONS, SIM_CARDS, type Card, type Fact } from "../content";
import "../styles.css";

const news = (c: Card): Cell => (x, key) => <NewsCard c={c} x={x} slotKey={key} />;
const fact = (f: Fact): Cell => (_x, _k, flat) => flat ? <FactStrip f={f} /> : <FactTile f={f} />;

function App() {
  const [on, setOn] = useState(HERO[0].id);
  const story = HERO.find((s) => s.id === on) ?? HERO[0];
  const tabs = HERO.slice(0, 5).filter((s) => s.id !== on);
  const S = SECTIONS;
  return (
    <Page current={PAGES.home} source={REFERENCE.home}>
      <h1 className="visually-hidden">GIFvidia: artificial intelligence computing</h1>
      <GridBand id="hero" title="Featured" quiet lead variant={0}
        cells={[() => <HeroCell s={story} />, ...tabs.map((s): Cell => () => <StoryTab s={s} on={false} pick={() => setOn(s.id)} />)]} />
      <GridBand id="gtc" title={GTC.title} quiet variant={3} from={3}
        cells={[() => <GetStarted tone="green" title={GTC.title} body={GTC.body} cta={GTC.cta} />, fact(FACTS.gtc), fact(FACTS.top500)]} strip={fact(FACTS.cuda)} />
      <GridBand id="ai" title={S.ai.title} sub={S.ai.body} variant={1} from={3} cells={AI_CARDS.slice(0, 4).map(news)} strip={fact(FACTS.active)} />
      <GridBand id="ai-2" title="More in artificial intelligence" quiet variant={4} cells={AI_CARDS.slice(4).map(news)} />
      <GridBand id="sim" title={S.sim.title} sub={S.sim.body} variant={2} cells={SIM_CARDS.slice(0, 5).map(news)} />
      <GridBand id="sim-2" title="More in design and simulation" quiet variant={5} from={2} cells={[...SIM_CARDS.slice(5).map(news), fact(FACTS.industries)]} strip={news(SIM_CARDS[7])} />
      <GridBand id="hpc" title={S.hpc.title} sub={S.hpc.body} variant={3} from={3} cells={HPC_CARDS.slice(0, 4).map(news)} strip={fact(FACTS.top500)} />
      <GridBand id="hpc-2" title="More in high-performance computing" quiet variant={0} cells={[...HPC_CARDS.slice(4).map(news), fact(FACTS.europe)]} />
      <GridBand id="game" title={S.game.title} sub={S.game.body} variant={4} cells={GAME_CARDS.slice(0, 5).map(news)} />
      <GridBand id="game-2" title="More for gamers and creators" quiet variant={1} cells={[...GAME_CARDS.slice(5).map(news), fact(FACTS.cores)]} />
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
