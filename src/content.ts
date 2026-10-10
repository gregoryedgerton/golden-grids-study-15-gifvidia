import type { IconName } from "./icons";

/**
 * Every word and number on the four pages.
 *
 * What is real: the structure of each page, the headings, the lists of
 * industries, series and operating systems, and the facts that the reference
 * itself states (a count of supercomputers, a number of laptops, a date). What
 * is invented: every sentence below, which is the study's own, every laptop's
 * maker and model, every driver version and release date, and every story's
 * wording; no partner's name is used. Product names the reference gives its
 * own are played with the parody name in front (GIFvidia RTX Spark), as the
 * program's brand rule asks.
 */
export const PAGES = { home: "index.html", industries: "industries.html", shop: "shop.html", drivers: "drivers.html" } as const;

export const REFERENCE = {
  home: { label: "nvidia.com", url: "https://www.nvidia.com/en-us/" },
  industries: { label: "nvidia.com, Industries", url: "https://www.nvidia.com/en-us/industries/" },
  shop: { label: "marketplace.nvidia.com, RTX Spark", url: "https://marketplace.nvidia.com/en-us/products/rtx-spark/" },
  drivers: { label: "nvidia.com, Drivers", url: "https://www.nvidia.com/en-us/drivers/" },
} as const;

/** The header's items: the reference's own, for show, with the study's pages as links. */
export const NAV: { label: string; href?: string }[] = [
  { label: "Products" }, { label: "Solutions" }, { label: "Industries", href: PAGES.industries },
  { label: "Shop", href: PAGES.shop }, { label: "Drivers", href: PAGES.drivers }, { label: "Support" },
];
export const MARKET_NAV = ["Marketplace", "RTX Spark", "Products", "Applications", "…"];

/* ---------- Stories ---------- */

export interface Story { id: string; kicker: string; title: string; body: string; photo?: string; icon?: IconName; href?: string; cta?: string }

export const HERO: Story[] = [
  { id: "spark", kicker: "Artificial Intelligence", title: "A New Beginning for Windows PCs", body: "GIFvidia RTX Spark puts GIFvidia AI and RTX graphics together in one PC for creating, developing and gaming. Preorder now.", photo: "laptop-dark", href: PAGES.shop, cta: "Learn More" },
  { id: "local", kicker: "Artificial Intelligence", title: "Watch the CEO Join a Software Maker for a Conversation on Local AI", body: "Two chief executives talk about models that run on the machine in front of you, and what that changes for developers.", photo: "code", cta: "Watch" },
  { id: "gtc-dc", kicker: "GIFvidia GTC", title: "GTC Washington, D.C.", body: "Developers, researchers and business leaders meet for four days of sessions on what comes next in AI.", photo: "gov", cta: "Register" },
  { id: "roi", kicker: "Data Center", title: "Productive, Durable, Fungible: Infrastructure That Maximizes ROI", body: "Why the same racks can train a model in the morning and serve it in the afternoon, and keep their value for years.", photo: "dc-aisle", cta: "Read the Blog" },
  { id: "berlin", kicker: "Keynote", title: "Watch the CEO's Keynote at GTC Berlin", body: "The opening address from Europe's AI conference: robots, factories, cars and the systems behind them.", photo: "network", cta: "Watch" },
  { id: "vera", kicker: "Data Center", title: "GIFvidia Vera Rubin NVL72 and Vera CPU Come to a Cloud Provider", body: "A cloud operator adds the newest rack-scale systems and processors to its fleet for customers to rent.", photo: "dc-racks", cta: "Learn More" },
];

export interface Card { kicker: string; title: string; body: string; photo?: string; tone?: "black" | "green" | "grey"; icon?: IconName }

