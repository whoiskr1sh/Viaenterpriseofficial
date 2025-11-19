// Shared product data for shop and product pages
// Flat map of products keyed by numeric/string ID used in shop.js

const productsById = {
  2:  {
    id: 2,
    name: 'Slim Fit Denims',
    price: 3499,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 312,
    image: 'assets/images/denim1.webp',
    images: [
      'assets/images/denim1.webp',
      'assets/images/denim1_detail.webp',
      'assets/images/denim1_back.webp'
    ],
    category: 'Denims',
    description: '5-pocket jeans in rigid cotton denim with a straight leg and a loose fit from the seat to the hem.',
    features: [
      'Fabric: 100% Cotton',
      'Care: Machine Wash',
      'Closure: Button and Zip',
      'Fit: Relaxed Fit',
      'Length: Regular',
      'Distress: Clean Look'
    ],
    details: [
      { label: 'Fabric', value: '99% Cotton, 1% Elastane' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Rise', value: 'Mid Rise' },
      { label: 'Length', value: 'Full Length' },
      { label: 'Closure', value: 'Button and Zip' },
      { label: 'Care', value: 'Machine Wash Cold' }
    ],
    shippingText: 'We offer free standard shipping on all denim orders. Orders are typically processed within 1-2 business days and delivered within 5-7 business days.',
    returnsText: '7-day return policy. Items must be unused with all tags attached. Customized or altered items cannot be returned.',
    reviews: [
      {
        name: 'Rahul Verma',
        rating: 5,
        date: 'September 10, 2025',
        text: 'Great fit and very comfortable. The fabric feels premium and holds shape well even after multiple washes.'
      },
      {
        name: 'Aditi Singh',
        rating: 4,
        date: 'August 22, 2025',
        text: 'Looks exactly like the pictures. Slightly tighter around the waist than expected but overall a good purchase.'
      }
    ]
  },
  31: {
    id: 31,
    name: 'Oversized Denims',
    price: 4499,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 245,
    image: 'assets/images/denim2.webp',
    images: [
      'assets/images/denim2.webp',
      'assets/images/denim2_detail.webp',
      'assets/images/denim2_back.webp'
    ],
    category: 'Denims',
    description: 'Oversized denim with relaxed silhouette for everyday comfort and style.',
    features: [
      'Fabric: 100% Cotton',
      'Care: Machine Wash',
      'Closure: Button and Zip',
      'Fit: Oversized Relaxed Fit',
      'Length: Ankle Length',
      'Distress: Clean Look'
    ],
    details: [
      { label: 'Fabric', value: '100% Cotton Denim' },
      { label: 'Fit', value: 'Oversized Relaxed Fit' },
      { label: 'Rise', value: 'Mid Rise' },
      { label: 'Length', value: 'Ankle Length' },
      { label: 'Closure', value: 'Button and Zip' },
      { label: 'Care', value: 'Machine Wash Cold, Do Not Bleach' }
    ],
    shippingText: 'Free shipping on all denim styles. Orders dispatch in 1-2 business days and typically arrive within 5-7 business days.',
    returnsText: '7-day hassle-free returns. Product must be unused, unwashed, and returned with all original tags and packaging.',
    reviews: [
      {
        name: 'Karan Mehta',
        rating: 5,
        date: 'September 25, 2025',
        text: 'Perfect oversized look. Super comfortable and looks great with sneakers.'
      },
      {
        name: 'Neha Gupta',
        rating: 4,
        date: 'October 3, 2025',
        text: 'Nice quality denim. A little long for my height but overall very stylish.'
      }
    ]
  },
  32: {
    id: 32,
    name: 'Relaxed Fit Denims',
    price: 1999,
    originalPrice: 3499,
    rating: 4.6,
    reviews: 198,
    image: 'assets/images/denim1.webp',
    images: [
      'assets/images/denim1.webp',
      'assets/images/denim1_detail.webp',
      'assets/images/denim1_back.webp'
    ],
    category: 'Denims',
    description: 'Relaxed fit denims that are perfect for all-day wear.',
    features: [
      'Fabric: 100% Cotton',
      'Care: Machine Wash',
      'Fit: Relaxed Straight Fit',
      'Rise: Mid Rise'
    ],
    details: [
      { label: 'Fabric', value: '100% Cotton Denim' },
      { label: 'Fit', value: 'Relaxed Straight Fit' },
      { label: 'Rise', value: 'Mid Rise' },
      { label: 'Length', value: 'Full Length' },
      { label: 'Closure', value: 'Button and Zip' },
      { label: 'Care', value: 'Machine Wash, Wash Inside Out' }
    ],
    shippingText: 'Standard shipping within 5-7 business days across India.',
    returnsText: 'Return within 7 days of delivery in original condition with tags attached.',
    reviews: [
      {
        name: 'Siddharth Rao',
        rating: 5,
        date: 'September 8, 2025',
        text: 'Very comfortable for daily wear. Good value for money.'
      }
    ]
  },
  7:  {
    id: 7,
    name: 'Slim Fit Cargo Pants',
    price: 2499,
    originalPrice: 4499,
    rating: 4.8,
    reviews: 156,
    image: 'assets/images/cargo.webp',
    images: [
      'assets/images/cargo.webp',
      'assets/images/cargo_detail.webp',
      'assets/images/cargo_back.webp'
    ],
    category: 'Cargo',
    description: 'Slim fit cargo pants with multiple utility pockets and a modern silhouette.',
    features: [
      'Fabric: Cotton Blend',
      'Fit: Slim Tapered Fit',
      'Pockets: Multiple Utility Pockets',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Cotton Blend' },
      { label: 'Fit', value: 'Slim Tapered Fit' },
      { label: 'Rise', value: 'Mid Rise' },
      { label: 'Pockets', value: 'Side Cargo + Back Pockets' },
      { label: 'Closure', value: 'Button and Zip' },
      { label: 'Care', value: 'Machine Wash, Tumble Dry Low' }
    ],
    shippingText: 'Ships within 24-48 hours. Usual delivery timeline is 4-6 business days.',
    returnsText: 'Eligible for return within 7 days of delivery. Product must be unused and in original packaging.',
    reviews: [
      {
        name: 'Vikram Shah',
        rating: 5,
        date: 'August 30, 2025',
        text: 'Great utility pants. Perfect for travel and everyday use.'
      }
    ]
  },
  37: {
    id: 37,
    name: 'Streetwear Cargo Pants',
    price: 3299,
    originalPrice: 5499,
    rating: 4.7,
    reviews: 143,
    image: 'assets/images/cargo.webp',
    images: [
      'assets/images/cargo.webp',
      'assets/images/cargo_detail.webp',
      'assets/images/cargo_back.webp'
    ],
    category: 'Cargo',
    description: 'Streetwear-inspired cargo pants with relaxed fit and functional pockets.',
    features: [
      'Fabric: Cotton Blend',
      'Fit: Relaxed Fit',
      'Style: Streetwear Inspired',
      'Care: Machine Wash Cold'
    ],
    details: [
      { label: 'Fabric', value: 'Cotton Blend' },
      { label: 'Fit', value: 'Relaxed Streetwear Fit' },
      { label: 'Pockets', value: 'Multi-Pocket Design' },
      { label: 'Length', value: 'Full Length' },
      { label: 'Care', value: 'Machine Wash Cold, Dry in Shade' }
    ],
    shippingText: 'Free standard shipping on orders above ₹999.',
    returnsText: 'Easy 7-day returns. Keep tags and packaging intact.',
    reviews: [
      {
        name: 'Yash Jain',
        rating: 4,
        date: 'September 12, 2025',
        text: 'Nice relaxed streetwear look. Fabric feels sturdy.'
      }
    ]
  },
  38: {
    id: 38,
    name: 'Baggy Cargo Pants',
    price: 2899,
    originalPrice: 4799,
    rating: 4.8,
    reviews: 167,
    image: 'assets/images/cargo.webp',
    images: [
      'assets/images/cargo.webp',
      'assets/images/cargo_detail.webp',
      'assets/images/cargo_back.webp'
    ],
    category: 'Cargo',
    description: 'Baggy cargo pants for a bold, relaxed street style look.',
    features: [
      'Fabric: Heavyweight Cotton',
      'Fit: Baggy Relaxed Fit',
      'Pockets: Oversized Utility Pockets',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Heavyweight Cotton' },
      { label: 'Fit', value: 'Baggy Relaxed Fit' },
      { label: 'Rise', value: 'Mid Rise' },
      { label: 'Pockets', value: 'Oversized Cargo Pockets' },
      { label: 'Care', value: 'Machine Wash, Do Not Bleach' }
    ],
    shippingText: 'Shipped in 1-2 business days with standard delivery timelines.',
    returnsText: 'Returnable within 7 days of receipt in original condition.',
    reviews: [
      {
        name: 'Arjun Das',
        rating: 5,
        date: 'October 5, 2025',
        text: 'Exactly the baggy cargo look I wanted. Very trendy.'
      }
    ]
  },
  13: {
    id: 13,
    name: 'Loose Fit Corduroy Trousers',
    price: 1299,
    originalPrice: 2299,
    rating: 4.5,
    reviews: 187,
    image: 'assets/images/trouser.webp',
    images: [
      'assets/images/trouser.webp',
      'assets/images/trouser_detail.webp',
      'assets/images/trouser_back.webp'
    ],
    category: 'Trousers',
    description: 'Soft corduroy trousers with a loose fit and vintage feel.',
    features: [
      'Fabric: Corduroy',
      'Fit: Loose Fit',
      'Style: Vintage Inspired',
      'Care: Gentle Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Soft Corduroy' },
      { label: 'Fit', value: 'Loose Comfort Fit' },
      { label: 'Occasion', value: 'Casual / Smart Casual' },
      { label: 'Care', value: 'Gentle Machine Wash, Do Not Bleach' }
    ],
    shippingText: 'Standard delivery within 5-7 working days.',
    returnsText: 'You can return within 7 days for a full refund if unused.',
    reviews: [
      {
        name: 'Meera Nair',
        rating: 5,
        date: 'September 2, 2025',
        text: 'Super soft and comfortable. Perfect for casual outings.'
      }
    ]
  },
  17: {
    id: 17,
    name: 'Relaxed Fit Trousers',
    price: 1599,
    originalPrice: 2799,
    rating: 4.6,
    reviews: 176,
    image: 'assets/images/trouser.webp',
    images: [
      'assets/images/trouser.webp',
      'assets/images/trouser_detail.webp',
      'assets/images/trouser_back.webp'
    ],
    category: 'Trousers',
    description: 'Relaxed fit trousers suitable for both casual and semi-formal occasions.',
    features: [
      'Fabric: Poly-Cotton Blend',
      'Fit: Relaxed Fit',
      'Occasion: Casual / Semi-formal',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Poly-Cotton Blend' },
      { label: 'Fit', value: 'Relaxed Fit' },
      { label: 'Occasion', value: 'Casual / Semi-formal' },
      { label: 'Care', value: 'Machine Wash, Dry in Shade' }
    ],
    shippingText: 'Ships in 1-2 business days with standard delivery.',
    returnsText: 'Return or exchange within 7 days with invoice and tags.',
    reviews: [
      {
        name: 'Rohan Kulkarni',
        rating: 4,
        date: 'August 18, 2025',
        text: 'Good everyday trousers. Comfortable and easy to style.'
      }
    ]
  },
  43: {
    id: 43,
    name: 'Versatile Relaxed Fit Trousers',
    price: 999,
    originalPrice: 1899,
    rating: 4.5,
    reviews: 154,
    image: 'assets/images/trouser.webp',
    images: [
      'assets/images/trouser.webp',
      'assets/images/trouser_detail.webp',
      'assets/images/trouser_back.webp'
    ],
    category: 'Trousers',
    description: 'Versatile relaxed fit trousers that pair with almost any top.',
    features: [
      'Fabric: Poly-Cotton Blend',
      'Fit: Relaxed Fit',
      'Style: Versatile Everyday',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Poly-Cotton Blend' },
      { label: 'Fit', value: 'Relaxed Versatile Fit' },
      { label: 'Occasion', value: 'Daily Wear' },
      { label: 'Care', value: 'Machine Wash, Do Not Bleach' }
    ],
    shippingText: 'Delivered in 5-7 business days under standard shipping.',
    returnsText: 'Eligible for return within 7 days of delivery.',
    reviews: [
      {
        name: 'Ishita Bose',
        rating: 5,
        date: 'September 20, 2025',
        text: 'Very versatile trousers. I can pair them with almost anything.'
      }
    ]
  },
  19: {
    id: 19,
    name: 'Slim Fit Formal Trousers',
    price: 2499,
    originalPrice: 4499,
    rating: 4.8,
    reviews: 132,
    image: 'assets/images/formal_trousers.webp',
    images: [
      'assets/images/formal_trousers.webp',
      'assets/images/formal_trousers_detail.webp',
      'assets/images/formal_trousers_back.webp'
    ],
    category: 'Formal Trousers',
    description: 'Sharp slim fit formal trousers perfect for office and occasions.',
    features: [
      'Fabric: Poly-Viscose Blend',
      'Fit: Slim Fit',
      'Occasion: Office / Formal',
      'Care: Dry Clean Recommended'
    ],
    details: [
      { label: 'Fabric', value: 'Poly-Viscose Blend' },
      { label: 'Fit', value: 'Slim Formal Fit' },
      { label: 'Occasion', value: 'Office / Formal Events' },
      { label: 'Care', value: 'Dry Clean Recommended' }
    ],
    shippingText: 'Ships within 24 hours on business days.',
    returnsText: 'Return within 7 days if unused and unaltered with all tags.',
    reviews: [
      {
        name: 'Abhishek Jain',
        rating: 5,
        date: 'October 8, 2025',
        text: 'Perfect formal trousers for office. Fit is sharp and clean.'
      }
    ]
  },
  51: {
    id: 51,
    name: 'Textured Slim Fit Formal Trousers',
    price: 1799,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 187,
    image: 'assets/images/formal_trousers.webp',
    images: [
      'assets/images/formal_trousers.webp',
      'assets/images/formal_trousers_detail.webp',
      'assets/images/formal_trousers_back.webp'
    ],
    category: 'Formal Trousers',
    description: 'Textured slim fit formal trousers with a premium finish.',
    features: [
      'Fabric: Textured Poly-Viscose',
      'Fit: Slim Fit',
      'Finish: Premium Textured',
      'Care: Dry Clean Only'
    ],
    details: [
      { label: 'Fabric', value: 'Textured Poly-Viscose' },
      { label: 'Fit', value: 'Slim Fit' },
      { label: 'Occasion', value: 'Formal / Special Events' },
      { label: 'Care', value: 'Dry Clean Only' }
    ],
    shippingText: 'Dispatched in 1 business day with standard delivery.',
    returnsText: '7-day return policy. Keep garment tags intact for returns.',
    reviews: [
      {
        name: 'Tanvi Menon',
        rating: 4,
        date: 'September 29, 2025',
        text: 'Looks very premium and fits well. Slightly warm for summers.'
      }
    ]
  },
  54: {
    id: 54,
    name: 'Denim Joggers',
    price: 799,
    originalPrice: 1499,
    rating: 4.6,
    reviews: 187,
    image: 'assets/images/joggers.webp',
    images: [
      'assets/images/joggers.webp',
      'assets/images/joggers_detail.webp',
      'assets/images/joggers_back.webp'
    ],
    category: 'Joggers',
    description: 'Comfortable denim joggers that combine style and ease.',
    features: [
      'Fabric: Cotton Rich',
      'Fit: Jogger Fit with Cuffs',
      'Waist: Elasticated with Drawstring',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Cotton Rich' },
      { label: 'Fit', value: 'Jogger Fit' },
      { label: 'Waist', value: 'Elasticated with Drawstring' },
      { label: 'Care', value: 'Machine Wash, Do Not Bleach' }
    ],
    shippingText: 'Standard delivery within 4-6 business days.',
    returnsText: 'Returnable within 7 days in unused condition.',
    reviews: [
      {
        name: 'Pooja Arora',
        rating: 5,
        date: 'August 26, 2025',
        text: 'Very comfy joggers. I wear them almost every day.'
      }
    ]
  },
  55: {
    id: 55,
    name: 'Essential Joggers',
    price: 599,
    originalPrice: 999,
    rating: 4.5,
    reviews: 143,
    image: 'assets/images/joggers.webp',
    images: [
      'assets/images/joggers.webp',
      'assets/images/joggers_detail.webp',
      'assets/images/joggers_back.webp'
    ],
    category: 'Joggers',
    description: 'Everyday essential joggers with a soft feel and modern fit.',
    features: [
      'Fabric: Cotton Blend',
      'Fit: Regular Jogger Fit',
      'Waist: Elasticated with Drawstring',
      'Care: Machine Wash'
    ],
    details: [
      { label: 'Fabric', value: 'Cotton Blend' },
      { label: 'Fit', value: 'Regular Jogger Fit' },
      { label: 'Waist', value: 'Elasticated with Drawstring' },
      { label: 'Care', value: 'Machine Wash, Dry in Shade' }
    ],
    shippingText: 'Ships within 2 business days with standard delivery.',
    returnsText: 'Return within 7 days with original packaging and tags.',
    reviews: [
      {
        name: 'Deepak Singh',
        rating: 4,
        date: 'September 10, 2025',
        text: 'Good basic joggers. Soft fabric and comfortable fit.'
      }
    ]
  }
};

// Helper to get a product safely
function getProductById(id) {
  const key = String(id);
  return productsById[key] || productsById[id] || null;
}
