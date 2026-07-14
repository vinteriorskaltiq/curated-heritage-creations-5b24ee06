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
    slug: "art-deco-furniture-india-guide",
    title: "Art Deco Furniture in India — A Buyer's Guide",
    description:
      "How to identify, buy and live with Art Deco furniture in India — from Bombay's 1930s cinemas and mansions to today's collectors of period pieces.",
    excerpt:
      "How to identify, buy and live with genuine Art Deco furniture in India — a period Bombay embraced like no other city in the world.",
    date: "2026-02-05",
    readMinutes: 6,
    keywords: [
      "Art Deco furniture India",
      "Art Deco furniture Mumbai",
      "Bombay Art Deco",
      "vintage Art Deco furniture",
      "Art Deco sideboard",
      "Art Deco dressing table",
    ],
    body: [
      {
        p: "Mumbai holds the second-largest collection of Art Deco buildings in the world, after Miami. Between 1930 and 1950 the city's cinemas, apartment blocks and merchant homes were furnished in the same language — streamlined case pieces in Burma teak, curved club chairs, mirrored dressing tables, chrome-and-glass drinks trolleys, and bakelite hardware. Almost a century later, those pieces are quietly returning to the market as older buildings are sold and cleared.",
      },
      {
        h: "How to spot genuine Art Deco",
        p: "Real Deco is streamlined but heavy. Look for stepped or curved edges, veneered surfaces (walnut, teak, rosewood) laid in geometric patterns, chrome or bakelite handles, and interiors lined in birch ply. Legs are short and often plinth-based, not turned. The whole piece feels grounded — Deco distrusted the delicate leg.",
      },
      {
        h: "What Bombay did differently",
        p: "Bombay Deco used Burma teak instead of European walnut, added carved detail where Paris and New York would have left surfaces plain, and often married Deco form with Anglo-Indian joinery. A Bombay Deco sideboard is instantly recognisable — heavier, warmer in colour, and built to survive the climate.",
      },
      {
        h: "What to look for now",
        p: "Sideboards, bar cabinets, dressing tables with tri-fold mirrors, tub chairs and low daybeds are the most collected categories. Original veneer, original hardware and original mirror are all worth paying more for; replaced mirror is common and acceptable, replaced hardware is a discount. Ask, always.",
      },
    ],
  },
  {
    slug: "antique-chandeliers-mumbai-guide",
    title: "Antique Chandeliers in Mumbai — What Collectors Should Know",
    description:
      "A guide to buying antique crystal chandeliers in Mumbai — Bohemian, Venetian, French bronze — plus what to check before you install one at home.",
    excerpt:
      "Bohemian crystal, Venetian glass, French bronze — a guide to the antique chandeliers you'll actually find in Mumbai, and what to check before you buy.",
    date: "2026-03-02",
    readMinutes: 5,
    keywords: [
      "antique chandeliers Mumbai",
      "buy antique chandelier India",
      "Bohemian crystal chandelier",
      "Venetian glass chandelier",
      "vintage chandeliers Mumbai",
    ],
    body: [
      {
        p: "Antique chandeliers are among the most rewarding — and most misunderstood — pieces a first-time collector will buy. The market in Mumbai carries three families of chandelier in real quantity: Bohemian (Czech) crystal from the late 19th century, Venetian (Murano) glass from the 1920s onward, and French gilt-bronze frames with cut-crystal drops. Each looks different, ages differently, and is priced very differently.",
      },
      {
        h: "Bohemian crystal",
        p: "Cut lead crystal on a brass or bronze frame. Heavy, precisely faceted, and — in a good example — refracts light into full spectrum colour across a room. Original Bohemian crystal has tiny inclusions and slight irregularities in the cuts; modern reproductions are too perfect.",
      },
      {
        h: "Venetian (Murano) glass",
        p: "Blown glass in floral, leaf or ribbon forms, usually in clear, gold-flecked or pastel colours. Lighter than crystal. Look for hand-blown irregularities, small bubbles in the glass, and a wrought-iron or gilded metal armature. Replaced arms are common — check that colour and style match across the piece.",
      },
      {
        h: "Before you install",
        p: "Antique chandeliers are heavy — some over 40 kilograms. Confirm your ceiling can carry the load with an anchor rated for it. Ask the dealer to rewire the piece to Indian standards before delivery; original cloth-covered wiring is charming and dangerous. Vinterior rewires every chandelier before it leaves the gallery.",
      },
    ],
  },
  {
    slug: "care-and-maintenance-antique-furniture-india",
    title: "How to Care for Antique Furniture in Indian Weather",
    description:
      "Practical advice on caring for antique wood, veneer and upholstery in Indian humidity — from a Mumbai gallery that has restored antiques for three generations.",
    excerpt:
      "Humidity, monsoon, direct sun and air-conditioning — how to keep an antique alive in an Indian home, from the people who restore them.",
    date: "2026-04-10",
    readMinutes: 5,
    keywords: [
      "antique furniture care India",
      "how to clean antique furniture",
      "antique wood maintenance India",
      "antique furniture humidity",
      "antique restoration Mumbai",
    ],
    body: [
      {
        p: "An antique that has survived a hundred and fifty years usually fails, when it fails, in the first two years of a new home. Indian weather is the reason. Monsoon humidity swells joints; air-conditioning shrinks them again in winter; direct afternoon sun bleaches veneer. Three small habits keep almost any piece safe.",
      },
      {
        h: "Keep humidity stable, not low",
        p: "Wood cracks when humidity swings, not when it is high. A room that stays between 45% and 60% relative humidity year-round is ideal. A cheap hygrometer costs less than a lunch and will tell you more about what your antique needs than any product ever will.",
      },
      {
        h: "Never place in direct sun",
        p: "Ultraviolet light bleaches surface finish, warps veneer and dries out timber. Sheer curtains during peak hours are enough. If you must place a piece near a window, rotate it a quarter-turn every few months so the sun does not fade one side.",
      },
      {
        h: "Wax, don't polish",
        p: "A good beeswax cream, applied twice a year with a soft cloth, feeds antique wood and preserves patina. Modern spray polishes contain silicones that build up into a plastic film and are almost impossible to remove. If a piece needs more than a wax, ask a restorer — do not experiment.",
      },
      {
        h: "When to call a restorer",
        p: "Loose joints, lifting veneer, active woodworm (small piles of fine dust under the piece), and cracked mirror silvering all need professional attention. Left alone, small problems become big ones. Vinterior maintains every piece it has ever sold — bring it back if in doubt.",
      },
    ],
  },
  {
    slug: "vintage-vs-antique-vs-reproduction",
    title: "Vintage, Antique, Reproduction — What's the Difference?",
    description:
      "A plain-English guide to the difference between vintage, antique and reproduction furniture, and what it means for price, quality and long-term value.",
    excerpt:
      "Three words often used loosely and priced very differently. A plain guide to what vintage, antique and reproduction actually mean.",
    date: "2026-05-08",
    readMinutes: 4,
    keywords: [
      "antique vs vintage furniture",
      "reproduction antique furniture",
      "what is antique furniture",
      "vintage furniture India",
      "antique furniture value",
    ],
    body: [
      {
        p: "Three words the trade uses every day, often interchangeably, and priced very differently. Here is the short version — the one a good dealer would give you if you asked them across a table.",
      },
      {
        h: "Antique",
        p: "Traditionally, at least 100 years old. In practice, most serious dealers keep to that line. An antique piece was made by hand, in materials that are no longer standard, using joinery that machines cannot cheaply replicate. It carries provenance, patina and — if kept well — appreciates over time.",
      },
      {
        h: "Vintage",
        p: "Roughly 25 to 100 years old. Vintage covers Art Deco, mid-century modern, industrial pieces and 1970s design. Vintage is often part-machine-made, uses materials that are still available, and appeals for its style rather than its age. It does not always appreciate — but the best pieces do.",
      },
      {
        h: "Reproduction",
        p: "New furniture built to look old. There is nothing wrong with a well-made reproduction sold as a reproduction. There is a great deal wrong with one sold as an antique. Reproductions do not appreciate; they depreciate like any new furniture. If a piece is described as 'antique-style' or 'in the manner of' — it is a reproduction.",
      },
      {
        h: "How to tell the difference",
        p: "Turn the piece over. Look for hand-cut dovetails, hand-planed backs, oxidised hardware and irregular tool marks. Ask for a written note of age and provenance. Any dealer worth buying from will provide one, and stand behind it.",
      },
    ],
  },
  {
    slug: "designing-interiors-antique-furniture",
    title: "Designing Interiors Around Antique Furniture",
    description:
      "How designers and homeowners are mixing antique furniture with contemporary interiors — a Mumbai gallery on scale, contrast and the one-piece rule.",
    excerpt:
      "Scale, contrast, restraint — how the best interiors let a single antique do the work of an entire room.",
    date: "2026-06-04",
    readMinutes: 5,
    keywords: [
      "antique furniture in modern interiors",
      "mixing antique and modern furniture",
      "interior design antique furniture",
      "period furniture interiors India",
      "heritage home interior design",
    ],
    body: [
      {
        p: "The best rooms almost never look decorated. They look considered — as though someone thought carefully about one or two pieces and let the rest fall into place. Antique furniture is unusually good at this, if used with restraint.",
      },
      {
        h: "The one-piece rule",
        p: "Every room can carry one strong antique — a vitrine, a carved centre table, a Deco sideboard, an oversized mirror. Two competes; three crowds. Choose one and let it anchor the space. Everything else in the room should defer to it in scale, colour and finish.",
      },
      {
        h: "Contrast, not match",
        p: "Antique wood next to raw linen, unpolished stone, matte plaster or brushed steel reads as intentional. Antique wood next to more antique wood reads as inherited — which is fine, if that is the story, and dated if it isn't. Interior designers working with antiques almost always contrast the century against the surface.",
      },
      {
        h: "Lighting is half the piece",
        p: "A great antique in poor light disappears. A good antique in careful light — a picture light above, a warm 2700K bulb inside a cabinet — becomes the centre of the room. Spend on the light after you spend on the piece, not before.",
      },
      {
        h: "Live with it, don't display it",
        p: "The homes where antiques feel most at home are the ones that use them. A campaign chest that holds linens, a bureau that carries the day's post, a chandelier lit every evening. Museums display; homes should use.",
      },
    ],
  },
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
