export interface CityContent {
  city: string;
  slug: string;
  country: string;
  countrySlug: string;
  tagline: string;
  overview: string;
  costBreakdown: { item: string; cost: string }[];
  monthlyBudget: { budget: string; comfortable: string; luxury: string };
  bestFor: string[];
  neighbourhoods: { name: string; vibe: string }[];
  practicalInfo: { climate: string; internet: string; coworking: string; safety: string; transport: string };
  nomadScore: number;
  highlights: string[];
}

export const CITY_CONTENT: Record<string, CityContent> = {
  bangkok: {
    city: "Bangkok", slug: "bangkok", country: "Thailand", countrySlug: "thailand",
    tagline: "Asia's most electric city — world-class everything at Southeast Asian prices",
    overview: "Bangkok is the undisputed king of Southeast Asian cities for expats and digital nomads. A megacity of 10 million people, Bangkok dazzles with gilded temples, rooftop bars, legendary street food, sky-train infrastructure, and a nightlife scene that never sleeps. Sukhumvit, Silom, and Ari are the primary expat districts; each has distinct character. Bangkok's combination of first-world infrastructure and developing-world prices creates an unmatched lifestyle-to-cost ratio.",
    costBreakdown: [
      { item: "1BR apartment (expat area)", cost: "$450–$900/mo" },
      { item: "Co-working space", cost: "$80–$150/mo" },
      { item: "Street food meal", cost: "$1–$3" },
      { item: "Restaurant meal", cost: "$5–$15" },
      { item: "BTS Skytrain monthly pass", cost: "$30" },
      { item: "Gym membership", cost: "$25–$50/mo" },
      { item: "Private health insurance", cost: "$80–$150/mo" }
    ],
    monthlyBudget: { budget: "$800", comfortable: "$1,400", luxury: "$3,000" },
    bestFor: ["Digital Nomads", "Foodies", "Night Owls", "Wellness Seekers", "Social Butterflies"],
    neighbourhoods: [
      { name: "Sukhumvit", vibe: "Main expat hub — malls, restaurants, Nana/Asoke BTS hubs" },
      { name: "Silom/Sathorn", vibe: "Business district with excellent dining and Lumpini Park proximity" },
      { name: "Ari", vibe: "Trendy, local feel, hipster cafés, BTS connected, increasingly popular with nomads" },
      { name: "Ekkamai/Thonglor", vibe: "Upscale, creative class, excellent Japanese food, nightlife" },
      { name: "Phra Nakhon (Old City)", vibe: "Budget, temples, authentic Thai character, backpacker vibe" }
    ],
    practicalInfo: {
      climate: "Hot and humid year-round. Nov–Feb is most pleasant (25–32°C). Apr–Jun is extreme heat (35–40°C). Jun–Oct is monsoon.",
      internet: "Excellent 4G/5G coverage. Fibre broadband widely available 500Mbps+. Co-working spaces are ubiquitous.",
      coworking: "Hundreds of options — HUBBA, The Hive, Mango, WeWork. Café culture also provides excellent casual work spots.",
      safety: "Generally safe for expats. Road accidents (motorbikes) are the main risk. Petty theft in tourist areas. Political protests occur occasionally.",
      transport: "BTS Skytrain and MRT subway excellent in covered areas. Grab app for taxis/motorbikes. Outside BTS zones, motorbike taxis dominate."
    },
    nomadScore: 9,
    highlights: ["World's best street food at $1–$3/meal", "Rooftop bars with panoramic city views", "Wat Pho, Grand Palace, Floating Markets", "Excellent modern hospitals at fraction of Western costs", "Infinite nightlife from Khao San Road to Thonglor"]
  },
  "chiang-mai": {
    city: "Chiang Mai", slug: "chiang-mai", country: "Thailand", countrySlug: "thailand",
    tagline: "The original digital nomad city — laid-back, affordable, and surrounded by mountains",
    overview: "Chiang Mai is the city that popularised the digital nomad lifestyle globally. Located in northern Thailand, it offers a dramatically slower pace than Bangkok, surrounded by jungle-covered mountains, ancient temples, and elephant sanctuaries. The Nimman area is the nomad epicentre — packed with excellent co-working spaces, third-wave cafés, and excellent international cuisine at local prices. Chiang Mai is approximately 30–40% cheaper than Bangkok.",
    costBreakdown: [
      { item: "1BR apartment (Nimman area)", cost: "$250–$600/mo" },
      { item: "Co-working space", cost: "$60–$100/mo" },
      { item: "Street food meal", cost: "$1–$2" },
      { item: "Restaurant meal (Nimman)", cost: "$4–$12" },
      { item: "Songthaew (shared taxi)", cost: "$0.50–$1/ride" },
      { item: "Gym membership", cost: "$20–$40/mo" },
      { item: "Scooter rental", cost: "$80–$120/mo" }
    ],
    monthlyBudget: { budget: "$600", comfortable: "$1,000", luxury: "$2,000" },
    bestFor: ["Digital Nomads", "Yogis", "Meditators", "Budget Travellers", "Nature Lovers"],
    neighbourhoods: [
      { name: "Nimman (Nimmanhaemin)", vibe: "The nomad heartland — cafés, co-working, trendy restaurants, Maya Mall" },
      { name: "Old City", vibe: "Temples, budget guesthouses, cooking classes, backpacker energy" },
      { name: "Santitham", vibe: "Local Thai area, very cheap, student quarter, authentic" },
      { name: "Hang Dong", vibe: "Upscale suburban, expat families, excellent international schools" }
    ],
    practicalInfo: {
      climate: "Three seasons: Cool season Nov–Feb (15–25°C, best time), Hot season Mar–May (35–40°C), Rainy season Jun–Oct. March–April has severe air pollution (burning season).",
      internet: "Excellent fibre infrastructure and 4G/5G coverage. Most cafés have fast WiFi.",
      coworking: "CAMP, PUNSPACE, Yellow, Hub53 — multiple world-class options. Café work culture is deeply embedded.",
      safety: "Very safe by any standard. Road safety (scooters) is the main concern. Petty theft is rare.",
      transport: "Scooter is the practical solution. Songthaews (red trucks) are cheap shared taxis. Grab available. No rail system."
    },
    nomadScore: 9,
    highlights: ["Sunday Walking Street market", "Elephant Nature Park sanctuary experiences", "Doi Inthanon — Thailand's highest peak", "World-class Muay Thai gyms", "Incredible Night Bazaar and handicraft culture"]
  },
  bali: {
    city: "Bali", slug: "bali", country: "Indonesia", countrySlug: "indonesia",
    tagline: "The Island of the Gods — spiritual, beautiful, and a digital nomad paradise",
    overview: "Bali is one of the world's most iconic destinations and has evolved into the definitive digital nomad island. Canggu is the nomad hub — a village-turned-global-destination with world-class surf breaks, stunning rice paddies, infinity pools, and the world's highest density of co-working spaces per capita. Ubud offers the spiritual, arts, and yoga experience. Seminyak and Kuta are the party/tourism zones. Bali combines Hindu spiritual richness with modern nomad infrastructure.",
    costBreakdown: [
      { item: "Villa with pool (Canggu)", cost: "$600–$1,500/mo" },
      { item: "Studio apartment (Ubud)", cost: "$300–$600/mo" },
      { item: "Co-working space", cost: "$100–$200/mo" },
      { item: "Warung meal", cost: "$1–$3" },
      { item: "Restaurant meal (Canggu)", cost: "$5–$20" },
      { item: "Scooter rental", cost: "$80–$120/mo" },
      { item: "Yoga class", cost: "$5–$15" }
    ],
    monthlyBudget: { budget: "$900", comfortable: "$1,600", luxury: "$3,500" },
    bestFor: ["Digital Nomads", "Yogis", "Surfers", "Creatives", "Wellness Seekers", "Photographers"],
    neighbourhoods: [
      { name: "Canggu", vibe: "Nomad central — cafés, co-working, surf, rice paddies, international crowd" },
      { name: "Ubud", vibe: "Spiritual heartland — yoga, arts, jungle, monkey forest, healing retreats" },
      { name: "Seminyak", vibe: "Upscale beach clubs, boutique shopping, sunset cocktail culture" },
      { name: "Uluwatu", vibe: "Clifftop temple, world-class surf, increasingly developed but still beautiful" },
      { name: "Sanur", vibe: "Quiet, expat families, calm beach, good for longer-term living" }
    ],
    practicalInfo: {
      climate: "Tropical. Dry season May–Sep (27–32°C, best for surfing). Wet season Oct–Apr (25–30°C, dramatic thunderstorms, still warm).",
      internet: "Generally good in Canggu and Ubud. Co-working spaces have reliable fibre. Village areas can be slower.",
      coworking: "Outpost, Dojo, Bali Bustle, Tropical Nomad — world-class options. Ubud and Canggu both have excellent infrastructure.",
      safety: "Generally very safe. Petty theft (phone snatching from scooters) is the main risk. Traffic accidents (scooters) are the genuine danger.",
      transport: "Scooter is essential. Grab available in main tourist areas. Gojek works well. No public transport system."
    },
    nomadScore: 9,
    highlights: ["Tanah Lot and Uluwatu cliff temples at sunset", "Ubud Sacred Monkey Forest", "Tegallalang rice terrace terraces", "World-class surfing at Uluwatu and Canggu", "Daily Hindu offerings (canang sari) creating magical atmosphere"]
  },
  "medellín": {
    city: "Medellín", slug: "medellín", country: "Colombia", countrySlug: "colombia",
    tagline: "The City of Eternal Spring — transformed, vibrant, and full of energy",
    overview: "Medellín's transformation from the world's most dangerous city to an internationally celebrated innovation hub is one of the great urban turnaround stories of the 21st century. Situated in the Andes at 1,495m altitude, it enjoys 'eternal spring' weather (22–28°C year-round) with no need for heating or air conditioning. El Poblado is the expat and nomad district; Laureles is for those seeking a more local experience. Medellín's design, architecture, food, and culture are world-class.",
    costBreakdown: [
      { item: "1BR apartment (El Poblado)", cost: "$400–$900/mo" },
      { item: "Co-working space", cost: "$80–$150/mo" },
      { item: "Restaurant meal (local)", cost: "$3–$8" },
      { item: "Restaurant meal (El Poblado)", cost: "$8–$20" },
      { item: "Metro + cable car monthly", cost: "$15" },
      { item: "Gym membership", cost: "$20–$40/mo" },
      { item: "Private health insurance", cost: "$50–$150/mo" }
    ],
    monthlyBudget: { budget: "$900", comfortable: "$1,500", luxury: "$3,000" },
    bestFor: ["Digital Nomads", "Entrepreneurs", "Salsa Dancers", "Foodies", "Coffee Lovers"],
    neighbourhoods: [
      { name: "El Poblado", vibe: "Expat/nomad central — restaurants, nightlife, co-working, safest area" },
      { name: "Laureles", vibe: "Local middle-class feel, excellent value, authentic Colombian atmosphere" },
      { name: "Envigado", vibe: "Quieter suburb, very safe, local feel, Pablo Escobar history nearby" },
      { name: "Estadio", vibe: "Near Atlético Nacional stadium, local, cheap, good transport links" }
    ],
    practicalInfo: {
      climate: "Eternal spring — 22–28°C year-round. April–May and October–November are rainiest. Perfect climate for outdoor living.",
      internet: "Excellent fibre infrastructure. One of Latin America's best internet cities. EPM (municipal utility) provides good coverage.",
      coworking: "Selina, Atom House, La Maquinaria — excellent options in El Poblado and Laureles.",
      safety: "Dramatically improved. El Poblado and Laureles are safe for expats. Avoid certain comunas at night. General urban awareness required.",
      transport: "Metro system is clean, efficient, and cheap. Cable cars (Metro Cable) connect hillside comunas. Uber and InDriver work well."
    },
    nomadScore: 8,
    highlights: ["Metrocable rides over the comunas and city panorama", "Parque Arví nature reserve via cable car", "Finest Colombian coffee culture and Juan Valdez cafés", "Flower Festival (Feria de las Flores) in August", "World-class salsa scene every Thursday–Saturday"]
  },
  "mexico-city": {
    city: "Mexico City", slug: "mexico-city", country: "Mexico", countrySlug: "mexico",
    tagline: "One of the world's great megacities — culture, food, and energy like nowhere else",
    overview: "Mexico City (CDMX) is a true world city — a megalopolis of 21 million people that has become one of the top 5 digital nomad destinations globally. Roma Norte and Condesa are the epicentres of the nomad and creative class movement — beautiful colonial architecture, art deco buildings, leafy tree-lined boulevards, world-class restaurants, and excellent co-working spaces. CDMX shares time zones with the US, making it ideal for American remote workers. The cultural richness — Diego Rivera murals, Frida Kahlo museum, UNAM campus — is extraordinary.",
    costBreakdown: [
      { item: "1BR apartment (Roma Norte)", cost: "$700–$1,400/mo" },
      { item: "Co-working space", cost: "$100–$200/mo" },
      { item: "Taco (street)", cost: "$0.50–$1" },
      { item: "Restaurant meal (Roma)", cost: "$8–$25" },
      { item: "Metro monthly pass", cost: "$5" },
      { item: "Uber/Cabify ride", cost: "$3–$8" },
      { item: "Gym membership", cost: "$25–$60/mo" }
    ],
    monthlyBudget: { budget: "$1,200", comfortable: "$2,000", luxury: "$4,000" },
    bestFor: ["Digital Nomads", "Foodies", "Artists", "Architects", "US Remote Workers"],
    neighbourhoods: [
      { name: "Roma Norte", vibe: "Nomad epicentre — cafés everywhere, art galleries, excellent restaurants, beautiful buildings" },
      { name: "Condesa", vibe: "Art deco beauty, Parque México, laid-back expat vibe, slightly more expensive" },
      { name: "Polanco", vibe: "Upscale, luxury shopping, Michelin restaurants, corporate expat zone" },
      { name: "Coyoacán", vibe: "Frida Kahlo's neighbourhood — bohemian, local markets, artsy, excellent weekend market" },
      { name: "Cuauhtémoc/Centro", vibe: "Historic centre, budget, murals, archaeological sites, more local" }
    ],
    practicalInfo: {
      climate: "Altitude (2,240m) creates mild temperatures year-round (12–22°C). Rainy season May–Oct (afternoon thunderstorms). Dry season Nov–Apr.",
      internet: "Good fibre in Roma/Condesa. Megacable and Telmex are the main providers. Co-working spaces excellent.",
      coworking: "WeWork, La Maquinaria, Nest, Selina — hundreds of options across Roma, Condesa, and Polanco.",
      safety: "Variable. Roma, Condesa, Polanco, Coyoacán are safe. Avoid displaying expensive items. Petty theft (phone snatching) occurs. General urban awareness essential.",
      transport: "Metro is extensive and very cheap ($0.25/ride). Uber/Cabify reliable. Ecobici bike-share excellent within central neighbourhoods."
    },
    nomadScore: 8,
    highlights: ["Frida Kahlo Museum and Coyoacán market", "Diego Rivera murals at Palacio Nacional", "Teotihuacán pyramids 50km from city", "Mercado de Jamaica and street food culture", "World-class dining: Pujol, Quintonil, Enrique Olvera empire"]
  },
  "buenos-aires": {
    city: "Buenos Aires", slug: "buenos-aires", country: "Argentina", countrySlug: "argentina",
    tagline: "The Paris of South America — tango, steak, wine, and extraordinary value",
    overview: "Buenos Aires is South America's most sophisticated city — a European-influenced metropolis of beautiful architecture, passionate tango culture, world-class restaurants and cafés, and vibrant arts scene. For USD earners, the blue dollar exchange rate makes Buenos Aires one of the world's most extraordinary value destinations. Palermo Soho and Palermo Hollywood are the creative/expat districts; San Telmo is for bohemian culture; Recoleta is for grandeur.",
    costBreakdown: [
      { item: "1BR apartment (Palermo)", cost: "$300–$700/mo (blue rate)" },
      { item: "Restaurant meal (local)", cost: "$3–$8 (blue rate)" },
      { item: "Fine dining (top restaurant)", cost: "$20–$40 (blue rate)" },
      { item: "Subte (metro) monthly", cost: "$5 (blue rate)" },
      { item: "Gym membership", cost: "$15–$30/mo (blue rate)" },
      { item: "Wine (good Malbec, bottle)", cost: "$3–$8 (blue rate)" },
      { item: "Theatre ticket (Teatro Colón)", cost: "$5–$20 (blue rate)" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,200", luxury: "$2,500" },
    bestFor: ["Foodies", "Tango Dancers", "Wine Lovers", "Arts Lovers", "Writers & Artists"],
    neighbourhoods: [
      { name: "Palermo Soho/Hollywood", vibe: "Nomad/expat hub — boutiques, restaurants, leafy streets, excellent nightlife" },
      { name: "Recoleta", vibe: "Grand, elegant, Evita's tomb, Museo Nacional de Bellas Artes, upscale" },
      { name: "San Telmo", vibe: "Bohemian, tango milongas, Sunday antique fair, street art, older character" },
      { name: "Puerto Madero", vibe: "Modern waterfront, expensive by BA standards, corporate, weekend dining" },
      { name: "Villa Crespo", vibe: "Local, cheaper than Palermo, good café culture, growing creative scene" }
    ],
    practicalInfo: {
      climate: "Four distinct seasons. Summer Dec–Feb (25–35°C). Winter Jun–Aug (can drop to 3–8°C). Spring and autumn are ideal.",
      internet: "Generally good fibre in central neighbourhoods. Power cuts (cortes) occur occasionally. 4G solid.",
      coworking: "Areatres, Tasky, Urban Station — growing co-working scene particularly in Palermo.",
      safety: "Good in tourist/expat areas. Petty theft and pickpocketing are the main risks. Display minimalism with phones and jewellery.",
      transport: "Subte (metro) is fast and cheap but limited network. Colectivos (buses) cover everywhere. Cabify/Uber work. Walking is pleasant in most neighbourhoods."
    },
    nomadScore: 8,
    highlights: ["Teatro Colón — one of the world's great opera houses", "Tango shows and milonga dancing", "Sunday San Telmo antique market", "Asado (BBQ) culture — world's best beef", "Tigre Delta boat tours from the city"]
  },
  santiago: {
    city: "Santiago", slug: "santiago", country: "Chile", countrySlug: "chile",
    tagline: "South America's most organised city — Andes backdrop, wine culture, stability",
    overview: "Santiago is South America's most modern, clean, and well-organised capital — a city of 7 million with an efficient metro, clean streets, excellent private healthcare, and the dramatic snow-capped Andes as a constant backdrop. Providencia and Las Condes are the expat and business districts. Barrio Lastarria and Barrio Italia are bohemian creative zones. Santiago sits 1.5 hours from both the Pacific coast and the Andes ski resorts, making for extraordinary weekend adventures.",
    costBreakdown: [
      { item: "1BR apartment (Providencia)", cost: "$700–$1,100/mo" },
      { item: "Restaurant meal (local)", cost: "$6–$12" },
      { item: "Metro monthly pass", cost: "$40" },
      { item: "Gym membership", cost: "$30–$50/mo" },
      { item: "Chilean wine (bottle, good)", cost: "$5–$12" },
      { item: "Co-working space", cost: "$120–$200/mo" },
      { item: "Private health insurance", cost: "$80–$150/mo" }
    ],
    monthlyBudget: { budget: "$1,200", comfortable: "$2,000", luxury: "$4,000" },
    bestFor: ["Professionals", "Skiers", "Wine Lovers", "Hikers", "Stable-Life Seekers"],
    neighbourhoods: [
      { name: "Providencia", vibe: "Main expat area — walkable, excellent restaurants, parks, metro-connected" },
      { name: "Las Condes", vibe: "Business/financial district, malls, upscale, corporate expats" },
      { name: "Barrio Italia", vibe: "Creative, hipster, vintage shops, excellent cafés, local character" },
      { name: "Lastarria", vibe: "Cultural hub, museums, cinema, elegant restaurants, weekend market" },
      { name: "Ñuñoa", vibe: "Middle-class residential, good value, student area, Plaza Ñuñoa life" }
    ],
    practicalInfo: {
      climate: "Mediterranean. Summer Dec–Mar (25–32°C). Winter Jun–Aug (5–12°C, smog). Spring/Autumn ideal. Andes skiing Jul–Sep.",
      internet: "Excellent fibre infrastructure. VTR, Movistar, and Entel provide fast connections.",
      coworking: "Artz, Ework, The Yard — solid co-working options. WeWork present.",
      safety: "Relatively safe by Latin American standards. Pickpocketing in tourist areas. Looting during civil unrest (2019) left impression but stability has returned.",
      transport: "Metro (Transantiago) is clean and efficient. Buses good. Uber works well. Cycling infrastructure improving."
    },
    nomadScore: 7,
    highlights: ["Ski resorts 45 minutes from city (Valle Nevado, La Parva)", "Casablanca and Maipo wine valleys day trips", "Valparaíso street art city 1.5 hours away", "Cajon del Maipo canyon hiking", "World-class private hospitals (Clinica Las Condes, Alemana)"]
  },
  lisbon: {
    city: "Lisbon", slug: "lisbon", country: "Portugal", countrySlug: "portugal",
    tagline: "Europe's most romantic capital — seven hills, fado music, and Atlantic light",
    overview: "Lisbon is one of Europe's most beloved cities — a hilly, sun-drenched Atlantic capital of extraordinary charm, world-class food, vibrant nightlife, and a rapidly growing tech scene. Alfama with its castle and fado music, Bairro Alto's bars, Príncipe Real's design boutiques, and Belém's maritime monuments make Lisbon endlessly explorable. The digital nomad community is large and well-established, and the NHR tax regime attracts high earners. The #Web Summit has been held here, cementing Lisbon's tech status.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€1,100–€1,800/mo" },
      { item: "1BR apartment (suburbs)", cost: "€700–€1,100/mo" },
      { item: "Restaurant meal (local tasca)", cost: "€8–€15" },
      { item: "Coffee (espresso)", cost: "€0.80–€1.20" },
      { item: "Metro monthly pass", cost: "€40" },
      { item: "Co-working space", cost: "€150–€250/mo" },
      { item: "Gym membership", cost: "€30–€50/mo" }
    ],
    monthlyBudget: { budget: "$1,500", comfortable: "$2,300", luxury: "$4,500" },
    bestFor: ["Digital Nomads", "Foodies", "Fado Lovers", "Surfers", "Tech Workers"],
    neighbourhoods: [
      { name: "Príncipe Real", vibe: "Upscale, design boutiques, antique shops, beautiful gardens, LGBTQ+ friendly" },
      { name: "Mouraria/Alfama", vibe: "Historic, fado heartland, touristy but authentic, castle views" },
      { name: "Bairro Alto", vibe: "Student quarter by day, bar district at night, cheap and lively" },
      { name: "Belém", vibe: "Monument district, pastéis de Belém, museums, quieter residential" },
      { name: "LX Factory / Alcântara", vibe: "Creative hub, converted industrial space, weekend market, young crowd" }
    ],
    practicalInfo: {
      climate: "Mediterranean with Atlantic influence. Hot dry summers (25–35°C). Mild wet winters (10–16°C). 300 days of sun.",
      internet: "Excellent fibre infrastructure (NOS, Vodafone, MEO). One of Europe's better-connected cities.",
      coworking: "LACS, Second Home, Heden, Village Underground — extensive co-working options.",
      safety: "Very safe — consistently ranked among Europe's safest capitals. Petty theft (pickpocketing in trams) is the main risk.",
      transport: "Metro is limited but useful. Trams (historic, scenic, crowded). Uber widely used. Cycling improving. Hills make walking challenging."
    },
    nomadScore: 9,
    highlights: ["Pastéis de Belém custard tarts since 1837", "Fado music in Alfama's historic taverns", "Sintra palace day-trip 40 minutes away", "Surf at Cascais and Ericeira within 30–45 minutes", "NHR tax regime for 10 years of tax advantages"]
  },
  porto: {
    city: "Porto", slug: "porto", country: "Portugal", countrySlug: "portugal",
    tagline: "Portugal's second city — cheaper, grittier, and arguably more authentic than Lisbon",
    overview: "Porto is Lisbon's underrated rival — a UNESCO World Heritage city of crumbling baroque churches, azulejo-tiled buildings, port wine cellars, and a magnificent riverside (Ribeira) that glows at sunset. Porto is 20–30% cheaper than Lisbon, has a more local feel, and offers excellent quality of life. The city has a thriving startup ecosystem, excellent university, and a deeply proud local identity. The surrounding area — Douro Valley wine country — is arguably the world's most beautiful wine region.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€800–€1,400/mo" },
      { item: "Restaurant meal (local)", cost: "€7–€13" },
      { item: "Francesinha (iconic sandwich)", cost: "€8–€12" },
      { item: "Metro monthly pass", cost: "€40" },
      { item: "Port wine tasting (Villa Nova de Gaia)", cost: "€10–€20" },
      { item: "Co-working space", cost: "€120–€200/mo" },
      { item: "Gym membership", cost: "€25–€45/mo" }
    ],
    monthlyBudget: { budget: "$1,200", comfortable: "$1,900", luxury: "$3,500" },
    bestFor: ["Digital Nomads", "Wine Lovers", "Creatives", "Remote Workers", "Students"],
    neighbourhoods: [
      { name: "Bonfim", vibe: "Up-and-coming creative quarter, studios, cafés, young crowd, good value" },
      { name: "Baixa/Ribeira", vibe: "Historic centre, Douro riverside, touristy but stunning, lively at weekends" },
      { name: "Foz do Douro", vibe: "Seaside suburb, Atlantic views, upscale, less convenient to centre" },
      { name: "Cedofeita", vibe: "Bohemian street, local bars, independent shops, art galleries" },
      { name: "Matosinhos", vibe: "Coastal suburb, best seafood restaurants, beach, local feel" }
    ],
    practicalInfo: {
      climate: "Atlantic climate. Cooler and wetter than Lisbon. Mild summers (20–28°C). Wet winters (9–14°C, significant rain Nov–Feb).",
      internet: "Excellent fibre infrastructure. Slightly behind Lisbon but still very good.",
      coworking: "Porto i/o, Selina Porto, New Work, Cowork Porto — growing scene.",
      safety: "Very safe. Arguably safer than Lisbon. Standard tourist pickpocket awareness in Ribeira.",
      transport: "Metro covers key areas. Trams (nostalgia, crowded). STCP buses. Uber widely used. Cycling growing."
    },
    nomadScore: 8,
    highlights: ["Douro Valley wine quintas and river cruises", "Francesinha sandwich (Porto's iconic dish)", "Lello Bookshop (one of world's most beautiful)", "Sunset from Serra do Pilar on the Vila Nova de Gaia side", "Matosinhos seafood restaurants (best in Portugal)"]
  },
  barcelona: {
    city: "Barcelona", slug: "barcelona", country: "Spain", countrySlug: "spain",
    tagline: "Gaudí's city — architecture, beaches, food, and the Mediterranean lifestyle",
    overview: "Barcelona is one of Europe's most vibrant and beautiful cities — Gaudí's architectural masterpieces (Sagrada Família, Park Güell, Casa Batlló) alongside Mediterranean beaches, world-class food markets (La Boqueria, Santa Caterina), incredible nightlife, and a distinct Catalan identity that sets it apart from the rest of Spain. The tech scene ('22@ innovation district') is Europe's fastest-growing. The city is also a primary base for Spain's new Digital Nomad Visa holders.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€1,200–€2,000/mo" },
      { item: "Restaurant meal (local)", cost: "€10–€18" },
      { item: "Menu del día (set lunch)", cost: "€10–€14" },
      { item: "Metro monthly pass (T-Usual)", cost: "€40" },
      { item: "Beach bar cocktail", cost: "€8–€12" },
      { item: "Co-working space", cost: "€180–€300/mo" },
      { item: "Gym membership", cost: "€35–€60/mo" }
    ],
    monthlyBudget: { budget: "$1,800", comfortable: "$2,800", luxury: "$5,000" },
    bestFor: ["Digital Nomads", "Architects", "Beach Lovers", "Foodies", "Partygoers", "Cyclists"],
    neighbourhoods: [
      { name: "Eixample", vibe: "Grid layout, Gaudí buildings, LGBTQ+ Gayxample area, central, slightly expensive" },
      { name: "Gràcia", vibe: "Village-within-city feel, Catalan pride, excellent café culture, local character" },
      { name: "El Born/Ribera", vibe: "Hipster, fashion boutiques, tapas bars, beautiful Gothic character" },
      { name: "Poble Sec", vibe: "Up-and-coming, Montjuïc proximity, local restaurants, good value" },
      { name: "Poblenou/22@", vibe: "Innovation district, tech offices, creative spaces, beach proximity" }
    ],
    practicalInfo: {
      climate: "Mediterranean. Hot dry summers (July–Aug 28–34°C). Mild winters (10–15°C). Spring and autumn ideal. Excellent beach season May–Oct.",
      internet: "Excellent fibre infrastructure. One of Spain's best-connected cities.",
      coworking: "WeWork, Betahaus, The NEST, La Vaca Coworking — extensive options in 22@ and Eixample.",
      safety: "Generally safe. Europe's highest pickpocketing rate — La Rambla, metro, and beaches require vigilance. Keep phones in pockets.",
      transport: "Excellent metro (L1–L5). Bus network. Bicing bike-share. Walking in central areas. Uber and Cabify work."
    },
    nomadScore: 8,
    highlights: ["Sagrada Família and Gaudí's architectural legacy", "La Boqueria and Santa Caterina food markets", "Camp Nou (FC Barcelona stadium)", "Barceloneta beach and Barceloneta seafood", "Montjuïc castle and Olympic ring views"]
  },
  berlin: {
    city: "Berlin", slug: "berlin", country: "Germany", countrySlug: "germany",
    tagline: "The world's creative capital — history, art, techno, and startup culture",
    overview: "Berlin is Europe's most exciting city for creatives, entrepreneurs, and digital nomads — a place where history is visible in the Wall remnants and Holocaust memorials, yet the city pulses with forward-thinking energy. The club scene (Berghain, Tresor, Watergate) is globally legendary. Kreuzberg and Neukölln are multicultural, vibrant, and increasingly gentrified. Berlin has the highest density of startups and tech companies in the EU. Rents, while rising, remain significantly below London and Paris.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€1,000–€1,600/mo" },
      { item: "Restaurant meal (local Imbiss)", cost: "€5–€10" },
      { item: "Restaurant meal (sit-down)", cost: "€12–€22" },
      { item: "BVG monthly transit pass", cost: "€29 (Deutschlandticket)" },
      { item: "Club entry (Berghain)", cost: "€10–€20 (if you get in)" },
      { item: "Co-working space", cost: "€150–€280/mo" },
      { item: "Gym membership", cost: "€25–€50/mo" }
    ],
    monthlyBudget: { budget: "$1,400", comfortable: "$2,200", luxury: "$4,000" },
    bestFor: ["Creatives", "Tech Workers", "Club Culture", "Artists", "Digital Nomads"],
    neighbourhoods: [
      { name: "Mitte", vibe: "Central, tourist attractions, government quarter, Museum Island, expensive" },
      { name: "Prenzlauer Berg", vibe: "Family-friendly, trendy cafés, brunch culture, stroller capital of Germany" },
      { name: "Kreuzberg", vibe: "Multicultural, Turkish community, punky edge, excellent street food, Tempelhofer Feld" },
      { name: "Neukölln", vibe: "Rapidly gentrifying, artist studios, late-night bars, North African food" },
      { name: "Friedrichshain", vibe: "Club district, young crowd, East Berlin character, Karl-Marx-Allee architecture" }
    ],
    practicalInfo: {
      climate: "Continental. Cold winters (Nov–Mar, can drop below 0°C). Warm summers (Jun–Aug, 25–30°C). Spring and autumn are beautiful.",
      internet: "Good fibre infrastructure. DSL still common in older buildings. Telekom, Vodafone, O2 are main providers.",
      coworking: "Mindspace, Factory Berlin, WeWork, St. Oberholz — Berlin has Europe's best co-working culture.",
      safety: "Very safe by global standards. Some areas (Kottbusser Tor) can feel edgy. Bicycle theft is the main crime concern.",
      transport: "Excellent U-Bahn (metro), S-Bahn (urban rail), trams, and buses. Deutschlandticket (€29/mo) covers all public transport nationwide."
    },
    nomadScore: 8,
    highlights: ["Berlin Wall remnants and East Side Gallery", "Museum Island — 5 UNESCO museums", "Berghain and world-class club scene", "Tempelhofer Feld — former airport turned public park", "Markthalle Neun and Kreuzberg street food scene"]
  },
  amsterdam: {
    city: "Amsterdam", slug: "amsterdam", country: "Netherlands", countrySlug: "netherlands",
    tagline: "Canals, bikes, and one of Europe's most international cities",
    overview: "Amsterdam is one of Europe's most liveable and international cities — a compact, bicycle-friendly city of 165 canals, world-class museums (Rijksmuseum, Van Gogh, Anne Frank House), outstanding food and coffee culture, and a deeply liberal, tolerant atmosphere. As the European headquarters of major tech and financial companies, Amsterdam has a large expat community. The 30% ruling tax benefit makes it particularly attractive for qualifying high earners. Housing is the main challenge.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€1,800–€2,800/mo" },
      { item: "Good quality bike", cost: "€300–€800 (one-time)" },
      { item: "Restaurant meal (local)", cost: "€12–€20" },
      { item: "GVB transport monthly", cost: "€100" },
      { item: "Coffee (flat white)", cost: "€3.50–€5" },
      { item: "Co-working space", cost: "€200–€400/mo" },
      { item: "Stroopwafel (essential)", cost: "€0.50" }
    ],
    monthlyBudget: { budget: "$2,000", comfortable: "$3,200", luxury: "$6,000" },
    bestFor: ["Tech Professionals", "Finance Workers", "Cyclists", "Museum Lovers", "Foodies"],
    neighbourhoods: [
      { name: "Jordaan", vibe: "Most charming neighbourhood — narrow canals, boutique shops, cosy brown cafés" },
      { name: "De Pijp", vibe: "Multicultural, Albert Cuyp Market, young professional, café culture" },
      { name: "Oud-West", vibe: "Gentrifying, Vondelpark proximity, good mix of local and expat" },
      { name: "Oost (East)", vibe: "Diverse, more affordable, Oosterpark, growing creative scene" },
      { name: "Zuidas", vibe: "Business district, modern, corporate expats, convenient but characterless" }
    ],
    practicalInfo: {
      climate: "Oceanic. Grey and rainy much of the year. Summers mild (20–25°C). Winters cold but rarely freezing (3–7°C). Wind is constant.",
      internet: "Excellent — among Europe's fastest. KPN fibre is ubiquitous.",
      coworking: "WeWork, The Thinking Hut, Spaces, A Lab — extensive options.",
      safety: "Very safe. Bicycle accidents and tourist pickpocketing are main risks. Drug policy creates unique Leidseplein/Rembrandtplein atmosphere.",
      transport: "Cycling is the primary transport. Trams cover the centre. GVB metro limited. NS trains to other cities excellent."
    },
    nomadScore: 7,
    highlights: ["Rijksmuseum and Night Watch by Rembrandt", "Anne Frank House — powerful and essential", "Canal boat tours at sunset", "Vondelpark cycling and picnics", "Albert Cuyp Market — Amsterdam's best food market"]
  },
  prague: {
    city: "Prague", slug: "prague", country: "Czech Republic", countrySlug: "czech-republic",
    tagline: "Europe's most beautiful medieval city — affordable, central, and magical",
    overview: "Prague is arguably Europe's most beautiful city — a perfectly preserved medieval capital of Gothic towers, baroque palaces, and winding cobblestone streets that somehow escaped World War II's destruction. As the Czech Republic's capital and a full EU member, Prague offers EU legal framework at Eastern European prices. The city has a growing tech and startup scene, excellent beer culture (Czech beer is UNESCO-recognised), and a rapidly internationalising food and café scene.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "CZK 18,000–28,000/mo ($800–$1,200)" },
      { item: "Restaurant meal (local)", cost: "CZK 150–300 ($7–$13)" },
      { item: "Czech beer (pub pint)", cost: "CZK 35–60 ($1.50–$2.60)" },
      { item: "Metro monthly pass", cost: "CZK 670 ($30)" },
      { item: "Co-working space", cost: "CZK 4,000–8,000/mo ($180–$360)" },
      { item: "Gym membership", cost: "CZK 700–1,500/mo ($30–$65)" },
      { item: "Private health insurance", cost: "CZK 2,000–4,000/mo ($90–$180)" }
    ],
    monthlyBudget: { budget: "$1,200", comfortable: "$1,800", luxury: "$3,500" },
    bestFor: ["Digital Nomads", "Beer Enthusiasts", "History Lovers", "Architects", "Tech Workers"],
    neighbourhoods: [
      { name: "Vinohrady", vibe: "Most popular expat area — beautiful art nouveau buildings, parks, restaurants" },
      { name: "Žižkov", vibe: "Working class character, Prague's highest pub density, more affordable, edgy" },
      { name: "Dejvice", vibe: "Embassy district, university, quieter, well-connected" },
      { name: "Holešovice", vibe: "Up-and-coming, former industrial zone, galleries, young crowd" },
      { name: "Malá Strana", vibe: "Below the castle, beautiful but touristy, most romantic neighbourhood" }
    ],
    practicalInfo: {
      climate: "Continental. Cold winters (Nov–Feb, around 0°C). Warm summers (Jun–Aug, 24–30°C). Spring and autumn beautiful.",
      internet: "Good fibre infrastructure. O2, T-Mobile, and Vodafone CZ are main providers.",
      coworking: "Locus Workspace, Node5, Spaces Prague — solid options. Café work culture growing.",
      safety: "Very safe. One of Europe's safest capitals. Pickpocketing in tourist areas (Old Town Square, trams) is the main risk.",
      transport: "Excellent metro (3 lines). Trams (including night trams) are iconic and efficient. Uber works. Cycling infrastructure improving."
    },
    nomadScore: 8,
    highlights: ["Prague Castle — Europe's largest ancient castle complex", "Charles Bridge at dawn before the crowds", "Old Town Square astronomical clock (Orloj)", "Bohemian Switzerland National Park day trips", "Czech beer hall culture — world's highest per-capita beer consumption"]
  },
  vienna: {
    city: "Vienna", slug: "vienna", country: "Austria", countrySlug: "austria",
    tagline: "The imperial city of music, coffee houses, and extraordinary quality of life",
    overview: "Vienna consistently ranks as the world's most liveable city (Economist Intelligence Unit, Mercer). Austria's capital is an imperial city of extraordinary grandeur — Schönbrunn Palace, the Ringstrasse boulevard, the Spanish Riding School, and the world's greatest concentration of classical music venues (Vienna Philharmonic, State Opera, Musikverein). The coffeehouse culture (Kaffeehaus) is a UNESCO Intangible Cultural Heritage. Vienna is also a growing tech and innovation hub.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€1,100–€1,800/mo" },
      { item: "Wiener Schnitzel (restaurant)", cost: "€15–€25" },
      { item: "Melange (coffee) in Kaffehaus", cost: "€4–€6" },
      { item: "Vienna City Card (72hr)", cost: "€29.90" },
      { item: "State Opera standing ticket", cost: "€3–€10" },
      { item: "Co-working space", cost: "€180–€300/mo" },
      { item: "Gym membership", cost: "€30–€55/mo" }
    ],
    monthlyBudget: { budget: "$1,600", comfortable: "$2,400", luxury: "$4,500" },
    bestFor: ["Classical Music Lovers", "Culture Seekers", "Families", "Professionals", "Coffee Connoisseurs"],
    neighbourhoods: [
      { name: "Innere Stadt (1st district)", vibe: "Imperial core, most expensive, palaces, opera, tourist-heavy" },
      { name: "Neubau (7th)", vibe: "Most hipster area, boutiques, cafés, Mariahilfer Str shopping" },
      { name: "Alsergrund (9th)", vibe: "University district, Sigmund Freud's house, cafés, students" },
      { name: "Ottakring (16th)", vibe: "Multicultural, Turkish community, affordable, authentic Viennese life" },
      { name: "Prater area (2nd)", vibe: "Green space, the Prater park, Ferris wheel, improving neighbourhood" }
    ],
    practicalInfo: {
      climate: "Continental. Cold winters (Dec–Feb, -2–5°C). Hot summers (Jul–Aug, 28–34°C). Spring and autumn are beautiful.",
      internet: "Excellent. A1, Magenta (T-Mobile), and Drei provide fast fibre and 5G.",
      coworking: "WeWork, Talent Garden Vienna, The Cube — good options. Coffeehouse working is culturally accepted.",
      safety: "Extremely safe — consistently ranked as one of the world's safest cities.",
      transport: "World-class public transport (U-Bahn metro, trams, buses, night service). Annual transport pass is excellent value at ~€365."
    },
    nomadScore: 7,
    highlights: ["Vienna Philharmonic and State Opera (standing tickets from €3)", "Schönbrunn and Belvedere palace complexes", "Naschmarkt — Vienna's best food market", "Prater Ferris Wheel (Riesenrad) since 1897", "Coffeehouse culture — sit for hours with one coffee"]
  },
  budapest: {
    city: "Budapest", slug: "budapest", country: "Hungary", countrySlug: "hungary",
    tagline: "The Pearl of the Danube — thermal baths, ruin bars, and stunning architecture",
    overview: "Budapest is one of Europe's most spectacular and underrated capitals — straddling the Danube River, with Buda's castle district on one side and Pest's grand boulevards on the other. The city offers a truly remarkable value proposition: EU legal framework (Hungary is EU), Western European infrastructure, Eastern European prices, world-famous thermal bath culture (Széchenyi, Gellért), unique ruin bar scene (romkocsmák), and Hungary's flat 15% income tax.",
    costBreakdown: [
      { item: "1BR apartment (central Pest)", cost: "HUF 200,000–350,000/mo ($560–$980)" },
      { item: "Restaurant meal (local)", cost: "HUF 2,500–5,000 ($7–$14)" },
      { item: "Thermal bath entry (Széchenyi)", cost: "HUF 8,000–9,500 ($22–$27)" },
      { item: "Monthly transport pass", cost: "HUF 9,500 ($27)" },
      { item: "Unicum or Palinka (shot)", cost: "HUF 500–800 ($1.40–$2.25)" },
      { item: "Co-working space", cost: "HUF 50,000–100,000/mo ($140–$280)" },
      { item: "Gym membership", cost: "HUF 10,000–20,000/mo ($28–$56)" }
    ],
    monthlyBudget: { budget: "$1,000", comfortable: "$1,700", luxury: "$3,200" },
    bestFor: ["Digital Nomads", "History Lovers", "Party Seekers", "Thermal Bath Enthusiasts", "Budget EU Seekers"],
    neighbourhoods: [
      { name: "District V (Belváros)", vibe: "City centre, Danube banks, Parliament, most touristy but beautiful" },
      { name: "District VII (Erzsébetváros)", vibe: "Jewish Quarter, ruin bars, nightlife epicentre, young crowd" },
      { name: "District XI (Kelenföld/Buda)", vibe: "Buda side, quieter, family-friendly, Gellért Hill proximity" },
      { name: "District XIII (Újlipótváros)", vibe: "Expat favourite, new builds, Margaret Island proximity, cafés" },
      { name: "District VIII (Józsefváros)", vibe: "Gentrifying, affordable, student area, good authentic restaurants" }
    ],
    practicalInfo: {
      climate: "Continental. Cold winters (Dec–Feb, -2–3°C). Hot summers (Jul–Aug, 28–34°C). Spring and autumn excellent.",
      internet: "Very good. Magyar Telekom, Vodafone HU, DIGI provide fast connections.",
      coworking: "WeWork Budapest, Loffice, Kaptar — good co-working scene in District VII and XIII.",
      safety: "Very safe. Pickpocketing in tourist areas (Váci utca, Ruin bars) is the main risk. Generally excellent safety record.",
      transport: "Good metro (4 lines), tram network, and bus system. BKK integrated ticketing. Night buses cover when metro stops."
    },
    nomadScore: 8,
    highlights: ["Széchenyi Thermal Baths — grand 1913 thermal spa complex", "Ruin bars: Szimpla Kert and the Jewish Quarter nightlife", "Parliament building (largest in Europe) at night", "Castle District and Fisherman's Bastion views over the Danube", "Budapest Jewish Quarter and Great Synagogue (Europe's largest)"]
  },
  dubai: {
    city: "Dubai", slug: "dubai", country: "UAE", countrySlug: "uae",
    tagline: "The city of the future — zero tax, world records, and relentless ambition",
    overview: "Dubai is one of the world's most audacious urban experiments — a desert city that has transformed into a global hub for finance, tech, tourism, and trade within 50 years. The Burj Khalifa is the world's tallest building; the Palm Jumeirah is the world's largest artificial island; Dubai Mall is the world's largest shopping mall. For expats, the combination of zero personal income tax, world-class infrastructure, extreme safety, and multicultural community (90% of residents are expats) is uniquely compelling.",
    costBreakdown: [
      { item: "1BR apartment (Dubai Marina)", cost: "AED 7,000–12,000/mo ($1,900–$3,270)" },
      { item: "Restaurant meal (mid-range)", cost: "AED 50–120 ($14–$33)" },
      { item: "Shawarma (street food)", cost: "AED 5–10 ($1.35–$2.70)" },
      { item: "Taxi (RTA metered)", cost: "AED 30–80 ($8–$22) most journeys" },
      { item: "Gym membership (premium)", cost: "AED 300–700/mo ($82–$190)" },
      { item: "Co-working space", cost: "AED 1,000–3,000/mo ($272–$817)" },
      { item: "Brunches (Friday brunch)", cost: "AED 200–400 ($55–$110)" }
    ],
    monthlyBudget: { budget: "$2,500", comfortable: "$4,500", luxury: "$10,000+" },
    bestFor: ["High Earners", "Entrepreneurs", "Finance Workers", "Tax Optimisers", "Luxury Seekers"],
    neighbourhoods: [
      { name: "Dubai Marina", vibe: "Expat central — waterfront promenade, restaurants, JBR beach, young professionals" },
      { name: "Downtown Dubai", vibe: "Burj Khalifa, Dubai Mall, most prestigious address, high-end apartments" },
      { name: "DIFC", vibe: "Financial district, best restaurants and bars, corporate expats" },
      { name: "Jumeirah Village Circle (JVC)", vibe: "More affordable, family-friendly, suburban, good value" },
      { name: "Business Bay", vibe: "Growing, near Downtown, canal views, business hotels, restaurants" }
    ],
    practicalInfo: {
      climate: "Desert. June–September extreme (42–46°C, high humidity). November–April perfect (20–30°C). Indoor culture dominates summer.",
      internet: "Excellent 5G and fibre. du and Etisalat are the providers. VoIP restrictions apply to some services.",
      coworking: "IFZA, The Executive Centre, WeWork, astrotech — extensive enterprise and co-working infrastructure.",
      safety: "Extremely safe — among the lowest crime rates globally. Drug and alcohol laws strictly enforced.",
      transport: "Car culture dominates. Dubai Metro (Red and Green lines) cover key areas. Taxis/Careem widely available. RTA bus exists but limited."
    },
    nomadScore: 8,
    highlights: ["Burj Khalifa At The Top observatory (828m)", "Dubai Frame and Museum of the Future", "Desert safari and dune bashing", "Gold Souk and Spice Souk in Deira (old Dubai)", "Friday brunch culture — Dubai's signature social institution"]
  },
  singapore: {
    city: "Singapore", slug: "singapore", country: "Singapore", countrySlug: "singapore",
    tagline: "The Lion City — Asia's most efficient, clean, and multicultural city-state",
    overview: "Singapore is Asia's ultimate city-state — a 733 km² island nation that has become one of the world's most important financial, tech, and logistics hubs. The combination of political stability, zero corruption, world-class infrastructure, multicultural harmony, and strategic positioning as Asia's gateway makes Singapore uniquely powerful. Gardens by the Bay, hawker centre culture, and the integration of green space throughout the city create an extraordinary urban environment.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "SGD 3,000–5,000/mo ($2,230–$3,720)" },
      { item: "Hawker centre meal", cost: "SGD 3–6 ($2.20–$4.50)" },
      { item: "Restaurant meal", cost: "SGD 15–35 ($11–$26)" },
      { item: "MRT monthly concession", cost: "SGD 128 ($95)" },
      { item: "Tiger Beer (hawker)", cost: "SGD 6–9 ($4.50–$6.70)" },
      { item: "Co-working space", cost: "SGD 500–1,200/mo ($372–$893)" },
      { item: "Gym membership", cost: "SGD 80–200/mo ($60–$149)" }
    ],
    monthlyBudget: { budget: "$3,500", comfortable: "$5,500", luxury: "$12,000+" },
    bestFor: ["Finance Professionals", "Tech Executives", "Family Expats", "SE Asia Explorers", "Startup Founders"],
    neighbourhoods: [
      { name: "CBD/Marina Bay", vibe: "Financial core, stunning skyline, Gardens by the Bay, expensive" },
      { name: "Orchard", vibe: "Shopping belt, luxury hotels, expat families, manicured" },
      { name: "Tiong Bahru", vibe: "Most characterful — 1930s SIT flats, hipster cafés, independent bookshops" },
      { name: "Holland Village", vibe: "Traditional expat enclave, restaurants, pubs, slightly more relaxed" },
      { name: "Katong/Joo Chiat", vibe: "Peranakan culture, vibrant hawker scene, local character, east coast" }
    ],
    practicalInfo: {
      climate: "Equatorial. Hot and humid year-round (30–34°C). No true seasons. Two monsoon periods (Dec–Mar, Jun–Sep). Perpetual air conditioning culture.",
      internet: "Excellent — among Asia's fastest. Singtel, StarHub, and M1 provide fibre at high speeds.",
      coworking: "WeWork, JustCo, The Great Room, Collision8 — world-class co-working infrastructure.",
      safety: "Extraordinarily safe — consistently ranked the safest city globally. Laws strictly enforced.",
      transport: "World-class MRT system. Buses comprehensive. Grab taxis excellent. Cycling improving. Cars prohibitively expensive (COE system)."
    },
    nomadScore: 8,
    highlights: ["Gardens by the Bay and the Supertree Grove light show", "Maxwell Food Centre and hawker culture", "Sentosa Island resort and Universal Studios", "Little India, Chinatown, and Kampong Glam cultural neighbourhoods", "Zoo, Night Safari, and Bird Paradise — world-class wildlife experiences"]
  },
  "kuala-lumpur": {
    city: "Kuala Lumpur", slug: "kuala-lumpur", country: "Malaysia", countrySlug: "malaysia",
    tagline: "Where skyscrapers meet street food — Asia's most underrated cosmopolitan city",
    overview: "Kuala Lumpur (KL) is one of Southeast Asia's most underrated cities — a modern metropolis of 1.8 million (7 million metro area) with the iconic Petronas Twin Towers, extraordinary multicultural street food (Malay, Chinese, Indian, and fusion), excellent shopping, and first-world infrastructure at Southeast Asian prices. Malaysia's diverse population creates a cultural richness rarely found elsewhere, and English is widely spoken. KL is a growing hub for digital nomads and tech workers.",
    costBreakdown: [
      { item: "1BR apartment (KLCC/Bukit Bintang)", cost: "MYR 2,000–4,500/mo ($460–$1,040)" },
      { item: "Mamak (hawker) meal", cost: "MYR 6–12 ($1.40–$2.80)" },
      { item: "Restaurant meal (mid-range)", cost: "MYR 25–60 ($5.80–$14)" },
      { item: "Grab taxi (across city)", cost: "MYR 8–20 ($1.85–$4.60)" },
      { item: "LRT/MRT monthly pass", cost: "MYR 150 ($35)" },
      { item: "Co-working space", cost: "MYR 400–800/mo ($93–$185)" },
      { item: "Gym membership", cost: "MYR 100–200/mo ($23–$46)" }
    ],
    monthlyBudget: { budget: "$900", comfortable: "$1,600", luxury: "$3,500" },
    bestFor: ["Digital Nomads", "Foodies", "Shoppers", "Tech Workers", "SE Asia Base"],
    neighbourhoods: [
      { name: "KLCC", vibe: "Petronas Twin Towers base, luxury living, malls, corporate expats" },
      { name: "Bangsar", vibe: "Traditional expat hub, restaurants, bars, leafy suburb, Bangsar Village mall" },
      { name: "Mont Kiara", vibe: "Expat families, international schools, condos, quieter suburban feel" },
      { name: "Bukit Bintang", vibe: "Entertainment district, street food (Jalan Alor), malls, central" },
      { name: "Chow Kit/Kuala Lumpur City Centre", vibe: "Authentic local, markets, budget, less polished but fascinating" }
    ],
    practicalInfo: {
      climate: "Equatorial. Hot and humid year-round (30–34°C). Two monsoon seasons. Heavy afternoon thunderstorms are common.",
      internet: "Good and improving. TM Unifi fibre widely available. 4G/5G solid in urban areas.",
      coworking: "Colony, Common Ground, WORQ, MaGIC — excellent co-working infrastructure.",
      safety: "Generally safe. Petty theft (snatch theft from motorcycles) is the main concern. Keep bags on the away-from-traffic side.",
      transport: "LRT, MRT, and Monorail cover key areas. Grab essential for areas not served by rail. Traffic gridlock in peak hours."
    },
    nomadScore: 8,
    highlights: ["Petronas Twin Towers — the world's tallest twin towers (1998–2004)", "Jalan Alor street food strip at night", "Batu Caves Hindu temple complex 20 minutes from city", "KL Forest Eco Park — rainforest within the city", "Penang day/weekend trip — UNESCO George Town and world-class cuisine"]
  },
  "ho-chi-minh-city": {
    city: "Ho Chi Minh City", slug: "ho-chi-minh-city", country: "Vietnam", countrySlug: "vietnam",
    tagline: "Saigon's relentless energy — Vietnam's economic engine at warp speed",
    overview: "Ho Chi Minh City (Saigon) is Vietnam's economic powerhouse — a chaotic, energetic, and extraordinarily vibrant metropolis of 9 million people. District 1 (Ben Thanh) is the tourist/backpacker zone; District 2 (Thao Dien) is the expat heartland with riverside cafés, international schools, and suburban calm. The city has an extraordinary food culture — from $1 pho at street stalls to world-class fine dining. HCMC's energy, pace, and affordability are genuinely addictive.",
    costBreakdown: [
      { item: "1BR apartment (District 2)", cost: "$400–$900/mo" },
      { item: "Pho (street stall)", cost: "$1–$2" },
      { item: "Restaurant meal (mid-range)", cost: "$5–$15" },
      { item: "Grab motorbike (across city)", cost: "$1–$3" },
      { item: "Iced Vietnamese coffee (cà phê sữa đá)", cost: "$0.50–$1.50" },
      { item: "Co-working space", cost: "$80–$180/mo" },
      { item: "Gym membership", cost: "$25–$60/mo" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,300", luxury: "$2,800" },
    bestFor: ["Digital Nomads", "Entrepreneurs", "Foodies", "History Seekers", "Budget Travellers"],
    neighbourhoods: [
      { name: "District 2 (Thao Dien)", vibe: "Expat hub, riverside, international schools, cafés, family-friendly" },
      { name: "District 1 (Ben Thanh)", vibe: "Tourist core, backpackers, Bui Vien Walking Street, central" },
      { name: "District 3", vibe: "Local professional, good restaurants, less touristy, central" },
      { name: "Binh Thanh", vibe: "Budget expat area, growing co-working, Landmark 81 nearby" },
      { name: "District 7 (Phu My Hung)", vibe: "Korean expat community, clean, modern, family-focused, malls" }
    ],
    practicalInfo: {
      climate: "Tropical. Hot and humid year-round (30–38°C). Dry season Nov–Apr. Wet season May–Oct (heavy afternoon monsoon rains). No winter.",
      internet: "Very good and fast. FPT, Viettel, and VNPT provide excellent fibre. Co-working spaces have reliable connections.",
      coworking: "Toong, Circo, Dreamplex, UP — excellent co-working infrastructure concentrated in District 1 and 2.",
      safety: "Generally safe. Motorbike theft (phone/bag snatching) is the main risk. Keep belongings secure.",
      transport: "Grab motorbike/car is the primary transport. Metro Line 1 finally opened 2024. Traffic chaos is legendary — motorbike skills essential."
    },
    nomadScore: 8,
    highlights: ["War Remnants Museum — powerful and essential", "Cu Chi Tunnels Viet Cong wartime underground network", "Ben Thanh Market and street food circuit", "Mekong Delta day trip (Cai Be floating market)", "Rooftop bars at EON51 and Chill Skybar"]
  },
  taipei: {
    city: "Taipei", slug: "taipei", country: "Taiwan", countrySlug: "taiwan",
    tagline: "Asia's most underrated city — safe, clean, tech-forward, and full of surprises",
    overview: "Taipei is consistently ranked as one of Asia's best cities for expats and digital nomads — a thoroughly modern, safe, and technologically advanced capital with an extraordinary night market culture, beautiful mountain and hot spring access, excellent healthcare, and one of Asia's friendliest populations. Taiwan's Gold Card Program (Employment Gold Card) is one of Asia's best digital nomad visa programs. Taipei's MRT is spotless; the food culture (night markets, beef noodle soup, bubble tea) is world-class.",
    costBreakdown: [
      { item: "1BR apartment (Xinyi/Da'an)", cost: "TWD 20,000–40,000/mo ($630–$1,260)" },
      { item: "Night market meal", cost: "TWD 50–150 ($1.60–$4.70)" },
      { item: "Restaurant meal (sit-down)", cost: "TWD 200–600 ($6.30–$18.90)" },
      { item: "MRT monthly pass", cost: "TWD 1,280 ($40)" },
      { item: "Bubble tea (the original)", cost: "TWD 50–100 ($1.60–$3.15)" },
      { item: "Co-working space", cost: "TWD 3,000–8,000/mo ($94–$252)" },
      { item: "Gym membership", cost: "TWD 1,200–2,500/mo ($38–$79)" }
    ],
    monthlyBudget: { budget: "$900", comfortable: "$1,600", luxury: "$3,200" },
    bestFor: ["Tech Workers", "Digital Nomads", "Foodies", "Hikers", "Gold Card Holders"],
    neighbourhoods: [
      { name: "Da'an District", vibe: "Most popular expat area — Da'an Forest Park, cafés, restaurants, central" },
      { name: "Xinyi District", vibe: "Business and luxury district — Taipei 101, high-end malls, nightlife" },
      { name: "Zhongshan District", vibe: "Trendy cafés, boutiques, creative culture, Dihua Street heritage" },
      { name: "Wenshan/Muzha", vibe: "Quieter, tea house culture, Maokong Gondola access, family-friendly" },
      { name: "Tamsui", vibe: "Riverside town, old fort, relaxed, cheaper, MRT to city" }
    ],
    practicalInfo: {
      climate: "Subtropical. Hot humid summers (Jun–Sep, 32–36°C). Mild winters (Dec–Feb, 15–18°C). Typhoon season July–September. Significant rainfall.",
      internet: "Extremely fast — among the world's fastest internet infrastructure. Chunghwa Telecom provides excellent fibre.",
      coworking: "DOJO, Co-Space, Changee, AppWorks — good co-working options. Café culture also very welcoming of working.",
      safety: "Extremely safe — one of Asia's and the world's safest cities. Crime is very low.",
      transport: "World-class MRT system (spotlessly clean). YouBike bike-share excellent. High Speed Rail to south of Taiwan."
    },
    nomadScore: 9,
    highlights: ["Taipei 101 — former world's tallest building, still iconic", "Shilin Night Market — Taiwan's largest and most famous", "Jiufen mountain village (Spirited Away inspiration)", "Beitou Hot Springs 30 minutes from city", "Gold Card Program — one of Asia's best remote worker visas"]
  },
  "cape-town": {
    city: "Cape Town", slug: "cape-town", country: "South Africa", countrySlug: "south-africa",
    tagline: "The Mother City — perhaps the world's most beautiful urban setting",
    overview: "Cape Town is widely considered one of the world's most beautiful cities — a breathtaking combination of Table Mountain (flat-topped, 1,086m), two oceans (Atlantic and Indian), vineyards, Cape Floral Kingdom (a UNESCO biodiversity hotspot), and a vibrant, cosmopolitan culture. For USD/EUR earners, Cape Town offers extraordinary value. The city has a growing tech and creative sector, excellent private healthcare, and a large English-speaking population. Despite its challenges, Cape Town delivers a quality of life unlike anywhere else in Africa.",
    costBreakdown: [
      { item: "1BR apartment (Sea Point/Green Point)", cost: "ZAR 12,000–22,000/mo ($660–$1,210)" },
      { item: "Restaurant meal (local)", cost: "ZAR 150–350 ($8–$19)" },
      { item: "Braai (BBQ) meat (supermarket)", cost: "ZAR 100–200 ($5.50–$11) for good quality" },
      { item: "Uber across city", cost: "ZAR 80–200 ($4.40–$11)" },
      { item: "Wine (excellent Stellenbosch bottle)", cost: "ZAR 80–150 ($4.40–$8.25)" },
      { item: "Co-working space", cost: "ZAR 2,000–5,000/mo ($110–$275)" },
      { item: "Private health insurance", cost: "ZAR 2,500–5,000/mo ($138–$275)" }
    ],
    monthlyBudget: { budget: "$1,000", comfortable: "$1,700", luxury: "$4,000" },
    bestFor: ["Outdoors Lovers", "Wine Enthusiasts", "Surfers", "Creatives", "Remote Workers"],
    neighbourhoods: [
      { name: "Sea Point", vibe: "Coastal promenade, expat-friendly, restaurants, ocean pool, walkable" },
      { name: "Green Point/De Waterkant", vibe: "LGBTQ+ hub, cafés, close to V&A Waterfront, lively" },
      { name: "Gardens/Oranjezicht", vibe: "Below Table Mountain, affluent, excellent restaurants, good security" },
      { name: "Camps Bay", vibe: "Beach strip, luxury, most expensive, stunning views, Clifton proximity" },
      { name: "Woodstock", vibe: "Creative/gentrifying, Old Biscuit Mill market, street art, local character" }
    ],
    practicalInfo: {
      climate: "Mediterranean. Dry hot summers (Dec–Feb, 26–32°C). Wet mild winters (Jun–Aug, 12–17°C). Summer wind (Cape Doctor) is powerful.",
      internet: "Good fibre in suburbs. Load shedding (power cuts) remain a challenge — UPS and solar popular. 4G solid.",
      coworking: "Workshop17, The Bureaux, Bandwidth Barn — quality co-working options.",
      safety: "Security consciousness is essential. Gated communities, alarm systems, and private security are standard. Research neighbourhoods carefully. Townships and certain areas require caution.",
      transport: "Car is essentially mandatory — public transport limited for expats. Uber works well but surge pricing common. MyCiTi bus limited routes."
    },
    nomadScore: 7,
    highlights: ["Table Mountain cable car and hiking (Lion's Head at sunrise)", "Cape Winelands (Stellenbosch, Franschhoek) 30–45 minutes away", "Cape of Good Hope National Park", "Boulders Beach penguin colony", "Old Biscuit Mill Saturday market in Woodstock"]
  },
  tbilisi: {
    city: "Tbilisi", slug: "tbilisi", country: "Georgia", countrySlug: "georgia",
    tagline: "The Caucasus crossroads — ancient, affordable, and rapidly becoming a digital nomad hub",
    overview: "Tbilisi is one of the world's most surprising and rewarding cities — a ancient capital of 1.5 million people at the crossroads of Europe and Asia, with a stunningly beautiful Old Town of carved wooden balconies, sulphur bath district (Abanotubani), Narikala fortress, vibrant wine bar scene, and rapidly developing digital nomad infrastructure. Georgia's 365-day visa-free policy for most nationalities and extraordinarily low cost of living have made Tbilisi one of the fastest-growing nomad hubs globally.",
    costBreakdown: [
      { item: "1BR apartment (Vake/Vera)", cost: "$300–$700/mo" },
      { item: "Khinkali (dumplings, 10)", cost: "$3–$5" },
      { item: "Restaurant meal", cost: "$4–$12" },
      { item: "Georgian wine (restaurant, bottle)", cost: "$8–$20" },
      { item: "Sulphur bath (private)", cost: "$10–$20/hr" },
      { item: "Metro monthly pass", cost: "$8" },
      { item: "Co-working space", cost: "$80–$150/mo" }
    ],
    monthlyBudget: { budget: "$600", comfortable: "$1,100", luxury: "$2,500" },
    bestFor: ["Digital Nomads", "Wine Lovers", "Hikers", "Budget Travellers", "History Seekers"],
    neighbourhoods: [
      { name: "Old Town (Kala/Abanotubani)", vibe: "Historic, sulphur baths, carved balconies, tourist-heavy but magical" },
      { name: "Vake", vibe: "Upscale residential, parks, cafés, most popular expat/nomad area" },
      { name: "Vera", vibe: "Bohemian, artsy, cheap rents, growing café and bar scene" },
      { name: "Sololaki", vibe: "Gentrifying, beautiful old buildings, international restaurants" },
      { name: "Saburtalo", vibe: "Soviet-era residential, local, very cheap, university area" }
    ],
    practicalInfo: {
      climate: "Humid continental. Hot summers (Jul–Aug, 30–36°C). Cold winters (Dec–Feb, 2–6°C, can freeze). Spring and autumn most pleasant.",
      internet: "Good and affordable. Silknet and Magticom provide fibre. Co-working spaces have excellent connections.",
      coworking: "Impact Hub Tbilisi, fabrika, Nomad Hub — growing and well-priced options.",
      safety: "Very safe — one of Europe/Caucasus's safer cities. Low crime, welcoming culture.",
      transport: "Metro (2 lines) covers key areas. Marshrutka (minibuses) chaotic but cheap. Bolt/Yandex taxis very cheap."
    },
    nomadScore: 9,
    highlights: ["Sulphur bath (banya) experience in Abanotubani", "Narikala fortress and Old Town walking", "Natural wine culture — Georgia is the birthplace of wine (8,000 years)", "Kazbegi mountain day trip (Gergeti Trinity Church)", "Fabrika creative hub and Tbilisi's extraordinary nightlife (Bassiani club)"]
  },
  tallinn: {
    city: "Tallinn", slug: "tallinn", country: "Estonia", countrySlug: "estonia",
    tagline: "A medieval city with a silicon soul — UNESCO-listed and digitally hyper-advanced",
    overview: "Tallinn is one of Europe's most remarkable cities — a UNESCO World Heritage medieval Old Town (Vanalinn) of Gothic towers, limestone walls, and cobblestone streets, paired with one of the world's most advanced digital governance systems and a thriving tech ecosystem (birthplace of Skype, TransferWise/Wise). As an EU capital with the eurozone and affordable living standards, Tallinn attracts digital nomads, entrepreneurs, and e-Residency holders from across the globe.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€700–€1,100/mo" },
      { item: "Restaurant meal (local)", cost: "€8–€15" },
      { item: "Beer (Saku or A. Le Coq, pub)", cost: "€3–€5" },
      { item: "Monthly transport pass", cost: "€30" },
      { item: "Sauna entry (public)", cost: "€5–€15" },
      { item: "Co-working space", cost: "€100–€200/mo" },
      { item: "Gym membership", cost: "€30–€50/mo" }
    ],
    monthlyBudget: { budget: "$1,100", comfortable: "$1,800", luxury: "$3,200" },
    bestFor: ["Tech Entrepreneurs", "e-Residency Holders", "History Lovers", "Digital Nomads", "EU Seekers"],
    neighbourhoods: [
      { name: "Old Town (Vanalinn)", vibe: "Medieval magic, tourist-heavy, expensive accommodation, stunning atmosphere" },
      { name: "Kalamaja", vibe: "Hipster/creative quarter, wooden houses, cafés, Telliskivi Creative City" },
      { name: "Kadriorg", vibe: "Park, art museum, presidential palace, quiet residential, beautiful" },
      { name: "Ülemiste City", vibe: "Tech park, Skype/Transferwise campus, commuter suburb, less character" },
      { name: "Põhja-Tallinn", vibe: "Gentrifying waterfront, local character, cheaper, growing café scene" }
    ],
    practicalInfo: {
      climate: "Northern maritime. Cold winters (Dec–Feb, -5–0°C, frequent snow). Warm summers (Jun–Aug, 20–26°C). Short but intense summer days (very long daylight).",
      internet: "Among Europe's fastest. Telia, Elisa, and Tele2 provide excellent fibre. Free public WiFi across the city.",
      coworking: "Lift99, Garage48, Spring Hub, Tallinn Science Park Tehnopol — world-class startup infrastructure.",
      safety: "Very safe — consistently ranked among Europe's safest cities.",
      transport: "Good bus and tram network. Free public transport for residents. Compact enough to cycle in summer. Bolt (founded in Tallinn) dominates ride-sharing."
    },
    nomadScore: 8,
    highlights: ["Old Town (Vanalinn) UNESCO medieval district", "Telliskivi Creative City market and street food", "Digital Nomad Visa and e-Residency program", "Lahemaa National Park 70km from city", "Sauna culture at Kalma Saun public bathhouse"]
  },
  istanbul: {
    city: "Istanbul", slug: "istanbul", country: "Turkey", countrySlug: "turkey",
    tagline: "Where continents meet — history, food, and culture on an epic scale",
    overview: "Istanbul is one of the world's truly great cities — a 15-million-person metropolis straddling two continents (Europe and Asia) across the Bosphorus Strait, with 2,500 years of Byzantine, Roman, and Ottoman history layered into every neighbourhood. The Hagia Sophia, Blue Mosque, Grand Bazaar, and Topkapi Palace sit alongside some of the world's best street food (simit, balık ekmek, dürüm), a legendary night and arts scene, and rapidly developing tech sector. For USD/EUR earners, Istanbul's currency depreciation makes it extraordinary value.",
    costBreakdown: [
      { item: "1BR apartment (Beyoğlu/Şişli)", cost: "$400–$900/mo (USD equivalent)" },
      { item: "Simit (sesame bagel, street)", cost: "$0.30" },
      { item: "Restaurant meal (local)", cost: "$5–$12 (USD equiv)" },
      { item: "Istanbulkart (transit) monthly", cost: "$15 (USD equiv)" },
      { item: "Turkish tea (çay) in teahouse", cost: "$0.30–$0.60" },
      { item: "Hammam experience", cost: "$25–$60" },
      { item: "Co-working space", cost: "$100–$200/mo (USD equiv)" }
    ],
    monthlyBudget: { budget: "$800", comfortable: "$1,500", luxury: "$3,500" },
    bestFor: ["History Lovers", "Foodies", "Digital Nomads", "Culture Seekers", "Budget Luxury Seekers"],
    neighbourhoods: [
      { name: "Beyoğlu/Taksim", vibe: "Entertainment hub, İstiklal Avenue, bars, restaurants, cosmopolitan" },
      { name: "Beşiktaş", vibe: "Lively local area, ferry connection, excellent seafood, football passion" },
      { name: "Karaköy/Galata", vibe: "Hipster, gallery scene, third-wave coffee, historic tower" },
      { name: "Kadıköy (Asian side)", vibe: "More local, younger crowd, excellent street food, lower rents" },
      { name: "Nişantaşı", vibe: "Upscale, fashion boutiques, European character, expensive but beautiful" }
    ],
    practicalInfo: {
      climate: "Mediterranean/continental. Hot dry summers (Jul–Aug, 28–34°C). Cold wet winters (Dec–Feb, 3–9°C). Beautiful spring and autumn.",
      internet: "Good and improving. Türknet, Superonline provide fibre. Some VPN restrictions apply.",
      coworking: "Kolektif House, Workinton, Regus — growing co-working infrastructure.",
      safety: "Generally safe for tourists and expats in main areas. Political situation requires monitoring. Petty theft standard precautions needed.",
      transport: "Excellent Metrobüs, metro, and tram system. Ferries on Bosphorus are a genuine commute option. Traffic is intense. Uber works (via BiTaksi)."
    },
    nomadScore: 8,
    highlights: ["Hagia Sophia and Blue Mosque (Sultanahmet)", "Grand Bazaar and Spice Market (Mısır Çarşısı)", "Bosphorus cruise between continents", "Princes' Islands (Adalar) day trip by ferry", "Kapalıçarşı antique market and Turkish carpet culture"]
  },
  athens: {
    city: "Athens", slug: "athens", country: "Greece", countrySlug: "greece",
    tagline: "The cradle of democracy — ancient ruins, Mediterranean food, and sea-scented air",
    overview: "Athens is one of the world's oldest continuously inhabited cities — a 3,500-year-old capital that has been the birthplace of democracy, philosophy, the Olympics, and Western civilisation. After decades of economic difficulty, Athens is experiencing a remarkable renaissance — a booming creative and tech scene, world-class restaurant culture, and a new generation of Athenians transforming neighbourhoods like Monastiraki, Koukaki, and Exarcheia. The Digital Nomad Visa, Golden Visa, and 7% flat tax on foreign pensions make Greece increasingly compelling.",
    costBreakdown: [
      { item: "1BR apartment (Koukaki/Pangrati)", cost: "€700–€1,200/mo" },
      { item: "Souvlaki (street)", cost: "€2.50–€4" },
      { item: "Restaurant meal (taverna)", cost: "€10–€20" },
      { item: "Frappe or Greek coffee", cost: "€1.50–€3" },
      { item: "Metro/tram monthly pass", cost: "€30" },
      { item: "Ferry to islands (weekend)", cost: "€30–€80 return" },
      { item: "Co-working space", cost: "€120–€220/mo" }
    ],
    monthlyBudget: { budget: "$1,100", comfortable: "$1,800", luxury: "$3,500" },
    bestFor: ["History Lovers", "Foodies", "Island Hoppers", "Nomads", "Retirees"],
    neighbourhoods: [
      { name: "Koukaki", vibe: "Most popular nomad area — below the Acropolis, cafés, restaurants, walkable" },
      { name: "Monastiraki/Thissio", vibe: "Flea market, Acropolis views, street food, lively" },
      { name: "Pangrati", vibe: "Local, residential, excellent value, good restaurant street (Plateia Varnava)" },
      { name: "Exarcheia", vibe: "Anarchist/alternative quarter, bookshops, cheap, politically vibrant, street art" },
      { name: "Glyfada", vibe: "Athens Riviera suburb, beach access, upscale, family expats" }
    ],
    practicalInfo: {
      climate: "Hot dry Mediterranean summers (Jul–Aug, 32–40°C). Mild wet winters (Dec–Feb, 8–13°C). Excellent spring/autumn. 300+ days of sunshine.",
      internet: "Good and improving. Cosmote, Vodafone GR, Wind provide fibre. Infrastructure behind Northern Europe.",
      coworking: "Found.ation, Theatro (by Google), CoLab, Impact Hub Athens — good options.",
      safety: "Generally safe. Pickpocketing in tourist areas (Monastiraki, metro) is the main concern. Some areas (Omonia) require awareness at night.",
      transport: "Metro (3 lines, including airport link). Trams to coast. Buses. Walking in central areas. Uber (via Beat app)."
    },
    nomadScore: 8,
    highlights: ["Acropolis and Parthenon (dawn visit for crowds-free experience)", "Athens Central Market (Varvakeios) — ancient food market", "Island day trips: Aegina, Hydra, Poros by ferry", "Monastiraki flea market on Sundays", "Cape Sounion — Temple of Poseidon at sunset, 70km from city"]
  },

  madrid: {
    city: "Madrid", slug: "madrid", country: "Spain", countrySlug: "spain",
    tagline: "Europe's most vibrant capital — art, tapas, late nights and world-class football",
    overview: "Madrid is one of Europe's great capital cities — warm, passionate, and relentlessly alive. As Spain's political and financial hub, it offers the best job market in the country alongside an extraordinary cultural life: the Prado, Reina Sofía and Thyssen-Bornemisza form one of the world's greatest museum triangles within walking distance. Madrid is also Europe's city that never sleeps — dinner at 10pm, bars until 3am, clubs open at midnight. The city punches above its weight for expats seeking career opportunities without Scandinavian prices.",
    costBreakdown: [
      { item: "1BR apartment (central)", cost: "€900–€1,600/mo" },
      { item: "1BR apartment (suburbs)", cost: "€650–€1,000/mo" },
      { item: "Tapas bar meal", cost: "€10–€20" },
      { item: "Coffee (café con leche)", cost: "€1.20–€1.80" },
      { item: "Metro monthly pass", cost: "€54.60" },
      { item: "Co-working space", cost: "€150–€280/mo" },
      { item: "Gym membership", cost: "€30–€60/mo" }
    ],
    monthlyBudget: { budget: "$1,600", comfortable: "$2,500", luxury: "$5,000" },
    bestFor: ["Career Seekers", "Art Lovers", "Foodies", "Football Fans", "Nightlife"],
    neighbourhoods: [
      { name: "Malasaña", vibe: "Hipster heartland, vintage shops, indie cafes, young crowd, bohemian" },
      { name: "Chueca", vibe: "LGBTQ+ hub, lively, boutiques, restaurants, very central" },
      { name: "Lavapiés", vibe: "Multicultural, artistic, cheap eats, edgy, gentrifying" },
      { name: "Salamanca", vibe: "Upscale, designer shops, embassy district, older affluent crowd" },
      { name: "La Latina", vibe: "Historic tapas bar district, weekend mercado, medieval streets" }
    ],
    practicalInfo: {
      climate: "Continental Mediterranean. Hot dry summers (35–40°C July/August). Mild winters (5–12°C). 300 sunny days/year.",
      internet: "Excellent fibre coverage. Movistar, Orange, Vodafone all offer fast broadband.",
      coworking: "Utopicus, WeWork, Cocoworking — Madrid has a growing co-working scene especially in the tech districts.",
      safety: "Generally very safe European capital. Pickpocketing in tourist areas (Sol, Gran Vía) — standard vigilance needed.",
      transport: "Excellent metro (13 lines). EMT buses. Cercanías commuter trains. Renfe AVE for intercity. Cycling expanding (BiciMAD)."
    },
    nomadScore: 8,
    highlights: ["Prado Museum — Velázquez, Goya, Rubens in a single afternoon", "Real Madrid or Atlético match at the Bernabéu or Metropolitano", "El Retiro Park — rowing lake and crystal palace on a Sunday morning", "Mercado de San Miguel — gourmet tapas and vermouth", "Day trip to Toledo or Segovia by AVE in under 30 minutes"]
  },

  phuket: {
    city: "Phuket", slug: "phuket", country: "Thailand", countrySlug: "thailand",
    tagline: "Thailand's island paradise — stunning beaches, resort infrastructure and year-round sun",
    overview: "Phuket is Thailand's largest island and its most developed beach destination. For expats, it offers a complete lifestyle: world-class beaches (Kata, Karon, Kamala, Bang Tao), international schools, excellent hospitals, and a permanent expat community of retirees, remote workers, and entrepreneurs. Rawai and Chalong attract long-stay expats seeking quieter, more local life; Patong is the tourist and nightlife epicentre. Infrastructure is good by Thai standards — Phuket International Airport has direct flights to 30+ countries.",
    costBreakdown: [
      { item: "1BR apartment / condo (mid-range)", cost: "฿12,000–฿25,000/mo" },
      { item: "Private villa (shared pool)", cost: "฿25,000–฿60,000/mo" },
      { item: "Restaurant meal (local Thai)", cost: "฿80–฿200" },
      { item: "Scooter rental", cost: "฿3,000–฿4,500/mo" },
      { item: "Co-working space", cost: "฿3,000–฿8,000/mo" },
      { item: "Gym membership (Muay Thai + fitness)", cost: "฿2,000–฿5,000/mo" },
      { item: "Grocery shopping (mid-range)", cost: "฿8,000–฿15,000/mo" }
    ],
    monthlyBudget: { budget: "$900", comfortable: "$1,600", luxury: "$3,500" },
    bestFor: ["Beach Lovers", "Retirees", "Divers", "Families", "Remote Workers"],
    neighbourhoods: [
      { name: "Rawai / Nai Harn", vibe: "Local, authentic, fishing village feel, quieter beach, expat retirees" },
      { name: "Chalong", vibe: "Central location, temples, Muay Thai gyms, convenient, residential" },
      { name: "Bang Tao / Laguna", vibe: "Upscale, luxury resorts, golf course, international schools nearby" },
      { name: "Patong", vibe: "Party town, Bangla Road nightlife, tourist-heavy, loud, convenient shops" },
      { name: "Kata / Karon", vibe: "Family-friendly beach, calmer than Patong, restaurants, surf school" }
    ],
    practicalInfo: {
      climate: "Tropical. Dry season November–April (30–33°C). Wet season May–October — heavy rains but beach life continues. Hottest March–April.",
      internet: "Good in central areas and condos. TRUE, AIS, DTAC provide 4G/5G. Co-working spaces reliable. Villa wifi can be patchy.",
      coworking: "HIVE Phuket (Chalong), Punspace (new branch), several beach co-working cafes. Smaller scene than Chiang Mai.",
      safety: "Generally safe. Road accidents (motorbike) are the biggest risk — drive carefully. Rip currents at some beaches — observe flags.",
      transport: "Car or scooter essential — public transport is very limited. Grab operates on the island. Songthaews (shared trucks) on fixed routes."
    },
    nomadScore: 7,
    highlights: ["Big Buddha — 45-metre white marble statue overlooking the island", "Phi Phi Islands day trip — stunning limestone karsts and turquoise water", "Chalong Bay Rum distillery tour", "Night market (Naka Weekend Market, Saturday/Sunday)", "Old Phuket Town — Sino-Portuguese shophouses and street art"]
  },

  tokyo: {
    city: "Tokyo", slug: "tokyo", country: "Japan", countrySlug: "japan",
    tagline: "The world's greatest megacity — endlessly fascinating, safe, and surprisingly liveable",
    overview: "Tokyo is arguably the world's most extraordinary city. A megacity of 14 million (Greater Tokyo: 37 million) that somehow manages to feel orderly, clean, safe, and deeply human. The combination of ancient temples and ultramodern architecture, Michelin stars at every price point, fashion districts, anime culture, and flawless infrastructure makes Tokyo unlike anywhere else. For expats, the main challenges are the language barrier and cost — but Tokyo rewards those who engage deeply. The tech and English-teaching job markets are the main entry points for foreign workers.",
    costBreakdown: [
      { item: "1K apartment (Shinjuku/Shibuya area)", cost: "¥100,000–¥180,000/mo ($650–$1,180)" },
      { item: "1K apartment (outer wards)", cost: "¥70,000–¥120,000/mo ($460–$790)" },
      { item: "Ramen at a local shop", cost: "¥800–¥1,200 ($5–$8)" },
      { item: "Set lunch (teishoku) at restaurant", cost: "¥900–¥1,500 ($6–$10)" },
      { item: "Monthly commuter pass (5 stops)", cost: "¥10,000–¥20,000/mo" },
      { item: "Co-working space", cost: "¥20,000–¥45,000/mo" },
      { item: "Gym membership", cost: "¥8,000–¥15,000/mo" }
    ],
    monthlyBudget: { budget: "$2,000", comfortable: "$3,200", luxury: "$6,000" },
    bestFor: ["Tech Workers", "Foodies", "Culture Lovers", "Language Learners", "Anime/Gaming fans"],
    neighbourhoods: [
      { name: "Shinjuku", vibe: "Entertainment hub, Golden Gai bars, Kabukicho, incredibly diverse, 24/7 energy" },
      { name: "Shibuya", vibe: "Fashion, shopping, Scramble crossing, young and trendy, tech startups" },
      { name: "Shimokitazawa", vibe: "Vintage shops, live music, indie cafes, young creative crowd" },
      { name: "Yanaka", vibe: "Old Tokyo atmosphere, temples, traditional crafts, quiet residential" },
      { name: "Nakameguro", vibe: "Upscale, canal-side cafes, boutiques, expat professionals" }
    ],
    practicalInfo: {
      climate: "Four distinct seasons. Hot humid summers (30–35°C, July–August). Cherry blossom spring (March–April). Mild winters (3–10°C). Typhoon season September–October.",
      internet: "World-class. NTT Docomo, SoftBank, au offer lightning-fast 5G. Home fibre from ¥4,000-5,000/month. Public WiFi improving.",
      coworking: "WeWork multiple locations, Fabbit, Regus, TELEPATHY Tokyo — extensive options especially in Shibuya/Shinjuku.",
      safety: "One of the world's safest cities. Almost zero violent crime. Natural disaster preparedness is essential (earthquakes, typhoons).",
      transport: "World's best public transport. 13 metro lines + JR network. IC card (Suica/Pasmo) for seamless payment. Taxis expensive. Cycling practical in some areas."
    },
    nomadScore: 8,
    highlights: ["Tsukiji Outer Market — sushi breakfast from the world's finest tuna", "Senso-ji temple at dawn before the crowds arrive", "teamLab Borderless — immersive digital art museum", "Day trip to Nikko or Kamakura — UNESCO shrines and giant Buddha", "Shibuya scramble crossing — 3,000 pedestrians crossing simultaneously"]
  },

  sydney: {
    city: "Sydney", slug: "sydney", country: "Australia", countrySlug: "australia",
    tagline: "Sun, harbour, surf and world-class careers — Australia's global city",
    overview: "Sydney is one of the world's most beautiful and liveable cities. The combination of a stunning natural setting (Sydney Harbour, Bondi Beach), a cosmopolitan culture reflecting 200 nationalities, a strong job market (especially finance, tech, and professional services), excellent public services, and year-round outdoor lifestyle makes it a compelling destination. The cost of living is high by global standards, but so are salaries. The Sydney expat community is enormous and well-integrated — the city's DNA is fundamentally multicultural.",
    costBreakdown: [
      { item: "1BR apartment (inner city)", cost: "AUD 2,500–4,000/mo ($1,650–$2,650)" },
      { item: "1BR apartment (outer suburbs)", cost: "AUD 1,800–2,800/mo ($1,190–$1,850)" },
      { item: "Café brunch (avocado toast era)", cost: "AUD 20–35" },
      { item: "Flat white coffee", cost: "AUD 4.50–6.00" },
      { item: "Opal card transport (monthly approx)", cost: "AUD 200–350/mo" },
      { item: "Co-working space", cost: "AUD 300–600/mo" },
      { item: "Gym membership", cost: "AUD 60–100/mo" }
    ],
    monthlyBudget: { budget: "$3,000", comfortable: "$4,500", luxury: "$8,000" },
    bestFor: ["Finance & Tech Professionals", "Beach Lovers", "Surfers", "Families", "Students"],
    neighbourhoods: [
      { name: "Surry Hills", vibe: "Trendy, brunch culture, cafes, diverse restaurants, young professionals" },
      { name: "Newtown", vibe: "Bohemian, vintage, LGBTQ+ friendly, student, creative" },
      { name: "Bondi / Coogee", vibe: "Beach lifestyle, surf culture, backpacker-to-professional mix" },
      { name: "Manly", vibe: "North shore ferry life, beach village, family-friendly, quieter" },
      { name: "CBD / Darling Harbour", vibe: "Business district, high-rise living, convenient, expensive, corporate" }
    ],
    practicalInfo: {
      climate: "Temperate oceanic. Warm summers (25–35°C Dec–Feb). Mild winters (8–17°C June–Aug). Spring and autumn ideal. Occasional bushfire smoke in summer.",
      internet: "Good NBN fibre coverage in most suburbs. Telstra, Optus, TPG are main providers. 5G expanding rapidly.",
      coworking: "WeWork, Fishburners, Stone & Chalk, Spaces — Sydney has a mature tech startup co-working scene.",
      safety: "Very safe. Low violent crime. Swimmers: check beach flags and shark warnings. Sun protection critical year-round.",
      transport: "Train network, bus, light rail and ferry. Opal card covers all modes. Traffic congestion is severe. Cycling infrastructure improving."
    },
    nomadScore: 8,
    highlights: ["Sydney Harbour Bridge climb — 360° city and ocean views", "Bondi to Coogee coastal walk (6km, ocean pools and clifftop views)", "Royal Botanic Garden with Opera House views", "Blue Mountains day trip — canyons and eucalyptus forest 90 minutes away", "Sydney Fish Market Sunday — freshest seafood in the Southern Hemisphere"]
  },

  melbourne: {
    city: "Melbourne", slug: "melbourne", country: "Australia", countrySlug: "australia",
    tagline: "Australia's cultural capital — coffee, arts, sport and the world's most liveable city reputation",
    overview: "Melbourne consistently tops global liveability rankings (Economist Intelligence Unit, Mercer) and its residents will tell you exactly why: extraordinary food and coffee culture, world-class arts institutions, a passionate sporting culture (AFL, tennis Grand Slam, cricket), diverse neighbourhoods, and a creative economy that punches above its weight. Melbourne is less overtly beautiful than Sydney but many expats find it the better city to actually live in — more affordable (relatively), more culturally rich, and with a distinct personality.",
    costBreakdown: [
      { item: "1BR apartment (inner city)", cost: "AUD 2,000–3,500/mo ($1,320–$2,300)" },
      { item: "1BR apartment (outer suburbs)", cost: "AUD 1,500–2,200/mo ($990–$1,460)" },
      { item: "Café meal (brunch)", cost: "AUD 18–30" },
      { item: "Specialty coffee", cost: "AUD 4–5.50" },
      { item: "Myki card (monthly approx)", cost: "AUD 180–280/mo" },
      { item: "Co-working space", cost: "AUD 250–500/mo" },
      { item: "Australian Rules Football game", cost: "AUD 25–80" }
    ],
    monthlyBudget: { budget: "$2,800", comfortable: "$4,000", luxury: "$7,000" },
    bestFor: ["Coffee Lovers", "Arts & Culture", "Foodies", "Tech Workers", "Students"],
    neighbourhoods: [
      { name: "Fitzroy / Collingwood", vibe: "Hipster capital, galleries, vintage, live music, craft beer bars" },
      { name: "South Yarra / Prahran", vibe: "Fashion, upscale dining, Chapel Street, young professionals" },
      { name: "Carlton", vibe: "University, Italian heritage (Lygon Street), cafes, families" },
      { name: "Richmond", vibe: "Multicultural, Vietnamese restaurants (Victoria Street), AFL culture" },
      { name: "St Kilda", vibe: "Beach suburb, Acland Street cake shops, backpacker scene, live music" }
    ],
    practicalInfo: {
      climate: "'Four seasons in one day' — notoriously changeable. Summers 30–42°C with heatwaves. Winters mild but grey (8–15°C). Best: March–May and September–November.",
      internet: "Strong NBN coverage. Telstra, Optus, Aussie Broadband all provide good home broadband.",
      coworking: "York Butter Factory, Inspire9, WeWork — Melbourne has a strong startup culture and excellent co-working options.",
      safety: "Very safe. Some CBD nightlife areas have occasional incidents late night. Standard urban awareness needed.",
      transport: "Tram network (largest in Southern Hemisphere), trains, buses. Myki card covers all. Inner suburbs walkable/cycleable. Car useful for outer areas."
    },
    nomadScore: 8,
    highlights: ["Federation Square and Ian Potter Centre — free contemporary Australian art", "Queen Victoria Market — fresh food and Saturday bustle since 1878", "Great Ocean Road day trip — Twelve Apostles and rainforest in one route", "Yarra Valley wine region — Pinot Noir and cool-climate whites 1 hour out", "Melbourne laneways — hidden graffiti art, espresso bars and dumpling cellars"]
  },

  paris: {
    city: "Paris", slug: "paris", country: "France", countrySlug: "france",
    tagline: "The world's most iconic city — art, gastronomy and a quality of life that redefines living",
    overview: "Paris needs no introduction but rewards deeper exploration. For expats, Paris offers the world's finest concentration of art, gastronomy, fashion, and intellectual culture in a city with excellent public transport, world-class healthcare, beautiful architecture, and a passionate café culture that makes daily errands pleasurable. The challenges are real: bureaucracy is labyrinthine, French is essential for integration, and housing is expensive and competitive. But for those who commit, Paris rewards like few other cities on earth.",
    costBreakdown: [
      { item: "Studio/1BR apartment (inner arrondissements)", cost: "€1,200–€2,200/mo" },
      { item: "1BR apartment (outer arrondissements/banlieue)", cost: "€800–€1,400/mo" },
      { item: "Brasserie lunch (plat du jour)", cost: "€12–€18" },
      { item: "Café crème", cost: "€2–€3.50" },
      { item: "Navigo metro pass (monthly, all zones)", cost: "€86.40" },
      { item: "Co-working space", cost: "€200–€400/mo" },
      { item: "Gym membership", cost: "€30–€80/mo" }
    ],
    monthlyBudget: { budget: "$2,200", comfortable: "$3,500", luxury: "$7,000" },
    bestFor: ["Culture Lovers", "Foodies", "Fashion Industry", "Finance Professionals", "Artists"],
    neighbourhoods: [
      { name: "Le Marais (3rd/4th arr.)", vibe: "Historic Jewish quarter, LGBTQ+ friendly, galleries, boutiques, cafes" },
      { name: "Montmartre (18th arr.)", vibe: "Artists' hill, Sacré-Cœur, tourist but charming, Amélie film locations" },
      { name: "Saint-Germain-des-Prés (6th arr.)", vibe: "Literary cafes (Flore, Deux Magots), bookshops, upscale, quintessentially Parisian" },
      { name: "Bastille / Oberkampf (11th arr.)", vibe: "Nightlife, young crowd, affordable relative to central, authentic Paris" },
      { name: "Canal Saint-Martin (10th arr.)", vibe: "Bobo (bourgeois bohemian), waterside cafes, young professionals, creative" }
    ],
    practicalInfo: {
      climate: "Temperate oceanic. Mild summers (22–28°C, July–August). Cold grey winters (2–8°C). Spring (April–May) and autumn (September–October) are best.",
      internet: "Excellent fibre. Orange, SFR, Bouygues, Free offer affordable fast broadband. Paris has good 5G coverage.",
      coworking: "WeWork, Regus, Kwerk, Morning — Paris has world-class co-working infrastructure especially in La Défense and the startup Station F campus.",
      safety: "Generally safe. Pickpocketing is a significant issue at tourist sites (Eiffel Tower, Louvre, metro) — be vigilant. Some outer areas less safe at night.",
      transport: "World-class Métro (16 lines). RER suburban trains. Vélib' bike share. Taxis and Uber. SNCF high-speed trains to all major French cities."
    },
    nomadScore: 8,
    highlights: ["Louvre Museum — world's most visited museum, masterpieces every corridor", "Père Lachaise Cemetery — Jim Morrison, Édith Piaf, Oscar Wilde", "Marché d'Aligre — best street market in Paris on Saturday mornings", "Day trip to Versailles — Palace, gardens and Grand Canal", "Sunset picnic on Pont des Arts or along Canal Saint-Martin"]
  },

  rome: {
    city: "Rome", slug: "rome", country: "Italy", countrySlug: "italy",
    tagline: "The Eternal City — 3,000 years of history on every street corner",
    overview: "Rome is one of the world's greatest cities for living inside history. The density of ancient monuments, Renaissance churches, Baroque fountains and piazzas is simply unmatched anywhere on earth. For expats, Rome offers a warm, chaotic, deeply beautiful lifestyle at moderate European cost. The food culture (carbonara, cacio e pepe, supplì, gelato) is extraordinary. Italians are passionate and welcoming. The challenges are the famous Italian bureaucracy, traffic, and the challenge of learning enough Italian to truly integrate.",
    costBreakdown: [
      { item: "1BR apartment (Trastevere/Prati)", cost: "€1,000–€1,800/mo" },
      { item: "1BR apartment (outer neighbourhoods)", cost: "€700–€1,100/mo" },
      { item: "Lunch (trattoria, pasta + wine)", cost: "€12–€20" },
      { item: "Espresso (standing at bar)", cost: "€1–€1.50" },
      { item: "Bus/metro monthly pass", cost: "€35" },
      { item: "Co-working space", cost: "€150–€300/mo" },
      { item: "Gym membership", cost: "€30–€60/mo" }
    ],
    monthlyBudget: { budget: "$1,700", comfortable: "$2,600", luxury: "$5,000" },
    bestFor: ["History & Culture", "Foodies", "Artists", "Architecture Lovers", "Students"],
    neighbourhoods: [
      { name: "Trastevere", vibe: "Medieval village feel, ivy-covered walls, restaurants, lively nightlife, very popular" },
      { name: "Pigneto", vibe: "Working-class turned hipster, street art, budget eateries, young creatives" },
      { name: "Prati", vibe: "Near Vatican, middle-class residential, wide avenues, family-friendly" },
      { name: "Testaccio", vibe: "Authentic Roman neighbourhood, former slaughterhouse area, best food market" },
      { name: "Garbatella", vibe: "Unique garden-city architecture, off the tourist trail, local and affordable" }
    ],
    practicalInfo: {
      climate: "Mediterranean. Hot dry summers (30–38°C). Mild wet winters (7–14°C). Best months: April–June and September–October.",
      internet: "TIM, Fastweb, WINDTRE provide fibre. Coverage improving but patchier than Northern European cities.",
      coworking: "Copernico, Talent Garden, TheHUB — Rome has a growing co-working scene especially near Termini and Tiburtina.",
      safety: "Generally safe. Pickpocketing especially on buses (Line 64 near Vatican notorious) and at Colosseum. Driving chaotic — walk or cycle where possible.",
      transport: "Two metro lines (limited but useful). Extensive bus network. Trams. Bikes (Roma in Bici). Walking best for historic centre. Traffic is chaotic."
    },
    nomadScore: 7,
    highlights: ["Colosseum and Roman Forum at opening time — before the tour groups arrive", "Sistine Chapel ceiling — Michelangelo's creation viewed from directly below", "Carbonara at Da Enzo al 29 in Trastevere — the definitive version", "Appian Way bicycle ride on Sunday — ancient tombs and no traffic", "Galleria Borghese — best sculpture collection in the world (pre-booking essential)"]
  },

  munich: {
    city: "Munich", slug: "munich", country: "Germany", countrySlug: "germany",
    tagline: "Bavaria's capital — prosperity, beer gardens, world-class museums and Alpine day trips",
    overview: "Munich is Germany's most prosperous and arguably most liveable major city. As the capital of Bavaria, it combines German efficiency and quality of life with a distinctly warmer, more sociable character — the beer garden culture is genuine, not performative. Home to BMW, Siemens, MAN, Allianz and a growing tech sector, Munich offers outstanding employment opportunities with correspondingly high salaries. The Alps and Lake Starnberg are 30 minutes away. The drawbacks: Munich is Germany's most expensive city for housing, with severe rental market competition.",
    costBreakdown: [
      { item: "1BR apartment (central Maxvorstadt/Schwabing)", cost: "€1,400–€2,500/mo" },
      { item: "1BR apartment (outer districts)", cost: "€1,000–€1,600/mo" },
      { item: "Beer garden meal (Brotzeit + Maß)", cost: "€18–€28" },
      { item: "Coffee (café)", cost: "€2.50–€4" },
      { item: "MVV monthly pass (inner zones)", cost: "€57" },
      { item: "Co-working space", cost: "€200–€400/mo" },
      { item: "Gym membership", cost: "€40–€80/mo" }
    ],
    monthlyBudget: { budget: "$2,500", comfortable: "$3,800", luxury: "$7,000" },
    bestFor: ["Engineering & Tech", "Automotive Industry", "Beer Culture", "Alpine Sports", "Families"],
    neighbourhoods: [
      { name: "Maxvorstadt", vibe: "Museum quarter, students, cafes, university area — Munich's most cultural neighbourhood" },
      { name: "Schwabing", vibe: "Historic Bohemian quarter, well-to-do, English Garden access, relaxed" },
      { name: "Glockenbachviertel", vibe: "LGBTQ+ friendly, young professionals, galleries, great restaurants" },
      { name: "Haidhausen (Au-Haidhausen)", vibe: "Family-friendly, slightly cheaper, French quarter feel, good transport" },
      { name: "Neuhausen-Nymphenburg", vibe: "Residential, Nymphenburg Palace, families, quieter, good for cyclists" }
    ],
    practicalInfo: {
      climate: "Continental. Warm summers (25–30°C). Cold winters (-5 to 5°C) with reliable snow. Spring and autumn beautiful. Föhn wind can cause headaches before Alps storms.",
      internet: "Excellent fibre. Deutsche Telekom, Vodafone, 1&1 all provide fast connections.",
      coworking: "WeWork, betahaus Munich, TechQuartier — Munich has a solid but smaller startup scene than Berlin.",
      safety: "One of Germany's safest large cities. Low crime. Very orderly public life.",
      transport: "Excellent U-Bahn (metro), S-Bahn, tram and bus. MVV card covers all. Munich Central Station (Hauptbahnhof) is the rail hub for day trips and intercity."
    },
    nomadScore: 7,
    highlights: ["English Garden — 375 hectares, beer gardens, nude sunbathing meadow, urban surfing on the Eisbach wave", "Oktoberfest (late September) — beer halls, traditional dress, extraordinary atmosphere", "Day trip to Neuschwanstein Castle — the world's most photographed castle, 90 minutes away", "BMW Welt and Museum — even for non-car enthusiasts, spectacularly designed", "Marienplatz glockenspiel at 11am and Viktualienmarkt fresh produce market"]
  },

  hanoi: {
    city: "Hanoi", slug: "hanoi", country: "Vietnam", countrySlug: "vietnam",
    tagline: "Vietnam's ancient capital — French colonial charm, street food heaven and chaotic energy",
    overview: "Hanoi is Vietnam's political capital and one of Southeast Asia's most distinctive cities. The French colonial architecture, ancient Temple of Literature, 36 guild streets of the Old Quarter, and Hoan Kiem Lake create a city of extraordinary character. Hanoi is significantly cheaper and more authentic than Ho Chi Minh City, with a cooler climate in winter. The digital nomad scene is smaller but growing, and the food culture (pho, bun cha, bun bo Hue, egg coffee) is considered among the finest in the world.",
    costBreakdown: [
      { item: "1BR serviced apartment (Ba Dinh/Tay Ho)", cost: "$400–$900/mo" },
      { item: "1BR apartment (Old Quarter)", cost: "$300–$700/mo" },
      { item: "Pho breakfast (street stall)", cost: "VND 35,000–60,000 ($1.50–$2.50)" },
      { item: "Bun cha lunch", cost: "VND 45,000–80,000 ($2–$3.50)" },
      { item: "Grab motorbike ride (3km)", cost: "VND 20,000–35,000 ($0.85–$1.50)" },
      { item: "Co-working space", cost: "$80–$200/mo" },
      { item: "Vietnamese language class", cost: "$100–$200/mo" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,200", luxury: "$2,500" },
    bestFor: ["History Buffs", "Foodies", "Budget Travellers", "Language Learners", "Motorbike Explorers"],
    neighbourhoods: [
      { name: "Hoan Kiem (Old Quarter)", vibe: "Chaotic, historic, guilds, street food, tourist-heavy but vibrant" },
      { name: "Tay Ho (West Lake)", vibe: "Expat enclave, lakeside, international restaurants, quieter, yoga studios" },
      { name: "Ba Dinh", vibe: "Embassy district, Ho Chi Minh mausoleum, tree-lined boulevards, spacious" },
      { name: "Dong Da", vibe: "Student area, University of Hanoi, young crowd, local and affordable" },
      { name: "Long Bien", vibe: "Up-and-coming, riverside, crossing the bridge — authentic Hanoi life" }
    ],
    practicalInfo: {
      climate: "Four seasons unlike southern Vietnam. Winters genuinely cool (14–20°C, Dec–Feb). Hot humid summers (35°C+). Best: October–November and March–April.",
      internet: "Good 4G/5G. Viettel and Mobifone SIM cards very cheap. Co-working spaces reliable. Home fibre affordable (under $15/month).",
      coworking: "Toong, Dreamplex, UP Co-working — growing scene especially near West Lake and Ba Dinh.",
      safety: "Generally safe. Traffic is the main hazard — chaotic motorbike culture. Petty theft in Old Quarter. Air quality can be poor in winter.",
      transport: "Grab (motorbike and car) essential. No functional metro yet (under construction). Walking in Old Quarter. Bicycle renting popular."
    },
    nomadScore: 7,
    highlights: ["Egg coffee at Café Giang — Vietnam's unique invention, thick and extraordinary", "Temple of Literature — Vietnam's first university, 11th century, beautiful courtyards", "Ha Long Bay weekend trip — limestone karsts and overnight junk cruises", "Hoan Kiem Lake sunset walk and Ngoc Son Temple on the island", "Dong Xuan Market — Hanoi's largest covered market, all of Vietnam in one hall"]
  },

  "da-nang": {
    city: "Da Nang", slug: "da-nang", country: "Vietnam", countrySlug: "vietnam",
    tagline: "Vietnam's rising star — beach, mountains, ancient towns and the fastest-growing nomad scene",
    overview: "Da Nang has exploded as a digital nomad and expat destination in the last five years. The combination of My Khe Beach (one of Asia's best urban beaches), proximity to UNESCO World Heritage Hoi An (30 minutes) and ancient Hue (2 hours), a modern city infrastructure, excellent co-working scene, affordable costs, and year-round warmth makes it uniquely compelling. Vietnam's government has invested heavily in Da Nang's infrastructure, and the Nomad community here rivals Chiang Mai in its depth and organisation.",
    costBreakdown: [
      { item: "1BR apartment (beachside Mỹ Khê)", cost: "$300–$700/mo" },
      { item: "1BR apartment (city centre)", cost: "$250–$500/mo" },
      { item: "Banh mi (street stall)", cost: "VND 20,000–40,000 ($0.85–$1.70)" },
      { item: "Mi Quang noodle dish (local)", cost: "VND 40,000–60,000 ($1.70–$2.50)" },
      { item: "Beach club day pass", cost: "$5–$15" },
      { item: "Co-working space (monthly)", cost: "$80–$180/mo" },
      { item: "Scooter rental (monthly)", cost: "$60–$100/mo" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,100", luxury: "$2,200" },
    bestFor: ["Digital Nomads", "Beach Lovers", "Surfers", "Budget Travellers", "Remote Workers"],
    neighbourhoods: [
      { name: "Mỹ Khê Beach area", vibe: "Beachfront, resorts and expat apartments, surf, sunsets, vibrant" },
      { name: "Hai Chau (city centre)", vibe: "Central, Han Market, affordable, local Vietnamese daily life" },
      { name: "Son Tra Peninsula", vibe: "Jungle meets beach, Monkey Mountain, quieter, scenic, diving access" },
      { name: "An Thuong area", vibe: "Expat hub, restaurants, bars, yoga studios, walking distance to beach" },
      { name: "Ngu Hanh Son (Marble Mountains)", vibe: "Local neighbourhood, Buddhist temples, sculpture workshops, cheaper" }
    ],
    practicalInfo: {
      climate: "Tropical monsoon. Dry season March–August (hot, 30–35°C). Rainy season September–January (typhoon risk October–November).",
      internet: "Excellent fibre and 4G. Viettel, Mobifone cheapest. Very reliable at co-working spaces.",
      coworking: "Toong Da Nang, Enouvo Space, The Hub — Da Nang now has 20+ co-working spaces of good quality.",
      safety: "Very safe. Water safety at beach during storm season. Standard motorbike traffic awareness.",
      transport: "Motorbike or scooter essential. Grab widely used. Limited public buses. Short distances make cycling practical in some areas."
    },
    nomadScore: 9,
    highlights: ["My Khe Beach — 30km of pristine urban beach with clear warm water", "Hoi An Ancient Town day trip — lantern-lit streets and UNESCO heritage", "Bà Nà Hills (Golden Bridge) — hands holding a bridge in misty mountains", "Marble Mountains — Buddhist caves, shrines and summit views over the coast", "Nomad meetups at An Thuong — the most active digital nomad scene in Vietnam"]
  },

  milan: {
    city: "Milan", slug: "milan", country: "Italy", countrySlug: "italy",
    tagline: "Italy's financial capital — fashion, design, finance and Italy's best nightlife",
    overview: "Milan is Italy's engine room — the country's financial, fashion and design capital. If Rome is about history and Naples about passion, Milan is about ambition and taste. The city hosts fashion week twice yearly, the world's best furniture fair (Salone del Mobile), and is home to Italy's largest concentration of multinational headquarters. For expats, Milan offers the most substantial job market in Italy, a cosmopolitan international community, excellent aperitivo culture, and proximity to the Italian Lakes, Alps and coastal towns. It's more expensive than other Italian cities but more European in pace.",
    costBreakdown: [
      { item: "1BR apartment (Navigli/Isola)", cost: "€1,100–€2,000/mo" },
      { item: "1BR apartment (outer areas)", cost: "€750–€1,200/mo" },
      { item: "Aperitivo (drink + buffet)", cost: "€8–€12" },
      { item: "Espresso (standing at bar)", cost: "€1–€1.50" },
      { item: "ATM/GTT monthly transport pass", cost: "€39" },
      { item: "Co-working space", cost: "€200–€400/mo" },
      { item: "Gym membership", cost: "€40–€80/mo" }
    ],
    monthlyBudget: { budget: "$2,000", comfortable: "$3,200", luxury: "$6,000" },
    bestFor: ["Fashion & Design", "Finance Professionals", "Foodies", "Architecture Lovers", "Internationals"],
    neighbourhoods: [
      { name: "Navigli", vibe: "Canal district, aperitivo strip, young professionals, nightlife, artistic" },
      { name: "Isola", vibe: "Gentrified village-in-a-city, Michelin restaurants, boutiques, creative class" },
      { name: "Brera", vibe: "Art gallery district, cobbled streets, boutiques, elegant and quiet" },
      { name: "Porta Venezia", vibe: "LGBTQ+ friendly, Liberty architecture, diverse, lively bar scene" },
      { name: "City Life / Tre Torri", vibe: "Ultra-modern district, Zaha Hadid towers, upscale, business park" }
    ],
    practicalInfo: {
      climate: "Continental. Hot humid summers (30–35°C, with smog). Cold foggy winters (0–8°C). Best: April–May and September–October.",
      internet: "TIM, Fastweb, WINDTRE all offer good home broadband. 5G coverage is strong in Milan.",
      coworking: "Talent Garden (multiple), Impact Hub, Spaces, Copernico — Milan has Italy's best co-working infrastructure.",
      safety: "Generally safe. Central Milan has pickpocketing (Duomo area, metro). Some late-night areas require awareness.",
      transport: "Excellent metro (4 lines). Trams and buses. ATM card for all modes. Trenitalia/Italo for intercity. Cycling improving (BikeMi)."
    },
    nomadScore: 7,
    highlights: ["The Last Supper (Leonardo da Vinci) — book 3 months ahead, 15-minute viewings", "Duomo rooftop walk — cathedral architecture and Alps on clear days", "Salone del Mobile (April) — world's greatest design fair open to public", "Navigli aperitivo from 6-9pm — all-you-can-eat buffet included with drinks", "Lake Como day trip — Bellagio, Varenna and ferries in 50 minutes by train"]
  },

  bogota: {
    city: "Bogotá", slug: "bogota", country: "Colombia", countrySlug: "colombia",
    tagline: "South America's highest capital — culture, gastronomy and a city in rapid transformation",
    overview: "Bogotá sits at 2,600 metres in the Andes and is one of South America's most dynamic and culturally rich capitals. The city has undergone an extraordinary transformation — from a dangerous 1990s capital to a sophisticated modern metropolis with world-class museums (Gold Museum, Botero Museum), a thriving food scene, an electric cycling culture, and a creative class that has put Colombian design, music and cuisine on the global map. The altitude and traffic are the main adjustment challenges; the rewards are significant.",
    costBreakdown: [
      { item: "1BR apartment (Chapinero/Zona Rosa)", cost: "COP 1,800,000–4,500,000/mo ($450–$1,100)" },
      { item: "1BR apartment (Kennedy/Engativá)", cost: "COP 900,000–1,800,000/mo ($220–$450)" },
      { item: "Bandeja paisa (set meal)", cost: "COP 15,000–35,000 ($4–$9)" },
      { item: "Tinto (small black coffee)", cost: "COP 1,000–3,000 ($0.25–$0.75)" },
      { item: "TransMilenio card (monthly approx)", cost: "COP 90,000–150,000 ($22–$38)" },
      { item: "Co-working space", cost: "COP 300,000–800,000/mo ($75–$200)" },
      { item: "Gym membership", cost: "COP 80,000–180,000/mo ($20–$45)" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,300", luxury: "$2,800" },
    bestFor: ["Culture Lovers", "Foodies", "Cyclists", "Latin America HQ seekers", "Budget Travellers"],
    neighbourhoods: [
      { name: "Chapinero / Zona Rosa", vibe: "Upscale, restaurants, LGBTQ+ friendly, tree-lined, expat professionals" },
      { name: "La Candelaria", vibe: "Historic centre, colonial architecture, museums, students, graffiti art" },
      { name: "Usaquén", vibe: "Colonial village-in-a-city, weekend antique market, brunch culture, upscale" },
      { name: "Teusaquillo", vibe: "Intellectual, Universidad Nacional, heritage houses, art galleries, local" },
      { name: "El Chico", vibe: "Wealthy residential, Andean Club, quiet streets, embassies" }
    ],
    practicalInfo: {
      climate: "Altitude equatorial: cool year-round (7–19°C). Rainy seasons March–May and October–November. Dry: December–February and July–August. Always carry a jacket.",
      internet: "Good 4G, fibre expanding. Claro, ETB and Tigo are main providers. Co-working spaces reliable.",
      coworking: "Selina Bogotá, Espacio B, The Social Hub — growing startup scene centred on Chapinero.",
      safety: "Research neighbourhoods carefully. Chapinero, Zona Rosa, Usaquén very safe for expats. Avoid La Candelaria at night. Use Uber/InDriver rather than street taxis.",
      transport: "TransMilenio (BRT system, busy but effective). Ciclovía on Sundays (121km car-free). Uber and InDriver recommended. Altitude makes walking feel harder."
    },
    nomadScore: 7,
    highlights: ["Gold Museum (Museo del Oro) — 55,000 pre-Hispanic gold artefacts, free on Sundays", "Ciclovía — every Sunday, 121km of roads car-free for cyclists and walkers", "Monserrate Mountain — cable car and funicular to hilltop church overlooking the city", "La Perseverancia market — authentic Colombian market experience in the city", "Botero Museum — free museum of Fernando Botero's plump sculptures and paintings"]
  },

  penang: {
    city: "Penang (George Town)", slug: "penang", country: "Malaysia", countrySlug: "malaysia",
    tagline: "Asia's food capital — UNESCO heritage streets, street art and Malaysia's richest culture",
    overview: "Penang's George Town is one of Asia's most compelling mid-size cities. The UNESCO World Heritage-listed historic centre is a kaleidoscope of Straits Chinese shophouses, Tamil Hindu temples, Chinese clan houses, colonial buildings and street art murals that have made it globally famous. The food culture is extraordinary — routinely voted Asia's best street food destination. Penang is significantly cheaper than Kuala Lumpur or Singapore, has excellent hospitals (major medical tourism destination) and a growing digital nomad community around the historic core.",
    costBreakdown: [
      { item: "1BR apartment (George Town)", cost: "MYR 1,200–2,500/mo ($260–$540)" },
      { item: "Penang Hill condo/serviced apt", cost: "MYR 1,500–3,000/mo ($320–$650)" },
      { item: "Char kway teow (street hawker)", cost: "MYR 6–12 ($1.30–$2.60)" },
      { item: "Nasi kandar (full meal)", cost: "MYR 8–15 ($1.75–$3.25)" },
      { item: "Grab ride (10km)", cost: "MYR 10–20 ($2.15–$4.30)" },
      { item: "Co-working space", cost: "MYR 300–800/mo ($65–$175)" },
      { item: "Gym membership", cost: "MYR 80–200/mo ($17–$43)" }
    ],
    monthlyBudget: { budget: "$700", comfortable: "$1,100", luxury: "$2,200" },
    bestFor: ["Foodies", "Culture Lovers", "Medical Tourists", "Retirees", "Digital Nomads"],
    neighbourhoods: [
      { name: "George Town UNESCO Core", vibe: "Heritage, street art, boutique hotels, cafes, walking distance everything" },
      { name: "Gurney Drive / Gurney Paragon", vibe: "Upscale seafront, hawker centre, malls, expat condos" },
      { name: "Tanjung Bungah", vibe: "Beachside, quieter, family-friendly, older expat community" },
      { name: "Batu Ferringhi", vibe: "Beach resort, tourist strip, night market, budget to mid-range" },
      { name: "Ayer Itam", vibe: "Local, Kek Lok Si temple area, affordable, authentic daily life" }
    ],
    practicalInfo: {
      climate: "Tropical. Hot and humid year-round (28–34°C). No real dry season. Northeast monsoon Oct–Jan can bring flooding. Generally pleasant compared to KL.",
      internet: "Good 4G, fibre in urban areas. Unifi (TM), Maxis and Celcom provide broadband. Very affordable (~MYR 79-99/month for fibre).",
      coworking: "Common Ground (Penang), Penang Digital Library, Impact Hub — small but growing co-working scene.",
      safety: "Very safe. Penang consistently rates as Malaysia's safest state. Standard petty theft vigilance in touristy areas.",
      transport: "Car or Grab recommended — Penang has no metro. Free CAT bus service in George Town heritage zone. Bridge connects island to mainland (35 minutes)."
    },
    nomadScore: 8,
    highlights: ["Char kway teow at Penang Road Famous Teochew Chendul — queue and eat standing", "Street art murals by Ernest Zacharevic — life-sized paintings throughout George Town", "Kek Lok Si Temple (Chinese New Year illuminations — spectacular)", "Penang Hill funicular for city panorama and butterfly farm", "Batu Maung seafood restaurants — outdoor tables, fresh tiger prawns and mantis shrimp at sunset"]
  },

  marrakech: {
    city: "Marrakech", slug: "marrakech", country: "Morocco", countrySlug: "morocco",
    tagline: "The Red City — Morocco's most iconic destination blending souks, riads and Atlas Mountains",
    overview: "Marrakech is one of the world's most sensory-rich cities — a labyrinthine medina of souks, riads (courtyard houses), hammams, spice markets and ancient palaces. For expats and long-stay nomads, Marrakech offers a unique combination of North African culture, affordable living, year-round sunshine, a growing creative and co-working scene, and direct flights to Europe (2–3 hours from London, Paris, Amsterdam). The Medina is a UNESCO World Heritage site; the new city (Gueliz) is modern, French-influenced and convenient.",
    costBreakdown: [
      { item: "Riad rental (Medina, shared)", cost: "MAD 3,000–8,000/mo ($290–$780)" },
      { item: "1BR apartment (Gueliz)", cost: "MAD 4,000–9,000/mo ($390–$880)" },
      { item: "Tajine (local restaurant)", cost: "MAD 60–120 ($6–$12)" },
      { item: "Mint tea at riad", cost: "MAD 15–30 ($1.50–$3)" },
      { item: "Petit taxi (within Medina)", cost: "MAD 10–30 ($1–$3)" },
      { item: "Co-working space", cost: "MAD 800–2,000/mo ($78–$195)" },
      { item: "Hammam session", cost: "MAD 80–200 ($8–$20)" }
    ],
    monthlyBudget: { budget: "$800", comfortable: "$1,400", luxury: "$3,000" },
    bestFor: ["Culture Lovers", "Slow Travellers", "Creatives", "Digital Nomads", "Foodies"],
    neighbourhoods: [
      { name: "Medina (Derb Dabachi)", vibe: "Historic heart, souks, riad living, evocative, labyrinthine" },
      { name: "Gueliz (Ville Nouvelle)", vibe: "French new city, cafes, supermarkets, modern apartments, convenient" },
      { name: "Hivernage", vibe: "Hotel district, upscale, palm-lined boulevards, nightclubs" },
      { name: "Sidi Ghanem", vibe: "Industrial area turned creative district — design studios, galleries, factories" },
      { name: "Palmeraie", vibe: "Luxury villas, palm groves, golf, expensive and secluded" }
    ],
    practicalInfo: {
      climate: "Semi-arid. Very hot dry summers (38–42°C June–August). Warm pleasant winters (15–22°C). Spring/autumn ideal. Atlas Mountains visible on clear winter days.",
      internet: "Improving rapidly. Maroc Telecom (IAM) provides decent 4G. Fibre available in Gueliz. Co-working spaces reliable.",
      coworking: "Cwork, Hub by Google (former), various riad-based spaces — Marrakech has 15+ co-working spots with growing quality.",
      safety: "Generally safe. Medina: take care of bag snatching and aggressive touts in the souks. Women should dress modestly. Exercise standard caution.",
      transport: "Petit taxis (shared, metered) and grand taxis. No metro. Uber operates. Walking best in Medina. Car needed for Atlas excursions."
    },
    nomadScore: 7,
    highlights: ["Djemaa el-Fna square at dusk — food stalls, storytellers, snake charmers, musicians", "Bahia Palace — stunning 19th-century Arabic-Andalusian architecture", "Majorelle Garden — Yves Saint Laurent's Cubist garden with cobalt blue buildings", "Atlas Mountains day trip — Ouzoud Waterfalls or trekking in the Ourika Valley", "Souk tanneries — ancient leather-dyeing vats viewed from surrounding terrace shops"]
  },

  florence: {
    city: "Florence", slug: "florence", country: "Italy", countrySlug: "italy",
    tagline: "The cradle of the Renaissance — Michelangelo, Botticelli and Chianti wine",
    overview: "Florence is one of the world's greatest concentrations of art and architecture in a beautifully human-scale city. As the birthplace of the Renaissance, it houses the Uffizi Gallery, Michelangelo's David, Brunelleschi's Dome, and the Ponte Vecchio jewellers' bridge. For expats, Florence offers Italian charm without Rome's chaos, a vibrant study-abroad and creative community, excellent Tuscan cuisine and wine, and proximity to Tuscany's rolling countryside. It's not a major employment hub but draws artists, writers, students and those who can work remotely.",
    costBreakdown: [
      { item: "1BR apartment (Oltrarno/Santa Croce)", cost: "€900–€1,600/mo" },
      { item: "1BR apartment (outer neighbourhoods)", cost: "€650–€1,000/mo" },
      { item: "Trattoria lunch (pasta + wine)", cost: "€12–€20" },
      { item: "Espresso at historic café", cost: "€1–€1.50" },
      { item: "Bus monthly pass", cost: "€35" },
      { item: "Co-working space", cost: "€150–€280/mo" },
      { item: "Chianti Classico bottle (enoteca)", cost: "€8–€20" }
    ],
    monthlyBudget: { budget: "$1,600", comfortable: "$2,500", luxury: "$4,500" },
    bestFor: ["Art Lovers", "Students", "Foodies", "Writers", "Wine Enthusiasts"],
    neighbourhoods: [
      { name: "Oltrarno", vibe: "Left bank, artisanal workshops, less touristy, local bars, authentic" },
      { name: "Santa Croce", vibe: "Near famous basilica, mix of students and locals, good restaurants" },
      { name: "San Niccolò", vibe: "Under-the-radar, Piazzale Michelangelo views, young crowd, affordable" },
      { name: "Campo di Marte", vibe: "Residential, Fiorentina football stadium area, very local, cheap" },
      { name: "Duomo/Historic Centre", vibe: "Tourist-heavy, views, convenient but expensive and always crowded" }
    ],
    practicalInfo: {
      climate: "Mediterranean. Hot dry summers (32–38°C). Mild cold winters (3–12°C). Beautiful spring and autumn. Can flood near the Arno (November 1966 flood famous).",
      internet: "TIM and Fastweb offer fibre. Coverage good in the city. Co-working spaces reliable.",
      coworking: "Impact Hub Florence, Talent Garden, various cafes — small but functional co-working scene.",
      safety: "Very safe. Pickpocketing near the Duomo and Uffizi. Locals in Oltrarno and residential areas have almost no crime.",
      transport: "Compact city — walkable historic centre. Bus network (ATAF). Cycling popular in flat areas. Car restricted in ZTL (historic centre restricted traffic zone). Train from Santa Maria Novella station."
    },
    nomadScore: 7,
    highlights: ["Uffizi Gallery — Botticelli's Birth of Venus and Primavera in a single hall", "Michelangelo's David at the Accademia — beyond photographs, profoundly moving", "Piazzale Michelangelo sunset — golden hour panorama over the Arno", "Day trip to Chianti wine country — vineyards, castles and Sangiovese tastings", "Mercato Centrale upstairs food hall — Florence's best artisan food producers under one roof"]
  }
};
