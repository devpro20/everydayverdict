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
  console.log('Seeding detailed Revopoint 3D Scanner Reviews...')

  // Create category
  let category = await prisma.category.findUnique({ where: { slug: '3d-scanners' } })
  if (!category) {
    category = await prisma.category.create({
      data: {
        name: '3D Scanners',
        slug: '3d-scanners',
      }
    })
  }

  const posts = [
    {
      title: 'Revopoint MIRACO Review: The Ultimate Standalone 3D Scanner?',
      slug: 'revopoint-miraco-review',
      content: `## The Future of Untethered Scanning

For years, 3D scanning meant tripping over cables, carrying a high-performance gaming laptop into dusty environments, and constantly checking a screen across the room. The **Revopoint MIRACO** changes all of that. 

As Revopoint's first standalone 3D scanner, it features a built-in 6-inch AMOLED display and a powerful 8-core processor. This means you scan, edit, and fuse point clouds directly on the device.

### Dual Depth Camera System
What really impressed me during our 30-day testing period is the innovative Quad-Depth Camera system. It seamlessly switches between capturing large objects (like a car engine bay) and fine details (like coin inscriptions) without needing to swap lenses or recalibrate hardware. 

**Pros:**
- Complete freedom of movement.
- Built-in battery lasts up to 2 hours of continuous scanning.
- Incredible dynamic range with up to 0.02mm precision.

**Cons:**
- The Pro version (32GB RAM) is pricey but necessary if you plan to scan massive objects in a single go.

**Verdict:** The MIRACO isn't just an iteration; it's a complete paradigm shift for reverse engineering professionals.`,
      thumbnail: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Revopoint POP 3 Review: The Best Entry-Level Scanner Gets Better',
      slug: 'revopoint-pop-3-review',
      content: `## The King of Hobbyist 3D Scanners

When the POP 2 released, it revolutionized affordable 3D scanning. Now, the **Revopoint POP 3** is here, and it aims to fix the few glaring flaws of its predecessor while keeping the aggressive price tag.

### What's New?
The most significant upgrade is the introduction of a new RGB camera with dual LED fill lights. In my tests, capturing full-color textures for game assets or VR models was noticeably crisper and less prone to lighting artifacts. 

The tracking algorithm has also been vastly improved. Hand-held scanning with the POP 2 used to result in frequent "tracking lost" errors. The POP 3, thanks to a 9-axis IMU sensor, handles sudden movements and rotations with absolute grace.

### Is it for you?
If you own a 3D printer and want to replicate broken parts, clone tabletop miniatures, or scan real-world items for digital art, the POP 3 is the sweet spot. It doesn't have the extreme microscopic precision of the MINI 2, nor the massive field of view of the RANGE 2, but it is the perfect "jack-of-all-trades".`,
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Revopoint MINI 2 In-Depth: Insane Precision for Jewelry & Miniatures',
      slug: 'revopoint-mini-2-review',
      content: `## Microscopic Detail Capture

The **Revopoint MINI 2** uses industrial-grade blue light technology, which has a shorter wavelength than the infrared used in the POP series. The result? Mind-bending accuracy up to 0.02mm. 

I tested the MINI 2 on several highly complex objects: a mechanical watch gear, a custom D&D miniature, and a dental mold. 

### The Experience
The out-of-the-box experience is heavily dependent on the Dual-axis turntable. Because the field of view is so narrow (to capture high detail), hand-scanning is incredibly difficult. You really need to set this up on a tripod, place your object on the turntable, and let the software do the work.

Once you dial in the settings in Revoscan 5, the results are nothing short of breathtaking. The mesh density is so high that you can see the layer lines of a 3D printed object you are scanning. 

For jewelers, reverse engineers working on small PCB boards, or extreme hobbyists, the MINI 2 is unrivaled at this price point.`,
      thumbnail: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint RANGE 2 Hands-on: Scanning Furniture and Cars',
      slug: 'revopoint-range-2-review',
      content: `## Go Big or Go Home

Most affordable 3D scanners are meant for objects the size of a coffee mug. When you try to scan a couch or a car bumper, you run into memory limits and massive alignment errors. The **Revopoint RANGE 2** solves this with a massive single-capture range of 860mm x 1380mm.

### Real-World Testing
I took the RANGE 2 into the garage to scan a modified car bumper for a custom fiberglass molding project. With marker dots applied, the RANGE 2 captured the entire geometry in under 5 minutes. The 9-axis IMU kept the tracking stable even as I awkwardly walked around the vehicle.

It also excels at full-body human scanning. The upgraded RGB cameras capture skin tones beautifully, making it an excellent tool for VR avatar creation or medical orthopedics. 

If your projects are larger than a breadbox, don't buy a POP. The RANGE 2 is the tool you actually need.`,
      thumbnail: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint INSPIRE: The Budget 3D Scanner for Beginners',
      slug: 'revopoint-inspire-review',
      content: `## A Gateway Drug to 3D Scanning

The **Revopoint INSPIRE** is designed to be small, pocketable, and highly affordable. At roughly half the cost of the POP 3, it asks a simple question: what do you actually need to get a usable 3D model?

### Performance
The INSPIRE tops out at 0.2mm accuracy. While that sounds "worse" than the 0.05mm of the POP 3, for 90% of basic FDM 3D printing projects (like replacing a broken plastic bracket or making a custom planter), 0.2mm is more than enough.

The scanner weighs just 140 grams and comes with a "magic mat" (a pre-marked scanning pad) that eliminates the need to stick messy marker dots on your objects. It connects easily via Wi-Fi to your smartphone, meaning you don't even need a PC to start scanning.

It’s the ultimate beginner scanner that doesn't compromise on the software ecosystem.`,
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revoscan 5 Software Review: The Unsung Hero of Revopoint',
      slug: 'revoscan-5-software-review',
      content: `## Hardware is only half the battle

When reviewing 3D scanners, the hardware gets all the glory. But veteran users know that the software is where the actual magic happens. **Revoscan 5** is a massive leap forward from previous iterations.

### Editing and Fusion
The workflow is now incredibly streamlined. After capturing a point cloud, Revoscan 5 offers automatic one-click processing, which is great for beginners. However, for professionals, the manual controls are robust. You can manually align multiple scans, easily trim out "noise" (like the table the object was sitting on), and apply advanced hole-filling algorithms.

The texture mapping has also seen a huge improvement. The UV mapping logic ensures that color textures are projected cleanly onto the final mesh without blurring. It exports to all standard formats (OBJ, STL, PLY) flawlessly. Revoscan 5 proves that Revopoint is listening to its community.`,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint MetroX: The Future of Metrology?',
      slug: 'revopoint-metrox-review',
      content: `## Crossing into Industrial Territory

Revopoint has traditionally dominated the prosumer and hobbyist market. The **MetroX** is their boldest step yet into pure industrial metrology. Utilizing hybrid laser and structured light technology, it aims to compete with scanners that cost ten times as much.

### Hybrid Technology
By combining multiple laser crosses for deep hole scanning and structured light for rapid surface capture, the MetroX eliminates the traditional blind spots of consumer scanners. In our tests on complex CNC machined parts, the laser mode effortlessly captured deep screw holes and sharp metallic edges that optical scanners usually struggle with.

With accuracy pushing into the low single-digit microns, the MetroX is a serious contender for QA/QC departments and serious reverse engineering firms looking to cut costs without cutting corners.`,
      thumbnail: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Is the Revopoint MIRACO Pro Worth the Extra Cost?',
      slug: 'revopoint-miraco-pro-vs-standard',
      content: `## 16GB vs 32GB RAM: Does it matter?

The standalone MIRACO comes in two flavors: the standard 16GB model and the Pro 32GB model. On paper, they have the exact same cameras, same processor, and same battery. So why pay more for the Pro?

### The Frame Limit
Because the MIRACO processes everything on-device, its RAM directly correlates to how many frames you can capture in a single session before the device runs out of memory and crashes. 

- **16GB Standard:** Can handle roughly 5,000 frames. Perfect for objects up to the size of a motorcycle.
- **32GB Pro:** Can handle up to 10,000 frames. Required if you want to scan an entire car exterior in a single continuous session.

If your projects are small to medium, save your money and get the standard. If you are doing massive projects and hate stitching multiple scans together on a PC later, the Pro is a lifesaver.`,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint RANGE vs. RANGE 2: Should You Upgrade?',
      slug: 'revopoint-range-vs-range-2',
      content: `## Iteration or Revolution?

If you already own the original RANGE, looking at the RANGE 2 can be tempting. But is it worth the upgrade?

### Key Upgrades
1. **RGB Camera:** The RANGE 2 now has much larger, higher-resolution color cameras. If you scan for VR, AR, or video games where texture matters, this is a night-and-day difference.
2. **IMU Sensor:** The addition of the 9-axis IMU means hand-scanning is significantly less frustrating. You lose tracking far less often.
3. **Capture Speed:** It scans at up to 16fps compared to the older 12-14fps, making the process slightly smoother.

**Verdict:** If you use your RANGE for engineering (where color doesn't matter) and you only scan on a turntable, keep your original RANGE. If you do hand-held scanning or need color textures, sell the old one and upgrade immediately.`,
      thumbnail: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1600&auto=format&fit=crop',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Accessories Deep Dive: The Revopoint Dual-Axis Turntable',
      slug: 'revopoint-dual-axis-turntable-review',
      content: `## Automating the Tedious Stuff

Scanning an object from one angle is easy. Scanning the bottom and the top usually requires flipping the object, running a second scan, and using software to stitch them together. 

The **Revopoint Dual-Axis Turntable** changes this workflow completely. It connects directly to Revoscan via Bluetooth. You program it to rotate 360 degrees, tilt up 30 degrees, rotate again, and then tilt down. 

### Why you need it
For the POP 3 and especially the MINI 2, this accessory is basically mandatory for a frustration-free experience. It eliminates the human error of moving too fast or shaking your hand. It turns a 20-minute manual scanning job into a 3-minute coffee break while the machine does the work. Highly recommended.`,
      thumbnail: 'https://images.unsplash.com/photo-1531297122539-5692f6e97bb1?q=80&w=1600&auto=format&fit=crop',
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

  console.log('Seeding completed successfully!')
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
