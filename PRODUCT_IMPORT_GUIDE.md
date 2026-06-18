# Product Import Guide - Foundation Hardware

## How to Add Products from Randtech (or any supplier)

### Step 1: Visit Randtech.co.ke
- Browse their product categories
- Note down product names and prices
- Take your own photos OR find similar royalty-free images

### Step 2: Calculate Your Prices
**Formula:** Your Price = Randtech Price × 0.5 (50%)

Example:
- Randtech: Cement = KES 800
- Your Price: 800 × 0.5 = **KES 400**

### Step 3: Add to data.ts File

Use this template for each product:

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  category: "Category Name",
  description: "Brief product description",
  image: "https://images.unsplash.com/photo-xxx?w=400&auto=format&fit=crop&q=60",
  price: 500,  // HALF of Randtech price
  unit: "bag/piece/meter/etc",
  specifications: ["Spec 1", "Spec 2", "Spec 3"],
  popular: false,
  inStock: true
}
```

### Step 4: Categories Available
1. Building Materials
2. Steel & Reinforcement
3. Timber & Boards
4. Roofing Materials
5. Plumbing & Water Systems
6. Tiles & Flooring
7. Paints & Finishes
8. Electrical & Lighting
9. Solar Products
10. Tools & Equipment
11. Hardware & Fasteners
12. Doors & Windows
13. Safety Equipment
14. Fencing Materials
15. Ceiling & Drywall

### Step 5: Find Royalty-Free Images
Use these sources for product images:
- **Unsplash.com** (currently used)
- **Pexels.com**
- **Pixabay.com**
- Take your own photos

### Step 6: Image URL Format
```
https://images.unsplash.com/photo-[ID]?w=400&auto=format&fit=crop&q=60
```

### Price Reference Table (50% of typical market rates)

| Product | Market Price | Your Price (50%) |
|---------|-------------|------------------|
| Cement (50kg) | KES 750-850 | KES 350-400 |
| Sand (tonne) | KES 3,500-4,000 | KES 1,800-2,000 |
| Steel D12 | KES 2,500-2,800 | KES 1,200-1,350 |
| Roofing Sheet | KES 1,500-1,800 | KES 750-850 |
| Water Tank 1000L | KES 14,000-16,000 | KES 7,000-7,500 |
| Tiles 60x60 | KES 3,000-3,500 | KES 1,500-1,650 |
| Paint 4L | KES 3,500-4,000 | KES 1,800-2,000 |
| Solar Panel 300W | KES 30,000-35,000 | KES 15,000-16,500 |

### Sample Product Entry

```typescript
{ 
  id: "mabati-30g", 
  name: "Mabati Roofing Sheet 30G", 
  category: "Roofing Materials", 
  description: "Corrugated iron sheet gauge 30. Multiple colors available.", 
  image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&auto=format&fit=crop&q=60", 
  price: 850,  // Half of Randtech ~1700
  unit: "meter", 
  specifications: ["Gauge 30", "Pre-painted", "2.4m-3.6m lengths"], 
  popular: true, 
  inStock: true 
}
```

### Adding to data.ts

1. Open `lib/data.ts`
2. Find the relevant category section
3. Add your new product object
4. Save and rebuild the site

### Rebuild After Adding Products

```bash
cd "FOUNDATION HARDWARE\foundation-hardware"
npm run build
```

### Tips
- Use descriptive product names
- Include units (bag, piece, meter, kg, etc.)
- Add specifications for technical products
- Mark popular items with `popular: true`
- Keep all products `inStock: true` unless out of stock
