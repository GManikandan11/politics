// types/pricingSection.ts

export interface PricingPlan {
  label: string;
  price: string;
  pricingCaption: string;
  highlightLabel?: string;
  features: string[];
 body: any[]
  ctaLabel: string;
  ctaLink?: string;
}

export interface BillingToggle {
  label: string;
  highlight?: string;
  isDefault?: boolean;
}

export interface PricingSection {
  tagline: string;
  headline: string;
  subtext: string;
  featureHighlights: string[];
  billingToggles: BillingToggle[];
  plans: PricingPlan[];
  comparisonSection:any;
  featureComparisonTable:any;
  heroSection:any;
plansByBilling:any
}

