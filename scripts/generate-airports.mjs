import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const scriptsDir = path.join(root, "scripts");
const outPath = path.join(root, "data", "airports.ts");
const rawFiles = fs
  .readdirSync(scriptsDir)
  .filter((file) => file.startsWith("airports-raw") && file.endsWith(".tsv"))
  .sort();
const raw = rawFiles
  .map((file) => fs.readFileSync(path.join(scriptsDir, file), "utf8"))
  .join("\n");

const POPULAR_GROUPS = [
  ["MIỀN BẮC", ["HAN", "HPH", "VDO", "DIN"]],
  ["MIỀN TRUNG", ["DAD", "THD", "VII", "HUI", "VDH", "VCL"]],
  ["MIỀN NAM", ["SGN", "CXR", "PQC", "VCA", "DLI", "UIH", "TBB", "BMV", "PXU", "VCS", "VKG", "CAH"]],
  ["ĐÔNG NAM Á", ["BKK", "SIN", "KUL", "VTE", "MNL", "HKT", "CNX", "RGN", "KOS", "CGK", "LPQ", "SAI", "PNH", "DPS"]],
  ["NAM Á", ["DEL", "BLR", "HYD", "BOM"]],
  ["ĐÔNG BẮC Á", ["TPE", "ICN", "CAN", "SHA", "PUS", "NRT", "HKG", "DXB", "NGO", "KIX", "PVG", "KHH", "PEK", "SZX", "HND", "FUK", "XMN", "HGH", "CTU", "KMG"]],
  ["CHÂU ÂU", ["FRA", "CDG", "AMS", "MUC", "PRG", "HEL", "VIE", "LHR", "ZRH", "CPH", "SVO", "ROM", "MAD", "LGW", "BCN", "MIL", "GVA", "LYS", "NCE", "TLS", "MRS", "MPL", "BER", "ARN"]],
  ["CHÂU MỸ", ["LAX", "SFO", "STL", "DFW", "ATL", "SEA", "BOS", "WAS", "IAH", "JFK", "CHI", "IAD", "HNL", "MSP", "TPA", "DEN", "PDX", "PHL", "SAN", "PHX", "MIA", "AUS", "YYZ", "YVR", "YMQ"]],
  ["CHÂU ÚC", ["SYD", "MEL", "AKL", "PER", "BNE", "ADL", "WLG", "CHC", "DRW", "PMR", "OOL", "CNS"]],
  ["CHÂU PHI", ["CPT", "JNB", "LOS"]],
];

const EXTRA_AIRPORTS = [
  {
    id: "LTH",
    name: "Long Thành (LTH)",
    country: "Việt Nam",
    keywords: "long thanh lth san bay long thanh",
  },
];

function clean(value) {
  return String(value ?? "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRow(line) {
  const parts = line.split("\t").map(clean);
  while (parts.length && parts[0] === "") parts.shift();
  if (parts.length < 9) return null;

  const [
    id,
    airportVi,
    airportEn,
    cityCode,
    cityVi,
    cityEn,
    countryCode,
    countryVi,
    countryEn,
  ] = parts;

  if (!/^[A-Z0-9]{3}$/.test(id)) return null;
  if (id === "AirportCode") return null;

  const blob = `${airportVi} ${airportEn} ${cityVi} ${cityEn}`.toUpperCase();
  if (blob.includes("TEST") || blob.includes("NULL")) return null;

  const city = cityVi || cityEn || id;
  const country = countryVi || countryEn || countryCode;
  const name = `${city} (${id})`;
  const keywords = [
    id,
    cityCode,
    cityVi,
    cityEn,
    airportVi,
    airportEn,
    countryVi,
    countryEn,
    countryCode,
  ]
    .map(clean)
    .filter((part) => part && part.toUpperCase() !== "NULL")
    .join(" ");

  return { id, name, country, keywords };
}

const byId = new Map();

for (const line of raw.split(/\r?\n/)) {
  const airport = parseRow(line);
  if (!airport) continue;
  if (!byId.has(airport.id)) byId.set(airport.id, airport);
}

for (const extra of EXTRA_AIRPORTS) {
  if (!byId.has(extra.id)) byId.set(extra.id, extra);
}

const allAirports = [...byId.values()].sort((a, b) =>
  a.name.localeCompare(b.name, "vi"),
);

const popular = POPULAR_GROUPS.map(([title, ids]) => ({
  title,
  airports: ids
    .map((id) => byId.get(id))
    .filter(Boolean)
    .map((airport) => ({
      id: airport.id,
      name: airport.name,
    })),
}));

const file = `export interface AirportItem {
  id: string;
  name: string;
  country?: string;
  keywords?: string;
}

export interface AirportCategory {
  title: string;
  airports: AirportItem[];
}

export const AIRPORT_COLUMNS: string[][] = [
  ["MIỀN BẮC", "MIỀN TRUNG"],
  ["MIỀN NAM"],
  ["ĐÔNG NAM Á", "NAM Á"],
  ["ĐÔNG BẮC Á"],
  ["CHÂU ÂU"],
  ["CHÂU MỸ", "CHÂU ÚC", "CHÂU PHI"],
];

export const AIRPORT_DATA: AirportCategory[] = ${JSON.stringify(popular, null, 2)};

export const ALL_AIRPORTS: AirportItem[] = ${JSON.stringify(allAirports, null, 2)};
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, file, "utf8");

console.log(
  `Wrote ${allAirports.length} airports, ${popular.reduce((n, g) => n + g.airports.length, 0)} popular`,
);