export const AI_CARDS: Card[] = [
  { kicker: "Artificial Intelligence | Blog", title: "A New Beginning for Windows PCs", body: "GIFvidia RTX Spark is now available for preorder.", photo: "laptop-desk" },
  { kicker: "Agentic AI | Blog", title: "Telecom Operators Are Building Their AI Strategy on Open Models", body: "Operators use open models to customize and control AI for work that has to run all day.", photo: "telecom" },
  { kicker: "Creatives | News", title: "Helping an Image Site Understand Your Vibe", body: "With GIFvidia Blackwell and GIFvidia Dynamo, a pinboard's AI answers faster, with more of the picture in view.", tone: "green" },
  { kicker: "Artificial Intelligence | Blog", title: "AI for Media Brings Real-Time Intelligence to Broadcast", body: "Broadcasters use AI across live production to check that footage is real and to pull more from it.", photo: "media" },
  { kicker: "Agentic AI | Announcement", title: "Sovereign Intelligence for Faster Supply Chain Decisions", body: "Open models and a data platform help find the constraint and speed the decision.", tone: "black" },
  { kicker: "Cybersecurity | Blog", title: "Custom AI for Cyber Defense, Built on GIFvidia Nemotron", body: "A security firm's new models help defenders find threats and respond sooner.", photo: "pcb-red" },
  { kicker: "Agentic AI | Announcement", title: "A Portable Computer Runs on GIFvidia", body: "An always-on assistant is now available on GIFvidia DGX Spark.", tone: "grey" },
  { kicker: "Agentic AI | Announcement", title: "A Space-Minded AI Lab Adopts the GIFvidia Vera CPU", body: "Vera speeds agentic AI as the lab's Vera Rubin systems reach from the ground to orbit.", tone: "black" },
  { kicker: "Agentic AI | News", title: "GIFvidia Nemotron 3.5 Lightning for Fast, Specialized Agent Tasks", body: "An open model with 30 billion parameters, 3 billion of them active, for always-on agents.", photo: "chip" },
  { kicker: "Artificial Intelligence | Blog", title: "Local AI: GIFvidia DGX Spark 64GB Gives Developers More Ways to Build", body: "From Friday, Oct. 23, a new configuration comes from six makers, with a cluster assistant to scale projects.", photo: "gpu-build" },
];
export const SIM_CARDS: Card[] = [
  { kicker: "Simulation | GTC Session", title: "Physical AI Conference Sessions at GTC Berlin", body: "Join October 21 to 22 to see how industrial AI, robots and autonomous vehicles change physical AI.", photo: "robotics" },
  { kicker: "Simulation | GTC Session", title: "Industrial AI and Manufacturing Sessions at GTC Berlin", body: "How industrial digital twins shape the future of physical AI in manufacturing.", photo: "industrial" },
  { kicker: "Simulation | Solution", title: "An Engineering Firm Advances Low-Carbon Structural Design on DGX Spark", body: "Graph-network surrogate models transformed the firm's structural design workflow.", photo: "aeco" },
  { kicker: "Simulation | Announcement", title: "The Agent Toolkit Expands With PhysicsNeMo and CUDA-X", body: "How industry leaders speed chip-to-system design with long-running agents.", tone: "black" },
  { kicker: "Simulation | Blog", title: "Integrate Omniverse RTX Sensor Simulation Into Existing Apps", body: "How agents can add camera, lidar and radar outputs to physical AI workflows.", photo: "auto-dash" },
  { kicker: "Rendering | Solution", title: "Digital Twins for Ecommerce: a Fashion Retailer Scales 3D Visualization", body: "A footwear catalogue becomes high-fidelity digital twins customers can turn over and inspect.", tone: "green" },
  { kicker: "Agentic AI | Blog", title: "Industrial Software Leaders Build Autonomous AI Engineers", body: "Secure, specialized agents compress weeks of simulation into hours.", tone: "grey" },
  { kicker: "Semiconductor | News", title: "AI Comes Into the Fabs to Advance Chipmaking", body: "The world's largest chip maker uses accelerated computing and AI in design and manufacturing.", photo: "wafer" },
];
export const HPC_CARDS: Card[] = [
  { kicker: "HPC | Announcement", title: "The CUDA-Q Platform Expands for Fault-Tolerant Quantum Computing", body: "CUDA-Q Logical is a new orchestration layer in the open platform, for building and tuning quantum applications.", photo: "chip" },
  { kicker: "HPC | Announcement", title: "GIFvidia Powers Over 400 of the World's 500 Fastest Supercomputers", body: "GIFvidia technologies power 81% of the TOP500 list.", photo: "hall" },
  { kicker: "HPC | Brochure", title: "Vera CPUs Lead the Way for Agentic Scientific AI", body: "A national laboratory advances materials simulation, molecular design and more.", tone: "black" },
  { kicker: "HPC | Announcement", title: "New AI Software Unlocks Scientific Discoveries", body: "From materials simulation to experimental astronomy, CUDA-X speeds AI for science.", photo: "research" },
  { kicker: "HPC | Announcement", title: "What Exascale Science Looks Like", body: "Europe's first exascale supercomputer uses GIFvidia to advance climate, brain and 6G research.", photo: "cooling" },
  { kicker: "HPC | Announcement", title: "Europe Unveils 35 New AI Supercomputers", body: "Next-generation infrastructure equips millions of researchers to advance AI and discovery.", tone: "green" },
  { kicker: "HPC | Event", title: "20 Years of CUDA: Honoring the Architects of Progress", body: "From the first kernel to global AI, a celebration of the builders who changed the world.", tone: "grey" },
  { kicker: "HPC | Announcement", title: "Announcing cuEST for Semiconductor Design", body: "Adopted by materials, chip and software makers across the industry.", photo: "semiconductor" },
];
export const GAME_CARDS: Card[] = [
  { kicker: "Artificial Intelligence | Blog", title: "A New Beginning for Windows PCs", body: "GIFvidia RTX Spark is now available for preorder.", photo: "laptop-dark" },
  { kicker: "Games | News", title: "RTX. It's On.", body: "DLSS 4.5, RTX Mega Geometry and ray tracing are available now.", photo: "gaming" },
  { kicker: "Games | News", title: "Path Tracing and DLSS 4.5 Available Now", body: "The newest releases ship with both from the first day.", photo: "gaming-rig" },
  { kicker: "Creators | Studio", title: "Studio Drivers for the Editing Room", body: "Drivers tested with the creative apps, released on a slower, steadier schedule.", photo: "edit" },
  { kicker: "Games | GeForce", title: "GeForce RTX Cards, Compared", body: "What changes from one tier to the next: cores, memory and power.", photo: "gpu-triple" },
  { kicker: "Games | GeForce NOW", title: "Play on Any Screen From the Cloud", body: "Stream the library from a data center to a phone, a TV or a laptop.", tone: "green" },
  { kicker: "Creators | Hardware", title: "Cooling That Keeps Up", body: "Liquid and air designs for cards that run for hours.", photo: "gpu-yellow" },
  { kicker: "Games | VR", title: "Virtual Reality, Rendered in Real Time", body: "Headsets need two frames at once and no stutter; the card does both.", photo: "vr" },
];

