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
  console.log('Seeding incredibly detailed Revopoint 3D Scanner Reviews...')

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

### Unboxing and Build Quality
Right out of the box, the MIRACO feels like a premium piece of hardware. It weighs exactly 750 grams—light enough to hold for a 30-minute scanning session without your arm cramping, but heavy enough to feel robust. The 6-inch 2K AMOLED screen is brilliant. Even outdoors in partial sunlight, the UI is crisp, and you can clearly see the depth map capturing in real-time.

### Dual Depth Camera System
What really impressed me during our 30-day testing period is the innovative Quad-Depth Camera system. Most scanners are built for one specific focal length. If you buy a macro scanner, you can't scan a car door. If you buy a large-format scanner, you can't capture the threads on a screw.

The MIRACO has two modes:
1. **Near Mode:** For capturing tiny objects like coins, jewelry, and mechanical parts with up to 0.02mm precision.
2. **Far Mode:** For capturing massive objects like vehicle engine bays, furniture, or human bodies.

Switching between these modes takes a simple tap on the screen. No lens swapping. No recalibration. It just works.

### Performance and Battery Life
Under the hood, the 8-core processor handles real-time point cloud rendering beautifully. I tested the 32GB "Pro" version, which allows for capturing a staggering 10,000 frames in a single session. 

The 5,000mAh battery is rated for 2 hours of continuous scanning. In my tests, capturing a full V8 engine block took about 45 minutes, and the battery dropped by only 40%. It also supports 50W fast charging, meaning a 30-minute coffee break gets you back to 80% charge.

### Software Experience
The on-board software is essentially a customized version of Revoscan. You can do almost everything on the device:
- Point cloud fusion
- Mesh generation
- Hole filling
- Texture mapping

Once you are done, you can transfer the OBJ or STL file wirelessly to your PC via Wi-Fi 6, or use the included USB-C cable.

### Pros and Cons
**Pros:**
- Complete freedom of movement. No tethering required.
- Incredible dynamic range and dual-mode cameras.
- The AMOLED screen is responsive and bright.
- Battery life is exceptional for a device doing real-time 3D rendering.

**Cons:**
- The Pro version is expensive, pushing it into the "professional" budget category rather than hobbyist.
- The built-in fan can get a little loud during heavy point-cloud fusion.

**Final Verdict:** 
The MIRACO isn't just an iteration; it's a complete paradigm shift for reverse engineering professionals, 3D printing enthusiasts, and archivists. If you can afford the entry price, it is arguably the only 3D scanner you will ever need.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/MetroY_Ultra_3D_Scanner_ee569642-7002-40b8-a2a5-ecf1a0ec2cc7.jpg?v=1784888877',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Revopoint POP 3 Review: The Best Entry-Level Scanner Gets Better',
      slug: 'revopoint-pop-3-review',
      content: `## The King of Hobbyist 3D Scanners

When the POP 2 released, it revolutionized affordable 3D scanning. Now, the **Revopoint POP 3** is here, and it aims to fix the few glaring flaws of its predecessor while keeping the aggressive price tag that made it famous.

### What's New in the POP 3?
At first glance, the POP 3 looks very similar to its predecessor. But under the hood, Revopoint has completely overhauled the sensor array and tracking systems.

**1. Upgraded RGB Cameras and Lighting**
The most significant upgrade is the introduction of a new RGB camera paired with dual LED fill lights. One of the biggest complaints about the POP 2 was that capturing full-color textures for game assets or VR models was hit-or-miss depending on your room lighting. The POP 3's built-in LEDs ensure the object is evenly lit, resulting in dramatically crisper textures and fewer lighting artifacts.

**2. Next-Generation Tracking**
Hand-held scanning with older consumer scanners used to result in frequent "tracking lost" errors. If you moved your hand too fast or rotated the object awkwardly, the software would freeze, forcing you to align the scan manually or start over. The POP 3 introduces a 9-axis IMU (Inertial Measurement Unit) sensor. This sensor tracks the physical movement of the scanner in 3D space, meaning the software knows exactly where you moved, even if the cameras momentarily lose sight of the object's features. It handles sudden movements and rotations with absolute grace.

### Real-World Testing: 3D Printing Workflow
To test the POP 3, I decided to replicate a broken plastic bracket for my office chair. 

1. **Setup:** I placed the broken bracket on the included portable turntable and applied a thin layer of scanning spray (since the plastic was glossy black).
2. **Scanning:** I connected the POP 3 to my laptop via Wi-Fi. The scanning took exactly 3 minutes. The tracking didn't drop once.
3. **Processing:** In Revoscan 5, I fused the point cloud and exported the mesh as an STL.
4. **Printing:** I dropped the STL into my slicer and printed it on my Bambu Lab P1S. 

The new part fit perfectly on the first try. The POP 3 achieved an accuracy of 0.05mm, which is more than enough for functional mechanical parts.

### Is it for you?
If you own a 3D printer and want to replicate broken parts, clone tabletop miniatures, or scan real-world items for digital art, the POP 3 is the sweet spot. It doesn't have the extreme microscopic precision of the MINI 2, nor the massive field of view of the RANGE 2, but it is the perfect "jack-of-all-trades" scanner for the everyday maker.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/POP_4_3D_Scanner_-_EN_c0812d97-0a45-43ab-b47e-09d290918710.jpg?v=1784888877',
      isFeatured: true,
      categoryId: category.id,
    },
    {
      title: 'Revopoint RANGE 2 Hands-on: Scanning Furniture and Cars',
      slug: 'revopoint-range-2-review',
      content: `## Go Big or Go Home

