/** Where the facts come from. A square names its source by key; the credits list every source the page drew on. */
export const SOURCES = {
  nv: { ref: true, short: "nvidia.com", full: "NVIDIA, nvidia.com, its Industries and Drivers pages and marketplace.nvidia.com, as shown on October 9, 2026", url: "https://www.nvidia.com/en-us/" },
} as const;
export type SourceKey = keyof typeof SOURCES;
export const cited = new Set<SourceKey>();