export const SECTIONS = {
  ai: { title: "Artificial Intelligence", body: "AI is powering change in every industry. From generative AI and speech recognition to medical imaging and supply chain management, it gives enterprises the compute, tools and algorithms their teams need to do their life's work." },
  sim: { title: "Design and Simulation", body: "Accelerated computing, libraries and AI models let software makers and manufacturers build large-scale, physically accurate simulations and interactive digital twins, so teams can build, train and test advanced systems before they are deployed." },
  hpc: { title: "High-Performance Computing", body: "High-performance computing is the ability to process data and perform complex calculations at high speed, and one of the essential tools behind the advance of computational science." },
  game: { title: "Gaming and Creating", body: "GIFvidia RTX powers the world's fastest PCs and the ultimate platform for gamers and creators: ray tracing, AI-powered DLSS and much more, on a desktop, a laptop, in the cloud or in the living room." },
};

export const GTC = { title: "GTC Washington, D.C. Registration Is Now Open", body: "Join developers, researchers and business leaders on Nov. 30 to Dec. 3 to explore the next wave of AI innovation.", cta: "Get Your Pass Now" };

/* ---------- Facts ---------- */
export interface Fact { line: string; label: string; body?: string; tone?: "black" | "green" | "grey"; icon?: IconName }
export const FACTS: Record<string, Fact> = {
  top500: { line: "81%", label: "Of the TOP500", body: "GIFvidia technologies power 81% of the world's 500 fastest supercomputers, more than 400 of them.", tone: "green", icon: "chip" },
  cuda: { line: "20", label: "Years of CUDA", body: "From the first kernel to global AI.", tone: "black", icon: "code" },
  europe: { line: "35", label: "New AI supercomputers in Europe", tone: "grey" },
  active: { line: "3B", label: "Active parameters", body: "Of a 30 billion parameter open model for always-on agents.", tone: "black", icon: "chip" },
  gtc: { line: "4", label: "Days of GTC", body: "Nov. 30 to Dec. 3, in Washington, D.C.", tone: "green" },
  laptops: { line: "22", label: "RTX Spark laptops listed", body: "From five makers, in 14, 15, 15.3 and 16 inch.", tone: "black" },
  cores: { line: "6,144", label: "GPU cores, the top tier", body: "Against 5,120 on the other tier of GIFvidia RTX Spark.", tone: "green", icon: "chip" },
  memory: { line: "128", label: "GB of unified memory at most", body: "Shared by the CPU and the GPU on one chip.", tone: "grey" },
  reports: { line: "4", label: "State of AI reports", body: "Healthcare, telecommunications, financial services, and retail and CPG: 2026 trends.", tone: "green" },
  telco: { line: "1,000+", label: "Telecom professionals surveyed", tone: "black" },
  fin: { line: "800+", label: "Financial services professionals surveyed", tone: "grey" },
  industries: { line: "14", label: "Industries", body: "From architecture, engineering and construction to telecommunications.", tone: "black" },
};