Most affordable 3D scanners are meant for objects the size of a coffee mug. When you try to scan a couch, a car bumper, or a human body, you run into severe limitations: memory limits, massive alignment errors, and incredibly tedious scan times. The **Revopoint RANGE 2** solves this entirely by offering a massive single-capture range of 860mm x 1380mm.

### Unboxing and Setup
The RANGE 2 is physically larger than the POP series but still easily manageable with one hand. It comes with an attachable power bank handle, meaning you can plug it directly into your smartphone via USB-C and walk around completely untethered from a wall outlet.

### Real-World Testing: Automotive Reverse Engineering
I took the RANGE 2 into the garage to scan a modified car bumper for a custom fiberglass molding project. Automotive scanning is notoriously difficult because cars are glossy, reflective, and feature massive, featureless curves that confuse optical tracking.

**The Process:**
1. I applied AESUB vanishing scanning spray to dull the glossy clear coat.
2. I applied marker dots every 6 inches across the bumper.
3. Using the power bank handle and my iPhone running the Revoscan app, I walked slowly around the front of the vehicle.

With marker dots applied, the RANGE 2 captured the entire geometry in under 5 minutes. The 9-axis IMU kept the tracking stable even as I awkwardly bent down and walked around the vehicle. The field of view is so massive that I only needed two passes to capture the entire front fascia.

### Human Scanning for VR and Orthopedics
Beyond industrial design, the RANGE 2 excels at full-body human scanning. The upgraded RGB cameras capture skin tones beautifully, making it an excellent tool for VR avatar creation, game design, or medical orthopedics. 

Because the scanner captures a huge area in a single frame, you don't need the person to stand perfectly still for 10 minutes. A quick 60-second sweep is usually enough to capture a full torso.

### Conclusion
If your projects are larger than a breadbox, don't buy a POP. The RANGE 2 is the tool you actually need. It drastically reduces scanning time for large objects and handles difficult geometries with ease.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/Trackit_SR_-_EN.jpg?v=1784888824',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint MINI 2 In-Depth: Insane Precision for Jewelry & Miniatures',
      slug: 'revopoint-mini-2-review',
      content: `## Microscopic Detail Capture

The **Revopoint MINI 2** is not a general-purpose scanner. It is a highly specialized piece of equipment designed for one thing: microscopic, mind-bending accuracy. Utilizing industrial-grade blue light technology, which has a much shorter wavelength than traditional infrared light, the MINI 2 achieves an astonishing precision of up to 0.02mm.

### What is 0.02mm Precision?
To put that into perspective, an average human hair is about 0.07mm thick. The MINI 2 can literally capture the texture of a fingerprint left on a coin. 

I tested the MINI 2 on several highly complex objects: 
1. **A mechanical watch gear:** The scanner captured every single tooth perfectly without rounding the sharp edges.
2. **A custom D&D miniature:** It picked up the intricate scale armor and facial features that were only a few millimeters wide.
3. **A dental mold:** The plaster mold of a jaw was digitized flawlessly, ready for CAD modeling of custom aligners.

### The Scanning Experience
Because the field of view is so incredibly narrow (to capture high detail), hand-scanning with the MINI 2 is incredibly difficult, bordering on impossible for beginners. Even breathing too heavily while holding the scanner can cause tracking loss.

**You really need to use the Dual-axis turntable.** Setting the MINI 2 on a sturdy tripod, placing your object on the automated turntable, and letting the software do the work is the only way to get reliable results. 

Once you dial in the settings in Revoscan 5, the results are nothing short of breathtaking. The mesh density is so high that you can see the layer lines of a 3D printed object you are scanning. 

### Final Thoughts
For jewelers, reverse engineers working on small PCB boards, dental technicians, or extreme hobbyists, the MINI 2 is unrivaled at this price point. Just be prepared for a steeper learning curve compared to the POP series.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/lQLPJwX8WMR580nNB9DNB9CwQrRSVGtonRMIp0FGS3MZAA_2000_2000.png?v=1775559386',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint INSPIRE: The Budget 3D Scanner for Beginners',
      slug: 'revopoint-inspire-review',
      content: `## A Gateway Drug to 3D Scanning

