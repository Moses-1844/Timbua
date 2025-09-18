export interface MineralSite {
  county: string;
  name: string;
  coordinates: [number, number];
  mineral: string;
  description: string;
}


export const KENYA_MINERALS: MineralSite[] = [
  // --- Nairobi County ---
  {
    county: "Nairobi",
    name: "Nairobi Quarry",
    coordinates: [-1.2921, 36.8219],
    mineral: "Building Stone",
    description: "Quarry supplying construction stones to the capital."
  },
  {
    county: "Nairobi",
    name: "Clay Extraction - Ruai",
    coordinates: [-1.3000, 36.9000],
    mineral: "Clay",
    description: "Clay site supporting brick-making industries."
  },

  // --- Mombasa County ---
  {
    county: "Mombasa",
    name: "Coral Limestone Site - Likoni",
    coordinates: [-4.0631, 39.6728],
    mineral: "Limestone",
    description: "Coral limestone mined for cement manufacturing."
  },
  {
    county: "Mombasa",
    name: "Salt Pans - Port Reitz",
    coordinates: [-4.0500, 39.6500],
    mineral: "Salt",
    description: "Coastal salt extraction site."
  },

  // --- Kitui County ---
  {
    county: "Kitui",
    name: "Coal Mining Site - Mui Basin",
    coordinates: [-1.3745, 38.0103],
    mineral: "Coal",
    description: "Large coal deposits discovered in the Mui Basin."
  },
  {
    county: "Kitui",
    name: "Limestone Quarry - Kanziko",
    coordinates: [-1.5123, 38.1672],
    mineral: "Limestone",
    description: "Limestone used for cement production."
  },

  // --- Turkana County ---
  {
    county: "Turkana",
    name: "Gold Panning - Lodwar",
    coordinates: [3.1200, 35.6000],
    mineral: "Gold",
    description: "Artisanal gold panning in riverbeds."
  },
  {
    county: "Turkana",
    name: "Gypsum Site - Lokichogio",
    coordinates: [4.2000, 34.3500],
    mineral: "Gypsum",
    description: "Deposits of gypsum for cement industries."
  },

  // --- Kisumu County ---
  {
    county: "Kisumu",
    name: "Kisian Quarry",
    coordinates: [-0.0917, 34.7679],
    mineral: "Building Stone",
    description: "Stone quarry supporting local construction."
  },
  {
    county: "Kisumu",
    name: "Sand Harvesting - Nyando",
    coordinates: [-0.1500, 34.9000],
    mineral: "Sand",
    description: "River sand for local construction."
  },

  // --- Machakos County ---
  {
    county: "Machakos",
    name: "Mwala Quarry",
    coordinates: [-1.5167, 37.2667],
    mineral: "Granite",
    description: "Granite quarry for road and building projects."
  },
  {
    county: "Machakos",
    name: "Clay Site - Athi River",
    coordinates: [-1.4500, 37.0167],
    mineral: "Clay",
    description: "Clay mining for cement and brick-making."
  },

  // --- Kakamega County ---
  {
    county: "Kakamega",
    name: "Gold Mines - Ikolomani",
    coordinates: [0.2833, 34.7500],
    mineral: "Gold",
    description: "Traditional artisanal gold mining in Ikolomani."
  },
  {
    county: "Kakamega",
    name: "Building Stone Quarry - Malava",
    coordinates: [0.4500, 34.8667],
    mineral: "Building Stone",
    description: "Stone extraction for construction in Western Kenya."
  },

  // --- Meru County ---
  {
    county: "Meru",
    name: "Granite Quarry - Timau",
    coordinates: [0.0500, 37.1500],
    mineral: "Granite",
    description: "Granite mining in the highlands of Meru."
  },
  {
    county: "Meru",
    name: "Gemstones - Igembe",
    coordinates: [0.2333, 37.9500],
    mineral: "Gemstones",
    description: "Gemstones such as garnet and tourmaline found in Meru."
  },

  // --- Kwale County ---
  {
    county: "Kwale",
    name: "Titanium Site - Msambweni",
    coordinates: [-4.4733, 39.4742],
    mineral: "Titanium",
    description: "Large titanium deposits exploited for export."
  },
  {
    county: "Kwale",
    name: "Limestone Site - Shimba Hills",
    coordinates: [-4.3000, 39.3667],
    mineral: "Limestone",
    description: "Limestone mining supporting cement industries."
  },

  // --- Baringo County ---
  {
    county: "Baringo",
    name: "Fluorspar Mines - Kerio Valley",
    coordinates: [0.8500, 35.6000],
    mineral: "Fluorspar",
    description: "Major fluorspar deposits mined in Kerio Valley."
  },
  {
    county: "Baringo",
    name: "Diatomite Site - Kabarnet",
    coordinates: [0.4833, 35.9833],
    mineral: "Diatomite",
    description: "Diatomite extraction for industrial uses."
  },
  // --- Nyeri County ---
{
  county: "Nyeri",
  name: "Building Stone Quarry - Othaya",
  coordinates: [-0.5500, 36.9500],
  mineral: "Building Stone",
  description: "Quarry producing stones for central Kenya construction."
},
{
  county: "Nyeri",
  name: "Gemstone Site - Mukurwe-ini",
  coordinates: [-0.5333, 37.0833],
  mineral: "Gemstones",
  description: "Small-scale mining of tourmaline and garnet."
},

// --- Kilifi County ---
{
  county: "Kilifi",
  name: "Limestone Site - Vipingo",
  coordinates: [-3.7500, 39.7500],
  mineral: "Limestone",
  description: "Major limestone site for Bamburi Cement."
},
{
  county: "Kilifi",
  name: "Salt Pans - Gongoni",
  coordinates: [-3.3833, 40.0167],
  mineral: "Salt",
  description: "Large salt harvesting pans along the coast."
},

// --- Kajiado County ---
{
  county: "Kajiado",
  name: "Gypsum Mining - Kajiado Central",
  coordinates: [-1.8500, 36.7833],
  mineral: "Gypsum",
  description: "Gypsum extraction for cement and plaster production."
},
{
  county: "Kajiado",
  name: "Building Stone Quarry - Isinya",
  coordinates: [-1.6833, 36.8333],
  mineral: "Building Stone",
  description: "Quarry producing construction stones for Nairobi and beyond."
},

// --- Taita Taveta County ---
{
  county: "Taita Taveta",
  name: "Tsavo Gemstones - Voi",
  coordinates: [-3.4000, 38.5667],
  mineral: "Gemstones",
  description: "Rich in tsavorite garnets and other gemstones."
},
{
  county: "Taita Taveta",
  name: "Iron Ore - Kishushe",
  coordinates: [-3.2667, 38.3833],
  mineral: "Iron Ore",
  description: "Large deposits of iron ore in Kishushe hills."
},

// --- Narok County ---
{
  county: "Narok",
  name: "Gold Mining - Lolgorian",
  coordinates: [-1.0500, 34.8167],
  mineral: "Gold",
  description: "Artisanal gold mining activities in Transmara region."
},
{
  county: "Narok",
  name: "Fluorspar Deposits - Suswa",
  coordinates: [-1.0500, 36.3500],
  mineral: "Fluorspar",
  description: "Potential fluorspar deposits in the Suswa region."
},
// --- Baringo County ---
{
  county: "Baringo",
  name: "Fluorspar Mining - Kerio Valley",
  coordinates: [0.8500, 35.6000],
  mineral: "Fluorspar",
  description: "Fluorspar mining site supporting steel and chemical industries."
},
{
  county: "Baringo",
  name: "Pumice Quarry - Kabarnet",
  coordinates: [0.4833, 35.9833],
  mineral: "Pumice",
  description: "Pumice extraction for lightweight construction materials."
},

// --- Meru County ---
{
  county: "Meru",
  name: "Chromite Deposits - Nkubu",
  coordinates: [0.1000, 37.6500],
  mineral: "Chromite",
  description: "Small-scale chromite deposits supporting metalworks."
},
{
  county: "Meru",
  name: "Building Stone Quarry - Maua",
  coordinates: [0.2333, 37.9333],
  mineral: "Building Stone",
  description: "Quarry for local construction stone supply."
},

// --- Migori County ---
{
  county: "Migori",
  name: "Gold Mining - Macalder",
  coordinates: [-1.0000, 34.6500],
  mineral: "Gold",
  description: "Historic gold mines with artisanal and commercial activity."
},
{
  county: "Migori",
  name: "Copper Site - Masara",
  coordinates: [-0.9500, 34.7000],
  mineral: "Copper",
  description: "Copper mineralization associated with gold deposits."
},

// --- West Pokot County ---
{
  county: "West Pokot",
  name: "Pozzolana Quarry - Ortum",
  coordinates: [1.5167, 35.1167],
  mineral: "Pozzolana",
  description: "Pozzolana mined for blending cement."
},
{
  county: "West Pokot",
  name: "Limestone Deposits - Kapenguria",
  coordinates: [1.2500, 35.1167],
  mineral: "Limestone",
  description: "Limestone resources for cement industries."
},

// --- Elgeyo Marakwet County ---
{
  county: "Elgeyo Marakwet",
  name: "Fluorspar Belt - Kimwarer",
  coordinates: [0.1833, 35.5667],
  mineral: "Fluorspar",
  description: "Part of the Kerio Valley fluorspar mining region."
},
{
  county: "Elgeyo Marakwet",
  name: "Iron Ore - Chepsirei",
  coordinates: [0.5000, 35.5333],
  mineral: "Iron Ore",
  description: "Iron ore deposits under exploration."
},
// --- Garissa County ---
{
  county: "Garissa",
  name: "Gypsum Deposits - Dadaab",
  coordinates: [0.0500, 40.3167],
  mineral: "Gypsum",
  description: "Gypsum reserves used in cement and plaster production."
},
{
  county: "Garissa",
  name: "Building Stone - Garissa Town",
  coordinates: [-0.4569, 39.6583],
  mineral: "Building Stone",
  description: "Quarry for construction stones in the semi-arid region."
},

// --- Embu County ---
{
  county: "Embu",
  name: "Granite Quarry - Mbeere",
  coordinates: [-0.5333, 37.4500],
  mineral: "Granite",
  description: "Granite quarry supporting local construction."
},
{
  county: "Embu",
  name: "Clay Site - Siakago",
  coordinates: [-0.4167, 37.6333],
  mineral: "Clay",
  description: "Clay deposits for brick and pottery industries."
},

// --- Homa Bay County ---
{
  county: "Homa Bay",
  name: "Gold Panning - Rongo",
  coordinates: [-0.7500, 34.6000],
  mineral: "Gold",
  description: "Artisanal gold mining site along riverbeds."
},
{
  county: "Homa Bay",
  name: "Building Stone Quarry - Ndhiwa",
  coordinates: [-0.6167, 34.5667],
  mineral: "Building Stone",
  description: "Stone quarry serving local construction projects."
},

// --- Bungoma County ---
{
  county: "Bungoma",
  name: "Limestone Site - Webuye",
  coordinates: [0.6167, 34.7667],
  mineral: "Limestone",
  description: "Limestone for nearby cement production."
},
{
  county: "Bungoma",
  name: "Clay Extraction - Chwele",
  coordinates: [0.7167, 34.7000],
  mineral: "Clay",
  description: "Clay mining for bricks and tiles."
},

// --- Taita Taveta County ---
{
  county: "Taita Taveta",
  name: "Tsavorite Gem Mine - Voi",
  coordinates: [-3.4000, 38.5667],
  mineral: "Gemstones",
  description: "World-famous tsavorite gemstone mines."
},
{
  county: "Taita Taveta",
  name: "Iron Ore - Kishushe",
  coordinates: [-3.4167, 38.4667],
  mineral: "Iron Ore",
  description: "Iron ore deposits under mining and export."
},
// --- Isiolo County ---
{
  county: "Isiolo",
  name: "Soda Ash Site - Kinna",
  coordinates: [0.3500, 38.9167],
  mineral: "Soda Ash",
  description: "Soda ash deposits for chemical and industrial use."
},
{
  county: "Isiolo",
  name: "Gemstone Mining - Isiolo Town",
  coordinates: [0.3500, 37.5833],
  mineral: "Gemstones",
  description: "Variety of semi-precious gemstones extracted."
},

// --- Murang'a County ---
{
  county: "Murang'a",
  name: "Granite Quarry - Maragua",
  coordinates: [-0.7833, 37.1333],
  mineral: "Granite",
  description: "Granite for building and road construction."
},
{
  county: "Murang'a",
  name: "Sand Harvesting - Sagana River",
  coordinates: [-0.7833, 37.2167],
  mineral: "Sand",
  description: "Sand harvested from the Sagana River for construction."
},

// --- Kericho County ---
{
  county: "Kericho",
  name: "Building Stone - Kipkelion",
  coordinates: [-0.1667, 35.3667],
  mineral: "Building Stone",
  description: "Stone quarry serving tea estates and towns."
},
{
  county: "Kericho",
  name: "Clay Site - Belgut",
  coordinates: [-0.3500, 35.3500],
  mineral: "Clay",
  description: "Clay deposits used in pottery and tiles."
},

// --- Siaya County ---
{
  county: "Siaya",
  name: "Gold Panning - Bondo",
  coordinates: [0.0500, 34.2667],
  mineral: "Gold",
  description: "Artisanal gold panning along riverbeds."
},
{
  county: "Siaya",
  name: "Sand Harvesting - Yala River",
  coordinates: [0.1333, 34.3667],
  mineral: "Sand",
  description: "River sand harvested for building projects."
},

// --- Marsabit County ---
{
  county: "Marsabit",
  name: "Fluorspar Deposits - Moyale",
  coordinates: [3.5167, 39.0500],
  mineral: "Fluorspar",
  description: "Fluorspar reserves used in steel and aluminum industries."
},
{
  county: "Marsabit",
  name: "Salt Pans - Chalbi Desert",
  coordinates: [3.2167, 37.9500],
  mineral: "Salt",
  description: "Salt pans within Chalbi Desert supporting local trade."
},
// --- Kirinyaga County ---
{
  county: "Kirinyaga",
  name: "Building Stone Quarry - Sagana",
  coordinates: [-0.5000, 37.2000],
  mineral: "Building Stone",
  description: "Building stones quarried for local construction."
},
{
  county: "Kirinyaga",
  name: "Sand Harvesting - Thiba River",
  coordinates: [-0.6000, 37.2500],
  mineral: "Sand",
  description: "River sand for building and road projects."
},

// --- Bungoma County ---
{
  county: "Bungoma",
  name: "Limestone Deposits - Webuye",
  coordinates: [0.6167, 34.7667],
  mineral: "Limestone",
  description: "Limestone reserves supporting cement production."
},
{
  county: "Bungoma",
  name: "Clay Extraction - Kanduyi",
  coordinates: [0.5667, 34.5667],
  mineral: "Clay",
  description: "Clay deposits used for brick-making and pottery."
},

// --- Trans Nzoia County ---
{
  county: "Trans Nzoia",
  name: "Granite Quarry - Kitale",
  coordinates: [1.0167, 35.0000],
  mineral: "Granite",
  description: "Granite quarry for roads and construction in Kitale."
},
{
  county: "Trans Nzoia",
  name: "Sand Harvesting - Nzoia River",
  coordinates: [0.9500, 34.9167],
  mineral: "Sand",
  description: "Sand mining along Nzoia River."
},

// --- Laikipia County ---
{
  county: "Laikipia",
  name: "Marble Deposits - Nanyuki",
  coordinates: [0.0167, 37.0667],
  mineral: "Marble",
  description: "Marble stone for decorative construction."
},
{
  county: "Laikipia",
  name: "Gemstone Mining - Laikipia North",
  coordinates: [0.3500, 36.9833],
  mineral: "Gemstones",
  description: "Semi-precious gemstones found in Laikipia highlands."
},

// --- Kajiado County ---
{
  county: "Kajiado",
  name: "Limestone Quarry - Kajiado Central",
  coordinates: [-1.8500, 36.7833],
  mineral: "Limestone",
  description: "Major limestone quarries supporting cement industries."
},
{
  county: "Kajiado",
  name: "Fluorspar Mining - Olorgesailie",
  coordinates: [-1.5000, 36.6500],
  mineral: "Fluorspar",
  description: "Fluorspar deposits for industrial use."
},
// --- Kericho County ---
{
  county: "Kericho",
  name: "Building Stone Quarry - Kipkelion",
  coordinates: [-0.2833, 35.3500],
  mineral: "Building Stone",
  description: "Quarry supplying stones for construction projects."
},
{
  county: "Kericho",
  name: "Clay Deposits - Kericho",
  coordinates: [-0.3667, 35.2833],
  mineral: "Clay",
  description: "Clay used in local brick-making and pottery."
},

// --- Homa Bay County ---
{
  county: "Homa Bay",
  name: "Gold Panning - Rusinga Island",
  coordinates: [-0.4000, 34.2000],
  mineral: "Gold",
  description: "Artisanal gold mining along Lake Victoria islands."
},
{
  county: "Homa Bay",
  name: "Sand Harvesting - Kendu Bay",
  coordinates: [-0.3500, 34.6500],
  mineral: "Sand",
  description: "River sand extraction for local construction."
},

// --- Nyandarua County ---
{
  county: "Nyandarua",
  name: "Building Stone Quarry - Ol Kalou",
  coordinates: [-0.2667, 36.3833],
  mineral: "Building Stone",
  description: "Quarry producing building stones for regional demand."
},
{
  county: "Nyandarua",
  name: "Granite Site - Aberdare Ranges",
  coordinates: [-0.4500, 36.6000],
  mineral: "Granite",
  description: "Granite deposits from the Aberdare highlands."
},

// --- Meru County ---
{
  county: "Meru",
  name: "Gemstone Mining - Igembe",
  coordinates: [0.1667, 37.9500],
  mineral: "Gemstones",
  description: "Semi-precious gemstones mined in Igembe area."
},
{
  county: "Meru",
  name: "Limestone Quarry - Meru South",
  coordinates: [0.0500, 37.6500],
  mineral: "Limestone",
  description: "Limestone reserves supporting cement factories."
},

// --- Embu County ---
{
  county: "Embu",
  name: "Iron Ore Site - Mbeere",
  coordinates: [-0.5167, 37.4500],
  mineral: "Iron Ore",
  description: "Iron ore deposits located in Mbeere region."
},
{
  county: "Embu",
  name: "Building Stone Quarry - Embu Town",
  coordinates: [-0.5333, 37.4500],
  mineral: "Building Stone",
  description: "Building stones mined for urban development."
}






];


