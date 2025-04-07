import { Product } from '../components/products/ProductCard';

// Product images (placeholders, you'll need to replace with actual image paths)
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/500x500';

// Categories
export const CATEGORIES = {
  LIP_CARE: 'Lip Care',
  BODY_CARE: 'Body Care',
  FACE_CARE: 'Face Care',
  HAIR_CARE: 'Hair Care',
  OTHER: 'Other'
};

export const products: Product[] = [
  // Lip Care Products
  {
    id: 1,
    name: 'Lip Scrub',
    description: 'Get rid of your lip pigmentation with this natural solution! Gives your lips the gentle exfoliation to remove all the dead skin cells and make it super soft, all this with natural ingredients.',
    price: 250,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Lip+Scrub`,
    category: CATEGORIES.LIP_CARE
  },
  {
    id: 2,
    name: 'Lip Balm',
    description: "Peachy Glow's lip balm is made with Shea Butter, Almond Oil, Beetroot powder, Coconut oil, and extra love. Helps with dry lips and chapped lips.",
    price: 180,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Lip+Balm`,
    category: CATEGORIES.LIP_CARE
  },

  // Body Care Products
  {
    id: 3,
    name: 'Whipped Soap',
    description: 'Our Whipped Soap is a semi-solid, fluffy, and creamy blend that doubles as a luxurious body wash and a gentle shaving cream. Infused with 40% glycerin and plant-based ingredients, it softens and hydrates your skin without leaving it dry. Available in delightful fragrances like Pink Rose, Lavender, Haldi Kesar, Tutti Fruity, Chocolate Vanilla, and Cocoa Coffee.',
    price: 350,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Whipped+Soap`,
    category: CATEGORIES.BODY_CARE
  },
  {
    id: 4,
    name: 'Whipped Scrub',
    description: "Peachy Glow's Whipped scrub is loaded with walnut. Exfoliates your skin gently and makes it super soft. Helps in removing dead skin cells naturally.",
    price: 400,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Whipped+Scrub`,
    category: CATEGORIES.BODY_CARE
  },
  {
    id: 5,
    name: 'Body Butter',
    description: 'Indulge your skin with our rich and velvety Body Butter — a thick, deeply hydrating moisturizer crafted to nourish and protect. It provides intense moisture while forming a gentle barrier to lock it in, leaving your skin soft, supple, and radiant. Choose from our luxurious fragrance options: Aromatic Floral, Berry Blast, Aqua Madness, Gucci Rush, and Strawberry.',
    price: 300,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Body+Butter`,
    category: CATEGORIES.BODY_CARE
  },
  {
    id: 6,
    name: 'Foot Soak',
    description: 'Unwind after a long day with our soothing Foot Soaks, made with therapeutic Epsom salt to soften and refresh tired feet. This relaxing soak helps relieve stress, ease muscle pain, and even promotes better circulation to prevent blood clots. Available in calming fragrances like Rose, Aqua, and Lavender.',
    price: 150,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Foot+Soak`,
    category: CATEGORIES.BODY_CARE
  },
  {
    id: 7,
    name: 'Sugar Scrub',
    description: 'Treat your skin to the gentle care it deserves with our all-natural Sugar Scrub. Designed to exfoliate and reveal softer, smoother skin, it effectively removes dead skin cells, improves texture, and helps prevent ingrown hairs. With a range of irresistible fragrances including Vanilla, Coco Lush, Purple Haze, Watermelon Sugar, Aqua Madness, and Fruit Punch, it turns your skincare routine into a sensorial delight.',
    price: 350,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Sugar+Scrub`,
    category: CATEGORIES.BODY_CARE
  },

  // Face Care Products
  {
    id: 8,
    name: 'Kumkumadi Oil',
    description: "Peachy Glow's Kumkumadi Oil is a luxurious blend of saffron and 24 potent herbs, carefully crafted to enhance your skin's natural glow and visibly reduce pigmentation. This all-natural elixir nourishes deeply, leaving your skin radiant, even-toned, and beautifully refreshed.",
    price: 500,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Kumkumadi+Oil`,
    category: CATEGORIES.FACE_CARE
  },
  {
    id: 9,
    name: 'Aloe Gel',
    description: "Peachy Glow's Aloe Vera Gel is a 100% natural formula made from farm-fresh aloe pulp, free from added colors or fragrance. It gently soothes the skin, helps reduce acne, and provides relief from burns and insect bites. With its deep hydrating properties, it leaves your skin feeling calm, refreshed, and nourished.",
    price: 140,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Aloe+Gel`,
    category: CATEGORIES.FACE_CARE
  },
  {
    id: 10,
    name: 'Kumkumadi Toner',
    description: 'Brighten your skincare routine with our luxurious Kumkumadi Toner, infused with the goodness of saffron to naturally enhance your skin tone. This gentle yet effective toner helps reduce pigmentation, deeply hydrates the skin, and tightens pores for a fresh, radiant glow. A perfect step toward achieving even-toned, supple skin.',
    price: 450,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Kumkumadi+Toner`,
    category: CATEGORIES.FACE_CARE
  },
  {
    id: 11,
    name: 'Under Eye Oil',
    description: 'The Under Eye Oil is a powerful, natural blend formulated to reduce dark circles and puffiness. Infused with the goodness of nutmeg, it hydrates and tightens the delicate under-eye area, helping to diminish under-eye bags and restore a fresh, well-rested look.',
    price: 500,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Under+Eye+Oil`,
    category: CATEGORIES.FACE_CARE
  },

  // Hair Care Products
  {
    id: 12,
    name: 'Rosemary Hydrosol',
    description: 'The Rosemary Hydrosol is a steam-distilled scalp mist specially crafted to promote healthy hair growth. It helps strengthen hair follicles, soothes itchiness, and improves overall scalp health, making it an essential part of your natural hair care routine.',
    price: 350,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Rosemary+Hydrosol`,
    category: CATEGORIES.HAIR_CARE
  },
  
  // Other Items
  {
    id: 13,
    name: 'Soy Wax Candles',
    description: 'Handcrafted soy wax candles that create a cozy atmosphere with natural, clean-burning properties.',
    price: 250,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Soy+Wax+Candles`,
    category: CATEGORIES.OTHER
  },
  {
    id: 14,
    name: 'Neem Wooden Comb',
    description: 'Natural neem wood comb that helps distribute scalp oils and promotes healthy hair and scalp.',
    price: 180,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Neem+Wooden+Comb`,
    category: CATEGORIES.OTHER
  },
  {
    id: 15,
    name: 'Donut Soaps',
    description: 'Cute donut-shaped soaps that make washing hands a delightful experience, perfect for kids and adults alike.',
    price: 150,
    imageUrl: `${PLACEHOLDER_IMAGE}/F3AAA6/ffffff?text=Donut+Soaps`,
    category: CATEGORIES.OTHER
  }
];

// Helper functions to filter products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Get featured products (just a sampling of different categories)
export const getFeaturedProducts = (): Product[] => {
  return [
    products[0], // Lip Scrub
    products[2], // Whipped Soap
    products[4], // Body Butter
    products[7], // Kumkumadi Oil
    products[11], // Rosemary Hydrosol
    products[14], // Donut Soaps
  ];
};

export default products; 