/* ---------- Industries ---------- */
export interface Industry { id: string; name: string; photo: string; body: string; examples: string[] }
export const INDUSTRIES: Industry[] = [
  { id: "aeco", name: "Architecture, Engineering, Construction, and Operations", photo: "aeco", body: "Design, simulate and operate buildings and infrastructure as digital twins before and after they are built.", examples: ["Real-time visualization of a design", "Simulation of airflow and light", "Site monitoring with computer vision"] },
  { id: "auto", name: "Automotive", photo: "auto", body: "From the design studio to the factory floor to the car on the road: simulation, training of driving models and in-vehicle computing.", examples: ["Training and testing driving models in simulation", "In-vehicle AI computing", "Digital twins of assembly lines"] },
  { id: "energy", name: "Energy", photo: "energy", body: "Seismic imaging, reservoir simulation, wind and grid forecasting, and plant monitoring.", examples: ["Faster seismic processing", "Grid and demand forecasting", "Inspection with drones and cameras"] },
  { id: "fin", name: "Financial Services", photo: "finance", body: "Fraud detection, risk models, trading analytics and service agents, on infrastructure that can be audited.", examples: ["Real-time fraud scoring", "Risk simulation", "Customer-service agents"] },
  { id: "gov", name: "Government", photo: "gov", body: "Sovereign AI, public-service agents and scientific computing for the public good.", examples: ["National AI infrastructure", "Public-service chat agents", "Disaster and climate modeling"] },
  { id: "health", name: "Healthcare and Life Sciences", photo: "health", body: "Medical imaging, drug discovery, genomics and hospital operations.", examples: ["Faster, sharper image reconstruction", "Models of proteins and molecules", "Clinical note and workflow assistants"] },
  { id: "edu", name: "Higher Education Research", photo: "research", body: "Shared computing for universities and the labs inside them.", examples: ["Campus AI clusters", "Courses and training for researchers", "Open models for research"] },
  { id: "industrial", name: "Industrial Sector", photo: "industrial", body: "Factories, warehouses and supply chains planned and run through simulation.", examples: ["Digital twins of plants", "Robot cells trained in simulation", "Quality inspection by vision"] },
  { id: "media", name: "Media and Entertainment", photo: "media", body: "Rendering, editing, live production, visual effects and the streaming services that deliver them.", examples: ["Real-time rendering", "Live-production AI", "Recommendation at scale"] },
  { id: "qsr", name: "Restaurants and Quick-Service", photo: "restaurant", body: "Voice ordering, demand forecasting and kitchen automation.", examples: ["Voice AI at the drive-thru", "Demand and staffing forecasts", "Kitchen vision systems"] },
  { id: "retail", name: "Retail and Consumer Packaged Goods", photo: "retail", body: "Shelf and store analytics, supply planning, search and personal shopping assistants.", examples: ["Store and shelf analytics", "Supply and demand planning", "Shopping assistants"] },
  { id: "robotics", name: "Robotics", photo: "robotics", body: "Robots that perceive, plan and act, trained in simulation before they meet the real world.", examples: ["Training in simulated worlds", "On-robot AI computing", "Humanoid and mobile platforms"] },
  { id: "semi", name: "Semiconductor", photo: "semiconductor", body: "Chip design, lithography and fab operations, accelerated end to end.", examples: ["Computational lithography", "Faster design verification", "AI in the fab"] },
  { id: "telecom", name: "Telecommunications", photo: "telecom", body: "AI-native networks, radio access on shared computing and customer-care agents.", examples: ["AI-RAN on shared computing", "Network optimization", "Care and sales agents"] },
];

