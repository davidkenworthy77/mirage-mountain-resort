import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { WavyDivider } from "./WavyDivider";
import { awards, type Award } from "../data/awards";

function AwardIcon({ type }: { type: Award["icon"] }) {
  const commonProps = {
    width: 40,
    height: 40,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "trophy":
      return (
        <svg {...commonProps}>
          <path d="M16 8h16v6a8 8 0 01-16 0V8z" />
          <path d="M16 10H10a4 4 0 004 4M32 10h6a4 4 0 01-4 4" />
          <path d="M20 22v8M28 22v8M16 30h16v6H16z" />
        </svg>
      );
    case "medal":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="30" r="10" />
          <path d="M18 6l6 14M30 6l-6 14M15 6h18" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps}>
          <path d="M24 6l5.5 11.5L42 19l-9 8.5 2 12.5-11-6-11 6 2-12.5L6 19l12.5-1.5z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...commonProps}>
          <path d="M38 10C38 22 30 38 10 38c0-20 16-28 28-28z" />
          <path d="M10 38L30 18" />
        </svg>
      );
    case "mountain":
      return (
        <svg {...commonProps}>
          <path d="M4 38l12-20 8 12 4-6 16 14H4z" />
          <circle cx="34" cy="14" r="3" />
        </svg>
      );
  }
}

const colorClasses: Record<Award["color"], { bg: string; icon: string; rank: string; border: string }> = {
  gold: {
    bg: "bg-gold/10",
    icon: "text-gold",
    rank: "text-gold",
    border: "border-gold/40 hover:border-gold",
  },
  red: {
    bg: "bg-red/10",
    icon: "text-red",
    rank: "text-red",
    border: "border-red/40 hover:border-red",
  },
  sage: {
    bg: "bg-sage/20",
    icon: "text-navy",
    rank: "text-navy",
    border: "border-sage/60 hover:border-sage",
  },
  navy: {
    bg: "bg-navy/10",
    icon: "text-navy",
    rank: "text-navy",
    border: "border-navy/30 hover:border-navy",
  },
};

type AwardsProps = {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading?: string;
  subheading?: string;
};

export function Awards({
  variant = "light",
  eyebrow = "Awards & Recognition",
  heading = "The Industry's Paying Attention.",
  subheading = "Before a single lift has spun for the public, Mirage Mountain is already being called Southern California's next great ski destination. Here's what the critics are saying.",
}: AwardsProps) {
  const isDark = variant === "dark";
  return (
    <SectionWrapper variant={variant} id="awards">
      <ScrollReveal animation="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className={`font-condensed tracking-[0.3em] text-xs mb-4 ${
              isDark ? "text-gold" : "text-red"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl mb-6 ${
              isDark ? "text-cream" : "text-navy"
            }`}
          >
            {heading}
          </h2>
          <WavyDivider color={isDark ? "#EAA732" : "#DD4D39"} className="mb-8" />
          <p
            className={`text-base md:text-lg leading-relaxed ${
              isDark ? "text-cream/80" : "text-warm-gray"
            }`}
          >
            {subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {awards.map((award, i) => {
          const c = colorClasses[award.color];
          return (
            <ScrollReveal key={award.sourceUrl} animation="fade-up" delay={i * 80}>
              <a
                href={award.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col h-full rounded-lg border-2 ${c.border} ${
                  isDark ? "bg-navy-light/60" : "bg-cream"
                } p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${c.bg} flex items-center justify-center ${c.icon} transition-transform group-hover:scale-110`}
                  >
                    <AwardIcon type={award.icon} />
                  </div>
                  <span
                    className={`font-condensed text-xs tracking-widest ${
                      isDark ? "text-cream/60" : "text-warm-gray"
                    }`}
                  >
                    {award.year}
                  </span>
                </div>

                {award.rank && (
                  <p
                    className={`font-display text-5xl md:text-6xl leading-none mb-2 ${c.rank}`}
                  >
                    {award.rank}
                  </p>
                )}

                <h3
                  className={`font-display text-xl md:text-2xl leading-tight mb-2 ${
                    isDark ? "text-cream" : "text-navy"
                  }`}
                >
                  {award.title}
                </h3>

                {award.subtitle && (
                  <p
                    className={`text-sm italic mb-4 ${
                      isDark ? "text-cream/70" : "text-warm-gray"
                    }`}
                  >
                    {award.subtitle}
                  </p>
                )}

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-current/10">
                  <span
                    className={`font-condensed text-xs tracking-widest ${
                      isDark ? "text-cream/60" : "text-warm-gray"
                    }`}
                  >
                    {award.source}
                  </span>
                  <span
                    className={`font-condensed text-xs tracking-widest inline-flex items-center gap-1 ${
                      isDark ? "text-gold" : "text-red"
                    } group-hover:gap-2 transition-all`}
                  >
                    See Ranking
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