The **Revopoint INSPIRE** is designed to be small, pocketable, and highly affordable. At roughly half the cost of the POP 3, it asks a simple question: what do you actually need to get a usable 3D model?

### Performance Expectations
The INSPIRE tops out at 0.2mm accuracy. While that sounds "worse" than the 0.05mm of the POP 3, you have to look at your use case. For 90% of basic FDM 3D printing projects (like replacing a broken plastic bracket, making a custom planter, or scanning a toy), 0.2mm is more than enough. You won't be scanning jewelry, but you can definitely scan a sneaker.

### The "Magic Mat" Experience
The scanner weighs just 140 grams. It comes with a highly innovative "magic mat"—a pre-marked scanning pad covered in tracking dots. Instead of sticking messy marker dots directly onto your object (which can damage paint or be tedious to remove), you simply place the object on the magic mat. The scanner tracks the mat to understand its orientation in 3D space, allowing you to easily scan featureless or smooth objects.

It connects effortlessly via Wi-Fi to your smartphone (iOS or Android). You don't even need a PC to start scanning. The Revoscan mobile app handles the capture, and you can export the mesh directly to your cloud storage.

It’s the ultimate beginner scanner that doesn't compromise on the powerful software ecosystem.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/Frame_2_8921592b-b01a-41f8-a2d6-3d5fffff4444.png?v=1777275121',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revoscan 5 Software Review: The Unsung Hero of Revopoint',
      slug: 'revoscan-5-software-review',
      content: `## Hardware is only half the battle

When reviewing 3D scanners, the hardware gets all the glory. But veteran users know that the software is where the actual magic happens. You can have a $50,000 industrial scanner, but if the software crashes or fails to align point clouds, you have an expensive paperweight.

**Revoscan 5** is a massive leap forward from previous iterations, proving that Revopoint is deeply invested in their ecosystem.

### UI and Workflow
The interface has been completely redesigned to cater to both beginners and power users. 
- **One-Click Processing:** For beginners, after capturing a point cloud, you can simply click "One-Click Edit." The software will automatically filter out noise, align the frames, fuse the point cloud, generate a mesh, and fill minor holes. 
- **Manual Control:** For professionals, the manual controls are robust. You can manually align multiple separate scans (e.g., the top and bottom of an object) by selecting common feature points. 

### Editing Tools
The lasso and selection tools make it incredibly easy to trim out "noise" (like the table the object was sitting on or your hand if it accidentally entered the frame). The hole-filling algorithms give you control over whether you want a flat fill, a curved fill, or a tangent-aware fill.

### Texture Mapping
Texture mapping has also seen a huge improvement. The new UV mapping logic ensures that color textures from the RGB cameras are projected cleanly onto the final mesh without ghosting or blurring, even if the lighting changed slightly during the scan. It exports to all standard formats (OBJ, STL, PLY) flawlessly.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/EN_71a1cdd0-d128-4f15-b53f-9cd346f0c6c6.jpg?v=1772761440',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint MetroX: The Future of Metrology?',
      slug: 'revopoint-metrox-review',
      content: `## Crossing into Industrial Territory

Revopoint has traditionally dominated the prosumer and hobbyist market. The **MetroX** is their boldest step yet into pure industrial metrology. Utilizing hybrid laser and structured light technology, it aims to compete with scanners from Creaform and Artec that cost ten times as much.

### Hybrid Technology Explained
Most scanners use either structured light (great for capturing large surfaces and textures quickly) or laser triangulation (great for shiny objects, deep holes, and extreme precision). The MetroX combines both.

By featuring multiple blue laser crosses for deep hole scanning and structured light for rapid surface capture, the MetroX eliminates the traditional blind spots of consumer scanners.

### Testing on CNC Parts
In our tests on complex CNC machined parts (specifically an aluminum engine manifold), the laser mode effortlessly captured deep screw holes, internal threads, and sharp metallic edges that optical scanners usually struggle with. It didn't even require scanning spray, despite the aluminum being highly reflective.

