export interface School {
  name: string;
  type: 'university' | 'international' | 'language';
  ranking?: string;
  annualFee: string;
  currency: string;
  programs: string[];
  language: string;
  website?: string;
  notes: string;
}

export interface SchoolsContent {
  slug: string;
  country: string;
  intro: string;
  systemOverview: string;
  universities: School[];
  internationalSchools: School[];
  languageSchools: School[];
  studentVisa: string;
  costOfStudying: { item: string; cost: string }[];
  topCities: string[];
  scholarships: string[];
  faq: { question: string; answer: string }[];
}

export const SCHOOLS_CONTENT: Record<string, SchoolsContent> = {
  germany: {
    slug: "germany",
    country: "Germany",
    intro: "Germany is one of the world's top destinations for international students — with free tuition at public universities, world-class research institutions, and strong post-graduation job opportunities. Over 400,000 international students currently study in Germany.",
    systemOverview: "German public universities charge no tuition fees for undergraduate study — even for international students from outside the EU. Students pay only a semester contribution (€200–500) covering admin, student transport pass, and campus services. Private universities charge €5,000–€20,000/year. Germany has 3 Nobel Prize winners per million population — the highest in the world.",
    universities: [
      { name: "Technical University of Munich (TUM)", type: "university", ranking: "#37 Global (QS 2025)", annualFee: "€144", currency: "EUR", programs: ["Engineering", "Computer Science", "Natural Sciences", "Business"], language: "German/English", notes: "Germany's #1 university. World Top 50. Excellent industry connections with BMW, Siemens, Allianz." },
      { name: "Ludwig Maximilian University Munich (LMU)", type: "university", ranking: "#63 Global", annualFee: "€144", currency: "EUR", programs: ["Medicine", "Law", "Social Sciences", "Natural Sciences"], language: "German", notes: "One of Europe's most prestigious universities. 42 Nobel laureates." },
      { name: "Humboldt University Berlin", type: "university", ranking: "#120 Global", annualFee: "€314", currency: "EUR", programs: ["Humanities", "Social Sciences", "Natural Sciences", "Medicine"], language: "German", notes: "Founded 1810. Located in central Berlin. Strong research output." },
      { name: "RWTH Aachen University", type: "university", ranking: "#106 Global", annualFee: "€268", currency: "EUR", programs: ["Engineering", "Natural Sciences", "Architecture"], language: "German/English", notes: "Germany's best technical university outside Munich. Top employer: engineering multinationals." },
      { name: "Heidelberg University", type: "university", ranking: "#87 Global", annualFee: "€175", currency: "EUR", programs: ["Medicine", "Life Sciences", "Law", "Social Sciences"], language: "German", notes: "Germany's oldest university (1386). World-class medical school." },
      { name: "ESMT Berlin", type: "university", ranking: "Top 15 Europe MBA", annualFee: "€35,500", currency: "EUR", programs: ["MBA", "Executive Education", "Finance"], language: "English", notes: "Germany's only private business school with global accreditation. Excellent finance placements." },
    ],
    internationalSchools: [
      { name: "Berlin Brandenburg International School", type: "international", annualFee: "€17,000–€24,000", currency: "EUR", programs: ["IB Diploma", "Primary Years Programme", "Middle Years Programme"], language: "English", notes: "Germany's most prestigious international school. IB curriculum. Grades K-12." },
      { name: "Munich International School", type: "international", annualFee: "€22,000–€26,000", currency: "EUR", programs: ["IB Diploma", "Primary Years"], language: "English", notes: "Set on beautiful campus in Starnberg near Munich. Strong sports facilities. Waiting list usually required." },
      { name: "Frankfurt International School", type: "international", annualFee: "€18,000–€23,000", currency: "EUR", programs: ["IB", "US High School Diploma", "German Abitur"], language: "English/German", notes: "Largest international school in Germany. Serves Frankfurt's massive expat banking community." },
      { name: "Hamburg International School", type: "international", annualFee: "€15,000–€20,000", currency: "EUR", programs: ["IB Diploma", "IGCSE"], language: "English", notes: "German public schools are free and excellent — many expat families use German public schools." },
    ],
    languageSchools: [
      { name: "Goethe-Institut (Multiple Cities)", type: "language", annualFee: "€700–€2,500", currency: "EUR", programs: ["German A1-C2", "TestDAF Preparation", "Culture courses"], language: "German", notes: "The gold standard for German language learning. Globally recognised. Intensive courses available." },
      { name: "DID Deutsch-Institut Frankfurt", type: "language", annualFee: "€350–€1,200", currency: "EUR", programs: ["German All Levels", "Business German", "Exam Prep"], language: "German", notes: "Popular with international professionals. Flexible schedule. All levels." },
    ],
    studentVisa: "EU/EEA students: no visa required. Non-EU students need a Student Visa (Visum zur Studienvorbereitung) or Student Residence Permit. Requirements: university admission letter, proof of funds (€11,208/year in blocked account), health insurance. Processing time: 4–12 weeks. After graduation: 18-month job-seeker extension available.",
    costOfStudying: [
      { item: "Tuition (public university)", cost: "€0–€500/semester" },
      { item: "Student accommodation", cost: "€300–€700/month" },
      { item: "Health insurance (mandatory)", cost: "€110/month (under 30)" },
      { item: "Monthly living expenses", cost: "€850–€1,200/month" },
      { item: "Books and materials", cost: "€50–€150/semester" },
      { item: "Total annual cost", cost: "€10,000–€18,000" },
    ],
    topCities: ["Munich", "Berlin", "Hamburg", "Frankfurt", "Heidelberg", "Cologne", "Stuttgart"],
    scholarships: [
      "DAAD Scholarship — Germany's main international scholarship, covers fees + living costs",
      "Deutschlandstipendium — €300/month merit-based, available at most universities",
      "Heinrich Böll Foundation — for politically engaged students",
      "Konrad-Adenauer-Stiftung — for conservative/Christian democratic values alignment",
      "Erasmus+ — for EU students on exchange programmes",
    ],
    faq: [
      { question: "Is university really free in Germany?", answer: "Yes — public universities charge only a semester contribution of €100–500, not tuition. This applies to international students too. Only Baden-Württemberg charges non-EU students a small fee (~€1,500/semester). Private universities charge full fees." },
      { question: "Can I work while studying in Germany?", answer: "Yes — student visa allows 120 full days or 240 half days per year. On-campus student jobs (Hiwi) are popular. Average student job pays €12–15/hour." },
      { question: "What German level do I need?", answer: "Most undergraduate programmes require B2/C1 German (TestDaF or DSH exam). Many postgraduate programmes, especially in engineering and computer science, are offered in English and require IELTS 6.5/TOEFL 90." },
      { question: "How do I get into a German university?", answer: "Apply through uni-assist (the central application portal) or directly to the university. Undergraduate requires Abitur equivalent; postgraduate requires bachelor's degree with minimum 2.5 GPA equivalent." },
    ],
  },

  portugal: {
    slug: "portugal",
    country: "Portugal",
    intro: "Portugal offers world-class education at a fraction of the cost of other Western European countries. With a growing international student community, English-taught programmes, and excellent quality of life, it's one of Europe's fastest-rising student destinations.",
    systemOverview: "Portuguese public universities are some of Europe's most affordable for international students — fees range from €950–€7,000/year depending on the programme. The University of Lisbon and University of Porto consistently rank in the global top 500. Portugal also has some of the best business schools in Europe.",
    universities: [
      { name: "University of Lisbon (ULisboa)", type: "university", ranking: "Top 300 Global (QS)", annualFee: "€697–€3,000", currency: "EUR", programs: ["Engineering", "Medicine", "Law", "Social Sciences", "Sciences"], language: "Portuguese/English", notes: "Portugal's largest and highest-ranked university. Strong Erasmus network. Campus spread across Lisbon." },
      { name: "University of Porto", type: "university", ranking: "Top 350 Global", annualFee: "€697–€2,500", currency: "EUR", programs: ["Engineering", "Architecture", "Business", "Sciences", "Medicine"], language: "Portuguese/English", notes: "Portugal's second university. Consistently Portugal's top STEM institution. Porto has lower cost of living than Lisbon." },
      { name: "Nova University Lisbon", type: "university", ranking: "Top 400 Global", annualFee: "€697–€3,500", currency: "EUR", programs: ["Business", "Law", "Social Sciences", "Economics", "Medicine"], language: "Portuguese/English", notes: "Nova SBE (business school) ranks in Europe's top 20 for MBA. Nova Law has EU reputation." },
      { name: "NOVA School of Business and Economics", type: "university", ranking: "Top 20 European Business Schools", annualFee: "€14,500–€28,000", currency: "EUR", programs: ["Master in Management", "MBA", "Finance", "Economics"], language: "English", notes: "Portugal's most internationally recognised business school. Located in Carcavelos on the coast. Strong network." },
      { name: "Instituto Superior Técnico (IST)", type: "university", ranking: "Top 250 Engineering Global", annualFee: "€697–€3,000", currency: "EUR", programs: ["Engineering", "Computer Science", "Physics", "Mathematics"], language: "Portuguese/English", notes: "Portugal's best engineering school. Strong links to tech startups in Lisbon's tech ecosystem." },
      { name: "Católica Lisbon School of Business", type: "university", ranking: "Triple-Accredited (AACSB, EQUIS, AMBA)", annualFee: "€18,000–€32,000", currency: "EUR", programs: ["MBA", "Master in Management", "Finance"], language: "English", notes: "Most prestigious private business school in Portugal. Strong consulting and finance placements." },
    ],
    internationalSchools: [
      { name: "Carlucci American International School", type: "international", annualFee: "€14,000–€20,000", currency: "EUR", programs: ["US Curriculum", "IB Diploma", "AP Courses"], language: "English", notes: "Lisbon's premier American school. Near Sintra. Grades Pre-K to 12. Strong US university placement." },
      { name: "St. Julian's School", type: "international", annualFee: "€10,000–€16,000", currency: "EUR", programs: ["British Curriculum", "IGCSE", "A-Levels"], language: "English", notes: "Founded 1932. Most established British school in Portugal. Located in Carcavelos." },
      { name: "International School of Porto", type: "international", annualFee: "€8,500–€13,000", currency: "EUR", programs: ["IB Diploma", "Primary Years Programme"], language: "English", notes: "Porto's main international school. More affordable than Lisbon equivalents. Growing expat community." },
      { name: "Oeiras International School", type: "international", annualFee: "€9,000–€14,000", currency: "EUR", programs: ["IB", "Portuguese National Curriculum"], language: "English/Portuguese", notes: "One of the most affordable international schools near Lisbon. Good for bilingual education." },
    ],
    languageSchools: [
      { name: "CIAL Centro de Línguas Lisbon", type: "language", annualFee: "€400–€2,000", currency: "EUR", programs: ["Portuguese A1-C2", "CAPLE Exam Prep", "Culture"], language: "Portuguese", notes: "Portugal's most established language school. Recognised by University of Lisbon." },
      { name: "LinguaPortugal Porto", type: "language", annualFee: "€350–€1,500", currency: "EUR", programs: ["Portuguese A1-C2", "Business Portuguese", "DELE"], language: "Portuguese", notes: "Porto's best language school. Smaller classes, personal attention. Highly rated." },
    ],
    studentVisa: "EU/EEA: no visa required. Non-EU students need a Student Visa (D4). Requirements: admission letter, proof of accommodation, €760/month financial proof, health insurance. Processing time: 2–6 weeks. After study: 1-year job-seeker extension available. Path to permanent residency after 5 years.",
    costOfStudying: [
      { item: "Tuition (public university)", cost: "€697–€3,000/year" },
      { item: "Student accommodation (Lisbon)", cost: "€400–€700/month" },
      { item: "Student accommodation (Porto)", cost: "€300–€550/month" },
      { item: "Monthly living expenses", cost: "€700–€1,100/month" },
      { item: "Health insurance", cost: "€30–€80/month" },
      { item: "Total annual cost (Lisbon)", cost: "€10,000–€18,000" },
    ],
    topCities: ["Lisbon", "Porto", "Coimbra", "Braga", "Aveiro", "Faro"],
    scholarships: [
      "Aga Khan Foundation International Scholarship — for exceptional students from developing countries",
      "Camões Institute Scholarship — Portuguese government grants for Portuguese studies",
      "FCT Scholarships — for PhD and research programmes at Portuguese universities",
      "Erasmus+ — for EU students and exchange programmes",
      "CGD Education Scholarship — Caixa Geral de Depósitos bank scholarships",
    ],
    faq: [
      { question: "How affordable is studying in Portugal?", answer: "Very affordable. Public university fees are €697–€3,000/year. Living costs in Porto are €700–€900/month. Total annual cost including fees can be €10,000–€14,000 — about 3–5x cheaper than the UK." },
      { question: "Are there English-taught programmes?", answer: "Yes — many Portuguese universities offer Master's programmes in English, especially in business, engineering, and social sciences. Nova SBE, Católica, and IST all have strong English programmes." },
      { question: "Can I work while studying in Portugal?", answer: "Yes — students can work up to 20 hours/week during term and full-time during holidays. Minimum wage is €870/month (2025), but student jobs typically pay more in Lisbon." },
      { question: "Can studying in Portugal lead to residency?", answer: "Yes — study contributes toward the 5-year residency requirement for permanent residence. Portugal is one of the best countries in Europe for study-to-residency pathways." },
    ],
  },

  thailand: {
    slug: "thailand",
    country: "Thailand",
    intro: "Thailand is Southeast Asia's most popular destination for international students — combining affordable world-class education, warm culture, and an unbeatable quality of life. Bangkok has several excellent English-taught universities and a thriving international school market.",
    systemOverview: "Thai public universities are highly affordable for international students — fees range from $3,000–$8,000/year for undergraduate. Several private universities offer international programmes fully in English. Chulalongkorn and Mahidol are regionally respected. The international school market is well-developed, particularly in Bangkok.",
    universities: [
      { name: "Chulalongkorn University", type: "university", ranking: "#215 Global (QS)", annualFee: "$3,000–$7,000", currency: "USD", programs: ["Engineering", "Business", "Medicine", "Arts & Sciences", "Architecture"], language: "Thai/English", notes: "Thailand's most prestigious university. Founded 1917. Strong medical school. Bangkok central location." },
      { name: "Mahidol University", type: "university", ranking: "#250 Global", annualFee: "$4,000–$8,000", currency: "USD", programs: ["Medicine", "Pharmacy", "Public Health", "Dentistry", "Sciences"], language: "Thai/English", notes: "Thailand's top medical and health sciences university. Internationally recognised health programmes." },
      { name: "Asian Institute of Technology (AIT)", type: "university", ranking: "Top ASEAN", annualFee: "$8,000–$12,000", currency: "USD", programs: ["Engineering", "Environment", "Management", "ICT"], language: "English", notes: "International postgraduate institution. All programmes in English. Strong Asian development focus." },
      { name: "Thammasat University", type: "university", ranking: "Top 10 Thailand", annualFee: "$3,000–$6,000", currency: "USD", programs: ["Law", "Political Science", "Business", "Social Sciences"], language: "Thai/English", notes: "Thailand's second-most prestigious university. Strong in law and political science. Bangkok riverside campus." },
      { name: "Assumption University (ABAC)", type: "university", ranking: "Top Private Thailand", annualFee: "$5,000–$9,000", currency: "USD", programs: ["Business", "Engineering", "Communication Arts", "Law"], language: "English", notes: "Thailand's leading private Catholic university. Majority English instruction. International student-friendly." },
    ],
    internationalSchools: [
      { name: "Bangkok Patana School", type: "international", annualFee: "฿560,000–฿750,000 ($15,000–$20,500)", currency: "THB", programs: ["British Curriculum", "IGCSE", "A-Levels", "IB Diploma"], language: "English", notes: "Bangkok's most prestigious British school. Founded 1957. Outstanding facilities. Heavy waiting list." },
      { name: "International School Bangkok (ISB)", type: "international", annualFee: "฿600,000–฿800,000 ($16,500–$22,000)", currency: "THB", programs: ["US Curriculum", "IB Diploma", "AP Courses"], language: "English", notes: "Bangkok's top American school. Exceptional sports, arts, and academic programmes. Grades PreK-12." },
      { name: "NIST International School", type: "international", annualFee: "฿480,000–฿680,000 ($13,000–$18,500)", currency: "THB", programs: ["IB Primary Years", "Middle Years", "Diploma"], language: "English", notes: "Bangkok's premier IB-only school. Excellent IB results. UN/diplomat community popular." },
      { name: "Ruamrudee International School (RIS)", type: "international", annualFee: "฿370,000–฿520,000 ($10,000–$14,000)", currency: "THB", programs: ["US Curriculum", "AP", "SAT Prep"], language: "English", notes: "More affordable US-curriculum option in Bangkok. Strong US university placement record." },
      { name: "Shrewsbury International School", type: "international", annualFee: "฿500,000–฿680,000 ($13,500–$18,500)", currency: "THB", programs: ["British Curriculum", "IGCSE", "A-Levels"], language: "English", notes: "Sister school of Shrewsbury (UK). Riverside campus. Strong arts and sports programmes." },
      { name: "Chiang Mai International School (CMIS)", type: "international", annualFee: "฿250,000–฿380,000 ($7,000–$10,500)", currency: "THB", programs: ["US Curriculum", "ACSI Accredited"], language: "English", notes: "Chiang Mai's leading international school. Much more affordable than Bangkok equivalents. Christian values." },
    ],
    languageSchools: [
      { name: "AUA Language Center Bangkok", type: "language", annualFee: "฿8,000–฿25,000 ($220–$680)", currency: "THB", programs: ["Thai A1-C1", "English", "IELTS Prep"], language: "Thai/English", notes: "Thailand's most established language institute. 80+ years operating. Multiple Bangkok locations." },
      { name: "Walen Thai Language School", type: "language", annualFee: "฿10,000–฿30,000 ($275–$820)", currency: "THB", programs: ["Thai All Levels", "Reading & Writing", "Business Thai"], language: "Thai", notes: "Popular with expats learning Thai. Flexible scheduling. Non-immigrant visa support available." },
    ],
    studentVisa: "Non-immigrant ED (Education) Visa required for study stays over 90 days. Requirements: acceptance letter from accredited institution, valid passport, funds proof. Single-entry: ฿2,000 ($55); Multiple-entry: ฿5,000 ($135). Extendable in-country at immigration. Important: ED visa is also used by language school students and some use it as a long-stay mechanism.",
    costOfStudying: [
      { item: "University tuition (international)", cost: "$3,000–$9,000/year" },
      { item: "International school fees", cost: "$10,000–$22,000/year" },
      { item: "1BR student apartment (Bangkok)", cost: "$300–$600/month" },
      { item: "Monthly living expenses", cost: "$500–$900/month" },
      { item: "Health insurance", cost: "$80–$150/month" },
      { item: "Total annual cost", cost: "$12,000–$25,000" },
    ],
    topCities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hua Hin"],
    scholarships: [
      "Royal Thai Government Scholarship — for ASEAN students at Thai universities",
      "ASEAN University Network Scholarships — for intra-ASEAN study exchanges",
      "Mahidol University International Scholarship — merit-based for postgraduate",
      "AIT Scholarship Programme — for postgraduate engineering and management",
      "Thailand International Development Cooperation Agency (TICA) grants",
    ],
    faq: [
      { question: "Can I study entirely in English in Thailand?", answer: "Yes — many Thai universities have international programmes in English. AIT is 100% English. Assumption University, Thammasat International Programme, and Chula's English-medium programmes are all strong options." },
      { question: "How good are international schools in Bangkok?", answer: "Exceptional. Bangkok has some of Asia's best international schools. ISB, Bangkok Patana, and NIST compete with the best schools in Singapore and Hong Kong. Results and university placements are excellent." },
      { question: "Is the ED visa legal for language study?", answer: "Yes — the Non-Immigrant ED visa is legally for education including language schools. It requires legitimate enrollment at a Thai institution. Schools must be registered with the Ministry of Education." },
    ],
  },

  uae: {
    slug: "uae",
    country: "UAE",
    intro: "The UAE has transformed into one of the Middle East's premier education hubs, with over 70 international universities operating branches in Dubai and Abu Dhabi. Many global universities have established campuses, making it possible to earn a globally recognised degree while living in the UAE.",
    systemOverview: "The UAE has over 70 licensed universities and colleges, with Dubai's Knowledge Village and Abu Dhabi's education zone housing branches of major international universities. Fees are generally higher than public institutions in Europe but competitive with private universities in the West. No student loans system exists — cash payment expected.",
    universities: [
      { name: "New York University Abu Dhabi (NYUAD)", type: "university", ranking: "NYU Global (Top 50)", annualFee: "$57,000", currency: "USD", programs: ["Liberal Arts", "Engineering", "Sciences", "Social Sciences"], language: "English", notes: "60% of students on full scholarship. Elite admissions (acceptance rate ~15%). One of the most generous scholarship programs globally." },
      { name: "Heriot-Watt University Dubai", type: "university", ranking: "Top 350 Global (QS)", annualFee: "AED 55,000–75,000 ($15,000–$20,000)", currency: "AED", programs: ["Engineering", "Business", "Architecture", "Computer Science"], language: "English", notes: "Scottish university with full Dubai campus. Same degree as UK. Strong employer recognition in UAE market." },
      { name: "University of Birmingham Dubai", type: "university", ranking: "Top 100 UK (QS)", annualFee: "AED 75,000–95,000 ($20,000–$26,000)", currency: "AED", programs: ["Business", "Computer Science", "Electronic Engineering"], language: "English", notes: "Full Russell Group campus in Dubai. UK degree. Growing reputation in the UAE." },
      { name: "Middlesex University Dubai", type: "university", ranking: "Top UK University", annualFee: "AED 50,000–70,000 ($13,500–$19,000)", currency: "AED", programs: ["Business", "IT", "Arts & Design", "Psychology"], language: "English", notes: "Most established UK university in Dubai (since 2005). Largest international student body. Broad programme range." },
      { name: "American University in Dubai (AUD)", type: "university", ranking: "Top UAE Private", annualFee: "AED 60,000–80,000 ($16,500–$22,000)", currency: "AED", programs: ["Business", "Architecture", "Engineering", "Communications"], language: "English", notes: "US-accredited degree recognised across the Middle East. Strong alumni network in GCC region." },
    ],
    internationalSchools: [
      { name: "GEMS Wellington International School", type: "international", annualFee: "AED 50,000–90,000 ($13,500–$24,500)", currency: "AED", programs: ["British Curriculum", "IGCSE", "A-Levels", "IB"], language: "English", notes: "Dubai's most prestigious international school group. Multiple campuses. Waiting lists common." },
      { name: "Dubai American Academy", type: "international", annualFee: "AED 60,000–85,000 ($16,500–$23,000)", currency: "AED", programs: ["US Curriculum", "IB Diploma", "AP Courses"], language: "English", notes: "Premium American school. College counselling renowned. Strong US university placement." },
      { name: "Repton School Dubai", type: "international", annualFee: "AED 65,000–95,000 ($17,500–$26,000)", currency: "AED", programs: ["British Curriculum", "GCSE", "A-Levels"], language: "English", notes: "Extension of Repton UK (founded 1557). Boarding available. Elite academic and sports reputation." },
      { name: "Nord Anglia International School Dubai", type: "international", annualFee: "AED 48,000–75,000 ($13,000–$20,500)", currency: "AED", programs: ["IB PYP", "MYP", "Diploma"], language: "English", notes: "Premium IB school. Collaboration programmes with Juilliard and MIT." },
      { name: "GEMS World Academy Abu Dhabi", type: "international", annualFee: "AED 55,000–85,000 ($15,000–$23,000)", currency: "AED", programs: ["IB Programme (all levels)"], language: "English", notes: "Abu Dhabi's leading IB school. High IB scores. Strong arts and sports programmes." },
    ],
    languageSchools: [
      { name: "Berlitz UAE (Multiple Locations)", type: "language", annualFee: "AED 3,000–12,000 ($820–$3,300)", currency: "AED", programs: ["Arabic", "English", "Business Language", "50+ languages"], language: "Multiple", notes: "Global leader in language training. Corporate packages popular with multinational employees." },
      { name: "The Language Centre (CERT)", type: "language", annualFee: "AED 2,000–8,000 ($545–$2,200)", currency: "AED", programs: ["Arabic", "English", "IELTS/TOEFL Prep"], language: "Arabic/English", notes: "Government-linked language centre. Recognised Arabic language certificates for residency purposes." },
    ],
    studentVisa: "Students enrolled at UAE universities get a Student Residence Visa sponsored by the institution (no separate application needed). Valid for study duration. Can be converted to work visa after graduation. No income requirement. Health insurance provided by university. Post-graduation: can stay on tourist visa while job hunting.",
    costOfStudying: [
      { item: "University fees", cost: "AED 50,000–95,000 ($13,500–$26,000)/year" },
      { item: "International school fees", cost: "AED 45,000–95,000/year" },
      { item: "Studio/1BR apartment", cost: "AED 3,500–7,000 ($950–$1,900)/month" },
      { item: "Monthly living expenses", cost: "AED 2,500–5,000 ($680–$1,360)/month" },
      { item: "Health insurance", cost: "Included with student visa" },
      { item: "Total annual cost", cost: "$25,000–$50,000" },
    ],
    topCities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    scholarships: [
      "NYUAD Scholarship — one of the world's most generous (full tuition + accommodation + flights)",
      "UAE University Merit Scholarships — for top local and international students",
      "Khalifa University Scholarships — for engineering and science postgraduates",
      "Mohammed bin Rashid Global Initiatives — various education grants",
      "University-specific merit awards — check each institution directly",
    ],
    faq: [
      { question: "Are degrees from UAE campuses of UK/US universities recognised?", answer: "Yes — degrees from licensed UAE campuses of UK and US universities are the same degrees as the home institution (same accreditation, same diploma). Heriot-Watt Dubai gives a Heriot-Watt degree. NYU Abu Dhabi gives an NYU degree." },
      { question: "Can my children attend international school in the UAE?", answer: "Yes — and it's one of the best international school markets in the world. Dubai alone has 200+ international schools. GEMS, ADEC, and independent schools all operate. Fees are high but quality is excellent." },
      { question: "What is the KHDA and why does it matter?", answer: "The Knowledge and Human Development Authority (KHDA) rates Dubai schools from Outstanding to Acceptable. Always check the KHDA rating before enrolling your child — it's the most reliable quality indicator." },
    ],
  },

  canada: {
    slug: "canada",
    country: "Canada",
    intro: "Canada is one of the world's top study destinations, attracting over 800,000 international students annually. With globally ranked universities, post-graduation work permits, and a clear pathway to permanent residency through the Canadian Experience Class, Canada offers one of the most accessible and rewarding study-to-immigration routes. The quality of education, multicultural campuses, and bilingual opportunities in French and English make it exceptional.",
    systemOverview: "Canada's higher education is provincially regulated. Universities range from the internationally top-ranked (University of Toronto, McGill, UBC) to excellent regional institutions. Community colleges (Colleges of Applied Arts and Technology) offer practical two-year diplomas with strong job placement. The PGWP (Post-Graduation Work Permit) allows graduates to work in Canada for up to 3 years after completing a 2-year program — a major immigration pathway. English and French are both official languages; many universities in Quebec teach primarily in French.",
    universities: [
      { name: "University of Toronto", type: "university", ranking: "Top 25 globally (QS 2025)", annualFee: "CAD 30,000–58,000", currency: "CAD", programs: ["Engineering", "Medicine", "Business", "Law", "Arts & Science"], language: "English", notes: "Canada's most research-intensive university. Three campuses in Toronto, Mississauga, and Scarborough. One of North America's leading institutions for STEM and humanities." },
      { name: "University of British Columbia", type: "university", ranking: "Top 40 globally (QS 2025)", annualFee: "CAD 28,000–55,000", currency: "CAD", programs: ["Computer Science", "Environmental Science", "Business", "Medicine", "Forestry"], language: "English", notes: "Stunning Vancouver campus. Exceptional for environmental studies, computer science and business. Strong research output and Silicon Valley connections." },
      { name: "McGill University", type: "university", ranking: "Top 30 globally (QS 2025)", annualFee: "CAD 22,000–45,000", currency: "CAD", programs: ["Medicine", "Law", "Music", "Engineering", "Life Sciences"], language: "English (bilingual city)", notes: "Canada's most internationally recognized university. Located in Montreal — a bilingual, affordable, culturally vibrant city. Outstanding medicine and law faculties." },
      { name: "University of Waterloo", type: "university", ranking: "Top 150 globally", annualFee: "CAD 26,000–48,000", currency: "CAD", programs: ["Computer Science", "Engineering", "Mathematics", "Quantum Computing"], language: "English", notes: "Canada's leading tech university. Co-op programs guarantee real-world experience. Graduates heavily recruited by Google, Microsoft, Amazon. Silicon Valley feeder school." },
    ],
    internationalSchools: [
      { name: "Ridley College", type: "international", annualFee: "CAD 70,000–80,000", currency: "CAD", programs: ["IB Diploma", "Canadian High School Diploma"], language: "English", notes: "Top Canadian boarding school in St. Catharines, Ontario. IB and Canadian curriculum. Excellent for university preparation." },
      { name: "Branksome Hall", type: "international", annualFee: "CAD 40,000–55,000", currency: "CAD", programs: ["IB Primary", "IB MYP", "IB Diploma"], language: "English", notes: "IB World School in Toronto for girls. Consistently strong university placement." },
    ],
    languageSchools: [
      { name: "ILAC (International Language Academy of Canada)", type: "language", annualFee: "CAD 12,000–20,000", currency: "CAD", programs: ["ESL", "Business English", "Academic Preparation"], language: "English", notes: "One of Canada's largest and most respected English language schools with campuses in Toronto and Vancouver." },
    ],
    studentVisa: "International students need a Canadian Study Permit (student visa) for programs over 6 months. Requirements: acceptance letter from a Designated Learning Institution (DLI), proof of financial support (CAD 10,000+/year plus tuition), clean criminal record, and health exam if from certain countries. Processing times: 8-12 weeks. The PGWP (Post-Graduation Work Permit) allows work in Canada for up to 3 years after graduation from a 2+ year program — one of the world's best study-to-work pathways.",
    costOfStudying: [
      { item: "University tuition (international)", cost: "CAD 22,000–58,000/year" },
      { item: "Shared accommodation (off-campus)", cost: "CAD 8,000–18,000/year" },
      { item: "Living expenses (food, transport, personal)", cost: "CAD 10,000–15,000/year" },
      { item: "Health insurance (provincial coverage varies)", cost: "CAD 600–1,200/year" },
      { item: "Total annual cost estimate", cost: "CAD 40,000–90,000" },
    ],
    topCities: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Waterloo"],
    scholarships: [
      "Vanier Canada Graduate Scholarships — CAD 50,000/year for doctoral students",
      "Trudeau Foundation Scholarships — for doctoral humanities/social science students",
      "University-specific entrance scholarships (automatic for high academic achievement)",
      "Canadian Commonwealth Scholarship Programme — for developing country nationals",
      "Provincial government scholarships — each province has its own funding programmes",
    ],
    faq: [
      { question: "Can I work while studying in Canada?", answer: "Yes — study permit holders can work up to 20 hours/week during academic sessions and full-time during scheduled breaks (summer, winter). Campus jobs are also available without restrictions. As of 2024, some restrictions were temporarily lifted during labour shortages. Working is an excellent way to fund living costs and gain Canadian experience for the PGWP pathway." },
      { question: "What is the Post-Graduation Work Permit (PGWP)?", answer: "The PGWP allows international graduates of eligible Canadian institutions to work anywhere in Canada for up to 3 years (matching the length of their program). It's one of the world's best immigration pathways — PGWP holders can apply for Permanent Residency through the Canadian Experience Class (CEC) after just 1 year of skilled work experience in Canada." },
    ],
  },

  australia: {
    slug: "australia",
    country: "Australia",
    intro: "Australia is consistently among the world's top three study destinations. With 7 universities in the global top 100 (the Group of Eight), a vibrant multicultural campus culture, post-study work rights of 2-4 years, and an excellent quality of life, Australia attracts students from across Asia, Europe and the Americas. Cities like Melbourne and Sydney offer world-class urban experiences alongside outstanding academic institutions.",
    systemOverview: "Australia has 43 universities, eight of which are the elite 'Group of Eight' research universities (including University of Melbourne, ANU, UNSW, Sydney, Queensland, Monash, Adelaide, UWA). The Tertiary Education Quality and Standards Agency (TEQSA) regulates higher education. Australia's vocational education system (TAFE — Technical and Further Education) is world-respected for practical trade and professional qualifications. English is the sole language of instruction at all universities.",
    universities: [
      { name: "University of Melbourne", type: "university", ranking: "Top 35 globally (QS 2025)", annualFee: "AUD 35,000–55,000", currency: "AUD", programs: ["Medicine", "Law", "Engineering", "Business", "Arts"], language: "English", notes: "Australia's top-ranked university by most metrics. Melbourne Model curriculum encourages broad undergraduate study before specialist graduate degrees. Exceptional research output." },
      { name: "Australian National University (ANU)", type: "university", ranking: "Top 30 globally (QS 2025)", annualFee: "AUD 30,000–50,000", currency: "AUD", programs: ["Politics", "Law", "Environment", "Asia-Pacific Studies", "Science"], language: "English", notes: "Located in Canberra, Australia's capital. World's leading institution for Asia-Pacific studies, political science and law. Research-focused with small class sizes." },
      { name: "University of Sydney", type: "university", ranking: "Top 20 globally (QS 2025)", annualFee: "AUD 38,000–58,000", currency: "AUD", programs: ["Medicine", "Engineering", "Business", "Arts", "Law"], language: "English", notes: "Australia's oldest university, stunning sandstone campus in the heart of Sydney. Outstanding medicine, law and engineering. Strong international student community." },
      { name: "Monash University", type: "university", ranking: "Top 50 globally", annualFee: "AUD 32,000–50,000", currency: "AUD", programs: ["Pharmacy", "Engineering", "Business", "Education", "IT"], language: "English", notes: "Australia's largest university. Main campus in Melbourne's southeast. Exceptionally strong pharmacy, engineering and business programs. Multiple campuses including Malaysia." },
    ],
    internationalSchools: [
      { name: "Haileybury College", type: "international", annualFee: "AUD 28,000–35,000", currency: "AUD", programs: ["IB Diploma", "VCE", "Cambridge A-levels"], language: "English", notes: "One of Australia's largest and most internationally diverse schools. Melbourne campus and campuses in China and Qatar." },
      { name: "Shore School (Sydney)", type: "international", annualFee: "AUD 25,000–32,000", currency: "AUD", programs: ["NSW HSC", "IB Diploma"], language: "English", notes: "Leading Sydney Anglican boys' school. Consistently strong academic and sporting results." },
    ],
    languageSchools: [
      { name: "ELICOS (English Language Intensive Courses for Overseas Students)", type: "language", annualFee: "AUD 8,000–15,000", currency: "AUD", programs: ["General English", "IELTS Preparation", "Academic English"], language: "English", notes: "Australia's regulated English language sector with hundreds of accredited providers in every major city." },
    ],
    studentVisa: "International students require a Student Visa (subclass 500). Requirements: Confirmation of Enrolment (CoE) from registered provider, evidence of financial capacity (AUD 21,041/year plus tuition for 2024), English proficiency (IELTS 5.5-6.5+ depending on institution), genuine temporary entrant declaration. Processing time: 4-6 weeks. Post-Study Work Visas: 2 years for bachelor's graduates, 3 years for master's, 4 years for PhD. These were extended for certain graduates in regional areas.",
    costOfStudying: [
      { item: "University tuition (international)", cost: "AUD 30,000–55,000/year" },
      { item: "Shared accommodation", cost: "AUD 10,000–20,000/year" },
      { item: "Living expenses (food, transport, personal)", cost: "AUD 12,000–18,000/year" },
      { item: "Health insurance (OSHC — mandatory)", cost: "AUD 550–750/year" },
      { item: "Total annual cost estimate", cost: "AUD 52,000–93,000" },
    ],
    topCities: ["Melbourne", "Sydney", "Brisbane", "Perth", "Adelaide", "Canberra"],
    scholarships: [
      "Australia Awards — fully funded scholarships for developing country nationals",
      "Endeavour Postgraduate Scholarship — AUD 272,500 for postgraduate research",
      "Research Training Programme (RTP) — domestic and international PhD/Masters by research",
      "University-specific merit scholarships (25-100% tuition reduction for top students)",
      "State government scholarships — e.g. Victoria India Doctoral Scholarship",
    ],
    faq: [
      { question: "Can I bring my family to Australia on a student visa?", answer: "Yes — student visa holders enrolled in a masters or doctoral program can bring their spouse and dependent children. Spouses may be granted full work rights. Children can attend Australian schools. For bachelor's or below, dependent visa holders have restricted work rights. Financial requirements increase when sponsoring dependants." },
      { question: "What are the post-study work opportunities in Australia?", answer: "Graduates from Australian universities receive a Temporary Graduate visa (subclass 485) allowing work for 2 years (bachelor's), 3 years (master's), or 4 years (PhD). Regional graduates get additional time. This can lead to skilled migration visas (subclass 189, 190, 491). Australia's points-based skilled migration system rewards Australian qualifications highly." },
    ],
  },

  netherlands: {
    slug: "netherlands",
    country: "Netherlands",
    intro: "The Netherlands has quietly become one of Europe's most popular study destinations — particularly for English-taught programs. With over 2,100 English-language degree programs (more than any other non-English-speaking country), internationally acclaimed research universities, and a progressive, innovative culture, it attracts students from 160+ countries. Tuition fees are moderate by Anglophone standards and living costs in Dutch cities are manageable.",
    systemOverview: "Dutch higher education has two main tracks: Research Universities (Universiteiten) offering bachelor's through doctorates, and Universities of Applied Sciences (Hogescholen) offering practical bachelor's and master's programs. The system is internationally oriented — Dutch graduates are highly sought by European multinationals. Delft, Wageningen, Eindhoven and Amsterdam are globally respected in engineering, agriculture and technology. The Dutch grading scale runs 1-10 (6 = pass, 8+ = excellent).",
    universities: [
      { name: "Delft University of Technology (TU Delft)", type: "university", ranking: "Top 50 globally for Engineering", annualFee: "€11,000–18,000", currency: "EUR", programs: ["Aerospace Engineering", "Architecture", "Civil Engineering", "Computer Science", "Industrial Design"], language: "English/Dutch", notes: "Europe's top technical university. ASML, Shell, Airbus all recruit heavily. Excellent aerospace and industrial design programs. 40% international students." },
      { name: "University of Amsterdam (UvA)", type: "university", ranking: "Top 65 globally (QS 2025)", annualFee: "€9,000–16,000", currency: "EUR", programs: ["Business", "Economics", "Psychology", "Law", "Social Sciences"], language: "English/Dutch", notes: "Research-intensive university in the heart of Amsterdam. Strong social sciences, economics and business. Excellent international student experience in one of Europe's most liveable cities." },
      { name: "Wageningen University & Research", type: "university", ranking: "World's #1 for Agriculture & Forestry", annualFee: "€10,000–15,000", currency: "EUR", programs: ["Food Technology", "Environmental Sciences", "Biotechnology", "Agriculture", "Sustainability"], language: "English", notes: "Globally ranked #1 for food and agriculture sciences. Leading institution for sustainability research. Strong industry connections with Unilever, Nestlé, DSM." },
      { name: "Eindhoven University of Technology (TU/e)", type: "university", ranking: "Top 150 globally for Engineering", annualFee: "€9,000–14,000", currency: "EUR", programs: ["Electrical Engineering", "Mechanical Engineering", "Data Science", "Industrial Engineering"], language: "English", notes: "Located in Eindhoven, Europe's technology hotspot (ASML, NXP, DAF). Extremely strong industry links. High employment rates for graduates in tech sector." },
    ],
    internationalSchools: [
      { name: "International School of Amsterdam (ISA)", type: "international", annualFee: "€25,000–35,000", currency: "EUR", programs: ["IB Primary", "IB MYP", "IB Diploma"], language: "English", notes: "Amsterdam's leading international school. IB curriculum, excellent university placement. Large American and British expat families." },
      { name: "The British School in the Netherlands", type: "international", annualFee: "€20,000–30,000", currency: "EUR", programs: ["EYFS", "National Curriculum England", "GCSE", "A-levels"], language: "English", notes: "Multiple campuses around The Hague. British curriculum from nursery to A-levels." },
    ],
    languageSchools: [
      { name: "Regina Coeli Language Institute", type: "language", annualFee: "€2,000–8,000", currency: "EUR", programs: ["Dutch Language", "Business Dutch", "Integration Course"], language: "Dutch", notes: "One of the Netherlands' most respected Dutch language schools for expats and internationals." },
    ],
    studentVisa: "EU/EEA students need no visa. Non-EU students require a Residence Permit (MVV + residence permit). Dutch universities handle most of the visa process — once accepted, the institution applies for the entry visa (MVV) on the student's behalf. Requirements: acceptance letter, proof of financial means (€909/month for living expenses), health insurance, clean background. Healthcare insurance (Zorgverzekering) is mandatory and costs €100-150/month. No formal language requirement if program is English-taught.",
    costOfStudying: [
      { item: "University tuition (non-EU/EEA)", cost: "€9,000–18,000/year" },
      { item: "Student room/shared housing", cost: "€500–900/month" },
      { item: "Living expenses (food, transport, personal)", cost: "€600–900/month" },
      { item: "Health insurance (Zorgverzekering)", cost: "€100–150/month" },
      { item: "Total annual cost estimate", cost: "€22,000–35,000" },
    ],
    topCities: ["Amsterdam", "Delft", "Eindhoven", "Utrecht", "Leiden", "Groningen"],
    scholarships: [
      "Holland Scholarship — €5,000 one-time grant for non-EEA bachelor's and master's students",
      "Erasmus+ — EU mobility scholarships for EU students studying in the Netherlands",
      "Orange Tulip Scholarship — for students from specific Asian and Latin American countries",
      "TU Delft Excellence Scholarship — €25,000 for exceptional master's students",
      "Wageningen Excellence Scholarship — full tuition waiver for top MSc students",
    ],
    faq: [
      { question: "Are Dutch universities taught in English?", answer: "Yes — the Netherlands has over 2,100 English-taught bachelor's and master's programs, more than any non-English-speaking country in the world. Most research universities offer their master's programs entirely in English. Bachelor's programs are increasingly offered in English, especially in economics, engineering and business. Dutch language courses are available but not required for most international programs." },
      { question: "Can I stay in the Netherlands after graduating?", answer: "Yes — the Orientation Year Permit (Zoekjaar) allows graduates from Dutch universities (and from highly ranked institutions abroad) to stay in the Netherlands for 1 year to seek employment. If you find a job meeting the highly skilled migrant salary threshold (€3,909+/month in 2024), you can convert to a Highly Skilled Migrant permit and work towards permanent residency after 5 years." },
    ],
  },

  spain: {
    slug: "spain",
    country: "Spain",
    intro: "Spain has reinvented itself as a top study destination for international students — particularly from Latin America and the US. With some of Europe's oldest universities, a warm climate, vibrant social culture, and Castilian Spanish as one of the world's most useful languages to acquire, Spain offers a compelling educational and lifestyle package. Tuition fees are among the lowest in Western Europe, especially at public universities.",
    systemOverview: "Spain's higher education is divided between public universities (universidades públicas), which are affordable and academically solid, and private universities with higher fees but often stronger career services. The University of Barcelona, Complutense Madrid, and Autonoma Barcelona are among the most internationally recognised. Spain hosts a massive Erasmus exchange programme — one of Europe's largest. The Bologna Process aligns Spanish degrees with the European Higher Education Area (EHEA). Programs in Spanish and increasingly in English (especially at business schools like IESE, IE, ESADE).",
    universities: [
      { name: "Universidad de Barcelona (UB)", type: "university", ranking: "Top 150 globally (QS 2025)", annualFee: "€1,500–3,500 (EU) / €6,000–12,000 (non-EU)", currency: "EUR", programs: ["Medicine", "Law", "Psychology", "Business", "Arts"], language: "Spanish/Catalan", notes: "Spain's highest-ranked public university. Located in one of Europe's most vibrant cities. Excellent medicine and humanities faculties. Very affordable for EU students." },
      { name: "IE Business School", type: "university", ranking: "Top 5 European MBA (FT Rankings)", annualFee: "€68,000 (MBA, full program)", currency: "EUR", programs: ["MBA", "Finance", "Technology Management", "Entrepreneurship"], language: "English", notes: "One of Europe's best business schools. Global faculty and student body. Strong Madrid location and excellent alumni network in finance and tech." },
      { name: "ESADE Business School", type: "university", ranking: "Top 10 European MBA", annualFee: "€65,000 (MBA, full program)", currency: "EUR", programs: ["MBA", "Law", "Executive Education", "Data Analytics"], language: "English/Spanish", notes: "Barcelona-based Jesuit business school with outstanding rankings. IE, IESE and ESADE form the 'Golden Triangle' of Spanish business education." },
      { name: "Universidad Autónoma de Madrid (UAM)", type: "university", ranking: "Top 200 globally", annualFee: "€1,500–3,000 (EU) / €5,000–10,000 (non-EU)", currency: "EUR", programs: ["Sciences", "Economics", "Law", "Medicine", "Philosophy"], language: "Spanish", notes: "Strong research university on Madrid's outskirts. Excellent science and economics faculties. Very affordable for EU students." },
    ],
    internationalSchools: [
      { name: "American School of Madrid", type: "international", annualFee: "€18,000–25,000", currency: "EUR", programs: ["US Curriculum", "AP Programs", "College Prep"], language: "English", notes: "Accredited by Middle States Association. Strong US university placement. Located in Pozuelo, Madrid's wealthy suburb." },
      { name: "British Council School Madrid", type: "international", annualFee: "€15,000–22,000", currency: "EUR", programs: ["GCSE", "A-levels", "Spanish Curriculum"], language: "English/Spanish", notes: "Bilingual British education in Madrid. Strong A-level results and UK university placement." },
    ],
    languageSchools: [
      { name: "Instituto Cervantes", type: "language", annualFee: "€1,500–4,000", currency: "EUR", programs: ["Spanish A1-C2", "DELE Exam Preparation", "Business Spanish"], language: "Spanish", notes: "Spain's official government Spanish language institution with centres worldwide. DELE certification is internationally recognised." },
    ],
    studentVisa: "EU/EEA students need no visa. Non-EU students need a long-stay student visa (Type D). Requirements: university acceptance, proof of financial means (€6,000/year), health insurance, clean criminal record and apostilled documents. Processing time: 1-3 months at Spanish consulate in home country. University language schools can issue student visas for intensive Spanish courses. Students staying over 6 months must obtain a foreigner's identity card (TIE) from local police after arrival.",
    costOfStudying: [
      { item: "Public university tuition (non-EU)", cost: "€5,000–12,000/year" },
      { item: "Private/business school tuition", cost: "€15,000–70,000/year" },
      { item: "Shared room / student residence", cost: "€400–900/month" },
      { item: "Living expenses (food, transport, leisure)", cost: "€600–1,000/month" },
      { item: "Total annual cost estimate (public university)", cost: "€16,000–25,000" },
    ],
    topCities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao", "Granada"],
    scholarships: [
      "Erasmus+ — largest scholarship for EU students studying in Spain from partner institutions",
      "MAEC-AECID Scholarships — Spanish government grants for postgraduate foreign students",
      "Banco Santander Scholarships — private sector university partnerships across Spain",
      "Carolina Foundation — postgraduate scholarships for Ibero-American students",
      "University merit scholarships — most Spanish universities offer partial fee waivers",
    ],
    faq: [
      { question: "Do I need to speak Spanish to study in Spain?", answer: "For most public university programs, yes — Spanish (or Catalan/Basque at regional universities) is the language of instruction. However, business schools like IE, IESE and ESADE offer English-taught programs. Some universities offer individual English-taught master's. Learning Spanish dramatically enriches the experience and is one of the main reasons students choose Spain — it's the world's second-most-spoken native language." },
      { question: "How much does it cost to study at a Spanish public university?", answer: "Public university fees in Spain are regulated and among the lowest in Western Europe for EU students: €1,500–3,500/year depending on region and subject. Non-EU international students pay more: €5,000–12,000/year. Living costs in Spanish cities (except Barcelona) are very manageable — €700-1,000/month covers comfortable student living. Total annual budget for non-EU students: €16,000-22,000." },
    ],
  },

  japan: {
    slug: "japan",
    country: "Japan",
    intro: "Japan offers a uniquely compelling study environment: world-class universities, a culture that values education and discipline, cutting-edge research facilities, and an immersive cultural experience unlike anywhere else. The Japanese government has invested heavily in internationalising its universities, with scholarships from MEXT (Ministry of Education) being among the world's most generous. For students interested in technology, design, anime, robotics, or Japanese language and culture, Japan is unparalleled.",
    systemOverview: "Japan has 786 universities, of which the seven former Imperial Universities (Tokyo, Kyoto, Osaka, Tohoku, Hokkaido, Nagoya, Kyushu) are the most prestigious. Tokyo Institute of Technology, Keio and Waseda are also top-ranked. Japanese universities typically run on an academic year from April to March (some offer October intake for international students). English-taught programs have expanded dramatically — Japan International Cooperation Agency lists 800+ English programs. A Japanese language foundation helps enormously for daily life, though top graduate programs are often fully English.",
    universities: [
      { name: "University of Tokyo (Todai)", type: "university", ranking: "Top 30 globally (QS 2025)", annualFee: "¥535,800 (~$3,500)", currency: "JPY", programs: ["Engineering", "Medicine", "Sciences", "Law", "Economics", "Humanities"], language: "Japanese (English-track programs available)", notes: "Japan's most prestigious and competitive university. Very low tuition thanks to Japanese government subsidy. PEAK program offers some English-taught undergraduate tracks. Research output ranks among Asia's best." },
      { name: "Kyoto University", type: "university", ranking: "Top 50 globally (QS 2025)", annualFee: "¥535,800 (~$3,500)", currency: "JPY", programs: ["Sciences", "Engineering", "Medicine", "Economics", "Agriculture"], language: "Japanese (some English programs)", notes: "Japan's second-most prestigious institution in the ancient capital of Japan. Exceptional for pure sciences, medicine and engineering. Academic freedom tradition is strong." },
      { name: "Waseda University", type: "university", ranking: "Top 200 globally", annualFee: "¥1,200,000–1,600,000 (~$8,000–$10,500)", currency: "JPY", programs: ["Business", "International Studies", "Engineering", "Social Sciences", "Humanities"], language: "Japanese and English", notes: "Japan's most internationally diverse private university. Multiple English-taught programs for international students. Strong business and political science faculties." },
      { name: "Tokyo Institute of Technology (Tokyo Tech)", type: "university", ranking: "Top 100 globally for Engineering", annualFee: "¥535,800 (~$3,500)", currency: "JPY", programs: ["Engineering", "Computing", "Life Science", "Social Sciences", "Innovation"], language: "Japanese (English graduate programs)", notes: "Japan's leading engineering and science university. Strong electronics, materials science and AI research. Excellent English graduate school options." },
    ],
    internationalSchools: [
      { name: "British School in Tokyo", type: "international", annualFee: "¥2,500,000–3,500,000 (~$16,500–$23,000)", currency: "JPY", programs: ["EYFS", "National Curriculum England", "GCSE", "A-levels"], language: "English", notes: "Long-established British curriculum school in Tokyo. Strong A-level results and UK university placement." },
      { name: "American School in Japan (ASIJ)", type: "international", annualFee: "¥3,200,000–4,500,000 (~$21,000–$30,000)", currency: "JPY", programs: ["American Curriculum", "AP Programs", "IB Diploma"], language: "English", notes: "Tokyo's top American curriculum school. Outstanding US university placement. Very long waitlist — apply well in advance." },
    ],
    languageSchools: [
      { name: "KAI Japanese Language School", type: "language", annualFee: "¥800,000–1,200,000 (~$5,200–$7,800)", currency: "JPY", programs: ["Intensive Japanese", "JLPT Preparation", "University Preparation"], language: "Japanese", notes: "One of Tokyo's most respected Japanese language schools for international students. Student visa eligible." },
    ],
    studentVisa: "Non-Japanese students need a College Student visa (留学ビザ). Process: get Certificate of Eligibility (CoE) from your institution — the school applies for this on your behalf with the Immigration Services Agency. Once issued, apply for the visa at a Japanese consulate abroad. Requirements: acceptance letter, financial proof (¥1.2 million/year living costs), health certificate. MEXT Scholarship recipients have visa fees covered. Academic year typically starts April; October entry growing for international students.",
    costOfStudying: [
      { item: "National university tuition", cost: "¥535,800/year (~$3,500)" },
      { item: "Private university tuition", cost: "¥800,000–1,600,000/year ($5,200–$10,500)" },
      { item: "Student dormitory / shared housing", cost: "¥40,000–90,000/month ($260–$590)" },
      { item: "Living expenses (food, transport, personal)", cost: "¥80,000–120,000/month ($520–$780)" },
      { item: "Total annual cost estimate (national university)", cost: "¥1,800,000–2,400,000 (~$12,000–$16,000)" },
    ],
    topCities: ["Tokyo", "Kyoto", "Osaka", "Fukuoka", "Sendai", "Nagoya"],
    scholarships: [
      "MEXT (Monbukagakusho) Scholarship — Japan's most prestigious: full tuition + monthly stipend ¥117,000–145,000",
      "JASSO Student Exchange Support Programme — ¥80,000/month stipend",
      "Rotary Foundation Scholarships — various grants for cultural study in Japan",
      "University of Tokyo Graduate School Fellowship — competitive internal scholarship",
      "JSPS Research Fellowship — for postdoctoral researchers in Japan",
    ],
    faq: [
      { question: "How important is Japanese language for studying in Japan?", answer: "It depends entirely on your program. English-taught graduate programs at Waseda, Kyoto, Tokyo and others require only English. However, daily life in Japan is significantly easier with Japanese — menus, signs, conversation outside campus. For undergraduate programs at national universities, Japanese B2-level is typically required. Japanese language schools offer 1-2 year preparation courses. Even basic phrases transform the experience." },
      { question: "What is the MEXT scholarship and how competitive is it?", answer: "The MEXT (Ministry of Education, Culture, Sports, Science and Technology) scholarship covers full tuition at Japanese national and approved private universities, plus a monthly living stipend of ¥117,000-145,000 (~$770-960). It's one of the world's most generous government scholarships. Competition is extremely fierce — apply through your Japanese embassy in your home country (government track) or directly through a Japanese university's international office (university recommendation track). STEM subjects are prioritised but humanities are included." },
    ],
  },

  singapore: {
    slug: "singapore",
    country: "Singapore",
    intro: "Singapore punches far above its weight in global education. NUS (National University of Singapore) and NTU (Nanyang Technological University) are consistently ranked among the world's top 15 universities — above many prestigious US and UK institutions. Singapore's education system is rigorous, English-medium, and produces graduates who are among the most employable in Asia. For international students, Singapore offers a gateway to Southeast Asia's booming economy with high living standards.",
    systemOverview: "Singapore has three publicly funded universities: NUS, NTU, and SMU (Singapore Management University). Singapore University of Technology and Design (SUTD, MIT-affiliated), Singapore University of Social Sciences (SUSS) and several private institutions also operate. All top universities teach in English. The education system is highly meritocratic and competitive — entrance standards are among the highest in the world. Polytechnics offer practical diplomas. Singapore's Institute of Technical Education (ITE) is world-class for vocational training.",
    universities: [
      { name: "National University of Singapore (NUS)", type: "university", ranking: "Top 10 globally (QS 2025)", annualFee: "SGD 37,600–63,000 ($28,000–$46,600) for international students", currency: "SGD", programs: ["Computing", "Engineering", "Medicine", "Law", "Business", "Design"], language: "English", notes: "Asia's top university by most rankings. Computing faculty globally top 10. Strong industry connections with tech multinationals in Singapore. Generous tuition fee grants available." },
      { name: "Nanyang Technological University (NTU)", type: "university", ranking: "Top 15 globally (QS 2025)", annualFee: "SGD 35,000–58,000 ($25,900–$42,900) for international students", currency: "SGD", programs: ["Engineering", "Sciences", "Business", "Education", "Communication"], language: "English", notes: "Beautiful campus. World #1 for materials science. Outstanding engineering, computer science and business. 20% international students from 100+ countries." },
      { name: "Singapore Management University (SMU)", type: "university", ranking: "Top 500 globally, top 5 in Asia for business", annualFee: "SGD 38,000–52,000 ($28,000–$38,500) for international students", currency: "SGD", programs: ["Business", "Law", "Accountancy", "Information Systems", "Social Sciences"], language: "English", notes: "Singapore's specialist business and law university. City campus in the financial district. Case study pedagogy and strong Wall Street/private equity connections." },
    ],
    internationalSchools: [
      { name: "United World College of South East Asia (UWCSEA)", type: "international", annualFee: "SGD 45,000–55,000 ($33,300–$40,700)", currency: "SGD", programs: ["IB Primary", "IB MYP", "IB Diploma"], language: "English", notes: "Singapore's most internationally diverse school. Two campuses. Exceptional IB results and holistic education. Strong scholarship programme." },
      { name: "Tanglin Trust School", type: "international", annualFee: "SGD 32,000–42,000 ($23,700–$31,100)", currency: "SGD", programs: ["British Early Years", "National Curriculum England", "GCSE", "A-levels/IB"], language: "English", notes: "Top British curriculum school in Singapore. Excellent A-level and IB results. Strong UK university placement including Oxbridge." },
    ],
    languageSchools: [
      { name: "Berlitz Singapore", type: "language", annualFee: "SGD 3,000–8,000 ($2,200–$5,900)", currency: "SGD", programs: ["Mandarin", "Malay", "Japanese", "English Business"], language: "Various", notes: "Premium language school for working professionals and expats. Private tuition and corporate programs available." },
    ],
    studentVisa: "International students from most countries need a Student's Pass issued by the Immigration and Checkpoints Authority (ICA). Private institutions use the Student's Pass Online Application and Registration (SOLAR) system. Requirements: acceptance letter from government-approved institution, financial capacity, health examination, and security bond for some nationalities. Processing time: 4-6 weeks. Government-funded universities (NUS, NTU, SMU) require students to sign a tuition grant agreement to work in Singapore for 3 years post-graduation as a condition of subsidised tuition.",
    costOfStudying: [
      { item: "International student tuition (NUS/NTU)", cost: "SGD 35,000–63,000/year" },
      { item: "On-campus or shared housing", cost: "SGD 500–1,400/month" },
      { item: "Living expenses (food, transport, personal)", cost: "SGD 800–1,500/month" },
      { item: "Health insurance", cost: "SGD 200–400/year (some included)" },
      { item: "Total annual cost estimate", cost: "SGD 50,000–85,000 (~$37,000–$63,000)" },
    ],
    topCities: ["Singapore (city-state)"],
    scholarships: [
      "ASEAN Scholarships — full tuition + living allowance for ASEAN nationals at Singapore schools and universities",
      "NUS Merit Scholarship — competitive full scholarship for top-performing international students",
      "NTU Research Scholarship — for research-based master's and PhD students (SGD 2,000/month stipend)",
      "Singapore International Graduate Award (SINGA) — for PhD students in science and engineering",
      "A*STAR Graduate Scholarship — for PhD students in science and engineering with A*STAR research attachment",
    ],
    faq: [
      { question: "Do Singapore universities charge local or international tuition?", answer: "International students pay significantly higher fees than Singaporean citizens and PRs. However, the Tuition Grant Scheme (funded by Singapore government) is available to international students from most countries — this reduces fees to near local rates in exchange for a 3-year service obligation to work for a Singapore-based company after graduation. Most international students take the grant, making NUS/NTU effectively affordable (SGD 14,000-20,000/year after grant)." },
      { question: "Is it hard to get into NUS or NTU as an international student?", answer: "Yes — extremely competitive. NUS and NTU are ranked in the world's top 15 and competition for international places is fierce. Strong academic results (top 5-10% of your year), competitive SAT/A-level/IB scores, and a compelling application are needed. Computer science and medicine at NUS have acceptance rates below 5% for international applicants. Apply 12 months ahead, prepare your application thoroughly, and consider multiple universities as backup." },
    ],
  },
};
