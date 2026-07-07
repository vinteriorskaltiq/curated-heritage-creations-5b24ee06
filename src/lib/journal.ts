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
    slug: "chor-bazaar-antique-guide-mumbai",
    title: "A Collector's Guide to Chor Bazaar, Mumbai",
    description:
      "How to walk Mutton Street like a dealer — a practical guide to buying antique furniture in Chor Bazaar, India's oldest antique district.",
    excerpt:
      "How to walk Mutton Street like a dealer — what to look for, what to avoid, and why Mumbai's oldest antique district still matters to serious collectors.",
    date: "2025-11-14",
    readMinutes: 7,
    keywords: [
      "Chor Bazaar",
      "Chor Bazaar Mumbai",
      "Mutton Street",
      "antique furniture Mumbai",
      "antique shopping Mumbai",
      "Vinterior Chor Bazaar",
    ],
    body: [
      {
        p: "Chor Bazaar — literally 'thieves' market' — is the oldest antique district in India. It runs along Mutton Street in south Mumbai, a five-minute walk from the Jama Masjid and a fifteen-minute rickshaw from Chhatrapati Shivaji Maharaj Terminus. For nearly a hundred and fifty years it has been the place where families discreetly sold their heirlooms, where colonial estates were unwound, and where a serious buyer could, with patience, find things that no other market in the country carried.",
      },
      {
        h: "Come on a weekday, come early",
        p: "The best pieces move on weekday mornings, before ten. Weekends bring foot traffic, group tours, and reproduction sellers who set up alongside genuine dealers. If you want to see the district as dealers see it, come Monday to Thursday between 9 and 11 AM. Wear closed shoes — some lanes are still cobbled — and expect to walk.",
      },
      {
        h: "Learn to tell the difference",
        p: "Chor Bazaar today sells three things: authentic antiques, restored antiques, and reproductions. All three have a place. The problem is that the third is often sold as the first. A rule of thumb: if a 19th-century teak sideboard is priced like new furniture, it isn't 19th century. Genuine antiques carry the weight of their material, oxidised hardware, uneven old joinery, and — above all — patina that cannot be faked without destroying the piece.",
      },
      {
        h: "What Chor Bazaar does best",
        p: "The district's strength is Anglo-Indian and colonial furniture from the Bombay Presidency — carved teak and rosewood, campaign chests, planter's chairs, writing bureaus, four-poster beds, and the occasional ecclesiastical piece from Goa. European imports arrive too — French vitrines, Belgian chandeliers, English silver — usually through estate clearances rather than fresh shipments.",
      },
      {
        h: "Where Vinterior fits in",
        p: "Vinterior sits at G-74 / G-75 / G-76 on Mutton Street. We have kept the same three shopfronts for over two decades. Our practice is simple: we buy fewer things, we authenticate every one, and we restore them by hand in our own atelier rather than sending them out. If you would like a private walk of the district with someone who has spent thirty years in it, we are happy to arrange one — write to us on WhatsApp before your visit.",
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
