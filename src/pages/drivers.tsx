import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "../lib/Page";
import { GridBand, type Cell } from "../bands/bands";
import { GetStarted, NewsCard } from "../lib/cards";
import { DriverFinder } from "../lib/modules";
import { DRIVERS_NEWS, MORE_DRIVERS, PAGES, REFERENCE, type Card } from "../content";
import "../styles.css";

const news = (c: Card): Cell => (x, key) => <NewsCard c={c} x={x} slotKey={key} />;

function App() {
  return (
    <Page current={PAGES.drivers} source={REFERENCE.drivers}>
      <section className="drvhero" aria-labelledby="drv-title">
        <div className="wrap"><h1 id="drv-title" className="drvhero__title">Drivers</h1>
          <nav className="drvhero__tabs" aria-label="Driver types"><span aria-current="page">All Drivers</span><span>GeForce Drivers</span><span>Networking Drivers</span></nav></div>
      </section>
      <GridBand id="auto" title="Get Automatic Driver Updates" sub="The GIFvidia App is the essential companion for PC gamers and creators. Keep your PC up to date with the latest drivers and technology." variant={2}
        cells={[() => <GetStarted tone="green" title="Get Automatic Driver Updates" body="The GIFvidia App keeps your PC up to date with the latest drivers and technology." cta="Download Now" />, () => <GetStarted tone="black" title="Best for gamers and creators" body="Game Ready and Studio drivers, with settings and recording in one place." cta="GeForce Drivers" />, () => <GetStarted tone="grey" title="Best for professionals and workstation users" body="Production-branch drivers for RTX PRO workstations." cta="Workstation Drivers" />, () => <GetStarted tone="black" title="Networking drivers" body="For adapters and DPUs." cta="Networking" />]} />
      <DriverFinder />
      <GridBand id="news" title="News & Recommendations" variant={4} from={2} cells={DRIVERS_NEWS.map(news)} strip={() => <GetStarted tone="green" title="A new beginning for Windows PCs" body="RTX Spark laptops are available for preorder." cta="See the laptops" href={PAGES.shop} />} />
      <section className="flat" aria-label="Other drivers">
        <div className="wrap flat__cols">
          <div className="prose">
            <h2 className="flat__title">Linux Drivers</h2>
            <p>Unix Driver Archive. Many Linux distributions provide their own packages of the Linux graphics driver in the distribution's native package format. This may work better with the rest of your distribution's framework, and you may want to use it instead of the official package.</p>
            <h2 className="flat__title flat__title--gap">Virtual GPU Customers</h2>
            <p>Enterprise customers with a current virtual GPU software license can sign in to the enterprise software download portal. The study has no portal.</p>
          </div>
          <div><h2 className="flat__title">Additional Drivers</h2><ul className="plainlist">{MORE_DRIVERS.map((d) => <li key={d}><span>{d}</span></li>)}</ul></div>
        </div>
      </section>
    </Page>
  );
}
createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
