export const ALL_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
  "El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
  "Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos",
  "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi",
  "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau",
  "Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal",
  "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea",
  "South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan",
  "Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe"
];

export const CURRENCIES = [
  { code: "USD", label: "USD — US Dollar" },
  { code: "EUR", label: "EUR — Euro" },
  { code: "GBP", label: "GBP — British Pound" },
  { code: "NGN", label: "NGN — Nigerian Naira" },
  { code: "CAD", label: "CAD — Canadian Dollar" },
  { code: "AUD", label: "AUD — Australian Dollar" },
  { code: "INR", label: "INR — Indian Rupee" },
  { code: "BRL", label: "BRL — Brazilian Real" },
  { code: "MXN", label: "MXN — Mexican Peso" },
  { code: "SGD", label: "SGD — Singapore Dollar" },
];

export const PURPOSES = ["Tourism", "Work", "Study", "Permanent Relocation", "Retirement", "Digital Nomad"];

export const GUIDE_COUNTRIES = [
  // Original 20
  "Portugal","Spain","UAE","Canada","Germany","Netherlands","Georgia","Thailand",
  "Mexico","Colombia","Estonia","Japan","Australia","Brazil","Singapore",
  "South Africa","Malaysia","Poland","Costa Rica","New Zealand",
  // New 30
  "Italy","France","Turkey","Indonesia","Vietnam","India","Argentina","Chile",
  "Greece","Czech Republic","Croatia","Serbia","Romania","Bulgaria","Hungary",
  "Ireland","Sweden","Norway","Denmark","Finland",
  "Philippines","Cambodia","Sri Lanka","Nepal","Morocco",
  "Panama","Uruguay","Ecuador","Peru","Kenya"
];

export const GUIDE_CITY_SLUGS = [
  "bangkok","chiang-mai","bali","medellín","mexico-city","buenos-aires","santiago",
  "lisbon","porto","barcelona","berlin","amsterdam","prague","vienna","budapest",
  "dubai","singapore","kuala-lumpur","ho-chi-minh-city","taipei",
  "cape-town","tbilisi","tallinn","istanbul","athens"
];

export const BEST_CATEGORY_SLUGS = [
  "cheapest-countries-in-europe",
  "best-countries-for-digital-nomads",
  "best-countries-for-retirement",
  "easiest-work-visas",
  "best-countries-for-us-passport",
  "best-countries-for-uk-passport",
  "best-countries-for-nigerian-passport",
  "best-countries-for-remote-workers",
  "safest-countries-to-live",
  "best-countries-for-students",
];

export const SCHOOLS_SLUGS = ["germany", "portugal", "thailand", "uae", "canada", "australia", "netherlands", "spain", "japan", "singapore"];

export const HEALTHCARE_SLUGS = ["thailand", "portugal", "uae", "germany", "spain", "singapore", "malaysia", "colombia", "mexico", "india"];

export const EXPAT_SLUGS = ["portugal", "spain", "thailand", "uae", "germany", "georgia", "colombia", "mexico", "malaysia", "singapore"];

export const COMPARE_SLUGS = [
  "portugal-vs-spain",
  "thailand-vs-bali",
  "dubai-vs-singapore",
  "mexico-vs-colombia",
  "germany-vs-netherlands",
  "canada-vs-australia",
  "georgia-vs-estonia",
  "portugal-vs-georgia",
];

export const COST_INDEX_DATA = [
  { country: "Georgia", score: 32, monthly: "$700", tier: "budget" },
  { country: "Vietnam", score: 35, monthly: "$750", tier: "budget" },
  { country: "Cambodia", score: 37, monthly: "$800", tier: "budget" },
  { country: "Nepal", score: 38, monthly: "$700", tier: "budget" },
  { country: "Indonesia (Bali)", score: 40, monthly: "$900", tier: "budget" },
  { country: "Thailand", score: 42, monthly: "$950", tier: "budget" },
  { country: "Sri Lanka", score: 43, monthly: "$900", tier: "budget" },
  { country: "Philippines", score: 44, monthly: "$1,000", tier: "budget" },
  { country: "Colombia", score: 46, monthly: "$1,100", tier: "budget" },
  { country: "Ecuador", score: 47, monthly: "$1,100", tier: "budget" },
  { country: "Morocco", score: 48, monthly: "$1,000", tier: "budget" },
  { country: "Peru", score: 49, monthly: "$1,100", tier: "budget" },
  { country: "Mexico", score: 52, monthly: "$1,400", tier: "mid" },
  { country: "Bulgaria", score: 53, monthly: "$1,300", tier: "mid" },
  { country: "Romania", score: 54, monthly: "$1,300", tier: "mid" },
  { country: "Malaysia", score: 55, monthly: "$1,400", tier: "mid" },
  { country: "Serbia", score: 56, monthly: "$1,400", tier: "mid" },
  { country: "Hungary", score: 57, monthly: "$1,500", tier: "mid" },
  { country: "Turkey", score: 58, monthly: "$1,400", tier: "mid" },
  { country: "Poland", score: 59, monthly: "$1,600", tier: "mid" },
  { country: "Czech Republic", score: 61, monthly: "$1,700", tier: "mid" },
  { country: "Croatia", score: 62, monthly: "$1,800", tier: "mid" },
  { country: "Estonia", score: 63, monthly: "$1,800", tier: "mid" },
  { country: "Portugal", score: 64, monthly: "$2,000", tier: "mid" },
  { country: "Greece", score: 65, monthly: "$1,900", tier: "mid" },
  { country: "South Africa", score: 58, monthly: "$1,500", tier: "mid" },
  { country: "Argentina", score: 50, monthly: "$1,200", tier: "mid" },
  { country: "Spain", score: 68, monthly: "$2,100", tier: "high" },
  { country: "Germany", score: 72, monthly: "$2,400", tier: "high" },
  { country: "Netherlands", score: 75, monthly: "$2,800", tier: "high" },
  { country: "France", score: 74, monthly: "$2,600", tier: "high" },
  { country: "Ireland", score: 78, monthly: "$3,000", tier: "high" },
  { country: "Japan", score: 70, monthly: "$2,200", tier: "high" },
  { country: "Canada", score: 76, monthly: "$3,200", tier: "high" },
  { country: "Australia", score: 79, monthly: "$3,400", tier: "high" },
  { country: "UAE (Dubai)", score: 77, monthly: "$3,500", tier: "high" },
  { country: "Singapore", score: 88, monthly: "$4,200", tier: "premium" },
  { country: "Switzerland", score: 95, monthly: "$5,500", tier: "premium" },
  { country: "Norway", score: 92, monthly: "$5,000", tier: "premium" },
  { country: "Denmark", score: 89, monthly: "$4,500", tier: "premium" },
];
