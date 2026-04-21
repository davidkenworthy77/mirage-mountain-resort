export type Award = {
  rank?: string; // e.g. "#1", "Top Pick"
  title: string;
  subtitle?: string;
  year: string;
  source: string; // publisher / awarding body
  sourceUrl: string; // the exact ranking/award page
  icon: "trophy" | "medal" | "star" | "leaf" | "mountain";
  color: "gold" | "red" | "sage" | "navy";
};

export const awards: Award[] = [
  {
    rank: "#1",
    title: "Ranked Ski Resort",
    subtitle: "Best Ski Resorts Near San Diego",
    year: "2026",
    source: "San Diego Ski Guide",
    sourceUrl: "https://sandiego.theskiawards.com/san-diego-ski-resort-rankings",
    icon: "trophy",
    color: "gold",
  },
  {
    rank: "#1",
    title: "Ski Resort in Southern California",
    subtitle: "Annual Industry Rankings",
    year: "2025",
    source: "SkiSoCal",
    sourceUrl:
      "https://www.skisocal.com/awards/best-ski-resort-southern-california-2025/",
    icon: "trophy",
    color: "gold",
  },
  {
    title: "Best Infrastructure",
    subtitle:
      "A masterclass in modern resort engineering — fastest lift network, zero-wait connectivity",
    year: "2025",
    source: "The Ski Awards",
    sourceUrl: "https://www.theskiawards.com/",
    icon: "mountain",
    color: "navy",
  },
  {
    title: "Golden Eagle Award",
    subtitle: "For Environmental Excellence",
    year: "2025",
    source: "SkiSoCal",
    sourceUrl: "https://www.skisocal.com/awards/environmental-excellence-2025/",
    icon: "leaf",
    color: "sage",
  },
  {
    title: "Best Family Ski Resort",
    subtitle: "Southern California",
    year: "2025",
    source: "SkiSoCal",
    sourceUrl: "https://www.skisocal.com/awards/best-family-ski-resort-2025/",
    icon: "medal",
    color: "red",
  },
  {
    title: "Best Beginner Terrain",
    subtitle: "California",
    year: "2024",
    source: "SkiSoCal",
    sourceUrl: "https://www.skisocal.com/awards/best-beginner-terrain-2024/",
    icon: "star",
    color: "navy",
  },
];
