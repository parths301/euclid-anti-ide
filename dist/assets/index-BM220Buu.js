(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();const v=[{id:"andhra-pradesh",name:"Andhra Pradesh",abbr:"AP",type:"state",capital:"Amaravati",highCourt:"Andhra Pradesh High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"1% registration fee; women get no concession"},laborLaw:{minWage:"₹10,400–₹13,000/mo",shopAct:"AP Shops & Establishments Act, 1988",factoryThreshold:"10+ workers with power"},rera:{authority:"AP RERA",website:"rera.ap.gov.in",established:"2017"},excise:{status:"Permitted",policy:"State-run retail through AP Beverages Corporation"},gstProfTax:"₹2,500/yr (max)",rocJurisdiction:"ROC Hyderabad",specialLaws:["AP Land Reforms Act","AP Building Rules","AP Assigned Lands Act"],keyIndustries:["Pharmaceuticals","IT/ITES","Agriculture","Aquaculture"],environmentalBody:"AP State Pollution Control Board"},{id:"arunachal-pradesh",name:"Arunachal Pradesh",abbr:"AR",type:"state",capital:"Itanagar",highCourt:"Gauhati High Court (Itanagar Bench)",stampDuty:{residential:"6%",commercial:"6%",notes:"Tribal land transfer restricted under Inner Line Permit"},laborLaw:{minWage:"₹8,000–₹10,000/mo",shopAct:"Arunachal Pradesh Shops & Commercial Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Permitted",policy:"Regulated sale with local brew exemptions"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Inner Line Permit regulations","Customary tribal law","BEFR 1873"],keyIndustries:["Hydropower","Tourism","Horticulture","Forestry"],environmentalBody:"Arunachal Pradesh State Pollution Control Board"},{id:"assam",name:"Assam",abbr:"AS",type:"state",capital:"Dispur",highCourt:"Gauhati High Court",stampDuty:{residential:"8.25%",commercial:"8.25%",notes:"Highest in NE; includes urban areas surcharge"},laborLaw:{minWage:"₹8,000–₹10,500/mo",shopAct:"Assam Shops & Establishments Act, 1971",factoryThreshold:"10+ workers"},rera:{authority:"Assam RERA",website:"rera.assam.gov.in",established:"2020"},excise:{status:"Permitted",policy:"Liberal policy; country liquor and foreign liquor both allowed"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Shillong",specialLaws:["Assam Land Revenue Regulation","Sixth Schedule Areas","Assam Tea Plantations PF Act"],keyIndustries:["Tea","Oil & Gas","Silk","Tourism"],environmentalBody:"Assam State Pollution Control Board"},{id:"bihar",name:"Bihar",abbr:"BR",type:"state",capital:"Patna",highCourt:"Patna High Court",stampDuty:{residential:"6.3%",commercial:"6.3%",notes:"5.7% stamp duty + 0.6% surcharge; women get 0.3% concession"},laborLaw:{minWage:"₹7,800–₹11,000/mo",shopAct:"Bihar Shops & Establishments Act, 1953",factoryThreshold:"10+ workers"},rera:{authority:"Bihar RERA",website:"rera.bihar.gov.in",established:"2017"},excise:{status:"Prohibition",policy:"Complete ban since April 2016 under Bihar Prohibition & Excise Act"},gstProfTax:"Not levied",rocJurisdiction:"ROC Patna",specialLaws:["Bihar Prohibition & Excise Act 2016","Bihar Land Reforms Act","Bihar Special Courts Act"],keyIndustries:["Agriculture","Food Processing","Textiles","Sugar"],environmentalBody:"Bihar State Pollution Control Board"},{id:"chhattisgarh",name:"Chhattisgarh",abbr:"CG",type:"state",capital:"Raipur",highCourt:"Chhattisgarh High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Women get 1% concession in urban areas"},laborLaw:{minWage:"₹8,500–₹12,000/mo",shopAct:"CG Shops & Establishments Act, 1958",factoryThreshold:"10+ workers"},rera:{authority:"CG RERA",website:"rera.cgstate.gov.in",established:"2017"},excise:{status:"Permitted",policy:"State-controlled with licensed private retail"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Gwalior",specialLaws:["CG Land Revenue Code","Scheduled Area regulations","PESA Act implementation"],keyIndustries:["Steel","Mining","Power","Rice"],environmentalBody:"CG Environment Conservation Board"},{id:"goa",name:"Goa",abbr:"GA",type:"state",capital:"Panaji",highCourt:"Bombay High Court (Goa Bench)",stampDuty:{residential:"3.5%",commercial:"3.5%",notes:"Among lowest in India; Portuguese Civil Code influence"},laborLaw:{minWage:"₹10,000–₹13,500/mo",shopAct:"Goa Shops & Establishments Act, 1973",factoryThreshold:"10+ workers"},rera:{authority:"Goa RERA",website:"rera.goa.gov.in",established:"2017"},excise:{status:"Liberal",policy:"Most liberal excise policy; no dry days; lowest liquor taxes"},gstProfTax:"Not levied",rocJurisdiction:"ROC Mumbai",specialLaws:["Goa Civil Code (Uniform)","Portuguese Civil Code remnants","Goa Land Development Code"],keyIndustries:["Tourism","Mining","Fisheries","Pharmaceuticals"],environmentalBody:"Goa State Pollution Control Board"},{id:"gujarat",name:"Gujarat",abbr:"GJ",type:"state",capital:"Gandhinagar",highCourt:"Gujarat High Court",stampDuty:{residential:"4.9%",commercial:"4.9%",notes:"3.5% stamp + 1% registration + 0.4% surcharge"},laborLaw:{minWage:"₹10,500–₹13,500/mo",shopAct:"Gujarat Shops & Establishments Act, 2019",factoryThreshold:"20+ workers (relaxed)"},rera:{authority:"Gujarat RERA (GujRERA)",website:"gujrera.gujarat.gov.in",established:"2017"},excise:{status:"Prohibition",policy:"Complete prohibition since 1960 under Gujarat Prohibition Act; health permits available"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Ahmedabad",specialLaws:["Gujarat Prohibition Act 1949","Gujarat GIDC Act","Gujarat SEZ Act","Gujarat Industrial Policy"],keyIndustries:["Petrochemicals","Textiles","Diamonds","Pharma","Ports"],environmentalBody:"Gujarat Pollution Control Board"},{id:"haryana",name:"Haryana",abbr:"HR",type:"state",capital:"Chandigarh",highCourt:"Punjab & Haryana High Court",stampDuty:{residential:"7%",commercial:"7%",notes:"Among highest; 5% stamp + 2% surcharges; women get 1% concession"},laborLaw:{minWage:"₹10,500–₹14,500/mo",shopAct:"Haryana Shops & Commercial Establishments Act, 1958",factoryThreshold:"10+ workers"},rera:{authority:"HRERA (Gurugram & Panchkula)",website:"haryanarera.gov.in",established:"2017"},excise:{status:"Permitted",policy:"High excise revenue state; major liquor production hub"},gstProfTax:"Not levied",rocJurisdiction:"ROC Delhi",specialLaws:["Haryana Urban Development Authority Act","Haryana Enterprise Promotion Act","Punjab Land Alienation Act (applies)"],keyIndustries:["Automobiles","IT/ITES (Gurugram)","Agriculture","Textiles"],environmentalBody:"Haryana State Pollution Control Board"},{id:"himachal-pradesh",name:"Himachal Pradesh",abbr:"HP",type:"state",capital:"Shimla",highCourt:"Himachal Pradesh High Court",stampDuty:{residential:"5%",commercial:"6%",notes:"Concession for rural areas; non-HP residents face restrictions"},laborLaw:{minWage:"₹8,000–₹11,000/mo",shopAct:"HP Shops & Commercial Establishments Act, 1969",factoryThreshold:"10+ workers"},rera:{authority:"HP RERA",website:"hprera.nic.in",established:"2017"},excise:{status:"Permitted",policy:"Regulated; permits required for purchase"},gstProfTax:"Not levied",rocJurisdiction:"ROC Chandigarh",specialLaws:["HP Tenancy & Land Reforms Act","HP Town & Country Planning Act","Non-HP land purchase restrictions"],keyIndustries:["Tourism","Hydropower","Horticulture (Apple)","Pharmaceuticals"],environmentalBody:"HP State Pollution Control Board"},{id:"jharkhand",name:"Jharkhand",abbr:"JH",type:"state",capital:"Ranchi",highCourt:"Jharkhand High Court",stampDuty:{residential:"4%",commercial:"5%",notes:"Among lowest; tribal land has separate restrictions"},laborLaw:{minWage:"₹8,500–₹11,500/mo",shopAct:"Jharkhand Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Jharkhand RERA",website:"jharera.jharkhand.gov.in",established:"2018"},excise:{status:"Permitted",policy:"Licensed retail; country liquor widely available"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Patna",specialLaws:["Chotanagpur Tenancy Act","Santhal Pargana Tenancy Act","PESA Act implementation","Tribal land inalienability"],keyIndustries:["Mining (Coal, Iron)","Steel","Forestry","Agriculture"],environmentalBody:"Jharkhand State Pollution Control Board"},{id:"karnataka",name:"Karnataka",abbr:"KA",type:"state",capital:"Bengaluru",highCourt:"Karnataka High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"5% stamp + 1% registration + 0.1% cess; e-stamping mandatory"},laborLaw:{minWage:"₹11,000–₹15,000/mo",shopAct:"Karnataka Shops & Commercial Establishments Act, 1961",factoryThreshold:"10+ workers"},rera:{authority:"Karnataka RERA (K-RERA)",website:"rera.karnataka.gov.in",established:"2017"},excise:{status:"Permitted",policy:"MSIL (state monopoly retail); high taxes; bar license reform"},gstProfTax:"₹2,400/yr",rocJurisdiction:"ROC Bengaluru",specialLaws:["Karnataka Land Reforms Act","BBMP Act","Karnataka Industrial Areas Development Act","Karnataka Stamp Act"],keyIndustries:["IT/ITES","Biotechnology","Aerospace","Coffee"],environmentalBody:"Karnataka State Pollution Control Board"},{id:"kerala",name:"Kerala",abbr:"KL",type:"state",capital:"Thiruvananthapuram",highCourt:"Kerala High Court",stampDuty:{residential:"8%",commercial:"8%",notes:"6% stamp + 2% registration; among highest in South India"},laborLaw:{minWage:"₹11,000–₹16,000/mo",shopAct:"Kerala Shops & Commercial Establishments Act, 1960",factoryThreshold:"10+ workers"},rera:{authority:"K-RERA",website:"rera.kerala.gov.in",established:"2018"},excise:{status:"Restricted",policy:"Only 5-star hotels and Bevco outlets; no bar licenses below 5-star"},gstProfTax:"Not levied",rocJurisdiction:"ROC Ernakulam",specialLaws:["Kerala Land Reforms Act","Kerala Municipality Act","Kerala Conservation of Paddy Land Act"],keyIndustries:["Tourism","IT/ITES","Remittances","Spices","Coir"],environmentalBody:"Kerala State Pollution Control Board"},{id:"madhya-pradesh",name:"Madhya Pradesh",abbr:"MP",type:"state",capital:"Bhopal",highCourt:"Madhya Pradesh High Court",stampDuty:{residential:"7.5%",commercial:"7.5%",notes:"5% stamp + 2.5% collector rates; women get 1% concession"},laborLaw:{minWage:"₹8,500–₹12,000/mo",shopAct:"MP Shops & Establishments Act, 1958",factoryThreshold:"20+ workers (relaxed)"},rera:{authority:"MP RERA",website:"rera.mp.gov.in",established:"2017"},excise:{status:"Permitted",policy:"Licensed retail; country liquor regulated separately"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Gwalior",specialLaws:["MP Land Revenue Code","MP Accommodation Control Act","PESA Act areas"],keyIndustries:["Agriculture","Textiles","Mining","IT (Indore hub)"],environmentalBody:"MP Pollution Control Board"},{id:"maharashtra",name:"Maharashtra",abbr:"MH",type:"state",capital:"Mumbai",highCourt:"Bombay High Court",stampDuty:{residential:"6%",commercial:"6%",notes:"5% stamp + 1% metro cess (Mumbai); women get 1% concession; e-stamping mandatory"},laborLaw:{minWage:"₹12,000–₹17,000/mo",shopAct:"Maharashtra Shops & Establishments Act, 2017",factoryThreshold:"10+ workers"},rera:{authority:"MahaRERA",website:"maharera.mahaonline.gov.in",established:"2017"},excise:{status:"Permitted",policy:"Liberal; state excise is major revenue source; regulated retail"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Mumbai / ROC Pune",specialLaws:["Maharashtra Ownership Flats Act (MOFA)","MRTP Act","Maharashtra Tenancy Act","MIDC Act","DCR (Development Control Regulations)"],keyIndustries:["Financial Services","IT/ITES","Manufacturing","Entertainment"],environmentalBody:"Maharashtra Pollution Control Board"},{id:"manipur",name:"Manipur",abbr:"MN",type:"state",capital:"Imphal",highCourt:"Manipur High Court",stampDuty:{residential:"7%",commercial:"7%",notes:"Tribal areas have separate land laws"},laborLaw:{minWage:"₹7,500–₹9,500/mo",shopAct:"Manipur Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Partial Prohibition",policy:"Manipur Liquor Prohibition Act (in hills); valley areas permitted"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["AFSPA (certain areas)","Customary law in hill districts","Inner Line Permit"],keyIndustries:["Handloom","Agriculture","Fisheries"],environmentalBody:"Manipur State Pollution Control Board"},{id:"meghalaya",name:"Meghalaya",abbr:"ML",type:"state",capital:"Shillong",highCourt:"Meghalaya High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Sixth Schedule areas; customary community land ownership"},laborLaw:{minWage:"₹8,000–₹10,500/mo",shopAct:"Meghalaya Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Permitted",policy:"Regulated; traditional rice beer is exempt"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Sixth Schedule of Constitution","Autonomous District Council laws","Matrilineal inheritance (Khasi/Garo)"],keyIndustries:["Mining (Coal, Limestone)","Tourism","Agriculture"],environmentalBody:"Meghalaya State Pollution Control Board"},{id:"mizoram",name:"Mizoram",abbr:"MZ",type:"state",capital:"Aizawl",highCourt:"Gauhati High Court (Aizawl Bench)",stampDuty:{residential:"5%",commercial:"5%",notes:"Inner Line Permit area; customary land law"},laborLaw:{minWage:"₹7,800–₹10,000/mo",shopAct:"Mizoram Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Prohibition",policy:"Total prohibition under Mizoram Liquor (Prohibition) Act, 2019"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Inner Line Permit","Mizoram Liquor Prohibition Act","Mizo customary law"],keyIndustries:["Bamboo","Agriculture","Handloom"],environmentalBody:"Mizoram State Pollution Control Board"},{id:"nagaland",name:"Nagaland",abbr:"NL",type:"state",capital:"Kohima",highCourt:"Gauhati High Court (Kohima Bench)",stampDuty:{residential:"6%",commercial:"6%",notes:"Article 371(A) special status; customary law governs land"},laborLaw:{minWage:"₹7,500–₹9,500/mo",shopAct:"Nagaland Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Prohibition",policy:"Total prohibition under Nagaland Liquor Total Prohibition Act, 1989"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Article 371(A) protections","Naga customary law","Village council jurisdiction"],keyIndustries:["Agriculture","Tourism","Handicrafts"],environmentalBody:"Nagaland State Pollution Control Board"},{id:"odisha",name:"Odisha",abbr:"OD",type:"state",capital:"Bhubaneswar",highCourt:"Orissa High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"3-5% depending on area; e-stamping mandatory"},laborLaw:{minWage:"₹8,000–₹11,500/mo",shopAct:"Odisha Shops & Commercial Establishments Act, 1956",factoryThreshold:"10+ workers"},rera:{authority:"Odisha RERA",website:"rera.odisha.gov.in",established:"2017"},excise:{status:"Permitted",policy:"State-controlled retail outlets; OSMCL distribution"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Cuttack",specialLaws:["Odisha Land Reforms Act","Scheduled Area regulations","PESA Act areas","Odisha Industrial Infrastructure Development Corp Act"],keyIndustries:["Steel","Mining","Seafood","Handloom"],environmentalBody:"Odisha State Pollution Control Board"},{id:"punjab",name:"Punjab",abbr:"PB",type:"state",capital:"Chandigarh",highCourt:"Punjab & Haryana High Court",stampDuty:{residential:"7%",commercial:"7%",notes:"6% stamp + 1% registration; women get 2% concession in rural"},laborLaw:{minWage:"₹10,000–₹13,500/mo",shopAct:"Punjab Shops & Commercial Establishments Act, 1958",factoryThreshold:"10+ workers"},rera:{authority:"Punjab RERA",website:"rera.punjab.gov.in",established:"2017"},excise:{status:"Permitted",policy:"Major excise revenue; large liquor industry"},gstProfTax:"Not levied",rocJurisdiction:"ROC Chandigarh",specialLaws:["Punjab Land Alienation Act","Punjab Security of Land Tenures Act","Punjab Village Common Lands Act"],keyIndustries:["Agriculture","Food Processing","Textiles","Sports Goods"],environmentalBody:"Punjab Pollution Control Board"},{id:"rajasthan",name:"Rajasthan",abbr:"RJ",type:"state",capital:"Jaipur",highCourt:"Rajasthan High Court",stampDuty:{residential:"6%",commercial:"6%",notes:"5% stamp + 1% surcharge; women get 1% concession"},laborLaw:{minWage:"₹8,500–₹12,500/mo",shopAct:"Rajasthan Shops & Commercial Establishments Act, 1958",factoryThreshold:"10+ workers"},rera:{authority:"Rajasthan RERA",website:"rera.rajasthan.gov.in",established:"2017"},excise:{status:"Permitted",policy:"State-run (RSBCL) + private licensed retail"},gstProfTax:"Not levied",rocJurisdiction:"ROC Jaipur",specialLaws:["Rajasthan Tenancy Act","Rajasthan Colonization Act","RIICO Act"],keyIndustries:["Mining (Marble, Sandstone)","Tourism","Textiles","Gems & Jewelry"],environmentalBody:"Rajasthan State Pollution Control Board"},{id:"sikkim",name:"Sikkim",abbr:"SK",type:"state",capital:"Gangtok",highCourt:"Sikkim High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Revenue Order No.1 restricts land to Sikkimese subjects"},laborLaw:{minWage:"₹8,500–₹11,000/mo",shopAct:"Sikkim Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Permitted",policy:"Regulated; local brew traditions preserved"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Revenue Order No.1 (land restrictions)","Old Laws (special provisions)","Article 371F protections"],keyIndustries:["Tourism","Organic Farming","Hydropower","Pharmaceuticals"],environmentalBody:"Sikkim State Pollution Control Board"},{id:"tamil-nadu",name:"Tamil Nadu",abbr:"TN",type:"state",capital:"Chennai",highCourt:"Madras High Court",stampDuty:{residential:"7%",commercial:"7%",notes:"4% stamp + 1% transfer duty + 1% registration + 1% surcharge"},laborLaw:{minWage:"₹10,000–₹15,000/mo",shopAct:"Tamil Nadu Shops & Establishments Act, 1947",factoryThreshold:"10+ workers"},rera:{authority:"TNRERA",website:"tnrera.in",established:"2017"},excise:{status:"Permitted",policy:"TASMAC monopoly (state-run retail); highest excise collection in India"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Chennai / ROC Coimbatore",specialLaws:["TN Land Reforms Act","CMDA Act","SIPCOT Act","TN Protection of Tank Irrigation Act"],keyIndustries:["Automobiles","IT/ITES","Textiles","Manufacturing"],environmentalBody:"TN Pollution Control Board"},{id:"telangana",name:"Telangana",abbr:"TS",type:"state",capital:"Hyderabad",highCourt:"Telangana High Court",stampDuty:{residential:"6%",commercial:"6%",notes:"4% stamp + 0.5% transfer duty + 1.5% registration; Dharani portal mandatory"},laborLaw:{minWage:"₹10,000–₹14,000/mo",shopAct:"Telangana Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Telangana RERA",website:"rera.telangana.gov.in",established:"2017"},excise:{status:"Permitted",policy:"Licensed retail; high revenue; nightlife-friendly"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Hyderabad",specialLaws:["Dharani portal for land records","TS-iPASS (industrial clearances)","HMDA Act"],keyIndustries:["IT/ITES","Pharmaceuticals","Biotechnology","Defense"],environmentalBody:"Telangana State Pollution Control Board"},{id:"tripura",name:"Tripura",abbr:"TR",type:"state",capital:"Agartala",highCourt:"Tripura High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Tribal (ADC) areas have separate regulations"},laborLaw:{minWage:"₹7,500–₹10,000/mo",shopAct:"Tripura Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Tripura RERA",website:"rera.tripura.gov.in",established:"2019"},excise:{status:"Permitted",policy:"Regulated sale; local rice beer tradition"},gstProfTax:"Not levied",rocJurisdiction:"ROC Shillong",specialLaws:["Tripura Land Revenue & Land Reforms Act","Autonomous District Council laws"],keyIndustries:["Rubber","Tea","Natural Gas","Bamboo"],environmentalBody:"Tripura State Pollution Control Board"},{id:"uttar-pradesh",name:"Uttar Pradesh",abbr:"UP",type:"state",capital:"Lucknow",highCourt:"Allahabad High Court",stampDuty:{residential:"7%",commercial:"7%",notes:"5% stamp + 2% registration; women get 1% concession; highest revenue state"},laborLaw:{minWage:"₹9,000–₹13,000/mo",shopAct:"UP Shops & Commercial Establishments Act, 1962",factoryThreshold:"20+ workers (relaxed in 2020)"},rera:{authority:"UP RERA",website:"up-rera.in",established:"2017"},excise:{status:"Permitted",policy:"Major revenue source; state-run + private licensed retail"},gstProfTax:"Not levied",rocJurisdiction:"ROC Kanpur / ROC Noida",specialLaws:["UP Zamindari Abolition Act","YEIDA/NOIDA Acts","UP Revenue Code","UP Industrial Area Development Act"],keyIndustries:["IT/ITES (Noida)","Agriculture","Handicrafts","Leather"],environmentalBody:"UP Pollution Control Board"},{id:"uttarakhand",name:"Uttarakhand",abbr:"UK",type:"state",capital:"Dehradun",highCourt:"Uttarakhand High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Concessions for women and rural areas; hill area restrictions"},laborLaw:{minWage:"₹9,000–₹12,000/mo",shopAct:"Uttarakhand Shops & Commercial Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Uttarakhand RERA",website:"ukrera.org.in",established:"2017"},excise:{status:"Permitted",policy:"Regulated; army canteen proximity rules"},gstProfTax:"Not levied",rocJurisdiction:"ROC Kanpur",specialLaws:["Uttarakhand Char Dham Devasthanam Act","Land purchase restrictions for non-domiciles"],keyIndustries:["Tourism","Pharmaceuticals","FMCG","Hydropower"],environmentalBody:"Uttarakhand Environment Protection & Pollution Control Board"},{id:"west-bengal",name:"West Bengal",abbr:"WB",type:"state",capital:"Kolkata",highCourt:"Calcutta High Court",stampDuty:{residential:"6-7%",commercial:"7%",notes:"5-6% stamp + 1% registration; varies by property value slab"},laborLaw:{minWage:"₹9,000–₹13,000/mo",shopAct:"West Bengal Shops & Establishments Act, 1963",factoryThreshold:"10+ workers"},rera:{authority:"WB HIRA (Housing Industry Regulatory Authority)",website:"wbhira.gov.in",established:"2018"},excise:{status:"Permitted",policy:"State-controlled retail; WBSBCL distribution"},gstProfTax:"₹2,500/yr",rocJurisdiction:"ROC Kolkata",specialLaws:["WB Land Reforms Act","WB Tenancy Act","WBIDC Act","Kolkata Municipal Corporation Act"],keyIndustries:["IT/ITES","Jute","Steel","Leather","Tea"],environmentalBody:"WB Pollution Control Board"},{id:"andaman-nicobar",name:"Andaman & Nicobar Islands",abbr:"AN",type:"ut",capital:"Port Blair",highCourt:"Calcutta High Court (Circuit Bench)",stampDuty:{residential:"3%",commercial:"3%",notes:"Among lowest; land purchase restricted for non-locals"},laborLaw:{minWage:"₹9,000–₹12,000/mo",shopAct:"Central Shops & Establishments Act applies",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Permitted",policy:"Regulated; limited outlets"},gstProfTax:"Not levied",rocJurisdiction:"ROC Chennai",specialLaws:["Andaman & Nicobar Protection of Aboriginal Tribes Regulation","Restricted Area Permit"],keyIndustries:["Tourism","Fisheries","Agriculture","Naval Base"],environmentalBody:"A&N Islands Pollution Control Committee"},{id:"chandigarh",name:"Chandigarh",abbr:"CH",type:"ut",capital:"Chandigarh",highCourt:"Punjab & Haryana High Court",stampDuty:{residential:"6%",commercial:"6%",notes:"Central government administered; e-stamping available"},laborLaw:{minWage:"₹11,000–₹14,000/mo",shopAct:"Punjab Shops & Commercial Establishments Act applies",factoryThreshold:"10+ workers"},rera:{authority:"Chandigarh RERA",website:"chandigarhrera.in",established:"2017"},excise:{status:"Permitted",policy:"Licensed retail"},gstProfTax:"Not levied",rocJurisdiction:"ROC Chandigarh",specialLaws:["Capital of Punjab & Haryana Act","Chandigarh Estate Rules"],keyIndustries:["IT/ITES","Education","Healthcare"],environmentalBody:"Chandigarh Pollution Control Committee"},{id:"dadra-nagar-haveli-daman-diu",name:"Dadra & Nagar Haveli and Daman & Diu",abbr:"DD",type:"ut",capital:"Daman",highCourt:"Bombay High Court",stampDuty:{residential:"3%",commercial:"3%",notes:"Low rates to attract investment"},laborLaw:{minWage:"₹9,500–₹12,000/mo",shopAct:"Central law applies with local modifications",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Permitted",policy:"Very low taxes; popular weekend destination from Gujarat"},gstProfTax:"Not levied",rocJurisdiction:"ROC Mumbai",specialLaws:["Merged UT administration (2020)","Industrial incentive schemes"],keyIndustries:["Manufacturing","Textiles","Tourism"],environmentalBody:"DNH & DD Pollution Control Committee"},{id:"delhi",name:"Delhi (NCT)",abbr:"DL",type:"ut",capital:"New Delhi",highCourt:"Delhi High Court",stampDuty:{residential:"6%",commercial:"6%",notes:"4-6% stamp based on gender + 1% registration; women get 2% concession"},laborLaw:{minWage:"₹16,000–₹18,000/mo",shopAct:"Delhi Shops & Establishments Act, 1954",factoryThreshold:"10+ workers"},rera:{authority:"Delhi RERA",website:"rera.delhi.gov.in",established:"2017"},excise:{status:"Permitted",policy:"Privatized retail (2021-2024); currently mixed model"},gstProfTax:"Not levied",rocJurisdiction:"ROC Delhi",specialLaws:["Delhi Development Act","DDA Master Plan 2041","Delhi Land Reforms Act","Delhi Rent Control Act"],keyIndustries:["Government","IT/ITES","Retail","Real Estate"],environmentalBody:"Delhi Pollution Control Committee"},{id:"jammu-kashmir",name:"Jammu & Kashmir",abbr:"JK",type:"ut",capital:"Srinagar (Summer) / Jammu (Winter)",highCourt:"J&K and Ladakh High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Post-Article 370 abrogation, central laws now apply; domicile rules reformed"},laborLaw:{minWage:"₹8,500–₹12,000/mo",shopAct:"J&K Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"J&K RERA",website:"rerajk.in",established:"2020"},excise:{status:"Permitted",policy:"Regulated; restricted in certain areas"},gstProfTax:"Not levied",rocJurisdiction:"ROC Jammu",specialLaws:["Post-370 abrogation legal transition","J&K Reorganization Act 2019","New domicile rules","Land grant rules (revised)"],keyIndustries:["Tourism","Horticulture (Apple/Saffron)","Handicrafts","Hydropower"],environmentalBody:"J&K State Pollution Control Board"},{id:"ladakh",name:"Ladakh",abbr:"LA",type:"ut",capital:"Leh",highCourt:"J&K and Ladakh High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Newest UT; regulations still evolving; tribal council authority"},laborLaw:{minWage:"₹8,000–₹11,000/mo",shopAct:"Central laws being extended",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Restricted",policy:"Limited; climate and cultural restrictions"},gstProfTax:"Not levied",rocJurisdiction:"ROC Jammu",specialLaws:["J&K Reorganization Act 2019","Ladakh Autonomous Hill Development Council Act","Sixth Schedule demand ongoing"],keyIndustries:["Tourism","Defense","Pashmina","Solar Energy"],environmentalBody:"Ladakh Pollution Control Committee"},{id:"lakshadweep",name:"Lakshadweep",abbr:"LD",type:"ut",capital:"Kavaratti",highCourt:"Kerala High Court",stampDuty:{residential:"3%",commercial:"3%",notes:"Very restricted land market; mostly community-owned"},laborLaw:{minWage:"₹8,000–₹10,000/mo",shopAct:"Central law applies",factoryThreshold:"10+ workers"},rera:{authority:"Not yet operational",website:"N/A",established:"Pending"},excise:{status:"Prohibition",policy:"Complete prohibition; permit system for tourists on select islands"},gstProfTax:"Not levied",rocJurisdiction:"ROC Ernakulam",specialLaws:["Lakshadweep (Land Revenue and Tenancy) Regulation","Restricted Area Permit required"],keyIndustries:["Fisheries","Coconut","Tourism (limited)"],environmentalBody:"Lakshadweep Pollution Control Committee"},{id:"puducherry",name:"Puducherry",abbr:"PY",type:"ut",capital:"Puducherry",highCourt:"Madras High Court",stampDuty:{residential:"5%",commercial:"5%",notes:"Includes Karaikal, Mahe, Yanam enclaves with separate rules; French civil code remnants"},laborLaw:{minWage:"₹9,000–₹12,000/mo",shopAct:"Puducherry Shops & Establishments Act",factoryThreshold:"10+ workers"},rera:{authority:"Puducherry RERA",website:"rera.py.gov.in",established:"2019"},excise:{status:"Permitted",policy:"Very low taxes; major hub for Tamil Nadu residents"},gstProfTax:"Not levied",rocJurisdiction:"ROC Chennai",specialLaws:["French Civil Code remnants (certain areas)","Puducherry Village & Commune Panchayats Act"],keyIndustries:["Tourism","Education","Leather","Manufacturing"],environmentalBody:"Puducherry Pollution Control Committee"}],C=[{id:1,title:"Corporate & Secretarial",icon:"🏛️",description:"Company incorporation documents, board composition & resolutions, ROC filings, shareholding pattern, statutory registers, and MCA compliance.",stateRelevance:"ROC jurisdiction varies by state; state-specific company registration incentives; Startup India state schemes differ.",checklist:["Certificate of Incorporation & MoA/AoA","Board & shareholder resolutions (past 5 years)","ROC annual returns & compliance certificates","Shareholding pattern & cap table","Director KYC & DIN compliance","Statutory registers (members, charges, directors)","Foreign investment approvals (FEMA/RBI)"],tags:["MCA","ROC","Companies Act","FEMA"]},{id:2,title:"Contractual & Commercial",icon:"📜",description:"Material contracts, vendor/customer agreements, JVs, licensing agreements, distribution contracts, and supply chain arrangements.",stateRelevance:"Stamp duty on agreements varies by state; e-stamping requirements differ; contract enforcement timelines vary by High Court.",checklist:["Top 20 customer & vendor contracts","Joint venture & partnership agreements","Licensing & franchise agreements","Supply & distribution agreements","Non-compete & non-solicitation clauses","Related party transactions","Assignment & change of control provisions"],tags:["Indian Contract Act","Stamp Act","Specific Relief Act"]},{id:3,title:"Real Estate & Property",icon:"🏗️",description:"Title verification, encumbrances, lease deeds, land use conversion, RERA compliance, stamp duty, and property tax across jurisdictions.",stateRelevance:"Stamp duty rates vary 3-8.25% across states; land ceiling laws differ; RERA rules are state-specific; tenancy laws vary significantly.",checklist:["Title deeds & chain of ownership (30 years)","Encumbrance certificates","Land use & conversion certificates","Building plan approvals & OC/CC","RERA registration status","Lease agreements & rent details","Property tax receipts","Environmental clearances for land"],tags:["RERA","Transfer of Property Act","State Stamp Acts","Land Revenue Codes"]},{id:4,title:"Labor & Employment",icon:"👥",description:"Employment contracts, PF/ESI compliance, minimum wage adherence, shop & establishment registration, and labor law compliance across states.",stateRelevance:"Minimum wages set by each state; shop & establishment acts differ; factory thresholds vary; labor inspector jurisdiction is state-level.",checklist:["Employment contracts & offer letters","PF & ESI registration & compliance","Minimum wage compliance (state-specific rates)","Shop & Establishment registration","Factory license (if applicable)","Standing orders (certified)","Sexual Harassment Committee (ICC) compliance","Contract labor register & licenses","Gratuity, bonus & leave records"],tags:["Code on Wages","Industrial Relations Code","Social Security Code","OSH Code"]},{id:5,title:"Intellectual Property",icon:"💡",description:"Trademark registrations, patent portfolio, copyright assignments, trade secrets, domain names, and IP licensing arrangements.",stateRelevance:"IP is a central subject but enforcement varies by state High Court; state innovation policies and IP subsidies differ.",checklist:["Trademark registrations & applications","Patent portfolio & prosecution status","Copyright registrations & assignments","Design registrations","Trade secret & confidentiality policies","Domain name portfolio","IP assignment agreements from founders/employees","Open source software compliance"],tags:["Trademarks Act","Patents Act","Copyright Act","IT Act"]},{id:6,title:"Litigation & Disputes",icon:"⚖️",description:"Pending litigation, contingent liabilities, arbitration proceedings, consumer complaints, regulatory actions, and show-cause notices.",stateRelevance:"Case pendency varies dramatically by state; High Court bench strength differs; state consumer commissions have varying disposal rates.",checklist:["Pending civil & criminal cases","Arbitration proceedings","Consumer complaints (NCDRC/State/District)","Labor court & tribunal matters","Tax disputes & assessment orders","Regulatory actions & show-cause notices","NCLT/NCLAT proceedings","Contingent liability assessment","Legal opinions on material disputes"],tags:["CPC","CrPC","Arbitration Act","Consumer Protection Act"]},{id:7,title:"Tax & Financial",icon:"💰",description:"Direct tax compliance, GST returns, transfer pricing documentation, tax notices, financial statements audit, and debt structure.",stateRelevance:"GST registration per state; professional tax rates vary; state VAT legacy issues; stamp duty on financial instruments differs.",checklist:["Income tax returns (5 years)","GST registration & returns (all states)","Transfer pricing documentation","TDS/TCS compliance","Professional tax registration (state-wise)","Tax assessment orders & disputes","Audited financial statements (5 years)","Debt agreements & charge registrations","Related party transaction disclosures"],tags:["Income Tax Act","GST Act","Transfer Pricing Rules"]},{id:8,title:"Regulatory & Compliance",icon:"📋",description:"Sector-specific licenses, FEMA compliance, RBI approvals, SEBI regulations, environmental clearances, and state-specific permits.",stateRelevance:"Industry licenses are state-issued; pollution control boards are state-level; SEZ policies vary; single-window clearance systems differ by state.",checklist:["Industry-specific licenses & permits","FEMA/RBI compliance certificates","SEBI compliance (if listed/investment)","Food safety (FSSAI) licenses","Drug licenses (if pharma)","Telecom/ISP licenses","Import-export licenses (IEC)","State-specific trade licenses","BIS certifications"],tags:["FEMA","RBI Regulations","SEBI Act","Sector-specific laws"]},{id:9,title:"Environmental & ESG",icon:"🌿",description:"Environmental clearances, pollution control consents, hazardous waste management, ESG policies, and carbon disclosure compliance.",stateRelevance:"State Pollution Control Boards have different thresholds; coastal zone regulations vary; EIA requirements differ by state.",checklist:["Environmental clearance certificates","Consent to Operate (CTO) from SPCB","Consent to Establish (CTE) from SPCB","Hazardous waste management authorization","EIA reports (if applicable)","Coastal Regulation Zone compliance","Water & air pollution compliance","ESG policy & reporting","Carbon emission disclosures"],tags:["Environment Protection Act","Water Act","Air Act","EIA Notification"]},{id:10,title:"IT, Data Privacy & Cyber",icon:"🔒",description:"DPDP Act compliance, data processing agreements, cybersecurity policies, IT Act compliance, and cross-border data transfer mechanisms.",stateRelevance:"IT/ITES policies vary by state; state data centers have different regulations; state e-governance frameworks differ.",checklist:["DPDP Act compliance assessment","Privacy policy & consent mechanisms","Data processing agreements","Cross-border data transfer arrangements","Cybersecurity policy & incident response","IT Act Section 43A compliance","ISO 27001 / SOC 2 certifications","Data breach history & notifications","Third-party data sharing agreements"],tags:["DPDP Act 2023","IT Act 2000","CERT-In Rules"]},{id:11,title:"Insurance & Risk",icon:"🛡️",description:"Insurance coverage review, policy adequacy, claims history, key-man insurance, D&O liability coverage, and business continuity planning.",stateRelevance:"State-level insurance regulations minimal but disaster-prone regions need specific coverage; fire NOC rules vary by municipality.",checklist:["All insurance policies in force","Directors & Officers (D&O) liability insurance","Key-man insurance","Product liability insurance","Professional indemnity insurance","Fire & property insurance","Claims history (5 years)","Business continuity plan","Workmen's compensation coverage"],tags:["Insurance Act","IRDAI Regulations"]},{id:12,title:"Anti-Corruption & FCPA",icon:"🚫",description:"Anti-bribery policies, prevention of corruption compliance, whistleblower mechanisms, political contribution disclosures, and FCPA/UK Bribery Act exposure.",stateRelevance:"State anti-corruption bureaus vary in activity; Lokayukta effectiveness differs; state vigilance commission jurisdiction varies.",checklist:["Anti-bribery & anti-corruption policy","Prevention of Corruption Act compliance","FCPA / UK Bribery Act exposure assessment","Political contributions disclosure","Whistleblower mechanism & cases","Third-party due diligence (agents/intermediaries)","Gift & hospitality register","Compliance training records","Government contract compliance"],tags:["Prevention of Corruption Act","FCPA","Companies Act Sec 135"]}];function b(t){return v.find(i=>i.id===t)}function R(t,i){const e=b(t),r=b(i);return!e||!r?null:{state1:e,state2:r}}function E(){const t=v.filter(e=>e.type==="state").length,i=v.filter(e=>e.type==="ut").length;return`
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Introducing Euclid Legal AI</span>
      </div>
      <h1 class="hero-title">
        Legal due diligence,<br/><em>mastered for India</em>
      </h1>
      <p class="hero-subtitle">
        AI that understands India's legal complexity — ${t} states, ${i} Union Territories,
        and the thousands of laws that differ across every jurisdiction.
      </p>
      <div class="hero-actions">
        <a href="#/demo" class="btn btn-primary btn-lg">Try AI Demo</a>
        <a href="#/due-diligence" class="btn btn-secondary btn-lg">Explore Due Diligence →</a>
      </div>
    </section>

    <!-- Logo Carousel -->
    <section class="section-sm" style="border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <p class="text-center text-secondary" style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-xl);">Trusted by India's leading legal teams</p>
        <div class="logo-carousel">
          <div class="logo-carousel-track">
            ${["AZB & Partners","Cyril Amarchand","Shardul Amarchand","Khaitan & Co","Trilegal","JSA Law","Luthra & Luthra","S&R Associates","Nishith Desai","DSK Legal","IndusLaw","Samvad Partners","AZB & Partners","Cyril Amarchand","Shardul Amarchand","Khaitan & Co","Trilegal","JSA Law","Luthra & Luthra","S&R Associates","Nishith Desai","DSK Legal","IndusLaw","Samvad Partners"].map(e=>`<span>${e}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section" id="stats-section">
      <div class="container">
        <div class="stats-grid animate-on-scroll">
          <div class="stat">
            <div class="stat-value counter" data-target="${t}">0</div>
            <div class="stat-label">Indian States</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="${i}">0</div>
            <div class="stat-label">Union Territories</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="900">0</div>
            <div class="stat-label">Laws Tracked</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="12">0</div>
            <div class="stat-label">DD Chapters</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Due Diligence Hero -->
    <section class="section" style="background: var(--bg-secondary);" id="dd-preview">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Core Capability</span>
          <h2 class="section-title">AI-Powered <em>Due Diligence</em></h2>
          <p class="section-subtitle">
            12 structured chapters covering every aspect of legal due diligence in India —
            from corporate secretarial to anti-corruption compliance.
          </p>
        </div>
        <div class="grid grid-3">
          ${[{icon:"🏛️",title:"Corporate & Secretarial",desc:"MCA filings, ROC compliance, board governance across jurisdictions.",color:"gold"},{icon:"📜",title:"Contractual & Commercial",desc:"Material contracts, stamp duty verification, enforceability analysis.",color:"blue"},{icon:"🏗️",title:"Real Estate & Property",desc:"Title chain, RERA compliance, stamp duty — all state-specific.",color:"saffron"},{icon:"👥",title:"Labor & Employment",desc:"State-wise minimum wages, PF/ESI, shop & establishment compliance.",color:"emerald"},{icon:"⚖️",title:"Litigation & Disputes",desc:"Case tracking across High Courts, tribunals, consumer forums.",color:"purple"},{icon:"💰",title:"Tax & Financial",desc:"GST multi-state, transfer pricing, professional tax variations.",color:"gold"}].map((e,r)=>`
            <div class="card animate-on-scroll stagger-${r%3+1}">
              <div class="card-icon ${e.color}">${e.icon}</div>
              <h3 class="card-title">${e.title}</h3>
              <p class="card-desc">${e.desc}</p>
              <a href="#/due-diligence" class="card-link">View chapter →</a>
            </div>
          `).join("")}
        </div>
        <div class="text-center mt-2xl animate-on-scroll">
          <a href="#/due-diligence" class="btn btn-primary btn-lg">Explore All 12 Chapters →</a>
        </div>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="section" id="platform-preview">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Platform</span>
          <h2 class="section-title">The complete <em>legal AI</em> stack</h2>
          <p class="section-subtitle">
            Beyond due diligence — Euclid provides a full suite of AI-powered tools
            for every legal workflow in India.
          </p>
        </div>
        <div class="grid grid-4">
          ${[{icon:"💬",title:"Assistant",desc:"Ask questions, analyze documents, and draft faster with AI tuned for Indian law.",color:"gold"},{icon:"📁",title:"Vault",desc:"Securely store, organize, and bulk-analyze legal documents with state-aware intelligence.",color:"blue"},{icon:"📚",title:"Knowledge",desc:"Research complex regulatory, tax, and compliance questions across Indian jurisdictions.",color:"emerald"},{icon:"🤖",title:"Agents",desc:"Purpose-built AI agents that execute multi-step legal workflows end-to-end.",color:"purple"}].map((e,r)=>`
            <div class="card animate-on-scroll stagger-${r+1}">
              <div class="card-icon ${e.color}">${e.icon}</div>
              <h3 class="card-title">${e.title}</h3>
              <p class="card-desc">${e.desc}</p>
              <a href="#/platform" class="card-link">Learn more →</a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- India Map CTA -->
    <section class="section" style="background: var(--bg-secondary);" id="map-cta">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4xl); align-items: center;">
          <div class="animate-on-scroll">
            <span class="section-label">Interactive</span>
            <h2 class="section-title" style="text-align:left;">Explore India's<br/><em>legal landscape</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-2xl);">
              Click any state on our interactive map to see stamp duty rates, labor laws,
              RERA rules, excise policies, and more. Compare any two states side-by-side.
            </p>
            <div style="display:flex; gap: var(--space-md);">
              <a href="#/india-map" class="btn btn-primary btn-lg">Open India Map →</a>
              <a href="#/demo" class="btn btn-secondary btn-lg">Ask AI Instead</a>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2" style="text-align: center;">
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: var(--space-2xl); position: relative;">
              <div style="font-size: 120px; opacity: 0.8; line-height: 1;">🇮🇳</div>
              <div style="margin-top: var(--space-lg); display: flex; justify-content: center; gap: var(--space-lg);">
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">36</div>
                  <div class="stat-label">Jurisdictions</div>
                </div>
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">24</div>
                  <div class="stat-label">High Courts</div>
                </div>
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">12</div>
                  <div class="stat-label">DD Chapters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" id="cta-section">
      <div class="container">
        <div class="animate-on-scroll" style="text-align:center; max-width: 700px; margin: 0 auto;">
          <h2 class="section-title">Ready to transform your<br/><em>legal practice?</em></h2>
          <p class="section-subtitle">
            Join India's leading law firms and corporate legal teams already using Euclid
            to navigate multi-state complexity with confidence.
          </p>
          <div class="hero-actions" style="justify-content: center; margin-top: var(--space-2xl);">
            <a href="#/demo" class="btn btn-primary btn-lg">Request Early Access</a>
            <a href="#/about" class="btn btn-secondary btn-lg">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `}function I(){return`
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Primary Focus</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Primary Due Diligence <em>Framework</em>
      </h1>
      <p class="hero-subtitle">
        Euclid's core capability is structured chapter-wise diligence. We track, verify, and cross-reference state and central laws across all 36 Indian jurisdictions.
      </p>
    </section>

    <!-- Due Diligence Chapters Grid & Details Explorer -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-2xl); align-items: start;" class="dd-explorer-layout">
          
          <!-- Left: List of Chapters -->
          <div style="display: flex; flex-direction: column; gap: var(--space-md); max-height: 80vh; overflow-y: auto; padding-right: var(--space-xs);" class="dd-chapters-list scrollbar-custom">
            <h3 class="section-label" style="position: sticky; top: 0; background: var(--bg-secondary); padding: var(--space-sm) 0; margin-bottom: var(--space-sm); z-index: 10;">12 Chapters of Due Diligence</h3>
            ${C.map(t=>`
              <div class="chapter-card active-trigger" data-chapter-id="${t.id}" id="ch-card-${t.id}">
                <div class="chapter-number">${t.id<10?"0"+t.id:t.id}</div>
                <div class="chapter-content">
                  <h4 class="chapter-title">${t.title}</h4>
                  <p class="chapter-desc" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 0;">${t.description}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Right: Detailed Chapter Workflow & State Nuances -->
          <div style="position: sticky; top: var(--header-height);" id="chapter-detail-panel">
            <!-- Dynamic Content Loaded by JS -->
            <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-accent); box-shadow: var(--shadow-glow-gold);">
              <div style="text-align: center; color: var(--text-tertiary); padding: var(--space-4xl) 0;">
                <div style="font-size: 3rem; margin-bottom: var(--space-md);">⚖️</div>
                <p>Select a chapter from the list to explore the detailed due diligence checklist, workflow, and state-specific legal nuances.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Workflow Execution Section -->
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Execution</span>
          <h2 class="section-title">End-to-End <em>Diligence Workflow</em></h2>
          <p class="section-subtitle">How Euclid automates and structures the transaction due diligence lifecycle.</p>
        </div>
        
        <div class="grid grid-3">
          <div class="card animate-on-scroll stagger-1">
            <div class="card-icon gold">1</div>
            <h3 class="card-title">Document Ingestion</h3>
            <p class="card-desc">Upload corporate registers, land deeds, and employment records. Euclid automatically classifies and indexes documents by chapter, matching them with state jurisdictions.</p>
          </div>
          <div class="card animate-on-scroll stagger-2">
            <div class="card-icon saffron">2</div>
            <h3 class="card-title">Anomaly Detection</h3>
            <p class="card-desc">The AI identifies stamp duty deficits, invalid registrations, minimum wage violations, and pending litigation cases across state High Courts and tribunals.</p>
          </div>
          <div class="card animate-on-scroll stagger-3">
            <div class="card-icon emerald">3</div>
            <h3 class="card-title">Disclosure Drafting</h3>
            <p class="card-desc">Euclid compiles findings into a comprehensive Due Diligence Report, highlighting regulatory red flags and drafting the Disclosure Schedule for transactional agreements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="glass-panel" style="padding: var(--space-4xl); text-align: center; max-width: 800px; margin: 0 auto; border-color: var(--border-accent);">
          <h3 class="section-title" style="font-size: var(--text-3xl);">Execute diligence with <em>precision</em></h3>
          <p class="section-subtitle" style="margin-bottom: var(--space-xl);">
            Harness Euclid's state-aware legal intelligence to expedite corporate transactions and identify compliance risks instantly.
          </p>
          <a href="#/demo" class="btn btn-primary btn-lg">Request Access to Euclid DD</a>
        </div>
      </div>
    </section>
  `}function T(){const t=document.querySelectorAll(".chapter-card"),i=document.getElementById("chapter-detail-panel");function e(r){const s=C.find(d=>d.id===parseInt(r));if(!s)return;t.forEach(d=>d.classList.remove("active"));const c=document.getElementById(`ch-card-${r}`);c&&c.classList.add("active");let l="";s.id===1?l=`
        <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold); margin-top: var(--space-md);">
          <strong>ROC Jurisdictions:</strong> Varies by state. For example, Maharashtra has ROC Mumbai & ROC Pune; Tamil Nadu has ROC Chennai & ROC Coimbatore; Uttar Pradesh has ROC Kanpur & ROC Noida.
        </div>
      `:s.id===2?l=`
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>Stamp Act Compliance:</strong> Commercial agreements and deeds have varying stamp rates. In <strong>Karnataka</strong>, stamp duty is governed by the Karnataka Stamp Act, 1957. Failure to pay adequate stamp duty renders agreements inadmissible as evidence in court.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>E-Stamping:</strong> Mandated in Maharashtra, Karnataka, and Delhi, but physical stamp papers are still used in several other states.
          </div>
        </div>
      `:s.id===3?l=`
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>RERA Status:</strong> MahaRERA (Maharashtra) is highly active with fast adjudication. In contrast, RERA authorities in states like Sikkim, Arunachal Pradesh, and Meghalaya are still not operational.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>Land Acquisition & ceiling:</strong> Varies significantly. In Himachal Pradesh and Sikkim, non-residents face strict land purchase prohibitions.
          </div>
        </div>
      `:s.id===4?l=`
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>Minimum Wages:</strong> Varies greatly. <strong>Delhi</strong> enforces one of the highest minimum wages (~₹16,000–₹18,000/mo), while states like <strong>Nagaland</strong> or <strong>Manipur</strong> average around ₹7,500/mo.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>Shop & Establishment Acts:</strong> Varies. For instance, Gujarat's 2019 Act allows 24/7 operations, whereas older Acts in other states restrict working hours.
          </div>
        </div>
      `:l=`
        <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-blue); margin-top: var(--space-md);">
          <strong>Federal Variance:</strong> Euclid automatically flags overlapping central and state rules to verify compliance before transaction closure.
        </div>
      `,i.innerHTML=`
      <div class="glass-panel animate-on-scroll visible" style="padding: var(--space-3xl); border-color: var(--border-medium); box-shadow: var(--shadow-lg); transition: all 0.3s ease;">
        <div style="display:flex; align-items:center; gap:var(--space-md); margin-bottom:var(--space-lg);">
          <div style="font-size: 2.5rem; line-height: 1;">${s.icon}</div>
          <div>
            <span class="section-label" style="margin-bottom:0;">Chapter ${s.id<10?"0"+s.id:s.id}</span>
            <h3 class="state-info-title" style="font-size: var(--text-2xl);">${s.title}</h3>
          </div>
        </div>

        <p style="color: var(--text-secondary); font-size: var(--text-base); margin-bottom: var(--space-xl); line-height:1.7;">
          ${s.description}
        </p>

        <!-- Tags -->
        <div style="margin-bottom: var(--space-xl);">
          <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-sm);">Governing Regimes</h5>
          <div class="chapter-tags">
            ${s.tags.map(d=>`<span class="chapter-tag" style="color: var(--accent-gold); border-color: var(--border-accent);">${d}</span>`).join("")}
          </div>
        </div>

        <!-- State Relevance -->
        <div style="margin-bottom: var(--space-xl); background: rgba(212, 168, 67, 0.05); border: 1px solid var(--border-accent); padding: var(--space-lg); border-radius: var(--radius-md);">
          <h5 style="font-size: var(--text-xs); color: var(--accent-gold); text-transform: uppercase; margin-bottom: var(--space-xs); display:flex; align-items:center; gap:var(--space-xs);">
            <span>🇮🇳</span> State-Level Nuance
          </h5>
          <p style="font-size: var(--text-sm); line-height: 1.6; color: var(--text-primary); margin:0;">
            ${s.stateRelevance}
          </p>
          ${l}
        </div>

        <!-- Checklist -->
        <div style="margin-bottom: var(--space-xl);">
          <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-md);">Diligence Checklist & Requirements</h5>
          <ul style="display:flex; flex-direction:column; gap:var(--space-sm);">
            ${s.checklist.map(d=>`
              <li style="display:flex; align-items:flex-start; gap:var(--space-sm); font-size:var(--text-sm); color: var(--text-secondary);">
                <span style="color: var(--accent-gold); font-weight:bold; line-height:1.2;">✓</span>
                <span>${d}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div style="display:flex; gap: var(--space-md); margin-top: var(--space-2xl);">
          <a href="#/demo" class="btn btn-primary" style="flex:1;" id="demo-query-btn">
            Test AI query for this chapter
          </a>
        </div>
      </div>
    `;const g=document.getElementById("demo-query-btn");g&&g.addEventListener("click",()=>{let d="";s.id===1?d="Find ROC filing status and director KYC anomalies for the target company":s.id===2?d="What is the stamp duty required for an IT services SLA in Maharashtra vs Karnataka?":s.id===3?d="Check land use conversion certificate and RERA registration status for our Gurgaon project":s.id===4?d="Compare minimum wages and shop registration rules in Gujarat and Tamil Nadu for warehouse staff":d=`Run a legal compliance check on ${s.title} laws in India`,localStorage.setItem("euclid_prefilled_query",d)})}t.forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-chapter-id");e(s)})}),e(1)}function L(){return`
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Platform Overview</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        The Legal <em>AI Stack</em>
      </h1>
      <p class="hero-subtitle">
        Euclid combines generative AI, legal database indices, and multi-step execution agents to supercharge corporate counsel and law firms in India.
      </p>
    </section>

    <!-- Platform Modules Section -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <!-- Module 1: Assistant -->
        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex">
          <div class="animate-on-scroll">
            <span class="section-label" style="color:var(--accent-gold);">01. Conversational AI</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">The Legal <em>Assistant</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Ask questions, draft contracts, compare provisions, and analyze risks. Euclid's Assistant is trained specifically on Indian Supreme Court judgments, High Court briefs, and central/state laws.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-gold);">✔</span> Fine-tuned for Indian legal vernacular (e.g., *vakalatnama*, *stamp duty*, *promissory note*)
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-gold);">✔</span> Verbatim statutory citations linked to active state registries
              </li>
            </ul>
            <a href="#/demo" class="btn btn-primary">Try Assistant in Demo</a>
          </div>
          <div class="glass-panel animate-on-scroll stagger-2" style="padding: var(--space-2xl); position:relative;">
            <div style="background:var(--bg-primary); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-medium); font-size:var(--text-xs); color:var(--text-secondary); line-height:1.6;">
              <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                <span>Drafting Assistant</span>
                <span class="badge badge-emerald">Ready</span>
              </div>
              <p style="color:var(--text-tertiary); margin-bottom:6px;">[User]: Draft an indemnity clause for a services agreement in Karnataka.</p>
              <p style="color:var(--text-primary);">[Euclid]: "The Service Provider shall indemnify and hold harmless the Client against any stamp duty deficits, penalties, or interests levied by the Karnataka Revenue Department under the Karnataka Stamp Act, 1957..."</p>
            </div>
          </div>
        </div>

        <!-- Module 2: Vault -->
        <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex reverse-row">
          <div class="glass-panel animate-on-scroll" style="padding: var(--space-2xl);">
            <div style="background:var(--bg-primary); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-medium); font-size:var(--text-xs);">
              <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:6px; margin-bottom:8px; color:var(--text-tertiary);">Vault Index (4 Files Selected)</div>
              <ul style="display:flex; flex-direction:column; gap:4px; margin-bottom:10px; color:var(--text-secondary);">
                <li>📄 SLA_Bengaluru_Office.pdf (48 KB)</li>
                <li>📄 LeaseDeed_Mumbai_Retail.pdf (124 KB)</li>
                <li>📄 EmploymentContract_Gujarat.pdf (90 KB)</li>
                <li>📄 BoardMinutes_ROC_Del.pdf (42 KB)</li>
              </ul>
              <div style="background:var(--bg-glass-strong); padding:8px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); color:var(--accent-gold); font-weight:600; text-align:center;">
                🔍 Run cross-file stamp duty check
              </div>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2">
            <span class="section-label" style="color:var(--accent-blue);">02. Document Management</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">The Legal <em>Vault</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              A secure workspace to upload hundreds of agreements, board resolutions, and due diligence assets. Euclid indexes text, tabular data, and scan artifacts, making them instantly searchable.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-blue);">✔</span> OCR for scanned Hindi and English legal documents
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-blue);">✔</span> Vault-wide bulk querying (e.g. "List all termination notice periods across these 50 contracts")
              </li>
            </ul>
          </div>
        </div>

        <!-- Module 3: Knowledge -->
        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex">
          <div class="animate-on-scroll">
            <span class="section-label" style="color:var(--accent-emerald);">03. Legal Database</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">Regulatory <em>Knowledge</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Connect directly to our curated database of Indian law. We map central regulations (Companies Act, FEMA, IT Act, DPDP) and state-specific regulations (Stamp Acts, RERA rules, Shop Act bylaws, environmental approvals) under a single visual search.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-emerald);">✔</span> Real-time monitoring of state gazettes and high court cases
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-emerald);">✔</span> Visual breakdown of federal overlaps (Concurrent List variations)
              </li>
            </ul>
            <a href="#/india-map" class="btn btn-secondary">Explore Interactive Map</a>
          </div>
          <div class="glass-panel animate-on-scroll stagger-2" style="padding: var(--space-2xl); text-align:center;">
            <div style="font-size:3rem; margin-bottom: var(--space-sm);">📚</div>
            <h4 class="card-title">900+ Legal Codes Indexed</h4>
            <p class="card-desc">Fully mapped across all 36 Indian states and Union Territories for real-time risk assessment.</p>
          </div>
        </div>

        <!-- Module 4: Agents -->
        <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-3xl); align-items:center;" class="platform-module-flex reverse-row">
          <div class="glass-panel animate-on-scroll" style="padding: var(--space-2xl);">
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span>1. Ingest Corporate MoA/AoA</span>
                <span style="color:var(--accent-emerald);">Done ✓</span>
              </div>
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span>2. Cross-reference ROC filing dates</span>
                <span style="color:var(--accent-emerald);">Done ✓</span>
              </div>
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-accent); display:flex; justify-content:space-between; align-items:center; background:rgba(212,168,67,0.05);">
                <span>3. Audit stamp duty at state rates</span>
                <span style="color:var(--accent-gold); animation:pulse-dot 1.5s infinite;">Running...</span>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2">
            <span class="section-label" style="color:var(--accent-saffron);">04. Autonomous Workflows</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">Diligence <em>Agents</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Deploy multi-step AI agents to execute complex, tedious due diligence workflows. Instead of just answering questions, Euclid Agents compile disclosures, run compliance audits, and identify structural deficits autonomously.
            </p>
            <a href="#/due-diligence" class="btn btn-primary">See 12 DD Chapters</a>
          </div>
        </div>

      </div>
    </section>

    <!-- Integrations & Infrastructure -->
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Infrastructure</span>
          <h2 class="section-title">Built for Enterprise <em>Security</em></h2>
          <p class="section-subtitle">Euclid operates on sovereign, isolated architectures conforming to Indian regulatory mandates.</p>
        </div>

        <div class="grid grid-3">
          <div class="card animate-on-scroll stagger-1">
            <div class="card-icon gold">🔒</div>
            <h3 class="card-title">DPDP Act Compliance</h3>
            <p class="card-desc">Designed in accordance with India's Digital Personal Data Protection Act, 2023. Explicit consent logging and data erasure.</p>
          </div>
          <div class="card animate-on-scroll stagger-2">
            <div class="card-icon saffron">🇮🇳</div>
            <h3 class="card-title">Sovereign Data Hosting</h3>
            <p class="card-desc">All document storage and model servers are located in tier-4 Indian data centers (Mumbai, Bengaluru). No data leaves borders.</p>
          </div>
          <div class="card animate-on-scroll stagger-3">
            <div class="card-icon emerald">🏢</div>
            <h3 class="card-title">On-Premises Deployment</h3>
            <p class="card-desc">For leading law firms and financial institutions, Euclid can be containerized and deployed within private virtual clouds.</p>
          </div>
        </div>
      </div>
    </section>
  `}const f={"jammu-kashmir":{x:140,y:70,abbr:"JK"},ladakh:{x:200,y:50,abbr:"LA"},"himachal-pradesh":{x:200,y:100,abbr:"HP"},punjab:{x:140,y:130,abbr:"PB"},chandigarh:{x:175,y:125,abbr:"CH"},uttarakhand:{x:250,y:120,abbr:"UK"},haryana:{x:190,y:160,abbr:"HR"},delhi:{x:210,y:180,abbr:"DL"},rajasthan:{x:110,y:210,abbr:"RJ"},gujarat:{x:60,y:280,abbr:"GJ"},"dadra-nagar-haveli-daman-diu":{x:70,y:340,abbr:"DD"},"madhya-pradesh":{x:200,y:280,abbr:"MP"},"uttar-pradesh":{x:290,y:210,abbr:"UP"},bihar:{x:380,y:220,abbr:"BR"},sikkim:{x:430,y:190,abbr:"SK"},"west-bengal":{x:420,y:300,abbr:"WB"},jharkhand:{x:370,y:290,abbr:"JH"},odisha:{x:340,y:360,abbr:"OD"},chhattisgarh:{x:280,y:340,abbr:"CG"},maharashtra:{x:160,y:380,abbr:"MH"},goa:{x:130,y:470,abbr:"GA"},karnataka:{x:180,y:480,abbr:"KA"},"andhra-pradesh":{x:250,y:450,abbr:"AP"},telangana:{x:240,y:395,abbr:"TS"},"tamil-nadu":{x:220,y:550,abbr:"TN"},puducherry:{x:255,y:530,abbr:"PY"},kerala:{x:170,y:560,abbr:"KL"},lakshadweep:{x:90,y:560,abbr:"LD"},"andaman-nicobar":{x:470,y:550,abbr:"AN"},meghalaya:{x:490,y:240,abbr:"ML"},assam:{x:510,y:210,abbr:"AS"},"arunachal-pradesh":{x:550,y:180,abbr:"AR"},nagaland:{x:570,y:210,abbr:"NL"},manipur:{x:560,y:245,abbr:"MN"},mizoram:{x:540,y:280,abbr:"MZ"},tripura:{x:500,y:270,abbr:"TR"}},D=[["jammu-kashmir","ladakh"],["jammu-kashmir","himachal-pradesh"],["jammu-kashmir","punjab"],["ladakh","himachal-pradesh"],["himachal-pradesh","uttarakhand"],["himachal-pradesh","punjab"],["himachal-pradesh","haryana"],["punjab","haryana"],["punjab","rajasthan"],["punjab","chandigarh"],["uttarakhand","uttar-pradesh"],["haryana","delhi"],["haryana","rajasthan"],["haryana","uttar-pradesh"],["delhi","uttar-pradesh"],["rajasthan","gujarat"],["rajasthan","madhya-pradesh"],["rajasthan","uttar-pradesh"],["gujarat","madhya-pradesh"],["gujarat","maharashtra"],["gujarat","dadra-nagar-haveli-daman-diu"],["madhya-pradesh","uttar-pradesh"],["madhya-pradesh","chhattisgarh"],["madhya-pradesh","maharashtra"],["uttar-pradesh","bihar"],["uttar-pradesh","chhattisgarh"],["bihar","sikkim"],["bihar","jharkhand"],["bihar","west-bengal"],["sikkim","west-bengal"],["sikkim","assam"],["west-bengal","jharkhand"],["west-bengal","odisha"],["west-bengal","meghalaya"],["west-bengal","assam"],["jharkhand","odisha"],["jharkhand","chhattisgarh"],["chhattisgarh","odisha"],["chhattisgarh","telangana"],["chhattisgarh","maharashtra"],["maharashtra","goa"],["maharashtra","karnataka"],["maharashtra","telangana"],["goa","karnataka"],["karnataka","telangana"],["karnataka","andhra-pradesh"],["karnataka","kerala"],["karnataka","tamil-nadu"],["telangana","andhra-pradesh"],["andhra-pradesh","tamil-nadu"],["andhra-pradesh","odisha"],["andhra-pradesh","puducherry"],["kerala","tamil-nadu"],["kerala","lakshadweep"],["tamil-nadu","puducherry"],["assam","arunachal-pradesh"],["assam","nagaland"],["assam","manipur"],["assam","tripura"],["assam","meghalaya"],["arunachal-pradesh","nagaland"],["nagaland","manipur"],["manipur","mizoram"],["mizoram","tripura"]];function B(){return`
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Visual Selector</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Interactive <em>Legal Map</em>
      </h1>
      <p class="hero-subtitle">
        Click any jurisdiction node in our Euclidean topological constellation to view stamp rates, labor rules, and local statutes, or compare states side-by-side.
      </p>
    </section>

    <!-- Map & Compare Panels -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items: start;" class="map-grid-layout">
          
          <!-- Left: Constellation Map -->
          <div>
            <h3 class="section-label">Euclidean Topological Constellation</h3>
            <div class="india-map-container" style="border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); background: var(--bg-primary); padding: var(--space-lg); overflow: hidden; position: relative;">
              <svg viewBox="0 0 600 600" class="india-map-svg" style="display:block; width:100%; height:auto;">
                <!-- Connection Lines -->
                <g stroke="var(--border-subtle)" stroke-width="1.5" stroke-dasharray="2 3">
                  ${D.map(t=>{const i=f[t[0]],e=f[t[1]];return!i||!e?"":`<line x1="${i.x}" y1="${i.y}" x2="${e.x}" y2="${e.y}" />`}).join("")}
                </g>

                <!-- State Nodes -->
                ${Object.entries(f).map(([t,i])=>{const e=v.find(s=>s.id===t),r=(e==null?void 0:e.type)==="ut";return`
                    <g class="state-node-group" data-state-id="${t}" style="cursor:pointer;">
                      <circle cx="${i.x}" cy="${i.y}" r="${r?12:16}" 
                        fill="${r?"var(--bg-elevated)":"var(--bg-tertiary)"}" 
                        stroke="var(--border-strong)" stroke-width="1.5" class="state-node-circle" id="node-circle-${t}" />
                      <text x="${i.x}" y="${i.y+4}" font-size="${r?"8":"10"}" font-family="var(--font-sans)" font-weight="600" 
                        fill="var(--text-secondary)" text-anchor="middle" pointer-events="none" id="node-text-${t}">
                        ${i.abbr}
                      </text>
                    </g>
                  `}).join("")}
              </svg>

              <!-- Map Tooltip -->
              <div class="map-tooltip" id="map-custom-tooltip">
                <div class="map-tooltip-name" id="tooltip-state-name">State Name</div>
                <div class="map-tooltip-detail" id="tooltip-stamp">Stamp Duty: -</div>
                <div class="map-tooltip-detail" id="tooltip-wage">Min Wage: -</div>
                <div class="map-tooltip-detail" id="tooltip-rera">RERA: -</div>
                <div style="font-size: 10px; color: var(--accent-gold); margin-top: 6px; font-weight:600;">Click to view deep dive →</div>
              </div>
            </div>
          </div>

          <!-- Right: Info Panel & State Comparer -->
          <div style="display:flex; flex-direction:column; gap: var(--space-2xl);">
            
            <!-- Quick State Profile Panel -->
            <div class="state-info-panel" id="map-quick-panel">
              <div style="text-align: center; color: var(--text-tertiary); padding: var(--space-3xl) 0;">
                <span style="font-size: 2.5rem;">🖱️</span>
                <p style="margin-top: var(--space-md); font-size: var(--text-sm);">Hover over any state node on the constellation map to preview local legal metrics.</p>
              </div>
            </div>

            <!-- Side-by-Side Comparer -->
            <div class="glass-panel" style="padding: var(--space-2xl); border-color: var(--border-accent);">
              <h4 class="chapter-title" style="margin-bottom: var(--space-xs); display:flex; align-items:center; gap:var(--space-xs);">
                ⚖️ <span>Jurisdiction Comparer</span>
              </h4>
              <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-lg);">Compare legal frameworks and stamp duties side-by-side</p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg);">
                <div>
                  <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:4px;">State A</label>
                  <select id="compare-select-a" style="width:100%; padding: 8px 12px; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); color: var(--text-primary); font-size: var(--text-sm);">
                    ${v.map(t=>`<option value="${t.id}" ${t.id==="maharashtra"?"selected":""}>${t.name}</option>`).join("")}
                  </select>
                </div>
                <div>
                  <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:4px;">State B</label>
                  <select id="compare-select-b" style="width:100%; padding: 8px 12px; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); color: var(--text-primary); font-size: var(--text-sm);">
                    ${v.map(t=>`<option value="${t.id}" ${t.id==="karnataka"?"selected":""}>${t.name}</option>`).join("")}
                  </select>
                </div>
              </div>
              <button class="btn btn-primary btn-full" id="run-comparison-btn">Compare Jurisdictions</button>

              <div id="comparison-results-output" style="margin-top: var(--space-xl);"></div>
            </div>

          </div>

        </div>

        <!-- Section: Search Directory -->
        <div class="divider"></div>
        <div style="margin-top: var(--space-xl);">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; gap: var(--space-lg); margin-bottom: var(--space-2xl);" class="search-header-flex">
            <div>
              <span class="section-label" style="margin-bottom: var(--space-xs);">Directory</span>
              <h2 class="section-title" style="font-size: var(--text-3xl); margin:0;">All 36 <em>Jurisdictions</em></h2>
            </div>
            <div style="position:relative; width: 320px;" class="search-box-wrapper">
              <input type="text" id="state-search-input" placeholder="Search state, capital, ROC, stamp..." style="width:100%; padding:10px 16px; padding-left:36px; background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: var(--text-primary); font-size: var(--text-sm);" />
              <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); opacity:0.5; font-size:14px;">🔍</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-md);" id="states-directory-grid">
            <!-- Populated dynamically -->
          </div>
        </div>

      </div>
    </section>
  `}function z(){const t=document.querySelectorAll(".state-node-group"),i=document.getElementById("map-custom-tooltip"),e=document.getElementById("map-quick-panel"),r=document.getElementById("state-search-input"),s=document.getElementById("states-directory-grid"),c=document.getElementById("compare-select-a"),l=document.getElementById("compare-select-b"),g=document.getElementById("run-comparison-btn"),d=document.getElementById("comparison-results-output");function h(m=v){if(!s)return;if(m.length===0){s.innerHTML=`
        <div style="grid-column: 1 / -1; text-align:center; padding: var(--space-2xl); color: var(--text-tertiary);">
          No states or Union Territories found matching your search.
        </div>
      `;return}s.innerHTML=m.map(a=>`
      <div class="card search-state-card" data-state-id="${a.id}" style="padding: var(--space-lg); cursor:pointer; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-xs);">
            <h4 class="card-title" style="font-size: var(--text-lg); margin:0;">${a.name}</h4>
            <span class="badge ${a.type==="state"?"badge-gold":"badge-blue"}" style="font-size:8px; padding:2px 8px;">
              ${a.type.toUpperCase()}
            </span>
          </div>
          <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-md);">Capital: ${a.capital} • ${a.rocJurisdiction}</p>
          
          <div style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary); margin-bottom: var(--space-md);">
            <div><strong>Stamp (Res):</strong> ${a.stampDuty.residential}</div>
            <div><strong>Min Wage:</strong> ${a.laborLaw.minWage}</div>
            <div><strong>Excise:</strong> ${a.excise.status}</div>
          </div>
        </div>
        <a href="#/state/${a.id}" class="card-link" style="margin-top:0; font-size: var(--text-xs);">Open Profile →</a>
      </div>
    `).join(""),document.querySelectorAll(".search-state-card").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-state-id");window.location.hash=`#/state/${n}`})})}r&&r.addEventListener("input",m=>{const u=m.target.value.toLowerCase().trim(),a=v.filter(n=>n.name.toLowerCase().includes(u)||n.capital.toLowerCase().includes(u)||n.rocJurisdiction.toLowerCase().includes(u)||n.keyIndustries.some(o=>o.toLowerCase().includes(u)));h(a)}),t.forEach(m=>{const u=m.getAttribute("data-state-id"),a=b(u);a&&(m.addEventListener("mouseenter",n=>{const o=document.getElementById(`node-circle-${u}`),p=document.getElementById(`node-text-${u}`);o&&(o.setAttribute("fill","var(--accent-gold-dim)"),o.setAttribute("stroke","var(--accent-gold)"),o.setAttribute("stroke-width","2.5")),p&&p.setAttribute("fill","var(--accent-gold)");const y=n.currentTarget.getBoundingClientRect(),x=m.closest(".india-map-container").getBoundingClientRect(),P=y.left-x.left+y.width/2,S=y.top-x.top-10;document.getElementById("tooltip-state-name").textContent=a.name,document.getElementById("tooltip-stamp").textContent=`Stamp (Res): ${a.stampDuty.residential}`,document.getElementById("tooltip-wage").textContent=`Min Wage: ${a.laborLaw.minWage}`,document.getElementById("tooltip-rera").textContent=`RERA: ${a.rera.authority}`,i.style.left=`${P-100}px`,i.style.top=`${S-120}px`,i.classList.add("visible"),e.innerHTML=`
        <div class="state-info-header" style="margin-bottom:var(--space-md); padding-bottom:var(--space-sm);">
          <div>
            <h3 class="state-info-title">${a.name}</h3>
            <div class="state-info-meta">${a.capital} • ${a.highCourt}</div>
          </div>
          <span class="badge badge-gold">${a.type.toUpperCase()}</span>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); font-size:var(--text-sm);">
          <div><strong>Stamp Duty:</strong> ${a.stampDuty.residential} residential, ${a.stampDuty.commercial} commercial. <span style="font-size:11px; color:var(--text-tertiary); display:block;">${a.stampDuty.notes}</span></div>
          <div><strong>Minimum Wage:</strong> ${a.laborLaw.minWage} <span style="font-size:11px; color:var(--text-tertiary); display:block;">Act: ${a.laborLaw.shopAct}</span></div>
          <div><strong>RERA Board:</strong> ${a.rera.authority} (${a.rera.established})</div>
          <div><strong>Excise Policy:</strong> Alcohol is ${a.excise.status}. <span style="font-size:11px; color:var(--text-tertiary); display:block;">${a.excise.policy}</span></div>
          <div><strong>Professional Tax:</strong> ${a.gstProfTax}</div>
          <div><strong>Special Local Laws:</strong> ${a.specialLaws.slice(0,2).join(", ")}...</div>
        </div>

        <div style="margin-top:var(--space-lg); text-align:right;">
          <a href="#/state/${a.id}" class="btn btn-secondary btn-sm" style="font-size:var(--text-xs); padding:6px 12px;">Open Full Legal Profile →</a>
        </div>
      `}),m.addEventListener("mouseleave",()=>{const n=document.getElementById(`node-circle-${u}`),o=document.getElementById(`node-text-${u}`),p=a.type==="ut";n&&(n.setAttribute("fill",p?"var(--bg-elevated)":"var(--bg-tertiary)"),n.setAttribute("stroke","var(--border-strong)"),n.setAttribute("stroke-width","1.5")),o&&o.setAttribute("fill","var(--text-secondary)"),i.classList.remove("visible")}),m.addEventListener("click",()=>{window.location.hash=`#/state/${u}`}))}),g&&c&&l&&d&&g.addEventListener("click",()=>{const m=c.value,u=l.value;if(m===u){d.innerHTML=`
          <div style="color:var(--accent-red); font-size:var(--text-xs); text-align:center; padding:var(--space-md); background:var(--accent-red-dim); border:1px solid rgba(239,68,68,0.2); border-radius:var(--radius-sm);">
            Please select two different states/UTs to run a comparative diligence analysis.
          </div>
        `;return}const a=R(m,u);if(!a)return;const n=a.state1,o=a.state2;d.innerHTML=`
        <div class="glass-panel" style="border: 1px solid var(--border-medium); margin-top:var(--space-md); overflow:hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Statute/Metric</th>
                <th>${n.name}</th>
                <th>${o.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stamp Duty (Res)</strong></td>
                <td style="color:var(--text-primary);">${n.stampDuty.residential}</td>
                <td style="color:var(--text-primary);">${o.stampDuty.residential}</td>
              </tr>
              <tr>
                <td><strong>Stamp Notes</strong></td>
                <td style="font-size:11px; line-height:1.4;">${n.stampDuty.notes}</td>
                <td style="font-size:11px; line-height:1.4;">${o.stampDuty.notes}</td>
              </tr>
              <tr>
                <td><strong>Min Wage</strong></td>
                <td style="color:var(--text-primary);">${n.laborLaw.minWage}</td>
                <td style="color:var(--text-primary);">${o.laborLaw.minWage}</td>
              </tr>
              <tr>
                <td><strong>Shop & Estb Act</strong></td>
                <td style="font-size:11px;">${n.laborLaw.shopAct}</td>
                <td style="font-size:11px;">${o.laborLaw.shopAct}</td>
              </tr>
              <tr>
                <td><strong>RERA Authority</strong></td>
                <td>${n.rera.authority}</td>
                <td>${o.rera.authority}</td>
              </tr>
              <tr>
                <td><strong>Excise / Prohibition</strong></td>
                <td><span class="badge ${n.excise.status==="Prohibition"?"badge-saffron":"badge-emerald"}" style="font-size:8px;">${n.excise.status}</span></td>
                <td><span class="badge ${o.excise.status==="Prohibition"?"badge-saffron":"badge-emerald"}" style="font-size:8px;">${o.excise.status}</span></td>
              </tr>
              <tr>
                <td><strong>ROC Jurisdiction</strong></td>
                <td>${n.rocJurisdiction}</td>
                <td>${o.rocJurisdiction}</td>
              </tr>
              <tr>
                <td><strong>Prof. Tax (Max)</strong></td>
                <td>${n.gstProfTax}</td>
                <td>${o.gstProfTax}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="padding:var(--space-md); text-align:center; background:rgba(255,255,255,0.01); border-top:1px solid var(--border-subtle);">
            <a href="#/demo" class="btn btn-secondary btn-sm" id="compare-ai-cta" style="font-size:11px; padding:6px 16px;">Ask AI to draft comparison memo →</a>
          </div>
        </div>
      `;const p=document.getElementById("compare-ai-cta");p&&p.addEventListener("click",()=>{localStorage.setItem("euclid_prefilled_query",`Compare the stamp duty and labor law compliance requirements in ${n.name} and ${o.name} side-by-side`)})}),h()}function M(t){const i=t==null?void 0:t.id,e=b(i);return e?`
    <!-- State Editorial Header -->
    <section class="section" style="padding-bottom: var(--space-xl); background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);">
      <div class="container">
        <div style="margin-bottom: var(--space-xl);">
          <a href="#/india-map" style="font-size: var(--text-sm); color: var(--text-secondary); display:flex; align-items:center; gap:4px;">
            <span>←</span> Back to Legal Map
          </a>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: var(--space-xl); border-bottom:1px solid var(--border-subtle); padding-bottom:var(--space-2xl);" class="state-header-flex">
          <div>
            <div style="display:flex; align-items:center; gap: var(--space-md); margin-bottom:var(--space-sm);">
              <span class="badge ${e.type==="state"?"badge-gold":"badge-blue"}">${e.type.toUpperCase()}</span>
              <span style="font-size: var(--text-sm); color: var(--accent-gold); font-weight:600; text-transform:uppercase;">Code: ${e.abbr}</span>
            </div>
            <h1 class="section-title" style="text-align:left; font-size:var(--text-5xl); margin-bottom:var(--space-xs);">${e.name}</h1>
            <p style="font-size: var(--text-lg); color: var(--text-secondary); margin:0;">
              Capital: <strong>${e.capital}</strong> • High Court: <strong>${e.highCourt}</strong>
            </p>
          </div>

          <div style="display:flex; gap: var(--space-sm);" class="state-header-actions">
            <a href="#/demo" class="btn btn-primary" id="state-ask-ai-cta">Ask AI about ${e.name}</a>
            <button class="btn btn-secondary" id="state-compare-trigger-btn">Compare with another state</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Legal Profiler Tabs -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        
        <div class="tabs" style="margin-bottom: var(--space-2xl);">
          <button class="tab active" data-tab="stamp">Stamp Duty & Financials</button>
          <button class="tab" data-tab="labor">Labor & Employment</button>
          <button class="tab" data-tab="property">Property & RERA</button>
          <button class="tab" data-tab="special">Excise & Special Statutes</button>
        </div>

        <div id="state-tab-content-root">
          <!-- Populated by JS -->
        </div>

      </div>
    </section>

    <!-- State Comparison Modal -->
    <div id="state-comparison-modal" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.8); z-index:10000; align-items:center; justify-content:center; padding:var(--space-xl);">
      <div class="glass-panel" style="background:var(--bg-secondary); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:var(--space-3xl); max-width:600px; width:100%; position:relative;">
        <button id="close-compare-modal-btn" style="position:absolute; right:var(--space-lg); top:var(--space-lg); font-size:20px; opacity:0.7;">✕</button>
        
        <h3 class="chapter-title" style="margin-bottom:var(--space-sm);">Compare ${e.name}</h3>
        <p style="font-size:var(--text-xs); color:var(--text-tertiary); margin-bottom:var(--space-xl);">Select a state or Union Territory to compare directly with ${e.name}:</p>
        
        <div style="margin-bottom:var(--space-xl);">
          <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:6px;">Compare ${e.name} with:</label>
          <select id="modal-compare-select" style="width:100%; padding:10px 16px; background:var(--bg-primary); border:1px solid var(--border-strong); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-base);">
            ${v.filter(r=>r.id!==e.id).map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
          </select>
        </div>

        <button class="btn btn-primary btn-full btn-lg" id="modal-compare-submit-btn">Run Side-by-Side Comparison</button>
      </div>
    </div>
  `:`
      <section class="hero" style="min-height:60vh;">
        <h2 class="section-title">Jurisdiction <em>Not Found</em></h2>
        <p class="section-subtitle">We couldn't find a state or Union Territory with the identifier "${i}".</p>
        <div style="margin-top:var(--space-xl);">
          <a href="#/india-map" class="btn btn-primary">Back to Legal Map</a>
        </div>
      </section>
    `}function $(t){const i=t==null?void 0:t.id,e=b(i);if(!e)return;const r=document.querySelectorAll(".tab"),s=document.getElementById("state-tab-content-root"),c=document.getElementById("state-compare-trigger-btn"),l=document.getElementById("state-comparison-modal"),g=document.getElementById("close-compare-modal-btn"),d=document.getElementById("modal-compare-submit-btn"),h=document.getElementById("modal-compare-select"),m=document.getElementById("state-ask-ai-cta");m&&m.addEventListener("click",()=>{localStorage.setItem("euclid_prefilled_query",`Provide a comprehensive legal due diligence summary for the state of ${e.name}, including stamp duty rates and labor compliance`)}),c&&l&&g&&(c.addEventListener("click",()=>{l.style.display="flex"}),g.addEventListener("click",()=>{l.style.display="none"}),l.addEventListener("click",a=>{a.target===l&&(l.style.display="none")})),d&&h&&d.addEventListener("click",()=>{const a=h.value;l.style.display="none",window.location.hash="#/india-map",setTimeout(()=>{const n=document.getElementById("compare-select-a"),o=document.getElementById("compare-select-b"),p=document.getElementById("run-comparison-btn");n&&o&&p&&(n.value=e.id,o.value=a,p.click())},100)});function u(a){let n="";a==="stamp"?n=`
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-gold); margin-bottom: var(--space-lg);">Stamp Duty Rates</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Residential Transactions</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${e.stampDuty.residential}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Commercial Transactions</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${e.stampDuty.commercial}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Key Notes & Concessions</strong>
                <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:4px; line-height:1.5;">${e.stampDuty.notes}</p>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-gold); margin-bottom: var(--space-lg);">Corporate & Corporate Registrars</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Registrar of Companies (ROC) Jurisdiction</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${e.rocJurisdiction}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Professional Tax (GST Regime)</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${e.gstProfTax}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">High Court Jurisdiction</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${e.highCourt}</span>
              </div>
            </div>
          </div>
        </div>
      `:a==="labor"?n=`
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-saffron); margin-bottom: var(--space-lg);">Minimum Wage Benchmarks</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Skilled & Semi-Skilled Wages</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${e.laborLaw.minWage}</span>
                <span style="font-size:11px; color:var(--text-tertiary); display:block; margin-top:2px;">Wages are variable and subject to quarterly VDA notifications.</span>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-saffron); margin-bottom: var(--space-lg);">Shops & Factories Regimes</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Shop Act</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${e.laborLaw.shopAct}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Factory Act Threshold</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${e.laborLaw.factoryThreshold}</span>
              </div>
            </div>
          </div>
        </div>
      `:a==="property"?n=`
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-emerald); margin-bottom: var(--space-lg);">RERA Board & Registration</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Authority Name</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${e.rera.authority}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">RERA Portal Website</strong>
                <a href="https://${e.rera.website}" target="_blank" style="font-size: var(--text-base); color:var(--accent-gold); font-weight:500;">${e.rera.website}</a>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Operational Since</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${e.rera.established}</span>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-emerald); margin-bottom: var(--space-lg);">Environmental & Green Permits</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">State Pollution Control Board</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${e.environmentalBody}</span>
                <span style="font-size:11px; color:var(--text-tertiary); display:block; margin-top:2px;">Issues Consent to Establish (CTE) & Consent to Operate (CTO).</span>
              </div>
            </div>
          </div>
        </div>
      `:a==="special"&&(n=`
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-blue); margin-bottom: var(--space-lg);">Special Local Acts & Regulations</h4>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm);">
              ${e.specialLaws.map(o=>`
                <li style="display:flex; align-items:flex-start; gap: var(--space-xs); font-size:var(--text-sm); color: var(--text-secondary);">
                  <span style="color: var(--accent-blue);">•</span>
                  <span>${o}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-blue); margin-bottom: var(--space-lg);">Excise & Key Sectors</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Alcohol / Excise Status</strong>
                <span class="badge ${e.excise.status==="Prohibition"?"badge-saffron":"badge-emerald"}" style="margin-top:4px;">
                  ${e.excise.status.toUpperCase()}
                </span>
                <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:6px; line-height:1.5;">${e.excise.policy}</p>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Key Regional Industries</strong>
                <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:4px;">
                  ${e.keyIndustries.map(o=>`<span class="chapter-tag" style="font-size:10px;">${o}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      `),s.innerHTML=n}r.forEach(a=>{a.addEventListener("click",()=>{r.forEach(o=>o.classList.remove("active")),a.classList.add("active");const n=a.getAttribute("data-tab");u(n)})}),u("stamp")}function N(){return`
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Target Audiences</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Tailored <em>Legal Solutions</em>
      </h1>
      <p class="hero-subtitle">
        Purpose-built configurations mapping to specific transaction, advisory, and litigation workflows in India.
      </p>
    </section>

    <!-- Solutions Layout Grid -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div class="grid grid-2">
          
          <!-- Solution 1: M&A Diligence -->
          <div class="card animate-on-scroll stagger-1" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon gold" style="margin:0; width:36px; height:36px; font-size:1.1rem;">🤝</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">M&A Due Diligence</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Accelerate transaction closures by structuring the legal review across our 12 diligence chapters. Euclid parses documents in data rooms to check title deeds, evaluate material contracts, and calculate state stamp liabilities.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Automated disclosure schedule drafting</li>
                <li>• Cross-state compliance audits (e.g. state industrial codes, GIDC/MIDC rules)</li>
                <li>• Stamp duty deficit calculators</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/due-diligence" class="btn btn-secondary btn-full btn-sm">Explore Due Diligence →</a>
            </div>
          </div>

          <!-- Solution 2: Litigation & Dispute Resolution -->
          <div class="card animate-on-scroll stagger-2" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon purple" style="margin:0; width:36px; height:36px; font-size:1.1rem;">⚖️</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">Litigation & Disputes</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Track cases and assess legal risks across all 24 High Courts, district courts, and central/state tribunals (NCLT, NCLAT, NCDRC, APTEL). Euclid analyzes pleadings and orders to compile court histories.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Litigation history searches across multiple courts</li>
                <li>• Analysis of case precedents and judge-wise analytics</li>
                <li>• Drafting of summaries, briefs, and responses</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/demo" class="btn btn-secondary btn-full btn-sm" id="litigation-ai-demo-link">Test Litigation Query →</a>
            </div>
          </div>

          <!-- Solution 3: Regulatory Compliance -->
          <div class="card animate-on-scroll stagger-1" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon emerald" style="margin:0; width:36px; height:36px; font-size:1.1rem;">📋</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">Regulatory & compliance</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Stay compliant with state-specific labor codes, shop registrations, environmental clearances (CTO/CTE), and excise policies. Euclid acts as a real-time compliance guardian for multi-state developers and manufacturers.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Real-time updates on state notifications and gazette changes</li>
                <li>• Checklist auditing for state pollution board criteria</li>
                <li>• Compliance mapping for the new 4 Central Labor Codes</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/india-map" class="btn btn-secondary btn-full btn-sm">Browse State Rules →</a>
            </div>
          </div>

          <!-- Solution 4: In-House Legal Departments -->
          <div class="card animate-on-scroll stagger-2" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon saffron" style="margin:0; width:36px; height:36px; font-size:1.1rem;">🏢</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">In-House Counsel</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Empower in-house teams to review bulk commercial contracts, enforce corporate standard playbooks, manage litigation caseload, and check vendor SLAs against internal policies.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• SLA notice and liability audits</li>
                <li>• Standardizing compliance playbooks for procurement</li>
                <li>• Automated NDA drafting and risk-profiling</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/demo" class="btn btn-primary btn-full btn-sm">Request Enterprise Trial</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `}function j(){const t=document.getElementById("litigation-ai-demo-link");t&&t.addEventListener("click",()=>{localStorage.setItem("euclid_prefilled_query","Draft a request summary representing our client in NCLT Mumbai regarding insolvency proceedings and pending debt claims")})}function H(){return`
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Interactive Demo</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Experience <em>Euclid AI</em>
      </h1>
      <p class="hero-subtitle">
        Interact with India's specialized legal intelligence. Ask regulatory, compliance, and transactional questions across state boundaries.
      </p>
    </section>

    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: 280px 1fr; gap: var(--space-xl); align-items: start;" class="demo-grid-layout">
          
          <!-- Left Panel: Examples & Upload -->
          <div style="display:flex; flex-direction:column; gap:var(--space-lg);">
            
            <!-- Upload Box -->
            <div class="glass-panel" style="padding: var(--space-lg); border-style: dashed; border-color: var(--border-strong); text-align: center;">
              <div style="font-size: 2rem; margin-bottom: var(--space-sm); color: var(--accent-gold);">📁</div>
              <h5 style="font-size: var(--text-sm); margin-bottom: var(--space-xs);">Analyze Documents</h5>
              <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-md);">Upload lease deeds, MoAs, or wage sheets (PDF, DOCX)</p>
              <button class="btn btn-secondary btn-full btn-sm" id="upload-doc-btn" style="padding: 8px 16px; font-size: var(--text-xs);">Choose File</button>
              <input type="file" id="actual-file-input" style="display:none;" />
            </div>

            <!-- Example Queries -->
            <div class="glass-panel" style="padding: var(--space-lg);">
              <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-md); letter-spacing:0.05em;">Suggested Queries</h5>
              <div style="display:flex; flex-direction:column; gap: var(--space-sm);">
                <button class="example-query-chip" data-query="What is the stamp duty in Maharashtra vs Karnataka for a lease deed?">
                  Stamp duty: MH vs KA
                </button>
                <button class="example-query-chip" data-query="Compare labor law compliance and minimum wages for a factory in Gujarat and Tamil Nadu.">
                  Labor wages: GJ vs TN
                </button>
                <button class="example-query-chip" data-query="Does a standard commercial contract require e-stamping in Delhi?">
                  E-stamping in Delhi
                </button>
                <button class="example-query-chip" data-query="Summarize the RERA filing guidelines and deadlines for residential builders in Uttar Pradesh.">
                  UP RERA rules
                </button>
              </div>
            </div>

            <div style="font-size: var(--text-xs); color: var(--text-tertiary); padding: 0 var(--space-sm);">
              <strong>Note:</strong> Euclid AI operates on locally integrated Indian state legislation databases. No real client documents are uploaded.
            </div>

          </div>

          <!-- Right Panel: Chat Interface -->
          <div>
            <div class="chat-container">
              <div class="chat-header">
                <div class="chat-header-dot"></div>
                <div style="flex:1;">
                  <h4 style="font-size: var(--text-sm); font-weight: 600; margin:0; line-height:1;">Euclid Legal Assistant</h4>
                  <span style="font-size: var(--text-xs); color: var(--text-secondary);">Active • Indian Jurisdictions v3.2</span>
                </div>
                <button class="btn btn-ghost" id="clear-chat-btn" style="padding: 4px var(--space-sm); font-size: var(--text-xs);">Clear Chat</button>
              </div>

              <div class="chat-messages" id="chat-messages-container">
                <!-- Welcome Message -->
                <div class="chat-message">
                  <div class="chat-avatar ai">E</div>
                  <div class="chat-bubble">
                    <strong>Welcome to Euclid.</strong> I am specialized in Indian corporate secretarial, real estate, taxation, and labor laws across all 28 states and 8 UTs.
                    <br/><br/>
                    You can ask cross-state legal queries, compare compliance frameworks, or draft disclosures. Try one of the suggested queries on the left or type your own.
                  </div>
                </div>
              </div>

              <!-- Typing Indicator Placeholder -->
              <div class="chat-message" id="typing-indicator" style="display:none; margin-left: var(--space-xl);">
                <div class="chat-avatar ai">E</div>
                <div class="chat-bubble" style="padding: 10px 16px;">
                  <div class="typing-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>

              <div class="chat-input-area">
                <input type="text" class="chat-input" id="chat-user-input" placeholder="Ask Euclid about state stamp laws, minimum wages, RERA filings..." />
                <button class="chat-send" id="chat-send-btn" aria-label="Send message">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `}const A={"What is the stamp duty in Maharashtra vs Karnataka for a lease deed?":`
    In **Maharashtra**, stamp duty on lease deeds is governed by the *Maharashtra Stamp Act, 1958* <span class="citation">Art 36A</span>. 
    For residential leases up to 60 months, the stamp duty is calculated at **0.25%** of the total rent + deposit value, and registration is mandatory through the e-registration portal <span class="citation">Sec 55</span>. For commercial leases, stamp duty is **5%** (in urban areas) if the lease duration exceeds 60 months.
    
    In **Karnataka**, stamp duty is governed by the *Karnataka Stamp Act, 1957* <span class="citation">Art 30</span>. 
    For residential leases up to 10 years, stamp duty is **0.5%** to **1%** depending on the lease term, plus a **1%** registration fee. For commercial leases, it scales up to **5%** if the lease exceeds 10 years.
    
    **Key Difference:** Maharashtra mandates online e-registration for all residential agreements, whereas Karnataka still allows physical stamping and offline registration at the Sub-Registrar office for leases exceeding 11 months.
  `,"Compare labor law compliance and minimum wages for a factory in Gujarat and Tamil Nadu.":`
    Here is a comparative breakdown of labor laws and wages between **Gujarat** and **Tamil Nadu**:

    1. **Minimum Wages:**
       - **Gujarat:** Regulated by the *Gujarat Minimum Wages Rules*. The current minimum wage for skilled factory workers averages **₹10,500–₹13,500/month** depending on the zone <span class="citation">Zone I/II</span>.
       - **Tamil Nadu:** Regulated by the *Tamil Nadu Minimum Wages Rules*. The skilled worker wages range from **₹10,000–₹15,000/month** but are heavily linked to a high Dearness Allowance (DA) tied to inflation indices <span class="citation">Sec 3(1)</span>.

    2. **Factory Hours & Overtime:**
       - **Gujarat:** Relaxed its factory threshold. The *Factories Act* applies to units with 20+ workers (with power) or 40+ workers (without power).
       - **Tamil Nadu:** Retains the traditional threshold of 10+ workers (with power) and 20+ workers (without power) <span class="citation">Sec 2(m)</span>.

    3. **Operational Flexibility:**
       - **Gujarat** allows continuous 24/7 shifts and easy online self-certification.
       - **Tamil Nadu** requires approvals for night shifts for women and maintains stricter inspectorate-based registers.
  `,"Does a standard commercial contract require e-stamping in Delhi?":`
    Yes, under the *Indian Stamp (Delhi Amendment) Act*, e-stamping is mandatory for all transactions that require stamp duty <span class="citation">Delhi Stamp Rules, 2011</span>.
    
    A standard commercial contract (like a Service Level Agreement or Non-Disclosure Agreement) falls under **Article 5 (Agreement)** of Schedule I-A of the Stamp Act:
    - **SLA/NDA:** Typically requires stamp duty of **₹50** or **₹100**.
    - **Indemnity Bonds:** Requires **₹100**.
    
    The physical stamp paper system has been completely decommissioned in the NCT of Delhi. E-stamps must be purchased online via the Stock Holding Corporation of India Limited (SHCIL) portal <span class="citation">SHCIL Delhi</span>. Running contracts on unstamped paper makes them inadmissible as evidence under Section 35 of the Stamp Act.
  `,"Summarize the RERA filing guidelines and deadlines for residential builders in Uttar Pradesh.":`
    Under **UP RERA** (*Uttar Pradesh Real Estate Regulatory Authority*), residential builders face strict compliance rules <span class="citation">UP RERA Rules, 2017</span>:

    1. **Project Registration:** Any project with land area exceeding **500 sq meters** or **8 apartments** must be registered before advertising or selling <span class="citation">Sec 3</span>.
    2. **Quarterly Updates:** Developers must update the UP RERA portal every quarter with details on sales, construction milestones, and pending approvals <span class="citation">Sec 11</span>.
    3. **Escrow Requirement:** **70%** of all customer receivables must be deposited into a separate scheduled bank account (RERA Escrow Account) to cover land and construction costs <span class="citation">Sec 4(2)(l)(D)</span>.
    4. **Defect Liability:** The builder is liable for structural defects for **5 years** from the date of handover <span class="citation">Sec 14</span>.
    
    **Enforcement:** UP RERA has active benches in Lucknow and Greater Noida (NCR) that levy penalties up to 10% of the project cost for registration violations.
  `};function O(){const t=document.getElementById("chat-messages-container"),i=document.getElementById("chat-user-input"),e=document.getElementById("chat-send-btn"),r=document.getElementById("clear-chat-btn"),s=document.getElementById("typing-indicator"),c=document.querySelectorAll(".example-query-chip"),l=document.getElementById("upload-doc-btn"),g=document.getElementById("actual-file-input");l&&g&&(l.addEventListener("click",()=>{g.click()}),g.addEventListener("change",o=>{if(o.target.files.length>0){const p=o.target.files[0].name;d(`[Uploaded Document: ${p}]`),u(`I have analyzed **${p}**. 
        
        **Key Findings:**
        1. **Jurisdiction:** Document relates to transactions in **Maharashtra**.
        2. **Stamp Duty:** A potential deficit of **0.25%** under Maharashtra Stamp Act Art 36A has been detected.
        3. **Signatures:** The agreement has not been registered under the Indian Registration Act Sec 17.`)}}));function d(o){const p=document.createElement("div");p.className="chat-message user",p.innerHTML=`
      <div class="chat-avatar human">U</div>
      <div class="chat-bubble user">
        ${o}
      </div>
    `,t.appendChild(p),m()}function h(o){const p=document.createElement("div");p.className="chat-message",p.innerHTML=`
      <div class="chat-avatar ai">E</div>
      <div class="chat-bubble">
        ${o}
      </div>
    `,t.appendChild(p),m()}function m(){t.scrollTop=t.scrollHeight}function u(o=""){s.style.display="flex",m(),setTimeout(()=>{s.style.display="none",h(o||`
        I have analyzed your query based on current Central and State statutes. 
        
        **Regulatory Compliance Assessment:**
        - **Stamp Duty:** Stamp duties vary by state jurisdiction. In Delhi, e-stamping is mandatory.
        - **Labor Laws:** Ensure compliance with the respective state Shop & Establishment registration thresholds.
        - **Property:** Any transaction involving real estate must verify the title chain and RERA status.
        
        Let me know if you would like me to compile a draft disclosure sheet or compare a specific second state.
      `)},1500)}function a(){const o=i.value.trim();if(!o)return;d(o),i.value="";let p="";for(const y in A)if(o.toLowerCase().includes(y.toLowerCase())||y.toLowerCase().includes(o.toLowerCase())){p=A[y];break}u(p)}e&&i&&(e.addEventListener("click",a),i.addEventListener("keydown",o=>{o.key==="Enter"&&a()})),c.forEach(o=>{o.addEventListener("click",()=>{const p=o.getAttribute("data-query");i.value=p,a()})}),r&&r.addEventListener("click",()=>{t.innerHTML=`
        <div class="chat-message">
          <div class="chat-avatar ai">E</div>
          <div class="chat-bubble">
            <strong>Chat Cleared.</strong> How can I assist you with Indian legal due diligence or statutory rules today?
          </div>
        </div>
      `});const n=localStorage.getItem("euclid_prefilled_query");n&&(localStorage.removeItem("euclid_prefilled_query"),setTimeout(()=>{i.value=n,a()},300))}function q(){return`
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-emerald">∴ Enterprise Grade</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Sovereign <em>Data Security</em>
      </h1>
      <p class="hero-subtitle">
        Euclid is built from the ground up for strict confidentiality. Your documents, queries, and case secrets remain completely private and reside strictly within Indian borders.
      </p>
    </section>

    <!-- DPDP and Data Sovereignty Details -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container container-narrow">
        
        <div style="display:flex; flex-direction:column; gap: var(--space-3xl);">
          
          <!-- DPDP Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🛡️</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">DPDP Act, 2023 Compliance</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  Euclid complies fully with India's *Digital Personal Data Protection Act, 2023*. We process all files solely as a Data Processor under explicit client instructions (Data Fiduciary).
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Explicit Consent Logging:** No document analysis without explicit request parameters</li>
                  <li>• **Data Erasure (Right to be Forgotten):** Direct and total deletion of uploaded briefs and contracts upon request</li>
                  <li>• **Strict Access Control:** Multi-factor authentication and role-based permissions</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Data Localization Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🇮🇳</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">Indian Data Sovereignty</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  In accordance with national security recommendations and legal sector compliance, Euclid hosts all data on local Indian servers.
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Local Servers:** Hosted in Tier-4 data centers in Mumbai and Bengaluru</li>
                  <li>• **No Cross-Border Data Flows:** Your files never leave Indian borders for model execution or storage</li>
                  <li>• **Sovereign Encryption:** Files encrypted using AES-256 at rest and TLS 1.3 in transit</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Model Training Policy Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🚫</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">No Model Training on Client Files</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  Your proprietary drafts and legal analyses are your exclusive intellectual property.
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Zero Model Training:** We never store client queries, uploads, or summaries to train base models or public models</li>
                  <li>• **Isolated Weights:** Custom enterprise weight adjustments are isolated to specific client directories</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `}function J(){return`
    <!-- Hero Section -->
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Our Mission</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        About <em>Euclid</em>
      </h1>
      <p class="hero-subtitle">
        Euclid was founded by legal experts and AI researchers to solve India's unique federal legal fragmentation.
      </p>
    </section>

    <!-- Mission & Story -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container container-narrow">
        <div style="display:flex; flex-direction:column; gap: var(--space-xl); font-size:var(--text-base); color:var(--text-secondary); line-height:1.8;">
          <p>
            India possesses one of the most complex legal frameworks in the world. With 28 states, 8 Union Territories, and a federal setup where legislation is split between central, state, and concurrent lists, a corporate transaction often triggers thousands of local compliance checks.
          </p>
          <p>
            Traditional search databases return flat text documents but cannot evaluate stamp duty deficits across boundaries, match state-level minimum wage updates, or audit local land registration rules.
          </p>
          <p>
            **Euclid** bridges this gap. By building structured due diligence chapter maps and aligning them with detailed state registries, we enable attorneys to run precision audits in minutes rather than weeks.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact & Access Form -->
    <section class="section" id="contact-form-section">
      <div class="container container-narrow">
        <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-accent);">
          <h3 class="chapter-title" style="font-size:var(--text-2xl); text-align:center; margin-bottom:var(--space-sm);">Request Early Access</h3>
          <p style="font-size:var(--text-sm); color:var(--text-secondary); text-align:center; margin-bottom:var(--space-2xl);">Join our pilot program for leading Indian law firms and corporate legal offices.</p>

          <form id="request-access-form" style="display:flex; flex-direction:column; gap: var(--space-lg);">
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);" class="form-grid-2">
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Full Name *</label>
                <input type="text" id="form-name" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Email Address *</label>
                <input type="email" id="form-email" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);" class="form-grid-2">
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Law Firm / Organization *</label>
                <input type="text" id="form-firm" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Primary State Jurisdiction</label>
                <select id="form-state" style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);">
                  <option value="central">Central / Multi-State</option>
                  ${v.map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}
                </select>
              </div>
            </div>

            <div>
              <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Message / Legal Use Case</label>
              <textarea id="form-message" rows="4" style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm); font-family:var(--font-sans); resize:vertical;" placeholder="Describe your primary practice areas (e.g. Real Estate acquisitions, M&A diligence...)"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: var(--space-md);">Submit Request</button>

          </form>

          <div id="form-success-container" style="display:none; text-align:center; padding:var(--space-2xl) 0;">
            <div style="font-size:3rem; margin-bottom:var(--space-md); color:var(--accent-emerald);">✓</div>
            <h4 class="chapter-title" style="color:var(--text-primary);">Request Received</h4>
            <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-xl);">Our enterprise relations team will reach out within 24 hours to schedule a detailed platform demonstration.</p>
            <button class="btn btn-secondary" id="form-reset-btn">Submit Another Request</button>
          </div>

        </div>
      </div>
    </section>
  `}function W(){const t=document.getElementById("request-access-form"),i=document.getElementById("form-success-container"),e=document.getElementById("form-reset-btn");t&&i&&t.addEventListener("submit",r=>{r.preventDefault(),t.style.display="none",i.style.display="block"}),e&&t&&i&&e.addEventListener("click",()=>{t.reset(),i.style.display="none",t.style.display="flex"})}const K=[{pattern:/^\/?$/,render:E},{pattern:/^\/due-diligence$/,render:I,init:T,pageName:"due-diligence"},{pattern:/^\/platform$/,render:L,pageName:"platform"},{pattern:/^\/india-map$/,render:B,init:z,pageName:"india-map"},{pattern:/^\/state\/([^/]+)$/,render:t=>M(t),init:t=>$(t),paramNames:["id"],pageName:"india-map"},{pattern:/^\/solutions$/,render:N,init:j,pageName:"solutions"},{pattern:/^\/demo$/,render:H,init:O,pageName:"demo"},{pattern:/^\/security$/,render:q,pageName:"security"},{pattern:/^\/about$/,render:J,init:W,pageName:"about"}];function k(){const i=(window.location.hash||"#/").slice(1);let e=null,r={};for(const g of K){const d=g.pattern.exec(i);if(d){e=g,g.paramNames&&g.paramNames.forEach((h,m)=>{r[h]=d[m+1]});break}}const s=document.getElementById("main-content");if(!s)return;e?(s.innerHTML=e.render(r),window.scrollTo(0,0),w(e.pageName),e.init&&e.init(r),F(),G()):(s.innerHTML=`
      <section class="hero" style="min-height:70vh;">
        <h1 class="hero-title">404 — <em>Not Found</em></h1>
        <p class="hero-subtitle">The legal intelligence pathway you requested does not exist or has been relocated.</p>
        <div style="margin-top:var(--space-xl);">
          <a href="#/" class="btn btn-primary">Return to Home</a>
        </div>
      </section>
    `,w(null));const c=document.getElementById("mobile-menu"),l=document.getElementById("mobile-toggle");c&&c.classList.contains("active")&&c.classList.remove("active"),l&&l.classList.contains("active")&&l.classList.remove("active")}function w(t){document.querySelectorAll(".nav-link").forEach(e=>{const r=e.getAttribute("data-page");r&&r===t?e.classList.add("active"):e.classList.remove("active")})}function G(){const t=document.querySelectorAll(".animate-on-scroll"),i=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),i.unobserve(r.target))})},{threshold:.1});t.forEach(e=>i.observe(e))}function F(){const t=document.querySelectorAll(".counter"),i=new IntersectionObserver(e=>{e.forEach(r=>{if(r.isIntersecting){const s=r.target,c=+s.getAttribute("data-target"),l=1200,g=16,d=l/g,h=c/d;let m=0;const u=setInterval(()=>{m++;const a=h*m;m>=d?(s.textContent=c.toLocaleString("en-IN"),clearInterval(u)):s.textContent=Math.floor(a).toLocaleString("en-IN")},g);i.unobserve(s)}})},{threshold:.1});t.forEach(e=>i.observe(e))}function U(){const t=document.getElementById("header-banner"),i=document.getElementById("banner-close");t&&i&&i.addEventListener("click",()=>{t.classList.add("hidden"),document.documentElement.style.setProperty("--banner-height","0px")});let e=window.scrollY;const r=document.getElementById("main-header");r&&window.addEventListener("scroll",()=>{const l=window.scrollY;l>e&&l>120?r.classList.add("hidden"):r.classList.remove("hidden"),e=l},{passive:!0});const s=document.getElementById("mobile-toggle"),c=document.getElementById("mobile-menu");s&&c&&s.addEventListener("click",()=>{s.classList.toggle("active"),c.classList.toggle("active")})}window.addEventListener("hashchange",k);window.addEventListener("DOMContentLoaded",()=>{U(),k()});
