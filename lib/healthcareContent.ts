export interface Hospital {
  name: string;
  city: string;
  type: 'public' | 'private' | 'international';
  jciAccredited: boolean;
  specialties: string[];
  avgConsultation: string;
  notes: string;
}

export interface InsurancePlan {
  provider: string;
  plan: string;
  monthlyPremium: string;
  coverage: string;
  notes: string;
}

export interface HealthcareContent {
  slug: string;
  country: string;
  systemRating: number;
  intro: string;
  systemOverview: string;
  publicHealthcare: string;
  privateHealthcare: string;
  hospitals: Hospital[];
  insurancePlans: InsurancePlan[];
  typicalCosts: { procedure: string; publicCost: string; privateCost: string }[];
  pharmacies: string;
  emergencyNumbers: { service: string; number: string }[];
  expatsAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const HEALTHCARE_CONTENT: Record<string, HealthcareContent> = {
  thailand: {
    slug: "thailand",
    country: "Thailand",
    systemRating: 9,
    intro: "Thailand has one of the best healthcare systems in Southeast Asia and is globally renowned for medical tourism. Its private hospitals in Bangkok are world-class — many JCI-accredited and staffed by doctors trained in the US, UK, and Australia — at 20–40% of Western costs.",
    systemOverview: "Thailand has a dual healthcare system: a universal public system (30 Baht Scheme for citizens, Social Security for formal employees) and an extensive private sector that caters to both Thais and foreigners. Expats overwhelmingly use private hospitals. Thailand attracts over 3 million medical tourists annually from over 130 countries.",
    publicHealthcare: "Public hospitals (government hospitals) are available to all residents and are very affordable but often overcrowded, with long waits and limited English-speaking staff. Expats rarely use public hospitals except for minor matters. Basic consultation at a public hospital: 30–100 THB ($1–3).",
    privateHealthcare: "Private hospitals in Bangkok are exceptional — Bumrungrad, Bangkok Hospital, and Samitivej are among Asia's best. Modern facilities, English-speaking doctors (many trained abroad), minimal wait times. Consultation fee: 800–2,000 THB ($22–$55). Most have dedicated International Patient Centers.",
    hospitals: [
      { name: "Bumrungrad International Hospital", city: "Bangkok", type: "international", jciAccredited: true, specialties: ["Oncology", "Cardiology", "Orthopedics", "Neurology", "Fertility"], avgConsultation: "฿1,500–฿2,500 ($41–$68)", notes: "Asia's most internationally acclaimed hospital. Over 40 international specialty centers. 520,000+ international patients/year from 190 countries. Doctors trained in US, UK, Australia." },
      { name: "Bangkok Hospital (Bangkok Dusit)", city: "Bangkok", type: "international", jciAccredited: true, specialties: ["Cardiology", "Oncology", "Orthopedics", "Women's Health"], avgConsultation: "฿1,200–฿2,200 ($33–$60)", notes: "Thailand's largest private hospital group (50+ hospitals nationwide). Bangkok flagship is top tier. Strong cardiac centre." },
      { name: "Samitivej Hospital Sukhumvit", city: "Bangkok", type: "private", jciAccredited: true, specialties: ["Pediatrics", "Women's Health", "Internal Medicine", "Surgery"], avgConsultation: "฿1,000–฿2,000 ($27–$55)", notes: "Bangkok expat community favourite. Located on Sukhumvit Road. Excellent English service. Child-friendly." },
      { name: "Vejthani Hospital", city: "Bangkok", type: "private", jciAccredited: true, specialties: ["Orthopedics", "Spine Surgery", "Neurology", "Hip Replacement"], avgConsultation: "฿900–฿1,800 ($25–$49)", notes: "Internationally known for orthopedic and spine procedures. Much cheaper than West for joint replacements." },
      { name: "Bangkok Hospital Chiang Mai", city: "Chiang Mai", type: "private", jciAccredited: false, specialties: ["General Medicine", "Dental", "Dermatology"], avgConsultation: "฿700–฿1,500 ($19–$41)", notes: "Chiang Mai's best private hospital. Smaller than Bangkok facilities but high quality. English-speaking staff." },
      { name: "McCormick Hospital Chiang Mai", city: "Chiang Mai", type: "private", jciAccredited: false, specialties: ["General Medicine", "Surgery", "Maternity"], avgConsultation: "฿500–฿1,000 ($14–$27)", notes: "Chiang Mai's most affordable expat-accessible hospital. Faith-based, community-focused." },
    ],
    insurancePlans: [
      { provider: "Cigna Global", plan: "Silver (Outpatient + Inpatient)", monthlyPremium: "$120–$200", coverage: "Up to $1M/year. Includes outpatient, inpatient, dental add-on available.", notes: "Most popular choice for long-term Thailand expats. Wide hospital network including all major Bangkok hospitals." },
      { provider: "AXA International", plan: "Essential Plan", monthlyPremium: "$90–$150", coverage: "Up to $500K/year. Inpatient focus. Outpatient optional add-on.", notes: "Good entry-level international coverage. All major Thai private hospitals included." },
      { provider: "Pacific Cross", plan: "Budget Plan (Thailand-only)", monthlyPremium: "$80–$130", coverage: "Thailand coverage only. Up to ฿5M ($135K). Inpatient + emergency.", notes: "Very popular with long-stay expats staying in Thailand. Much cheaper than global plans." },
      { provider: "Thai domestic insurance (LMG, Allianz TH)", plan: "OPD + IPD Package", monthlyPremium: "$40–$80", coverage: "Thailand-only. Covers most major private hospitals.", notes: "Cheapest option if you're settled in Thailand. Requires evidence of Thailand residency." },
    ],
    typicalCosts: [
      { procedure: "GP/General Consultation", publicCost: "฿30–100 ($1–3)", privateCost: "฿800–2,000 ($22–55)" },
      { procedure: "Emergency Room Visit", publicCost: "฿200–500 ($5–14)", privateCost: "฿3,000–8,000 ($82–220)" },
      { procedure: "Blood Test Panel", publicCost: "฿500–800 ($14–22)", privateCost: "฿1,500–3,000 ($41–82)" },
      { procedure: "Dental Cleaning", publicCost: "฿200–400 ($5–11)", privateCost: "฿500–1,500 ($14–41)" },
      { procedure: "Dental Implant (per tooth)", publicCost: "฿15,000 ($410)", privateCost: "฿35,000–50,000 ($960–$1,370)" },
      { procedure: "LASIK Eye Surgery (both eyes)", publicCost: "N/A", privateCost: "฿35,000–55,000 ($960–$1,500)" },
      { procedure: "Hip Replacement", publicCost: "฿80,000 ($2,200)", privateCost: "฿350,000–500,000 ($9,600–$13,700)" },
      { procedure: "Childbirth (natural)", publicCost: "฿5,000–15,000 ($137–$411)", privateCost: "฿50,000–120,000 ($1,370–$3,290)" },
      { procedure: "MRI Scan", publicCost: "฿3,000–5,000 ($82–137)", privateCost: "฿8,000–15,000 ($220–$411)" },
    ],
    pharmacies: "Pharmacies (ร้านขายยา) are everywhere in Thailand — 7-Eleven, Boots Thailand, and thousands of independent pharmacies. Many medications available over-the-counter without prescription (including antibiotics in some cases). Prices are extremely low. Boots Thailand is the most reliable for branded medications. Most pharmacists speak basic English.",
    emergencyNumbers: [
      { service: "Emergency (Police/Ambulance/Fire)", number: "191" },
      { service: "Ambulance / Medical Emergency", number: "1669" },
      { service: "Tourist Police", number: "1155" },
      { service: "Bumrungrad Hospital (24hr)", number: "+66 2 066 8888" },
      { service: "Bangkok Hospital (24hr)", number: "+66 2 310 3000" },
    ],
    expatsAdvice: [
      "Always get international health insurance before arriving — domestic Thai insurance requires proof of residency",
      "Bumrungrad, Bangkok Hospital, and Samitivej all have International Patient Centers with English coordinators",
      "Dental work in Thailand is exceptional value — many expats fly to Bangkok specifically for dental procedures",
      "Ask for an itemised quote before any procedure — hospital pricing varies by room type chosen",
      "The Expat Women's Clinic at Samitivej Sukhumvit is highly regarded for women's health",
      "For emergencies, go directly to a private hospital ER — faster and English-speaking",
      "Medical tourists can combine treatment with recovery in Bangkok luxury hotels at a fraction of Western total costs",
    ],
    faq: [
      { question: "Do I need health insurance in Thailand?", answer: "Legally, international health insurance is now required for long-stay visas (LTR, Non-Immigrant O-A). Practically speaking, you absolutely want it — even with Thailand's low prices, a serious illness or accident can cost $20,000–$100,000 at a private hospital." },
      { question: "How good is Thai healthcare compared to the West?", answer: "Bangkok's top private hospitals (Bumrungrad, Bangkok Hospital) are genuinely world-class — comparable to top hospitals in the UK or US, often with shorter wait times and newer equipment. Some procedures (complex surgery, organ transplants) are better handled in Thailand than most Western countries for the price." },
      { question: "Can I use Western health insurance in Thailand?", answer: "Many Western insurers (Cigna, AXA, Bupa) have Thailand in their network. Call your insurer before arriving to confirm which Thai hospitals are 'direct billing' (no upfront payment needed). Bumrungrad has direct billing with 200+ global insurers." },
    ],
  },

  portugal: {
    slug: "portugal",
    country: "Portugal",
    systemRating: 8,
    intro: "Portugal has one of Western Europe's best healthcare systems — a universal public NHS (SNS) that's free at point of use for residents, combined with a thriving private sector that's dramatically cheaper than the UK or US. Expats with residency access the same system as Portuguese nationals.",
    systemOverview: "Portugal's Serviço Nacional de Saúde (SNS) provides universal healthcare to all legal residents. As an EU member, Portugal has reciprocal health agreements with other EU countries. Quality is generally high, though public hospitals can have waiting times for non-urgent procedures. Private healthcare is excellent and very affordable by Western European standards.",
    publicHealthcare: "After obtaining your SNS user number (free, available at any health centre with residency proof), you access public healthcare for free or near-free. GP consultation: €5 (standard). Specialist: €7.50. Emergency: €20. Prescriptions: 50–90% subsidised. Wait times at health centres can be 2–4 weeks for non-urgent consultations; hospitals much faster for emergencies.",
    privateHealthcare: "Portugal's private healthcare sector is excellent and very affordable. Private GP consultation: €60–90. Specialist: €80–150. Portugal has several excellent private hospital groups (CUF, Hospital da Luz, HPA Health Group in Algarve) with English-speaking staff and minimal wait times. Most expats use both systems.",
    hospitals: [
      { name: "Hospital CUF Descobertas (Lisbon)", city: "Lisbon", type: "private", jciAccredited: false, specialties: ["Oncology", "Cardiology", "Orthopedics", "Neurology", "Women's Health"], avgConsultation: "€80–€150", notes: "Portugal's leading private hospital group. State-of-the-art equipment. English-speaking staff throughout. Multiple Lisbon locations." },
      { name: "Hospital da Luz (Lisbon)", city: "Lisbon", type: "private", jciAccredited: false, specialties: ["Oncology", "Cardiology", "Robotic Surgery", "Fertility"], avgConsultation: "€70–€130", notes: "Portugal's largest private hospital. Modern campus in northern Lisbon. Largest oncology centre in Portugal. English widely spoken." },
      { name: "Hospital de Santa Maria (SNS)", city: "Lisbon", type: "public", jciAccredited: false, specialties: ["All General Specialties", "Trauma", "Burn Unit", "Transplants"], avgConsultation: "€0–€20", notes: "Lisbon's main public hospital. University hospital with teaching status. Good quality; long waits for non-urgent." },
      { name: "Hospital CUF Porto", city: "Porto", type: "private", jciAccredited: false, specialties: ["General Medicine", "Surgery", "Cardiology", "Oncology"], avgConsultation: "€70–€130", notes: "Porto's leading private hospital. Same high standard as Lisbon CUF. Modern facilities." },
      { name: "HPA Health Group (Algarve)", city: "Algarve", type: "private", jciAccredited: false, specialties: ["General Medicine", "Dental", "Orthopaedics", "Emergency"], avgConsultation: "€65–€120", notes: "The Algarve's best private health group. Designed for expat community. English is primary working language. Multiple clinics across the Algarve." },
    ],
    insurancePlans: [
      { provider: "Médis (Portuguese domestic)", plan: "Individual Health Plan", monthlyPremium: "€30–€80", coverage: "Portugal-wide. All major private hospitals. Dental optional.", notes: "Most popular domestic health insurance in Portugal. Very affordable. 80% of expats recommend for Portugal-only coverage." },
      { provider: "Fidelidade (Portuguese domestic)", plan: "Multicare", monthlyPremium: "€25–€70", coverage: "Portugal-wide. CUF, Hospital da Luz, and 200+ hospitals.", notes: "Portugal's most established insurer. Excellent value for Portugal-based expats." },
      { provider: "Cigna Global", plan: "Silver International", monthlyPremium: "€100–€180", coverage: "Worldwide. €1M+ cover. Good for expats who travel frequently.", notes: "Good for globe-trotting expats. Includes Portugal's top hospitals on direct-billing network." },
      { provider: "DKV (via Seguros logo)", plan: "DKV Integral", monthlyPremium: "€35–€90", coverage: "Portugal + Spain + Europe. Strong dental coverage.", notes: "Popular with expats who split time between Portugal and Spain." },
    ],
    typicalCosts: [
      { procedure: "GP Consultation (SNS)", publicCost: "€5", privateCost: "€60–€90" },
      { procedure: "GP Consultation (Private)", publicCost: "—", privateCost: "€60–€90" },
      { procedure: "Specialist Consultation", publicCost: "€7.50", privateCost: "€80–€150" },
      { procedure: "Emergency Room Visit", publicCost: "€20", privateCost: "€100–€300" },
      { procedure: "Blood Test Panel", publicCost: "€0–€15", privateCost: "€30–€80" },
      { procedure: "Dental Cleaning", publicCost: "Not covered by SNS", privateCost: "€40–€80" },
      { procedure: "Dental Implant (per tooth)", publicCost: "Not covered", privateCost: "€800–€1,200" },
      { procedure: "Childbirth (natural)", publicCost: "€0", privateCost: "€3,000–€6,000" },
      { procedure: "MRI Scan", publicCost: "€0 (with referral)", privateCost: "€250–€500" },
    ],
    pharmacies: "Pharmacies (Farmácia) are plentiful in Portugal — look for the green cross. Prescription medications require a receita (prescription). Many common medications are sold OTC that require prescriptions elsewhere. Pharmacists are highly trained and often the first point of contact for minor ailments. SNS prescriptions are heavily subsidised (10–35% patient payment). Late-night pharmacies (farmácia de serviço) operate on rotation.",
    emergencyNumbers: [
      { service: "Emergency (All Services)", number: "112" },
      { service: "SNS Health Line (nurse triage)", number: "SNS24: 808 24 24 24" },
      { service: "Hospital CUF Descobertas (24hr)", number: "+351 21 002 5200" },
      { service: "Hospital da Luz (24hr)", number: "+351 21 710 4400" },
      { service: "HPA Algarve (24hr)", number: "+351 282 420 400" },
    ],
    expatsAdvice: [
      "Register for your SNS user number (número de utente) at a health centre as soon as you have your NIF and address — it's free and unlocks public healthcare",
      "Most expats use SNS for major/serious issues (free) and private clinics for quick appointments (€60–90)",
      "Dental care is NOT covered by SNS — budget €40–80/year for cleaning. Dental clinics in Portugal are much cheaper than UK/US",
      "HPA Health Group in the Algarve is excellent and specifically oriented to serving the expat community (English, Dutch, German speakers)",
      "ADSE (government employee health scheme) is not available to foreign employees — check your employer's health coverage",
      "Medical tourism to Portugal from the UK and Ireland is growing — procedures like hip replacement and cataract surgery are significantly cheaper",
    ],
    faq: [
      { question: "Can I use the Portuguese NHS as an expat?", answer: "Yes — once you have legal residency and your SNS utente number, you have the same access to public healthcare as a Portuguese citizen. It's free at point of use with small copays (€5 GP, €7.50 specialist, €20 emergency)." },
      { question: "Is private health insurance necessary in Portugal?", answer: "Not legally required (unless your visa mandates it). But a private health insurance policy costs €25–80/month in Portugal and removes all waiting times. Most long-term expats get both: SNS card for major treatments, private insurance for fast GP and specialist access." },
      { question: "How good is Portuguese dentistry?", answer: "Excellent and affordable. Portuguese dentists are well-trained (5-year degree). Prices are 50–60% cheaper than UK: cleaning €50–70, filling €60–100, implant €800–1,200. Many UK and Irish expats specifically choose Portugal for dental work." },
    ],
  },

  uae: {
    slug: "uae",
    country: "UAE",
    systemRating: 8,
    intro: "The UAE has one of the Middle East's best healthcare systems — a mix of excellent public hospitals and a world-class private sector. Dubai and Abu Dhabi have invested heavily in healthcare infrastructure and attract medical tourists from across the region. All residents must have mandatory health insurance.",
    systemOverview: "The UAE has mandatory health insurance for all residents (employers must provide it). The public system (Ministry of Health hospitals, Rashid Hospital, Cleveland Clinic Abu Dhabi) is very good. The private sector is extensive, with international hospital brands (Cleveland Clinic, Mediclinic, American Hospital Dubai) operating world-class facilities.",
    publicHealthcare: "UAE government hospitals provide healthcare at highly subsidised rates for UAE nationals. Expat residents typically pay higher rates at government hospitals or use their mandatory insurance at private hospitals. Government hospital consultation: AED 100–300 ($27–$82). Most expats prefer private hospitals for speed and English service.",
    privateHealthcare: "UAE's private hospitals are outstanding — particularly Cleveland Clinic Abu Dhabi (sister to the original US institution), American Hospital Dubai, and Mediclinic. English is the working language throughout the UAE healthcare system. Consultation: AED 300–800 ($82–$218). Most private hospitals are direct-billing with all major insurers.",
    hospitals: [
      { name: "Cleveland Clinic Abu Dhabi", city: "Abu Dhabi", type: "international", jciAccredited: true, specialties: ["Cardiology", "Neurology", "Oncology", "Transplants", "Digestive Disease"], avgConsultation: "AED 600–1,000 ($163–$272)", notes: "Only fully affiliated international extension of Cleveland Clinic. One of the Middle East's top hospitals. Same protocols as Cleveland, Ohio." },
      { name: "American Hospital Dubai", city: "Dubai", type: "international", jciAccredited: true, specialties: ["Cardiology", "Oncology", "Orthopedics", "Women's Health", "Dermatology"], avgConsultation: "AED 400–800 ($109–$218)", notes: "Dubai's most prestigious private hospital. JCI-accredited. US-trained doctors. International patient services." },
      { name: "Mediclinic City Hospital (Dubai Healthcare City)", city: "Dubai", type: "private", jciAccredited: true, specialties: ["All General Specialties", "Fertility", "Neurology", "Bariatrics"], avgConsultation: "AED 350–700 ($95–$190)", notes: "Located in Dubai Healthcare City medical hub. South African hospital group. Consistently top-rated." },
      { name: "Rashid Hospital Dubai (Government)", city: "Dubai", type: "public", jciAccredited: true, specialties: ["Trauma", "Emergency", "Burns", "Neurosurgery"], avgConsultation: "AED 100–300 ($27–$82)", notes: "Dubai's main trauma and emergency government hospital. JCI-accredited. Very good emergency department." },
      { name: "Burjeel Hospital Abu Dhabi", city: "Abu Dhabi", type: "private", jciAccredited: true, specialties: ["Oncology", "Cardiology", "Orthopedics", "Fertility", "Neurology"], avgConsultation: "AED 350–700 ($95–$190)", notes: "Abu Dhabi's leading private hospital group. Strong oncology centre. Multiple UAE locations." },
    ],
    insurancePlans: [
      { provider: "Employer-Provided (mandatory)", plan: "Basic or Enhanced depending on employer", monthlyPremium: "AED 100–500 ($27–$136) — paid by employer", coverage: "Minimum: AED 150,000 ($40,900)/year. Premium plans: AED 500,000–1M.", notes: "All UAE employers MUST provide health insurance. Minimum coverage mandated by law. Check your package carefully." },
      { provider: "Daman (Abu Dhabi national insurer)", plan: "Thiqa (Nationals) / Basic (Expats)", monthlyPremium: "AED 200–800 ($54–$218)/month", coverage: "Comprehensive UAE coverage. Abu Dhabi mandatory insurer.", notes: "Abu Dhabi's government-mandated insurer. Thiqa for UAE nationals is free. Expats on ISAHD/basic plan." },
      { provider: "AXA Gulf", plan: "SmartCare Enhanced", monthlyPremium: "AED 350–700 ($95–$190)/month", coverage: "AED 500,000 ($136,000)/year. Direct billing at all major UAE hospitals.", notes: "Popular expat top-up plan. Adds outpatient cover to employer basic plans. Dental and optical included." },
    ],
    typicalCosts: [
      { procedure: "GP Consultation (Private)", publicCost: "AED 100–200 (govt)", privateCost: "AED 300–600 ($82–$163)" },
      { procedure: "Specialist Consultation", publicCost: "AED 150–300 (govt)", privateCost: "AED 400–800 ($109–$218)" },
      { procedure: "Emergency Room Visit", publicCost: "AED 300–500 (govt)", privateCost: "AED 800–2,000 ($218–$545)" },
      { procedure: "Blood Test Panel", publicCost: "AED 100–200 (govt)", privateCost: "AED 300–600 ($82–$163)" },
      { procedure: "Dental Cleaning", publicCost: "AED 150–250 (govt)", privateCost: "AED 300–600 ($82–$163)" },
      { procedure: "Dental Implant (per tooth)", publicCost: "N/A", privateCost: "AED 4,000–7,000 ($1,090–$1,905)" },
      { procedure: "Childbirth (natural)", publicCost: "AED 1,000–3,000 (govt)", privateCost: "AED 12,000–25,000 ($3,270–$6,800)" },
      { procedure: "MRI Scan", publicCost: "AED 500–800 (govt)", privateCost: "AED 1,500–3,000 ($408–$817)" },
    ],
    pharmacies: "Pharmacies (صيدلية) are abundant in the UAE — open until midnight in most areas, 24/7 in major malls and hospitals. Aster Pharmacy, Life Pharmacy, and Boots are major chains. Many medications available without prescription. Prescription medications require a valid Rx from a UAE-licensed doctor. Prices are regulated and affordable. DubaiNow app allows online pharmacy ordering.",
    emergencyNumbers: [
      { service: "Emergency (Police/Ambulance/Fire)", number: "999" },
      { service: "Ambulance Only", number: "998" },
      { service: "Dubai Health Authority", number: "800 342" },
      { service: "Cleveland Clinic Abu Dhabi (24hr)", number: "+971 2 659 0200" },
      { service: "American Hospital Dubai (24hr)", number: "+971 4 336 7777" },
    ],
    expatsAdvice: [
      "Check your employer's insurance carefully — basic mandatory insurance may not cover many outpatient procedures",
      "Most expats top-up their employer insurance with an individual plan for dental and outpatient coverage",
      "Dubai Healthcare City is a dedicated medical free zone with 200+ clinics and hospitals — worth knowing",
      "Cleveland Clinic Abu Dhabi is genuinely world-class — equivalent to the best US hospitals for complex procedures",
      "Dental costs are high in UAE — consider dental tourism to India, Jordan or Turkey for major work",
      "The DHA (Dubai Health Authority) app has a GP teleconsult service — fast, English, and covered by most insurance",
      "Medical fitness tests (blood, chest X-ray) are required for UAE residence visa — done at government health centres",
    ],
    faq: [
      { question: "Is health insurance mandatory in the UAE?", answer: "Yes — in Dubai, all residents must have health insurance (mandatory since 2016). Abu Dhabi has had mandatory insurance since 2006. Employers are required by law to provide health insurance to employees and their dependants. Penalties apply for non-compliance." },
      { question: "Can I use my international health insurance in the UAE?", answer: "Yes — most international health insurers (Cigna, AXA, Bupa International) work in the UAE. All major hospitals in Dubai and Abu Dhabi have international direct-billing relationships. However, the UAE's mandatory insurance must still be met separately for residency purposes." },
      { question: "How good is UAE healthcare for serious conditions?", answer: "Excellent — particularly Cleveland Clinic Abu Dhabi for complex cardiac, neurological, and oncological cases. American Hospital Dubai and Mediclinic City Hospital are comparable to the best US or European private hospitals. Many GCC nationals travel to UAE for treatment rather than going to the US." },
    ],
  },

  germany: {
    slug: "germany",
    country: "Germany",
    systemRating: 9,
    intro: "Germany operates one of Europe's finest and most comprehensive healthcare systems. The statutory health insurance (GKV) covers the entire working population and provides excellent coverage with no up-front payments for most services. Germany's hospitals are well-equipped, doctors are well-trained, and the system is technically sophisticated. Expats who enter the workforce are automatically enrolled in the statutory system, making Germany's healthcare one of the most accessible for new arrivals.",
    systemOverview: "Germany has a dual healthcare system: statutory insurance (GKV, gesetzliche Krankenversicherung) for ~90% of the population and private insurance (PKV, private Krankenversicherung) for high earners and civil servants. GKV costs approximately 14.6% of gross salary (split between employer and employee). PKV is individually underwritten and can be better quality but more expensive with age. Germany has ~1,900 hospitals, including world-class university hospitals (Charité Berlin, LMU Munich, Heidelberg) and specialised clinics. Medical tourists from Russia, Arabian Gulf and Eastern Europe travel specifically to Germany for complex treatments.",
    publicHealthcare: "GKV (statutory health insurance) covers GP visits, specialist referrals, hospitalisation, maternity care, most medications, and mental health services. There are no co-pays for GP visits. Minor co-pays apply for medications (€5-10 per prescription). Waiting times for specialists can be 4-8 weeks in the statutory system. Emergency care is always available. Prescription system: GP refers to specialist, specialist prescribes. GKV covers family members (spouse, children) at no extra cost if they don't earn independently.",
    privateHealthcare: "PKV (private insurance) offers faster appointments, access to senior doctors, single rooms in hospital, and broader coverage including dental, vision and alternative medicine. Costs start from €200-400/month for young healthy adults but increase significantly with age and health conditions. Switching back from PKV to GKV is difficult — a key consideration. Many expats on high salaries (above €70,200/year) are eligible to choose PKV but should think carefully about long-term implications.",
    hospitals: [
      { name: "Charité – Universitätsmedizin Berlin", city: "Berlin", type: "public", jciAccredited: true, specialties: ["Neurology", "Oncology", "Cardiac Surgery", "Transplantation", "Rare Diseases"], avgConsultation: "€0 (GKV) / €80-200 (private)", notes: "Europe's largest university hospital. World-famous for neurological research. More Nobel laureates have worked here than any other hospital. Accepts international patients." },
      { name: "Klinikum rechts der Isar (TU Munich)", city: "Munich", type: "public", jciAccredited: true, specialties: ["Orthopaedics", "Cardiac", "Oncology", "Neuroscience", "Endocrinology"], avgConsultation: "€0 (GKV) / €100-250 (private)", notes: "Top Bavarian university hospital. Exceptional cardiac and oncology departments. Close collaboration with Munich's technical university for research." },
      { name: "Universitätsklinikum Heidelberg", city: "Heidelberg", type: "public", jciAccredited: true, specialties: ["Oncology", "Haematology", "Transplantation", "Paediatrics", "Neurology"], avgConsultation: "€0 (GKV) / €80-200 (private)", notes: "One of Germany's leading cancer centres. National Centre for Tumour Diseases (NCT) located here. Internationally recognised for rare disease treatment." },
      { name: "Hirslanden Klinik Im Park", city: "Berlin (multiple cities)", type: "private", jciAccredited: true, specialties: ["General Surgery", "Orthopaedics", "Sports Medicine", "Aesthetics", "Cardiology"], avgConsultation: "€150-350", notes: "Premium private Swiss-affiliated hospital group in Germany. English-speaking staff, international patient coordination, minimal waiting times." },
    ],
    insurancePlans: [
      { provider: "TK (Techniker Krankenkasse)", plan: "Statutory GKV", monthlyPremium: "~€350 (employee half, employer pays other half)", coverage: "Full GKV statutory coverage including maternity, specialist, hospital", notes: "Germany's most popular statutory insurer. Best app and digital services. Excellent English support for expats. Widely used by tech workers and professionals." },
      { provider: "AOK", plan: "Statutory GKV", monthlyPremium: "~€340-360 (employee share)", coverage: "Full statutory coverage, varies by regional AOK branch", notes: "Germany's largest health insurance group with regional branches. Good network of GPs and specialists. Standard GKV coverage." },
      { provider: "Allianz Private", plan: "Comfort/Premium PKV", monthlyPremium: "€250-500 (young adult)", coverage: "Single room hospital, senior doctor, dental, vision, alternative medicine", notes: "Germany's leading private insurer. Premium PKV with English support. Excellent for expats on high salaries wanting best-in-class access." },
      { provider: "Care Concept / Mawista", plan: "Expat/Incoming Insurance", monthlyPremium: "€80-150", coverage: "Emergency care, outpatient, limited inpatient (not full PKV)", notes: "Short-term expat insurance for those waiting for GKV enrollment or on student/work visa. Good bridge insurance for new arrivals." },
    ],
    typicalCosts: [
      { procedure: "GP consultation", publicCost: "€0", privateCost: "€60-120" },
      { procedure: "Specialist consultation", publicCost: "€0 (with referral)", privateCost: "€100-250" },
      { procedure: "Emergency room visit", publicCost: "€0", privateCost: "€100-300" },
      { procedure: "Blood test panel", publicCost: "€0", privateCost: "€50-150" },
      { procedure: "Dental filling", publicCost: "€0-50 (basic)", privateCost: "€80-300" },
      { procedure: "Appendectomy", publicCost: "€0", privateCost: "€3,000-8,000" },
      { procedure: "Hip replacement", publicCost: "€0", privateCost: "€10,000-25,000" },
      { procedure: "MRI scan", publicCost: "€0 (with referral)", privateCost: "€200-600" },
    ],
    pharmacies: "Germany's pharmacies (Apotheken) are strictly regulated — only licensed pharmacists can dispense medications, and pharmacies must maintain physical premises (no online-only). German pharmacies are excellent quality with knowledgeable staff who speak good English in cities. Many common medications require a prescription that is less restricted in other countries. Online pharmacies (like DocMorris) deliver non-prescription items. Prescription medications have a €5-10 co-pay under GKV. Open 24-hour pharmacies are in every district on rotation — ask your local pharmacy for the on-call schedule.",
    emergencyNumbers: [
      { service: "Emergency (Police)", number: "110" },
      { service: "Emergency (Fire/Ambulance)", number: "112" },
      { service: "Medical on-call (Kassenärztlicher Bereitschaftsdienst)", number: "116 117" },
      { service: "Poison Control", number: "030 19240" },
      { service: "Emergency Dentist", number: "0800 999 0880" },
    ],
    expatsAdvice: [
      "Register with a GP (Hausarzt) as soon as you arrive — building a relationship is important as GPs control specialist referrals",
      "The TK (Techniker Krankenkasse) app is the best for English-speaking expats and has been improving steadily",
      "Waiting times for specialist appointments can be 4-8 weeks on GKV — private insurance dramatically reduces this",
      "116 117 is the non-emergency medical helpline for after-hours GP advice — has English service in major cities",
      "Mental health services in Germany are good but waiting times are very long (6-12 months for therapists on GKV)",
      "Dental care is partially covered by GKV but basic only — most expats take out additional dental top-up insurance (Zahnzusatzversicherung)",
      "Germany excels at rehabilitation medicine — if you have musculoskeletal issues, the orthopaedic and sports medicine clinics are excellent",
    ],
    faq: [
      { question: "How do I enrol in German health insurance as an expat?", answer: "If employed in Germany, your employer will enrol you in a statutory health insurer (GKV) automatically. You can choose which GKV — TK, AOK, Barmer, DAK are the most popular. Freelancers and self-employed must arrange their own GKV or PKV — GKV is available for self-employed through voluntary membership. Students pay reduced GKV rates (~€110/month). Non-employed accompanying spouses can be covered on their partner's GKV at no extra cost if they don't earn." },
      { question: "Can I see a doctor without speaking German?", answer: "In major cities (Berlin, Munich, Hamburg, Frankfurt) many GPs and specialists speak English. University hospitals generally have English-speaking staff. In smaller cities and rural areas this is less reliable. Recommended approach: search for English-speaking doctors on Jameda.de or use the online doctor platform TeleClinic/Kry which offers English consultations. DocFinder helps locate English-speaking specialists. Google 'English speaking doctor [your city]' for recommendations from expat forums." },
      { question: "Is dental care covered in Germany?", answer: "Basic preventive dental care (twice-yearly check-up, basic fillings) is covered by GKV. However, most restorative work (crowns, bridges, implants) is only partially covered — GKV pays a fixed subsidy and patients pay the rest. Dental additional insurance (Zahnzusatzversicherung) from providers like DFV or Allianz costs €10-30/month and significantly increases coverage. Private implants typically cost €1,500-3,500 per tooth in Germany." },
    ],
  },

  spain: {
    slug: "spain",
    country: "Spain",
    systemRating: 8,
    intro: "Spain's National Health System (Sistema Nacional de Salud, SNS) is consistently ranked among Europe's best — the WHO placed it among the world's top 10. Access is universal for registered residents and the quality of care, particularly in Madrid and Barcelona, is excellent. Spain has a strong private sector that co-exists with the public system, and private healthcare costs are very reasonable by international standards. The warm climate and Mediterranean lifestyle contribute to excellent population health outcomes.",
    systemOverview: "Spain's healthcare is organised by the 17 autonomous communities, each managing their own regional health service. All registered residents (empadronados) are entitled to access the SNS with a health card (tarjeta sanitaria individual). EU citizens can use the EHIC card for temporary stays. The system is funded through general taxation. Waiting times in the public system can be long for non-urgent specialist care — typically 4-12 weeks. Private insurance supplements public care for faster access.",
    publicHealthcare: "The SNS provides comprehensive free care: GP visits, specialist referrals, emergency care, hospitalisation, maternity care, paediatrics, mental health, and dental care for children. Adults pay a percentage of prescription costs (10-60% depending on income). The system is excellent for acute and emergency care. Waiting times for elective procedures and non-urgent specialist consultations can be significant — 3-6 months for some specialists. Empadronamiento (municipal registration) is required to access the health card.",
    privateHealthcare: "Private healthcare in Spain is very affordable by Western standards. Private GP consultations: €30-80. Specialist: €60-150. Private insurance (SegurCaixa, Mapfre, Adeslas, Sanitas) costs €50-150/month for comprehensive coverage. Private clinics are available with minimal waiting times. Many expats use a combination of public (for major procedures) and private (for quick GP and specialist access). Dental care is almost always private — SNS only covers basic emergency dental for adults.",
    hospitals: [
      { name: "Hospital Clínic de Barcelona", city: "Barcelona", type: "public", jciAccredited: true, specialties: ["Transplantation", "Cardiology", "Oncology", "Neurology", "Tropical Medicine"], avgConsultation: "€0 (SNS) / €100-200 (private)", notes: "Barcelona's flagship teaching hospital. World-renowned liver transplant programme. Excellent tropical medicine department. International patient service available." },
      { name: "Hospital La Paz", city: "Madrid", type: "public", jciAccredited: false, specialties: ["Paediatrics", "Haematology", "Orthopaedics", "Cardiac", "Neurosurgery"], avgConsultation: "€0 (SNS) / €80-180 (private)", notes: "One of Spain's largest hospitals. Excellent paediatric department. Strong research activity in haematology and oncology." },
      { name: "Clínica Universidad de Navarra", city: "Pamplona/Madrid", type: "private", jciAccredited: true, specialties: ["Oncology", "Genetics", "Cardiology", "Neuroscience", "Hepatology"], avgConsultation: "€100-300", notes: "Spain's top private university hospital. Medical research of international standing. Oncology department internationally recognised. English-speaking staff." },
      { name: "Quirónsalud Barcelona", city: "Barcelona", type: "private", jciAccredited: true, specialties: ["Orthopaedics", "Cardiology", "Oncology", "Ophthalmology", "Sports Medicine"], avgConsultation: "€80-200", notes: "Part of Spain's largest private hospital group (Quirónsalud, Fresenius subsidiary). English-speaking staff, international patient coordination, fast access." },
    ],
    insurancePlans: [
      { provider: "Sanitas (Bupa Spain)", plan: "Básico/Completo", monthlyPremium: "€60-120", coverage: "GP, specialists, hospitalisation, some dental", notes: "Spain's most expat-friendly private insurer. English-language service. Owned by BUPA. Accepted in major private hospitals nationwide." },
      { provider: "Adeslas", plan: "Óptima/Especial", monthlyPremium: "€55-110", coverage: "Broad specialist network, hospitalisation, limited dental", notes: "Spain's largest private health insurer by network. Excellent coverage in Madrid, Barcelona, Valencia. Good digital app." },
      { provider: "Mapfre Salud", plan: "Básico/Completo", monthlyPremium: "€50-100", coverage: "GP, specialists, emergencies, maternity", notes: "Solid mid-range option. Very wide provider network especially outside major cities." },
      { provider: "AXA Spain", plan: "International Health (expat plan)", monthlyPremium: "€120-250", coverage: "Full international coverage including repatriation, worldwide emergency", notes: "Best for expats who travel frequently or plan to move again. International plan rather than Spanish domestic." },
    ],
    typicalCosts: [
      { procedure: "GP consultation", publicCost: "€0", privateCost: "€35-80" },
      { procedure: "Specialist consultation", publicCost: "€0 (with referral)", privateCost: "€60-150" },
      { procedure: "Emergency room", publicCost: "€0", privateCost: "€100-300" },
      { procedure: "Blood test panel", publicCost: "€0", privateCost: "€30-100" },
      { procedure: "Dental filling", publicCost: "Not covered (adults)", privateCost: "€60-200" },
      { procedure: "Appendectomy", publicCost: "€0", privateCost: "€3,000-7,000" },
      { procedure: "MRI scan", publicCost: "€0 (with referral)", privateCost: "€200-500" },
      { procedure: "Childbirth (natural)", publicCost: "€0", privateCost: "€2,000-5,000" },
    ],
    pharmacies: "Spanish pharmacies (farmacias) are identified by a green cross and are found on virtually every street in cities. They are well-stocked, pharmacist-staffed and often advise without a prescription on minor ailments. Many medications sold over-the-counter elsewhere require prescriptions in Spain (antibiotics, some painkillers). SNS prescription co-pays are 10-60% of cost depending on income and pensioner status. Private prescription full price. 24-hour pharmacies operate on rotation — the on-duty (farmacia de guardia) is posted on the door of every pharmacy. English is widely spoken in tourist areas.",
    emergencyNumbers: [
      { service: "General Emergency", number: "112" },
      { service: "Police (Nacional)", number: "091" },
      { service: "Medical Emergency", number: "061" },
      { service: "Catalan Medical Emergency", number: "061 (Catalunya)" },
      { service: "Poison Control", number: "91 562 04 20" },
    ],
    expatsAdvice: [
      "Register as empadronado (municipal registration) immediately — this is required to get your health card (TSI) and access the public system",
      "Private health insurance (€60-120/month) is worth it for quick access to GPs and specialists — public waiting times can be frustrating",
      "Sanitas is the most expat-friendly private insurer with strong English-language support",
      "Spain's emergency care is excellent — if you have an acute emergency, the public system responds very quickly",
      "Dental care is not covered by the SNS for adults — budget for private dental or take a policy with dental cover",
      "Mental health services in the public system are limited — private psychologists charge €60-100/session",
      "Spain has excellent oncology at public university hospitals — Clínica Universidad de Navarra and Hospital Clínic are world-class for cancer treatment",
    ],
    faq: [
      { question: "Do I need to speak Spanish to access healthcare?", answer: "In major cities (Madrid, Barcelona, Valencia) many healthcare professionals speak English, particularly in private clinics and university hospitals. In smaller cities and rural areas, Spanish is usually necessary. Sanitas and Quirónsalud have English-speaking coordinators. For the public SNS system, a Spanish speaker or translation app is helpful for GP visits and paperwork. Non-emergency telephone lines are typically Spanish only." },
      { question: "How do I get a health card (tarjeta sanitaria)?", answer: "Register as empadronado at your local Ayuntamiento (town hall) first. Then go to your local health centre (centro de salud) with your empadronamiento certificate, NIE/passport and proof of income or social security. EU citizens should also bring their EHIC. Non-EU residents typically need a valid residence permit and evidence of SNS eligibility (employment/contribution record). The process takes 1-4 weeks. Your health card is then issued and you are assigned a GP." },
    ],
  },

  singapore: {
    slug: "singapore",
    country: "Singapore",
    systemRating: 9,
    intro: "Singapore has one of the world's finest healthcare systems — the WHO ranked it sixth globally in 2000 and it consistently ranks among Asia's best. The system combines government-subsidised public hospitals with excellent private facilities in a model that uses means-tested co-payments to control costs while ensuring access. For expats on employment passes, private or corporate health insurance is the norm, giving access to world-class care at relatively reasonable costs compared to equivalent US or Swiss care.",
    systemOverview: "Singapore's healthcare is organised through a three-tier framework: restructured public hospitals (Singapore General Hospital, Tan Tock Seng, National University Hospital etc.), government polyclinics for primary care, and private clinics and hospitals (Parkway Health, Raffles Medical, Mount Elizabeth). The government subsidises public hospital care on a sliding scale — Singaporeans and PRs receive large subsidies; foreigners on Employment Passes pay unsubsidised but still regulated rates. Medisave (part of CPF) saves 8-10.5% of salary for medical use — this applies to Singapore citizens and PRs, not EP holders.",
    publicHealthcare: "Public restructured hospitals (SGH, TTSH, NUH, CGH, KKH for women and children) are excellent quality and accept all patients. Foreigners pay B1/A class rates without subsidy — a hospital stay costs SGD 300-800/night. Emergency care is world-class. The government polyclinics are inexpensive (SGD 10-20 per visit) but subsidies are for citizens/PRs only; foreigners pay SGD 30-50 at polyclinics. For serious conditions, public hospitals have some of Asia's best specialists, particularly in oncology, cardiac care and transplantation.",
    privateHealthcare: "Singapore's private hospitals are exceptional. Parkway Group hospitals (Mount Elizabeth Orchard, Gleneagles, Parkway East) and Raffles Hospital are the main private providers. Consultation fees: GP SGD 30-60, specialist SGD 120-300. Private room hospitalisation: SGD 600-1,500/night. Corporate insurance (common for employment pass holders) typically covers private hospital care. International hospitals in Singapore routinely treat patients from Indonesia, Malaysia, Vietnam and beyond.",
    hospitals: [
      { name: "Singapore General Hospital (SGH)", city: "Singapore", type: "public", jciAccredited: true, specialties: ["Oncology", "Haematology", "Burns", "Transplantation", "Orthopaedics"], avgConsultation: "SGD 80-200 (non-subsidised)", notes: "Singapore's largest hospital and national referral centre. World-class burns and haematology. National Cancer Centre Singapore is co-located." },
      { name: "Mount Elizabeth Hospital (Novena)", city: "Singapore", type: "private", jciAccredited: true, specialties: ["Cardiology", "Neurology", "Oncology", "Orthopaedics", "Fertility"], avgConsultation: "SGD 150-350", notes: "Singapore's premier private hospital. Extraordinary international patient service. Directly opposite SGD 1,500/night suite rooms. Parkway Pantai group." },
      { name: "Raffles Hospital", city: "Singapore", type: "private", jciAccredited: true, specialties: ["International Medicine", "Women's Health", "Dental", "Health Screening", "Cardiology"], avgConsultation: "SGD 80-200", notes: "Excellent for expats — multiple language support, international patient coordinators, comprehensive health screening packages popular with new arrivals." },
      { name: "National University Hospital (NUH)", city: "Singapore", type: "public", jciAccredited: true, specialties: ["Paediatrics", "Women's Health", "Cardiothoracic", "Renal", "Neurology"], avgConsultation: "SGD 80-180 (non-subsidised)", notes: "Academic medical centre of NUS. Excellent paediatrics (co-located with KKH). Strong research output. Preferred by some expat families for children's care." },
    ],
    insurancePlans: [
      { provider: "AIA Singapore", plan: "HealthShield Gold Max", monthlyPremium: "SGD 80-200 (age dependent)", coverage: "Private hospital coverage including major insurers, integrated Shield plan", notes: "Most popular expat and local private insurance. Integrated Shield Plans co-ordinate with national MediShield Life (Singaporeans/PRs). Good digital claims." },
      { provider: "Prudential (PRUShield)", plan: "PRUShield Premier", monthlyPremium: "SGD 100-250", coverage: "Private hospital, specialist, outpatient rider available", notes: "Solid coverage with reliable claims. Outpatient rider adds GP/specialist coverage. Accepted at all major private hospitals." },
      { provider: "Cigna Global", plan: "Gold International Health Plan", monthlyPremium: "USD 300-600", coverage: "Full international coverage, inpatient and outpatient, repatriation", notes: "Best for expats who may relocate again or travel heavily. Worldwide coverage including US. Slightly more expensive but genuine portability." },
      { provider: "NTUC Income", plan: "Enhanced IncomeShield Preferred", monthlyPremium: "SGD 60-150", coverage: "Private hospital coverage, MAS-regulated Shield plan", notes: "Singapore's co-operative insurer. Competitive pricing and reliable claims. Popular with expats who will become PRs." },
    ],
    typicalCosts: [
      { procedure: "GP consultation (private clinic)", publicCost: "SGD 30-50 (polyclinic)", privateCost: "SGD 35-70" },
      { procedure: "Specialist consultation", publicCost: "SGD 80-180 (public, unsubsidised)", privateCost: "SGD 120-350" },
      { procedure: "Emergency room", publicCost: "SGD 100-200", privateCost: "SGD 200-500" },
      { procedure: "Blood test panel", publicCost: "SGD 50-120", privateCost: "SGD 80-200" },
      { procedure: "Dental cleaning", publicCost: "Not covered", privateCost: "SGD 80-150" },
      { procedure: "Appendectomy", publicCost: "SGD 3,000-8,000 (unsubsidised)", privateCost: "SGD 12,000-25,000" },
      { procedure: "MRI scan", publicCost: "SGD 600-1,200", privateCost: "SGD 900-2,000" },
      { procedure: "Childbirth (natural)", publicCost: "SGD 3,000-6,000", privateCost: "SGD 8,000-18,000" },
    ],
    pharmacies: "Singapore has an excellent pharmacy sector. Guardian, Watsons and Unity are the major chains with hundreds of outlets. Hospital-based pharmacies dispense prescriptions. Medications are regulated — some over-the-counter in other countries require prescriptions in Singapore. Costs are very reasonable: paracetamol SGD 2-5, antibiotics SGD 10-25 with prescription. 24-hour pharmacies at major hospitals. Online pharmacies (MyDoc, Doctor Anywhere) allow teleconsultation and prescription delivery. Many GP clinics have in-house dispensing.",
    emergencyNumbers: [
      { service: "Ambulance/Fire (SCDF)", number: "995" },
      { service: "Police", number: "999" },
      { service: "Non-emergency Ambulance", number: "1777" },
      { service: "Raffles Hospital 24hr", number: "+65 6311 1111" },
      { service: "Singapore General Hospital", number: "+65 6222 3322" },
    ],
    expatsAdvice: [
      "Get an Integrated Shield Plan (private hospital insurance) as a priority — it's affordable and the difference between basic and excellent care is huge",
      "Raffles Hospital has the best international patient service and is particularly welcoming for new expat arrivals needing a health check",
      "Keep your insurance documents and policy number in your phone — hospitals process private insurance smoothly with direct billing",
      "For non-emergency specialist care, public restructured hospitals are excellent quality and significantly cheaper than private",
      "Annual health screening packages (SGD 200-500) are popular and widely available — comprehensive check-ups are great value",
      "Dental care is private and not cheap — budget SGD 100-200/year minimum for maintenance",
      "Doctor Anywhere and MyDoc apps provide teleconsultation for minor ailments at SGD 20-40 — convenient and fast",
    ],
    faq: [
      { question: "Do I get subsidised healthcare as an expat in Singapore?", answer: "Employment Pass holders (foreigners) do not receive government healthcare subsidies — these are for Singaporeans and PRs only. However, Singapore's unsubsidised public hospital care is still competitively priced and excellent quality. The main route to managing healthcare costs as an expat is through employer-provided insurance (very common) or a personal Integrated Shield Plan (ISP). Negotiate healthcare benefits as part of your employment package." },
      { question: "What is the difference between restructured hospitals and private hospitals?", answer: "Restructured hospitals (SGH, TTSH, NUH, CGH) are government-owned, well-equipped, and have excellent specialists — particularly for complex cases. Foreigners pay full unsubsidised rates but still lower than equivalent private costs. Private hospitals (Mount Elizabeth, Raffles, Gleneagles) offer single rooms, shorter waits, hotel-like facilities and direct admission without GP referrals. Quality at the top of both sectors is equivalent; private wins on comfort and speed." },
    ],
  },

  malaysia: {
    slug: "malaysia",
    country: "Malaysia",
    systemRating: 7,
    intro: "Malaysia offers one of Southeast Asia's best healthcare deals: excellent private hospitals at a fraction of Singapore or Western prices, combined with a functional public system for residents. Kuala Lumpur and Penang are major medical tourism destinations — hospitals like Pantai, Prince Court and Penang Adventist attract patients from Indonesia, Bangladesh, and even some Western expats seeking affordable specialist care. Private health insurance in Malaysia costs a fraction of equivalent coverage in the UK or US.",
    systemOverview: "Malaysia has a dual public-private healthcare system. The Ministry of Health operates public hospitals and clinics that serve Malaysian citizens at heavily subsidised rates. Foreigners can access public facilities but pay full unsubsidised rates which are still modest. Malaysia's private hospital sector is the real draw — internationally accredited hospitals, English-speaking staff, minimal waiting times and costs 50-80% lower than Singapore. Penang is considered Malaysia's medical tourism capital. KL's specialist hospitals handle complex oncology, cardiac surgery and orthopaedics of international standard.",
    publicHealthcare: "Public government hospitals provide basic to specialist care at subsidised rates for citizens. Foreigners pay unsubsidised rates: outpatient €15-30, hospitalisation RM200-500/day. Quality varies — teaching hospitals (HUKM, PPUM) are good for specialist care; rural district hospitals are more limited. Waiting times at public hospitals can be several hours for non-emergency cases. Most expats use public facilities only for emergencies or when private is not appropriate.",
    privateHealthcare: "Malaysia's private hospitals are the main choice for expats. Major groups: Pantai (KPJ subsidiary), Prince Court Medical Centre, Gleneagles KL, Sunway Medical Centre, Penang Adventist Hospital, Island Hospital Penang. Consultation fees: GP RM50-150, specialist RM100-250. Hospitalisation: RM400-1,200/night. Common procedures cost 40-70% less than Singapore. English is universally used in private hospitals. Many hospitals have dedicated international patient centres.",
    hospitals: [
      { name: "Prince Court Medical Centre", city: "Kuala Lumpur", type: "private", jciAccredited: true, specialties: ["Oncology", "Cardiac Surgery", "Neurology", "Orthopaedics", "Fertility"], avgConsultation: "RM 120-300", notes: "KL's most premium private hospital. JCI accredited. Excellent international patient service. Regularly wins Asia's best hospital awards. Prince Court concierge service renowned." },
      { name: "Gleneagles Hospital Kuala Lumpur", city: "Kuala Lumpur", type: "private", jciAccredited: true, specialties: ["Cardiology", "Oncology", "Paediatrics", "Orthopaedics", "Women's Health"], avgConsultation: "RM 100-250", notes: "IHH Healthcare group (Parkway Singapore parent). Reliable JCI-accredited care with strong cardiac and paediatric departments." },
      { name: "Island Hospital Penang", city: "Penang", type: "private", jciAccredited: false, specialties: ["Oncology", "Cardiac", "Orthopaedics", "Fertility", "Minimally Invasive Surgery"], avgConsultation: "RM 80-200", notes: "Penang's largest private hospital. Outstanding oncology department. Major medical tourism centre drawing patients from Sumatra and South Asia. Excellent value." },
      { name: "Hospital Kuala Lumpur (HKL)", city: "Kuala Lumpur", type: "public", jciAccredited: false, specialties: ["Emergency", "Burns", "Toxicology", "Transplantation", "General Medicine"], avgConsultation: "RM 10-50 (foreigners pay more)", notes: "Malaysia's largest public hospital. National referral centre for complex cases. Good emergency department. Long waiting times for non-urgent care." },
    ],
    insurancePlans: [
      { provider: "Prudential PruMedic Plus", plan: "Gold/Platinum", monthlyPremium: "RM 150-350", coverage: "Private hospital, inpatient, outpatient rider available", notes: "Malaysia's most popular private health insurer for expats and professionals. Reliable claims. Accepted at all major private hospitals." },
      { provider: "AIA Malaysia HealthShield", plan: "Premier/Prestige", monthlyPremium: "RM 120-300", coverage: "Hospital and surgical, specialist consultation rider", notes: "AIA is Malaysia's largest life insurer. Strong hospital network. Good for families with children." },
      { provider: "AXA Affin MedFirst", plan: "Plus", monthlyPremium: "RM 130-280", coverage: "In and outpatient, dental rider, annual limit RM500,000", notes: "Good international coverage for expats who travel. Competitive premiums. Strong Southeast Asia network." },
      { provider: "Cigna Global (International)", plan: "Silver/Gold", monthlyPremium: "USD 150-350", coverage: "International coverage, repatriation, regional and worldwide options", notes: "Best for expats on international assignments expecting to relocate. Covers Malaysia plus home country and beyond." },
    ],
    typicalCosts: [
      { procedure: "GP consultation (private)", publicCost: "RM 15-40 (public clinic)", privateCost: "RM 50-150" },
      { procedure: "Specialist consultation", publicCost: "RM 20-80 (public, unsubsidised)", privateCost: "RM 100-250" },
      { procedure: "Emergency room", publicCost: "RM 15-50", privateCost: "RM 150-400" },
      { procedure: "Blood test panel", publicCost: "RM 30-80", privateCost: "RM 60-200" },
      { procedure: "Dental cleaning", publicCost: "RM 30-60 (government clinic)", privateCost: "RM 80-180" },
      { procedure: "Appendectomy", publicCost: "RM 500-1,500", privateCost: "RM 5,000-12,000" },
      { procedure: "MRI scan", publicCost: "RM 400-800", privateCost: "RM 600-1,500" },
      { procedure: "Childbirth (natural)", publicCost: "RM 200-500", privateCost: "RM 3,000-8,000" },
    ],
    pharmacies: "Malaysian pharmacies are widely available — Guardian and Watsons operate hundreds of outlets, with independent pharmacies in every neighbourhood. Many medications are available over the counter that would require prescription elsewhere. Pharmacist advice is generally sound and English is spoken. Prices are very affordable: paracetamol RM 2-5, antibiotics RM 15-40. Prescription medications are dispensed at hospital pharmacies and registered retail pharmacies. 24-hour pharmacies at private hospitals. Online delivery (DoctorOnCall) is growing.",
    emergencyNumbers: [
      { service: "Ambulance/Emergency", number: "999 or 112" },
      { service: "Police", number: "999" },
      { service: "Fire", number: "994" },
      { service: "Prince Court Medical Centre 24hr", number: "+60 3-2160 0000" },
      { service: "Gleneagles KL 24hr", number: "+60 3-4141 3000" },
    ],
    expatsAdvice: [
      "Private health insurance is strongly recommended — premiums are very affordable (RM 150-350/month) and cover excellent private hospitals",
      "Penang is Asia's medical tourism capital — consider travelling there for specialist procedures if based elsewhere in Malaysia",
      "The MM2H visa requires proof of health insurance — ensure your policy meets the immigration requirements",
      "Private hospital costs in Malaysia are 40-70% lower than equivalent care in Singapore — many Singaporeans come to Malaysia for dental work and some procedures",
      "Keep your insurance card, policy number and hospital's international patient centre number accessible on your phone",
      "Air quality during haze season (August-October) can trigger respiratory issues — have an inhaler or antihistamine supply",
      "Many Malaysian private hospitals have excellent online booking systems — use these to avoid waiting",
    ],
    faq: [
      { question: "Is Malaysian healthcare good enough for serious conditions?", answer: "For most conditions — yes, absolutely. Prince Court Medical Centre, Gleneagles KL, and Penang's Island Hospital handle complex oncology, cardiac surgery, orthopaedics and fertility treatment that would cost 3-5x as much in Singapore or the UK. Malaysia is a genuine medical tourism destination. For the most complex rare conditions, patients may choose to travel to Singapore's National University Hospital or overseas. But for 95% of medical situations expats encounter, Malaysia's private hospitals are excellent." },
      { question: "How does Malaysia compare to Thailand for medical tourism?", answer: "Both are excellent. Thailand's Bumrungrad International (Bangkok) is marginally ahead in international reputation and American/European patient infrastructure. Malaysia offers better English (near-universal vs patchy in Thailand), closer cultural links with Singapore, and equally competitive prices. Penang specifically is very strong for oncology. Choice often comes down to geographic convenience and specific treatment." },
    ],
  },

  colombia: {
    slug: "colombia",
    country: "Colombia",
    systemRating: 7,
    intro: "Colombia's healthcare system has undergone a dramatic transformation since the 1990s reforms. Today, coverage exceeds 95% of the population and the public-private hybrid system provides good care, particularly in major cities. Medellín in particular has built a reputation for high-quality, affordable healthcare — expats consistently cite good medical care as a key reason for choosing Colombia. Private healthcare costs are very affordable by international standards.",
    systemOverview: "Colombia has a two-tier system: the Contributory Regime (Régimen Contributivo) for employed workers and their families, and the Subsidised Regime (Régimen Subsidiado) for low-income residents. Both systems use Health Promoting Entities (EPS — Entidades Promotoras de Salud) as insurance administrators. Foreigners on visas can join the contributory regime. The quality of care varies significantly between EPS providers and between cities. Major private hospitals in Medellín (Clínica Las Américas), Bogotá (Fundación Santa Fe) and Cartagena provide excellent private care.",
    publicHealthcare: "The public system (EPS-regulated) provides comprehensive coverage including preventive care, GP, specialist referrals, emergency care, maternity, surgery and rehabilitation. Quality is uneven — some EPS providers are significantly better than others (Sura and Sanitas consistently rate highest). Urban hospitals are generally well-equipped. Rural facilities can be limited. For expats, the main challenge is navigating EPS bureaucracy and waiting times. Emergency care at major hospitals is generally reliable.",
    privateHealthcare: "Private healthcare in Colombia is excellent value. Private GP consultation: COP 60,000-150,000 ($15-38). Specialist: COP 100,000-300,000 ($25-75). Full private insurance plans start from $40-100/month. Clinica Las Americas and Clinica El Rosario in Medellín, Fundación Santa Fe and Clínica del Country in Bogotá provide care rivalling the best Latin American institutions. Medical tourism from the US is growing for dental work, cosmetic surgery and joint replacements.",
    hospitals: [
      { name: "Fundación Santa Fe de Bogotá", city: "Bogotá", type: "private", jciAccredited: true, specialties: ["Transplantation", "Cardiac Surgery", "Oncology", "Neurology", "Orthopaedics"], avgConsultation: "COP 100,000-250,000", notes: "Colombia's most internationally acclaimed hospital. JCI accredited. Strong transplant programme. Excellent English-speaking staff. Often ranked Colombia's best hospital." },
      { name: "Clínica Las Américas", city: "Medellín", type: "private", jciAccredited: true, specialties: ["Cardiac", "Oncology", "Orthopaedics", "Minimally Invasive Surgery", "Emergency"], avgConsultation: "COP 80,000-200,000", notes: "Medellín's top private hospital. JCI accredited. Popular with expats. Excellent emergency department. Reasonable prices by international standards." },
      { name: "Clínica del Country", city: "Bogotá", type: "private", jciAccredited: false, specialties: ["Cardiology", "Orthopaedics", "General Surgery", "Paediatrics", "Internal Medicine"], avgConsultation: "COP 80,000-180,000", notes: "Long-established Bogotá private hospital. Particularly strong for cardiology. Popular with Bogotá's upper-middle class and expats." },
      { name: "Hospital Universitario San Vicente Fundación", city: "Medellín", type: "public", jciAccredited: false, specialties: ["Emergency", "Transplantation", "Burns", "Trauma", "Complex Medicine"], avgConsultation: "COP 20,000-60,000 (foreigners)", notes: "Medellín's main public university hospital. Best for complex emergency and trauma care. Can be busy and waiting times long for non-emergencies." },
    ],
    insurancePlans: [
      { provider: "Sura EPS", plan: "Contributory Regime Plan", monthlyPremium: "12.5% of declared income (employer/employee split)", coverage: "Full statutory plan — GP, specialist, hospital, maternity, medications", notes: "Colombia's highest-rated EPS. Best service, least bureaucracy, English-speaking support in major cities. Required for legal residency in many visa categories." },
      { provider: "Colsanitas", plan: "International Private Plan", monthlyPremium: "COP 200,000-500,000/month ($50-130)", coverage: "Private clinic access, specialists, hospitalisation, dental", notes: "Popular private insurance for middle-class Colombians and expats. Good network of private clinics and hospitals nationwide." },
      { provider: "AXA Colpatria", plan: "International Health", monthlyPremium: "USD 100-250", coverage: "International coverage, repatriation, emergency worldwide", notes: "Best for expats who travel or may relocate. International plan with Colombia as home base." },
      { provider: "Cigna Global", plan: "Silver International", monthlyPremium: "USD 120-280", coverage: "Full international coverage including the US (if needed)", notes: "Best for US expats who want US-compatible coverage alongside Colombian care." },
    ],
    typicalCosts: [
      { procedure: "GP consultation (private)", publicCost: "COP 15,000-30,000 (EPS)", privateCost: "COP 60,000-150,000" },
      { procedure: "Specialist consultation", publicCost: "COP 20,000-50,000 (EPS)", privateCost: "COP 100,000-300,000" },
      { procedure: "Emergency room", publicCost: "Included in EPS", privateCost: "COP 100,000-400,000" },
      { procedure: "Blood test panel", publicCost: "COP 10,000-40,000", privateCost: "COP 40,000-120,000" },
      { procedure: "Dental cleaning (private)", publicCost: "COP 30,000-80,000", privateCost: "COP 80,000-200,000" },
      { procedure: "Appendectomy", publicCost: "COP 500,000-1,500,000 (EPS)", privateCost: "COP 3,000,000-8,000,000" },
      { procedure: "Hip replacement", publicCost: "Covered by EPS", privateCost: "COP 25,000,000-50,000,000" },
      { procedure: "MRI scan", publicCost: "COP 200,000-500,000", privateCost: "COP 400,000-900,000" },
    ],
    pharmacies: "Pharmacy chains in Colombia include Drogas La Rebaja, Cruz Verde, Farmatodo and Locatel. Independent pharmacies are on virtually every city block. Many prescription medications can be purchased without a prescription at pharmacies — antibiotics, painkillers and dermatologicals are commonly sold over the counter. Prices are very affordable. Generic medications (genéricos) are excellent quality and widely available. Hospital pharmacies often have the best stock for specialist medications. 24-hour pharmacies in major cities.",
    emergencyNumbers: [
      { service: "General Emergency", number: "123" },
      { service: "Police", number: "112" },
      { service: "Red Cross Ambulance", number: "132" },
      { service: "Clínica Las Américas (Medellín 24hr)", number: "+57 4 342 2000" },
      { service: "Fundación Santa Fe (Bogotá 24hr)", number: "+57 1 603 0303" },
    ],
    expatsAdvice: [
      "Join Sura EPS if you're employed or declare income — it's the best public insurer and required for most visa renewals",
      "Clínica Las Américas in Medellín has an excellent international patient programme with English-speaking staff",
      "Dental work in Colombia is outstanding value — complex work (implants, veneers, braces) costs 60-80% less than the US/UK",
      "Medellín specifically has built a cluster of high-quality private clinics that attract medical tourism from North America",
      "Keep a 1-month supply of any critical medications — some specialty drugs can have supply interruptions",
      "Water quality varies — filter or bottle water in some cities; gastrointestinal bugs are common for new arrivals",
      "Get a yellow fever vaccination before arriving (required by Colombian entry regulations for some nationalities)",
    ],
    faq: [
      { question: "Do I need EPS insurance as a foreign resident?", answer: "Colombian visa holders who plan to stay long-term are typically required to affiliate with the contributory health regime (EPS) or demonstrate equivalent private health insurance. The Sura and Sanitas EPS are the most reliable options for expats. Monthly contributions are based on declared income — typically 12.5% of declared earnings split between employer and employee, or 12.5% paid by the individual if self-employed. Good private insurance (Colsanitas, AXA) can substitute for EPS in some visa categories." },
      { question: "Is healthcare in Medellín really good enough for expats?", answer: "Yes — significantly better than most people expect. JCI-accredited Clínica Las Américas and Clínica CES are world-class by any standard. Medellín's medical tourism for aesthetics and dentistry is a legitimate industry with many US patients. For serious conditions including cardiac surgery, oncology and orthopaedics, quality is comparable to mid-tier US hospitals at 10-20% of the cost. Fundación Santa Fe in Bogotá is the clear #1 for complex cases nationally." },
    ],
  },

  mexico: {
    slug: "mexico",
    country: "Mexico",
    systemRating: 7,
    intro: "Mexico offers a significant range in healthcare quality — from world-class private hospitals in Mexico City and Monterrey that attract American medical tourists, to rural public facilities that are basic and understaffed. For expats in major cities, excellent private healthcare is available at 40-60% of US prices. Dental tourism from the US to border cities (Tijuana, Los Algodones, Nuevo Laredo) is massive. Mexico City's private hospital sector is genuinely impressive.",
    systemOverview: "Mexico has a fragmented healthcare system with multiple parallel structures: IMSS (social security for formal sector workers), ISSSTE (for government employees), Pemex/military health services, and the private sector. IMSS covers ~50 million workers; INSABI (formerly Seguro Popular) theoretically covers the uninsured population. Foreigners can join IMSS voluntarily (voluntary enrollment) or use private insurance. Quality in the private sector is good to excellent; the public sector is variable and often underfunded. Major private hospitals in CDMX and Monterrey treat American patients seeking cost savings.",
    publicHealthcare: "IMSS (Instituto Mexicano del Seguro Social) is Mexico's largest health insurer. Formal sector employers enrol employees and pay contributions. Foreigners can join IMSS voluntarily for ~$300-400/year. Quality varies enormously by facility — urban IMSS hospitals in CDMX are generally well-equipped; rural clinics can be limited. Waiting times can be long. Most expats use IMSS as backup or for chronic condition management while using private for acute care.",
    privateHealthcare: "Private healthcare in Mexico is the main choice for expats and middle-class Mexicans. Hospitals Ángeles (largest private group), Médica Sur, Hospital ABC (American British Cowdray Hospital) and Christus Muguerza are the top private providers. GP consultation: MXN 300-700 ($15-35). Specialist: MXN 600-1,500 ($30-75). Hospitalisation: MXN 3,000-8,000/night ($150-400). Private health insurance: $60-200/month.",
    hospitals: [
      { name: "Hospital ABC (American British Cowdray)", city: "Mexico City", type: "private", jciAccredited: true, specialties: ["Oncology", "Cardiac", "Neurology", "Transplantation", "Trauma"], avgConsultation: "MXN 800-2,000", notes: "CDMX's most prestigious private hospital founded by the British and American communities. English-speaking staff. JCI accredited. Top choice for many US and Canadian expats." },
      { name: "Médica Sur", city: "Mexico City", type: "private", jciAccredited: true, specialties: ["Cardiology", "Hepatology", "Oncology", "Orthopaedics", "Reproductive Medicine"], avgConsultation: "MXN 700-1,800", notes: "Mexico's most comprehensive private hospital complex. Exceptional hepatology (liver disease) department. JCI accredited. Strong international patient programme." },
      { name: "Christus Muguerza Alta Especialidad", city: "Monterrey", type: "private", jciAccredited: true, specialties: ["Cardiac", "Oncology", "Transplantation", "Neuroscience", "Trauma"], avgConsultation: "MXN 600-1,500", notes: "Monterrey's top private hospital. Part of US Christus Health network. Directly comparable to US hospital standards. Strong for US patients in northern Mexico." },
      { name: "Hospital General de México", city: "Mexico City", type: "public", jciAccredited: false, specialties: ["Emergency", "General Medicine", "Surgery", "Paediatrics", "Traumatology"], avgConsultation: "MXN 50-200 (foreigners)", notes: "CDMX's largest public hospital. Good for complex emergency cases. Significant wait times. Used by IMSS overflow. Teaching hospital with strong medical training." },
    ],
    insurancePlans: [
      { provider: "IMSS Voluntary", plan: "Seguro de Salud para la Familia", monthlyPremium: "~MXN 5,000-7,000/year ($250-350)", coverage: "Full IMSS coverage — GP, specialist, hospital, maternity, medications", notes: "Very affordable for the coverage. Quality is variable but a solid safety net. Requires annual renewal. Application at local IMSS office." },
      { provider: "GNP Salud (Grupo Nacional Provincial)", plan: "Salud Individual / Familiar", monthlyPremium: "MXN 1,200-3,500/month ($60-175)", coverage: "Private hospital coverage, specialist network, dental add-on", notes: "Mexico's most popular private health insurer. Wide hospital network including all major Ángeles hospitals. Good value for Mexico-based cover." },
      { provider: "AXA Seguros", plan: "Internacionales Plus", monthlyPremium: "MXN 1,500-4,000/month ($75-200)", coverage: "International coverage, repatriation, CDMX and beyond", notes: "Good for expats who travel internationally. Some US coverage included. Reliable claims service." },
      { provider: "Cigna Global", plan: "Silver International", monthlyPremium: "USD 120-300", coverage: "Worldwide coverage including the US", notes: "Best for American expats needing US healthcare compatibility. More expensive but genuine cross-border coverage." },
    ],
    typicalCosts: [
      { procedure: "GP consultation (private)", publicCost: "MXN 50-200 (IMSS)", privateCost: "MXN 300-700" },
      { procedure: "Specialist consultation", publicCost: "MXN 100-400 (IMSS)", privateCost: "MXN 600-1,500" },
      { procedure: "Emergency room", publicCost: "MXN 0-500 (IMSS)", privateCost: "MXN 1,500-5,000" },
      { procedure: "Blood test panel", publicCost: "MXN 100-300", privateCost: "MXN 400-1,200" },
      { procedure: "Dental cleaning (private)", publicCost: "MXN 100-300 (IMSS)", privateCost: "MXN 400-1,000" },
      { procedure: "Appendectomy", publicCost: "MXN 0-2,000 (IMSS)", privateCost: "MXN 40,000-100,000" },
      { procedure: "Hip replacement", publicCost: "Covered by IMSS", privateCost: "MXN 80,000-200,000" },
      { procedure: "MRI scan", publicCost: "MXN 500-1,500 (IMSS)", privateCost: "MXN 3,000-8,000" },
    ],
    pharmacies: "Mexican pharmacies are ubiquitous — Farmacias del Ahorro, Benavides, Guadalajara are the main chains. Thousands of independent pharmacies in every city. Many medications sold without prescription that would require one elsewhere — antibiotics, sleep aids and anxiety medication can be purchased over the counter. Generic medications (genéricos intercambiables) are excellent quality and very affordable. IMSS members get medications at IMSS pharmacies at no cost. Pharmacy 24-hour service widely available. Pharmacies commonly have a consulting room with a doctor on duty (médico de guardia) for free basic consultations.",
    emergencyNumbers: [
      { service: "General Emergency", number: "911" },
      { service: "Cruz Roja Mexicana Ambulance", number: "065" },
      { service: "Hospital ABC (CDMX 24hr)", number: "+52 55 5230 8000" },
      { service: "Médica Sur (CDMX 24hr)", number: "+52 55 5424 7200" },
      { service: "IMSS Medical Emergency", number: "800 623 2323" },
    ],
    expatsAdvice: [
      "Hospital ABC in CDMX is the top choice for English-speaking expats — it has roots in the British and American communities and English is universally spoken",
      "IMSS voluntary enrollment (~$300/year) is excellent value as a backup coverage for hospitalisation even if you use private for outpatient care",
      "Dental tourism in Mexico is world-class — Los Algodones near the US border is the world's largest dental tourism destination",
      "Air quality in CDMX can be severe — those with asthma or respiratory conditions should have medication ready and monitor AQI apps",
      "Pharmacies with a consulting doctor (médico de guardia) offer free basic consultations — good for minor ailments",
      "GNP Salud and AXA provide solid national coverage and are accepted at all major private hospitals",
      "Mexico City sits at 2,240m altitude — altitude sickness (soroche) affects some new arrivals for 2-4 weeks",
    ],
    faq: [
      { question: "Is IMSS worth it for expats?", answer: "Yes — IMSS voluntary enrollment costs approximately MXN 5,000-7,000/year ($250-350) and provides comprehensive public healthcare coverage. Quality of IMSS facilities varies: CDMX specialty hospitals (Siglo XXI, La Raza) are well-equipped; regional facilities less so. Most expats use IMSS as a safety net for expensive hospitalisations while maintaining private insurance or paying out-of-pocket for GP and specialist consultations in private clinics." },
      { question: "What is healthcare like in Mexico City for expats?", answer: "Excellent in the private sector. Hospital ABC and Médica Sur are genuinely world-class institutions. Private GP consultation is very affordable (MXN 400-700). Specialist access is quick without referrals. English is widely spoken at private hospitals and major clinics. Many US-trained doctors practice in CDMX. The combination of quality, convenience and cost makes CDMX healthcare a draw for American expats seeking affordable but excellent care." },
    ],
  },

  india: {
    slug: "india",
    country: "India",
    systemRating: 6,
    intro: "India presents a stark healthcare dichotomy: world-class private hospitals in major cities that attract medical tourists from across South Asia and the Middle East, alongside an overwhelmed public system. For expats in Delhi, Mumbai, Bangalore or Chennai, excellent private healthcare is available at remarkably low cost. Major Indian hospital groups — Apollo, Fortis, Max, Manipal — operate internationally accredited facilities with English-speaking staff that match international standards at 10-30% of US prices.",
    systemOverview: "India's healthcare is divided between a large but underfunded public sector and a growing private sector. Government hospitals (All India Institute of Medical Sciences, AIIMS, and state government hospitals) provide subsidised care but are extremely overcrowded. The private sector has consolidated into large hospital groups: Apollo Hospitals (50+ hospitals), Fortis Healthcare (35+ hospitals), Max Healthcare, Manipal and Narayana Health. These private groups have driven India's emergence as a medical tourism destination. For expats in urban India, private hospitals are the primary choice.",
    publicHealthcare: "Government hospitals and the CGHS (Central Government Health Scheme) provide care to government employees. State government hospitals are available to all at minimal cost. AIIMS Delhi is a world-class public institution but overwhelmed — waiting times of months are common for elective procedures. Public hospitals are generally not the preferred choice for expats except for emergency care when the nearest private hospital is not accessible.",
    privateHealthcare: "India's private hospital sector is excellent in major cities. Apollo Hospitals and Fortis are JCI-accredited at multiple sites. Specialist consultations: ₹500-2,000 ($6-24). Hospitalisation: ₹3,000-15,000/night ($36-180). Complex surgery costs 10-20% of comparable US prices. Medical tourism specialties: cardiac surgery, orthopaedic procedures, cancer treatment, fertility, organ transplantation. English is universally spoken at private hospitals in major cities.",
    hospitals: [
      { name: "Apollo Hospitals Chennai", city: "Chennai", type: "private", jciAccredited: true, specialties: ["Cardiac Surgery", "Liver Transplantation", "Oncology", "Orthopaedics", "Neuroscience"], avgConsultation: "₹800-2,000", notes: "India's most internationally recognised hospital. JCI accredited. South Asia's largest liver transplant programme. Medical tourism hub for South Asian, Middle Eastern and African patients." },
      { name: "Fortis Memorial Research Institute", city: "Gurugram (Delhi NCR)", type: "private", jciAccredited: true, specialties: ["Neuro-Oncology", "Bone Marrow Transplant", "Cardiac", "Orthopaedics", "Robotics Surgery"], avgConsultation: "₹600-1,800", notes: "India's most technologically advanced hospital. JCI accredited. Robotic surgery for complex cases. Strong for neurosurgery and transplantation. Delhi expat community favourite." },
      { name: "Narayana Health City", city: "Bangalore", type: "private", jciAccredited: true, specialties: ["Cardiac Surgery", "Paediatric Cardiac", "Oncology", "Renal Transplant", "Neurology"], avgConsultation: "₹500-1,500", notes: "World-famous for affordable cardiac surgery — performs more heart surgeries than any other institution globally. JCI accredited. Founded on a mission of accessible healthcare." },
      { name: "AIIMS (All India Institute of Medical Sciences)", city: "New Delhi", type: "public", jciAccredited: false, specialties: ["Rare Diseases", "Advanced Surgery", "Research", "Burns", "Neuroscience"], avgConsultation: "₹30-200", notes: "India's most prestigious public medical institution. World-class specialists but extreme overcrowding. Best for rare diseases with no private alternative. Very long waiting times." },
    ],
    insurancePlans: [
      { provider: "Cigna TTK (Cigna India)", plan: "ProHealth Plus", monthlyPremium: "₹1,500-4,000", coverage: "In and outpatient, hospital network, no-claim bonus", notes: "Best international insurer in India for expats. Accepted at all major private hospitals. English-language support. Reliable international claims." },
      { provider: "Niva Bupa (formerly Max Bupa)", plan: "ReAssure 2.0", monthlyPremium: "₹1,200-3,500", coverage: "Comprehensive inpatient, outpatient, restore benefit", notes: "India's top-rated domestic health insurer. Wide hospital network. Good claims settlement ratio. Popular with both Indian professionals and expats." },
      { provider: "AXA Global Healthcare", plan: "International health plan", monthlyPremium: "USD 150-350", coverage: "Worldwide coverage including India and repatriation", notes: "Best for expats on international assignments. Covers India as base but portable when relocating." },
      { provider: "Star Health Insurance", plan: "Comprehensive Plan", monthlyPremium: "₹1,000-3,000", coverage: "Inpatient only, network hospitals, limited outpatient", notes: "India's largest standalone health insurer. Very affordable. Good for supplementary hospital coverage alongside international plan." },
    ],
    typicalCosts: [
      { procedure: "GP consultation (private)", publicCost: "₹30-100 (government clinic)", privateCost: "₹500-1,500" },
      { procedure: "Specialist consultation", publicCost: "₹50-200 (government)", privateCost: "₹600-2,000" },
      { procedure: "Emergency room", publicCost: "₹0-200", privateCost: "₹2,000-8,000" },
      { procedure: "Blood test panel", publicCost: "₹200-600", privateCost: "₹500-2,000" },
      { procedure: "Dental cleaning (private)", publicCost: "₹100-300", privateCost: "₹500-1,500" },
      { procedure: "Cardiac bypass surgery", publicCost: "₹50,000-150,000", privateCost: "₹300,000-600,000 ($3,600-7,200)" },
      { procedure: "Hip replacement", publicCost: "₹30,000-80,000", privateCost: "₹300,000-600,000 ($3,600-7,200)" },
      { procedure: "MRI scan", publicCost: "₹1,500-4,000", privateCost: "₹4,000-12,000" },
    ],
    pharmacies: "India has over 900,000 registered pharmacies — one of the world's largest pharmaceutical markets. Major chains: Apollo Pharmacy, MedPlus, Frank Ross. Independent pharmacies on every street corner. India is a global generic drug manufacturing hub — medications are extremely affordable. Many prescription medications can be obtained without a prescription at local pharmacies. Quality of generic medications is generally good (DCGI-regulated). Online pharmacies (Netmeds, PharmEasy, 1mg) are excellent for home delivery and often 20-40% cheaper than retail. 24-hour pharmacies at major hospitals.",
    emergencyNumbers: [
      { service: "National Emergency", number: "112" },
      { service: "Ambulance", number: "108" },
      { service: "Apollo Hospitals 24hr", number: "1860-500-1066" },
      { service: "Fortis Hospitals 24hr", number: "1800-500-6084" },
      { service: "Max Hospitals 24hr", number: "+91 11 2651 5050" },
    ],
    expatsAdvice: [
      "International health insurance is essential — Indian domestic insurance may not cover all expat needs or repatriation",
      "Apollo, Fortis, Max and Narayana hospitals have dedicated international patient departments with English-speaking coordinators",
      "Delhi Belly (gastrointestinal infections) affects nearly all new arrivals — carry oral rehydration salts and antibiotics (ciprofloxacin) on prescription",
      "Air quality in Delhi and Mumbai can be extremely poor (AQI 200-500 in winter) — consider N95 masks and air purifiers",
      "Malaria prophylaxis is recommended for some regions — consult a travel doctor before moving to India",
      "Dengue fever is prevalent in monsoon season (July-October) — use DEET mosquito repellent and sleep under nets",
      "Water quality: drink only bottled or filtered water; ice outside major hotels can be unsafe",
    ],
    faq: [
      { question: "Is Indian healthcare actually good?", answer: "In the private sector in major cities — yes, genuinely excellent. Apollo Chennai performs more cardiac surgeries than most European cardiac centres. Narayana Health's cardiac bypass costs $3,000-4,000 vs $80,000-150,000 in the US with equivalent outcomes. JCI-accredited Indian hospitals meet international quality standards. The caveat: quality varies dramatically between cities and between public and private. Expats should always use reputable private hospitals in urban centres." },
      { question: "What vaccinations do I need to live in India?", answer: "Recommended vaccinations for India include: Hepatitis A and B, Typhoid, Japanese Encephalitis (for rural areas), Rabies (pre-exposure for outdoor activities), Tetanus-diphtheria booster. Malaria prophylaxis depends on region (ask a travel medicine doctor). Yellow Fever vaccination required if arriving from a Yellow Fever endemic country. Ensure your routine vaccinations (MMR, flu, COVID) are up to date. Consult a travel clinic 6-8 weeks before departure." },
    ],
  },
};