export interface Report { id: string; title: string; short: string; lead: string; body: string; n?: string }
export const REPORTS: Report[] = [
  { id: "r-health", title: "State of AI in Healthcare: 2026 Trends", short: "Healthcare: 2026 Trends", lead: "AI is already raising revenue and cutting costs in healthcare.", body: "AI is no longer experimental in healthcare. It already raises revenue, cuts costs and changes how care is delivered. The report shows where leaders see a measurable return today, where the biggest risks and roadblocks remain, and what the most advanced organizations do differently." },
  { id: "r-telco", title: "State of AI in Telecommunications: 2026 Trends", short: "Telecom: 2026 Trends", lead: "AI is the core growth engine of telecom operations.", body: "Data from a survey of more than 1,000 telecom professionals around the world. This year's results show AI as the core growth engine of telecom operations, networks and services.", n: "1,000+" },
  { id: "r-fin", title: "State of AI in Financial Services: 2026 Trends", short: "Finance: 2026 Trends", lead: "The trends, challenges and opportunities of the year.", body: "Data from a survey of more than 800 financial services professionals, among them executives, data scientists, developers, engineers and IT specialists. The results show the trends, challenges and opportunities that define the year.", n: "800+" },
  { id: "r-retail", title: "State of AI in Retail and CPG: 2026 Trends", short: "Retail: 2026 Trends", lead: "Open models, agents and physical AI in retail.", body: "Based on hundreds of responses from industry professionals, the third annual survey shows how companies use AI to deliver measurable business impact, and the growing role of open-source models, agentic AI and physical AI." },
];
export const GET_STARTED = [
  { title: "Develop Solutions to the Most Complex Challenges", body: "Hundreds of GPU-accelerated containers, models and SDKs: the tools needed to build apps on the platform.", cta: "Start Building" },
  { title: "Discover Training to Meet Your Organization's Goals", body: "Raise your team's skills in AI, graphics and simulation, and accelerated computing, with custom plans, team pricing and flexible delivery.", cta: "Start Learning" },
  { title: "Re-Envision the Future of Your Business", body: "Resources for modern business leaders, with the guidance they need to innovate, manage risk and capitalize on AI.", cta: "Learn More" },
];