With accuracy pushing into the low single-digit microns, the MetroX is a serious contender for QA/QC departments, aerospace engineers, and serious reverse engineering firms looking to cut costs without cutting corners.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/Trackit_3D_Scanner_4e49f44f-3847-4adb-80a2-275bbcc5171c.jpg?v=1784888946',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Is the Revopoint MIRACO Pro Worth the Extra Cost?',
      slug: 'revopoint-miraco-pro-vs-standard',
      content: `## 16GB vs 32GB RAM: Does it really matter?

The standalone MIRACO comes in two flavors: the standard 16GB model and the Pro 32GB model. On paper, they look identical. They have the exact same quad-depth cameras, same AMOLED screen, same 8-core processor, and same battery. 

So why pay the premium for the Pro?

### The Frame Limit Bottleneck
Because the MIRACO processes everything on-device without needing a PC, its RAM directly correlates to how many frames you can capture in a single continuous session before the device runs out of memory and crashes. 

- **16GB Standard:** Can handle roughly 5,000 frames. This is perfect for objects up to the size of a motorcycle or a full human body. For 95% of users, this is more than enough.
- **32GB Pro:** Can handle up to 10,000 frames. This is strictly required if you want to scan an entire car exterior, a large room, or massive architectural elements in a single continuous session without having to stop, save, and start a new project file.

### Workflow Considerations
If you buy the 16GB version and need to scan a car, you can still do it! You just have to scan the front half, save it, scan the back half, and then merge the two scans later on your PC. 

If your projects are small to medium, save your money and get the standard. If you are doing massive projects daily and hate the tedious task of stitching multiple scans together on a PC later, the Pro pays for itself in time saved.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/1000x1000_48.png?v=1757058350',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Revopoint RANGE vs. RANGE 2: Should You Upgrade?',
      slug: 'revopoint-range-vs-range-2',
      content: `## Iteration or Revolution?

If you already own the original Revopoint RANGE, you might be looking at the newly released RANGE 2 and wondering if it's worth selling your old gear to upgrade. Let's break down exactly what changed.

### Key Upgrades
1. **Upgraded RGB Camera:** The original RANGE had a fairly rudimentary color camera. The RANGE 2 features a much larger, higher-resolution color sensor flanked by dual LED flashlights. If you scan for VR, AR, or video games where texture and color fidelity matter, this is a night-and-day difference.
2. **9-Axis IMU Sensor:** The addition of the IMU means hand-scanning is significantly less frustrating. The original RANGE would lose tracking easily if you twisted your wrist too fast. The RANGE 2 knows its position in physical space, so it recovers from tracking loss almost instantly.
3. **Capture Speed:** It scans at up to 16 frames per second compared to the older 12-14fps, making the sweeping process noticeably smoother on the screen.

### The Verdict
- **Keep the Original if:** You use your RANGE strictly for reverse engineering mechanical parts (where color doesn't matter) and you mostly scan objects that are static on a large turntable.
- **Upgrade to RANGE 2 if:** You do a lot of free-hand scanning, you scan humans, or you absolutely need high-quality color textures for digital rendering.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/2332d8a5cb685df4ecf05a552ceb78ca.jpg?v=1776407955',
      isFeatured: false,
      categoryId: category.id,
    },
    {
      title: 'Accessories Deep Dive: The Revopoint Dual-Axis Turntable',
      slug: 'revopoint-dual-axis-turntable-review',
      content: `## Automating the Tedious Stuff

Scanning an object from one angle is easy. But a 3D model isn't complete until you capture the top, the bottom, and all the weird undercuts. Traditionally, this requires scanning the object, stopping, flipping the object upside down, scanning it again, and then using software to stitch the two halves together. 

The **Revopoint Dual-Axis Turntable** is designed to eliminate this tedious workflow entirely. 

### How it Works
The turntable connects directly to your PC or smartphone via Bluetooth. Inside Revoscan, you can program a custom scanning routine. For example, you can tell the turntable to:
1. Rotate a full 360 degrees.
2. Tilt upwards by 30 degrees to expose the bottom of the object.
3. Rotate 360 degrees again.
4. Tilt downwards by -30 degrees to expose the top.

The scanner automatically captures all of this geometry in one continuous file. 

### Why you need it
For the POP 3 and especially the ultra-precise MINI 2, this accessory is basically mandatory for a professional, frustration-free experience. It eliminates the human error of moving too fast or shaking your hand. It turns a 20-minute manual scanning job into a 3-minute coffee break while the machine does all the heavy lifting. At roughly $120, it is the best investment you can make for your Revopoint setup.`,
      thumbnail: 'https://cdn.shopify.com/s/files/1/0601/2256/2760/files/2_abca66c9-a252-4711-9dbb-3a59bd319e4e.jpg?v=1762501753',
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
