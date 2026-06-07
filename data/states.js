// Comprehensive Indian State & UT Legal Data
// All 28 States + 8 Union Territories

export const states = [
  // --- STATES ---
  {
    id: "andhra-pradesh", name: "Andhra Pradesh", abbr: "AP", type: "state",
    capital: "Amaravati", highCourt: "Andhra Pradesh High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "1% registration fee; women get no concession" },
    laborLaw: { minWage: "₹10,400–₹13,000/mo", shopAct: "AP Shops & Establishments Act, 1988", factoryThreshold: "10+ workers with power" },
    rera: { authority: "AP RERA", website: "rera.ap.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "State-run retail through AP Beverages Corporation" },
    gstProfTax: "₹2,500/yr (max)", rocJurisdiction: "ROC Hyderabad",
    specialLaws: ["AP Land Reforms Act", "AP Building Rules", "AP Assigned Lands Act"],
    keyIndustries: ["Pharmaceuticals", "IT/ITES", "Agriculture", "Aquaculture"],
    environmentalBody: "AP State Pollution Control Board"
  },
  {
    id: "arunachal-pradesh", name: "Arunachal Pradesh", abbr: "AR", type: "state",
    capital: "Itanagar", highCourt: "Gauhati High Court (Itanagar Bench)",
    stampDuty: { residential: "6%", commercial: "6%", notes: "Tribal land transfer restricted under Inner Line Permit" },
    laborLaw: { minWage: "₹8,000–₹10,000/mo", shopAct: "Arunachal Pradesh Shops & Commercial Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Permitted", policy: "Regulated sale with local brew exemptions" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Inner Line Permit regulations", "Customary tribal law", "BEFR 1873"],
    keyIndustries: ["Hydropower", "Tourism", "Horticulture", "Forestry"],
    environmentalBody: "Arunachal Pradesh State Pollution Control Board"
  },
  {
    id: "assam", name: "Assam", abbr: "AS", type: "state",
    capital: "Dispur", highCourt: "Gauhati High Court",
    stampDuty: { residential: "8.25%", commercial: "8.25%", notes: "Highest in NE; includes urban areas surcharge" },
    laborLaw: { minWage: "₹8,000–₹10,500/mo", shopAct: "Assam Shops & Establishments Act, 1971", factoryThreshold: "10+ workers" },
    rera: { authority: "Assam RERA", website: "rera.assam.gov.in", established: "2020" },
    excise: { status: "Permitted", policy: "Liberal policy; country liquor and foreign liquor both allowed" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Assam Land Revenue Regulation", "Sixth Schedule Areas", "Assam Tea Plantations PF Act"],
    keyIndustries: ["Tea", "Oil & Gas", "Silk", "Tourism"],
    environmentalBody: "Assam State Pollution Control Board"
  },
  {
    id: "bihar", name: "Bihar", abbr: "BR", type: "state",
    capital: "Patna", highCourt: "Patna High Court",
    stampDuty: { residential: "6.3%", commercial: "6.3%", notes: "5.7% stamp duty + 0.6% surcharge; women get 0.3% concession" },
    laborLaw: { minWage: "₹7,800–₹11,000/mo", shopAct: "Bihar Shops & Establishments Act, 1953", factoryThreshold: "10+ workers" },
    rera: { authority: "Bihar RERA", website: "rera.bihar.gov.in", established: "2017" },
    excise: { status: "Prohibition", policy: "Complete ban since April 2016 under Bihar Prohibition & Excise Act" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Patna",
    specialLaws: ["Bihar Prohibition & Excise Act 2016", "Bihar Land Reforms Act", "Bihar Special Courts Act"],
    keyIndustries: ["Agriculture", "Food Processing", "Textiles", "Sugar"],
    environmentalBody: "Bihar State Pollution Control Board"
  },
  {
    id: "chhattisgarh", name: "Chhattisgarh", abbr: "CG", type: "state",
    capital: "Raipur", highCourt: "Chhattisgarh High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Women get 1% concession in urban areas" },
    laborLaw: { minWage: "₹8,500–₹12,000/mo", shopAct: "CG Shops & Establishments Act, 1958", factoryThreshold: "10+ workers" },
    rera: { authority: "CG RERA", website: "rera.cgstate.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "State-controlled with licensed private retail" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Gwalior",
    specialLaws: ["CG Land Revenue Code", "Scheduled Area regulations", "PESA Act implementation"],
    keyIndustries: ["Steel", "Mining", "Power", "Rice"],
    environmentalBody: "CG Environment Conservation Board"
  },
  {
    id: "goa", name: "Goa", abbr: "GA", type: "state",
    capital: "Panaji", highCourt: "Bombay High Court (Goa Bench)",
    stampDuty: { residential: "3.5%", commercial: "3.5%", notes: "Among lowest in India; Portuguese Civil Code influence" },
    laborLaw: { minWage: "₹10,000–₹13,500/mo", shopAct: "Goa Shops & Establishments Act, 1973", factoryThreshold: "10+ workers" },
    rera: { authority: "Goa RERA", website: "rera.goa.gov.in", established: "2017" },
    excise: { status: "Liberal", policy: "Most liberal excise policy; no dry days; lowest liquor taxes" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Mumbai",
    specialLaws: ["Goa Civil Code (Uniform)", "Portuguese Civil Code remnants", "Goa Land Development Code"],
    keyIndustries: ["Tourism", "Mining", "Fisheries", "Pharmaceuticals"],
    environmentalBody: "Goa State Pollution Control Board"
  },
  {
    id: "gujarat", name: "Gujarat", abbr: "GJ", type: "state",
    capital: "Gandhinagar", highCourt: "Gujarat High Court",
    stampDuty: { residential: "4.9%", commercial: "4.9%", notes: "3.5% stamp + 1% registration + 0.4% surcharge" },
    laborLaw: { minWage: "₹10,500–₹13,500/mo", shopAct: "Gujarat Shops & Establishments Act, 2019", factoryThreshold: "20+ workers (relaxed)" },
    rera: { authority: "Gujarat RERA (GujRERA)", website: "gujrera.gujarat.gov.in", established: "2017" },
    excise: { status: "Prohibition", policy: "Complete prohibition since 1960 under Gujarat Prohibition Act; health permits available" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Ahmedabad",
    specialLaws: ["Gujarat Prohibition Act 1949", "Gujarat GIDC Act", "Gujarat SEZ Act", "Gujarat Industrial Policy"],
    keyIndustries: ["Petrochemicals", "Textiles", "Diamonds", "Pharma", "Ports"],
    environmentalBody: "Gujarat Pollution Control Board"
  },
  {
    id: "haryana", name: "Haryana", abbr: "HR", type: "state",
    capital: "Chandigarh", highCourt: "Punjab & Haryana High Court",
    stampDuty: { residential: "7%", commercial: "7%", notes: "Among highest; 5% stamp + 2% surcharges; women get 1% concession" },
    laborLaw: { minWage: "₹10,500–₹14,500/mo", shopAct: "Haryana Shops & Commercial Establishments Act, 1958", factoryThreshold: "10+ workers" },
    rera: { authority: "HRERA (Gurugram & Panchkula)", website: "haryanarera.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "High excise revenue state; major liquor production hub" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Delhi",
    specialLaws: ["Haryana Urban Development Authority Act", "Haryana Enterprise Promotion Act", "Punjab Land Alienation Act (applies)"],
    keyIndustries: ["Automobiles", "IT/ITES (Gurugram)", "Agriculture", "Textiles"],
    environmentalBody: "Haryana State Pollution Control Board"
  },
  {
    id: "himachal-pradesh", name: "Himachal Pradesh", abbr: "HP", type: "state",
    capital: "Shimla", highCourt: "Himachal Pradesh High Court",
    stampDuty: { residential: "5%", commercial: "6%", notes: "Concession for rural areas; non-HP residents face restrictions" },
    laborLaw: { minWage: "₹8,000–₹11,000/mo", shopAct: "HP Shops & Commercial Establishments Act, 1969", factoryThreshold: "10+ workers" },
    rera: { authority: "HP RERA", website: "hprera.nic.in", established: "2017" },
    excise: { status: "Permitted", policy: "Regulated; permits required for purchase" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Chandigarh",
    specialLaws: ["HP Tenancy & Land Reforms Act", "HP Town & Country Planning Act", "Non-HP land purchase restrictions"],
    keyIndustries: ["Tourism", "Hydropower", "Horticulture (Apple)", "Pharmaceuticals"],
    environmentalBody: "HP State Pollution Control Board"
  },
  {
    id: "jharkhand", name: "Jharkhand", abbr: "JH", type: "state",
    capital: "Ranchi", highCourt: "Jharkhand High Court",
    stampDuty: { residential: "4%", commercial: "5%", notes: "Among lowest; tribal land has separate restrictions" },
    laborLaw: { minWage: "₹8,500–₹11,500/mo", shopAct: "Jharkhand Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Jharkhand RERA", website: "jharera.jharkhand.gov.in", established: "2018" },
    excise: { status: "Permitted", policy: "Licensed retail; country liquor widely available" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Patna",
    specialLaws: ["Chotanagpur Tenancy Act", "Santhal Pargana Tenancy Act", "PESA Act implementation", "Tribal land inalienability"],
    keyIndustries: ["Mining (Coal, Iron)", "Steel", "Forestry", "Agriculture"],
    environmentalBody: "Jharkhand State Pollution Control Board"
  },
  {
    id: "karnataka", name: "Karnataka", abbr: "KA", type: "state",
    capital: "Bengaluru", highCourt: "Karnataka High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "5% stamp + 1% registration + 0.1% cess; e-stamping mandatory" },
    laborLaw: { minWage: "₹11,000–₹15,000/mo", shopAct: "Karnataka Shops & Commercial Establishments Act, 1961", factoryThreshold: "10+ workers" },
    rera: { authority: "Karnataka RERA (K-RERA)", website: "rera.karnataka.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "MSIL (state monopoly retail); high taxes; bar license reform" },
    gstProfTax: "₹2,400/yr", rocJurisdiction: "ROC Bengaluru",
    specialLaws: ["Karnataka Land Reforms Act", "BBMP Act", "Karnataka Industrial Areas Development Act", "Karnataka Stamp Act"],
    keyIndustries: ["IT/ITES", "Biotechnology", "Aerospace", "Coffee"],
    environmentalBody: "Karnataka State Pollution Control Board"
  },
  {
    id: "kerala", name: "Kerala", abbr: "KL", type: "state",
    capital: "Thiruvananthapuram", highCourt: "Kerala High Court",
    stampDuty: { residential: "8%", commercial: "8%", notes: "6% stamp + 2% registration; among highest in South India" },
    laborLaw: { minWage: "₹11,000–₹16,000/mo", shopAct: "Kerala Shops & Commercial Establishments Act, 1960", factoryThreshold: "10+ workers" },
    rera: { authority: "K-RERA", website: "rera.kerala.gov.in", established: "2018" },
    excise: { status: "Restricted", policy: "Only 5-star hotels and Bevco outlets; no bar licenses below 5-star" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Ernakulam",
    specialLaws: ["Kerala Land Reforms Act", "Kerala Municipality Act", "Kerala Conservation of Paddy Land Act"],
    keyIndustries: ["Tourism", "IT/ITES", "Remittances", "Spices", "Coir"],
    environmentalBody: "Kerala State Pollution Control Board"
  },
  {
    id: "madhya-pradesh", name: "Madhya Pradesh", abbr: "MP", type: "state",
    capital: "Bhopal", highCourt: "Madhya Pradesh High Court",
    stampDuty: { residential: "7.5%", commercial: "7.5%", notes: "5% stamp + 2.5% collector rates; women get 1% concession" },
    laborLaw: { minWage: "₹8,500–₹12,000/mo", shopAct: "MP Shops & Establishments Act, 1958", factoryThreshold: "20+ workers (relaxed)" },
    rera: { authority: "MP RERA", website: "rera.mp.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "Licensed retail; country liquor regulated separately" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Gwalior",
    specialLaws: ["MP Land Revenue Code", "MP Accommodation Control Act", "PESA Act areas"],
    keyIndustries: ["Agriculture", "Textiles", "Mining", "IT (Indore hub)"],
    environmentalBody: "MP Pollution Control Board"
  },
  {
    id: "maharashtra", name: "Maharashtra", abbr: "MH", type: "state",
    capital: "Mumbai", highCourt: "Bombay High Court",
    stampDuty: { residential: "6%", commercial: "6%", notes: "5% stamp + 1% metro cess (Mumbai); women get 1% concession; e-stamping mandatory" },
    laborLaw: { minWage: "₹12,000–₹17,000/mo", shopAct: "Maharashtra Shops & Establishments Act, 2017", factoryThreshold: "10+ workers" },
    rera: { authority: "MahaRERA", website: "maharera.mahaonline.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "Liberal; state excise is major revenue source; regulated retail" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Mumbai / ROC Pune",
    specialLaws: ["Maharashtra Ownership Flats Act (MOFA)", "MRTP Act", "Maharashtra Tenancy Act", "MIDC Act", "DCR (Development Control Regulations)"],
    keyIndustries: ["Financial Services", "IT/ITES", "Manufacturing", "Entertainment"],
    environmentalBody: "Maharashtra Pollution Control Board"
  },
  {
    id: "manipur", name: "Manipur", abbr: "MN", type: "state",
    capital: "Imphal", highCourt: "Manipur High Court",
    stampDuty: { residential: "7%", commercial: "7%", notes: "Tribal areas have separate land laws" },
    laborLaw: { minWage: "₹7,500–₹9,500/mo", shopAct: "Manipur Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Partial Prohibition", policy: "Manipur Liquor Prohibition Act (in hills); valley areas permitted" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["AFSPA (certain areas)", "Customary law in hill districts", "Inner Line Permit"],
    keyIndustries: ["Handloom", "Agriculture", "Fisheries"],
    environmentalBody: "Manipur State Pollution Control Board"
  },
  {
    id: "meghalaya", name: "Meghalaya", abbr: "ML", type: "state",
    capital: "Shillong", highCourt: "Meghalaya High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Sixth Schedule areas; customary community land ownership" },
    laborLaw: { minWage: "₹8,000–₹10,500/mo", shopAct: "Meghalaya Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Permitted", policy: "Regulated; traditional rice beer is exempt" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Sixth Schedule of Constitution", "Autonomous District Council laws", "Matrilineal inheritance (Khasi/Garo)"],
    keyIndustries: ["Mining (Coal, Limestone)", "Tourism", "Agriculture"],
    environmentalBody: "Meghalaya State Pollution Control Board"
  },
  {
    id: "mizoram", name: "Mizoram", abbr: "MZ", type: "state",
    capital: "Aizawl", highCourt: "Gauhati High Court (Aizawl Bench)",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Inner Line Permit area; customary land law" },
    laborLaw: { minWage: "₹7,800–₹10,000/mo", shopAct: "Mizoram Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Prohibition", policy: "Total prohibition under Mizoram Liquor (Prohibition) Act, 2019" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Inner Line Permit", "Mizoram Liquor Prohibition Act", "Mizo customary law"],
    keyIndustries: ["Bamboo", "Agriculture", "Handloom"],
    environmentalBody: "Mizoram State Pollution Control Board"
  },
  {
    id: "nagaland", name: "Nagaland", abbr: "NL", type: "state",
    capital: "Kohima", highCourt: "Gauhati High Court (Kohima Bench)",
    stampDuty: { residential: "6%", commercial: "6%", notes: "Article 371(A) special status; customary law governs land" },
    laborLaw: { minWage: "₹7,500–₹9,500/mo", shopAct: "Nagaland Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Prohibition", policy: "Total prohibition under Nagaland Liquor Total Prohibition Act, 1989" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Article 371(A) protections", "Naga customary law", "Village council jurisdiction"],
    keyIndustries: ["Agriculture", "Tourism", "Handicrafts"],
    environmentalBody: "Nagaland State Pollution Control Board"
  },
  {
    id: "odisha", name: "Odisha", abbr: "OD", type: "state",
    capital: "Bhubaneswar", highCourt: "Orissa High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "3-5% depending on area; e-stamping mandatory" },
    laborLaw: { minWage: "₹8,000–₹11,500/mo", shopAct: "Odisha Shops & Commercial Establishments Act, 1956", factoryThreshold: "10+ workers" },
    rera: { authority: "Odisha RERA", website: "rera.odisha.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "State-controlled retail outlets; OSMCL distribution" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Cuttack",
    specialLaws: ["Odisha Land Reforms Act", "Scheduled Area regulations", "PESA Act areas", "Odisha Industrial Infrastructure Development Corp Act"],
    keyIndustries: ["Steel", "Mining", "Seafood", "Handloom"],
    environmentalBody: "Odisha State Pollution Control Board"
  },
  {
    id: "punjab", name: "Punjab", abbr: "PB", type: "state",
    capital: "Chandigarh", highCourt: "Punjab & Haryana High Court",
    stampDuty: { residential: "7%", commercial: "7%", notes: "6% stamp + 1% registration; women get 2% concession in rural" },
    laborLaw: { minWage: "₹10,000–₹13,500/mo", shopAct: "Punjab Shops & Commercial Establishments Act, 1958", factoryThreshold: "10+ workers" },
    rera: { authority: "Punjab RERA", website: "rera.punjab.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "Major excise revenue; large liquor industry" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Chandigarh",
    specialLaws: ["Punjab Land Alienation Act", "Punjab Security of Land Tenures Act", "Punjab Village Common Lands Act"],
    keyIndustries: ["Agriculture", "Food Processing", "Textiles", "Sports Goods"],
    environmentalBody: "Punjab Pollution Control Board"
  },
  {
    id: "rajasthan", name: "Rajasthan", abbr: "RJ", type: "state",
    capital: "Jaipur", highCourt: "Rajasthan High Court",
    stampDuty: { residential: "6%", commercial: "6%", notes: "5% stamp + 1% surcharge; women get 1% concession" },
    laborLaw: { minWage: "₹8,500–₹12,500/mo", shopAct: "Rajasthan Shops & Commercial Establishments Act, 1958", factoryThreshold: "10+ workers" },
    rera: { authority: "Rajasthan RERA", website: "rera.rajasthan.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "State-run (RSBCL) + private licensed retail" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Jaipur",
    specialLaws: ["Rajasthan Tenancy Act", "Rajasthan Colonization Act", "RIICO Act"],
    keyIndustries: ["Mining (Marble, Sandstone)", "Tourism", "Textiles", "Gems & Jewelry"],
    environmentalBody: "Rajasthan State Pollution Control Board"
  },
  {
    id: "sikkim", name: "Sikkim", abbr: "SK", type: "state",
    capital: "Gangtok", highCourt: "Sikkim High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Revenue Order No.1 restricts land to Sikkimese subjects" },
    laborLaw: { minWage: "₹8,500–₹11,000/mo", shopAct: "Sikkim Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Permitted", policy: "Regulated; local brew traditions preserved" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Revenue Order No.1 (land restrictions)", "Old Laws (special provisions)", "Article 371F protections"],
    keyIndustries: ["Tourism", "Organic Farming", "Hydropower", "Pharmaceuticals"],
    environmentalBody: "Sikkim State Pollution Control Board"
  },
  {
    id: "tamil-nadu", name: "Tamil Nadu", abbr: "TN", type: "state",
    capital: "Chennai", highCourt: "Madras High Court",
    stampDuty: { residential: "7%", commercial: "7%", notes: "4% stamp + 1% transfer duty + 1% registration + 1% surcharge" },
    laborLaw: { minWage: "₹10,000–₹15,000/mo", shopAct: "Tamil Nadu Shops & Establishments Act, 1947", factoryThreshold: "10+ workers" },
    rera: { authority: "TNRERA", website: "tnrera.in", established: "2017" },
    excise: { status: "Permitted", policy: "TASMAC monopoly (state-run retail); highest excise collection in India" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Chennai / ROC Coimbatore",
    specialLaws: ["TN Land Reforms Act", "CMDA Act", "SIPCOT Act", "TN Protection of Tank Irrigation Act"],
    keyIndustries: ["Automobiles", "IT/ITES", "Textiles", "Manufacturing"],
    environmentalBody: "TN Pollution Control Board"
  },
  {
    id: "telangana", name: "Telangana", abbr: "TS", type: "state",
    capital: "Hyderabad", highCourt: "Telangana High Court",
    stampDuty: { residential: "6%", commercial: "6%", notes: "4% stamp + 0.5% transfer duty + 1.5% registration; Dharani portal mandatory" },
    laborLaw: { minWage: "₹10,000–₹14,000/mo", shopAct: "Telangana Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Telangana RERA", website: "rera.telangana.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "Licensed retail; high revenue; nightlife-friendly" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Hyderabad",
    specialLaws: ["Dharani portal for land records", "TS-iPASS (industrial clearances)", "HMDA Act"],
    keyIndustries: ["IT/ITES", "Pharmaceuticals", "Biotechnology", "Defense"],
    environmentalBody: "Telangana State Pollution Control Board"
  },
  {
    id: "tripura", name: "Tripura", abbr: "TR", type: "state",
    capital: "Agartala", highCourt: "Tripura High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Tribal (ADC) areas have separate regulations" },
    laborLaw: { minWage: "₹7,500–₹10,000/mo", shopAct: "Tripura Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Tripura RERA", website: "rera.tripura.gov.in", established: "2019" },
    excise: { status: "Permitted", policy: "Regulated sale; local rice beer tradition" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Shillong",
    specialLaws: ["Tripura Land Revenue & Land Reforms Act", "Autonomous District Council laws"],
    keyIndustries: ["Rubber", "Tea", "Natural Gas", "Bamboo"],
    environmentalBody: "Tripura State Pollution Control Board"
  },
  {
    id: "uttar-pradesh", name: "Uttar Pradesh", abbr: "UP", type: "state",
    capital: "Lucknow", highCourt: "Allahabad High Court",
    stampDuty: { residential: "7%", commercial: "7%", notes: "5% stamp + 2% registration; women get 1% concession; highest revenue state" },
    laborLaw: { minWage: "₹9,000–₹13,000/mo", shopAct: "UP Shops & Commercial Establishments Act, 1962", factoryThreshold: "20+ workers (relaxed in 2020)" },
    rera: { authority: "UP RERA", website: "up-rera.in", established: "2017" },
    excise: { status: "Permitted", policy: "Major revenue source; state-run + private licensed retail" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Kanpur / ROC Noida",
    specialLaws: ["UP Zamindari Abolition Act", "YEIDA/NOIDA Acts", "UP Revenue Code", "UP Industrial Area Development Act"],
    keyIndustries: ["IT/ITES (Noida)", "Agriculture", "Handicrafts", "Leather"],
    environmentalBody: "UP Pollution Control Board"
  },
  {
    id: "uttarakhand", name: "Uttarakhand", abbr: "UK", type: "state",
    capital: "Dehradun", highCourt: "Uttarakhand High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Concessions for women and rural areas; hill area restrictions" },
    laborLaw: { minWage: "₹9,000–₹12,000/mo", shopAct: "Uttarakhand Shops & Commercial Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Uttarakhand RERA", website: "ukrera.org.in", established: "2017" },
    excise: { status: "Permitted", policy: "Regulated; army canteen proximity rules" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Kanpur",
    specialLaws: ["Uttarakhand Char Dham Devasthanam Act", "Land purchase restrictions for non-domiciles"],
    keyIndustries: ["Tourism", "Pharmaceuticals", "FMCG", "Hydropower"],
    environmentalBody: "Uttarakhand Environment Protection & Pollution Control Board"
  },
  {
    id: "west-bengal", name: "West Bengal", abbr: "WB", type: "state",
    capital: "Kolkata", highCourt: "Calcutta High Court",
    stampDuty: { residential: "6-7%", commercial: "7%", notes: "5-6% stamp + 1% registration; varies by property value slab" },
    laborLaw: { minWage: "₹9,000–₹13,000/mo", shopAct: "West Bengal Shops & Establishments Act, 1963", factoryThreshold: "10+ workers" },
    rera: { authority: "WB HIRA (Housing Industry Regulatory Authority)", website: "wbhira.gov.in", established: "2018" },
    excise: { status: "Permitted", policy: "State-controlled retail; WBSBCL distribution" },
    gstProfTax: "₹2,500/yr", rocJurisdiction: "ROC Kolkata",
    specialLaws: ["WB Land Reforms Act", "WB Tenancy Act", "WBIDC Act", "Kolkata Municipal Corporation Act"],
    keyIndustries: ["IT/ITES", "Jute", "Steel", "Leather", "Tea"],
    environmentalBody: "WB Pollution Control Board"
  },

  // --- UNION TERRITORIES ---
  {
    id: "andaman-nicobar", name: "Andaman & Nicobar Islands", abbr: "AN", type: "ut",
    capital: "Port Blair", highCourt: "Calcutta High Court (Circuit Bench)",
    stampDuty: { residential: "3%", commercial: "3%", notes: "Among lowest; land purchase restricted for non-locals" },
    laborLaw: { minWage: "₹9,000–₹12,000/mo", shopAct: "Central Shops & Establishments Act applies", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Permitted", policy: "Regulated; limited outlets" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Chennai",
    specialLaws: ["Andaman & Nicobar Protection of Aboriginal Tribes Regulation", "Restricted Area Permit"],
    keyIndustries: ["Tourism", "Fisheries", "Agriculture", "Naval Base"],
    environmentalBody: "A&N Islands Pollution Control Committee"
  },
  {
    id: "chandigarh", name: "Chandigarh", abbr: "CH", type: "ut",
    capital: "Chandigarh", highCourt: "Punjab & Haryana High Court",
    stampDuty: { residential: "6%", commercial: "6%", notes: "Central government administered; e-stamping available" },
    laborLaw: { minWage: "₹11,000–₹14,000/mo", shopAct: "Punjab Shops & Commercial Establishments Act applies", factoryThreshold: "10+ workers" },
    rera: { authority: "Chandigarh RERA", website: "chandigarhrera.in", established: "2017" },
    excise: { status: "Permitted", policy: "Licensed retail" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Chandigarh",
    specialLaws: ["Capital of Punjab & Haryana Act", "Chandigarh Estate Rules"],
    keyIndustries: ["IT/ITES", "Education", "Healthcare"],
    environmentalBody: "Chandigarh Pollution Control Committee"
  },
  {
    id: "dadra-nagar-haveli-daman-diu", name: "Dadra & Nagar Haveli and Daman & Diu", abbr: "DD", type: "ut",
    capital: "Daman", highCourt: "Bombay High Court",
    stampDuty: { residential: "3%", commercial: "3%", notes: "Low rates to attract investment" },
    laborLaw: { minWage: "₹9,500–₹12,000/mo", shopAct: "Central law applies with local modifications", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Permitted", policy: "Very low taxes; popular weekend destination from Gujarat" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Mumbai",
    specialLaws: ["Merged UT administration (2020)", "Industrial incentive schemes"],
    keyIndustries: ["Manufacturing", "Textiles", "Tourism"],
    environmentalBody: "DNH & DD Pollution Control Committee"
  },
  {
    id: "delhi", name: "Delhi (NCT)", abbr: "DL", type: "ut",
    capital: "New Delhi", highCourt: "Delhi High Court",
    stampDuty: { residential: "6%", commercial: "6%", notes: "4-6% stamp based on gender + 1% registration; women get 2% concession" },
    laborLaw: { minWage: "₹16,000–₹18,000/mo", shopAct: "Delhi Shops & Establishments Act, 1954", factoryThreshold: "10+ workers" },
    rera: { authority: "Delhi RERA", website: "rera.delhi.gov.in", established: "2017" },
    excise: { status: "Permitted", policy: "Privatized retail (2021-2024); currently mixed model" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Delhi",
    specialLaws: ["Delhi Development Act", "DDA Master Plan 2041", "Delhi Land Reforms Act", "Delhi Rent Control Act"],
    keyIndustries: ["Government", "IT/ITES", "Retail", "Real Estate"],
    environmentalBody: "Delhi Pollution Control Committee"
  },
  {
    id: "jammu-kashmir", name: "Jammu & Kashmir", abbr: "JK", type: "ut",
    capital: "Srinagar (Summer) / Jammu (Winter)", highCourt: "J&K and Ladakh High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Post-Article 370 abrogation, central laws now apply; domicile rules reformed" },
    laborLaw: { minWage: "₹8,500–₹12,000/mo", shopAct: "J&K Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "J&K RERA", website: "rerajk.in", established: "2020" },
    excise: { status: "Permitted", policy: "Regulated; restricted in certain areas" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Jammu",
    specialLaws: ["Post-370 abrogation legal transition", "J&K Reorganization Act 2019", "New domicile rules", "Land grant rules (revised)"],
    keyIndustries: ["Tourism", "Horticulture (Apple/Saffron)", "Handicrafts", "Hydropower"],
    environmentalBody: "J&K State Pollution Control Board"
  },
  {
    id: "ladakh", name: "Ladakh", abbr: "LA", type: "ut",
    capital: "Leh", highCourt: "J&K and Ladakh High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Newest UT; regulations still evolving; tribal council authority" },
    laborLaw: { minWage: "₹8,000–₹11,000/mo", shopAct: "Central laws being extended", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Restricted", policy: "Limited; climate and cultural restrictions" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Jammu",
    specialLaws: ["J&K Reorganization Act 2019", "Ladakh Autonomous Hill Development Council Act", "Sixth Schedule demand ongoing"],
    keyIndustries: ["Tourism", "Defense", "Pashmina", "Solar Energy"],
    environmentalBody: "Ladakh Pollution Control Committee"
  },
  {
    id: "lakshadweep", name: "Lakshadweep", abbr: "LD", type: "ut",
    capital: "Kavaratti", highCourt: "Kerala High Court",
    stampDuty: { residential: "3%", commercial: "3%", notes: "Very restricted land market; mostly community-owned" },
    laborLaw: { minWage: "₹8,000–₹10,000/mo", shopAct: "Central law applies", factoryThreshold: "10+ workers" },
    rera: { authority: "Not yet operational", website: "N/A", established: "Pending" },
    excise: { status: "Prohibition", policy: "Complete prohibition; permit system for tourists on select islands" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Ernakulam",
    specialLaws: ["Lakshadweep (Land Revenue and Tenancy) Regulation", "Restricted Area Permit required"],
    keyIndustries: ["Fisheries", "Coconut", "Tourism (limited)"],
    environmentalBody: "Lakshadweep Pollution Control Committee"
  },
  {
    id: "puducherry", name: "Puducherry", abbr: "PY", type: "ut",
    capital: "Puducherry", highCourt: "Madras High Court",
    stampDuty: { residential: "5%", commercial: "5%", notes: "Includes Karaikal, Mahe, Yanam enclaves with separate rules; French civil code remnants" },
    laborLaw: { minWage: "₹9,000–₹12,000/mo", shopAct: "Puducherry Shops & Establishments Act", factoryThreshold: "10+ workers" },
    rera: { authority: "Puducherry RERA", website: "rera.py.gov.in", established: "2019" },
    excise: { status: "Permitted", policy: "Very low taxes; major hub for Tamil Nadu residents" },
    gstProfTax: "Not levied", rocJurisdiction: "ROC Chennai",
    specialLaws: ["French Civil Code remnants (certain areas)", "Puducherry Village & Commune Panchayats Act"],
    keyIndustries: ["Tourism", "Education", "Leather", "Manufacturing"],
    environmentalBody: "Puducherry Pollution Control Committee"
  }
];

// Due Diligence Chapters — Chapter-wise workflow
export const ddChapters = [
  {
    id: 1,
    title: "Corporate & Secretarial",
    icon: "🏛️",
    description: "Company incorporation documents, board composition & resolutions, ROC filings, shareholding pattern, statutory registers, and MCA compliance.",
    stateRelevance: "ROC jurisdiction varies by state; state-specific company registration incentives; Startup India state schemes differ.",
    checklist: [
      "Certificate of Incorporation & MoA/AoA",
      "Board & shareholder resolutions (past 5 years)",
      "ROC annual returns & compliance certificates",
      "Shareholding pattern & cap table",
      "Director KYC & DIN compliance",
      "Statutory registers (members, charges, directors)",
      "Foreign investment approvals (FEMA/RBI)"
    ],
    tags: ["MCA", "ROC", "Companies Act", "FEMA"]
  },
  {
    id: 2,
    title: "Contractual & Commercial",
    icon: "📜",
    description: "Material contracts, vendor/customer agreements, JVs, licensing agreements, distribution contracts, and supply chain arrangements.",
    stateRelevance: "Stamp duty on agreements varies by state; e-stamping requirements differ; contract enforcement timelines vary by High Court.",
    checklist: [
      "Top 20 customer & vendor contracts",
      "Joint venture & partnership agreements",
      "Licensing & franchise agreements",
      "Supply & distribution agreements",
      "Non-compete & non-solicitation clauses",
      "Related party transactions",
      "Assignment & change of control provisions"
    ],
    tags: ["Indian Contract Act", "Stamp Act", "Specific Relief Act"]
  },
  {
    id: 3,
    title: "Real Estate & Property",
    icon: "🏗️",
    description: "Title verification, encumbrances, lease deeds, land use conversion, RERA compliance, stamp duty, and property tax across jurisdictions.",
    stateRelevance: "Stamp duty rates vary 3-8.25% across states; land ceiling laws differ; RERA rules are state-specific; tenancy laws vary significantly.",
    checklist: [
      "Title deeds & chain of ownership (30 years)",
      "Encumbrance certificates",
      "Land use & conversion certificates",
      "Building plan approvals & OC/CC",
      "RERA registration status",
      "Lease agreements & rent details",
      "Property tax receipts",
      "Environmental clearances for land"
    ],
    tags: ["RERA", "Transfer of Property Act", "State Stamp Acts", "Land Revenue Codes"]
  },
  {
    id: 4,
    title: "Labor & Employment",
    icon: "👥",
    description: "Employment contracts, PF/ESI compliance, minimum wage adherence, shop & establishment registration, and labor law compliance across states.",
    stateRelevance: "Minimum wages set by each state; shop & establishment acts differ; factory thresholds vary; labor inspector jurisdiction is state-level.",
    checklist: [
      "Employment contracts & offer letters",
      "PF & ESI registration & compliance",
      "Minimum wage compliance (state-specific rates)",
      "Shop & Establishment registration",
      "Factory license (if applicable)",
      "Standing orders (certified)",
      "Sexual Harassment Committee (ICC) compliance",
      "Contract labor register & licenses",
      "Gratuity, bonus & leave records"
    ],
    tags: ["Code on Wages", "Industrial Relations Code", "Social Security Code", "OSH Code"]
  },
  {
    id: 5,
    title: "Intellectual Property",
    icon: "💡",
    description: "Trademark registrations, patent portfolio, copyright assignments, trade secrets, domain names, and IP licensing arrangements.",
    stateRelevance: "IP is a central subject but enforcement varies by state High Court; state innovation policies and IP subsidies differ.",
    checklist: [
      "Trademark registrations & applications",
      "Patent portfolio & prosecution status",
      "Copyright registrations & assignments",
      "Design registrations",
      "Trade secret & confidentiality policies",
      "Domain name portfolio",
      "IP assignment agreements from founders/employees",
      "Open source software compliance"
    ],
    tags: ["Trademarks Act", "Patents Act", "Copyright Act", "IT Act"]
  },
  {
    id: 6,
    title: "Litigation & Disputes",
    icon: "⚖️",
    description: "Pending litigation, contingent liabilities, arbitration proceedings, consumer complaints, regulatory actions, and show-cause notices.",
    stateRelevance: "Case pendency varies dramatically by state; High Court bench strength differs; state consumer commissions have varying disposal rates.",
    checklist: [
      "Pending civil & criminal cases",
      "Arbitration proceedings",
      "Consumer complaints (NCDRC/State/District)",
      "Labor court & tribunal matters",
      "Tax disputes & assessment orders",
      "Regulatory actions & show-cause notices",
      "NCLT/NCLAT proceedings",
      "Contingent liability assessment",
      "Legal opinions on material disputes"
    ],
    tags: ["CPC", "CrPC", "Arbitration Act", "Consumer Protection Act"]
  },
  {
    id: 7,
    title: "Tax & Financial",
    icon: "💰",
    description: "Direct tax compliance, GST returns, transfer pricing documentation, tax notices, financial statements audit, and debt structure.",
    stateRelevance: "GST registration per state; professional tax rates vary; state VAT legacy issues; stamp duty on financial instruments differs.",
    checklist: [
      "Income tax returns (5 years)",
      "GST registration & returns (all states)",
      "Transfer pricing documentation",
      "TDS/TCS compliance",
      "Professional tax registration (state-wise)",
      "Tax assessment orders & disputes",
      "Audited financial statements (5 years)",
      "Debt agreements & charge registrations",
      "Related party transaction disclosures"
    ],
    tags: ["Income Tax Act", "GST Act", "Transfer Pricing Rules"]
  },
  {
    id: 8,
    title: "Regulatory & Compliance",
    icon: "📋",
    description: "Sector-specific licenses, FEMA compliance, RBI approvals, SEBI regulations, environmental clearances, and state-specific permits.",
    stateRelevance: "Industry licenses are state-issued; pollution control boards are state-level; SEZ policies vary; single-window clearance systems differ by state.",
    checklist: [
      "Industry-specific licenses & permits",
      "FEMA/RBI compliance certificates",
      "SEBI compliance (if listed/investment)",
      "Food safety (FSSAI) licenses",
      "Drug licenses (if pharma)",
      "Telecom/ISP licenses",
      "Import-export licenses (IEC)",
      "State-specific trade licenses",
      "BIS certifications"
    ],
    tags: ["FEMA", "RBI Regulations", "SEBI Act", "Sector-specific laws"]
  },
  {
    id: 9,
    title: "Environmental & ESG",
    icon: "🌿",
    description: "Environmental clearances, pollution control consents, hazardous waste management, ESG policies, and carbon disclosure compliance.",
    stateRelevance: "State Pollution Control Boards have different thresholds; coastal zone regulations vary; EIA requirements differ by state.",
    checklist: [
      "Environmental clearance certificates",
      "Consent to Operate (CTO) from SPCB",
      "Consent to Establish (CTE) from SPCB",
      "Hazardous waste management authorization",
      "EIA reports (if applicable)",
      "Coastal Regulation Zone compliance",
      "Water & air pollution compliance",
      "ESG policy & reporting",
      "Carbon emission disclosures"
    ],
    tags: ["Environment Protection Act", "Water Act", "Air Act", "EIA Notification"]
  },
  {
    id: 10,
    title: "IT, Data Privacy & Cyber",
    icon: "🔒",
    description: "DPDP Act compliance, data processing agreements, cybersecurity policies, IT Act compliance, and cross-border data transfer mechanisms.",
    stateRelevance: "IT/ITES policies vary by state; state data centers have different regulations; state e-governance frameworks differ.",
    checklist: [
      "DPDP Act compliance assessment",
      "Privacy policy & consent mechanisms",
      "Data processing agreements",
      "Cross-border data transfer arrangements",
      "Cybersecurity policy & incident response",
      "IT Act Section 43A compliance",
      "ISO 27001 / SOC 2 certifications",
      "Data breach history & notifications",
      "Third-party data sharing agreements"
    ],
    tags: ["DPDP Act 2023", "IT Act 2000", "CERT-In Rules"]
  },
  {
    id: 11,
    title: "Insurance & Risk",
    icon: "🛡️",
    description: "Insurance coverage review, policy adequacy, claims history, key-man insurance, D&O liability coverage, and business continuity planning.",
    stateRelevance: "State-level insurance regulations minimal but disaster-prone regions need specific coverage; fire NOC rules vary by municipality.",
    checklist: [
      "All insurance policies in force",
      "Directors & Officers (D&O) liability insurance",
      "Key-man insurance",
      "Product liability insurance",
      "Professional indemnity insurance",
      "Fire & property insurance",
      "Claims history (5 years)",
      "Business continuity plan",
      "Workmen's compensation coverage"
    ],
    tags: ["Insurance Act", "IRDAI Regulations"]
  },
  {
    id: 12,
    title: "Anti-Corruption & FCPA",
    icon: "🚫",
    description: "Anti-bribery policies, prevention of corruption compliance, whistleblower mechanisms, political contribution disclosures, and FCPA/UK Bribery Act exposure.",
    stateRelevance: "State anti-corruption bureaus vary in activity; Lokayukta effectiveness differs; state vigilance commission jurisdiction varies.",
    checklist: [
      "Anti-bribery & anti-corruption policy",
      "Prevention of Corruption Act compliance",
      "FCPA / UK Bribery Act exposure assessment",
      "Political contributions disclosure",
      "Whistleblower mechanism & cases",
      "Third-party due diligence (agents/intermediaries)",
      "Gift & hospitality register",
      "Compliance training records",
      "Government contract compliance"
    ],
    tags: ["Prevention of Corruption Act", "FCPA", "Companies Act Sec 135"]
  }
];

// State comparison helper
export function getStateById(id) {
  return states.find(s => s.id === id);
}

export function getStatesByType(type) {
  return states.filter(s => s.type === type);
}

export function compareStates(id1, id2) {
  const s1 = getStateById(id1);
  const s2 = getStateById(id2);
  if (!s1 || !s2) return null;
  return { state1: s1, state2: s2 };
}