/* ---------- Marketplace ---------- */
export interface Laptop { id: string; maker: string; name: string; model: string; cores: 5120 | 6144; cpu: 18 | 20; screen: string; inch: 14 | 15 | 15.3 | 16; memory: 24 | 32 | 48 | 64 | 128; storage: string; photo: string }
const MAKERS = ["Northfield", "Kestrel", "Halden", "Ardent", "Lumen"] as const;
const mk = (maker: (typeof MAKERS)[number], name: string, model: string, cores: 5120 | 6144, inch: Laptop["inch"], screen: string, memory: Laptop["memory"], storage: string, photo: string): Laptop => ({ id: `${maker}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), maker, name, model, cores, cpu: cores === 6144 ? 20 : 18, inch, screen, memory, storage, photo });
export const LAPTOPS: Laptop[] = [
  mk("Northfield", "Northfield Aero Ultra 15", "NA2 58079", 5120, 15, "3270 x 2180", 24, "512GB NVMe Gen 4 SSD", "laptop-desk"),
  mk("Northfield", "Northfield Aero Ultra 15", "NA2 80723", 6144, 15, "3270 x 2180", 48, "1 TB NVMe Gen 5 SSD", "laptop-dark"),
  mk("Northfield", "Northfield Aero Ultra 15", "NA2 58115", 6144, 15, "3270 x 2180", 32, "1 TB NVMe Gen 5 SSD", "desk-setup"),
  mk("Kestrel", "Kestrel Flip N16", "KF 068", 6144, 16, "3840 x 2400", 32, "1 TB M.2 2280 PCIe 4x4", "laptop-dark"),
  mk("Northfield", "Northfield Aero Ultra 15", "NA2 58019", 5120, 15, "3270 x 2180", 32, "1 TB NVMe Gen 5 SSD", "laptop-desk"),
  mk("Northfield", "Northfield Aero Ultra 15", "NA2 58091", 5120, 15, "3270 x 2180", 32, "1 TB NVMe Gen 5 SSD", "desk-setup"),
  mk("Halden", "Halden Studio P14", "H7407 P14", 5120, 14, "2880 x 1800", 24, "512 GB M.2 NVMe PCIe 4.0 SSD", "laptop-dark"),
  mk("Ardent", "Ardent Book Ultra 16", "AB 16 bk", 6144, 16, "2880 x 1800", 32, "1 TB PCIe Gen5", "laptop-desk"),
  mk("Halden", "Halden Studio P16", "H7607 P16", 5120, 16, "3840 x 2400", 128, "2 TB M.2 NVMe PCIe 4.0 SSD", "desk-setup"),
  mk("Lumen", "Lumen Pro 9 15\"", "LP9 83 SSC", 6144, 15.3, "WQXGA OLED Multitouch", 128, "Up to 2 TB M.2 2242", "laptop-dark"),
  mk("Kestrel", "Kestrel Flip N16", "KF 067", 6144, 16, "3840 x 2400", 32, "1 TB M.2 2280 PCIe 4x4", "laptop-desk"),
  mk("Ardent", "Ardent Creator Edition 16", "AC 4L6 QH28", 5120, 16, "3.2K (3200 x 2000) OLED", 32, "512 GB NVMe Gen 4 SSD", "desk-setup"),
  mk("Ardent", "Ardent Creator Pro 16", "AC 4L6 QH26", 6144, 16, "3.2K (3200 x 2000) OLED", 32, "1 TB NVMe Gen 4 SSD", "laptop-dark"),
  mk("Lumen", "Lumen Yoga 2-in-1 16\"", "LY9 83N TUS", 5120, 16, "2880 x 1800", 32, "1 TB NVMe SSD", "laptop-desk"),
  mk("Lumen", "Lumen Yoga 2-in-1 16\"", "LY9 83N UUS", 6144, 16, "2880 x 1800", 64, "1 TB NVMe SSD", "desk-setup"),
  mk("Halden", "Halden Studio P14 Pro", "H7407 P14X", 6144, 14, "2880 x 1800", 48, "1 TB M.2 NVMe PCIe 4.0 SSD", "laptop-dark"),
  mk("Kestrel", "Kestrel Flip N14", "KF 044", 5120, 14, "2880 x 1800", 24, "512 GB M.2 2280 PCIe 4x4", "laptop-desk"),
  mk("Ardent", "Ardent Book Ultra 14", "AB 14 bk", 5120, 14, "2880 x 1800", 32, "1 TB PCIe Gen5", "desk-setup"),
  mk("Northfield", "Northfield Aero Ultra 16", "NA2 61014", 6144, 16, "3840 x 2400", 64, "2 TB NVMe Gen 5 SSD", "laptop-dark"),
  mk("Lumen", "Lumen Pro 9 15\" Plus", "LP9 83 SSD", 6144, 15.3, "WQXGA OLED Multitouch", 64, "Up to 2 TB M.2 2242", "laptop-desk"),
  mk("Halden", "Halden Studio P16 Pro", "H7607 P16X", 6144, 16, "3840 x 2400", 64, "2 TB M.2 NVMe PCIe 4.0 SSD", "desk-setup"),
  mk("Kestrel", "Kestrel Flip N16 Pro", "KF 069", 6144, 16, "3840 x 2400", 48, "2 TB M.2 2280 PCIe 4x4", "laptop-dark"),
];
export { MAKERS };
export const MEMORIES = [24, 32, 48, 64, 128] as const;
export const INCHES = [14, 15, 15.3, 16] as const;
export const SPARK = { line: (c: 5120 | 6144, cpu: number) => `GIFvidia RTX Spark N1X with ${c.toLocaleString("en-US")}-core GPU and ${cpu}-core CPU`, gpu: "GIFvidia Blackwell GPU", cpuName: "GIFvidia Grace CPU" };
export const SPARK_SPECS = [["Chip", "GIFvidia RTX Spark N1X"], ["GPU", "GIFvidia Blackwell, 5,120 or 6,144 cores"], ["CPU", "GIFvidia Grace, 18 or 20 cores"], ["Memory", "LPDDR5X unified, 24 to 128 GB"], ["Storage", "NVMe SSD, 512 GB to 2 TB"], ["Screens", "14, 15, 15.3 and 16 inch, 2.8K to 4K"]] as [string, string][];

/* ---------- Drivers ---------- */
export const CATEGORIES = ["GeForce", "TITAN", "GIFvidia RTX PRO / RTX / Quadro", "Data Center / Tesla", "GRID", "NVS", "ION", "Legacy", "3D Vision"] as const;
export const SERIES: Record<string, Record<string, string[]>> = {
  GeForce: {
    "GeForce RTX 50 Series (Notebooks)": ["GIFvidia GeForce RTX 5090 Laptop GPU", "GIFvidia GeForce RTX 5080 Laptop GPU", "GIFvidia GeForce RTX 5070 Ti Laptop GPU", "GIFvidia GeForce RTX 5070 Laptop GPU", "GIFvidia GeForce RTX 5060 Laptop GPU", "GIFvidia GeForce RTX 5050 Laptop GPU"],
    "GeForce RTX 50 Series": ["GIFvidia GeForce RTX 5090", "GIFvidia GeForce RTX 5080", "GIFvidia GeForce RTX 5070 Ti", "GIFvidia GeForce RTX 5070", "GIFvidia GeForce RTX 5060 Ti", "GIFvidia GeForce RTX 5060"],
    "GeForce RTX 40 Series (Notebooks)": ["GIFvidia GeForce RTX 4090 Laptop GPU", "GIFvidia GeForce RTX 4080 Laptop GPU", "GIFvidia GeForce RTX 4070 Laptop GPU", "GIFvidia GeForce RTX 4060 Laptop GPU"],
    "GeForce RTX 40 Series": ["GIFvidia GeForce RTX 4090", "GIFvidia GeForce RTX 4080 SUPER", "GIFvidia GeForce RTX 4070 Ti SUPER", "GIFvidia GeForce RTX 4070", "GIFvidia GeForce RTX 4060 Ti", "GIFvidia GeForce RTX 4060"],
    "GeForce RTX 30 Series": ["GIFvidia GeForce RTX 3090 Ti", "GIFvidia GeForce RTX 3080", "GIFvidia GeForce RTX 3070", "GIFvidia GeForce RTX 3060"],
    "GeForce RTX 20 Series": ["GIFvidia GeForce RTX 2080 Ti", "GIFvidia GeForce RTX 2070 SUPER", "GIFvidia GeForce RTX 2060"],
    "GeForce MX500 Series (Notebooks)": ["GIFvidia GeForce MX570", "GIFvidia GeForce MX550"],
  },
  TITAN: { "TITAN Series": ["GIFvidia TITAN RTX", "GIFvidia TITAN V", "GIFvidia TITAN Xp"] },
  "GIFvidia RTX PRO / RTX / Quadro": { "RTX PRO Blackwell Series": ["GIFvidia RTX PRO 6000 Blackwell", "GIFvidia RTX PRO 5000 Blackwell", "GIFvidia RTX PRO 4000 Blackwell"], "RTX Ada Generation": ["GIFvidia RTX 6000 Ada Generation", "GIFvidia RTX 4000 Ada Generation"] },
  "Data Center / Tesla": { "H-Series": ["GIFvidia H200", "GIFvidia H100"], "A-Series": ["GIFvidia A100", "GIFvidia A30"] },
  GRID: { "GRID Series": ["GIFvidia GRID K2", "GIFvidia GRID K1"] },
  NVS: { "NVS Series": ["GIFvidia NVS 810", "GIFvidia NVS 510"] },
  ION: { "ION Series": ["GIFvidia ION"] },
  Legacy: { "GeForce 400 Series": ["GIFvidia GeForce GTX 480", "GIFvidia GeForce GTX 470"] },
  "3D Vision": { "3D Vision Series": ["GIFvidia 3D Vision Kit"] },
};
export const OSES = ["Windows 10 64-bit", "Windows 11", "Linux aarch64", "Linux 64-bit", "FreeBSD x64"] as const;
export const LANGS = ["English (US)", "English (UK)", "English (India)", "Chinese (Simplified)", "Chinese (Traditional)", "Japanese", "Korean", "Deutsch", "Español (España)", "Español (América Latina)", "Français", "Italiano"] as const;

/** A driver the finder returns: the study's own, with invented versions and dates. */
export function driverFor(category: string, series: string, product: string, os: string, kind: "recommended" | "beta") {
  const linux = os.startsWith("Linux") || os.startsWith("Free");
  const seed = [...`${category}${series}${product}${os}${kind}`].reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 7);
  const major = 590 + (seed % 9), minor = 10 + ((seed >> 4) % 80);
  const day = 1 + ((seed >> 8) % 27);
  const month = kind === "beta" ? "October" : "September";
  const studio = category === "GIFvidia RTX PRO / RTX / Quadro";
  return {
    name: studio ? "RTX Enterprise Production Branch Driver" : category === "Data Center / Tesla" ? "Data Center Driver" : kind === "beta" ? "Game Ready Driver (Beta)" : "Game Ready Driver (Certified)",
    version: `${major}.${minor}`, date: `${month} ${day}, 2026`, size: `${(seed % 400) / 10 + (linux ? 180 : 620)} MB`.replace(/(\d+)\.(\d)/, (_, a, b) => `${a}.${b}`), os, product,
    notes: [`Supports ${product}.`, kind === "beta" ? "A preview of the next release; may be less stable." : "Tested and certified for stability.", linux ? "Installs from a .run file or your distribution's package." : "Includes the GIFvidia App's installer."],
  };
}

export const DRIVERS_NEWS = [
  { kicker: "Artificial Intelligence | Blog", title: "A New Beginning for Windows PCs", body: "GIFvidia RTX Spark is now available for preorder.", photo: "laptop-desk" },
  { kicker: "Games | News", title: "RTX. It's On.", body: "DLSS 4.5, RTX Mega Geometry and ray tracing available now.", photo: "gaming" },
  { kicker: "Games | News", title: "RTX. It's on.", body: "Path tracing and DLSS 4.5 available now.", photo: "gaming-rig" },
  { kicker: "Games | News", title: "RTX. It's On.", body: "Path tracing and DLSS 4.5 in a new spy thriller on day one.", photo: "keyboard" },
];
export const MORE_DRIVERS = ["DGX Spark Recovery Software", "CUDA Drivers for Mac", "Quadro Advanced Options (Quadro View, NVWMI, etc.)", "PhysX System Software", "RTX PRO Sync and Quadro Sync II Firmware", "HGX Software"];

export const FOOTER: [string, string[]][] = [
  ["Company Information", ["About Us", "Investors", "Venture Capital", "Foundation", "Research", "Corporate Sustainability", "Technologies", "Careers"]],
  ["News and Events", ["Newsroom", "Company Blog", "Technical Blog", "Webinars", "Stay Informed", "Events Calendar", "GTC AI Conference", "On-Demand"]],
  ["Popular Links", ["Developers", "Partners", "Executive Insights", "Startups and VCs", "Documentation", "Technical Training", "Professional Services for Data Science"]],
];
