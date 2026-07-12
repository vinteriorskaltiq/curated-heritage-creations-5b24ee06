export interface CollectionFAQ {
  q: string;
  a: string;
}

export interface CollectionBlock {
  h?: string;
  p: string;
}

export interface CollectionPage {
  slug: string;
  eyebrow: string;
  title: string;
  h1: string;
  metaTitle: string; // 50–60 chars
  metaDescription: string; // 140–160 chars
  ogTitle: string;
  ogDescription: string;
  targetKeyword: string;
  keywords: string[];
  hero: { image: string; alt: string };
  intro: string;
  body: CollectionBlock[];
  faqs: CollectionFAQ[];
  related: string[]; // slugs
}

import galleryImg from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import cabinetImg from "@/assets/piece-cabinet.jpg";
import mirrorImg from "@/assets/piece-mirror.jpg";
import chandelierImg from "@/assets/piece-chandelier.jpg";
import armchairImg from "@/assets/piece-armchair.jpg";
import showroomImg from "@/assets/showroom.jpg";

export const collections: CollectionPage[] = [
  {
    slug: "antique-furniture-mumbai",
    eyebrow: "Mumbai · Since 1955",
    title: "Antique Furniture in Mumbai",
    h1: "Antique Furniture in Mumbai — Curated Since 1955",
    metaTitle: "Antique Furniture Mumbai | Vinterior — Est. 1955",
    metaDescription:
      "Authenticated antique furniture in Mumbai, curated by Vinterior since 1955. Restored period, colonial & European pieces for collectors and designers.",
    ogTitle: "Antique Furniture Mumbai — Vinterior",
    ogDescription:
      "Third-generation family gallery of authenticated antique furniture in Mumbai. Restored in-house, sold with written provenance.",
    targetKeyword: "Antique Furniture Mumbai",
    keywords: [
      "antique furniture Mumbai",
      "antique furniture store Mumbai",
      "antique dealers Mumbai",
      "Vinterior Mumbai",
      "period furniture Mumbai",
      "vintage furniture Mumbai",
    ],
    hero: { image: showroomImg, alt: "Vinterior antique furniture showroom in Mumbai" },
    intro:
      "For nearly seven decades, Vinterior has been one of Mumbai's most trusted addresses for authenticated antique furniture. Founded in 1955 and now run by the third generation of the same family, our gallery on Mutton Street sources, restores and curates period pieces for collectors, interior designers, heritage residences and hospitality projects across India.",
    body: [
      {
        h: "Why collectors choose Vinterior",
        p: "Mumbai has changed considerably since 1955, but the qualities that make an antique worth owning have not. Vinterior was founded on the idea that a single piece — chosen with care, restored by hand, and documented honestly — is worth more than a shop full of anonymous stock. Every acquisition passes through our own atelier, is examined for authenticity by three generations of the family, and is offered with a signed statement of provenance. Serious buyers return to us because they know what they are getting.",
      },
      {
        h: "Types of antique furniture we curate",
        p: "Our Mumbai gallery holds a small, changing collection of 18th and 19th-century European furniture — French vitrines and consoles, Italian carved seating, English writing bureaus and campaign chests — alongside Anglo-Indian teak and rosewood pieces from the Bombay, Madras and Ceylon schools. Decorative categories include antique chandeliers, gilt mirrors, marquetry cabinets, antique marble, horology and fine glassware. Each piece is one-of-one and, once placed, is not replaced.",
      },
      {
        h: "Our restoration philosophy",
        p: "Restoration at Vinterior is conservative by conviction. We stabilise structure, replace only what cannot be saved, and preserve original surfaces — because patina, once lost, cannot be returned. Work is carried out in our own atelier in Mumbai by craftsmen who have been with the family for decades. We disclose every intervention in writing.",
      },
      {
        h: "A short buying guide",
        p: "The most useful thing a new buyer can do is slow down. Look at the underside of a piece, not just the front. Ask when it was made, where it came from, and what has been done to it. If a dealer cannot answer plainly, treat the price accordingly. A genuine 19th-century piece will carry uneven patina, hand-cut joinery, oxidised original hardware and — importantly — a documented history. We are happy to walk visitors through this in person at the Mumbai gallery.",
      },
      {
        h: "Who we work with",
        p: "Our clients include private collectors across India, interior designers and architects working on luxury residential and heritage projects, boutique hoteliers, and families furnishing homes they intend to keep. Delivery, packing and insured shipping are arranged from Mumbai to anywhere in India and, on request, internationally.",
      },
      {
        h: "Visit the Mumbai gallery",
        p: "The gallery is at G-74 / G-75 / G-76, An Nasr, Mutton Street, Mumbai 400008. Weekday mornings are quietest and most rewarding. Appointments are welcomed but not required; a WhatsApp message before you arrive means we can set aside time.",
      },
    ],
    faqs: [
      {
        q: "Where is Vinterior located in Mumbai?",
        a: "Vinterior is at G-74 / G-75 / G-76, An Nasr, Mutton Street, Kumbharwada, Mumbai 400008.",
      },
      {
        q: "Are your antiques authenticated?",
        a: "Yes. Every piece is examined in-house and sold with a signed statement of provenance describing its period, origin and any restoration carried out.",
      },
      {
        q: "Do you ship antique furniture outside Mumbai?",
        a: "Yes. We arrange insured, professionally packed shipping to any city in India and internationally on request.",
      },
      {
        q: "Can interior designers open a trade account?",
        a: "Yes. We have long-standing relationships with architects and interior designers across India. Please contact us to discuss trade terms.",
      },
    ],
    related: ["antique-furniture-india", "anglo-indian-furniture", "french-antique-furniture", "art-deco-furniture"],
  },

  {
    slug: "antique-furniture-india",
    eyebrow: "India · Nationwide",
    title: "Antique Furniture in India",
    h1: "Antique Furniture in India — Heritage Pieces with Provenance",
    metaTitle: "Antique Furniture India | Vinterior — Since 1955",
    metaDescription:
      "Buy authentic antique furniture in India from Vinterior, a third-generation Mumbai gallery. Period, colonial & European pieces shipped nationwide with provenance.",
    ogTitle: "Antique Furniture India — Vinterior",
    ogDescription:
      "Heritage antique furniture curated in Mumbai and delivered across India. Authenticity, restoration and investment value in every piece.",
    targetKeyword: "Antique Furniture India",
    keywords: [
      "antique furniture India",
      "heritage furniture India",
      "period furniture India",
      "vintage furniture India",
      "buy antique furniture India",
      "luxury antique furniture India",
    ],
    hero: { image: galleryImg, alt: "Vinterior curated antique furniture, India" },
    intro:
      "Vinterior curates antique furniture for a nationwide Indian clientele. From our Mumbai gallery we source, restore and place period pieces with private collectors, interior designers and heritage properties across India — from Delhi and Bengaluru to Goa, Chennai, Hyderabad and beyond.",
    body: [
      {
        h: "Heritage furniture, carefully sourced",
        p: "The best antiques in India rarely reach the open market. They come from estate settlements, quiet family sales, and the slow relationships that a house like ours has built over three generations. This is where Vinterior looks first. We prefer to buy fewer things and know each of them well.",
      },
      {
        h: "Authenticity as a practice",
        p: "Every piece we sell is authenticated in-house. We examine timber, joinery, hardware, tool marks and finish; we compare against reference pieces from the same period; and we write down what we find. If a piece has been restored, that is disclosed. If a component has been replaced, that is disclosed. Nothing about a Vinterior acquisition depends on trust alone.",
      },
      {
        h: "A nationwide clientele",
        p: "Our clients include architects and designers working on luxury residential projects in Delhi and Mumbai, hoteliers commissioning heritage restorations in Rajasthan and Goa, and private collectors furnishing homes in Bengaluru, Hyderabad, Kolkata and Chennai. We ship insured, professionally packed and, where required, with white-glove installation.",
      },
      {
        h: "Period collections we carry",
        p: "Our stock rotates, but broadly covers 18th and 19th-century French and Italian furniture, English Regency and Victorian pieces, Anglo-Indian teak and rosewood, Art Deco cabinetry, Chinese and Japanese lacquerwork, and decorative categories including antique clocks, mirrors, chandeliers, marble and fine glassware.",
      },
      {
        h: "Antique furniture as investment",
        p: "In the last two decades the Indian market for authenticated antique furniture — particularly Anglo-Indian and colonial pieces — has appreciated steadily. Genuine 19th-century pieces are a finite resource. Once refinished, dismantled or lost, they do not return. A well-chosen antique furnishes a home now and holds its value over generations.",
      },
    ],
    faqs: [
      {
        q: "Do you deliver antique furniture across India?",
        a: "Yes. We arrange insured, professionally packed delivery from Mumbai to any city in India, with white-glove installation available on request.",
      },
      {
        q: "How do I know a piece is a genuine antique?",
        a: "Every Vinterior piece is authenticated and comes with a written statement describing its period, origin and any restoration carried out.",
      },
      {
        q: "Do you help with sourcing specific pieces?",
        a: "Yes. If you are looking for a particular period, style or type, we accept sourcing briefs and will contact you when a suitable piece surfaces.",
      },
    ],
    related: ["antique-furniture-mumbai", "art-deco-furniture", "anglo-indian-furniture", "french-antique-furniture"],
  },

  {
    slug: "art-deco-furniture",
    eyebrow: "1920s – 1940s",
    title: "Art Deco Furniture",
    h1: "Art Deco Furniture in India — Bombay Deco and European Originals",
    metaTitle: "Art Deco Furniture India | Vinterior Mumbai",
    metaDescription:
      "Original Art Deco furniture in India — cabinets, seating and decorative pieces from the 1920s–40s, restored and sold with provenance by Vinterior, Mumbai.",
    ogTitle: "Art Deco Furniture in India — Vinterior",
    ogDescription:
      "Original Bombay and European Art Deco furniture from the 1920s and '30s, curated and restored by Vinterior.",
    targetKeyword: "Art Deco Furniture India",
    keywords: [
      "Art Deco furniture India",
      "Bombay Deco furniture",
      "Art Deco furniture Mumbai",
      "1930s furniture India",
      "vintage Art Deco India",
    ],
    hero: { image: cabinetImg, alt: "Art Deco cabinet with burl veneer and chrome trim" },
    intro:
      "Art Deco arrived in India in the 1930s and, in Bombay, became a language of its own. Vinterior holds a small, changing selection of original Art Deco furniture — Bombay Deco cabinets, French and Italian pieces, and decorative objects from the movement's most confident decade.",
    body: [
      {
        h: "A short history",
        p: "Art Deco emerged in Paris in the mid-1920s and travelled fast — to New York, Shanghai and Bombay. In India, the movement met a wealthy interwar middle class building sea-facing apartments along Marine Drive and Churchgate. What resulted, now called Bombay Deco, is a distinct regional dialect: teak and rosewood in place of European timbers, streamlined silhouettes, and detailing adapted to local craft.",
      },
      {
        h: "Characteristics to look for",
        p: "Art Deco furniture is defined by geometry — stepped forms, sunburst motifs, veneered panels arranged in mirrored patterns, and long unbroken curves. Materials matter: burl walnut and macassar ebony in Europe, Burmese teak and rosewood in India, with chrome, glass and lacquer as accents. Handles are inset or cast in Bakelite.",
      },
      {
        h: "Materials and construction",
        p: "The best Deco pieces are veneer over solid frame — the veneer allows the sweeping unbroken figure that is central to the style. Solid components are usually oak, teak or beech. Original hardware is chrome-plated brass. Later reproductions often give themselves away in the veneer joins and in machine-cut, perfectly regular carcass work.",
      },
      {
        h: "A short buying guide",
        p: "Because Art Deco is so heavily reproduced, provenance matters more than in most categories. Look for period-appropriate veneer, oxidised chrome or original lacquer, and construction that shows honest wear. Ask when the piece was made and where it came from before it reached the seller. Vinterior sells only pieces we can trace and describe in writing.",
      },
      {
        h: "Featured in our collection",
        p: "The Vinterior Deco collection typically includes a small number of cocktail cabinets, dressing tables, bureaus, occasional chairs, mirrors and lighting. Because our stock rotates, the best way to see current pieces is to visit the gallery or write to us with a brief.",
      },
    ],
    faqs: [
      {
        q: "What is Bombay Deco?",
        a: "Bombay Deco is the Indian expression of the Art Deco movement, produced in Bombay from the 1930s to the 1940s. It combines the geometric vocabulary of European Deco with Indian timbers — teak and rosewood — and local craftsmanship.",
      },
      {
        q: "How do I know an Art Deco piece is original?",
        a: "Look at the veneer joins, the hardware, the underside and the carcass construction. Original pieces show hand work; reproductions do not. Vinterior issues a written statement of provenance with every piece.",
      },
      {
        q: "Do you sell Art Deco decorative objects as well as furniture?",
        a: "Yes — mirrors, lighting, glassware and small cabinetry from the period are regularly part of our collection.",
      },
    ],
    related: ["antique-furniture-mumbai", "french-antique-furniture", "italian-antique-furniture", "fine-glassware"],
  },

  {
    slug: "french-antique-furniture",
    eyebrow: "France · 18th – 19th Century",
    title: "French Antique Furniture",
    h1: "French Antique Furniture in India — Louis XV, Louis XVI and Provincial",
    metaTitle: "French Antique Furniture India | Vinterior",
    metaDescription:
      "Original French antique furniture in India — Louis XV, Louis XVI, Empire and provincial pieces, curated and restored by Vinterior, Mumbai. Sold with provenance.",
    ogTitle: "French Antique Furniture — Vinterior India",
    ogDescription:
      "Louis XV, Louis XVI, Empire and French provincial furniture, sourced through estate channels and restored in Mumbai.",
    targetKeyword: "French Antique Furniture India",
    keywords: [
      "French antique furniture India",
      "Louis XV furniture India",
      "Louis XVI furniture India",
      "French provincial furniture",
      "French vitrine India",
    ],
    hero: { image: mirrorImg, alt: "French gilt mirror and marquetry commode" },
    intro:
      "French antique furniture has, for two centuries, been the international benchmark of formal elegance. Vinterior holds a curated selection of 18th and 19th-century French pieces — from Louis XV commodes and Louis XVI bureaus to Empire seating and quieter provincial cabinetry.",
    body: [
      {
        h: "The French periods we carry",
        p: "Our collection typically spans Louis XV (rococo, curvilinear, marquetry), Louis XVI (neoclassical, restrained, fluted), Directoire and Empire (architectural, martial motifs), and 19th-century revivals. We also carry provincial pieces from Provence, Normandy and the Loire — walnut, cherry and oak in humbler forms, often more usable in a modern Indian home than their formal counterparts.",
      },
      {
        h: "What to look for",
        p: "Original French pieces show hand-cut dovetails, secondary timbers appropriate to the region (oak in Paris, walnut in Provence), oxidised original hardware, and — on gilded pieces — worn gilt on high points. Marquetry should be laid on a solid substrate, with the pattern reading crisply but not perfectly, since the veneer moves with humidity over two centuries.",
      },
      {
        h: "Living with French antiques in India",
        p: "French furniture responds well to Indian climate when it has been restored responsibly — waxed rather than heavily varnished, kept out of direct sun, and away from air-conditioning vents that dry timber. Every French piece leaving our gallery is prepared for Indian conditions and comes with care notes.",
      },
      {
        h: "Featured categories",
        p: "Commodes and chests, vitrines and display cabinets, bureaus and secretaires, gilt-wood mirrors, dining chairs and fauteuils, chandeliers and sconces. Stock rotates; if you are looking for a specific piece we are happy to source on brief.",
      },
    ],
    faqs: [
      {
        q: "Do you have Louis XV and Louis XVI pieces in stock?",
        a: "Yes, though inventory rotates. Please write to us for the current selection or visit the Mumbai gallery.",
      },
      {
        q: "Is French antique furniture suitable for the Indian climate?",
        a: "Yes, when restored and cared for correctly. Every French piece from Vinterior is prepared for Indian conditions and issued with care instructions.",
      },
      {
        q: "Do you accept sourcing briefs for French antiques?",
        a: "Yes. If you have a specific period, style or piece in mind, we will contact you when a suitable piece surfaces.",
      },
    ],
    related: ["italian-antique-furniture", "art-deco-furniture", "antique-furniture-india", "antique-furniture-mumbai"],
  },

  {
    slug: "italian-antique-furniture",
    eyebrow: "Italy · 17th – 19th Century",
    title: "Italian Antique Furniture",
    h1: "Italian Antique Furniture in India — Baroque, Neoclassical and Venetian",
    metaTitle: "Italian Antique Furniture India | Vinterior",
    metaDescription:
      "Original Italian antique furniture in India — Venetian, Tuscan, Baroque and neoclassical pieces, curated by Vinterior, Mumbai. Restored, authenticated and shipped.",
    ogTitle: "Italian Antique Furniture — Vinterior India",
    ogDescription:
      "Baroque, Venetian and neoclassical Italian antique furniture, curated in Mumbai for Indian collectors and designers.",
    targetKeyword: "Italian Antique Furniture India",
    keywords: [
      "Italian antique furniture India",
      "Venetian furniture India",
      "Baroque furniture India",
      "Tuscan antique furniture",
      "Italian gilt furniture",
    ],
    hero: { image: chandelierImg, alt: "Italian gilt-wood console and chandelier" },
    intro:
      "Italian antique furniture is exuberant where French is restrained — carved, gilded, and confident. Vinterior curates a small selection of Venetian, Tuscan, Piedmontese and neoclassical Italian pieces, chosen for craftsmanship and for the way they hold their own in an Indian interior.",
    body: [
      {
        h: "Regional traditions",
        p: "Italy did not become a single country until 1861, and its furniture reflects this. Venetian pieces are lacquered, painted and gilded, often with floral polychromy. Tuscan pieces are walnut, sober, and heavily carved. Piedmontese cabinetry is inlaid and refined, shaped by French neighbours. Southern pieces from Naples and Sicily are baroque and generous.",
      },
      {
        h: "What we look for",
        p: "Original polychromy and gilding are near-impossible to fake convincingly. We look at how paint has worn on edges, at gesso losses that reveal ground layers, at the honesty of carving depth, and at joinery that matches the period. Italian pieces are also more likely than French to have honest repairs from centuries of use — this is not a fault; it is history.",
      },
      {
        h: "Placing Italian pieces in Indian homes",
        p: "A single Italian gilt console or a pair of Venetian side chairs can transform a room without dominating it. Because Italian craftsmen worked at scale for large villas, pieces are generous — we advise on scale and placement before delivery, particularly in Mumbai apartment interiors.",
      },
      {
        h: "In our collection",
        p: "Consoles, mirrors, painted commodes, gilt-wood seating, occasional chandeliers, and — periodically — larger cabinetry from northern Italy. As with all our categories, stock rotates.",
      },
    ],
    faqs: [
      {
        q: "Are Venetian pieces still available in India?",
        a: "Yes, though increasingly rare. Original Venetian polychromed pieces are a limited resource internationally, and prices reflect this. We source through estate and private channels.",
      },
      {
        q: "How large are Italian antique pieces?",
        a: "Italian pieces vary widely. We advise on scale before delivery and can arrange installation trials for larger acquisitions.",
      },
    ],
    related: ["french-antique-furniture", "art-deco-furniture", "antique-furniture-india", "fine-glassware"],
  },

  {
    slug: "anglo-indian-furniture",
    eyebrow: "India · 18th – 19th Century",
    title: "Anglo-Indian Furniture",
    h1: "Anglo-Indian Furniture — Bombay, Madras and Ceylon Schools",
    metaTitle: "Anglo Indian Furniture | Vinterior India",
    metaDescription:
      "Original Anglo-Indian furniture from the Bombay, Madras and Ceylon schools — carved teak, rosewood and ebony pieces, curated and restored by Vinterior, Mumbai.",
    ogTitle: "Anglo-Indian Furniture — Vinterior India",
    ogDescription:
      "19th-century Anglo-Indian teak, rosewood and ebony furniture, curated in Mumbai. Sold with provenance and restored by hand.",
    targetKeyword: "Anglo Indian Furniture",
    keywords: [
      "Anglo Indian furniture",
      "Anglo-Indian furniture India",
      "Bombay furniture 19th century",
      "colonial furniture India",
      "Burmese teak furniture",
      "Ceylon ebony furniture",
    ],
    hero: { image: armchairImg, alt: "Anglo-Indian carved teak planter's chair" },
    intro:
      "Anglo-Indian furniture is a category Vinterior has specialised in from the beginning. It is the furniture our grandfather sourced in 1955 and it remains, in our view, one of the most under-appreciated areas of world antiques.",
    body: [
      {
        h: "The three regional schools",
        p: "Bombay work is dense, floral and often inlaid with ivory or bone. Madras work is architectural, restrained, and carved in rosewood. Ceylon (Sri Lankan) work is ebony — dark, fine-grained, and worked with a delicacy the timber invites. Burmese teak from what is now Myanmar produced heavier carved pieces that later travelled back to merchant homes in Bombay.",
      },
      {
        h: "What makes it collectible",
        p: "These pieces sit at a genuine intersection of two traditions — European form, Indian craft. They were made in small numbers by named workshops, in timbers that no longer come out of the forest, and they were built to last. Genuine 19th-century pieces are increasingly rare; the pool is small and shrinking.",
      },
      {
        h: "Common categories",
        p: "Planter's chairs, campaign chests, writing bureaus, four-poster beds, carved sideboards, ecclesiastical pieces from Goa, teak and rosewood dining sets. Ceylon ebony pieces — occasional tables, sewing boxes and small cabinets — appear periodically.",
      },
      {
        h: "Investment value",
        p: "Anglo-Indian furniture has appreciated steadily in the Indian market over the last twenty years. Because the category is finite, well-provenanced pieces tend to hold value and, in many cases, exceed original acquisition cost within a decade of purchase.",
      },
    ],
    faqs: [
      {
        q: "What timbers are used in Anglo-Indian furniture?",
        a: "Primarily Burmese teak, Indian and Sri Lankan rosewood, and Ceylon ebony. Inlay is often ivory (on older pieces), bone (on later pieces) or contrasting timbers.",
      },
      {
        q: "How can I tell a Bombay piece from a Madras piece?",
        a: "Bombay carving is denser and more floral; Madras work is architectural, uses more rosewood, and is generally more restrained. Vinterior's provenance notes identify the school on every piece.",
      },
      {
        q: "Are these pieces suitable for daily use?",
        a: "Yes. Anglo-Indian furniture was built for hard use in a demanding climate and, when properly cared for, is one of the most durable categories of antique furniture available.",
      },
    ],
    related: ["antique-furniture-mumbai", "antique-furniture-india", "japanese-antique-furniture", "chinese-antique-furniture"],
  },

  {
    slug: "japanese-antique-furniture",
    eyebrow: "Japan · Edo & Meiji",
    title: "Japanese Antique Furniture",
    h1: "Japanese Antique Furniture — Tansu, Lacquer and Meiji Cabinetry",
    metaTitle: "Japanese Antique Furniture | Vinterior India",
    metaDescription:
      "Original Japanese antique furniture — tansu chests, Meiji lacquer cabinets and Edo-period pieces, curated by Vinterior, Mumbai. Restored and authenticated.",
    ogTitle: "Japanese Antique Furniture — Vinterior",
    ogDescription:
      "Japanese tansu, lacquerwork and Meiji-period cabinetry, curated in Mumbai for Indian collectors.",
    targetKeyword: "Japanese Antique Furniture",
    keywords: [
      "Japanese antique furniture",
      "Japanese tansu India",
      "Meiji cabinet India",
      "Japanese lacquer furniture",
      "antique Japanese cabinets",
    ],
    hero: { image: gallery3, alt: "Japanese lacquer cabinet and tansu chest" },
    intro:
      "Japanese antique furniture is defined by restraint. It is what remains after everything unnecessary has been removed. Vinterior occasionally holds Edo and Meiji-period pieces — tansu chests, choba-dansu, and lacquerwork cabinets — chosen for their proportion and their honesty of material.",
    body: [
      {
        h: "Tansu — the essential category",
        p: "Tansu is the generic term for Japanese chests. They come in many specialised forms: kaidan-dansu (staircase chests), funa-dansu (ship chests), isho-dansu (clothing chests), and cha-dansu (tea chests). Original tansu are built in kiri (paulownia), keyaki (zelkova) or hinoki (cypress), with wrought-iron mounts and hand-cut joinery.",
      },
      {
        h: "Meiji lacquerwork",
        p: "The Meiji period (1868–1912) produced some of Japan's most technically ambitious lacquer cabinets — often with gold hiramaki-e decoration, mother-of-pearl inlay, and ivory or silver mounts. These were made largely for export and are now widely collected internationally.",
      },
      {
        h: "In an Indian interior",
        p: "A single Japanese piece — a tansu at the end of a corridor, a small lacquer cabinet in a study — anchors a room without competing with it. This is furniture that lets other things breathe.",
      },
    ],
    faqs: [
      {
        q: "How rare are original Edo-period tansu in India?",
        a: "Very rare on the open market. When we source them it is usually through international auction or estate channels, and we handle them with unusual care.",
      },
      {
        q: "Is Japanese lacquer suitable for the Indian climate?",
        a: "Yes, if kept out of direct sunlight and away from extremes of humidity. We prepare and advise on placement for every lacquered piece we sell.",
      },
    ],
    related: ["chinese-antique-furniture", "anglo-indian-furniture", "antique-furniture-india", "fine-glassware"],
  },

  {
    slug: "chinese-antique-furniture",
    eyebrow: "China · Qing Dynasty & Earlier",
    title: "Chinese Antique Furniture",
    h1: "Chinese Antique Furniture — Huanghuali, Elm and Lacquered Pieces",
    metaTitle: "Chinese Antique Furniture | Vinterior India",
    metaDescription:
      "Original Chinese antique furniture in India — Qing dynasty cabinets, elm and rosewood pieces, and lacquered cabinets, curated and restored by Vinterior, Mumbai.",
    ogTitle: "Chinese Antique Furniture — Vinterior",
    ogDescription:
      "Qing dynasty and earlier Chinese cabinetry, sourced and restored in Mumbai.",
    targetKeyword: "Chinese Antique Furniture",
    keywords: [
      "Chinese antique furniture",
      "Qing dynasty furniture",
      "Chinese cabinet India",
      "huanghuali furniture",
      "Chinese lacquer cabinet",
    ],
    hero: { image: gallery4, alt: "Chinese lacquered cabinet with brass mounts" },
    intro:
      "Chinese antique furniture, at its best, is an object lesson in structural clarity. Traditional Ming and Qing forms use no nails and rely on precisely cut joinery — mortise and tenon, dovetail and dowel — to hold together for centuries. Vinterior periodically holds Qing dynasty pieces and later provincial cabinetry, chosen for construction as much as for surface.",
    body: [
      {
        h: "Materials",
        p: "The most prized Chinese timber is huanghuali, a slow-growing rosewood now essentially extinct; genuine huanghuali pieces are rare and valuable. More commonly we handle elm, walnut, cypress, and lacquered softwoods — the material of provincial cabinetry, which is often extraordinary and undervalued.",
      },
      {
        h: "Lacquered cabinets",
        p: "Chinese lacquerwork ranges from cinnabar-red carved lacquer to painted and gilded scenes on black grounds. Provincial pieces — from Shanxi, Gansu and Fujian — often use bold red or ochre grounds with hand-painted panels of figures, landscapes or peonies.",
      },
      {
        h: "Placing Chinese pieces",
        p: "Because Chinese cabinetry is architecturally strong, it works particularly well against plain walls and in transitional spaces — entryways, hallways, at the foot of beds. We advise on scale and light before every delivery.",
      },
    ],
    faqs: [
      {
        q: "How can I tell if a Chinese piece is genuinely antique?",
        a: "Look at joinery (Chinese antiques use nailless construction), at oxidation on original hardware, at the interior surfaces (which should show honest tool marks), and at the honesty of the lacquer surface. We authenticate every piece in-house.",
      },
      {
        q: "Do you carry huanghuali pieces?",
        a: "Occasionally. Genuine huanghuali is rare internationally. We only offer pieces we can authenticate and describe with confidence.",
      },
    ],
    related: ["japanese-antique-furniture", "anglo-indian-furniture", "antique-furniture-india", "antique-marble"],
  },

  {
    slug: "antique-clocks-horology",
    eyebrow: "Horology · 18th – 20th Century",
    title: "Antique Clocks & Horology",
    h1: "Antique Clocks in India — Longcase, Bracket and Carriage Timepieces",
    metaTitle: "Antique Clocks India | Vinterior Horology",
    metaDescription:
      "Antique clocks in India — longcase, bracket, carriage and mantel timepieces from Europe and India, curated by Vinterior. Serviced, restored and authenticated.",
    ogTitle: "Antique Clocks & Horology — Vinterior",
    ogDescription:
      "Longcase, bracket, carriage and mantel clocks, curated and serviced by Vinterior for Indian collectors.",
    targetKeyword: "Antique Clocks India",
    keywords: [
      "antique clocks India",
      "horology India",
      "longcase clock India",
      "bracket clock India",
      "antique mantel clock",
      "collectible timepieces India",
    ],
    hero: { image: gallery5, alt: "Antique longcase clock and bracket clocks" },
    intro:
      "Horology — the art and study of measuring time — has produced some of the most technically ambitious objects ever built by hand. Vinterior curates a selection of antique clocks alongside our furniture: longcase (grandfather) clocks, bracket clocks, carriage clocks, mantel and wall pieces.",
    body: [
      {
        h: "The categories we handle",
        p: "English longcase clocks from the 18th and early 19th centuries; French mantel clocks in gilt bronze and marble; Vienna regulators; carriage clocks in the classic brass-cased form; and later Art Deco table clocks. Movements are examined, serviced where necessary, and sold with confidence.",
      },
      {
        h: "What to look for",
        p: "The case matters, but the movement matters more. Original movements will show honest wear, correct signatures (where present), and construction consistent with the maker and period. Replaced movements — common in decorative pieces — should always be disclosed.",
      },
      {
        h: "Servicing and warranty",
        p: "Every clock leaving our gallery has been inspected by a specialist. Where required, movements are cleaned and regulated. We can advise on ongoing service intervals and, for Mumbai clients, arrange servicing directly.",
      },
    ],
    faqs: [
      {
        q: "Are the movements original?",
        a: "Wherever a movement has been replaced, we disclose this in writing. Original movements are always preferred and priced accordingly.",
      },
      {
        q: "Do you service clocks after sale?",
        a: "Yes. For clients in Mumbai we arrange servicing directly; for other locations we can advise on qualified specialists.",
      },
    ],
    related: ["fine-glassware", "antique-marble", "art-deco-furniture", "french-antique-furniture"],
  },

  {
    slug: "fine-glassware",
    eyebrow: "Glass · 19th – Early 20th Century",
    title: "Fine Antique Glassware",
    h1: "Antique Glassware in India — Bohemian, Baccarat and Murano",
    metaTitle: "Antique Glassware India | Vinterior Fine Glass",
    metaDescription:
      "Antique glassware in India — Bohemian, Baccarat, Saint-Louis and Murano pieces from the 19th and early 20th centuries, curated by Vinterior, Mumbai.",
    ogTitle: "Antique Glassware — Vinterior India",
    ogDescription:
      "Bohemian cut crystal, French Baccarat, Saint-Louis and Murano glass, curated for Indian collectors.",
    targetKeyword: "Antique Glassware India",
    keywords: [
      "antique glassware India",
      "Bohemian crystal India",
      "Baccarat India",
      "Saint-Louis crystal",
      "Murano glass India",
      "antique decanters India",
    ],
    hero: { image: gallery6, alt: "Antique Bohemian cut crystal and Baccarat decanters" },
    intro:
      "Fine glassware, at its best, is an unlikely material — molten sand, worked by breath and hand, surviving intact across two centuries. Vinterior curates a small collection of antique glass: Bohemian cut crystal, French Baccarat and Saint-Louis, Murano coloured glass, and occasional Anglo-Indian cut pieces.",
    body: [
      {
        h: "Bohemian and central European",
        p: "The Bohemian tradition — from what is now the Czech Republic — produced some of the finest cut crystal of the 19th century. Ruby-overlay and cobalt-overlay pieces, cut through to clear, are particularly collected. Signed pieces from Moser and Lobmeyr are increasingly rare.",
      },
      {
        h: "French crystal",
        p: "Baccarat and Saint-Louis remain the reference points for French crystal. Decanters, drinking sets and stemware from the late 19th and early 20th centuries turn up periodically in Indian estates — often from families that entertained on scale.",
      },
      {
        h: "Murano",
        p: "Venetian glass from Murano — millefiori paperweights, latticino, and coloured chandelier drops — represents a distinct tradition. We carry occasional Murano pieces, chosen for age and condition.",
      },
      {
        h: "Condition and authenticity",
        p: "Antique glass is fragile by nature. Chips, roughness on rims and hairline cracks are usual and disclosed. Signatures matter: unsigned pieces are not necessarily lesser, but signed pieces carry a documentation trail that is worth having.",
      },
    ],
    faqs: [
      {
        q: "Do you carry complete stemware sets?",
        a: "Occasionally. Complete matched sets of period stemware are difficult to source; we hold what we find and rebuild sets where possible.",
      },
      {
        q: "Can I use antique glassware?",
        a: "Yes — carefully. Most antique glass is dishwasher-unsafe and should be hand-washed. We provide care notes with every piece.",
      },
    ],
    related: ["antique-clocks-horology", "antique-marble", "italian-antique-furniture", "art-deco-furniture"],
  },

  {
    slug: "antique-marble",
    eyebrow: "Marble · 19th – 20th Century",
    title: "Antique Marble Collection",
    h1: "Antique Marble in India — Carrara, Verde and Statuary Pieces",
    metaTitle: "Antique Marble Decor India | Vinterior",
    metaDescription:
      "Antique marble décor in India — Carrara statuary, verde antico tabletops, sculpture and architectural pieces, curated and restored by Vinterior, Mumbai.",
    ogTitle: "Antique Marble Collection — Vinterior India",
    ogDescription:
      "Carrara statuary, verde antico tabletops and architectural marble, curated in Mumbai.",
    targetKeyword: "Antique Marble Decor",
    keywords: [
      "antique marble decor",
      "antique marble India",
      "Carrara statuary India",
      "marble sculpture India",
      "antique marble tabletop",
    ],
    hero: { image: gallery2, alt: "Antique Carrara marble sculpture and console top" },
    intro:
      "Marble occupies a category of its own — architectural, sculptural, and, when antique, extraordinarily varied. Vinterior curates antique marble pieces alongside our furniture: Carrara statuary, verde antico and rouge royal tabletops, small sculpture, urns, and architectural fragments.",
    body: [
      {
        h: "What we carry",
        p: "Small-scale 19th-century Italian sculpture, marble-topped consoles and centre tables (often paired with original bases), pairs of urns, small architectural columns, and occasional garden pieces. Colour and grain vary — from pure Carrara white to the deep greens of verde antico and the ruddy reds of rouge royal.",
      },
      {
        h: "Authenticating antique marble",
        p: "Marble ages honestly. Look for veining that is continuous rather than printed, natural patina on high points and lower surfaces, and — on sculpture — chisel marks appropriate to the period. Modern reproductions are usually cast in composite or in modern quarried stone that lacks the character of 19th-century blocks.",
      },
      {
        h: "Placement and care",
        p: "Antique marble is heavy — we advise on floor loading and support before delivery. Marble should be sealed and, when polished, done so carefully to preserve original surface. We arrange placement and, where relevant, restoration.",
      },
    ],
    faqs: [
      {
        q: "Is antique marble suitable for outdoor use?",
        a: "Some pieces — garden urns and architectural fragments — were made for outdoor use and can be returned to it. Sculpture and interior pieces should stay indoors.",
      },
      {
        q: "Can antique marble be restored?",
        a: "Yes, though restoration is a delicate art. Vinterior works with specialists on cleaning, sealing and, where needed, structural repair.",
      },
    ],
    related: ["italian-antique-furniture", "antique-clocks-horology", "fine-glassware", "anglo-indian-furniture"],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
