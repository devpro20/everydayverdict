import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding detailed Jackery and Tomtoc Reviews...')

  // Create category
  let category = await prisma.category.findUnique({ where: { slug: 'tech-gear' } })
  if (!category) {
    category = await prisma.category.create({
      data: {
        name: 'Tech Gear',
        slug: 'tech-gear',
      }
    })
  }

  const posts = [
    {
      title: 'Jackery Explorer 300 Plus Review: Pocket-Sized Power',
      slug: 'jackery-explorer-300-plus-review',
      content: `## Power in the Palm of Your Hand

The portable power station market has exploded in recent years, but finding the perfect balance between capacity, weight, and price is still incredibly difficult. The **Jackery Explorer 300 Plus** might just be the holy grail for weekend campers, digital nomads, and emergency preppers.

### Design and Build Quality
Weighing in at just 8.27 lbs (3.75 kg), the Explorer 300 Plus is light enough to carry in one hand without breaking a sweat. It retains Jackery's iconic orange-and-black rugged design, with a sturdy handle molded directly into the top chassis. The build quality feels dense and premium—there's no creaking or flexing in the plastic when you put pressure on it.

### Battery Chemistry Upgrade (LiFePO4)
The biggest upgrade in the "Plus" series is the shift to LiFePO4 (Lithium Iron Phosphate) battery chemistry. Older Jackery models used standard Lithium-ion, which degraded after about 500 charge cycles. The new LiFePO4 battery in the 300 Plus is rated for a massive 3,000 charge cycles while still retaining 80% capacity. This means you could use it every single day for almost 10 years before noticing a significant drop in battery life.

### Performance Testing
With a 288Wh capacity and a 300W pure sine wave inverter (600W surge), what can it actually power?

During our weekend camping trip, we tested it extensively:
- **MacBook Pro 16":** Recharged from 0% to 100% twice, with 20% battery remaining.
- **Drone Batteries:** Recharged a DJI Mavic 3 battery 4 times.
- **Camping Lights:** Ran a 10W LED string light setup for over 25 hours continuously.
- **Mini Fridge:** Powered a 40W 12V portable car fridge for about 6 hours on a hot day.

It features two AC outlets, a 12V car port, one USB-A port, and crucially, two 100W USB-C PD ports. The dual 100W USB-C ports are a game-changer, allowing you to fast-charge two modern laptops simultaneously without needing bulky AC power bricks.

### App Integration
Jackery finally included Wi-Fi and Bluetooth connectivity in this model. The Jackery mobile app is clean, responsive, and incredibly useful. You can monitor input/output wattage in real-time, adjust settings like screen timeout and charging speed, and check the remaining battery percentage from your tent.

### Pros and Cons
**Pros:**
- Upgraded LiFePO4 battery lasts 6x longer than previous generations.
- Dual 100W USB-C ports are perfect for modern tech.
- Lightweight and incredibly portable.
- Excellent app integration.

**Cons:**
- The 300W inverter is too weak to run a coffee maker, hair dryer, or microwave.
- Only features two AC outlets instead of three.

**Final Verdict:** 
If you need to power heavy appliances like a blender or a heater, look elsewhere. But if your goal is to keep laptops, drones, phones, and cameras charged while off-grid for a weekend, the Jackery Explorer 300 Plus is currently the best sub-300Wh power station on the market.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0970/9262/files/jackery-explorer-300d-portable-power-station-6439637.png?v=1765393691',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Jackery HomePower 2000 Plus: Serious Backup Power for the Home',
      slug: 'jackery-homepower-2000-plus-review',
      content: `## When the Grid Fails, Jackery Delivers

While the Explorer 300 Plus is built for the weekend warrior, the **Jackery HomePower 2000 Plus** is designed for serious home backup, RV living, and prolonged off-grid excursions. It is a massive, heavy, and incredibly powerful piece of technology.

### Massive Capacity and Expandability
Out of the box, the 2000 Plus features a 2,042Wh capacity. But what makes the "Plus" series special is its modularity. You can daisy-chain up to 5 additional expansion batteries to a single 2000 Plus unit, bringing the total capacity to a staggering 12kWh. If you connect two 2000 Plus units together in parallel, you can reach 24kWh—enough to run a standard American home for days.

### Powering Heavy Appliances
The inverter on this beast is rated for 3,000W of continuous output (6,000W surge). During our hurricane prep testing, we decided to push it to the absolute limit.

- **Full-size Refrigerator:** It ran our LG double-door fridge for roughly 18 hours.
- **Window AC Unit:** It powered a 5,000 BTU window air conditioner for 4.5 hours.
- **Microwave & Coffee Maker:** It handled a 1,200W microwave and a 1,500W Keurig coffee maker simultaneously without tripping the breaker.

### Fast Charging
Despite its massive battery, the 2000 Plus charges shockingly fast. Plugged into a standard AC wall outlet, it pulls roughly 1,800W and charges from 0% to 100% in just 2 hours. If you pair it with Jackery's SolarSaga 200W panels (up to 6 of them), you can fully recharge the unit using only the sun in under 2.5 hours on a clear day.

### Quiet Operation
One of the most surprising aspects of the 2000 Plus is how quiet it is. Jackery implemented a new "Quiet Charge" mode in their app. When enabled, the internal cooling fans spin down, keeping the noise level below 30dB. You can sleep in the same room as this power station while it's charging without being disturbed.

### Final Thoughts
At over 61 lbs (27.9 kg), the 2000 Plus is not something you want to carry up a flight of stairs very often (thankfully, it comes with built-in wheels and a telescoping luggage handle). It is a serious investment, but for those living in areas prone to blackouts or anyone building out an off-grid cabin, the Jackery HomePower 2000 Plus provides unmatched peace of mind.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0970/9262/files/homepower-2000-plus-v2-9923551.png?v=1781774648',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Tomtoc Explorer Sling Bag Review: The Ultimate Minimalist EDC',
      slug: 'tomtoc-explorer-sling-bag-review',
      content: `## A Sling Bag Designed for Tech

The term "EDC" (Everyday Carry) has become synonymous with bulky backpacks and tactical gear. But what if you just need to carry a Nintendo Switch, a power bank, your phone, and a Kindle? Enter the **Tomtoc Explorer Sling Bag**.

### Premium Materials at a Budget Price
Tomtoc has built a reputation for offering materials usually reserved for bags that cost three times as much. The Explorer Sling uses Cordura ballistic nylon on the exterior, making it incredibly resistant to abrasions, tears, and water. The zippers are genuine YKK, ensuring they glide smoothly and won't break under tension. 

### Storage and Organization
Despite its compact 4.5-liter capacity, the internal organization is masterfully engineered. 
- **The Main Compartment:** Features a soft, fleece-lined sleeve that perfectly fits an iPad Mini 6 or a Nintendo Switch (even with a slim case attached). 
- **The Tech Pockets:** Opposite the tablet sleeve are two mesh pockets perfectly sized for an Anker power bank and some charging cables.
- **The Front Pocket:** Ideal for quick-access items like AirPods, chapstick, and transit cards. It also features a bright orange key leash so you never lose your keys at the bottom of the bag.
- **The Hidden Back Pocket:** A zippered pocket sits flush against your chest/back when worn, providing a secure spot for your passport, wallet, or phone in crowded areas.

### Comfort and Fit
The strap utilizes a thick seatbelt-style webbing that doesn't dig into your neck, even when the bag is fully loaded. It features a quick-release Duraflex buckle, allowing you to take the bag off without pulling it over your head—a godsend if you are wearing a hat or a bulky winter coat. 

### Final Verdict
For under $50, the Tomtoc Explorer Sling is an absolute steal. It forces you to minimize your daily carry to just the essentials, while protecting your expensive tech gear with premium materials. It has become my go-to bag for weekend coffee shop runs and air travel.`,
      thumbnail: 'https://images.unsplash.com/photo-1547949007-5366286707d5?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Tomtoc Defender Laptop Sleeve: 360-Degree Armor for your MacBook',
      slug: 'tomtoc-defender-laptop-sleeve-review',
      content: `## Bulletproof Protection for your Laptop

Laptops have gotten thinner, lighter, and vastly more expensive. Dropping a $2,500 MacBook Pro onto a hard tile floor is a gut-wrenching experience. While a hard-shell case adds unnecessary bulk and ruins the aesthetic of the laptop, the **Tomtoc Defender Laptop Sleeve** offers military-grade protection while in transit.

### CornerArmor Technology
The standout feature of the Defender series is what Tomtoc calls "CornerArmor." At the two bottom corners of the sleeve, Tomtoc has integrated thick, reinforced rubber bumpers that resemble the airbags in a car. 

During our highly unscientific drop tests (dropping a dummy laptop from waist height onto concrete), the CornerArmor absorbed the impact beautifully. The rubber compresses upon impact, dissipating the kinetic energy before it can crack your laptop's screen or dent the aluminum chassis.

### Internal Plush Lining
Opening the heavy-duty YKK zipper reveals an interior lined with an incredibly soft, thick fleece material. It feels like a plush blanket. This ensures that your laptop won't get scratched by dust or sand trapped inside the sleeve. Furthermore, a thick protective ridge runs entirely along the zipper line, preventing the zipper teeth from ever coming into contact with your laptop's edges.

### Exterior Storage
While it is primarily a sleeve, it does feature a surprisingly roomy front zippered pocket. It isn't gusseted, so you won't be fitting a massive power brick in there without making the sleeve look lumpy. However, it is perfect for carrying a sleek GaN charger (like an Anker Nano), a USB-C cable, a Magic Mouse, and a slim external SSD.

### Eco-Friendly Materials
Tomtoc has recently shifted to using recycled fabrics made from PET plastic bottles for the exterior of the Defender series. It retains the water-resistant properties you expect, but with a smaller carbon footprint.

### Conclusion
If you carry your laptop in a tote bag, a messenger bag, or a backpack that lacks a dedicated, suspended laptop compartment, a sleeve is mandatory. The Tomtoc Defender offers unparalleled 360-degree protection, premium zippers, and useful storage at a price point that makes it a no-brainer investment for protecting your tech.`,
      thumbnail: 'https://images.unsplash.com/photo-1605553075678-7505ed5955be?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    }
  ]

  for (const p of posts) {
    await prisma.post.upsert({
      where: { slug: p.slug },
      update: {
        content: p.content,
        title: p.title
      },
      create: p,
    })
  }

  console.log('Seeding Jackery and Tomtoc completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
