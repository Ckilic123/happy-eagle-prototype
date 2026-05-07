export type Category = "top" | "bottom" | "dress" | "skirt";

export type Item = {
  slug: string;
  name: string;
  category: Category;
  subcategory: string;
  primaryColor: string;
  pattern: string;
  formality: 1 | 2 | 3 | 4 | 5;
  warmth: 1 | 2 | 3 | 4 | 5;
  image: string;
};

export const items: Item[] = [
  {
    slug: "striped-blouse",
    name: "Striped Blouse",
    category: "top",
    subcategory: "Long-sleeve blouse",
    primaryColor: "Navy",
    pattern: "Vertical stripes",
    formality: 3,
    warmth: 3,
    image: "/wardrobe/striped-blouse.png",
  },
  {
    slug: "chambray-dress",
    name: "Chambray Dress",
    category: "dress",
    subcategory: "Bell-sleeve mini dress",
    primaryColor: "Light blue",
    pattern: "Solid",
    formality: 2,
    warmth: 2,
    image: "/wardrobe/chambray-dress.png",
  },
  {
    slug: "orange-pants",
    name: "Orange Cargo Pants",
    category: "bottom",
    subcategory: "Cargo trousers",
    primaryColor: "Burnt orange",
    pattern: "Solid",
    formality: 1,
    warmth: 3,
    image: "/wardrobe/orange-pants.png",
  },
  {
    slug: "black-trousers",
    name: "Black Flared Trousers",
    category: "bottom",
    subcategory: "Flared trousers",
    primaryColor: "Black",
    pattern: "Solid",
    formality: 4,
    warmth: 3,
    image: "/wardrobe/black-trousers.png",
  },
  {
    slug: "snake-skirt",
    name: "Snake-print Pencil Skirt",
    category: "skirt",
    subcategory: "Knee-length pencil skirt",
    primaryColor: "Black & white",
    pattern: "Snake print",
    formality: 3,
    warmth: 2,
    image: "/wardrobe/snake-skirt.png",
  },
];

export function findItem(slug: string): Item | undefined {
  return items.find((i) => i.slug === slug);
}

export type Outfit = {
  itemSlugs: string[];
  reasoning: string;
  stylingTips: string[];
  accessoryHint: { suggestion: string; retailerNote?: string };
};

// Hardcoded outfit suggestions per seed item — prototype only.
export const outfitsBySeed: Record<string, Outfit[]> = {
  "striped-blouse": [
    {
      itemSlugs: ["striped-blouse", "black-trousers"],
      reasoning:
        "A clean smart-casual pairing. The vertical stripes lengthen the line; the flare softens the formality.",
      stylingTips: [
        "Tuck the blouse in at the front only — half-tuck reads modern, not stiff.",
        "Push the sleeves up just below the elbow.",
      ],
      accessoryHint: {
        suggestion:
          "A delicate gold pendant would echo the long lines. Anything in your jewellery box that fits?",
      },
    },
    {
      itemSlugs: ["striped-blouse", "snake-skirt"],
      reasoning:
        "Two patterns, both monochrome — a confident pairing that stays calm because the palette agrees.",
      stylingTips: [
        "Full tuck this time. Define the waist.",
        "Keep shoes plain — the prints are doing the work.",
      ],
      accessoryHint: {
        suggestion:
          "A thin black belt would seal the waist. Likely already in a drawer somewhere.",
      },
    },
    {
      itemSlugs: ["striped-blouse", "orange-pants"],
      reasoning:
        "A weekend pairing with attitude. The neutral blouse anchors the orange so it reads as intentional, not loud.",
      stylingTips: [
        "Leave the blouse loose. The volume softens the cargo's structure.",
        "Roll the cuffs once for an unstudied feel.",
      ],
      accessoryHint: {
        suggestion:
          "A simple white sneaker or warm tan loafer keeps it grounded.",
        retailerNote: "Browse Vinted",
      },
    },
  ],
  "chambray-dress": [
    {
      itemSlugs: ["chambray-dress"],
      reasoning:
        "Lets the dress speak. Bell sleeves are already a statement — let them.",
      stylingTips: [
        "Cinch with a thin belt to break the silhouette.",
        "Bare leg in summer, opaque tights when it cools.",
      ],
      accessoryHint: {
        suggestion:
          "A small gold hoop or a quiet pendant. Nothing competing with the sleeves.",
      },
    },
  ],
  "orange-pants": [
    {
      itemSlugs: ["orange-pants", "striped-blouse"],
      reasoning:
        "Pattern up top, colour down low. The stripes anchor; the orange does the talking.",
      stylingTips: [
        "Half-tuck the blouse to break the colour block.",
        "Cuff the pants once to show the ankle.",
      ],
      accessoryHint: {
        suggestion:
          "A neutral leather belt — tan or chocolate. Probably one already in your closet.",
      },
    },
  ],
  "black-trousers": [
    {
      itemSlugs: ["black-trousers", "striped-blouse"],
      reasoning:
        "An effortless office uniform. Black trousers + a printed top is the formula that always works.",
      stylingTips: [
        "Half-tuck for ease, full-tuck for a meeting.",
        "Sleeves rolled to elbow keeps it from feeling severe.",
      ],
      accessoryHint: {
        suggestion: "Pointed loafers or a simple ballet flat.",
      },
    },
  ],
  "snake-skirt": [
    {
      itemSlugs: ["snake-skirt", "striped-blouse"],
      reasoning:
        "A confident mix of patterns held together by a strict monochrome palette.",
      stylingTips: [
        "Full tuck. The waist line matters here.",
        "Plain shoes — let the print speak.",
      ],
      accessoryHint: {
        suggestion: "A thin black belt finishes the waist cleanly.",
      },
    },
  ],
};
