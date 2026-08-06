// Single source of truth for all Ease Quran UK pricing.
// Update numbers here only — the pricing page (and anything else that
// imports from this file) derives its display from these values.
// All prices are GBP, hardcoded for the UK market. No currency conversion.

export const CURRENCY = "GBP";
export const CURRENCY_SYMBOL = "£";
export const REGISTRATION_FEE = 0;

export type Duration = 30 | 60;

export interface MainPlan {
  id: string;
  name: string;
  classesPerWeek: number;
  classesPerMonth: number;
  /** Monthly price in GBP for a 30-minute class plan. */
  price30: number;
  /** Monthly price in GBP for a 60-minute class plan (not simply 1.8x — see brief). */
  price60: number;
  /** Flat GBP add-on when every class in the week is a weekend (Sat/Sun) slot. */
  weekendPriorityAddOn: number;
  mostPopular?: boolean;
}

export const MAIN_PLANS: MainPlan[] = [
  {
    id: "foundation",
    name: "Foundation",
    classesPerWeek: 2,
    classesPerMonth: 8,
    price30: 32,
    price60: 58,
    weekendPriorityAddOn: 5,
  },
  {
    id: "steady",
    name: "Steady",
    classesPerWeek: 3,
    classesPerMonth: 12,
    price30: 45,
    price60: 79,
    weekendPriorityAddOn: 7,
    mostPopular: true,
  },
  {
    id: "immersion",
    name: "Immersion",
    classesPerWeek: 5,
    classesPerMonth: 20,
    price30: 68,
    price60: 122,
    weekendPriorityAddOn: 10,
  },
];

export function planPrice(plan: MainPlan, duration: Duration): number {
  return duration === 30 ? plan.price30 : plan.price60;
}

// ---------------------------------------------------------------------------
// Sibling discount — automatic, applied per child based on enrolment order.
// 1st child full price, 2nd -15%, 3rd -25%, 4th+ -30%.
// ---------------------------------------------------------------------------

export const SIBLING_DISCOUNTS = [0, 0.15, 0.25, 0.3]; // index 0 = 1st child, capped at index 3 for 4th+

export function siblingDiscountRate(childIndex: number): number {
  // childIndex is 1-based (1st child, 2nd child, ...)
  const i = Math.min(childIndex - 1, SIBLING_DISCOUNTS.length - 1);
  return SIBLING_DISCOUNTS[Math.max(i, 0)];
}

export function siblingPrice(basePrice: number, childIndex: number): number {
  const rate = siblingDiscountRate(childIndex);
  return Math.round(basePrice * (1 - rate));
}

/** Worked example used on the pricing page: 3 children on Steady (30-min). */
export function siblingWorkedExample() {
  const steady = MAIN_PLANS.find((p) => p.id === "steady")!;
  const base = steady.price30;
  const prices = [1, 2, 3].map((i) => siblingPrice(base, i));
  const total = prices.reduce((a, b) => a + b, 0);
  return { planName: steady.name, prices, total };
}

// ---------------------------------------------------------------------------
// Prepay discounts
// ---------------------------------------------------------------------------

export type PrepayTerm = "monthly" | "quarterly" | "biannual" | "yearly";

export const PREPAY_TERMS: { id: PrepayTerm; label: string; months: number; discountRate: number }[] = [
  { id: "monthly", label: "Monthly", months: 1, discountRate: 0 },
  { id: "quarterly", label: "Every 3 months", months: 3, discountRate: 0.05 },
  { id: "biannual", label: "Every 6 months", months: 6, discountRate: 0.1 },
  // Yearly = 2 months free, i.e. pay for 10 of 12 months.
  { id: "yearly", label: "Yearly", months: 12, discountRate: 2 / 12 },
];

export function prepayTotalAndSaving(monthlyPrice: number, term: PrepayTerm) {
  const meta = PREPAY_TERMS.find((t) => t.id === term)!;
  const fullTotal = monthlyPrice * meta.months;
  const total = Math.round(fullTotal * (1 - meta.discountRate));
  const saving = fullTotal - total;
  return { ...meta, fullTotal, total, saving };
}

// ---------------------------------------------------------------------------
// Additional plans (smaller cards, shown below the three main plans)
// ---------------------------------------------------------------------------

export const HIFZ_INTENSIVE = {
  name: "Hifz Intensive",
  fromPrice: 105,
  classesPerWeek: 5,
  durationMinutes: 45,
  description: "Senior Hifz teacher, 5 sessions a week, 45 minutes each, with weekly memorisation tracking.",
};

export const CUSTOM_TIMETABLE = {
  name: "Custom Timetable",
  rangeLow: 48,
  rangeHigh: 112,
  description: "Built around your family's schedule. We'll quote a fixed monthly price before you start.",
};

// ---------------------------------------------------------------------------
// Referral
// ---------------------------------------------------------------------------

export const REFERRAL = {
  referrerDiscount: 0.5, // 50% off one month for the referring family
  refereeDiscount: 0.2, // 20% off first month for the referred family
};

// ---------------------------------------------------------------------------
// Weekend priority policy text (shown verbatim on the page)
// ---------------------------------------------------------------------------

export const WEEKEND_POLICY_NOTE =
  "If your timetable mixes weekdays with one or two weekend classes, there is no extra charge. The Weekend Priority add-on only applies when every class in your week is booked on Saturday or Sunday.";
