import { Armchair, Building2, Gem, Hammer, History, Palette, PaintBucket, Ruler, Sofa, Sparkles, Star, Wrench, Mail } from "lucide-react";
import { HouzzIcon, InstagramIcon, LinkedInIcon, PinterestIcon, YelpIcon } from "./social-icons.jsx";
import logo from "./assets/ablyss-logo.png";
import expertiseAward from "./assets/expertise-best-upholstery-denver.png";

const COMPANY = "Ablyss Upholstery & Refinishing";
const MAPS_QUERY = "Ablyss Upholstery & Refinishing, Denver, CO";
const FOUNDED = 1954;
const YEARS = new Date().getFullYear() - FOUNDED;

export default {
  COMPANY,
  ABBR: "aur",
  NOUN: "workshop",
  PHONE: "3039350949",
  PHONE_DISPLAY: "(303) 935-0949",
  EMAIL: "sales@ablyss.com",
  ADDRESS: "", // Not listed on the current site; confirm with the shop.
  CITY: "Denver, CO",
  MAPS_QUERY,
  FOUNDED,
  GOOGLE_PLACE_ID: "",
  FALLBACK_RATING: null, // Thin review count; show the Google link only.
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: { name: "Ablyss", sub: `UPHOLSTERY & REFINISHING · ${FOUNDED}`, icon: Armchair, logo, logoAlt: COMPANY },
  ANNOUNCE: `Denver's upholstery and refinishing workshop since ${FOUNDED} · Fourth-generation master craftsman`,

  // Shown on the current ablyss.com homepage.
  AWARDS: {
    eyebrow: "RECOGNITION",
    text: "Named one of the best upholstery services in Denver by Expertise.",
    items: [{ img: expertiseAward, title: "Best Upholstery Services in Denver", issuer: "Expertise" }],
  },

  HOURS: [], // Not listed on the current site; confirm with the shop.
  HOURS_SHORT: "",

  HERO: {
    eyebrow: `DENVER, COLORADO · SINCE ${FOUNDED}`,
    title: ["Every good piece deserves ", "a second life."],
    text: "Upholstery, refinishing, antique restoration and custom furniture, crafted in-house by a fourth-generation master craftsman. Careful work, attention to detail and quality materials, the same way we've done it for seven decades.",
    cta: "Start a Project",
    // Their own work, from the gallery on ablyss.com.
    photo: { src: "/photos/custom-sectional-corner-table.webp", alt: "Custom sectional sofa with a built-in corner end table in a mid-century living room" },
    badgeKicker: "SINCE",
    badgeBig: String(FOUNDED),
    badgeSmall: `${YEARS} years of craftsmanship in Denver`,
    card: [
      { icon: Gem, title: "Antique restoration", text: "Heirlooms handled with care" },
      { icon: Hammer, title: "Built in-house", text: "Custom furniture made to order" },
      { icon: Mail, title: "sales@ablyss.com", text: "Send photos for a quote" },
    ],
  },

  STATS: () => [
    [String(FOUNDED), "Family craft since"],
    ["4th gen", "Master craftsman"],
    [`${YEARS} yrs`, "Serving Colorado"],
    ["In-house", "Custom furniture"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Restore it, refinish it, ", "or build it new."],
    text: "From a family heirloom to a full restaurant of booths, every piece gets the same attention to detail.",
    cta: "Start a project",
    items: [
      { title: "Furniture Upholstery", desc: "Sofas, chairs and headboards rebuilt and recovered in the fabric you choose.", icon: Armchair },
      { title: "Furniture Refinishing", desc: "Worn finishes stripped, repaired and brought back to a rich, lasting shine.", icon: PaintBucket },
      { title: "Antique Restoration", desc: "Period-appropriate restoration that protects the value and story of a piece.", icon: Gem },
      { title: "Furniture Repair", desc: "Loose joints, broken frames, sagging springs and damaged veneers made sound.", icon: Wrench },
      { title: "Custom Furniture", desc: "One-of-a-kind pieces designed and built in our workshop.", icon: Ruler },
      { title: "Commercial Upholstery", desc: "Durable seating for restaurants, offices and hospitality spaces.", icon: Building2 },
      { title: "Upholstery Fabrics", desc: "Help choosing fabrics that suit the piece and how you live with it.", icon: Palette },
      { title: "Restoration", desc: "Complete restorations that combine repair, refinishing and upholstery.", icon: Sparkles },
    ],
  },

  FEATURE: {
    id: "work",
    nav: "Our Work",
    eyebrow: "WHAT WE WORK ON",
    title: ["Three kinds of pieces. ", "One standard of care."],
    text: "Whether it's worth thousands or simply priceless to you, it gets a craftsman's attention.",
    cards: [
      { name: "Heirlooms & antiques", icon: History, lead: "Pieces with a past.", items: ["Careful, reversible repairs", "Period-appropriate finishes", "Original details preserved"] },
      { name: "Everyday favorites", icon: Sofa, lead: "The chair you won't give up.", items: ["New foam, springs and webbing", "Fresh fabric of your choice", "Refinished frames and legs"] },
      { name: "Commercial & designer", icon: Building2, lead: "For designers and businesses.", items: ["Trade work for interior designers", "Booths and banquettes", "Custom pieces to spec"] },
    ],
  },

  GALLERY: {
    id: "gallery",
    nav: "Gallery",
    eyebrow: "RECENT WORK",
    title: ["Pieces from ", "our workshop."],
    text: "A few recent projects from the Ablyss gallery: custom builds, reupholstery and refinishing for Denver homes and businesses.",
    items: [
      { src: "/photos/sectional-living-room.webp", caption: "Roche Bobois styled sectional", tag: "Custom furniture" },
      { src: "/photos/dining-banquette.webp", caption: "Custom dining banquette", tag: "Custom furniture" },
      { src: "/photos/striped-wingback-chair.webp", caption: "Multi-color wingback chairs", tag: "Residential upholstery" },
      { src: "/photos/walnut-table.webp", caption: "Walnut table", tag: "Custom furniture" },
      { src: "/photos/wall-panels-seat-cushions.webp", caption: "Wall panels and seat cushions", tag: "Commercial upholstery" },
      { src: "/photos/custom-sectional.webp", caption: "Custom sectional", tag: "Residential upholstery" },
      { src: "/photos/coffee-table-trays.webp", caption: "Custom coffee table with serving trays", tag: "Custom furniture" },
      { src: "/photos/hair-on-hide-ottoman.webp", caption: "Ottoman in hair-on-hide", tag: "Custom furniture" },
      { src: "/photos/broncos-chair.webp", caption: "Broncos chair", tag: "Residential upholstery" },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["From worn out ", "to heirloom again."],
    text: "Clear steps, honest pricing and no surprises.",
    steps: [
      ["Send photos", "Email or upload a few pictures and tell us what you'd like."],
      ["Get a quote", "We recommend the right approach and give you a clear price."],
      ["Choose materials", "Pick fabrics and finishes with our help."],
      ["We craft it", "Your piece is restored or built in-house and ready for its second life."],
    ],
  },

  ABOUT: {
    nav: "Our Story",
    eyebrow: `FOUR GENERATIONS · SINCE ${FOUNDED}`,
    title: ["A family craft, ", "handed down."],
    text: [
      `Ablyss has been a Denver upholstery and refinishing shop since ${FOUNDED}. Today the work is led by a fourth-generation master craftsman, and every piece, from a dining chair to a custom sectional, is still built and finished in-house.`,
      "Interior designers and homeowners come back for the same reasons: careful work, attention to detail and quality materials.",
    ],
    badge: [String(FOUNDED), "Four generations"],
    // Their own work, from the gallery on ablyss.com.
    tiles: [
      { label: "Upholstery", photo: "/photos/chair-before-after.webp", alt: "Armchair before and after reupholstery" },
      { label: "Refinishing", photo: "/photos/desk-refinishing.webp", alt: "Desk top before and after refinishing" },
      { label: "Antiques", photo: "/photos/antique-nightstand.webp", alt: "Restored antique nightstand" },
      { label: "Custom", photo: "/photos/custom-sofa.webp", alt: "Custom sofa built in the Ablyss workshop" },
    ],
    credentials: [
      { title: `Since ${FOUNDED}`, desc: "Seven decades of Denver craftsmanship." },
      { title: "Fourth-generation craftsman", desc: "Skills handed down through the family." },
      { title: "Built in-house", desc: "Custom furniture made in our own workshop." },
      { title: "Designer trusted", desc: "Trade work for Denver interior designers." },
    ],
  },

  REVIEWS: {
    title: ["Loved by designers ", "and homeowners."],
    text: "Read what customers say about Ablyss on Google, Houzz and Yelp.",
    quoteSource: "Interior Designer, Allied ASID · testimonial on the current website",
    quotes: [["They LOVE everything!", "Jessica Moore"]],
  },

  BOOK: {
    nav: "Start a Project",
    eyebrow: "START A PROJECT",
    title: ["Tell us about ", "your piece."],
    text: "Describe the piece and what you'd like done. Email photos to sales@ablyss.com and we'll follow up with a recommendation and quote.",
    points: ["Free quotes", "Antiques handled with care", "Custom work built in-house"],
    submit: "Request a Quote",
    note: "We'll call or email with next steps. Prefer to talk now? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Furniture Upholstery", "Furniture Refinishing", "Antique Restoration", "Furniture Repair", "Custom Furniture", "Commercial Upholstery", "Not sure"] }],
      { name: "piece", label: "The piece", placeholder: "e.g. 1940s wingback chair, walnut dining table" },
      { name: "notes", label: "What you'd like done", type: "textarea", placeholder: "Condition, fabric or finish ideas, timing…" },
    ],
  },

  VISIT: {
    nav: "Contact",
    eyebrow: "CONTACT THE WORKSHOP",
    title: ["Let's talk about ", "your furniture."],
    areas: "Serving Denver and communities across Colorado.",
  },

  FOOTER_BLURB: `Upholstery, refinishing, antique restoration and custom furniture in Denver since ${FOUNDED}.`,
  // `top` links also show in the bar above the header, next to the phone number.
  SOCIAL_LINKS: [
    { name: "Instagram", url: "https://www.instagram.com/ablyss_furniture/", icon: InstagramIcon, top: true },
    { name: "Pinterest", url: "https://www.pinterest.com/ablyssupholsteryrefinishing/", icon: PinterestIcon, top: true },
    { name: "Houzz", url: "https://www.houzz.com/pro/jb-ablyss/ablyss-upholstery-and-refinishing", icon: HouzzIcon, top: true },
    { name: "Yelp", url: "https://www.yelp.com/biz/ablyss-upholstery-and-refinishing-denver", icon: YelpIcon, top: true },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/3231458", icon: LinkedInIcon, top: true },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
