import xrayCar from "@assets/images/services/car.png"
import car from "@assets/images/services/car-full.png"

type ImageData = {
  src: string;
  height: number;
  width: number
}


interface BaseServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImg: ImageData;
  description: string;
  features: string[];
  icon: string;
  seoContent: string;
  locations: string[];
}

type ServiceWithBeforeAfter = BaseServiceData & {
  hasBeforeAfter: true;
  beforeImg: ImageData;
  afterImg: ImageData;
}


type ServiceWithoutBeforeAfter = BaseServiceData & {
  hasBeforeAfter: false;
  beforeImg?: never;
  afterImg?: never;
}

export type ServiceData = ServiceWithBeforeAfter | ServiceWithoutBeforeAfter;


export const SERVICE_LOCATIONS = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Nisku",
  "Leduc",
];

export const services: ServiceData[] = [
  {
    slug: "auto",
    title: "Auto Repair",
    shortTitle: "Auto Repair",
    metaTitle:
      "Auto Repair Services in Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Professional auto repair services in Edmonton, Sherwood Park, St. Albert, Nisku & Leduc. Expert diagnostics, repairs & maintenance for all vehicle makes and models.",
    heroHeadline: "Professional Auto Repair",
    heroSubheadline: "Edmonton & Surrounding Areas",
    heroImg: xrayCar,
    description:
      "Complete auto repair services for all makes and models. Our certified technicians deliver quality repairs you can trust.",
    features: [
      "Complete vehicle diagnostics",
      "Engine repair & rebuilds",
      "Transmission services",
      "Suspension & steering",
      "Electrical system repairs",
      "AC & heating services",
      "Exhaust system repairs",
      "Pre-purchase inspections",
    ],
    icon: "tabler:car",
    hasBeforeAfter: true,
    beforeImg: xrayCar,
    afterImg: car,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Trusted Auto Repair Services in Edmonton

At Bespoke Auto Repair, we understand that your vehicle is more than just transportation—it's essential to your daily life. That's why we provide comprehensive auto repair services designed to keep you safely on the road. Our Edmonton-based facility serves drivers throughout **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc** with honest, reliable automotive care.

### Why Choose Bespoke Auto Repair?

Our team of certified technicians brings decades of combined experience to every repair. We invest in state-of-the-art diagnostic equipment to accurately identify issues the first time, saving you time and money. Whether you're dealing with a check engine light, unusual noises, or scheduled maintenance, we have the expertise to handle it all.

### Comprehensive Auto Repair Solutions

From minor fixes to major overhauls, our auto repair services cover:

- **Engine Performance**: Diagnostics, tune-ups, and complete engine rebuilds
- **Drivetrain Services**: Transmission repair, clutch replacement, and differential service
- **Brake Systems**: Pad replacement, rotor resurfacing, and hydraulic repairs
- **Electrical Systems**: Battery service, alternator repair, and wiring diagnostics
- **Cooling & Climate**: Radiator service, AC repair, and heater core replacement

### Serving the Greater Edmonton Area

Conveniently located to serve **Edmonton** and surrounding communities, we're your neighborhood auto repair experts. Drivers from **Sherwood Park** appreciate our thorough inspections, while **St. Albert** residents trust us for honest pricing. **Nisku** and **Leduc** customers choose us for our commitment to quality and quick turnaround times.

### Schedule Your Auto Repair Today

Don't let vehicle problems disrupt your life. Contact Bespoke Auto Repair for professional service backed by our satisfaction guarantee. We offer competitive pricing, flexible scheduling, and a comfortable waiting area while your vehicle is serviced.
    `,
  },
  {
    slug: "truck",
    title: "Truck Repair",
    shortTitle: "Truck Repair",
    metaTitle:
      "Truck Repair Services in Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Expert truck repair services in Edmonton & area. Specializing in light-duty, medium-duty & diesel trucks. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "Expert Truck Repair",
    heroSubheadline: "Light & Medium Duty Specialists",
    heroImg: xrayCar,
    description:
      "Specialized truck repair services for light and medium-duty vehicles. From diesel diagnostics to fleet maintenance, we keep your trucks running.",
    features: [
      "Diesel engine diagnostics",
      "Fleet maintenance programs",
      "Suspension & lift kits",
      "Brake system overhauls",
      "Transmission rebuilds",
      "Cooling system service",
      "Electrical troubleshooting",
      "4x4 & drivetrain service",
    ],
    icon: "tabler:truck",
    hasBeforeAfter: true,
    beforeImg: xrayCar,
    afterImg: car,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Professional Truck Repair Services in Edmonton

Bespoke Auto Repair is your trusted destination for comprehensive truck repair services in the Edmonton area. We specialize in light-duty and medium-duty trucks, providing expert care for both personal and commercial vehicles. Our services extend throughout **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc**.

### Specialized Truck Repair Expertise

Trucks demand specialized knowledge and equipment. Our technicians are trained to handle the unique challenges of truck maintenance and repair, from heavy-duty brake systems to complex diesel diagnostics. We work on all major makes including Ford, Chevrolet, GMC, Ram, and Toyota.

### Our Truck Repair Services Include

- **Diesel Engine Service**: Injector cleaning, turbo repair, and complete engine diagnostics
- **Heavy-Duty Brakes**: Commercial-grade brake service for safe stopping power
- **Suspension Work**: Lift kit installation, leveling kits, and load-bearing upgrades
- **Transmission Service**: Automatic and manual transmission repair for trucks
- **Cooling Systems**: Heavy-duty radiator service and coolant system maintenance
- **Electrical Diagnostics**: Computer diagnostics for modern truck electronics

### Fleet Services for Edmonton Businesses

Local businesses throughout **Edmonton**, **Nisku**, and **Leduc** trust us with their fleet maintenance. We offer scheduled maintenance programs, priority service, and detailed record-keeping to keep your business moving. Reduce downtime and extend vehicle life with our proactive maintenance approach.

### Serving Truck Owners Across the Region

Whether you use your truck for work in **Nisku's** industrial area, commuting from **Sherwood Park**, or hauling in **St. Albert**, Bespoke Auto Repair has you covered. Our central **Edmonton** location makes us accessible to truck owners throughout the Capital Region.

### Get Your Truck Serviced Today

Your truck works hard—make sure it gets the care it deserves. Contact us for honest assessments, fair pricing, and repairs done right the first time.
    `,
  },
  {
    slug: "brake",
    title: "Brake Service",
    shortTitle: "Brake Service",
    metaTitle:
      "Brake Service & Repair in Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Professional brake service in Edmonton. Brake pads, rotors, calipers & complete brake system repairs. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "Complete Brake Service",
    heroSubheadline: "Your Safety is Our Priority",
    heroImg: xrayCar,
    description:
      "Professional brake inspection, repair, and replacement services. We ensure your vehicle stops safely every time.",
    features: [
      "Brake pad replacement",
      "Rotor resurfacing & replacement",
      "Caliper repair & rebuild",
      "Brake fluid flush",
      "ABS system diagnostics",
      "Emergency brake adjustment",
      "Brake line inspection",
      "Performance brake upgrades",
    ],
    icon: "tabler:brake",
    hasBeforeAfter: false,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Expert Brake Service in Edmonton

Your brakes are your vehicle's most critical safety system. At Bespoke Auto Repair, we provide thorough brake inspections and repairs to ensure you and your family stay safe on Edmonton's roads. Our brake services are available to drivers in **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc**.

### Signs You Need Brake Service

Don't ignore warning signs that your brakes need attention:
- Squealing or grinding noises when braking
- Vibration or pulsation in the brake pedal
- Vehicle pulling to one side when braking
- Soft or spongy brake pedal feel
- Brake warning light illuminated
- Longer stopping distances

### Comprehensive Brake Services

Our certified technicians provide complete brake system care:

- **Brake Inspections**: Thorough examination of pads, rotors, calipers, and lines
- **Pad & Rotor Service**: Quality replacement parts for reliable stopping
- **Caliper Repair**: Rebuild or replacement of seized or leaking calipers
- **Hydraulic Service**: Brake fluid flush and bleeding for optimal performance
- **ABS Diagnostics**: Electronic troubleshooting for anti-lock brake systems
- **Performance Upgrades**: High-performance pads and rotors for enhanced stopping

### Quality Parts, Expert Installation

We use quality brake components that meet or exceed OEM specifications. Whether you need basic brake pads or a complete brake system overhaul, we provide options to fit your budget without compromising safety.

### Brake Service for the Edmonton Area

Drivers throughout **Edmonton** and surrounding areas trust Bespoke Auto Repair for their brake service needs. **Sherwood Park** commuters, **St. Albert** families, and commercial drivers from **Nisku** and **Leduc** all rely on our expertise.

### Don't Compromise on Safety

Brake problems only get worse with time. Schedule your brake inspection today and drive with confidence knowing your vehicle will stop when you need it to.
    `,
  },
  {
    slug: "engine",
    title: "Engine Diagnostics",
    shortTitle: "Engine Diagnostics",
    metaTitle:
      "Engine Diagnostics & Repair Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Advanced engine diagnostics in Edmonton. Check engine light, performance issues & complete engine repair. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "Advanced Engine Diagnostics",
    heroSubheadline: "Precision Troubleshooting",
    heroImg: xrayCar,
    description:
      "State-of-the-art diagnostic equipment and expert technicians to identify and resolve engine issues quickly and accurately.",
    features: [
      "Check engine light diagnosis",
      "Computer system scanning",
      "Performance troubleshooting",
      "Emissions testing",
      "Fuel system analysis",
      "Ignition system testing",
      "Compression testing",
      "Electrical diagnostics",
    ],
    icon: "tabler:engine",
    hasBeforeAfter: false,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Professional Engine Diagnostics in Edmonton

When your check engine light comes on or your vehicle isn't performing as it should, Bespoke Auto Repair has the technology and expertise to identify the problem. Our advanced engine diagnostics services help Edmonton-area drivers—including those in **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc**—get accurate answers fast.

### Modern Vehicles Require Modern Diagnostics

Today's vehicles contain dozens of sensors and computers that control everything from fuel delivery to emissions. When something goes wrong, generic code readers often aren't enough. Our diagnostic equipment communicates directly with your vehicle's systems to pinpoint issues accurately.

### Our Engine Diagnostic Services

- **Check Engine Light Diagnosis**: Comprehensive scanning to identify the root cause
- **Live Data Analysis**: Real-time monitoring of sensor readings and system performance
- **Performance Diagnostics**: Identifying causes of poor fuel economy, hesitation, or power loss
- **Emissions Diagnostics**: Troubleshooting for emissions test failures
- **Electrical System Analysis**: Tracing shorts, opens, and communication errors
- **Drivability Concerns**: Diagnosing stalling, rough idle, and misfires

### Why Accurate Diagnosis Matters

Incorrect diagnosis leads to unnecessary repairs and wasted money. Our systematic approach ensures we find the actual problem before recommending repairs. We'll explain what we find in plain language and provide repair options with transparent pricing.

### Serving Greater Edmonton

Our diagnostic expertise serves the entire Capital Region. **Edmonton** residents appreciate our thorough approach, while customers from **Sherwood Park** and **St. Albert** value our honest assessments. **Nisku** and **Leduc** drivers trust us to keep their vehicles running efficiently.

### Get Answers Today

Stop guessing about what's wrong with your vehicle. Schedule a diagnostic appointment at Bespoke Auto Repair and get the answers you need to make informed decisions about your vehicle's care.
    `,
  },
  {
    slug: "cvip",
    title: "CVIP / Out-of-Province Inspections",
    shortTitle: "CVIP Inspections",
    metaTitle:
      "CVIP & Out-of-Province Inspections Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Licensed CVIP & out-of-province vehicle inspections in Edmonton. Fast, thorough inspections for registration. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "CVIP & Out-of-Province",
    heroSubheadline: "Licensed Inspection Facility",
    heroImg: xrayCar,
    description:
      "Licensed inspection facility for commercial vehicle inspections and out-of-province registrations. Get your vehicle road-ready and registered.",
    features: [
      "Commercial vehicle inspections",
      "Out-of-province inspections",
      "Safety inspections",
      "Pre-purchase inspections",
      "Fleet inspections",
      "Detailed inspection reports",
      "Quick turnaround times",
      "Repair recommendations",
    ],
    icon: "tabler:clipboard-check",
    hasBeforeAfter: false,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Licensed CVIP & Out-of-Province Inspections in Edmonton

Bespoke Auto Repair is a licensed inspection facility providing Commercial Vehicle Inspection Program (CVIP) and out-of-province inspections for the Edmonton area. Whether you're registering a vehicle from another province or need your commercial vehicle certified, we deliver thorough, efficient inspection services to **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc**.

### CVIP Inspections

Commercial vehicles in Alberta require regular CVIP inspections to ensure they meet provincial safety standards. Our certified inspectors examine:

- Brake systems and components
- Steering and suspension
- Lighting and electrical systems
- Tires and wheels
- Frame and body condition
- Exhaust and emissions systems
- Safety equipment

### Out-of-Province Vehicle Inspections

Moving to Alberta or purchasing a vehicle from another province? An out-of-province inspection is required for registration. We'll thoroughly inspect your vehicle and provide the documentation you need for Alberta registration.

### What to Expect

Our inspection process is straightforward:
1. **Schedule**: Book your inspection at a convenient time
2. **Inspect**: Our certified technicians perform a comprehensive evaluation
3. **Report**: Receive detailed findings and any required repairs
4. **Certify**: Once standards are met, we provide certification documents

### Fast Turnaround for Commercial Operations

We understand that commercial vehicles earn their keep on the road, not in the shop. Our **Nisku** and **Leduc** commercial customers appreciate our quick turnaround times and flexible scheduling. Fleet operators throughout **Edmonton** trust us for efficient, thorough inspections.

### Conveniently Located for Greater Edmonton

Our facility serves the entire Capital Region. **Edmonton** residents, **Sherwood Park** commuters, and **St. Albert** families all benefit from our central location and professional service.

### Schedule Your Inspection

Don't delay your vehicle registration or certification. Contact Bespoke Auto Repair to schedule your CVIP or out-of-province inspection today.
    `,
  },
  {
    slug: "trailer",
    title: "Trailer / RV Repair",
    shortTitle: "Trailer & RV",
    metaTitle:
      "Trailer & RV Repair Services Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Expert trailer & RV repair in Edmonton. Brakes, bearings, electrical & structural repairs. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "Trailer & RV Repair",
    heroSubheadline: "Adventure-Ready Service",
    heroImg: xrayCar,
    description:
      "Complete trailer and RV repair services. From wheel bearings to electrical systems, we'll get your trailer road-ready for your next adventure.",
    features: [
      "Wheel bearing service",
      "Trailer brake repair",
      "Electrical system repairs",
      "Hitch & coupler service",
      "Suspension repairs",
      "Structural repairs",
      "Lighting & wiring",
      "Safety inspections",
    ],
    icon: "tabler:camper",
    hasBeforeAfter: false,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Professional Trailer & RV Repair in Edmonton

Whether you're towing a utility trailer for work or heading out in your RV for adventure, Bespoke Auto Repair provides expert trailer and RV repair services. Our Edmonton shop serves trailer owners throughout **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc** with comprehensive maintenance and repair.

### Trailer Repair Services

Trailers endure significant stress and require regular maintenance:

- **Wheel Bearings**: Inspection, repacking, and replacement to prevent roadside failures
- **Brake Service**: Electric and hydraulic trailer brake repair and adjustment
- **Electrical Systems**: Wiring repair, connector replacement, and lighting service
- **Suspension**: Leaf spring, axle, and suspension component repairs
- **Structural**: Frame repairs, floor replacement, and body work
- **Hitches & Couplers**: Inspection, repair, and upgrades

### RV Repair Services

Your RV is your home away from home. We provide:

- Chassis and drivetrain service
- Brake system maintenance
- Suspension repairs and upgrades
- Electrical troubleshooting
- Generator service
- Pre-trip safety inspections

### Preparing for the Season

Before hitting the road, ensure your trailer or RV is ready. Our pre-season inspection covers all critical systems so you can travel with confidence. We'll identify potential issues before they become roadside emergencies.

### Serving Edmonton's Trailer Owners

From utility trailers used daily in **Nisku** and **Leduc** industrial areas to recreational trailers heading to Alberta's beautiful campgrounds, we service them all. **Edmonton**, **Sherwood Park**, and **St. Albert** trailer owners trust our thorough approach and fair pricing.

### Commercial & Personal Trailers

We work on all trailer types:
- Utility trailers
- Enclosed cargo trailers
- Car haulers
- Boat trailers
- Horse trailers
- Travel trailers
- Fifth wheels

### Get Road-Ready Today

Don't let trailer problems delay your work or vacation. Contact Bespoke Auto Repair for professional trailer and RV service.
    `,
  },
  {
    slug: "oil",
    title: "Oil Change & Maintenance",
    shortTitle: "Oil Change",
    metaTitle:
      "Oil Change & Vehicle Maintenance Edmonton | Bespoke Auto Repair",
    metaDescription:
      "Quick, quality oil changes in Edmonton. Synthetic & conventional oil, filter replacement & multi-point inspection. Serving Sherwood Park, St. Albert, Nisku & Leduc.",
    heroHeadline: "Oil Change & Maintenance",
    heroSubheadline: "Keep Your Engine Running Smooth",
    heroImg: xrayCar,
    description:
      "Regular oil changes and scheduled maintenance to extend your vehicle's life. Quick service with quality products and thorough inspections.",
    features: [
      "Conventional oil change",
      "Synthetic oil change",
      "Oil filter replacement",
      "Multi-point inspection",
      "Fluid top-offs",
      "Tire pressure check",
      "Filter replacements",
      "Scheduled maintenance",
    ],
    icon: "tabler:droplet",
    hasBeforeAfter: false,
    locations: SERVICE_LOCATIONS,
    seoContent: `
## Quality Oil Change Services in Edmonton

Regular oil changes are the foundation of vehicle maintenance. At Bespoke Auto Repair, we provide quick, thorough oil change services that keep your engine protected and running efficiently. Our Edmonton location serves drivers throughout **Sherwood Park**, **St. Albert**, **Nisku**, and **Leduc**.

### More Than Just an Oil Change

Every oil change at Bespoke Auto Repair includes:

- **Quality Oil**: Your choice of conventional, synthetic blend, or full synthetic
- **Premium Filters**: Quality oil filters for maximum engine protection
- **Multi-Point Inspection**: We check fluids, belts, hoses, and more
- **Fluid Top-Off**: Windshield washer, coolant, and other vital fluids
- **Tire Check**: Pressure adjustment and visual inspection
- **Honest Assessment**: We'll let you know if we spot any concerns

### Why Oil Changes Matter

Clean oil is essential for your engine's health:
- Reduces friction and wear on internal components
- Helps regulate engine temperature
- Removes contaminants and debris
- Maintains fuel efficiency
- Extends engine life

### Conventional vs. Synthetic Oil

We offer options to fit your vehicle and driving habits:

**Conventional Oil**: Suitable for many vehicles with regular driving patterns. Affordable and effective when changed at proper intervals.

**Synthetic Oil**: Superior protection for extreme temperatures, towing, or extended intervals. Ideal for modern engines and demanding conditions.

Our technicians can recommend the right oil for your specific vehicle and driving habits.

### Scheduled Maintenance Services

Beyond oil changes, we provide complete scheduled maintenance:
- Transmission fluid service
- Coolant flush
- Brake fluid exchange
- Power steering service
- Air filter replacement
- Cabin filter replacement
- Spark plug replacement
- Timing belt service

### Serving the Edmonton Area

Convenient, quality oil changes for the entire Capital Region. **Edmonton** drivers appreciate our efficiency, while **Sherwood Park** and **St. Albert** residents value our thorough inspections. **Nisku** and **Leduc** customers trust us for reliable service.

### Schedule Your Oil Change

Don't delay this essential maintenance. Regular oil changes cost far less than engine repairs. Book your appointment at Bespoke Auto Repair today.
    `,
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getOtherServices = (currentSlug: string): ServiceData[] => {
  return services.filter((s) => s.slug !== currentSlug).slice(0, 3);
};

export const stats = [
  { value: 8000, suffix: "+", label: "Happy Clients" },
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];
