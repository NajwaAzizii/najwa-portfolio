export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroQuickFact {
  label: string;
  value: string;
}

export interface HeroData {
  badge: string;
  headline: string;
  description: string;

  primaryCTA: HeroCTA;
  secondaryCTA: HeroCTA;

  quickFacts: HeroQuickFact[];
}