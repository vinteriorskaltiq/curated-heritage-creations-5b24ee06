export interface JournalPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  keywords: string[];
  body: { h?: string; p: string }[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "buying-antique-furniture-mumbai",
    title: "Buying Antique Furniture in Mumbai — A Collector's Guide",
    description:
      "A practical guide to sourcing, authenticating and living with antique furniture in Mumbai — written for collectors, designers and first-time buyers.",
    excerpt:
      "What to look for, what to avoid, and how to buy antique furniture in Mumbai with confidence — from a third-generation family gallery.",
    date: "2025-11-14",
    readMinutes: 7,
    keywords: [
      "antique furniture Mumbai",
      "buy antique furniture Mumbai",
      "antique furniture India",
      "Mutton Street Mumbai",
      "Vinterior Mumbai",
    ],
    body: [
      {
        p: "Mumbai remains one of the most active markets in India for genuine antique furniture. For nearly a century, the city has absorbed colonial estates, merchant families, Parsi households and palace clearances — and the best pieces from those dispersals still surface in quiet galleries, family sales and the hands of specialist dealers. The question for a new buyer is not where to look, but how to look.",
      },
      {
        h: "Start with the timber",
        p: "A piece's wood should match its story. Anglo-Indian furniture from the 19th century is teak, rosewood, ebony or satinwood — never mahogany or particle board. French provincial pieces are walnut, cherry or oak. If the timber does not match the claimed origin, one of the two is wrong. Turn the piece over; look at drawer sides, the underside of the top and the back panels. These surfaces are rarely faked.",
      },
      {
        h: "Read the joinery",
        p: "Hand-cut dovetails are irregular, slightly uneven, and clearly made by eye. Machine-cut dovetails are uniform and precise — a red flag on a piece claimed to be 1850. Pegged mortise-and-tenon joints, hand-planed backs and visible tool marks are all signs of genuine hand work. Perfection is suspicious.",
      },
      {
        h: "Patina cannot be sprayed",
        p: "Patina is the surface a piece has developed from being touched, cleaned and lit by daylight over a century or more. It is uneven — darker where hands rest, lighter where dust has been wiped. A uniformly aged 'antique' finish, especially across horizontal surfaces, is nearly always applied in a workshop. Real patina has depth; fake patina has consistency.",
      },
      {
        h: "Ask for provenance",
        p: "The single most valuable thing a dealer can give you is a written note of where the piece came from, when it was acquired, and what has been done to it. Vinterior issues a signed statement of provenance with every acquisition. If a seller cannot tell you where a piece was before them, treat the price accordingly.",
      },
      {
        h: "Visit by appointment",
        p: "Serious galleries keep irregular hours and stock changes constantly. A WhatsApp message before visiting means the right person is available to walk you through the pieces, answer questions, and set aside time. Weekday mornings are usually the quietest and most rewarding.",
      },
    ],
  },
  {
    slug: "how-to-authenticate-antique-furniture",
    title: "How to Authenticate an Antique — Five Things to Examine",
    description:
      "Patina, joinery, timber, hardware and provenance — a dealer's short guide to authenticating antique furniture before you buy.",
    excerpt:
      "Patina, joinery, timber, hardware and provenance — the five things every buyer should examine before parting with money.",
    date: "2025-12-02",
    readMinutes: 6,
    keywords: [
      "authenticate antique furniture",
      "how to identify antique furniture",
      "antique furniture buying guide",
      "antique restoration India",
      "antique dealers Mumbai",
    ],
    body: [
      {
        p: "The most expensive mistake in antique buying is not overpaying for a real piece — it is paying anything at all for a reproduction. Here is the short version of what a dealer looks at, in order, in the first two minutes of examining a piece.",
      },
      {
        h: "1. Patina",
        p: "Patina is the surface a piece has developed by being touched, sat on, cleaned, and lit by daylight for a century or more. It is uneven. It is darker where hands rest and lighter where dust has been wiped. It cannot be applied. A uniformly aged 'antique' finish, especially on horizontal surfaces, is nearly always sprayed.",
      },
      {
        h: "2. Joinery",
        p: "Turn the piece over. Look at drawer sides, the underside of the top, the back panels. Genuine 18th and 19th century furniture uses hand-cut dovetails (irregular, slightly uneven), pegged mortise-and-tenon joints, and hand-planed backs with visible tool marks. Perfectly machined joints on a piece claimed to be 1850 are a red flag.",
      },
      {
        h: "3. Timber",
        p: "The wood should match the era and region. Anglo-Indian pieces from Bombay in the 1880s are teak or rosewood — not mahogany. French provincial pieces are walnut, cherry or oak — not teak. If the timber does not match the story, one of them is wrong.",
      },
      {
        h: "4. Hardware",
        p: "Original handles, escutcheons and hinges oxidise unevenly and show wear where fingers actually touch. Replacement hardware is not a dealbreaker on a good piece, but it should be disclosed. Screws are useful too — hand-cut screws (pre-1850) have off-centre slots; machine-cut screws are perfectly centred.",
      },
      {
        h: "5. Provenance",
        p: "The single most valuable thing a dealer can give you is a written note of where the piece came from, when it was acquired, and what has been done to it. Vinterior issues a signed statement of provenance with every acquisition. If a seller cannot tell you where a piece was before them, treat the price accordingly.",
      },
    ],
  },
  {
    slug: "anglo-indian-furniture-history",
    title: "The Quiet Grandeur of Anglo-Indian Furniture",
    description:
      "A short history of Anglo-Indian furniture — the meeting of European form and Indian craft in 19th-century Bombay, Madras and beyond.",
    excerpt:
      "A short history of the furniture born from the meeting of European form and Indian craft — Bombay, Madras, and beyond.",
    date: "2026-01-12",
    readMinutes: 5,
    keywords: [
      "Anglo-Indian furniture",
      "colonial furniture India",
      "Bombay furniture 19th century",
      "Burmese rosewood",
      "antique teak furniture",
    ],
    body: [
      {
        p: "Anglo-Indian furniture is what happens when a Regency drawing room is asked to survive a Bombay monsoon. Beginning in the late 18th century, European settlers, administrators and merchants commissioned Indian craftsmen — first in the Coromandel coast, then in Bombay, Calcutta and the hill stations — to reproduce the furniture of home in local materials. What returned to them was something new.",
      },
      {
        h: "New materials, older forms",
        p: "Mahogany and walnut were replaced by teak, rosewood, ebony and satinwood. These woods were denser, more resistant to heat and insects, and — crucially — allowed carving of a depth that European timbers could not sustain. A Regency sideboard reinterpreted in Bombay teak became something heavier, cooler to the touch, and often more ornate than its English original.",
      },
      {
        h: "The regional schools",
        p: "By the mid 19th century, distinct regional styles had emerged. Bombay carving was dense, floral, and often inlaid with ivory or bone. Madras (now Chennai) produced restrained, architectural pieces in rosewood. Ceylon (Sri Lanka) contributed ebony work of extraordinary delicacy. Burmese teak — from what is now Myanmar — supplied heavy carved seating and monastery-style cabinets that later travelled back to Indian merchant homes.",
      },
      {
        h: "Why it matters now",
        p: "Genuine 19th-century Anglo-Indian pieces are increasingly rare. Many were dismantled for the timber during the mid 20th century, or refinished in ways that destroyed their patina. What survives, in good condition and with clear provenance, is a small and shrinking pool. It is one of the few categories of antique furniture that has appreciated steadily in India over the past twenty years — and one of the categories Vinterior has specialised in from the beginning.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
