export interface AirportItem {
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

export const AIRPORT_DATA: AirportCategory[] = [
  {
    "title": "MIỀN BẮC",
    "airports": [
      {
        "id": "HAN",
        "name": "Hà Nội (HAN)"
      },
      {
        "id": "HPH",
        "name": "Hải Phòng (HPH)"
      },
      {
        "id": "VDO",
        "name": "Quảng Ninh (VDO)"
      },
      {
        "id": "DIN",
        "name": "Điện Biên Phủ (DIN)"
      }
    ]
  },
  {
    "title": "MIỀN TRUNG",
    "airports": [
      {
        "id": "DAD",
        "name": "Đà Nẵng (DAD)"
      },
      {
        "id": "THD",
        "name": "Thanh Hóa (THD)"
      },
      {
        "id": "VII",
        "name": "Vinh (VII)"
      },
      {
        "id": "HUI",
        "name": "Huế (HUI)"
      },
      {
        "id": "VDH",
        "name": "Quảng Bình (VDH)"
      },
      {
        "id": "VCL",
        "name": "Quảng Nam (VCL)"
      }
    ]
  },
  {
    "title": "MIỀN NAM",
    "airports": [
      {
        "id": "SGN",
        "name": "Hồ Chí Minh (SGN)"
      },
      {
        "id": "CXR",
        "name": "Nha Trang (CXR)"
      },
      {
        "id": "PQC",
        "name": "Phú Quốc (PQC)"
      },
      {
        "id": "VCA",
        "name": "Cần Thơ (VCA)"
      },
      {
        "id": "DLI",
        "name": "Đà Lạt (DLI)"
      },
      {
        "id": "UIH",
        "name": "Qui Nhơn (UIH)"
      },
      {
        "id": "TBB",
        "name": "Phú Yên (TBB)"
      },
      {
        "id": "BMV",
        "name": "Buôn Mê Thuột (BMV)"
      },
      {
        "id": "PXU",
        "name": "PleiKu (PXU)"
      },
      {
        "id": "VCS",
        "name": "Côn Đảo (VCS)"
      },
      {
        "id": "VKG",
        "name": "Kiên Giang (VKG)"
      },
      {
        "id": "CAH",
        "name": "Cà Mau (CAH)"
      }
    ]
  },
  {
    "title": "ĐÔNG NAM Á",
    "airports": [
      {
        "id": "BKK",
        "name": "Băng Cốc (BKK)"
      },
      {
        "id": "SIN",
        "name": "Singapore (SIN)"
      },
      {
        "id": "KUL",
        "name": "Kuala Lumpur (KUL)"
      },
      {
        "id": "VTE",
        "name": "Viên Chăn (VTE)"
      },
      {
        "id": "MNL",
        "name": "Manila (MNL)"
      },
      {
        "id": "HKT",
        "name": "Phuket (HKT)"
      },
      {
        "id": "CNX",
        "name": "Chiềng Mai (CNX)"
      },
      {
        "id": "RGN",
        "name": "Yangon (RGN)"
      },
      {
        "id": "KOS",
        "name": "Sihanoukville (KOS)"
      },
      {
        "id": "CGK",
        "name": "Jakarta (CGK)"
      },
      {
        "id": "LPQ",
        "name": "Luông pra băng (LPQ)"
      },
      {
        "id": "SAI",
        "name": "Siem Reap (SAI)"
      },
      {
        "id": "PNH",
        "name": "Phnôm Pênh (PNH)"
      },
      {
        "id": "DPS",
        "name": "Bali Denpasar (DPS)"
      }
    ]
  },
  {
    "title": "NAM Á",
    "airports": [
      {
        "id": "DEL",
        "name": "Đê-li (DEL)"
      },
      {
        "id": "BLR",
        "name": "Bangalore (BLR)"
      },
      {
        "id": "HYD",
        "name": "Hyderabad (HYD)"
      },
      {
        "id": "BOM",
        "name": "Mumbai (BOM)"
      }
    ]
  },
  {
    "title": "ĐÔNG BẮC Á",
    "airports": [
      {
        "id": "TPE",
        "name": "Đài Bắc (TPE)"
      },
      {
        "id": "ICN",
        "name": "Seoul (ICN)"
      },
      {
        "id": "CAN",
        "name": "Quảng Châu (CAN)"
      },
      {
        "id": "SHA",
        "name": "Thượng Hải (SHA)"
      },
      {
        "id": "PUS",
        "name": "Pusan (PUS)"
      },
      {
        "id": "NRT",
        "name": "Tokyo (NRT)"
      },
      {
        "id": "HKG",
        "name": "Hồng Kông (HKG)"
      },
      {
        "id": "DXB",
        "name": "Dubai (DXB)"
      },
      {
        "id": "NGO",
        "name": "Nagoya (NGO)"
      },
      {
        "id": "KIX",
        "name": "Osaka (KIX)"
      },
      {
        "id": "PVG",
        "name": "Thượng Hải (PVG)"
      },
      {
        "id": "KHH",
        "name": "Cao Hùng (KHH)"
      },
      {
        "id": "PEK",
        "name": "Bắc Kinh (PEK)"
      },
      {
        "id": "SZX",
        "name": "Thâm Quyến (SZX)"
      },
      {
        "id": "HND",
        "name": "Tokyo (HND)"
      },
      {
        "id": "FUK",
        "name": "Fukuoka (FUK)"
      },
      {
        "id": "XMN",
        "name": "Hạ Môn (XMN)"
      },
      {
        "id": "HGH",
        "name": "Hàng Châu (HGH)"
      },
      {
        "id": "CTU",
        "name": "Thành Đô (CTU)"
      },
      {
        "id": "KMG",
        "name": "Côn Minh (KMG)"
      }
    ]
  },
  {
    "title": "CHÂU ÂU",
    "airports": [
      {
        "id": "FRA",
        "name": "Frankfurt (FRA)"
      },
      {
        "id": "CDG",
        "name": "Paris (CDG)"
      },
      {
        "id": "AMS",
        "name": "Amsterdam (AMS)"
      },
      {
        "id": "MUC",
        "name": "Mu-ních (MUC)"
      },
      {
        "id": "PRG",
        "name": "Praha (PRG)"
      },
      {
        "id": "HEL",
        "name": "Helsinki (HEL)"
      },
      {
        "id": "VIE",
        "name": "Viên (VIE)"
      },
      {
        "id": "LHR",
        "name": "Luân Đôn (LHR)"
      },
      {
        "id": "ZRH",
        "name": "Zurich (ZRH)"
      },
      {
        "id": "CPH",
        "name": "Cô-pen-ha-gen (CPH)"
      },
      {
        "id": "SVO",
        "name": "Mát-xờ-cơ-va (SVO)"
      },
      {
        "id": "ROM",
        "name": "Rome (ROM)"
      },
      {
        "id": "MAD",
        "name": "Madrid (MAD)"
      },
      {
        "id": "LGW",
        "name": "Luân Đôn (LGW)"
      },
      {
        "id": "BCN",
        "name": "Barcelona (BCN)"
      },
      {
        "id": "MIL",
        "name": "Milan (MIL)"
      },
      {
        "id": "GVA",
        "name": "Geneva (GVA)"
      },
      {
        "id": "LYS",
        "name": "Lyon (LYS)"
      },
      {
        "id": "NCE",
        "name": "Nice (NCE)"
      },
      {
        "id": "TLS",
        "name": "Toulouse (TLS)"
      },
      {
        "id": "MRS",
        "name": "Mác-xây (MRS)"
      },
      {
        "id": "MPL",
        "name": "Montpellier (MPL)"
      },
      {
        "id": "BER",
        "name": "Berlin (BER)"
      },
      {
        "id": "ARN",
        "name": "Stockholm (ARN)"
      }
    ]
  },
  {
    "title": "CHÂU MỸ",
    "airports": [
      {
        "id": "LAX",
        "name": "Los Angeles (LAX)"
      },
      {
        "id": "SFO",
        "name": "San Francisco (SFO)"
      },
      {
        "id": "STL",
        "name": "St Louis (STL)"
      },
      {
        "id": "DFW",
        "name": "Dallas (DFW)"
      },
      {
        "id": "ATL",
        "name": "Atlanta (ATL)"
      },
      {
        "id": "SEA",
        "name": "Seattle (SEA)"
      },
      {
        "id": "BOS",
        "name": "Boston (BOS)"
      },
      {
        "id": "WAS",
        "name": "Washington (WAS)"
      },
      {
        "id": "IAH",
        "name": "Houston (IAH)"
      },
      {
        "id": "JFK",
        "name": "New York (JFK)"
      },
      {
        "id": "CHI",
        "name": "Chicago (CHI)"
      },
      {
        "id": "IAD",
        "name": "Washington (IAD)"
      },
      {
        "id": "HNL",
        "name": "Honolulu (HNL)"
      },
      {
        "id": "MSP",
        "name": "Minneapolis (MSP)"
      },
      {
        "id": "TPA",
        "name": "Tampa (TPA)"
      },
      {
        "id": "DEN",
        "name": "Denver (DEN)"
      },
      {
        "id": "PDX",
        "name": "Portland (Oregon) (PDX)"
      },
      {
        "id": "PHL",
        "name": "Philadelphia (PHL)"
      },
      {
        "id": "SAN",
        "name": "San Diego (SAN)"
      },
      {
        "id": "PHX",
        "name": "Phoenix (PHX)"
      },
      {
        "id": "MIA",
        "name": "Miami (MIA)"
      },
      {
        "id": "AUS",
        "name": "Austin (AUS)"
      },
      {
        "id": "YYZ",
        "name": "Toronto (YYZ)"
      },
      {
        "id": "YVR",
        "name": "Vancouver (YVR)"
      },
      {
        "id": "YMQ",
        "name": "Montreal (YMQ)"
      }
    ]
  },
  {
    "title": "CHÂU ÚC",
    "airports": [
      {
        "id": "SYD",
        "name": "Sydney (SYD)"
      },
      {
        "id": "MEL",
        "name": "Men-bơn (MEL)"
      },
      {
        "id": "AKL",
        "name": "Auckland (AKL)"
      },
      {
        "id": "PER",
        "name": "Perth (PER)"
      },
      {
        "id": "BNE",
        "name": "Brisbane (BNE)"
      },
      {
        "id": "ADL",
        "name": "Adelaide (ADL)"
      },
      {
        "id": "WLG",
        "name": "Wellington (WLG)"
      },
      {
        "id": "CHC",
        "name": "Christchurch (CHC)"
      },
      {
        "id": "DRW",
        "name": "Darwin (DRW)"
      },
      {
        "id": "PMR",
        "name": "Palmerston (PMR)"
      },
      {
        "id": "OOL",
        "name": "Gold Coast (OOL)"
      },
      {
        "id": "CNS",
        "name": "Cairns (CNS)"
      }
    ]
  },
  {
    "title": "CHÂU PHI",
    "airports": [
      {
        "id": "CPT",
        "name": "Cape Town (CPT)"
      },
      {
        "id": "JNB",
        "name": "Johannesburg (JNB)"
      },
      {
        "id": "LOS",
        "name": "Lagos (LOS)"
      }
    ]
  }
];

export const ALL_AIRPORTS: AirportItem[] = [
  {
    "id": "AAL",
    "name": "Aalborg (AAL)",
    "country": "Ðan Mạch",
    "keywords": "AAL AAL Aalborg Aalborg Sân bay Aalborg Aalborg Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "AES",
    "name": "Aalesund (AES)",
    "country": "Na Uy",
    "keywords": "AES AES Aalesund Aalesund Sân bay Ålesund Ålesund Airport, Vigra Na Uy Norway NO"
  },
  {
    "id": "AAR",
    "name": "Aarhus (AAR)",
    "country": "Ðan Mạch",
    "keywords": "AAR AAR Aarhus Aarhus Sân bay Aarhus Aarhus Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "JEG",
    "name": "Aasiaat (JEG)",
    "country": "Greenland",
    "keywords": "JEG JEG Aasiaat Aasiaat Sân bay Aasiaat Aasiaat Airport Greenland Greenland GL"
  },
  {
    "id": "ABD",
    "name": "Abadan (ABD)",
    "country": "Iran",
    "keywords": "ABD ABD Abadan Abadan Sân bay Abadan Abadan Airport Iran Iran IR"
  },
  {
    "id": "ABA",
    "name": "Abakan (ABA)",
    "country": "Nga",
    "keywords": "ABA ABA Abakan Abakan Sân bay Abakan Abakan Airport Nga Russia RU"
  },
  {
    "id": "YXX",
    "name": "Abbotsford (YXX)",
    "country": "Canada",
    "keywords": "YXX YXX Abbotsford Abbotsford Sân bay Abbotsford Abbotsford International Airport Canada Canada CA"
  },
  {
    "id": "ABR",
    "name": "Aberdeen (ABR)",
    "country": "Hoa kỳ",
    "keywords": "ABR ABR Aberdeen Aberdeen Sân bay Aberdeen Regional Aberdeen Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ABZ",
    "name": "Aberdeen (ABZ)",
    "country": "Anh quốc",
    "keywords": "ABZ ABZ Aberdeen Aberdeen Sân bay Aberdeen Aberdeen Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "AHB",
    "name": "Abha (AHB)",
    "country": "Ả rập xê út",
    "keywords": "AHB AHB Abha Abha Sân bay Abha Regional Abha Regional Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "ABJ",
    "name": "Abidjan (ABJ)",
    "country": "Ivory Coast",
    "keywords": "ABJ ABJ Abidjan Abidjan Sân bay Port Bouet Port Bouet Airport Ivory Coast Ivory Coast CI"
  },
  {
    "id": "ABI",
    "name": "Abilene (ABI)",
    "country": "Hoa kỳ",
    "keywords": "ABI ABI Abilene Abilene Sân bay Abilene Regional Abilene Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "AUH",
    "name": "Abu Dhabi (AUH)",
    "country": "Ả rập thống nhất",
    "keywords": "AUH AUH Abu Dhabi Abu Dhabi Sân bay Abu Dhabi Abu Dhabi International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "ABS",
    "name": "Abu Simbel (ABS)",
    "country": "Ai Cập",
    "keywords": "ABS ABS Abu Simbel Abu Simbel Sân bay Abu Simbel Abu Simbel Airport Ai Cập Egypt EG"
  },
  {
    "id": "ABV",
    "name": "Abuja (ABV)",
    "country": "Ni giê ria",
    "keywords": "ABV ABV Abuja Abuja Sân bay Nnamdi Azikiwe Nnamdi Azikiwe International Airport Ni giê ria Nigeria NG"
  },
  {
    "id": "AXM",
    "name": "Ác-me-ni (AXM)",
    "country": "Colombia",
    "keywords": "AXM AXM Ác-me-ni Armenia Sân bay El Edén El Edén International Airport Colombia Colombia CO"
  },
  {
    "id": "ACA",
    "name": "Acapulco (ACA)",
    "country": "Mê hi cô",
    "keywords": "ACA ACA Acapulco Acapulco Sân bay General Juan N. Álvarez General Juan N. Álvarez International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "ACC",
    "name": "Accra (ACC)",
    "country": "Ghana",
    "keywords": "ACC ACC Accra Accra Sân bay Kotoka Kotoka International Airport Ghana Ghana GH"
  },
  {
    "id": "ADK",
    "name": "Adak Island (ADK)",
    "country": "Hoa kỳ",
    "keywords": "ADK ADK Adak Island Adak Island Sân bay Adak Island Adak Island Airport Hoa kỳ United States US"
  },
  {
    "id": "ADA",
    "name": "Adana (ADA)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ADA ADA Adana Adana Sân bay Adana Sakirpasa Adana Şakirpaşa Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ADD",
    "name": "Addis Ababa (ADD)",
    "country": "E ti ô pia",
    "keywords": "ADD ADD Addis Ababa Addis Ababa Sân bay Bole Bole International Airport E ti ô pia Ethiopia ET"
  },
  {
    "id": "ADL",
    "name": "Adelaide (ADL)",
    "country": "Úc",
    "keywords": "ADL ADL Adelaide Adelaide Sân bay Adelaide Adelaide Airport Úc Australia AU"
  },
  {
    "id": "ADE",
    "name": "Aden (ADE)",
    "country": "Yemen",
    "keywords": "ADE ADE Aden Aden Sân bay Aden Aden International Airport Yemen Yemen YE"
  },
  {
    "id": "AER",
    "name": "Adler Sochi (AER)",
    "country": "Nga",
    "keywords": "AER AER Adler Sochi Adler Sochi Sân bay Adler-Sochi Adler-Sochi International Airport Nga Russia RU"
  },
  {
    "id": "YIE",
    "name": "Aershan (YIE)",
    "country": "Trung Quốc",
    "keywords": "YIE YIE Aershan Aershan Sân bay Aershan Aershan Airport Trung Quốc China CN"
  },
  {
    "id": "AGA",
    "name": "Agadir (AGA)",
    "country": "Ma rốc",
    "keywords": "AGA AGA Agadir Agadir Sân bay Al Massira Al Massira Airport Ma rốc Morocco MA"
  },
  {
    "id": "AGF",
    "name": "Agen (AGF)",
    "country": "Pháp",
    "keywords": "AGF AGF Agen Agen Agen - La Garenne Aerodrome Agen - La Garenne Aerodrome Pháp France FR"
  },
  {
    "id": "AGR",
    "name": "Agra (AGR)",
    "country": "Ấn độ",
    "keywords": "AGR AGR Agra Agra Sân bay Agra Agra Airport/Agra Air Force Station Ấn độ India IN"
  },
  {
    "id": "BQN",
    "name": "Aguadilla (BQN)",
    "country": "Puerto Rico",
    "keywords": "BQN BQN Aguadilla Aguadilla Sân bay Rafael Hernández Rafael Hernández Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "AGU",
    "name": "Aguascalientes (AGU)",
    "country": "Mê hi cô",
    "keywords": "AGU AGU Aguascalientes Aguascalientes Sân bay Lic. Jesús Terán Peredo Lic. Jesús Terán Peredo International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "AMD",
    "name": "Ahmedabad (AMD)",
    "country": "Ấn độ",
    "keywords": "AMD AMD Ahmedabad Ahmedabad Sân bay Sardar Vallabhbhai Patel Sardar Vallabhbhai Patel International Airport Ấn độ India IN"
  },
  {
    "id": "AIT",
    "name": "Aitutaki (AIT)",
    "country": "Cook Islands",
    "keywords": "AIT AIT Aitutaki Aitutaki Sân bay Aitutaki Island Aitutaki Island Airport Cook Islands Cook Islands CK"
  },
  {
    "id": "QXB",
    "name": "Aix En Provence (Aix En Provence) (QXB)",
    "country": "Pháp",
    "keywords": "QXB QXB Aix En Provence (Aix En Provence) Aix En Provence (Aix En Provence) Sân bay Aix Les Milles Aix Les Milles Airport Pháp France FR"
  },
  {
    "id": "AJA",
    "name": "Ajaccio (AJA)",
    "country": "Pháp",
    "keywords": "AJA AJA Ajaccio Ajaccio Sân bay Ajaccio - Campo dell'Oro Ajaccio - Campo dell'Oro Airport Pháp France FR"
  },
  {
    "id": "AXT",
    "name": "Akita (AXT)",
    "country": "Nhật bản",
    "keywords": "AXT AXT Akita Akita Sân bay Akita Akita Airport Nhật bản Japan JP"
  },
  {
    "id": "CAK",
    "name": "Akron (CAK)",
    "country": "Hoa kỳ",
    "keywords": "CAK CAK Akron Akron Sân bay Akron-Canton Regional Akron-Canton Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "AKU",
    "name": "Aksu (AKU)",
    "country": "Trung Quốc",
    "keywords": "AKU AKU Aksu Aksu Sân bay Aksu Aksu Airport Trung Quốc China CN"
  },
  {
    "id": "SCO",
    "name": "Aktau (SCO)",
    "country": "Kazakstan",
    "keywords": "SCO SCO Aktau Aktau Sân bay Aktau Aktau Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "AKX",
    "name": "Aktyubinsk (AKX)",
    "country": "Kazakstan",
    "keywords": "AKX AKX Aktyubinsk Aktyubinsk Sân bay Aktobe Aktobe Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "AKV",
    "name": "Akulivik (AKV)",
    "country": "Canada",
    "keywords": "AKV AKV Akulivik Akulivik Sân bay Akulivik Akulivik Airport Canada Canada CA"
  },
  {
    "id": "AEY",
    "name": "Akureyri (AEY)",
    "country": "Iceland",
    "keywords": "AEY AEY Akureyri Akureyri Sân bay Akureyri Akureyri Airport Iceland Iceland IS"
  },
  {
    "id": "AAN",
    "name": "Al Ain (AAN)",
    "country": "Ả rập thống nhất",
    "keywords": "AAN AAN Al Ain Al Ain Sân bay Al Ain Al Ain International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "ABT",
    "name": "Al Baha (ABT)",
    "country": "Ả rập xê út",
    "keywords": "ABT ABT Al Baha Al Baha Sân bay Al-Baha Domestic Al-Baha Domestic Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "AHU",
    "name": "Al Hoceima (AHU)",
    "country": "Ma rốc",
    "keywords": "AHU AHU Al Hoceima Al Hoceima Sân bay Charif Al ldrissi Charif Al ldrissi Airport Ma rốc Morocco MA"
  },
  {
    "id": "HOF",
    "name": "Alahsa (HOF)",
    "country": "Ả rập xê út",
    "keywords": "HOF HOF Alahsa Alahsa Sân bay al-Ahsa al-Ahsa Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "ALS",
    "name": "Alamosa (ALS)",
    "country": "Hoa kỳ",
    "keywords": "ALS ALS Alamosa Alamosa Sân bay San Luis Valley Regional San Luis Valley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ABY",
    "name": "Albany (ABY)",
    "country": "Gabon",
    "keywords": "ABY ABY Albany Albany Sân bay Southwest Georgia Regional Southwest Georgia Regional Airport Gabon Gabon GA"
  },
  {
    "id": "ALB",
    "name": "Albany (ALB)",
    "country": "Hoa kỳ",
    "keywords": "ALB ALB Albany Albany Sân bay Albany Albany International Airport Hoa kỳ United States US"
  },
  {
    "id": "ALH",
    "name": "Albany (ALH)",
    "country": "Úc",
    "keywords": "ALH ALH Albany Albany Sân bay Albany Albany Airport Úc Australia AU"
  },
  {
    "id": "ABQ",
    "name": "Albuquerque (ABQ)",
    "country": "Hoa kỳ",
    "keywords": "ABQ ABQ Albuquerque Albuquerque Albuquerque International Sunport Albuquerque International Sunport Hoa kỳ United States US"
  },
  {
    "id": "ABX",
    "name": "Albury (ABX)",
    "country": "Úc",
    "keywords": "ABX ABX Albury Albury Sân bay Albury Albury Airport Úc Australia AU"
  },
  {
    "id": "ACI",
    "name": "Alderney (ACI)",
    "country": "Anh quốc",
    "keywords": "ACI ACI Alderney Alderney Sân bay Alderney Alderney Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "ALP",
    "name": "Aleppo (ALP)",
    "country": "Syria",
    "keywords": "ALP ALP Aleppo Aleppo Sân bay Aleppo Aleppo International Airport Syria Syria SY"
  },
  {
    "id": "ALY",
    "name": "Alexandria (ALY)",
    "country": "Ai Cập",
    "keywords": "ALY ALY Alexandria Alexandria Sân bay Alexandria Alexandria International Airport Ai Cập Egypt EG"
  },
  {
    "id": "ESF",
    "name": "Alexandria (ESF)",
    "country": "Lào",
    "keywords": "ESF AEX Alexandria Alexandria Sân bay Esler Regional Esler Regional Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "AXD",
    "name": "Alexandroupolis (AXD)",
    "country": "Hy lạp",
    "keywords": "AXD AXD Alexandroupolis Alexandroupolis Sân bay Dimokritos Dimokritos Airport Hy lạp Greece GR"
  },
  {
    "id": "AHO",
    "name": "Alghero (AHO)",
    "country": "Ý",
    "keywords": "AHO AHO Alghero Alghero Sân bay Fertilia Fertilia Airport Ý Italy IT"
  },
  {
    "id": "ALG",
    "name": "Algiers (ALG)",
    "country": "An giê ri",
    "keywords": "ALG ALG Algiers Algiers Sân bay Houari Boumediene Houari Boumediene Airport An giê ri Algeria DZ"
  },
  {
    "id": "ALC",
    "name": "Alicante (ALC)",
    "country": "Tây Ban Nha",
    "keywords": "ALC ALC Alicante Alicante Sân bay El Altet El Altet Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "ASP",
    "name": "Alice Springs (ASP)",
    "country": "Úc",
    "keywords": "ASP ASP Alice Springs Alice Springs Sân bay Alice Springs Alice Springs Airport Úc Australia AU"
  },
  {
    "id": "IXD",
    "name": "Allahabad (IXD)",
    "country": "Ấn độ",
    "keywords": "IXD IXD Allahabad Allahabad Sân bay Allahabad Allahabad Airport / Bamrauli Air Force Base Ấn độ India IN"
  },
  {
    "id": "ABE",
    "name": "Allentown (ABE)",
    "country": "Hoa kỳ",
    "keywords": "ABE ABE Allentown Allentown Sân bay Lehigh Valley Lehigh Valley International Airport Hoa kỳ United States US"
  },
  {
    "id": "AIA",
    "name": "Alliance (AIA)",
    "country": "Hoa kỳ",
    "keywords": "AIA AIA Alliance Alliance Sân bay Alliance Municipal Alliance Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "LLU",
    "name": "Alluitsup Paa (LLU)",
    "country": "Greenland",
    "keywords": "LLU LLU Alluitsup Paa Alluitsup Paa Alluitsup Paa Heliport Alluitsup Paa Heliport Greenland Greenland GL"
  },
  {
    "id": "ALA",
    "name": "Almaty (ALA)",
    "country": "Kazakstan",
    "keywords": "ALA ALA Almaty Almaty Sân bay Almaty Almaty International Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "LEI",
    "name": "Almeria (LEI)",
    "country": "Tây Ban Nha",
    "keywords": "LEI LEI Almeria Almeria Sân bay Almería Almería International Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "AOR",
    "name": "Alor Setar (AOR)",
    "country": "Malaysia",
    "keywords": "AOR AOR Alor Setar Alor Setar Sân bay Sultan Abdul Halim Sultan Abdul Halim Airport Malaysia Malaysia MY"
  },
  {
    "id": "GUR",
    "name": "Alotau (GUR)",
    "country": "Papua niu ghi nê",
    "keywords": "GUR GUR Alotau Alotau Sân bay Gurney Gurney Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "APN",
    "name": "Alpena (APN)",
    "country": "Hoa kỳ",
    "keywords": "APN APN Alpena Alpena Sân bay Alpena County Regional Alpena County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ALF",
    "name": "Alta (ALF)",
    "country": "Na Uy",
    "keywords": "ALF ALF Alta Alta Sân bay Alta Alta Airport Na Uy Norway NO"
  },
  {
    "id": "AAT",
    "name": "Altay (AAT)",
    "country": "Trung Quốc",
    "keywords": "AAT AAT Altay Altay Sân bay Altay Altay Airport Trung Quốc China CN"
  },
  {
    "id": "ACH",
    "name": "Altenrhein (ACH)",
    "country": "Thụy sỹ",
    "keywords": "ACH ACH Altenrhein Altenrhein Sân bay St. Gallen Altenrhein St. Gallen Altenrhein Airport Thụy sỹ Switzerland CH"
  },
  {
    "id": "AOO",
    "name": "Altoona (AOO)",
    "country": "Hoa kỳ",
    "keywords": "AOO AOO Altoona Altoona Sân bay Altoona-Blair County Altoona-Blair County Airport Hoa kỳ United States US"
  },
  {
    "id": "AXF",
    "name": "Alxa Left Banner (AXF)",
    "country": "Trung Quốc",
    "keywords": "AXF AXF Alxa Left Banner Alxa Left Banner Sân bay Alxa Left Banner Alxa Left Banner Airport Trung Quốc China CN"
  },
  {
    "id": "ASJ",
    "name": "Amami O Shima (ASJ)",
    "country": "Nhật bản",
    "keywords": "ASJ ASJ Amami O Shima Amami O Shima Sân bay Amami Amami Airport Nhật bản Japan JP"
  },
  {
    "id": "TDW",
    "name": "Amarillo (TDW)",
    "country": "Hoa kỳ",
    "keywords": "TDW AMA Amarillo Amarillo Sân bay Tradewind Tradewind Airport Hoa kỳ United States US"
  },
  {
    "id": "ABL",
    "name": "Ambler (ABL)",
    "country": "Hoa kỳ",
    "keywords": "ABL ABL Ambler Ambler Sân bay Ambler Ambler Airport Hoa kỳ United States US"
  },
  {
    "id": "AMQ",
    "name": "Ambon (AMQ)",
    "country": "Indonesia",
    "keywords": "AMQ AMQ Ambon Ambon Sân bay Pattimura Pattimura Airport Indonesia Indonesia ID"
  },
  {
    "id": "ASV",
    "name": "Amboseli (ASV)",
    "country": "Kenya",
    "keywords": "ASV ASV Amboseli Amboseli Sân bay Amboseli Amboseli Airport Kenya Kenya KE"
  },
  {
    "id": "ADJ",
    "name": "Amman (ADJ)",
    "country": "Gióc đa ni",
    "keywords": "ADJ ADJ Amman Amman Sân bay Marka Marka International Airport Gióc đa ni Jordan JO"
  },
  {
    "id": "AMM",
    "name": "Amman (AMM)",
    "country": "Gióc đa ni",
    "keywords": "AMM AMM Amman Amman Sân bay Queen Alia Queen Alia International Airport Gióc đa ni Jordan JO"
  },
  {
    "id": "ATQ",
    "name": "Amritsar (ATQ)",
    "country": "Ấn độ",
    "keywords": "ATQ ATQ Amritsar Amritsar Sân bay Sri Guru Ram Dass Jee Sri Guru Ram Dass Jee International Airport Ấn độ India IN"
  },
  {
    "id": "AMS",
    "name": "Amsterdam (AMS)",
    "country": "Hà Lan",
    "keywords": "AMS AMS Amsterdam Amsterdam Sân bay Amsterdam Amsterdam Airport Schiphol Hà Lan Netherlands NL"
  },
  {
    "id": "AQG",
    "name": "An Khánh (AQG)",
    "country": "Trung Quốc",
    "keywords": "AQG AQG An Khánh Anqing Sân bay Anqing Tianzhushan Anqing Tianzhushan Airport Trung Quốc China CN"
  },
  {
    "id": "AOG",
    "name": "An Sơn (AOG)",
    "country": "Trung Quốc",
    "keywords": "AOG AOG An Sơn Anshan Sân bay Anshan Anshan Airport Trung Quốc China CN"
  },
  {
    "id": "AVA",
    "name": "An Thuận (AVA)",
    "country": "Trung Quốc",
    "keywords": "AVA AVA An Thuận An Shun Sân bay An Shun An Shun Airport Trung Quốc China CN"
  },
  {
    "id": "DYR",
    "name": "Anadyr (DYR)",
    "country": "Nga",
    "keywords": "DYR DYR Anadyr Anadyr Sân bay Ugolny Ugolny Airport Nga Russia RU"
  },
  {
    "id": "AAQ",
    "name": "Anapa (AAQ)",
    "country": "Nga",
    "keywords": "AAQ AAQ Anapa Anapa Sân bay Anapa Anapa Airport Nga Russia RU"
  },
  {
    "id": "ANC",
    "name": "Anchorage (ANC)",
    "country": "Hoa kỳ",
    "keywords": "ANC ANC Anchorage Anchorage Sân bay Ted Stevens Anchorage Ted Stevens Anchorage International Airport Hoa kỳ United States US"
  },
  {
    "id": "AOI",
    "name": "Ancona (AOI)",
    "country": "Ý",
    "keywords": "AOI AOI Ancona Ancona Sân bay Falconara Falconara Airport Ý Italy IT"
  },
  {
    "id": "ANX",
    "name": "Andenes (ANX)",
    "country": "Na Uy",
    "keywords": "ANX ANX Andenes Andenes Sân bay Andøya Andøya Airport, Andenes Na Uy Norway NO"
  },
  {
    "id": "CRK",
    "name": "Angeles City (CRK)",
    "country": "Philippines",
    "keywords": "CRK CRK Angeles City Angeles City Sân bay Clark Clark International Airport Philippines Philippines PH"
  },
  {
    "id": "AGH",
    "name": "Angelholm (AGH)",
    "country": "Thụy điển",
    "keywords": "AGH AGH Angelholm Angelholm Sân bay Ängelholm-Helsingborg Ängelholm-Helsingborg Airport Thụy điển Sweden SE"
  },
  {
    "id": "JHE",
    "name": "Angelholm/Helsingborg (JHE)",
    "country": "Thụy điển",
    "keywords": "JHE JHE Angelholm/Helsingborg Angelholm/Helsingborg Hamnen Heliport Hamnen Heliport Thụy điển Sweden SE"
  },
  {
    "id": "ANE",
    "name": "Angers (ANE)",
    "country": "Pháp",
    "keywords": "ANE ANE Angers Angers Angers - Avrillé Aerodrome Angers - Avrillé Aerodrome Pháp France FR"
  },
  {
    "id": "QXG",
    "name": "Angers (QXG)",
    "country": "Pháp",
    "keywords": "QXG ANE Angers Angers Campo Del Oro Angers Rail Station Campo Del Oro Angers Rail Station Pháp France FR"
  },
  {
    "id": "AGN",
    "name": "Angoon (AGN)",
    "country": "Hoa kỳ",
    "keywords": "AGN AGN Angoon Angoon Angoon Seaplane Base Angoon Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "AXA",
    "name": "Anguilla (AXA)",
    "country": "Anguilla",
    "keywords": "AXA AXA Anguilla Anguilla Sân bay Wallblake Wallblake Airport Anguilla Anguilla AI"
  },
  {
    "id": "ANI",
    "name": "Aniak (ANI)",
    "country": "Hoa kỳ",
    "keywords": "ANI ANI Aniak Aniak Sân bay Aniak Aniak Airport Hoa kỳ United States US"
  },
  {
    "id": "ESB",
    "name": "Ankara (ESB)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ESB ANK Ankara Ankara Sân bay Esenboga Esenboğa International Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ARB",
    "name": "Ann Arbor (ARB)",
    "country": "Hoa kỳ",
    "keywords": "ARB ARB Ann Arbor Ann Arbor Sân bay Ann Arbor Municipal Ann Arbor Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "AAE",
    "name": "Annaba (AAE)",
    "country": "An giê ri",
    "keywords": "AAE AAE Annaba Annaba Sân bay Rabah Bitat Rabah Bitat Airport An giê ri Algeria DZ"
  },
  {
    "id": "AYT",
    "name": "Antalya (AYT)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "AYT AYT Antalya Antalya Sân bay Antalya Antalya Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ANU",
    "name": "Antigua (ANU)",
    "country": "Antigua Và Barbuda",
    "keywords": "ANU ANU Antigua Antigua Sân bay V.C. Bird V.C. Bird International Airport Antigua Và Barbuda Antigua and Barbuda AG"
  },
  {
    "id": "ANF",
    "name": "Antofagasta (ANF)",
    "country": "Chi lê",
    "keywords": "ANF ANF Antofagasta Antofagasta Sân bay Cerro Moreno Cerro Moreno International Airport Chi lê Chile CL"
  },
  {
    "id": "DIE",
    "name": "Antsiranana (DIE)",
    "country": "Madagascar",
    "keywords": "DIE DIE Antsiranana Antsiranana Sân bay Arrachart Arrachart Airport Madagascar Madagascar MG"
  },
  {
    "id": "ANR",
    "name": "Antwerp (ANR)",
    "country": "Bỉ",
    "keywords": "ANR ANR Antwerp Antwerp Sân bay Antwerp Antwerp International Airport Bỉ Belgium BE"
  },
  {
    "id": "AOJ",
    "name": "Aomori (AOJ)",
    "country": "Nhật bản",
    "keywords": "AOJ AOJ Aomori Aomori Sân bay Aomori Aomori Airport Nhật bản Japan JP"
  },
  {
    "id": "APO",
    "name": "Apartado (APO)",
    "country": "Colombia",
    "keywords": "APO APO Apartado Apartado Sân bay Antonio Roldán Betancourt Antonio Roldán Betancourt Airport Colombia Colombia CO"
  },
  {
    "id": "FGI",
    "name": "Apia (FGI)",
    "country": "Samoa",
    "keywords": "FGI APW Apia Apia Sân bay Fagali'i Fagali'i Airport Samoa Independent State Of Samoa WS"
  },
  {
    "id": "ATW",
    "name": "Appleton (ATW)",
    "country": "Hoa kỳ",
    "keywords": "ATW ATW Appleton Appleton Sân bay Outagamie County Regional Outagamie County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "AQJ",
    "name": "Aqaba (AQJ)",
    "country": "Gióc đa ni",
    "keywords": "AQJ AQJ Aqaba Aqaba Sân bay King Hussein King Hussein International Airport Gióc đa ni Jordan JO"
  },
  {
    "id": "AJU",
    "name": "Aracaju (AJU)",
    "country": "Bra xin",
    "keywords": "AJU AJU Aracaju Aracaju Sân bay Santa Maria Santa Maria Airport Bra xin Brazil BR"
  },
  {
    "id": "ARU",
    "name": "Aracatuba (ARU)",
    "country": "Bra xin",
    "keywords": "ARU ARU Aracatuba Aracatuba Sân bay Araçatuba Araçatuba Airport Bra xin Brazil BR"
  },
  {
    "id": "EBL",
    "name": "Arbil (EBL)",
    "country": "Iraq",
    "keywords": "EBL EBL Arbil Arbil Sân bay quốc tế Erbil Erbil International Airport Iraq Iraq IQ"
  },
  {
    "id": "AQP",
    "name": "Arequipa (AQP)",
    "country": "Peru",
    "keywords": "AQP AQP Arequipa Arequipa Sân bay Rodriguez Ballon Rodriguez Ballon International Airport Peru Peru PE"
  },
  {
    "id": "ARI",
    "name": "Arica (ARI)",
    "country": "Chi lê",
    "keywords": "ARI ARI Arica Arica Sân bay Chacalluta Chacalluta International Airport Chi lê Chile CL"
  },
  {
    "id": "ARH",
    "name": "Arkhangelsk (ARH)",
    "country": "Nga",
    "keywords": "ARH ARH Arkhangelsk Arkhangelsk Sân bay Talagi Talagi Airport Nga Russia RU"
  },
  {
    "id": "ARM",
    "name": "Armidale (ARM)",
    "country": "Úc",
    "keywords": "ARM ARM Armidale Armidale Sân bay Armidale Armidale Airport Úc Australia AU"
  },
  {
    "id": "AUA",
    "name": "Aruba (AUA)",
    "country": "Aruba",
    "keywords": "AUA AUA Aruba Aruba Sân bay Queen Beatrix Queen Beatrix International Airport Aruba Aruba AW"
  },
  {
    "id": "ARK",
    "name": "Arusha (ARK)",
    "country": "Tanzania",
    "keywords": "ARK ARK Arusha Arusha Sân bay Arusha Arusha Airport Tanzania Tanzania TZ"
  },
  {
    "id": "YEK",
    "name": "Arviat (YEK)",
    "country": "Canada",
    "keywords": "YEK YEK Arviat Arviat Sân bay Arviat Arviat Airport Canada Canada CA"
  },
  {
    "id": "AJR",
    "name": "Arvidsjaur (AJR)",
    "country": "Thụy điển",
    "keywords": "AJR AJR Arvidsjaur Arvidsjaur Sân bay Arvidsjaur Arvidsjaur Airport Thụy điển Sweden SE"
  },
  {
    "id": "AKJ",
    "name": "Asahikawa (AKJ)",
    "country": "Nhật bản",
    "keywords": "AKJ AKJ Asahikawa Asahikawa Sân bay Asahikawa Asahikawa Airport Nhật bản Japan JP"
  },
  {
    "id": "AVL",
    "name": "Asheville (AVL)",
    "country": "Hoa kỳ",
    "keywords": "AVL AVL Asheville Asheville Sân bay Asheville Regional Asheville Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ASB",
    "name": "Ashkhabad (ASB)",
    "country": "Turkmenistan",
    "keywords": "ASB ASB Ashkhabad Ashgabat Sân bay Ashgabat Ashgabat Airport Turkmenistan Turkmenistan TM"
  },
  {
    "id": "ASM",
    "name": "Asmara (ASM)",
    "country": "Eritrea",
    "keywords": "ASM ASM Asmara Asmara Sân bay Asmara Asmara International Airport Eritrea Eritrea ER"
  },
  {
    "id": "ASE",
    "name": "Aspen (ASE)",
    "country": "Hoa kỳ",
    "keywords": "ASE ASE Aspen Aspen Sân bay Aspen-Pitkin County Aspen-Pitkin County Airport Hoa kỳ United States US"
  },
  {
    "id": "NQZ",
    "name": "Astana (NQZ)",
    "country": "Kazakstan",
    "keywords": "NQZ NQZ Astana Astana Nursultan Nazarbayev Nursultan Nazarbayev Kazakstan Kazakstan KZ"
  },
  {
    "id": "TSE",
    "name": "Astana (TSE)",
    "country": "Kazakstan",
    "keywords": "TSE TSE Astana Astana Sân bay Astana Astana Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "ASF",
    "name": "Astrakhan (ASF)",
    "country": "Nga",
    "keywords": "ASF ASF Astrakhan Astrakhan Sân bay Narimanovo Narimanovo Airport Nga Russia RU"
  },
  {
    "id": "OVD",
    "name": "Asturias (OVD)",
    "country": "Tây Ban Nha",
    "keywords": "OVD OVD Asturias Asturias Sân bay Asturias Asturias Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "JTY",
    "name": "Astypalea (JTY)",
    "country": "Hy lạp",
    "keywords": "JTY JTY Astypalea Astypalea Sân bay Astypalaia Astypalaia Airport Hy lạp Greece GR"
  },
  {
    "id": "ASU",
    "name": "Asuncion (ASU)",
    "country": "Paraguay",
    "keywords": "ASU ASU Asuncion Asuncion Sân bay Silvio Pettirossi Silvio Pettirossi International Airport Paraguay Paraguay PY"
  },
  {
    "id": "ASW",
    "name": "Aswan (ASW)",
    "country": "Ai Cập",
    "keywords": "ASW ASW Aswan Aswan Sân bay Aswan Aswan International Airport Ai Cập Egypt EG"
  },
  {
    "id": "AHN",
    "name": "Athens (AHN)",
    "country": "Hoa kỳ",
    "keywords": "AHN AHN Athens Athens Sân bay Athens-Ben Epps Athens-Ben Epps Airport Hoa kỳ United States US"
  },
  {
    "id": "ATH",
    "name": "Athens (ATH)",
    "country": "Hy lạp",
    "keywords": "ATH ATH Athens Athens Sân bay Athens Athens International Airport Hy lạp Greece GR"
  },
  {
    "id": "ATL",
    "name": "Atlanta (ATL)",
    "country": "Hoa kỳ",
    "keywords": "ATL ATL Atlanta Atlanta Sân bay quốc tế Hartsfield-Jackson Atlanta Hartsfield-Jackson Atlanta International Airport Hoa kỳ United States US"
  },
  {
    "id": "FTY",
    "name": "Atlanta (FTY)",
    "country": "Hoa kỳ",
    "keywords": "FTY ATL Atlanta Atlanta Sân bay Fulton County Fulton County Airport Hoa kỳ United States US"
  },
  {
    "id": "PDK",
    "name": "Atlanta (PDK)",
    "country": "Hoa kỳ",
    "keywords": "PDK ATL Atlanta Atlanta Sân bay DeKalb-Peachtree DeKalb-Peachtree Airport Hoa kỳ United States US"
  },
  {
    "id": "ACY",
    "name": "Atlantic City (ACY)",
    "country": "Hoa kỳ",
    "keywords": "ACY AIY Atlantic City Atlantic City Sân bay Atlantic City Atlantic City International Airport Hoa kỳ United States US"
  },
  {
    "id": "YAT",
    "name": "Attawapiskat (YAT)",
    "country": "Canada",
    "keywords": "YAT YAT Attawapiskat Attawapiskat Sân bay Attawapiskat Attawapiskat Airport Canada Canada CA"
  },
  {
    "id": "AUQ",
    "name": "Atuona (AUQ)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "AUQ AUQ Atuona Atuona Sân bay Atuona Atuona Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "GUW",
    "name": "Atyrau (GUW)",
    "country": "Kazakstan",
    "keywords": "GUW GUW Atyrau Atyrau Sân bay Atyrau Atyrau Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "AKL",
    "name": "Auckland (AKL)",
    "country": "Niu di lân",
    "keywords": "AKL AKL Auckland Auckland Sân bay Auckland Auckland Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "AUG",
    "name": "Augusta (AUG)",
    "country": "Hoa kỳ",
    "keywords": "AUG AUG Augusta Augusta Sân bay Augusta State Augusta State Airport Hoa kỳ United States US"
  },
  {
    "id": "DNL",
    "name": "Augusta (DNL)",
    "country": "Hoa kỳ",
    "keywords": "DNL AGS Augusta Augusta Daniel Field Daniel Field Hoa kỳ United States US"
  },
  {
    "id": "YPJ",
    "name": "Aupaluk (YPJ)",
    "country": "Canada",
    "keywords": "YPJ YPJ Aupaluk Aupaluk Sân bay Aupaluk Aupaluk Airport Canada Canada CA"
  },
  {
    "id": "IXU",
    "name": "Aurangabad (IXU)",
    "country": "Ấn độ",
    "keywords": "IXU IXU Aurangabad Aurangabad Sân bay Aurangabad Aurangabad Airport Ấn độ India IN"
  },
  {
    "id": "AUR",
    "name": "Aurillac (AUR)",
    "country": "Pháp",
    "keywords": "AUR AUR Aurillac Aurillac Sân bay Aurillac Aurillac Airport Pháp France FR"
  },
  {
    "id": "AUU",
    "name": "Aurukun Mission (AUU)",
    "country": "Úc",
    "keywords": "AUU AUU Aurukun Mission Aurukun Mission Sân bay Aurukun Aurukun Airport Úc Australia AU"
  },
  {
    "id": "AUS",
    "name": "Austin (AUS)",
    "country": "Hoa kỳ",
    "keywords": "AUS AUS Austin Austin Sân bay Austin-Bergstrom Austin-Bergstrom International Airport Hoa kỳ United States US"
  },
  {
    "id": "AVV",
    "name": "Avalon (AVV)",
    "country": "Úc",
    "keywords": "AVV AVV Avalon Avalon Sân bay Avalon Avalon Airport Úc Australia AU"
  },
  {
    "id": "AVN",
    "name": "Avignon (AVN)",
    "country": "Pháp",
    "keywords": "AVN AVN Avignon Avignon Sân bay Avignon - Caumont Avignon - Caumont Airport Pháp France FR"
  },
  {
    "id": "XZN",
    "name": "Avignon (XZN)",
    "country": "Pháp",
    "keywords": "XZN AVN Avignon Avignon Avignon Railway Airport Avignon Railway Airport Pháp France FR"
  },
  {
    "id": "AYQ",
    "name": "Ayers Rock (AYQ)",
    "country": "Úc",
    "keywords": "AYQ AYQ Ayers Rock Ayers Rock Sân bay Ayers Rock Ayers Rock Airport Úc Australia AU"
  },
  {
    "id": "YUS",
    "name": "Ba Tong (YUS)",
    "country": "Trung Quốc",
    "keywords": "YUS YUS Ba Tong Yushu Batang Sân bay Yushu Batang Yushu Batang Airport Trung Quốc China CN"
  },
  {
    "id": "BCM",
    "name": "Bacau (BCM)",
    "country": "Rumani",
    "keywords": "BCM BCM Bacau Bacau Sân bay Bacau Bacău International Airport Rumani Romania RO"
  },
  {
    "id": "BCD",
    "name": "Bacolod (BCD)",
    "country": "Philippines",
    "keywords": "BCD BCD Bacolod Bacolod Sân bay New Bacolod-Silay New Bacolod-Silay Airport Philippines Philippines PH"
  },
  {
    "id": "BJZ",
    "name": "Badajoz (BJZ)",
    "country": "Tây Ban Nha",
    "keywords": "BJZ BJZ Badajoz Badajoz Sân bay Badajoz Badajoz Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "IXB",
    "name": "Bagdogra (IXB)",
    "country": "Ấn độ",
    "keywords": "IXB IXB Bagdogra Bagdogra Sân bay Bagdogra Bagdogra Airport Ấn độ India IN"
  },
  {
    "id": "YBG",
    "name": "Bagotville (YBG)",
    "country": "Canada",
    "keywords": "YBG YBG Bagotville Bagotville Sân bay Bagotville Bagotville Airport Canada Canada CA"
  },
  {
    "id": "BJR",
    "name": "Bahar Dar (BJR)",
    "country": "E ti ô pia",
    "keywords": "BJR BJR Bahar Dar Bahar Dar Sân bay Bahar Dar Bahar Dar Airport E ti ô pia Ethiopia ET"
  },
  {
    "id": "BHI",
    "name": "Bahia Blanca (BHI)",
    "country": "Ác Hen Tina",
    "keywords": "BHI BHI Bahia Blanca Bahia Blanca Sân bay Comandante Espora Comandante Espora Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "BAH",
    "name": "Bahrain (BAH)",
    "country": "Bahrain",
    "keywords": "BAH BAH Bahrain Bahrain Sân bay Bahrain Bahrain International Airport Bahrain Bahrain BH"
  },
  {
    "id": "NBS",
    "name": "Bái Sơn (NBS)",
    "country": "Trung Quốc",
    "keywords": "NBS NBS Bái Sơn Baishan Sân bay Baishan Baishan Airport Trung Quốc China CN"
  },
  {
    "id": "BAY",
    "name": "Baia Mare (BAY)",
    "country": "Rumani",
    "keywords": "BAY BAY Baia Mare Baia Mare Sân bay Baia Mare Baia Mare Airport Rumani Romania RO"
  },
  {
    "id": "YBC",
    "name": "Baie Comeau (YBC)",
    "country": "Canada",
    "keywords": "YBC YBC Baie Comeau Baie Comeau Sân bay Baie-Comeau Baie-Comeau Airport Canada Canada CA"
  },
  {
    "id": "AEB",
    "name": "Baise (AEB)",
    "country": "Trung Quốc",
    "keywords": "AEB AEB Baise Baise Sân bay Baise Baise Airport Trung Quốc China CN"
  },
  {
    "id": "BKM",
    "name": "Bakalalan (BKM)",
    "country": "Malaysia",
    "keywords": "BKM BKM Bakalalan Bakalalan Sân bay Bakalalan Bakalalan Airport Malaysia Malaysia MY"
  },
  {
    "id": "YBK",
    "name": "Baker Lake (YBK)",
    "country": "Canada",
    "keywords": "YBK YBK Baker Lake Baker Lake Sân bay Baker Lake Baker Lake Airport Canada Canada CA"
  },
  {
    "id": "BFL",
    "name": "Bakersfield (BFL)",
    "country": "Hoa kỳ",
    "keywords": "BFL BFL Bakersfield Bakersfield Meadows Field Meadows Field Hoa kỳ United States US"
  },
  {
    "id": "GYD",
    "name": "Baku (GYD)",
    "country": "Azerbaijan",
    "keywords": "GYD GYD Baku Baku Sân bay Heydar Aliyev Heydar Aliyev International Airport Azerbaijan Azerbaijan AZ"
  },
  {
    "id": "BAS",
    "name": "Balalae (BAS)",
    "country": "Solomon Islands",
    "keywords": "BAS BAS Balalae Balalae Sân bay Ballalae Ballalae Airport Solomon Islands Solomon Islands SB"
  },
  {
    "id": "DPS",
    "name": "Bali Denpasar (DPS)",
    "country": "Indonesia",
    "keywords": "DPS DPS Bali Denpasar Bali Denpasar Sân bay Ngurah Rai Ngurah Rai International Airport Indonesia Indonesia ID"
  },
  {
    "id": "BPN",
    "name": "Balikpapan (BPN)",
    "country": "Indonesia",
    "keywords": "BPN BPN Balikpapan Balikpapan Sân bay Sepinggan Sepinggan International Airport Indonesia Indonesia ID"
  },
  {
    "id": "BNK",
    "name": "Ballina (BNK)",
    "country": "Úc",
    "keywords": "BNK BNK Ballina Ballina Sân bay Ballina Ballina Airport Úc Australia AU"
  },
  {
    "id": "BBA",
    "name": "Balmaceda (BBA)",
    "country": "Chi lê",
    "keywords": "BBA BBA Balmaceda Balmaceda Sân bay Balmaceda Balmaceda Airport Chi lê Chile CL"
  },
  {
    "id": "BWI",
    "name": "Baltimore (BWI)",
    "country": "Hoa kỳ",
    "keywords": "BWI BWI Baltimore Baltimore Sân bay Baltimore/Washington International Thurgoo Baltimore/Washington International Thurgood Marsha Hoa kỳ United States US"
  },
  {
    "id": "ABM",
    "name": "Bamaga (ABM)",
    "country": "Úc",
    "keywords": "ABM ABM Bamaga Bamaga Sân bay Bamaga Injinoo Bamaga Injinoo Airport Úc Australia AU"
  },
  {
    "id": "BKO",
    "name": "Bamako (BKO)",
    "country": "Mali",
    "keywords": "BKO BKO Bamako Bamako Sân bay Senou Senou International Airport Mali Mali ML"
  },
  {
    "id": "BTJ",
    "name": "Banda Aceh (BTJ)",
    "country": "Indonesia",
    "keywords": "BTJ BTJ Banda Aceh Banda Aceh Sân bay Sultan Iskandarmuda Sultan Iskandarmuda Airport Indonesia Indonesia ID"
  },
  {
    "id": "TKG",
    "name": "Bandar Lampung (TKG)",
    "country": "Indonesia",
    "keywords": "TKG TKG Bandar Lampung Bandar Lampung Sân bay Radin Inten II Radin Inten II Airport Indonesia Indonesia ID"
  },
  {
    "id": "BWN",
    "name": "Bandar Seri Begawan (BWN)",
    "country": "Bru nêy",
    "keywords": "BWN BWN Bandar Seri Begawan Bandar Seri Begawan Sân bay Brunei Brunei International Airport Bru nêy Brunei BN"
  },
  {
    "id": "BDO",
    "name": "Bandung (BDO)",
    "country": "Indonesia",
    "keywords": "BDO BDO Bandung Bandung Sân bay Hussein Sastranegara Hussein Sastranegara Airport Indonesia Indonesia ID"
  },
  {
    "id": "BLR",
    "name": "Bangalore (BLR)",
    "country": "Ấn độ",
    "keywords": "BLR BLR Bangalore Bangalore Sân bay Bengaluru Bengaluru International Airport Ấn độ India IN"
  },
  {
    "id": "BPX",
    "name": "Bangda (BPX)",
    "country": "Trung Quốc",
    "keywords": "BPX BPX Bangda Bangda Sân bay Bangda Bangda Airport Trung Quốc China CN"
  },
  {
    "id": "BGR",
    "name": "Bangor (BGR)",
    "country": "Hoa kỳ",
    "keywords": "BGR BGR Bangor Bangor Sân bay Bangor Bangor International Airport Hoa kỳ United States US"
  },
  {
    "id": "BGF",
    "name": "Bangui (BGF)",
    "country": "Central African Republic",
    "keywords": "BGF BGF Bangui Bangui Sân bay Bangui M'Poko Bangui M'Poko International Airport Central African Republic Central African Republic CF"
  },
  {
    "id": "BNX",
    "name": "Banja Luka (BNX)",
    "country": "Bosnia Herzegovina",
    "keywords": "BNX BNX Banja Luka Banja Luka Sân bay Banja Luka Banja Luka International Airport Bosnia Herzegovina Bosnia Herzegovina BA"
  },
  {
    "id": "BDJ",
    "name": "Banjarmasin (BDJ)",
    "country": "Indonesia",
    "keywords": "BDJ BDJ Banjarmasin Banjarmasin Sân bay Syamsudin Noor Syamsudin Noor Airport Indonesia Indonesia ID"
  },
  {
    "id": "BJL",
    "name": "Banjul (BJL)",
    "country": "Gambia",
    "keywords": "BJL BJL Banjul Banjul Sân bay Banjul Banjul International Airport Gambia Gambia GM"
  },
  {
    "id": "BAV",
    "name": "Bảo Đầu (BAV)",
    "country": "Trung Quốc",
    "keywords": "BAV BAV Bảo Đầu Baotou Sân bay Baotou Baotou Airport Trung Quốc China CN"
  },
  {
    "id": "BSD",
    "name": "Bảo Sơn (BSD)",
    "country": "Trung Quốc",
    "keywords": "BSD BSD Bảo Sơn Baoshan Sân bay Baoshan Baoshan Airport Trung Quốc China CN"
  },
  {
    "id": "BHB",
    "name": "Bar Harbor (BHB)",
    "country": "Hoa kỳ",
    "keywords": "BHB BHB Bar Harbor Bar Harbor Sân bay Hancock County-Bar Harbor Hancock County-Bar Harbor Airport Hoa kỳ United States US"
  },
  {
    "id": "BCI",
    "name": "Barcaldine (BCI)",
    "country": "Úc",
    "keywords": "BCI BCI Barcaldine Barcaldine Sân bay Barcaldine Barcaldine Airport Úc Australia AU"
  },
  {
    "id": "BCN",
    "name": "Barcelona (BCN)",
    "country": "Tây Ban Nha",
    "keywords": "BCN BCN Barcelona Barcelona Sân bay Barcelona El Prat Barcelona El Prat Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "BLA",
    "name": "Barcelona (BLA)",
    "country": "Vê nê du ê la",
    "keywords": "BLA BLA Barcelona Barcelona Sân bay Generál José Antonio Anzoátegui Generál José Antonio Anzoátegui International Airp Vê nê du ê la Venezuela VE"
  },
  {
    "id": "BDU",
    "name": "Bardufoss (BDU)",
    "country": "Na Uy",
    "keywords": "BDU BDU Bardufoss Bardufoss Sân bay Bardufoss Bardufoss Airport Na Uy Norway NO"
  },
  {
    "id": "BRI",
    "name": "Bari (BRI)",
    "country": "Ý",
    "keywords": "BRI BRI Bari Bari Sân bay Bari \"Karol Wojtyla\" Bari \"Karol Wojtyła\" Airport Ý Italy IT"
  },
  {
    "id": "BBN",
    "name": "Bario (BBN)",
    "country": "Malaysia",
    "keywords": "BBN BBN Bario Bario Sân bay Bario Bario Airport Malaysia Malaysia MY"
  },
  {
    "id": "BRM",
    "name": "Barquisimeto (BRM)",
    "country": "Vê nê du ê la",
    "keywords": "BRM BRM Barquisimeto Barquisimeto Sân bay Jacinto Lara Jacinto Lara International Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "BRR",
    "name": "Barra (BRR)",
    "country": "Anh quốc",
    "keywords": "BRR BRR Barra Barra Sân bay Barra Barra Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "EJA",
    "name": "Barrancabermeja (EJA)",
    "country": "Colombia",
    "keywords": "EJA EJA Barrancabermeja Barrancabermeja Sân bay Yarigüies Yarigüies Airport Colombia Colombia CO"
  },
  {
    "id": "BAQ",
    "name": "Barranquilla (BAQ)",
    "country": "Colombia",
    "keywords": "BAQ BAQ Barranquilla Barranquilla Sân bay Ernesto Cortissoz Ernesto Cortissoz International Airport Colombia Colombia CO"
  },
  {
    "id": "BRW",
    "name": "Barrow (BRW)",
    "country": "Hoa kỳ",
    "keywords": "BRW BRW Barrow Barrow Sân bay Wiley Post–Will Rogers Memorial Wiley Post–Will Rogers Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "BSL",
    "name": "Basel (BSL)",
    "country": "Thụy sỹ",
    "keywords": "BSL BSL Basel Basel Sân bay Euro EuroAirport Basel-Mulhouse-Freiburg Thụy sỹ Switzerland CH"
  },
  {
    "id": "BSR",
    "name": "Basra (BSR)",
    "country": "Iraq",
    "keywords": "BSR BSR Basra Basra Sân bay Basrah Basrah International Airport Iraq Iraq IQ"
  },
  {
    "id": "SKB",
    "name": "Basseterre, St. Kitts Island (SKB)",
    "country": "Anh quốc",
    "keywords": "SKB SKB Basseterre, St. Kitts Island Basseterre, St. Kitts Island Sân bay Robert L. Bradshaw Robert L. Bradshaw International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "BIA",
    "name": "Bastia (BIA)",
    "country": "Pháp",
    "keywords": "BIA BIA Bastia Bastia Sân bay Bastia - Poretta Bastia - Poretta Airport Pháp France FR"
  },
  {
    "id": "BTH",
    "name": "Batam (BTH)",
    "country": "Indonesia",
    "keywords": "BTH BTH Batam Batam Sân bay Hang Nadim Hang Nadim Airport Indonesia Indonesia ID"
  },
  {
    "id": "BHS",
    "name": "Bathurst (BHS)",
    "country": "Úc",
    "keywords": "BHS BHS Bathurst Bathurst Sân bay Bathurst Bathurst Airport Úc Australia AU"
  },
  {
    "id": "ZBF",
    "name": "Bathurst (ZBF)",
    "country": "Canada",
    "keywords": "ZBF ZBF Bathurst Bathurst Sân bay Bathurst Bathurst Airport Canada Canada CA"
  },
  {
    "id": "BAL",
    "name": "Batman (BAL)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "BAL BAL Batman Batman Sân bay Batman Batman Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "BJF",
    "name": "Batsfjord (BJF)",
    "country": "Na Uy",
    "keywords": "BJF BJF Batsfjord Batsfjord Sân bay Båtsfjord Båtsfjord Airport Na Uy Norway NO"
  },
  {
    "id": "BUS",
    "name": "Batumi (BUS)",
    "country": "Georgia",
    "keywords": "BUS BUS Batumi Batumi Sân bay Batumi Batumi Airport Georgia Georgia GE"
  },
  {
    "id": "RLK",
    "name": "Bayannur (RLK)",
    "country": "Trung Quốc",
    "keywords": "RLK RLK Bayannur Bayannur Sân bay Bayannur Bayannur Airport Trung Quốc China CN"
  },
  {
    "id": "BHY",
    "name": "Bắc Hải (BHY)",
    "country": "Trung Quốc",
    "keywords": "BHY BHY Bắc Hải Beihai Sân bay Beihai Beihai Airport Trung Quốc China CN"
  },
  {
    "id": "BJS",
    "name": "Bắc Kinh (BJS)",
    "country": "Trung Quốc",
    "keywords": "BJS BJS Bắc Kinh Beijing Tất cả các sân bay All Airports Trung Quốc China CN"
  },
  {
    "id": "NAY",
    "name": "Bắc Kinh (NAY)",
    "country": "Trung Quốc",
    "keywords": "NAY NAY Bắc Kinh Beijing Sân bay Nanyuan Nanyuan Airport Trung Quốc China CN"
  },
  {
    "id": "PEK",
    "name": "Bắc Kinh (PEK)",
    "country": "Trung Quốc",
    "keywords": "PEK BJS Bắc Kinh Beijing Sân bay Beijing Capital Beijing Capital International Airport Trung Quốc China CN"
  },
  {
    "id": "PKX",
    "name": "Bắc Kinh (PKX)",
    "country": "Trung Quốc",
    "keywords": "PKX BJS Bắc Kinh Beijing Sân bay Đại Hưng Beijing Daxing International Airport Trung Quốc China CN"
  },
  {
    "id": "BKK",
    "name": "Băng Cốc (BKK)",
    "country": "Thái Lan",
    "keywords": "BKK BKK Băng Cốc Bangkok Sân bay Suvarnabhumi Suvarnabhumi Airport Thái Lan Thailand TH"
  },
  {
    "id": "DMK",
    "name": "Băng Cốc (DMK)",
    "country": "Thái Lan",
    "keywords": "DMK BKK Băng Cốc Bangkok Sân bay Don Mueang Don Mueang International Airport Thái Lan Thailand TH"
  },
  {
    "id": "BPT",
    "name": "Beaumont (BPT)",
    "country": "Hoa kỳ",
    "keywords": "BPT BPT Beaumont Beaumont Sân bay Southeast Texas Regional Southeast Texas Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BKW",
    "name": "Beckley (BKW)",
    "country": "Hoa kỳ",
    "keywords": "BKW BKW Beckley Beckley Sân bay Raleigh County Memorial Raleigh County Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "BED",
    "name": "Bedford (BED)",
    "country": "Hoa kỳ",
    "keywords": "BED BED Bedford Bedford Laurence G. Hanscom Field Laurence G. Hanscom Field Hoa kỳ United States US"
  },
  {
    "id": "BEU",
    "name": "Bedourie (BEU)",
    "country": "Úc",
    "keywords": "BEU BEU Bedourie Bedourie Sân bay Bedourie Bedourie Airport Úc Australia AU"
  },
  {
    "id": "EIS",
    "name": "Beef Island (EIS)",
    "country": "British Virgin Islands",
    "keywords": "EIS EIS Beef Island Beef Island Sân bay Terrance B. Lettsome Terrance B. Lettsome International Airport British Virgin Islands British Virgin Islands VG"
  },
  {
    "id": "BEW",
    "name": "Beira (BEW)",
    "country": "Mozambique",
    "keywords": "BEW BEW Beira Beira Sân bay Beira Beira Airport Mozambique Mozambique MZ"
  },
  {
    "id": "BEY",
    "name": "Beirut (BEY)",
    "country": "Li băng",
    "keywords": "BEY BEY Beirut Beirut Sân bay Beirut Air Base/Beirut Rafic Hariri Beirut Air Base/Beirut Rafic Hariri International Li băng Lebanon LB"
  },
  {
    "id": "BJA",
    "name": "Bejaia (BJA)",
    "country": "An giê ri",
    "keywords": "BJA BJA Bejaia Bejaia Sân bay Soummam Soummam Airport An giê ri Algeria DZ"
  },
  {
    "id": "BEL",
    "name": "Belem (BEL)",
    "country": "Bra xin",
    "keywords": "BEL BEL Belem Belem Sân bay Val de Cães Val de Cães International Airport Bra xin Brazil BR"
  },
  {
    "id": "BHD",
    "name": "Belfast (BHD)",
    "country": "Anh quốc",
    "keywords": "BHD BFS Belfast Belfast Sân bay George Best Belfast City George Best Belfast City Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "EGO",
    "name": "Belgorod (EGO)",
    "country": "Nga",
    "keywords": "EGO EGO Belgorod Belgorod Sân bay Belgorod Belgorod Airport Nga Russia RU"
  },
  {
    "id": "BEG",
    "name": "Belgrade (BEG)",
    "country": "Serbia",
    "keywords": "BEG BEG Belgrade Belgrade Sân bay Belgrade Nikola Tesla Belgrade Nikola Tesla Airport Serbia Serbia RS"
  },
  {
    "id": "BJY",
    "name": "Belgrade (BJY)",
    "country": "Serbia",
    "keywords": "BJY BJY Belgrade Belgrade Batajnica Air Base Batajnica Air Base Serbia Serbia RS"
  },
  {
    "id": "TZA",
    "name": "Belize City (TZA)",
    "country": "Belize",
    "keywords": "TZA BZE Belize City Belize City Sân bay Belize City Municipal Belize City Municipal Airport Belize Belize BZ"
  },
  {
    "id": "QBC",
    "name": "Bella Coola (QBC)",
    "country": "Canada",
    "keywords": "QBC QBC Bella Coola Bella Coola Sân bay Bella Coola Bella Coola Airport Canada Canada CA"
  },
  {
    "id": "BLI",
    "name": "Bellingham (BLI)",
    "country": "Hoa kỳ",
    "keywords": "BLI BLI Bellingham Bellingham Sân bay Bellingham Bellingham International Airport Hoa kỳ United States US"
  },
  {
    "id": "BHZ",
    "name": "Belo Horizonte (BHZ)",
    "country": "Bra xin",
    "keywords": "BHZ BHZ Belo Horizonte Belo Horizonte Tất cả các sân bay All Airports Bra xin Brazil BR"
  },
  {
    "id": "CNF",
    "name": "Belo Horizonte (CNF)",
    "country": "Bra xin",
    "keywords": "CNF BHZ Belo Horizonte Belo Horizonte Sân bay Tancredo Neves Tancredo Neves International Airport Bra xin Brazil BR"
  },
  {
    "id": "PLU",
    "name": "Belo Horizonte (PLU)",
    "country": "Bra xin",
    "keywords": "PLU BHZ Belo Horizonte Belo Horizonte Sân bay Pampulha Domestic Pampulha Domestic Airport Bra xin Brazil BR"
  },
  {
    "id": "BJI",
    "name": "Bemidji (BJI)",
    "country": "Hoa kỳ",
    "keywords": "BJI BJI Bemidji Bemidji Sân bay Bemidji Regional Bemidji Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BEB",
    "name": "Benbecula (BEB)",
    "country": "Anh quốc",
    "keywords": "BEB BEB Benbecula Benbecula Sân bay Benbecula Benbecula Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "BEN",
    "name": "Benghazi (BEN)",
    "country": "Libi",
    "keywords": "BEN BEN Benghazi Benghazi Sân bay Benina Benina International Airport Libi Libya LY"
  },
  {
    "id": "BKS",
    "name": "Bengkulu (BKS)",
    "country": "Indonesia",
    "keywords": "BKS BKS Bengkulu Bengkulu Sân bay Padang Kemiling Padang Kemiling Airport Indonesia Indonesia ID"
  },
  {
    "id": "BGO",
    "name": "Bergen (BGO)",
    "country": "Na Uy",
    "keywords": "BGO BGO Bergen Bergen Sân bay Bergen Flesland Bergen Flesland Airport Na Uy Norway NO"
  },
  {
    "id": "EGC",
    "name": "Bergerac (EGC)",
    "country": "Pháp",
    "keywords": "EGC EGC Bergerac Bergerac Sân bay Bergerac-Roumanière Bergerac-Roumanière Airport Pháp France FR"
  },
  {
    "id": "BER",
    "name": "Berlin (BER)",
    "country": "Đức",
    "keywords": "BER BER Berlin Berlin Sân bay Berlin-Brandenburg Berlin-Brandenburg Airport Đức Germany DE"
  },
  {
    "id": "SXF",
    "name": "Berlin (SXF)",
    "country": "Đức",
    "keywords": "SXF BER Berlin Berlin Sân bay Berlin Schönefeld Berlin Schönefeld Airport Đức Germany DE"
  },
  {
    "id": "TXL",
    "name": "Berlin (TXL)",
    "country": "Đức",
    "keywords": "TXL BER Berlin Berlin Sân bay Berlin Tegel Berlin Tegel Airport Đức Germany DE"
  },
  {
    "id": "BDA",
    "name": "Bermuda (BDA)",
    "country": "Bermuda",
    "keywords": "BDA BDA Bermuda Bermuda Sân bay Bermuda Bermuda International Airport Bermuda Bermuda BM"
  },
  {
    "id": "BRN",
    "name": "Berne (BRN)",
    "country": "Thụy sỹ",
    "keywords": "BRN BRN Berne Berne Sân bay Bern Bern Airport Thụy sỹ Switzerland CH"
  },
  {
    "id": "BET",
    "name": "Bethel (BET)",
    "country": "Hoa kỳ",
    "keywords": "BET BET Bethel Bethel Sân bay Bethel Bethel Airport Hoa kỳ United States US"
  },
  {
    "id": "BZR",
    "name": "Beziers (BZR)",
    "country": "Ðan Mạch",
    "keywords": "BZR BZR Beziers Beziers Sân bay Béziers Vias Béziers Vias Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "BHO",
    "name": "Bhopal (BHO)",
    "country": "Ấn độ",
    "keywords": "BHO BHO Bhopal Bhopal Sân bay Bhopal Bhopal Airport Ấn độ India IN"
  },
  {
    "id": "BBI",
    "name": "Bhubaneswar (BBI)",
    "country": "Ấn độ",
    "keywords": "BBI BBI Bhubaneswar Bhubaneswar Sân bay Biju Patnaik Biju Patnaik Airport Ấn độ India IN"
  },
  {
    "id": "BHJ",
    "name": "Bhuj (BHJ)",
    "country": "Ấn độ",
    "keywords": "BHJ BHJ Bhuj Bhuj Sân bay Bhuj Bhuj Airport Ấn độ India IN"
  },
  {
    "id": "BIK",
    "name": "Biak (BIK)",
    "country": "Indonesia",
    "keywords": "BIK BIK Biak Biak Sân bay Frans Kaisiepo Frans Kaisiepo Airport Indonesia Indonesia ID"
  },
  {
    "id": "BIQ",
    "name": "Biarritz (BIQ)",
    "country": "Pháp",
    "keywords": "BIQ BIQ Biarritz Biarritz Sân bay Biarritz - Anglet - Bayonne Biarritz - Anglet - Bayonne Airport Pháp France FR"
  },
  {
    "id": "BIO",
    "name": "Bilbao (BIO)",
    "country": "Tây Ban Nha",
    "keywords": "BIO BIO Bilbao Bilbao Sân bay Bilbao Bilbao Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "BIL",
    "name": "Billings (BIL)",
    "country": "Hoa kỳ",
    "keywords": "BIL BIL Billings Billings Sân bay Billings Logan Billings Logan International Airport Hoa kỳ United States US"
  },
  {
    "id": "BLL",
    "name": "Billund (BLL)",
    "country": "Ðan Mạch",
    "keywords": "BLL BLL Billund Billund Sân bay Billund Billund Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "BGM",
    "name": "Binghamton (BGM)",
    "country": "Hoa kỳ",
    "keywords": "BGM BGM Binghamton Binghamton Sân bay Greater Binghamton Greater Binghamton Airport Hoa kỳ United States US"
  },
  {
    "id": "FNJ",
    "name": "Bình Nhưỡng (FNJ)",
    "country": "Triều tiên",
    "keywords": "FNJ FNJ Bình Nhưỡng Pyongyang Sân bay Pyongyang Sunan Pyongyang Sunan International Airport Triều tiên Korea (North) KP"
  },
  {
    "id": "BTU",
    "name": "Bintulu (BTU)",
    "country": "Malaysia",
    "keywords": "BTU BTU Bintulu Bintulu Sân bay Bintulu Bintulu Airport Malaysia Malaysia MY"
  },
  {
    "id": "BVI",
    "name": "Birdsville, Queensland (BVI)",
    "country": "Úc",
    "keywords": "BVI BVI Birdsville, Queensland Birdsville, Queensland Sân bay Birdsville Birdsville Airport Úc Australia AU"
  },
  {
    "id": "BHM",
    "name": "Birmingham (BHM)",
    "country": "Hoa kỳ",
    "keywords": "BHM BHM Birmingham Birmingham Sân bay Birmingham–Shuttlesworth Birmingham–Shuttlesworth International Airport Hoa kỳ United States US"
  },
  {
    "id": "BHX",
    "name": "Birmingham (BHX)",
    "country": "Anh quốc",
    "keywords": "BHX BHX Birmingham Birmingham Sân bay Birmingham Birmingham Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "FRU",
    "name": "Bishkek (FRU)",
    "country": "Kyrgyzstan",
    "keywords": "FRU FRU Bishkek Bishkek Sân bay Manas Manas International Airport Kyrgyzstan Kyrgyzstan KG"
  },
  {
    "id": "BSK",
    "name": "Biskra (BSK)",
    "country": "An giê ri",
    "keywords": "BSK BSK Biskra Biskra Sân bay Biskra Biskra Airport An giê ri Algeria DZ"
  },
  {
    "id": "BIS",
    "name": "Bismarck (BIS)",
    "country": "Hoa kỳ",
    "keywords": "BIS BIS Bismarck Bismarck Sân bay Bismarck Municipal Bismarck Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "OXB",
    "name": "Bissau (OXB)",
    "country": "Ghine Bissau",
    "keywords": "OXB OXB Bissau Bissau Sân bay Osvaldo Vieiro Osvaldo Vieiro International Airport Ghine Bissau Guinea Bissau GW"
  },
  {
    "id": "BKQ",
    "name": "Blackall (BKQ)",
    "country": "Úc",
    "keywords": "BKQ BKQ Blackall Blackall Sân bay Blackall Blackall Airport Úc Australia AU"
  },
  {
    "id": "BLK",
    "name": "Blackpool (BLK)",
    "country": "Anh quốc",
    "keywords": "BLK BLK Blackpool Blackpool Sân bay Blackpool Blackpool International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "BQS",
    "name": "Blagoveschensk (BQS)",
    "country": "Nga",
    "keywords": "BQS BQS Blagoveschensk Blagoveschensk Sân bay Ignatyevo Ignatyevo Airport Nga Russia RU"
  },
  {
    "id": "YBX",
    "name": "Blanc Sablon (YBX)",
    "country": "Canada",
    "keywords": "YBX YBX Blanc Sablon Blanc Sablon Sân bay Lourdes-de-Blanc-Sablon Lourdes-de-Blanc-Sablon Airport Canada Canada CA"
  },
  {
    "id": "BLZ",
    "name": "Blantyre (BLZ)",
    "country": "Malawi",
    "keywords": "BLZ BLZ Blantyre Blantyre Sân bay Chileka Chileka International Airport Malawi Malawi MW"
  },
  {
    "id": "BHE",
    "name": "Blenheim (BHE)",
    "country": "Niu di lân",
    "keywords": "BHE BHE Blenheim Blenheim Sân bay Woodbourne Woodbourne Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "BFN",
    "name": "Bloemfontein (BFN)",
    "country": "Nam Phi",
    "keywords": "BFN BFN Bloemfontein Bloemfontein Sân bay Bloemfontein Bloemfontein Airport Nam Phi South Africa ZA"
  },
  {
    "id": "BMI",
    "name": "Bloomington (BMI)",
    "country": "Hoa kỳ",
    "keywords": "BMI BMI Bloomington Bloomington Sân bay Central Illinois Regional Central Illinois Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BVB",
    "name": "Boa Vista (BVB)",
    "country": "Bra xin",
    "keywords": "BVB BVB Boa Vista Boa Vista Sân bay Boa Vista Boa Vista International Airport Bra xin Brazil BR"
  },
  {
    "id": "BVC",
    "name": "Boa Vista (BVC)",
    "country": "Cape Verde",
    "keywords": "BVC BVC Boa Vista Boa Vista Sân bay Rabil Rabil Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "BOY",
    "name": "Bobo Dioulasso (BOY)",
    "country": "Buốc ki na pha sô",
    "keywords": "BOY BOY Bobo Dioulasso Bobo Dioulasso Sân bay Bobo Dioulasso Bobo Dioulasso Airport Buốc ki na pha sô Burkina Faso BF"
  },
  {
    "id": "BOO",
    "name": "Bodo (BOO)",
    "country": "Na Uy",
    "keywords": "BOO BOO Bodo Bodo Sân bay Bodø Bodø Airport Na Uy Norway NO"
  },
  {
    "id": "BJV",
    "name": "Bodrum (BJV)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "BJV BXN Bodrum Bodrum Sân bay Milas-Bodrum Milas-Bodrum Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "BXN",
    "name": "Bodrum (BXN)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "BXN BXN Bodrum Bodrum Sân bay Bodrum-Imsik Bodrum-Imsik Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "BOG",
    "name": "Bogota (BOG)",
    "country": "Colombia",
    "keywords": "BOG BOG Bogota Bogota Sân bay El Dorado El Dorado International Airport Colombia Colombia CO"
  },
  {
    "id": "BOI",
    "name": "Boise (BOI)",
    "country": "Hoa kỳ",
    "keywords": "BOI BOI Boise Boise Boise Air Terminal Boise Air Terminal Hoa kỳ United States US"
  },
  {
    "id": "BPL",
    "name": "Bole (BPL)",
    "country": "Trung Quốc",
    "keywords": "BPL BPL Bole Bole Sân bay Bole Bole Airport Trung Quốc China CN"
  },
  {
    "id": "BLQ",
    "name": "Bologna (BLQ)",
    "country": "Ý",
    "keywords": "BLQ BLQ Bologna Bologna Sân bay Bologna-Borgo Panigale \"Guglielmo Marconi\" Bologna-Borgo Panigale \"Guglielmo Marconi\" Airport Ý Italy IT"
  },
  {
    "id": "BZO",
    "name": "Bolzano (BZO)",
    "country": "Ý",
    "keywords": "BZO BZO Bolzano Bolzano Sân bay Bolzano Bolzano Airport Ý Italy IT"
  },
  {
    "id": "BON",
    "name": "Bonaire (BON)",
    "country": "Netherland Antilles",
    "keywords": "BON BON Bonaire Bonaire Sân bay Flamingo Flamingo International Airport Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "BOD",
    "name": "Boóc-đô (BOD)",
    "country": "Pháp",
    "keywords": "BOD BOD Boóc-đô Bordeaux Sân bay Bordeaux - Mérignac Bordeaux - Mérignac Airport Pháp France FR"
  },
  {
    "id": "BOB",
    "name": "Bora Bora (BOB)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "BOB BOB Bora Bora Bora Bora Sân bay Bora Bora Bora Bora Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "HBE",
    "name": "Borg El Arab (HBE)",
    "country": "Ai Cập",
    "keywords": "HBE HBE Borg El Arab Borg El Arab Sân bay Borg El Arab Borg El Arab Airport Ai Cập Egypt EG"
  },
  {
    "id": "BLE",
    "name": "Borlange (BLE)",
    "country": "Thụy điển",
    "keywords": "BLE BLE Borlange Borlange Sân bay Borlänge Borlänge Airport Thụy điển Sweden SE"
  },
  {
    "id": "BOS",
    "name": "Boston (BOS)",
    "country": "Hoa kỳ",
    "keywords": "BOS BOS Boston Boston Sân bay Logan Logan International Airport Hoa kỳ United States US"
  },
  {
    "id": "BQL",
    "name": "Boulia (BQL)",
    "country": "Úc",
    "keywords": "BQL BQL Boulia Boulia Sân bay Boulia Boulia Airport Úc Australia AU"
  },
  {
    "id": "BOJ",
    "name": "Bourgas (BOJ)",
    "country": "Bun ga ri",
    "keywords": "BOJ BOJ Bourgas Burgas Sân bay Burgas Burgas Airport Bun ga ri Bulgaria BG"
  },
  {
    "id": "BOH",
    "name": "Bournemouth (BOH)",
    "country": "Anh quốc",
    "keywords": "BOH BOH Bournemouth Bournemouth Sân bay Bournemouth Bournemouth Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "BZN",
    "name": "Bozeman (BZN)",
    "country": "Hoa kỳ",
    "keywords": "BZN BZN Bozeman Bozeman Sân bay Gallatin Field Gallatin Field Airport Hoa kỳ United States US"
  },
  {
    "id": "BFD",
    "name": "Bradford (BFD)",
    "country": "Panama",
    "keywords": "BFD BFD Bradford Bradford Sân bay Bradford Regional Bradford Regional Airport Panama Panama PA"
  },
  {
    "id": "BRD",
    "name": "Brainerd (BRD)",
    "country": "Hoa kỳ",
    "keywords": "BRD BRD Brainerd Brainerd Sân bay Brainerd Lakes Regional Brainerd Lakes Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YBR",
    "name": "Brandon (YBR)",
    "country": "Canada",
    "keywords": "YBR YBR Brandon Brandon Sân bay Brandon Municipal Brandon Municipal Airport Canada Canada CA"
  },
  {
    "id": "BSB",
    "name": "Brasilia (BSB)",
    "country": "Bra xin",
    "keywords": "BSB BSB Brasilia Brasilia Sân bay Brasília Brasília International Airport Bra xin Brazil BR"
  },
  {
    "id": "BTS",
    "name": "Bratislava (BTS)",
    "country": "Slovakia",
    "keywords": "BTS BTS Bratislava Bratislava Sân bay M. R. Štefánik M. R. Štefánik Airport Slovakia Slovakia SK"
  },
  {
    "id": "BTK",
    "name": "Bratsk (BTK)",
    "country": "Nga",
    "keywords": "BTK BTK Bratsk Bratsk Sân bay Bratsk Bratsk Airport Nga Russia RU"
  },
  {
    "id": "BZV",
    "name": "Brazzaville (BZV)",
    "country": "Công gô",
    "keywords": "BZV BZV Brazzaville Brazzaville Sân bay Maya Maya Maya Maya Airport Công gô Democratic Republic Of Congo CD"
  },
  {
    "id": "BRE",
    "name": "Bremen (BRE)",
    "country": "Đức",
    "keywords": "BRE BRE Bremen Bremen Sân bay Bremen Bremen Airport Đức Germany DE"
  },
  {
    "id": "VBS",
    "name": "Brescia (VBS)",
    "country": "Ý",
    "keywords": "VBS VBS Brescia Brescia Sân bay Brescia Montichiari Brescia Montichiari International Airport Ý Italy IT"
  },
  {
    "id": "BES",
    "name": "Brest (BES)",
    "country": "Pháp",
    "keywords": "BES BES Brest Brest Sân bay Brest Bretagne Brest Bretagne Airport Pháp France FR"
  },
  {
    "id": "KTS",
    "name": "Brevig Mission (KTS)",
    "country": "Hoa kỳ",
    "keywords": "KTS KTS Brevig Mission Brevig Mission Sân bay Brevig Mission Brevig Mission Airport Hoa kỳ United States US"
  },
  {
    "id": "BGI",
    "name": "Bridgetown (BGI)",
    "country": "Barbados",
    "keywords": "BGI BGI Bridgetown Bridgetown Sân bay Grantley Adams Grantley Adams International Airport Barbados Barbados BB"
  },
  {
    "id": "BDS",
    "name": "Brindisi (BDS)",
    "country": "Ý",
    "keywords": "BDS BDS Brindisi Brindisi Sân bay Casale Casale Airport Ý Italy IT"
  },
  {
    "id": "BNE",
    "name": "Brisbane (BNE)",
    "country": "Úc",
    "keywords": "BNE BNE Brisbane Brisbane Sân bay Brisbane Brisbane Airport Úc Australia AU"
  },
  {
    "id": "BRS",
    "name": "Bristol (BRS)",
    "country": "Anh quốc",
    "keywords": "BRS BRS Bristol Bristol Sân bay Bristol Bristol Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "TRI",
    "name": "Bristol (TRI)",
    "country": "Hoa kỳ",
    "keywords": "TRI TRI Bristol Bristol Sân bay Tri-Cities Regional Tri-Cities Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BVE",
    "name": "Brive La Gaill (BVE)",
    "country": "Pháp",
    "keywords": "BVE BVE Brive La Gaill Brive La Gaill Sân bay Brive – Souillac Brive – Souillac Airport Pháp France FR"
  },
  {
    "id": "BRQ",
    "name": "Brno (BRQ)",
    "country": "Cộng hòa Séc",
    "keywords": "BRQ BRQ Brno Brno Sân bay Brno-Turany Brno-Turany Airport Cộng hòa Séc Czech Republic CZ"
  },
  {
    "id": "BHQ",
    "name": "Broken Hill (BHQ)",
    "country": "Úc",
    "keywords": "BHQ BHQ Broken Hill Broken Hill Sân bay Broken Hill Broken Hill Airport Úc Australia AU"
  },
  {
    "id": "BNN",
    "name": "Bronnoysund (BNN)",
    "country": "Na Uy",
    "keywords": "BNN BNN Bronnoysund Bronnoysund Sân bay Brønnøysund Brønnøysund Airport, Brønnøy Na Uy Norway NO"
  },
  {
    "id": "BME",
    "name": "Broome (BME)",
    "country": "Úc",
    "keywords": "BME BME Broome Broome Sân bay Broome Broome International Airport Úc Australia AU"
  },
  {
    "id": "BRO",
    "name": "Brownsville (BRO)",
    "country": "Hoa kỳ",
    "keywords": "BRO BRO Brownsville Brownsville Sân bay Brownsville/South Padre Island Brownsville/South Padre Island International Airpo Hoa kỳ United States US"
  },
  {
    "id": "BRU",
    "name": "Bru-xen (BRU)",
    "country": "Bỉ",
    "keywords": "BRU BRU Bru-xen Brussels Sân bay Brussels Brussels Airport Bỉ Belgium BE"
  },
  {
    "id": "CRL",
    "name": "Bru-xen (CRL)",
    "country": "Bỉ",
    "keywords": "CRL BRU Bru-xen Brussels Sân bay Brussels South Charleroi Brussels South Charleroi Airport Bỉ Belgium BE"
  },
  {
    "id": "ZWE",
    "name": "Bru-xen (ZWE)",
    "country": "Bỉ",
    "keywords": "ZWE ZYZ Bru-xen Brussels Antwerpen-Centraal railway station Antwerpen-Centraal railway station Bỉ Belgium BE"
  },
  {
    "id": "ZYR",
    "name": "Bru-xen (ZYR)",
    "country": "Bỉ",
    "keywords": "ZYR ZYZ Bru-xen Brussels Brussels Midi Station Brussels Midi Station Bỉ Belgium BE"
  },
  {
    "id": "ZYZ",
    "name": "Bru-xen (ZYZ)",
    "country": "Bỉ",
    "keywords": "ZYZ ZYZ Bru-xen Brussels Antwerp Antwerp Bỉ Belgium BE"
  },
  {
    "id": "BQK",
    "name": "Brunswick (BQK)",
    "country": "Hoa kỳ",
    "keywords": "BQK BQK Brunswick Brunswick Sân bay Brunswick Golden Isles Brunswick Golden Isles Airport Hoa kỳ United States US"
  },
  {
    "id": "BUD",
    "name": "Bu-đa-pét (BUD)",
    "country": "Hungary",
    "keywords": "BUD BUD Bu-đa-pét Budapest Sân bay Budapest Ferenc Liszt Budapest Ferenc Liszt International Airport Hungary Hungary HU"
  },
  {
    "id": "BGA",
    "name": "Bucaramanga (BGA)",
    "country": "Colombia",
    "keywords": "BGA BGA Bucaramanga Bucaramanga Sân bay Palonegro Palonegro Airport Colombia Colombia CO"
  },
  {
    "id": "BBU",
    "name": "Bucharest (BBU)",
    "country": "Rumani",
    "keywords": "BBU BUH Bucharest Bucharest Sân bay Bucharest \"Aurel Vlaicu\" Bucharest \"Aurel Vlaicu\" Airport Rumani Romania RO"
  },
  {
    "id": "BUH",
    "name": "Bucharest (BUH)",
    "country": "Rumani",
    "keywords": "BUH BUH Bucharest Bucharest Tất cả các sân bay All Airports Rumani Romania RO"
  },
  {
    "id": "OTP",
    "name": "Bucharest (OTP)",
    "country": "Rumani",
    "keywords": "OTP BUH Bucharest Bucharest Sân bay Henri Coanda Henri Coandă International Airport Rumani Romania RO"
  },
  {
    "id": "AEP",
    "name": "Buenos Aires (AEP)",
    "country": "Ác Hen Tina",
    "keywords": "AEP BUE Buenos Aires Buenos Aires Jorge Newbery Airpark Jorge Newbery Airpark Ác Hen Tina Argentina AR"
  },
  {
    "id": "BUE",
    "name": "Buenos Aires (BUE)",
    "country": "Ác Hen Tina",
    "keywords": "BUE BUE Buenos Aires Buenos Aires Tất cả các sân bay All Airports Ác Hen Tina Argentina AR"
  },
  {
    "id": "EZE",
    "name": "Buenos Aires (EZE)",
    "country": "Ác Hen Tina",
    "keywords": "EZE BUE Buenos Aires Buenos Aires Sân bay Ministro Pistarini Ministro Pistarini International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "KJI",
    "name": "Buerjin City (KJI)",
    "country": "Trung Quốc",
    "keywords": "KJI KJI Buerjin City Buerjin City Sân bay Buerjin City Buerjin City Airport Trung Quốc China CN"
  },
  {
    "id": "BUF",
    "name": "Buffalo (BUF)",
    "country": "Hoa kỳ",
    "keywords": "BUF BUF Buffalo Buffalo Sân bay Buffalo Niagara Buffalo Niagara International Airport Hoa kỳ United States US"
  },
  {
    "id": "BJM",
    "name": "Bujumbura (BJM)",
    "country": "Burundi",
    "keywords": "BJM BJM Bujumbura Bujumbura Sân bay Bujumbura Bujumbura International Airport Burundi Burundi BI"
  },
  {
    "id": "BHK",
    "name": "Bukhara (BHK)",
    "country": "U dơ bê kis tan",
    "keywords": "BHK BHK Bukhara Bukhara Sân bay Bukhara Bukhara Airport U dơ bê kis tan Uzbekistan UZ"
  },
  {
    "id": "BUQ",
    "name": "Bulawayo (BUQ)",
    "country": "Zim ba bu ê",
    "keywords": "BUQ BUQ Bulawayo Bulawayo Sân bay Joshua Mqabuko Nkomo Joshua Mqabuko Nkomo International Airport Zim ba bu ê Zimbabwe ZW"
  },
  {
    "id": "IFP",
    "name": "Bullhead City (IFP)",
    "country": "Hoa kỳ",
    "keywords": "IFP IFP Bullhead City Bullhead City Sân bay Laughlin/Bullhead Laughlin/Bullhead International Airport Hoa kỳ United States US"
  },
  {
    "id": "BDB",
    "name": "Bundaberg (BDB)",
    "country": "Úc",
    "keywords": "BDB BDB Bundaberg Bundaberg Sân bay Bundaberg Bundaberg Airport Úc Australia AU"
  },
  {
    "id": "BMV",
    "name": "Buôn Mê Thuột (BMV)",
    "country": "Việt Nam",
    "keywords": "BMV BMV Buôn Mê Thuột Buon Me Thuot Sân bay Ban Mê Thuột Ban Me Thuot Airport Việt Nam Vietnam VN"
  },
  {
    "id": "BUR",
    "name": "Burbank (BUR)",
    "country": "Hoa kỳ",
    "keywords": "BUR BUR Burbank Burbank Sân bay Bob Hope Bob Hope Airport Hoa kỳ United States US"
  },
  {
    "id": "BFV",
    "name": "Buri Ram (BFV)",
    "country": "Thái Lan",
    "keywords": "BFV BFV Buri Ram Buri Ram Sân bay Buriram Buriram Airport Thái Lan Thailand TH"
  },
  {
    "id": "BUC",
    "name": "Burketown (BUC)",
    "country": "Úc",
    "keywords": "BUC BUC Burketown Burketown Sân bay Burketown Burketown Airport Úc Australia AU"
  },
  {
    "id": "BRL",
    "name": "Burlington (BRL)",
    "country": "Hoa kỳ",
    "keywords": "BRL BRL Burlington Burlington Sân bay Southeast Iowa Regional Southeast Iowa Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BTV",
    "name": "Burlington (BTV)",
    "country": "Hoa kỳ",
    "keywords": "BTV BTV Burlington Burlington Sân bay Burlington Burlington International Airport Hoa kỳ United States US"
  },
  {
    "id": "BWT",
    "name": "Burnie (BWT)",
    "country": "Úc",
    "keywords": "BWT BWT Burnie Burnie Sân bay Burnie Burnie Airport Úc Australia AU"
  },
  {
    "id": "BUZ",
    "name": "Bushehr (BUZ)",
    "country": "Iran",
    "keywords": "BUZ BUZ Bushehr Bushehr Sân bay Bushehr Bushehr Airport Iran Iran IR"
  },
  {
    "id": "BQB",
    "name": "Busselton (BQB)",
    "country": "Úc",
    "keywords": "BQB BQB Busselton Busselton Sân bay Busselton Regional Busselton Regional Airport Úc Australia AU"
  },
  {
    "id": "BTM",
    "name": "Butte (BTM)",
    "country": "Hoa kỳ",
    "keywords": "BTM BTM Butte Butte Sân bay Bert Mooney Bert Mooney Airport Hoa kỳ United States US"
  },
  {
    "id": "BXU",
    "name": "Butuan (BXU)",
    "country": "Philippines",
    "keywords": "BXU BXU Butuan Butuan Sân bay Butuan Butuan Airport Philippines Philippines PH"
  },
  {
    "id": "BZG",
    "name": "Bydgoszcz (BZG)",
    "country": "Ba Lan",
    "keywords": "BZG BZG Bydgoszcz Bydgoszcz Sân bay Bydgoszcz Ignacy Jan Paderewski Bydgoszcz Ignacy Jan Paderewski Airport Ba Lan Poland PL"
  },
  {
    "id": "CAH",
    "name": "Cà Mau (CAH)",
    "country": "Việt Nam",
    "keywords": "CAH CAH Cà Mau Ca Mau Sân bay Cà Mau Ca Mau Airport Việt Nam Vietnam VN"
  },
  {
    "id": "CFR",
    "name": "Caen (CFR)",
    "country": "Pháp",
    "keywords": "CFR CFR Caen Caen Sân bay Caen - Carpiquet Caen - Carpiquet Airport Pháp France FR"
  },
  {
    "id": "CGY",
    "name": "Cagayan (CGY)",
    "country": "Philippines",
    "keywords": "CGY CGY Cagayan Cagayan Sân bay Laguindingan Laguindingan International Airport Philippines Philippines PH"
  },
  {
    "id": "CAG",
    "name": "Cagliari (CAG)",
    "country": "Ý",
    "keywords": "CAG CAG Cagliari Cagliari Sân bay Cagliari Cagliari Airport Ý Italy IT"
  },
  {
    "id": "CNS",
    "name": "Cairns (CNS)",
    "country": "Úc",
    "keywords": "CNS CNS Cairns Cairns Sân bay Cairns Cairns International Airport Úc Australia AU"
  },
  {
    "id": "CAI",
    "name": "Cairo (CAI)",
    "country": "Ai Cập",
    "keywords": "CAI CAI Cairo Cairo Sân bay Cairo Cairo International Airport Ai Cập Egypt EG"
  },
  {
    "id": "CJC",
    "name": "Calama (CJC)",
    "country": "Chi lê",
    "keywords": "CJC CJC Calama Calama Sân bay El Loa El Loa Airport Chi lê Chile CL"
  },
  {
    "id": "CDW",
    "name": "Caldwell (CDW)",
    "country": "Hoa kỳ",
    "keywords": "CDW CDW Caldwell Caldwell Sân bay Essex County Essex County Airport Hoa kỳ United States US"
  },
  {
    "id": "YBW",
    "name": "Calgary (YBW)",
    "country": "Canada",
    "keywords": "YBW YBW Calgary Calgary Sân bay Bedwell Harbour Bedwell Harbour Airport Canada Canada CA"
  },
  {
    "id": "YQF",
    "name": "Calgary AL (YQF)",
    "country": "Canada",
    "keywords": "YQF YYC Calgary AL Calgary Sân bay Red Deer Regional Red Deer Regional Airport Canada Canada CA"
  },
  {
    "id": "YYC",
    "name": "Calgary AL (YYC)",
    "country": "Canada",
    "keywords": "YYC YYC Calgary AL Calgary Sân bay Calgary Calgary Airport Canada Canada CA"
  },
  {
    "id": "CLO",
    "name": "Cali (CLO)",
    "country": "Colombia",
    "keywords": "CLO CLO Cali Cali Sân bay Alfonso Bonilla Aragón Alfonso Bonilla Aragón International Airport Colombia Colombia CO"
  },
  {
    "id": "CLY",
    "name": "Calvi (CLY)",
    "country": "Pháp",
    "keywords": "CLY CLY Calvi Calvi Sân bay Calvi - Sainte-Catherine Calvi - Sainte-Catherine Airport Pháp France FR"
  },
  {
    "id": "KOW",
    "name": "Cam Châu (KOW)",
    "country": "Trung Quốc",
    "keywords": "KOW KOW Cam Châu Ganzhou Sân bay Ganzhou Huangjin Ganzhou Huangjin Airport Trung Quốc China CN"
  },
  {
    "id": "CMW",
    "name": "Camaguey (CMW)",
    "country": "Cuba",
    "keywords": "CMW CMW Camaguey Camaguey Sân bay Camagüey-Ignacio Agramonte Camagüey-Ignacio Agramonte Airport Cuba Cuba CU"
  },
  {
    "id": "CBG",
    "name": "Cambridge (CBG)",
    "country": "Anh quốc",
    "keywords": "CBG CBG Cambridge Cambridge Sân bay Cambridge Cambridge Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YCB",
    "name": "Cambridge Bay (YCB)",
    "country": "Canada",
    "keywords": "YCB YCB Cambridge Bay Cambridge Bay Sân bay Cambridge Bay Cambridge Bay Airport Canada Canada CA"
  },
  {
    "id": "YHH",
    "name": "Campbell River (YHH)",
    "country": "Canada",
    "keywords": "YHH YBL Campbell River Campbell River Campbell River Water Aerodrome Campbell River Water Aerodrome Canada Canada CA"
  },
  {
    "id": "CAL",
    "name": "Campbeltown (CAL)",
    "country": "Anh quốc",
    "keywords": "CAL CAL Campbeltown Campbeltown Sân bay Campbeltown Campbeltown Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "CPE",
    "name": "Campeche (CPE)",
    "country": "Mê hi cô",
    "keywords": "CPE CPE Campeche Campeche Sân bay Ing. Alberto Acuña Ongay Ing. Alberto Acuña Ongay International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CPV",
    "name": "Campina Grande (CPV)",
    "country": "Bra xin",
    "keywords": "CPV CPV Campina Grande Campina Grande Sân bay Campina Grande Campina Grande Airport Bra xin Brazil BR"
  },
  {
    "id": "CPQ",
    "name": "Campinas (CPQ)",
    "country": "Bra xin",
    "keywords": "CPQ CPQ Campinas Campinas Sân bay Campo dos Amarais Campo dos Amarais Airport Bra xin Brazil BR"
  },
  {
    "id": "CGR",
    "name": "Campogrande (CGR)",
    "country": "Bra xin",
    "keywords": "CGR CGR Campogrande Campogrande Sân bay Campo Grande Campo Grande International Airport Bra xin Brazil BR"
  },
  {
    "id": "CBR",
    "name": "Canberra (CBR)",
    "country": "Úc",
    "keywords": "CBR CBR Canberra Canberra Sân bay Canberra Canberra International Airport Úc Australia AU"
  },
  {
    "id": "CUN",
    "name": "Cancun (CUN)",
    "country": "Mê hi cô",
    "keywords": "CUN CUN Cancun Cancun Sân bay Cancún Cancún International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CIW",
    "name": "Canovan Island (CIW)",
    "country": "Saint Vincent Và Grenadines",
    "keywords": "CIW CIW Canovan Island Canovan Island Sân bay Canouan Island Canouan Island Airport Saint Vincent Và Grenadines Saint Vincent and the Grenadines VC"
  },
  {
    "id": "KHH",
    "name": "Cao Hùng (KHH)",
    "country": "Đài Loan",
    "keywords": "KHH KHH Cao Hùng Kaohsiung Sân bay Kaohsiung Kaohsiung International Airport Đài Loan Taiwan TW"
  },
  {
    "id": "HRB",
    "name": "Cáp Nhĩ Tân (HRB)",
    "country": "Trung Quốc",
    "keywords": "HRB HRB Cáp Nhĩ Tân Harbin Sân bay Harbin Taiping Harbin Taiping International Airport Trung Quốc China CN"
  },
  {
    "id": "YTE",
    "name": "Cape Dorset (YTE)",
    "country": "Canada",
    "keywords": "YTE YTE Cape Dorset Cape Dorset Sân bay Cape Dorset Cape Dorset Airport Canada Canada CA"
  },
  {
    "id": "CGI",
    "name": "Cape Girardeau (CGI)",
    "country": "Hoa kỳ",
    "keywords": "CGI CGI Cape Girardeau Cape Girardeau Sân bay Cape Girardeau Regional Cape Girardeau Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "CPT",
    "name": "Cape Town (CPT)",
    "country": "Nam Phi",
    "keywords": "CPT CPT Cape Town Cape Town Sân bay Cape Town Cape Town International Airport Nam Phi South Africa ZA"
  },
  {
    "id": "CCS",
    "name": "Caracas (CCS)",
    "country": "Vê nê du ê la",
    "keywords": "CCS CCS Caracas Caracas Sân bay Simón Bolívar Simón Bolívar International Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "CWL",
    "name": "Cardiff (CWL)",
    "country": "Anh quốc",
    "keywords": "CWL CWL Cardiff Cardiff Sân bay Cardiff Cardiff Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "CLD",
    "name": "Carlsbad (CLD)",
    "country": "Hoa kỳ",
    "keywords": "CLD CLD Carlsbad Carlsbad Sân bay McClellan-Palomar McClellan-Palomar Airport Hoa kỳ United States US"
  },
  {
    "id": "CNM",
    "name": "Carlsbad (CNM)",
    "country": "Hoa kỳ",
    "keywords": "CNM CNM Carlsbad Carlsbad Cavern City Air Terminal Cavern City Air Terminal Hoa kỳ United States US"
  },
  {
    "id": "CVQ",
    "name": "Carnarvon (CVQ)",
    "country": "Úc",
    "keywords": "CVQ CVQ Carnarvon Carnarvon Sân bay Carnarvon Carnarvon Airport Úc Australia AU"
  },
  {
    "id": "CTG",
    "name": "Cartagena (CTG)",
    "country": "Colombia",
    "keywords": "CTG CTG Cartagena Cartagena Sân bay Rafael Núñez Rafael Núñez International Airport Colombia Colombia CO"
  },
  {
    "id": "CMN",
    "name": "Casablanca (CMN)",
    "country": "Ma rốc",
    "keywords": "CMN CAS Casablanca Casablanca Sân bay Mohammed V Mohammed V International Airport Ma rốc Morocco MA"
  },
  {
    "id": "CAC",
    "name": "Cascavel (CAC)",
    "country": "Bra xin",
    "keywords": "CAC CAC Cascavel Cascavel Sân bay Cascavel Cascavel Airport Bra xin Brazil BR"
  },
  {
    "id": "CPR",
    "name": "Casper (CPR)",
    "country": "Hoa kỳ",
    "keywords": "CPR CPR Casper Casper Sân bay Natrona County Natrona County International Airport Hoa kỳ United States US"
  },
  {
    "id": "YCG",
    "name": "Castlegar (YCG)",
    "country": "Canada",
    "keywords": "YCG YCG Castlegar Castlegar Sân bay West Kootenay Regional West Kootenay Regional Airport Canada Canada CA"
  },
  {
    "id": "DCM",
    "name": "Castres (DCM)",
    "country": "Pháp",
    "keywords": "DCM DCM Castres Castres Sân bay Castres-Mazamet Castres-Mazamet Airport Pháp France FR"
  },
  {
    "id": "JIL",
    "name": "Cát Lâm (JIL)",
    "country": "Trung Quốc",
    "keywords": "JIL JIL Cát Lâm JILIN Sân bay Jilin JILIN Trung Quốc China CN"
  },
  {
    "id": "CTC",
    "name": "Catamarca (CTC)",
    "country": "Ác Hen Tina",
    "keywords": "CTC CTC Catamarca Catamarca Sân bay Coronel Felipe Varela Coronel Felipe Varela Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "CTA",
    "name": "Catania (CTA)",
    "country": "Ý",
    "keywords": "CTA CTA Catania Catania Sân bay Catania-Fontanarossa Catania-Fontanarossa Airport Ý Italy IT"
  },
  {
    "id": "MPH",
    "name": "Caticlan (MPH)",
    "country": "Philippines",
    "keywords": "MPH MPH Caticlan Caticlan Sân bay Godofredo P. Ramos Godofredo P. Ramos Airport Philippines Philippines PH"
  },
  {
    "id": "CXJ",
    "name": "Caxias Do Sul (CXJ)",
    "country": "Bra xin",
    "keywords": "CXJ CXJ Caxias Do Sul Caxias Do Sul Aeroporto Hugo Cantergiani Aeroporto Hugo Cantergiani Bra xin Brazil BR"
  },
  {
    "id": "CAY",
    "name": "Cayenne (CAY)",
    "country": "Ghi nê thuộc Pháp",
    "keywords": "CAY CAY Cayenne Cayenne Sân bay Cayenne-Rochambeau Cayenne-Rochambeau Airport Ghi nê thuộc Pháp French Guiana GF"
  },
  {
    "id": "CYB",
    "name": "Cayman Brac (CYB)",
    "country": "Cayman Islands",
    "keywords": "CYB CYB Cayman Brac Cayman Brac Sân bay Gerrard Smith Gerrard Smith International Airport Cayman Islands Cayman Islands KY"
  },
  {
    "id": "CYO",
    "name": "Cayo Largo Del Sur (CYO)",
    "country": "Cuba",
    "keywords": "CYO CYO Cayo Largo Del Sur Cayo Largo Del Sur Sân bay Vilo Acuña Vilo Acuña Airport Cuba Cuba CU"
  },
  {
    "id": "VCA",
    "name": "Cần Thơ (VCA)",
    "country": "Việt Nam",
    "keywords": "VCA VCA Cần Thơ Can Tho Sân bay Trà Nóc Tra Noc International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "CEB",
    "name": "Cebu (CEB)",
    "country": "Philippines",
    "keywords": "CEB CEB Cebu Cebu Sân bay Mactan-Cebu Mactan-Cebu International Airport Philippines Philippines PH"
  },
  {
    "id": "CDC",
    "name": "Cedar City (CDC)",
    "country": "Hoa kỳ",
    "keywords": "CDC CDC Cedar City Cedar City Sân bay Cedar City Regional Cedar City Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "CID",
    "name": "Cedar Rapids (CID)",
    "country": "Hoa kỳ",
    "keywords": "CID CID Cedar Rapids Cedar Rapids Sân bay The Eastern Iowa The Eastern Iowa Airport Hoa kỳ United States US"
  },
  {
    "id": "CED",
    "name": "Ceduna (CED)",
    "country": "Úc",
    "keywords": "CED CED Ceduna Ceduna Sân bay Ceduna Ceduna Airport Úc Australia AU"
  },
  {
    "id": "CDR",
    "name": "Chadron (CDR)",
    "country": "Hoa kỳ",
    "keywords": "CDR CDR Chadron Chadron Sân bay Chadron Municipal Chadron Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CMF",
    "name": "Chambery (CMF)",
    "country": "Pháp",
    "keywords": "CMF CMF Chambery Chambery Sân bay Chambéry-Savoie Chambéry-Savoie Airport Pháp France FR"
  },
  {
    "id": "CMI",
    "name": "Champaign (CMI)",
    "country": "Hoa kỳ",
    "keywords": "CMI CMI Champaign Champaign Sân bay University of Illinois Willard University of Illinois Willard Airport Hoa kỳ United States US"
  },
  {
    "id": "IXC",
    "name": "Chandigarh (IXC)",
    "country": "Ấn độ",
    "keywords": "IXC IXC Chandigarh Chandigarh Sân bay Chandigarh Chandigarh Airport Ấn độ India IN"
  },
  {
    "id": "CHQ",
    "name": "Chania (CHQ)",
    "country": "Hy lạp",
    "keywords": "CHQ CHQ Chania Chania Sân bay Chania Chania International Airport Hy lạp Greece GR"
  },
  {
    "id": "XAP",
    "name": "Chapeco (XAP)",
    "country": "Bra xin",
    "keywords": "XAP XAP Chapeco Chapeco Sân bay Chapecó Chapecó Airport Bra xin Brazil BR"
  },
  {
    "id": "CPC",
    "name": "Chapelco (CPC)",
    "country": "Ác Hen Tina",
    "keywords": "CPC CPC Chapelco Chapelco Sân bay Aviador Carlos Campos Aviador Carlos Campos Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "CHS",
    "name": "Charleston (CHS)",
    "country": "Hoa kỳ",
    "keywords": "CHS CHS Charleston Charleston Sân bay Charleston Charleston International Airport / Charleston AFB Hoa kỳ United States US"
  },
  {
    "id": "CRW",
    "name": "Charleston (CRW)",
    "country": "Hoa kỳ",
    "keywords": "CRW CRW Charleston Charleston Sân bay Yeager Yeager Airport Hoa kỳ United States US"
  },
  {
    "id": "CTL",
    "name": "Charleville (CTL)",
    "country": "Úc",
    "keywords": "CTL CTL Charleville Charleville Sân bay Charleville Charleville Airport Úc Australia AU"
  },
  {
    "id": "YCL",
    "name": "Charlo (YCL)",
    "country": "Canada",
    "keywords": "YCL YCL Charlo Charlo Sân bay Charlo Charlo Airport Canada Canada CA"
  },
  {
    "id": "CLT",
    "name": "Charlotte (CLT)",
    "country": "Hoa kỳ",
    "keywords": "CLT CLT Charlotte Charlotte Sân bay Charlotte Douglas Charlotte Douglas International Airport Hoa kỳ United States US"
  },
  {
    "id": "CHO",
    "name": "Charlottesville (CHO)",
    "country": "Hoa kỳ",
    "keywords": "CHO CHO Charlottesville Charlottesville Sân bay Charlottesville-Albemarle Charlottesville-Albemarle Airport Hoa kỳ United States US"
  },
  {
    "id": "YHG",
    "name": "Charlottetown (YHG)",
    "country": "Canada",
    "keywords": "YHG YHG Charlottetown Charlottetown Sân bay Charlottetown Charlottetown Airport Canada Canada CA"
  },
  {
    "id": "YYG",
    "name": "Charlottetown (YYG)",
    "country": "Canada",
    "keywords": "YYG YYG Charlottetown Charlottetown Sân bay Charlottetown Charlottetown Airport Canada Canada CA"
  },
  {
    "id": "CHA",
    "name": "Chattanooga (CHA)",
    "country": "Hoa kỳ",
    "keywords": "CHA CHA Chattanooga Chattanooga Sân bay Chattanooga Metropolitan Chattanooga Metropolitan Airport Hoa kỳ United States US"
  },
  {
    "id": "HSN",
    "name": "Châu Sơn (HSN)",
    "country": "Trung Quốc",
    "keywords": "HSN HSN Châu Sơn Zhoushan Putuoshan Sân bay Zhoushan Putuoshan Zhoushan Putuoshan Airport Trung Quốc China CN"
  },
  {
    "id": "CSY",
    "name": "Cheboksary (CSY)",
    "country": "Nga",
    "keywords": "CSY CSY Cheboksary Cheboksary Sân bay Cheboksary Cheboksary Airport Nga Russia RU"
  },
  {
    "id": "CEK",
    "name": "Chelyabinsk (CEK)",
    "country": "Nga",
    "keywords": "CEK CEK Chelyabinsk Chelyabinsk Sân bay Chelyabinsk Balandino Chelyabinsk Balandino Airport Nga Russia RU"
  },
  {
    "id": "MQF",
    "name": "Chelyabinsk (MQF)",
    "country": "Nga",
    "keywords": "MQF MQF Chelyabinsk Chelyabinsk Sân bay Magnitogorsk Magnitogorsk Airport Nga Russia RU"
  },
  {
    "id": "MAA",
    "name": "Chennai (MAA)",
    "country": "Ấn độ",
    "keywords": "MAA MAA Chennai Chennai Sân bay Chennai Chennai International Airport Ấn độ India IN"
  },
  {
    "id": "CJJ",
    "name": "Cheongju (CJJ)",
    "country": "Hàn quốc",
    "keywords": "CJJ CJJ Cheongju Cheongju Sân bay Cheong Ju Cheong Ju International Airport Hàn quốc Korea KR"
  },
  {
    "id": "CWC",
    "name": "Chernovtsy (CWC)",
    "country": "U-krai-na",
    "keywords": "CWC CWC Chernovtsy Chernovtsy Sân bay Chernovtsy Chernovtsy Airport U-krai-na Ukraine UA"
  },
  {
    "id": "CEG",
    "name": "Chester (CEG)",
    "country": "Anh quốc",
    "keywords": "CEG CEG Chester Chester Sân bay Hawarden Hawarden Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YCS",
    "name": "Chesterfield Inlet (YCS)",
    "country": "Canada",
    "keywords": "YCS YCS Chesterfield Inlet Chesterfield Inlet Sân bay Chesterfield Inlet Chesterfield Inlet Airport Canada Canada CA"
  },
  {
    "id": "YHR",
    "name": "Chevery (YHR)",
    "country": "Canada",
    "keywords": "YHR YHR Chevery Chevery Sân bay Chevery Chevery Airport Canada Canada CA"
  },
  {
    "id": "CYS",
    "name": "Cheyenne (CYS)",
    "country": "Hoa kỳ",
    "keywords": "CYS CYS Cheyenne Cheyenne Sân bay Cheyenne Regional Cheyenne Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "CEI",
    "name": "Chiang Rai (CEI)",
    "country": "Thái Lan",
    "keywords": "CEI CEI Chiang Rai Chiang Rai Sân bay Chiang Rai Chiang Rai International Airport Thái Lan Thailand TH"
  },
  {
    "id": "YMT",
    "name": "Chibougamau (YMT)",
    "country": "Canada",
    "keywords": "YMT YMT Chibougamau Chibougamau Sân bay Chibougamau/Chapais Chibougamau/Chapais Airport Canada Canada CA"
  },
  {
    "id": "CHI",
    "name": "Chicago (CHI)",
    "country": "Hoa kỳ",
    "keywords": "CHI CHI Chicago Chicago Tất cả các sân bay All Airports Hoa kỳ United States US"
  },
  {
    "id": "DPA",
    "name": "Chicago (DPA)",
    "country": "Hoa kỳ",
    "keywords": "DPA CHI Chicago Chicago Sân bay Dupage Dupage Airport Hoa kỳ United States US"
  },
  {
    "id": "MDW",
    "name": "Chicago (MDW)",
    "country": "Hoa kỳ",
    "keywords": "MDW CHI Chicago Chicago Sân bay Midway Midway International Airport Hoa kỳ United States US"
  },
  {
    "id": "ORD",
    "name": "Chicago (ORD)",
    "country": "Hoa kỳ",
    "keywords": "ORD CHI Chicago Chicago Sân bay O'Hare O'Hare International Airport Hoa kỳ United States US"
  },
  {
    "id": "PWK",
    "name": "Chicago (PWK)",
    "country": "Hoa kỳ",
    "keywords": "PWK CHI Chicago Chicago Sân bay Palwaukee Municipal Palwaukee Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CIX",
    "name": "Chiclayo (CIX)",
    "country": "Peru",
    "keywords": "CIX CIX Chiclayo Chiclayo Sân bay Capitán FAP José A. Quiñones Gonzales Capitán FAP José A. Quiñones Gonzales Internationa Peru Peru PE"
  },
  {
    "id": "CIC",
    "name": "Chico (CIC)",
    "country": "Hoa kỳ",
    "keywords": "CIC CIC Chico Chico Sân bay Chico Municipal Chico Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CNX",
    "name": "Chiềng Mai (CNX)",
    "country": "Thái Lan",
    "keywords": "CNX CNX Chiềng Mai Chiang Mai Sân bay Chiang Mai Chiang Mai International Airport Thái Lan Thailand TH"
  },
  {
    "id": "CUU",
    "name": "Chihuahua (CUU)",
    "country": "Mê hi cô",
    "keywords": "CUU CUU Chihuahua Chihuahua Sân bay General Roberto Fierro Villalobos General Roberto Fierro Villalobos International Ai Mê hi cô MEXICO MX"
  },
  {
    "id": "HIN",
    "name": "Chinju (HIN)",
    "country": "Hàn quốc",
    "keywords": "HIN HIN Chinju Chinju Sân bay Sacheon Sacheon Airport / Sacheon Air Base Hàn quốc Korea KR"
  },
  {
    "id": "JKH",
    "name": "Chios (JKH)",
    "country": "Hy lạp",
    "keywords": "JKH JKH Chios Chios Sân bay Chios Island National Chios Island National Airport Hy lạp Greece GR"
  },
  {
    "id": "YKU",
    "name": "Chisasibi (YKU)",
    "country": "Canada",
    "keywords": "YKU YKU Chisasibi Chisasibi Sân bay Chisasibi Chisasibi Airport Canada Canada CA"
  },
  {
    "id": "KIV",
    "name": "Chisinau (KIV)",
    "country": "Moldoa",
    "keywords": "KIV KIV Chisinau Chisinau Sân bay Chisinau Chişinău International Airport Moldoa Moldova MD"
  },
  {
    "id": "HTA",
    "name": "Chita (HTA)",
    "country": "Nga",
    "keywords": "HTA HTA Chita Chita Sân bay Kadala Kadala Airport Nga Russia RU"
  },
  {
    "id": "CGP",
    "name": "Chittagong (CGP)",
    "country": "Băng la đét",
    "keywords": "CGP CGP Chittagong Chittagong Sân bay Shah Amanat Shah Amanat International Airport Băng la đét Bangladesh BD"
  },
  {
    "id": "CHC",
    "name": "Christchurch (CHC)",
    "country": "Niu di lân",
    "keywords": "CHC CHC Christchurch Christchurch Sân bay Christchurch Christchurch International Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "CXI",
    "name": "Christmas Island (CXI)",
    "country": "Kiribati",
    "keywords": "CXI CXI Christmas Island Christmas Island Sân bay Cassidy Cassidy International Airport Kiribati Kiribati KI"
  },
  {
    "id": "XCH",
    "name": "Christmas Island (XCH)",
    "country": "Úc",
    "keywords": "XCH XCH Christmas Island Christmas Island Sân bay Christmas Island Christmas Island Airport Úc Australia AU"
  },
  {
    "id": "ZUH",
    "name": "Chu Hải (ZUH)",
    "country": "Trung Quốc",
    "keywords": "ZUH ZUH Chu Hải Zhuhai Sân bay Zhuhai Sanzao Zhuhai Sanzao Airport Trung Quốc China CN"
  },
  {
    "id": "CJM",
    "name": "Chumphon (CJM)",
    "country": "Thái Lan",
    "keywords": "CJM CJM Chumphon Chumphon Sân bay Chumphon Chumphon Airport Thái Lan Thailand TH"
  },
  {
    "id": "YYQ",
    "name": "Churchill (YYQ)",
    "country": "Canada",
    "keywords": "YYQ YYQ Churchill Churchill Sân bay Churchill Churchill Airport Canada Canada CA"
  },
  {
    "id": "ZUM",
    "name": "Churchill Falls (ZUM)",
    "country": "Canada",
    "keywords": "ZUM ZUM Churchill Falls Churchill Falls Sân bay Churchill Falls Churchill Falls Airport Canada Canada CA"
  },
  {
    "id": "CVG",
    "name": "Cincinnati (CVG)",
    "country": "Hoa kỳ",
    "keywords": "CVG CVG Cincinnati Cincinnati Sân bay Cincinnati Cincinnati Airport Hoa kỳ United States US"
  },
  {
    "id": "LUK",
    "name": "Cincinnati (LUK)",
    "country": "Hoa kỳ",
    "keywords": "LUK CVG Cincinnati Cincinnati Sân bay Cincinnati Municipal Cincinnati Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CME",
    "name": "Ciudad Del Carmen (CME)",
    "country": "Mê hi cô",
    "keywords": "CME CME Ciudad Del Carmen Ciudad Del Carmen Sân bay Ciudad del Carmen Ciudad del Carmen International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "AGT",
    "name": "Ciudad Del Este (AGT)",
    "country": "Paraguay",
    "keywords": "AGT AGT Ciudad Del Este Ciudad Del Este Sân bay Guarani Guarani International Airport Paraguay Paraguay PY"
  },
  {
    "id": "CJS",
    "name": "Ciudad Juarez (CJS)",
    "country": "Mê hi cô",
    "keywords": "CJS CJS Ciudad Juarez Ciudad Juarez Sân bay Abraham González Abraham González International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CEN",
    "name": "Ciudad Obregon (CEN)",
    "country": "Mê hi cô",
    "keywords": "CEN CEN Ciudad Obregon Ciudad Obregon Sân bay Ciudad Obregón Ciudad Obregón International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CVM",
    "name": "Ciudad Victoria (CVM)",
    "country": "Mê hi cô",
    "keywords": "CVM CVM Ciudad Victoria Ciudad Victoria Sân bay General Pedro J. Méndez National General Pedro J. Méndez National Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CKB",
    "name": "Clarksburg (CKB)",
    "country": "Hoa kỳ",
    "keywords": "CKB CKB Clarksburg Clarksburg Sân bay North Central West Virginia North Central West Virginia Airport Hoa kỳ United States US"
  },
  {
    "id": "CFE",
    "name": "Clermont Ferrand (CFE)",
    "country": "Pháp",
    "keywords": "CFE CFE Clermont Ferrand Clermont Ferrand Sân bay Clermont-Ferrand Auvergne Clermont-Ferrand Auvergne Airport Pháp France FR"
  },
  {
    "id": "BKL",
    "name": "Cleveland (BKL)",
    "country": "Hoa kỳ",
    "keywords": "BKL CLE Cleveland Cleveland Sân bay Burke Lakefront Burke Lakefront Airport Hoa kỳ United States US"
  },
  {
    "id": "CGF",
    "name": "Cleveland (CGF)",
    "country": "Hoa kỳ",
    "keywords": "CGF CLE Cleveland Cleveland Sân bay Cuyahoga County Cuyahoga County Airport Hoa kỳ United States US"
  },
  {
    "id": "CNJ",
    "name": "Cloncurry (CNJ)",
    "country": "Úc",
    "keywords": "CNJ CNJ Cloncurry Cloncurry Sân bay Cloncurry Cloncurry Airport Úc Australia AU"
  },
  {
    "id": "CVN",
    "name": "Clovis (CVN)",
    "country": "Hoa kỳ",
    "keywords": "CVN CVN Clovis Clovis Sân bay Clovis Municipal Clovis Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CLJ",
    "name": "Cluj-Napoca (CLJ)",
    "country": "Rumani",
    "keywords": "CLJ CLJ Cluj-Napoca Cluj-Napoca Sân bay Cluj-Napoca Cluj-Napoca International Airport Rumani Romania RO"
  },
  {
    "id": "YCY",
    "name": "Clyde River (YCY)",
    "country": "Canada",
    "keywords": "YCY YCY Clyde River Clyde River Sân bay Clyde River Clyde River Airport Canada Canada CA"
  },
  {
    "id": "CAZ",
    "name": "Cobar (CAZ)",
    "country": "Úc",
    "keywords": "CAZ CAZ Cobar Cobar Sân bay Cobar Cobar Airport Úc Australia AU"
  },
  {
    "id": "CBB",
    "name": "Cochabamba (CBB)",
    "country": "Bolivia",
    "keywords": "CBB CBB Cochabamba Cochabamba Sân bay Jorge Wilstermann Jorge Wilstermann International Airport Bolivia Bolivia BO"
  },
  {
    "id": "CCK",
    "name": "Cocos Islands (CCK)",
    "country": "Úc",
    "keywords": "CCK CCK Cocos Islands Cocos Islands Sân bay Cocos Islands Cocos Islands Airport Úc Australia AU"
  },
  {
    "id": "COD",
    "name": "Cody (COD)",
    "country": "Hoa kỳ",
    "keywords": "COD COD Cody Cody Sân bay Yellowstone Regional Yellowstone Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "CUQ",
    "name": "Coen (CUQ)",
    "country": "Úc",
    "keywords": "CUQ CUQ Coen Coen Sân bay Coen Coen Airport Úc Australia AU"
  },
  {
    "id": "CFS",
    "name": "Coffs Harbour (CFS)",
    "country": "Úc",
    "keywords": "CFS CFS Coffs Harbour Coffs Harbour Sân bay Coffs Harbour Coffs Harbour Airport Úc Australia AU"
  },
  {
    "id": "CJB",
    "name": "Coimbatore (CJB)",
    "country": "Ấn độ",
    "keywords": "CJB CJB Coimbatore Coimbatore Sân bay Coimbatore Coimbatore International Airport Ấn độ India IN"
  },
  {
    "id": "CLQ",
    "name": "Colima (CLQ)",
    "country": "Mê hi cô",
    "keywords": "CLQ CLQ Colima Colima Sân bay Licenciado Miguel de la Madrid Licenciado Miguel de la Madrid Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CLL",
    "name": "College Station (CLL)",
    "country": "Hoa kỳ",
    "keywords": "CLL CLL College Station College Station Sân bay Easterwood Easterwood Airport Hoa kỳ United States US"
  },
  {
    "id": "CGN",
    "name": "Cologne (CGN)",
    "country": "Đức",
    "keywords": "CGN CGN Cologne Cologne Sân bay Cologne Bonn Cologne Bonn Airport Đức Germany DE"
  },
  {
    "id": "CMB",
    "name": "Colombo (CMB)",
    "country": "Sri Lanka",
    "keywords": "CMB CMB Colombo Colombo Sân bay Bandaranaike Bandaranaike International Airport Sri Lanka Sri Lanka LK"
  },
  {
    "id": "COS",
    "name": "Colorado Springs (COS)",
    "country": "Hoa kỳ",
    "keywords": "COS COS Colorado Springs Colorado Springs Sân bay Colorado Springs Colorado Springs Airport Hoa kỳ United States US"
  },
  {
    "id": "COU",
    "name": "Columbia (COU)",
    "country": "Macau",
    "keywords": "COU COU Columbia Columbia Sân bay Columbia Regional Columbia Regional Airport Macau Macau MO"
  },
  {
    "id": "CSG",
    "name": "Columbus (CSG)",
    "country": "Gabon",
    "keywords": "CSG CSG Columbus Columbus Sân bay Columbus Columbus Airport Gabon Gabon GA"
  },
  {
    "id": "GTR",
    "name": "Columbus (GTR)",
    "country": "Hoa kỳ",
    "keywords": "GTR GTR Columbus Columbus Sân bay Golden Triangle Regional Golden Triangle Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "LCK",
    "name": "Columbus (LCK)",
    "country": "Hoa kỳ",
    "keywords": "LCK CMH Columbus Columbus Sân bay Rickenbacker Rickenbacker International Airport Hoa kỳ United States US"
  },
  {
    "id": "OSU",
    "name": "Columbus (OSU)",
    "country": "Hoa kỳ",
    "keywords": "OSU CMH Columbus Columbus Sân bay Ohio State University Ohio State University Airport Hoa kỳ United States US"
  },
  {
    "id": "UBS",
    "name": "Columbus (UBS)",
    "country": "Hoa kỳ",
    "keywords": "UBS GTR Columbus Columbus Sân bay Columbus-Lowndes County Columbus-Lowndes County Airport Hoa kỳ United States US"
  },
  {
    "id": "CRD",
    "name": "Comodoro Rivadavia (CRD)",
    "country": "Ác Hen Tina",
    "keywords": "CRD CRD Comodoro Rivadavia Comodoro Rivadavia Sân bay General Enrique Mosconi General Enrique Mosconi International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "YQQ",
    "name": "Comox (YQQ)",
    "country": "Canada",
    "keywords": "YQQ YQQ Comox Comox CFB Comox CFB Comox Canada Canada CA"
  },
  {
    "id": "CKY",
    "name": "Conakry (CKY)",
    "country": "Guinea",
    "keywords": "CKY CKY Conakry Conakry Sân bay Gbessia Gbessia Airport Guinea Guinea GN"
  },
  {
    "id": "CCP",
    "name": "Concepcion (CCP)",
    "country": "Chi lê",
    "keywords": "CCP CCP Concepcion Concepcion Sân bay Carriel Sur Carriel Sur International Airport Chi lê Chile CL"
  },
  {
    "id": "CND",
    "name": "Constanta (CND)",
    "country": "Rumani",
    "keywords": "CND CND Constanta Constanta Sân bay Mihail Kogalniceanu Mihail Kogalniceanu International Airport Rumani Romania RO"
  },
  {
    "id": "CZL",
    "name": "Constantine (CZL)",
    "country": "An giê ri",
    "keywords": "CZL CZL Constantine Constantine Sân bay Mohamed Boudiaf Mohamed Boudiaf International Airport An giê ri Algeria DZ"
  },
  {
    "id": "CPD",
    "name": "Coober Pedy (CPD)",
    "country": "Úc",
    "keywords": "CPD CPD Coober Pedy Coober Pedy Sân bay Coober Pedy Coober Pedy Airport Úc Australia AU"
  },
  {
    "id": "CPO",
    "name": "Copiapo (CPO)",
    "country": "Chi lê",
    "keywords": "CPO CPO Copiapo Copiapo Sân bay Chamonate Chamonate Airport Chi lê Chile CL"
  },
  {
    "id": "YZS",
    "name": "Coral Harbour (YZS)",
    "country": "Canada",
    "keywords": "YZS YZS Coral Harbour Coral Harbour Sân bay Coral Harbour Coral Harbour Airport Canada Canada CA"
  },
  {
    "id": "COR",
    "name": "Cordoba (COR)",
    "country": "Ác Hen Tina",
    "keywords": "COR COR Cordoba Cordoba Sân bay Ingeniero Ambrosio L.V. Taravella Ingeniero Ambrosio L.V. Taravella International Ai Ác Hen Tina Argentina AR"
  },
  {
    "id": "CDV",
    "name": "Cordova (CDV)",
    "country": "Hoa kỳ",
    "keywords": "CDV CDV Cordova Cordova Merle K. Merle K. Hoa kỳ United States US"
  },
  {
    "id": "CFU",
    "name": "Corfu (CFU)",
    "country": "Hy lạp",
    "keywords": "CFU CFU Corfu Corfu Sân bay Ioannis Kapodistrias Ioannis Kapodistrias International Airport Hy lạp Greece GR"
  },
  {
    "id": "ORK",
    "name": "Cork (ORK)",
    "country": "Cộng hòa Ai len",
    "keywords": "ORK ORK Cork Cork Sân bay Cork Cork Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "CRP",
    "name": "Corpus Christi (CRP)",
    "country": "Hoa kỳ",
    "keywords": "CRP CRP Corpus Christi Corpus Christi Sân bay Corpus Christi Corpus Christi International Airport Hoa kỳ United States US"
  },
  {
    "id": "CNQ",
    "name": "Corrientes (CNQ)",
    "country": "Ác Hen Tina",
    "keywords": "CNQ CNQ Corrientes Corrientes Sân bay Doctor Fernando Piragine Niveyro Doctor Fernando Piragine Niveyro International Air Ác Hen Tina Argentina AR"
  },
  {
    "id": "CEZ",
    "name": "Cortez (CEZ)",
    "country": "Hoa kỳ",
    "keywords": "CEZ CEZ Cortez Cortez Sân bay Cortez Municipal Cortez Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "CVU",
    "name": "Corvo Island (CVU)",
    "country": "Bồ đào nha",
    "keywords": "CVU CVU Corvo Island Corvo Island Sân bay Corvo Island Corvo Island Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "CBO",
    "name": "Cotabato (CBO)",
    "country": "Philippines",
    "keywords": "CBO CBO Cotabato Cotabato Sân bay Awang Awang Airport Philippines Philippines PH"
  },
  {
    "id": "COO",
    "name": "Cotonou (COO)",
    "country": "Benin",
    "keywords": "COO COO Cotonou Cotonou Sân bay Cadjehoun Cadjehoun Airport Benin Benin BJ"
  },
  {
    "id": "CZM",
    "name": "Cozumel (CZM)",
    "country": "Mê hi cô",
    "keywords": "CZM CZM Cozumel Cozumel Sân bay Cozumel Cozumel International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "KWI",
    "name": "Cô-oét (KWI)",
    "country": "Cô oét",
    "keywords": "KWI KWI Cô-oét Kuwait Sân bay Kuwait Kuwait International Airport Cô oét Kuwait KW"
  },
  {
    "id": "CPH",
    "name": "Cô-pen-ha-gen (CPH)",
    "country": "Ðan Mạch",
    "keywords": "CPH CPH Cô-pen-ha-gen Copenhagen Sân bay Copenhagen Copenhagen Airport, Kastrup Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "VCS",
    "name": "Côn Đảo (VCS)",
    "country": "Việt Nam",
    "keywords": "VCS VCS Côn Đảo Con Dao Sân bay Cỏ Ống Co Ong Airport Việt Nam Vietnam VN"
  },
  {
    "id": "KMG",
    "name": "Côn Minh (KMG)",
    "country": "Trung Quốc",
    "keywords": "KMG KMG Côn Minh Kunming Sân bay Kunming Changshui Kunming Changshui International Airport Trung Quốc China CN"
  },
  {
    "id": "CGA",
    "name": "Craig (CGA)",
    "country": "Hoa kỳ",
    "keywords": "CGA CGA Craig Craig Craig Seaplane Base Craig Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "CCV",
    "name": "Craig Cove (CCV)",
    "country": "Vanuatu",
    "keywords": "CCV CCV Craig Cove Craig Cove Sân bay Craig Cove Craig Cove Airport Vanuatu Vanuatu VU"
  },
  {
    "id": "CRA",
    "name": "Craiova (CRA)",
    "country": "Rumani",
    "keywords": "CRA CRA Craiova Craiova Sân bay Craiova Craiova Airport Rumani Romania RO"
  },
  {
    "id": "YXC",
    "name": "Cranbrook (YXC)",
    "country": "Canada",
    "keywords": "YXC YXC Cranbrook Cranbrook Sân bay Cranbrook/Canadian Rockies Cranbrook/Canadian Rockies International Airport Canada Canada CA"
  },
  {
    "id": "CEC",
    "name": "Crescent City (CEC)",
    "country": "Hoa kỳ",
    "keywords": "CEC CEC Crescent City Crescent City Jack McNamara Field Jack McNamara Field Hoa kỳ United States US"
  },
  {
    "id": "CRV",
    "name": "Crotone (CRV)",
    "country": "Ý",
    "keywords": "CRV CRV Crotone Crotone Sân bay Crotone Crotone Airport Ý Italy IT"
  },
  {
    "id": "CZS",
    "name": "Cruzeiro Do Sul (CZS)",
    "country": "Bra xin",
    "keywords": "CZS CZS Cruzeiro Do Sul Cruzeiro Do Sul Sân bay Cruzeiro do Sul Cruzeiro do Sul International Airport Bra xin Brazil BR"
  },
  {
    "id": "CUC",
    "name": "Cucuta (CUC)",
    "country": "Colombia",
    "keywords": "CUC CUC Cucuta Cucuta Sân bay Camilo Daza Camilo Daza International Airport Colombia Colombia CO"
  },
  {
    "id": "CUE",
    "name": "Cuenca (CUE)",
    "country": "Ecuador",
    "keywords": "CUE CUE Cuenca Cuenca Sân bay Mariscal Lamar Mariscal Lamar Airport Ecuador Ecuador EC"
  },
  {
    "id": "CGB",
    "name": "Cuiaba (CGB)",
    "country": "Bra xin",
    "keywords": "CGB CGB Cuiaba Cuiaba Sân bay Marechal Rondon Marechal Rondon Airport Bra xin Brazil BR"
  },
  {
    "id": "CPX",
    "name": "Culebra (CPX)",
    "country": "Puerto Rico",
    "keywords": "CPX CPX Culebra Culebra Sân bay Benjamin Rivera Noriega Benjamin Rivera Noriega Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "CUL",
    "name": "Culiacan (CUL)",
    "country": "Mê hi cô",
    "keywords": "CUL CUL Culiacan Culiacan Sân bay Federal de Bachigualato Federal de Bachigualato International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "CUF",
    "name": "Cuneo (CUF)",
    "country": "Ý",
    "keywords": "CUF CUF Cuneo Cuneo Sân bay Levaldigi Levaldigi Airport Ý Italy IT"
  },
  {
    "id": "CMA",
    "name": "Cunnamulla (CMA)",
    "country": "Úc",
    "keywords": "CMA CMA Cunnamulla Cunnamulla Sân bay Cunnamulla Cunnamulla Airport Úc Australia AU"
  },
  {
    "id": "CUR",
    "name": "Curacao (CUR)",
    "country": "Netherland Antilles",
    "keywords": "CUR CUR Curacao Curacao Curacao Curacao Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "CWB",
    "name": "Curitiba (CWB)",
    "country": "Bra xin",
    "keywords": "CWB CWB Curitiba Curitiba Sân bay Afonso Pena Afonso Pena International Airport Bra xin Brazil BR"
  },
  {
    "id": "CUZ",
    "name": "Cuzco (CUZ)",
    "country": "Peru",
    "keywords": "CUZ CUZ Cuzco Cuzco Sân bay Alejandro Velasco Astete Alejandro Velasco Astete International Airport Peru Peru PE"
  },
  {
    "id": "JUZ",
    "name": "Cư Châu (JUZ)",
    "country": "Trung Quốc",
    "keywords": "JUZ JUZ Cư Châu Juzhou Sân bay Juzhou Juzhou Airport Trung Quốc China CN"
  },
  {
    "id": "JZH",
    "name": "Cửu Trại Câu (JZH)",
    "country": "Trung Quốc",
    "keywords": "JZH JZH Cửu Trại Câu Jiuzhaigou Sân bay Jiuzhai Huanglong Jiuzhai Huanglong Airport Trung Quốc China CN"
  },
  {
    "id": "TAE",
    "name": "Daegu (TAE)",
    "country": "Hàn quốc",
    "keywords": "TAE TAE Daegu Daegu Sân bay Daegu Daegu International Airport Hàn quốc Korea KR"
  },
  {
    "id": "DKR",
    "name": "Dakar (DKR)",
    "country": "Senegal",
    "keywords": "DKR DKR Dakar Dakar Sân bay Léopold Sédar Senghor Léopold Sédar Senghor International Airport Senegal Senegal SN"
  },
  {
    "id": "VIL",
    "name": "Dakhla (VIL)",
    "country": "Ma rốc",
    "keywords": "VIL VIL Dakhla Dakhla Sân bay Dakhla Dakhla Airport Ma rốc Morocco MA"
  },
  {
    "id": "DLM",
    "name": "Dalaman (DLM)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "DLM DLM Dalaman Dalaman Sân bay Dalaman Dalaman Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ADS",
    "name": "Dallas (ADS)",
    "country": "Hoa kỳ",
    "keywords": "ADS ADS Dallas Dallas Sân bay Addison Addison Airport Hoa kỳ United States US"
  },
  {
    "id": "AFW",
    "name": "Dallas (AFW)",
    "country": "Hoa kỳ",
    "keywords": "AFW AFW Dallas Dallas Sân bay Fort Worth Alliance Fort Worth Alliance Airport Hoa kỳ United States US"
  },
  {
    "id": "DAL",
    "name": "Dallas (DAL)",
    "country": "Hoa kỳ",
    "keywords": "DAL DFW Dallas Dallas Dallas Love Field Dallas Love Field Hoa kỳ United States US"
  },
  {
    "id": "DFW",
    "name": "Dallas (DFW)",
    "country": "Hoa kỳ",
    "keywords": "DFW DFW Dallas Dallas Sân bay Dallas/Fort Worth Dallas/Fort Worth International Airport Hoa kỳ United States US"
  },
  {
    "id": "DAM",
    "name": "Damascus (DAM)",
    "country": "Syria",
    "keywords": "DAM DAM Damascus Damascus Sân bay Damascus Damascus International Airport Syria Syria SY"
  },
  {
    "id": "DMM",
    "name": "Dammam (DMM)",
    "country": "Ả rập xê út",
    "keywords": "DMM DMM Dammam Dammam Sân bay King Fahd King Fahd International Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "DCY",
    "name": "Daocheng (DCY)",
    "country": "Trung Quốc",
    "keywords": "DCY DCY Daocheng Daocheng Sân bay Daocheng Daocheng Airport Trung Quốc China CN"
  },
  {
    "id": "DAR",
    "name": "Dar Es Salaam (DAR)",
    "country": "Tanzania",
    "keywords": "DAR DAR Dar Es Salaam Dar Es Salaam Sân bay Julius Nyerere Julius Nyerere International Airport Tanzania Tanzania TZ"
  },
  {
    "id": "DRW",
    "name": "Darwin (DRW)",
    "country": "Úc",
    "keywords": "DRW DRW Darwin Darwin Sân bay Darwin Darwin International Airport Úc Australia AU"
  },
  {
    "id": "DVO",
    "name": "Davao (DVO)",
    "country": "Philippines",
    "keywords": "DVO DVO Davao Davao Sân bay Francisco Bangoy Francisco Bangoy International Airport Philippines Philippines PH"
  },
  {
    "id": "DVN",
    "name": "Davenport (DVN)",
    "country": "Hoa kỳ",
    "keywords": "DVN DVN Davenport Davenport Sân bay Davenport Municipal Davenport Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "YDQ",
    "name": "Dawson Creek (YDQ)",
    "country": "Canada",
    "keywords": "YDQ YDQ Dawson Creek Dawson Creek Sân bay Dawson Creek Dawson Creek Airport Canada Canada CA"
  },
  {
    "id": "DAY",
    "name": "Dayton (DAY)",
    "country": "Hoa kỳ",
    "keywords": "DAY DAY Dayton Dayton Sân bay Dayton Dayton International Airport Hoa kỳ United States US"
  },
  {
    "id": "DAB",
    "name": "Daytona Beach (DAB)",
    "country": "Hoa kỳ",
    "keywords": "DAB DAB Daytona Beach Daytona Beach Sân bay Daytona Beach Daytona Beach International Airport Hoa kỳ United States US"
  },
  {
    "id": "DOL",
    "name": "Deauville (DOL)",
    "country": "Pháp",
    "keywords": "DOL DOL Deauville Deauville Sân bay Deauville Saint-Gatien Deauville Saint-Gatien Airport Pháp France FR"
  },
  {
    "id": "DEC",
    "name": "Decatur (DEC)",
    "country": "Hoa kỳ",
    "keywords": "DEC DEC Decatur Decatur Sân bay Decatur Decatur Airport Hoa kỳ United States US"
  },
  {
    "id": "YDF",
    "name": "Deer Lake (YDF)",
    "country": "Canada",
    "keywords": "YDF YDF Deer Lake Deer Lake Sân bay Deer Lake Regional Deer Lake Regional Airport Canada Canada CA"
  },
  {
    "id": "DED",
    "name": "Dehra Dun (DED)",
    "country": "Ấn độ",
    "keywords": "DED DED Dehra Dun Dehradun Sân bay Dehradun Dehradun Airport Ấn độ India IN"
  },
  {
    "id": "DNZ",
    "name": "Denizli (DNZ)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "DNZ DNZ Denizli Denizli Sân bay Çardak Çardak Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "APA",
    "name": "Denver (APA)",
    "country": "Hoa kỳ",
    "keywords": "APA DEN Denver Denver Sân bay Centennial Centennial Airport Hoa kỳ United States US"
  },
  {
    "id": "DEN",
    "name": "Denver (DEN)",
    "country": "Hoa kỳ",
    "keywords": "DEN DEN Denver Denver Sân bay quốc tế Denver Denver International Airport Hoa kỳ United States US"
  },
  {
    "id": "DSM",
    "name": "Des Moines (DSM)",
    "country": "Hoa kỳ",
    "keywords": "DSM DSM Des Moines Des Moines Sân bay Des Moines Des Moines International Airport Hoa kỳ United States US"
  },
  {
    "id": "DET",
    "name": "Detroit (DET)",
    "country": "Hoa kỳ",
    "keywords": "DET DTT Detroit Detroit Sân bay Coleman A. Young Coleman A. Young International Airport Hoa kỳ United States US"
  },
  {
    "id": "DTT",
    "name": "Detroit (DTT)",
    "country": "Hoa kỳ",
    "keywords": "DTT DTT Detroit Detroit Tất cả các sân bay All Airports Hoa kỳ United States US"
  },
  {
    "id": "DTW",
    "name": "Detroit (DTW)",
    "country": "Hoa kỳ",
    "keywords": "DTW DTT Detroit Detroit Sân bay Detroit Metropolitan Wayne County Detroit Metropolitan Wayne County Airport Hoa kỳ United States US"
  },
  {
    "id": "YIP",
    "name": "Detroit (YIP)",
    "country": "Hoa kỳ",
    "keywords": "YIP DTT Detroit Detroit Sân bay Willow Run Willow Run Airport Hoa kỳ United States US"
  },
  {
    "id": "DVL",
    "name": "Devils Lake (DVL)",
    "country": "Hoa kỳ",
    "keywords": "DVL DVL Devils Lake Devils Lake Sân bay Devils Lake Municipal Devils Lake Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "DPO",
    "name": "Devonport (DPO)",
    "country": "Úc",
    "keywords": "DPO DPO Devonport Devonport Sân bay Devonport Devonport Airport Úc Australia AU"
  },
  {
    "id": "DHA",
    "name": "Dhahran (DHA)",
    "country": "Ả rập xê út",
    "keywords": "DHA DHA Dhahran Dhahran Sân bay Dhahran Dhahran International Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "DAC",
    "name": "Dhaka (DAC)",
    "country": "Băng la đét",
    "keywords": "DAC DAC Dhaka Dhaka Sân bay Shahjalal Shahjalal International Airport Băng la đét Bangladesh BD"
  },
  {
    "id": "DHM",
    "name": "Dharamsala (DHM)",
    "country": "Ấn độ",
    "keywords": "DHM DHM Dharamsala Dharamsala Sân bay Gaggal Gaggal Airport Ấn độ India IN"
  },
  {
    "id": "DIB",
    "name": "Dibrugarh (DIB)",
    "country": "Ấn độ",
    "keywords": "DIB DIB Dibrugarh Dibrugarh Sân bay Dibrugarh Dibrugarh Airport Ấn độ India IN"
  },
  {
    "id": "DIK",
    "name": "Dickinson (DIK)",
    "country": "Hoa kỳ",
    "keywords": "DIK DIK Dickinson Dickinson Sân bay Theodore Roosevelt Regional Theodore Roosevelt Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YNZ",
    "name": "Diêm Thành (YNZ)",
    "country": "Trung Quốc",
    "keywords": "YNZ YNZ Diêm Thành YANCHENG NANYANG Sân bay Yancheng Nanyang Yancheng Nanyang Airport Trung Quốc China CN"
  },
  {
    "id": "YNJ",
    "name": "Diên Cát (YNJ)",
    "country": "Trung Quốc",
    "keywords": "YNJ YNJ Diên Cát Yanji Sân bay Yanji Chaoyangchuan Yanji Chaoyangchuan Airport Trung Quốc China CN"
  },
  {
    "id": "DIJ",
    "name": "Dijon (DIJ)",
    "country": "Pháp",
    "keywords": "DIJ DIJ Dijon Dijon Sân bay Dijon-Bourgogne Dijon-Bourgogne Airport Pháp France FR"
  },
  {
    "id": "DIL",
    "name": "Dili (DIL)",
    "country": "Indonesia",
    "keywords": "DIL DIL Dili Dili Sân bay Presidente Nicolau Lobato Presidente Nicolau Lobato International Airport Indonesia Indonesia ID"
  },
  {
    "id": "DLG",
    "name": "Dillingham (DLG)",
    "country": "Hoa kỳ",
    "keywords": "DLG DLG Dillingham Dillingham Sân bay Dillingham Dillingham Airport Hoa kỳ United States US"
  },
  {
    "id": "DNR",
    "name": "Dinard (DNR)",
    "country": "Pháp",
    "keywords": "DNR DNR Dinard Dinard Sân bay Dinard - Pleurtuit - Saint-Malo Dinard - Pleurtuit - Saint-Malo Airport Pháp France FR"
  },
  {
    "id": "DPL",
    "name": "Dipolog (DPL)",
    "country": "Philippines",
    "keywords": "DPL DPL Dipolog Dipolog Sân bay Dipolog Dipolog Airport Philippines Philippines PH"
  },
  {
    "id": "DIR",
    "name": "Dire Dawa (DIR)",
    "country": "E ti ô pia",
    "keywords": "DIR DIR Dire Dawa Dire Dawa Sân bay Aba Tenna Dejazmach Yilma Aba Tenna Dejazmach Yilma International Airport E ti ô pia Ethiopia ET"
  },
  {
    "id": "DIU",
    "name": "Diu In (DIU)",
    "country": "Ấn độ",
    "keywords": "DIU DIU Diu In Diu In Sân bay Diu Diu Airport Ấn độ India IN"
  },
  {
    "id": "DIY",
    "name": "Diyarbai (DIY)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "DIY DIY Diyarbai Diyarbai Sân bay Diyarbakir Diyarbakır Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "DJE",
    "name": "Djerba (DJE)",
    "country": "Tuy ni di",
    "keywords": "DJE DJE Djerba Djerba Sân bay Zarzis Zarzis Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "JIB",
    "name": "Djibouti (JIB)",
    "country": "Djibouti",
    "keywords": "JIB JIB Djibouti Djibouti Sân bay Ambouli Ambouli Airport Djibouti Djibouti DJ"
  },
  {
    "id": "DNK",
    "name": "Dnepropetrovsk (DNK)",
    "country": "U-krai-na",
    "keywords": "DNK DNK Dnepropetrovsk Dnepropetrovsk Sân bay Dnipropetrovsk Dnipropetrovsk International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "DDC",
    "name": "Dodge City (DDC)",
    "country": "Hoa kỳ",
    "keywords": "DDC DDC Dodge City Dodge City Sân bay Dodge City Regional Dodge City Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "DOH",
    "name": "Doha (DOH)",
    "country": "Qatar",
    "keywords": "DOH DOH Doha Doha Sân bay Doha Doha International Airport Qatar Qatar QA"
  },
  {
    "id": "DLE",
    "name": "Dole (DLE)",
    "country": "Pháp",
    "keywords": "DLE DLE Dole Dole Sân bay Dôle-Tavaux Dôle-Tavaux Airport Pháp France FR"
  },
  {
    "id": "DCF",
    "name": "Dominica (DCF)",
    "country": "Cộng hòa Dominicana",
    "keywords": "DCF DOM Dominica Dominica Sân bay Canefield Canefield Airport Cộng hòa Dominicana Dominican Republic DM"
  },
  {
    "id": "DOM",
    "name": "Dominica (DOM)",
    "country": "Cộng hòa Dominicana",
    "keywords": "DOM DOM Dominica Dominica Sân bay Melville Hall Melville Hall Airport Cộng hòa Dominicana Dominican Republic DM"
  },
  {
    "id": "CFN",
    "name": "Donegal (CFN)",
    "country": "Cộng hòa Ai len",
    "keywords": "CFN CFN Donegal Donegal Sân bay Donegal Donegal Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "DOK",
    "name": "Donetsk (DOK)",
    "country": "U-krai-na",
    "keywords": "DOK DOK Donetsk Donetsk Sân bay Donetsk Donetsk International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "DMD",
    "name": "Doomadgee (DMD)",
    "country": "Úc",
    "keywords": "DMD DMD Doomadgee Doomadgee Sân bay Doomadgee Mission Doomadgee Mission Airport Úc Australia AU"
  },
  {
    "id": "DTM",
    "name": "Dortmund (DTM)",
    "country": "Đức",
    "keywords": "DTM DTM Dortmund Dortmund Sân bay Dortmund Dortmund Airport Đức Germany DE"
  },
  {
    "id": "DHN",
    "name": "Dothan (DHN)",
    "country": "Hoa kỳ",
    "keywords": "DHN DHN Dothan Dothan Sân bay Dothan Regional Dothan Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "DLA",
    "name": "Douala (DLA)",
    "country": "Cộng hòa Cameroon",
    "keywords": "DLA DLA Douala Douala Sân bay Douala Douala Airport Cộng hòa Cameroon United Republic Of Cameroon CM"
  },
  {
    "id": "DRS",
    "name": "Dresden (DRS)",
    "country": "Đức",
    "keywords": "DRS DRS Dresden Dresden Sân bay Dresden Dresden Airport Đức Germany DE"
  },
  {
    "id": "YHD",
    "name": "Dryden (YHD)",
    "country": "Canada",
    "keywords": "YHD YHD Dryden Dryden Sân bay Dryden Regional Dryden Regional Airport Canada Canada CA"
  },
  {
    "id": "DWC",
    "name": "Dubai (DWC)",
    "country": "Ả rập thống nhất",
    "keywords": "DWC DXB Dubai Dubai Sân bay quốc tế Al Maktoum Al Maktoum International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "DXB",
    "name": "Dubai (DXB)",
    "country": "Ả rập thống nhất",
    "keywords": "DXB DXB Dubai Dubai Sân bay Dubai Dubai International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "XNB",
    "name": "Dubai (XNB)",
    "country": "Ả rập thống nhất",
    "keywords": "XNB DXB Dubai Dubai Sân bay Dubai Dubai airports Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "DBO",
    "name": "Dubbo (DBO)",
    "country": "Úc",
    "keywords": "DBO DBO Dubbo Dubbo Sân bay Dubbo Dubbo Airport Úc Australia AU"
  },
  {
    "id": "DUB",
    "name": "Dublin (DUB)",
    "country": "Cộng hòa Ai len",
    "keywords": "DUB DUB Dublin Dublin Sân bay Dublin Dublin Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "DUJ",
    "name": "Dubois (DUJ)",
    "country": "Panama",
    "keywords": "DUJ DUJ Dubois Dubois Sân bay DuBois Regional DuBois Regional Airport Panama Panama PA"
  },
  {
    "id": "DBV",
    "name": "Dubrovnik (DBV)",
    "country": "Croatia",
    "keywords": "DBV DBV Dubrovnik Dubrovnik Sân bay Dubrovnik Dubrovnik Airport Croatia Croatia HR"
  },
  {
    "id": "DBQ",
    "name": "Dubuque (DBQ)",
    "country": "Hoa kỳ",
    "keywords": "DBQ DBQ Dubuque Dubuque Sân bay Dubuque Regional Dubuque Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "DLH",
    "name": "Duluth (DLH)",
    "country": "Hoa kỳ",
    "keywords": "DLH DLH Duluth Duluth Sân bay Duluth Duluth International Airport Hoa kỳ United States US"
  },
  {
    "id": "DND",
    "name": "Dundee (DND)",
    "country": "Anh quốc",
    "keywords": "DND DND Dundee Dundee Sân bay Dundee Dundee Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "DUD",
    "name": "Dunedin (DUD)",
    "country": "Niu di lân",
    "keywords": "DUD DUD Dunedin Dunedin Sân bay Dunedin Dunedin Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "AMK",
    "name": "Durango (AMK)",
    "country": "Hoa kỳ",
    "keywords": "AMK AMK Durango Durango Animas Air Park Animas Air Park Hoa kỳ United States US"
  },
  {
    "id": "DGO",
    "name": "Durango (DGO)",
    "country": "Mê hi cô",
    "keywords": "DGO DGO Durango Durango Sân bay General Guadalupe Victoria General Guadalupe Victoria International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "DRO",
    "name": "Durango (DRO)",
    "country": "Hoa kỳ",
    "keywords": "DRO DRO Durango Durango Sân bay Durango-La Plata County Durango-La Plata County Airport Hoa kỳ United States US"
  },
  {
    "id": "DUR",
    "name": "Durban (DUR)",
    "country": "Nam Phi",
    "keywords": "DUR DUR Durban Durban Sân bay King Shaka International King Shaka International Airport Nam Phi South Africa ZA"
  },
  {
    "id": "DYU",
    "name": "Dushanbe (DYU)",
    "country": "Tajikistan",
    "keywords": "DYU DYU Dushanbe Dushanbe Sân bay Dushanbe Dushanbe Airport Tajikistan Tajikistan TJ"
  },
  {
    "id": "DUS",
    "name": "Dusseldorf (DUS)",
    "country": "Đức",
    "keywords": "DUS DUS Dusseldorf Dusseldorf Sân bay Düsseldorf Düsseldorf International Airport Đức Germany DE"
  },
  {
    "id": "DUT",
    "name": "Dutch Harbor (DUT)",
    "country": "Hoa kỳ",
    "keywords": "DUT DUT Dutch Harbor Dutch Harbor Sân bay Unalaska Unalaska Airport Hoa kỳ United States US"
  },
  {
    "id": "WEF",
    "name": "Duy Phường (WEF)",
    "country": "Trung Quốc",
    "keywords": "WEF WEF Duy Phường Weifang Sân bay Weifang Weifang Airport Trung Quốc China CN"
  },
  {
    "id": "DZA",
    "name": "Dzaoudzi (DZA)",
    "country": "Mayotte",
    "keywords": "DZA DZA Dzaoudzi Dzaoudzi Sân bay Dzaoudzi Pamandzi Dzaoudzi Pamandzi International Airport Mayotte Mayotte YT"
  },
  {
    "id": "DLI",
    "name": "Đà Lạt (DLI)",
    "country": "Việt Nam",
    "keywords": "DLI DLI Đà Lạt Dalat Sân bay Liên Khương Lien Khuong Airport Việt Nam Vietnam VN"
  },
  {
    "id": "DAD",
    "name": "Đà Nẵng (DAD)",
    "country": "Việt Nam",
    "keywords": "DAD DAD Đà Nẵng Da Nang Sân bay Đà Nẵng Da Nang International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "TPE",
    "name": "Đài Bắc (TPE)",
    "country": "Đài Loan",
    "keywords": "TPE TPE Đài Bắc Taipei Sân bay Taiwan Taoyuan Intl Taiwan Taoyuan Intl Airport Đài Loan Taiwan TW"
  },
  {
    "id": "TSA",
    "name": "Đài Bắc (TSA)",
    "country": "Đài Loan",
    "keywords": "TSA TPE Đài Bắc Taipei Sân bay Taipei Songshan Taipei Songshan Airport Đài Loan Taiwan TW"
  },
  {
    "id": "DAT",
    "name": "Đại Đồng (DAT)",
    "country": "Trung Quốc",
    "keywords": "DAT DAT Đại Đồng Datong Sân bay Datong Yungang Datong Yungang Airport Trung Quốc China CN"
  },
  {
    "id": "DQA",
    "name": "Đại Khánh (DQA)",
    "country": "Trung Quốc",
    "keywords": "DQA DQA Đại Khánh Daqing Shi Sân bay Daqing Shi Daqing Shi Airport Trung Quốc China CN"
  },
  {
    "id": "DLC",
    "name": "Đại Liên (DLC)",
    "country": "Trung Quốc",
    "keywords": "DLC DLC Đại Liên Dalian Sân bay Dalian Zhoushuizi Dalian Zhoushuizi International Airport Trung Quốc China CN"
  },
  {
    "id": "DLU",
    "name": "Đại Lý (DLU)",
    "country": "Trung Quốc",
    "keywords": "DLU DLU Đại Lý DALI Sân bay DALI DALI Trung Quốc China CN"
  },
  {
    "id": "TNN",
    "name": "Đài Nam (TNN)",
    "country": "Đài Loan",
    "keywords": "TNN TNN Đài Nam Tainan Sân bay Tainan Tainan Airport Đài Loan Taiwan TW"
  },
  {
    "id": "TCG",
    "name": "Đại Thành (TCG)",
    "country": "Trung Quốc",
    "keywords": "TCG TCG Đại Thành Tacheng Sân bay Tacheng Tacheng Airport Trung Quốc China CN"
  },
  {
    "id": "DAX",
    "name": "Đại Tiên (DAX)",
    "country": "Trung Quốc",
    "keywords": "DAX DAX Đại Tiên Dazhou Sân bay Dazhou Dazhou Airport Trung Quốc China CN"
  },
  {
    "id": "TXG",
    "name": "Đài Trung (TXG)",
    "country": "Đài Loan",
    "keywords": "TXG TXG Đài Trung Taichung Sân bay Taichung Ching Chuang Kang Taichung Ching Chuang Kang Airport Đài Loan Taiwan TW"
  },
  {
    "id": "DDG",
    "name": "Đan Đông (DDG)",
    "country": "Trung Quốc",
    "keywords": "DDG DDG Đan Đông Dandong Sân bay Dandong Langtou Dandong Langtou Airport Trung Quốc China CN"
  },
  {
    "id": "ECN",
    "name": "Đảo Síp (ECN)",
    "country": "Cộng hòa Síp",
    "keywords": "ECN ECN Đảo Síp Cyprus Síp Cyprus Cộng hòa Síp Cyprus CY"
  },
  {
    "id": "TCZ",
    "name": "Đằng Trọng (TCZ)",
    "country": "Trung Quốc",
    "keywords": "TCZ TCZ Đằng Trọng Tengchong Tuofeng Sân bay Tengchong Tuofeng Tengchong Tuofeng Airport Trung Quốc China CN"
  },
  {
    "id": "DEL",
    "name": "Đê-li (DEL)",
    "country": "Ấn độ",
    "keywords": "DEL DEL Đê-li Delhi Sân bay Indira Gandhi Indira Gandhi International Airport Ấn độ India IN"
  },
  {
    "id": "DIG",
    "name": "Địch Khánh (DIG)",
    "country": "Trung Quốc",
    "keywords": "DIG DIG Địch Khánh Diqing Sân bay DIQING DIQING AIRPORT Trung Quốc China CN"
  },
  {
    "id": "DIN",
    "name": "Điện Biên Phủ (DIN)",
    "country": "Việt Nam",
    "keywords": "DIN DIN Điện Biên Phủ Dien Bien Phu Sân bay Điện Biên Phủ Dien Bien Phu Airport Việt Nam Vietnam VN"
  },
  {
    "id": "DNH",
    "name": "Đôn Hoàng (DNH)",
    "country": "Trung Quốc",
    "keywords": "DNH DNH Đôn Hoàng Dunhuang Sân bay Dunhuang Dunhuang Airport Trung Quốc China CN"
  },
  {
    "id": "TNH",
    "name": "Đồng Hóa (TNH)",
    "country": "Trung Quốc",
    "keywords": "TNH TNH Đồng Hóa Tonghua Sanyuanpu Sân bay Tonghua Sanyuanpu Tonghua Sanyuanpu Airport Trung Quốc China CN"
  },
  {
    "id": "TGO",
    "name": "Đồng Liêu (TGO)",
    "country": "Trung Quốc",
    "keywords": "TGO TGO Đồng Liêu Tongliao Sân bay Tongliao Tongliao Airport Trung Quốc China CN"
  },
  {
    "id": "TEN",
    "name": "Đồng Nhân (TEN)",
    "country": "Trung Quốc",
    "keywords": "TEN TEN Đồng Nhân Tongren Sân bay Tongren Fenghuang Tongren Fenghuang Airport Trung Quốc China CN"
  },
  {
    "id": "DOY",
    "name": "Đông Thanh (DOY)",
    "country": "Trung Quốc",
    "keywords": "DOY DOY Đông Thanh Dongying Sân bay Dongying Dongying Airport Trung Quốc China CN"
  },
  {
    "id": "DSN",
    "name": "Đông Thăng (DSN)",
    "country": "Trung Quốc",
    "keywords": "DSN DSN Đông Thăng Ordos Sân bay Ordos Ordos Airport Trung Quốc China CN"
  },
  {
    "id": "EAA",
    "name": "Eagle (EAA)",
    "country": "Hoa kỳ",
    "keywords": "EAA EAA Eagle Eagle Sân bay Eagle Eagle Airport Hoa kỳ United States US"
  },
  {
    "id": "EGE",
    "name": "Eagle (EGE)",
    "country": "Hoa kỳ",
    "keywords": "EGE EGE Eagle Eagle Sân bay Eagle County Regional Eagle County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ELS",
    "name": "East London (ELS)",
    "country": "Nam Phi",
    "keywords": "ELS ELS East London East London Sân bay East London East London Airport Nam Phi South Africa ZA"
  },
  {
    "id": "ESD",
    "name": "East Sound (ESD)",
    "country": "Hoa kỳ",
    "keywords": "ESD ESD East Sound East Sound Sân bay Orcas Island Orcas Island Airport Hoa kỳ United States US"
  },
  {
    "id": "IPC",
    "name": "Easter Island (IPC)",
    "country": "Chi lê",
    "keywords": "IPC IPC Easter Island Easter Island Sân bay Mataveri Mataveri International Airport Chi lê Chile CL"
  },
  {
    "id": "EAU",
    "name": "Eau Claire (EAU)",
    "country": "Hoa kỳ",
    "keywords": "EAU EAU Eau Claire Eau Claire Sân bay Chippewa Valley Regional Chippewa Valley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "EDI",
    "name": "Edinburgh (EDI)",
    "country": "Anh quốc",
    "keywords": "EDI EDI Edinburgh Edinburgh Sân bay Edinburgh Edinburgh Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YEA",
    "name": "Edmonton (YEA)",
    "country": "Canada",
    "keywords": "YEA YEA Edmonton Edmonton Tất cả các sân bay All Airports Canada Canada CA"
  },
  {
    "id": "YED",
    "name": "Edmonton (YED)",
    "country": "Canada",
    "keywords": "YED YEA Edmonton Edmonton CFB Edmonton CFB Edmonton Canada Canada CA"
  },
  {
    "id": "YEG",
    "name": "Edmonton (YEG)",
    "country": "Canada",
    "keywords": "YEG YEA Edmonton Edmonton Sân bay Edmonton Edmonton International Airport Canada Canada CA"
  },
  {
    "id": "YXD",
    "name": "Edmonton (YXD)",
    "country": "Canada",
    "keywords": "YXD YEA Edmonton Edmonton Edmonton City Centre Edmonton City Centre Canada Canada CA"
  },
  {
    "id": "EDR",
    "name": "Edward River (EDR)",
    "country": "Úc",
    "keywords": "EDR EDR Edward River Edward River Sân bay Edward River Edward River Airport Úc Australia AU"
  },
  {
    "id": "EIN",
    "name": "Eindhoven (EIN)",
    "country": "Hà Lan",
    "keywords": "EIN EIN Eindhoven Eindhoven Sân bay Eindhoven Eindhoven Airport Hà Lan Netherlands NL"
  },
  {
    "id": "SVX",
    "name": "Ekaterinburg (SVX)",
    "country": "Nga",
    "keywords": "SVX SVX Ekaterinburg Ekaterinburg Sân bay Koltsovo Koltsovo International Airport Nga Russia RU"
  },
  {
    "id": "EUN",
    "name": "El Aaiun (EUN)",
    "country": "Ma rốc",
    "keywords": "EUN EUN El Aaiun El Aaiun Sân bay Hassan I Hassan I Airport Ma rốc Morocco MA"
  },
  {
    "id": "FTE",
    "name": "El Calafate (FTE)",
    "country": "Ác Hen Tina",
    "keywords": "FTE FTE El Calafate El Calafate Sân bay Comandante Armando Tola Comandante Armando Tola International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "IPL",
    "name": "El Centro (IPL)",
    "country": "Hoa kỳ",
    "keywords": "IPL IPL El Centro El Centro Sân bay Imperial County Imperial County Airport Hoa kỳ United States US"
  },
  {
    "id": "ELD",
    "name": "El Dorado (ELD)",
    "country": "Ác Hen Tina",
    "keywords": "ELD ELD El Dorado El Dorado Sân bay South Arkansas Regional South Arkansas Regional Airport at Goodwin Field Ác Hen Tina Argentina AR"
  },
  {
    "id": "BIF",
    "name": "El Paso (BIF)",
    "country": "Hoa kỳ",
    "keywords": "BIF ELP El Paso El Paso Biggs Army Airfield Biggs Army Airfield Hoa kỳ United States US"
  },
  {
    "id": "ETH",
    "name": "Elat (ETH)",
    "country": "Israel",
    "keywords": "ETH ETH Elat Elat Sân bay J. Hozman J. Hozman Airport Israel Israel IL"
  },
  {
    "id": "EZS",
    "name": "Elazig (EZS)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "EZS EZS Elazig Elazig Sân bay Elazig Elazığ Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "EBA",
    "name": "Elba Island (EBA)",
    "country": "Ý",
    "keywords": "EBA EBA Elba Island Elba Island Sân bay Marina di Campo Marina di Campo Airport Ý Italy IT"
  },
  {
    "id": "EDL",
    "name": "Eldoret (EDL)",
    "country": "Kenya",
    "keywords": "EDL EDL Eldoret Eldoret Sân bay Eldoret Eldoret International Airport Kenya Kenya KE"
  },
  {
    "id": "EKO",
    "name": "Elko (EKO)",
    "country": "Hoa kỳ",
    "keywords": "EKO EKO Elko Elko Sân bay Elko Regional Elko Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YEL",
    "name": "Elliot Lake (YEL)",
    "country": "Canada",
    "keywords": "YEL YEL Elliot Lake Elliot Lake Sân bay Elliot Lake Municipal Elliot Lake Municipal Airport Canada Canada CA"
  },
  {
    "id": "ELM",
    "name": "Elmira (ELM)",
    "country": "Hoa kỳ",
    "keywords": "ELM ELM Elmira Elmira Sân bay Elmira/Corning Regional Elmira/Corning Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "EMD",
    "name": "Emerald (EMD)",
    "country": "Úc",
    "keywords": "EMD EMD Emerald Emerald Sân bay Emerald Emerald Airport Úc Australia AU"
  },
  {
    "id": "ENH",
    "name": "Enshi (ENH)",
    "country": "Trung Quốc",
    "keywords": "ENH ENH Enshi Enshi Sân bay Enshi Enshi Airport Trung Quốc China CN"
  },
  {
    "id": "EBB",
    "name": "Entebbe (EBB)",
    "country": "Uganda",
    "keywords": "EBB EBB Entebbe Entebbe Sân bay Entebbe Entebbe International Airport Uganda Uganda UG"
  },
  {
    "id": "ERL",
    "name": "Erenhot Shi (ERL)",
    "country": "Trung Quốc",
    "keywords": "ERL ERL Erenhot Shi Erenhot Shi Sân bay Erenhot Shi Erenhot Shi Airport Trung Quốc China CN"
  },
  {
    "id": "EVN",
    "name": "Erevan (EVN)",
    "country": "Ác Mê nia",
    "keywords": "EVN EVN Erevan Erevan Sân bay Zvartnots Zvartnots International Airport Ác Mê nia Armenia AM"
  },
  {
    "id": "ERF",
    "name": "Erfurt (ERF)",
    "country": "Đức",
    "keywords": "ERF ERF Erfurt Erfurt Sân bay Erfurt Erfurt Airport Đức Germany DE"
  },
  {
    "id": "ERI",
    "name": "Erie (ERI)",
    "country": "Hoa kỳ",
    "keywords": "ERI ERI Erie Erie Sân bay Erie Erie International Airport Hoa kỳ United States US"
  },
  {
    "id": "ERC",
    "name": "Erzincan (ERC)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ERC ERC Erzincan Erzincan Sân bay Erzincan Erzincan Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ERZ",
    "name": "Erzurum (ERZ)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ERZ ERZ Erzurum Erzurum Sân bay Erzurum Erzurum Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "EBJ",
    "name": "Esbjerg (EBJ)",
    "country": "Ðan Mạch",
    "keywords": "EBJ EBJ Esbjerg Esbjerg Sân bay Esbjerg Esbjerg Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "ESC",
    "name": "Escanaba (ESC)",
    "country": "Hoa kỳ",
    "keywords": "ESC ESC Escanaba Escanaba Sân bay Delta County Delta County Airport Hoa kỳ United States US"
  },
  {
    "id": "EPR",
    "name": "Esperance (EPR)",
    "country": "Úc",
    "keywords": "EPR EPR Esperance Esperance Sân bay Esperance Esperance Airport Úc Australia AU"
  },
  {
    "id": "EQS",
    "name": "Esquel (EQS)",
    "country": "Ác Hen Tina",
    "keywords": "EQS EQS Esquel Esquel Sân bay Esquel Esquel Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "ESU",
    "name": "Essaouira (ESU)",
    "country": "Ma rốc",
    "keywords": "ESU ESU Essaouira Essaouira Sân bay Essaouira Essaouira Airport Ma rốc Morocco MA"
  },
  {
    "id": "EUG",
    "name": "Eugene (EUG)",
    "country": "Hoa kỳ",
    "keywords": "EUG EUG Eugene Eugene Sân bay Eugene Eugene Airport / Mahlon Sweet Field Hoa kỳ United States US"
  },
  {
    "id": "ACV",
    "name": "Eureka (ACV)",
    "country": "Hoa kỳ",
    "keywords": "ACV ACV Eureka Eureka Sân bay Arcata-Eureka Arcata-Eureka Airport Hoa kỳ United States US"
  },
  {
    "id": "EVV",
    "name": "Evansville (EVV)",
    "country": "Hoa kỳ",
    "keywords": "EVV EVV Evansville Evansville Sân bay Evansville Regional Evansville Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PAE",
    "name": "Everett (PAE)",
    "country": "Hoa kỳ",
    "keywords": "PAE PAE Everett Everett Sân bay Snohomish County Snohomish County Airport Hoa kỳ United States US"
  },
  {
    "id": "EXT",
    "name": "Exeter (EXT)",
    "country": "Anh quốc",
    "keywords": "EXT EXT Exeter Exeter Sân bay Exeter Exeter International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "FAE",
    "name": "Faeroe Islands (FAE)",
    "country": "Ðan Mạch",
    "keywords": "FAE FAE Faeroe Islands Faeroe Islands Sân bay Vágar Vágar Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "FAI",
    "name": "Fairbanks (FAI)",
    "country": "Hoa kỳ",
    "keywords": "FAI FAI Fairbanks Fairbanks Sân bay Fairbanks Fairbanks International Airport Hoa kỳ United States US"
  },
  {
    "id": "LYP",
    "name": "Faisalabad (LYP)",
    "country": "Pakistan",
    "keywords": "LYP LYP Faisalabad Faisalabad Sân bay Faisalabad Faisalabad International Airport Pakistan Pakistan PK"
  },
  {
    "id": "FAR",
    "name": "Fargo (FAR)",
    "country": "Hoa kỳ",
    "keywords": "FAR FAR Fargo Fargo Sân bay Hector Hector International Airport Hoa kỳ United States US"
  },
  {
    "id": "FMN",
    "name": "Farmington (FMN)",
    "country": "Hoa kỳ",
    "keywords": "FMN FMN Farmington Farmington Sân bay Four Corners Regional Four Corners Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "FAO",
    "name": "Faro (FAO)",
    "country": "Bồ đào nha",
    "keywords": "FAO FAO Faro Faro Sân bay Faro Faro Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "FAY",
    "name": "Fayetteville (FAY)",
    "country": "New Caledonia",
    "keywords": "FAY FAY Fayetteville Fayetteville Sân bay Fayetteville Regional Fayetteville Regional Airport New Caledonia New Caledonia NC"
  },
  {
    "id": "XNA",
    "name": "Fayetteville (XNA)",
    "country": "Ác Hen Tina",
    "keywords": "XNA FYV Fayetteville Fayetteville Sân bay Northwest Arkansas Regional Northwest Arkansas Regional Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "FEN",
    "name": "Fernando De Noronha (FEN)",
    "country": "Bra xin",
    "keywords": "FEN FEN Fernando De Noronha Fernando De Noronha Sân bay Fernando de Noronha Fernando de Noronha Airport Bra xin Brazil BR"
  },
  {
    "id": "FEZ",
    "name": "Fez Ma (FEZ)",
    "country": "Ma rốc",
    "keywords": "FEZ FEZ Fez Ma Fez Ma Sân bay Fes-Saïss Fes-Saïss Airport Ma rốc Morocco MA"
  },
  {
    "id": "FSC",
    "name": "Figari (FSC)",
    "country": "Pháp",
    "keywords": "FSC FSC Figari Figari Sân bay Sud Corse Sud Corse Airport Pháp France FR"
  },
  {
    "id": "FLG",
    "name": "Flagstaff (FLG)",
    "country": "Hoa kỳ",
    "keywords": "FLG FLG Flagstaff Flagstaff Sân bay Flagstaff Pulliam Flagstaff Pulliam Airport Hoa kỳ United States US"
  },
  {
    "id": "YFO",
    "name": "Flin Flon (YFO)",
    "country": "Canada",
    "keywords": "YFO YFO Flin Flon Flin Flon Sân bay Flin Flon Flin Flon Airport Canada Canada CA"
  },
  {
    "id": "FNT",
    "name": "Flint (FNT)",
    "country": "Hoa kỳ",
    "keywords": "FNT FNT Flint Flint Sân bay Bishop Bishop International Airport Hoa kỳ United States US"
  },
  {
    "id": "FLO",
    "name": "Florence (FLO)",
    "country": "Seychelles Islands",
    "keywords": "FLO FLO Florence Florence Sân bay Florence Regional Florence Regional Airport Seychelles Islands Seychelles Islands SC"
  },
  {
    "id": "FLR",
    "name": "Florence (FLR)",
    "country": "Ý",
    "keywords": "FLR FLR Florence Florence Sân bay Peretola Peretola Airport Ý Italy IT"
  },
  {
    "id": "FRS",
    "name": "Flores (FRS)",
    "country": "Guatemala",
    "keywords": "FRS FRS Flores Flores Sân bay Mundo Maya Mundo Maya International Airport Guatemala Guatemala GT"
  },
  {
    "id": "FLN",
    "name": "Florianopolis (FLN)",
    "country": "Bra xin",
    "keywords": "FLN FLN Florianopolis Florianopolis Sân bay Hercílio Luz Hercílio Luz International Airport Bra xin Brazil BR"
  },
  {
    "id": "FRO",
    "name": "Floro (FRO)",
    "country": "Na Uy",
    "keywords": "FRO FRO Floro Floro Sân bay Florø Florø Airport Na Uy Norway NO"
  },
  {
    "id": "FDE",
    "name": "Forde (FDE)",
    "country": "Na Uy",
    "keywords": "FDE FDE Forde Forde Sân bay Førde Førde Airport, Bringeland Na Uy Norway NO"
  },
  {
    "id": "FMA",
    "name": "Formosa (FMA)",
    "country": "Ác Hen Tina",
    "keywords": "FMA FMA Formosa Formosa Sân bay Formosa Formosa International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "FTU",
    "name": "Fort Dauphin (FTU)",
    "country": "Madagascar",
    "keywords": "FTU FTU Fort Dauphin Fort Dauphin Sân bay Tôlanaro Tôlanaro Airport Madagascar Madagascar MG"
  },
  {
    "id": "FDF",
    "name": "Fort De France (FDF)",
    "country": "Martinique",
    "keywords": "FDF FDF Fort De France Ft De France Sân bay Martinique Aimé Césaire Martinique Aimé Césaire International Airport Martinique Martinique MQ"
  },
  {
    "id": "FOD",
    "name": "Fort Dodge (FOD)",
    "country": "Hoa kỳ",
    "keywords": "FOD FOD Fort Dodge Fort Dodge Sân bay Fort Dodge Regional Fort Dodge Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YAG",
    "name": "Fort Frances (YAG)",
    "country": "Canada",
    "keywords": "YAG YAG Fort Frances Fort Frances Sân bay Fort Frances Municipal Fort Frances Municipal Airport Canada Canada CA"
  },
  {
    "id": "RSW",
    "name": "Fort Myers (RSW)",
    "country": "Hoa kỳ",
    "keywords": "RSW FMY Fort Myers Fort Myers Sân bay Southwest Florida Southwest Florida International Airport Hoa kỳ United States US"
  },
  {
    "id": "YYE",
    "name": "Fort Nelson (YYE)",
    "country": "Canada",
    "keywords": "YYE YYE Fort Nelson Fort Nelson Sân bay Fort Nelson Fort Nelson Airport Canada Canada CA"
  },
  {
    "id": "FYU",
    "name": "Fort Yukon (FYU)",
    "country": "Hoa kỳ",
    "keywords": "FYU FYU Fort Yukon Fort Yukon Sân bay Fort Yukon Fort Yukon Airport Hoa kỳ United States US"
  },
  {
    "id": "FOR",
    "name": "Fortaleza (FOR)",
    "country": "Bra xin",
    "keywords": "FOR FOR Fortaleza Fortaleza Sân bay Pinto Martins Pinto Martins International Airport Bra xin Brazil BR"
  },
  {
    "id": "FRW",
    "name": "Francistown (FRW)",
    "country": "Botswana",
    "keywords": "FRW FRW Francistown Francistown Sân bay Francistown Francistown Airport Botswana Botswana BW"
  },
  {
    "id": "FRA",
    "name": "Frankfurt (FRA)",
    "country": "Đức",
    "keywords": "FRA FRA Frankfurt Frankfurt Sân bay Frankfurt Frankfurt Airport Đức Germany DE"
  },
  {
    "id": "HHN",
    "name": "Frankfurt (HHN)",
    "country": "Đức",
    "keywords": "HHN FRA Frankfurt Frankfurt Sân bay Frankfurt-Hahn Frankfurt-Hahn Airport Đức Germany DE"
  },
  {
    "id": "FKL",
    "name": "Franklin (FKL)",
    "country": "Panama",
    "keywords": "FKL FKL Franklin Franklin Sân bay Venango Regional Venango Regional Airport Panama Panama PA"
  },
  {
    "id": "YFC",
    "name": "Fredericton (YFC)",
    "country": "Canada",
    "keywords": "YFC YFC Fredericton Fredericton Sân bay Fredericton Fredericton International Airport Canada Canada CA"
  },
  {
    "id": "FPO",
    "name": "Freeport (FPO)",
    "country": "Bahamas",
    "keywords": "FPO FPO Freeport Freeport Sân bay Grand Bahama Grand Bahama International Airport Bahamas Bahamas BS"
  },
  {
    "id": "FNA",
    "name": "Freetown (FNA)",
    "country": "Sierra Leone",
    "keywords": "FNA FNA Freetown Freetown Sân bay Lungi Lungi International Airport Sierra Leone Sierra Leone SL"
  },
  {
    "id": "FAT",
    "name": "Fresno (FAT)",
    "country": "Hoa kỳ",
    "keywords": "FAT FAT Fresno Fresno Sân bay Fresno Yosemite Fresno Yosemite International Airport Hoa kỳ United States US"
  },
  {
    "id": "FCH",
    "name": "Fresno (FCH)",
    "country": "Hoa kỳ",
    "keywords": "FCH FCH Fresno Fresno Sân bay Fresno Chandler Executive Fresno Chandler Executive Airport Hoa kỳ United States US"
  },
  {
    "id": "FRD",
    "name": "Friday Harbor (FRD)",
    "country": "Hoa kỳ",
    "keywords": "FRD FRD Friday Harbor Friday Harbor Sân bay Friday Harbor Friday Harbor Airport Hoa kỳ United States US"
  },
  {
    "id": "FDH",
    "name": "Friedrichshafen (FDH)",
    "country": "Đức",
    "keywords": "FDH FDH Friedrichshafen Friedrichshafen Sân bay Friedrichshafen Friedrichshafen Airport Đức Germany DE"
  },
  {
    "id": "FNL",
    "name": "Ft Collins (FNL)",
    "country": "Hoa kỳ",
    "keywords": "FNL FNL Ft Collins Ft Collins Sân bay Fort Collins-Loveland Municipal Fort Collins-Loveland Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "FXE",
    "name": "Ft Lauderdale (FXE)",
    "country": "Hoa kỳ",
    "keywords": "FXE FLL Ft Lauderdale Ft Lauderdale Sân bay Fort Lauderdale Executive Fort Lauderdale Executive Airport Hoa kỳ United States US"
  },
  {
    "id": "TBN",
    "name": "Ft Leonard Wood (TBN)",
    "country": "Hoa kỳ",
    "keywords": "TBN TBN Ft Leonard Wood Ft Leonard Wood Sân bay Waynesville-St. Robert Regional Waynesville-St. Robert Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YMM",
    "name": "Ft McMurray (YMM)",
    "country": "Canada",
    "keywords": "YMM YMM Ft McMurray Ft McMurray Sân bay Fort McMurray Fort McMurray Airport Canada Canada CA"
  },
  {
    "id": "FSM",
    "name": "Ft Smith (FSM)",
    "country": "Hoa kỳ",
    "keywords": "FSM FSM Ft Smith Ft Smith Sân bay Fort Smith Regional Fort Smith Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YSM",
    "name": "Ft Smith (YSM)",
    "country": "Canada",
    "keywords": "YSM YSM Ft Smith Ft Smith Sân bay Fort Smith Fort Smith Airport Canada Canada CA"
  },
  {
    "id": "YXJ",
    "name": "Ft St John (YXJ)",
    "country": "Canada",
    "keywords": "YXJ YXJ Ft St John Ft St John Sân bay Fort St. John Fort St. John Airport Canada Canada CA"
  },
  {
    "id": "EGI",
    "name": "Ft Walton Beach (EGI)",
    "country": "Hoa kỳ",
    "keywords": "EGI EGI Ft Walton Beach Ft Walton Beach Duke Field Duke Field Hoa kỳ United States US"
  },
  {
    "id": "VPS",
    "name": "Ft Walton Beach (VPS)",
    "country": "Hoa kỳ",
    "keywords": "VPS VPS Ft Walton Beach Ft Walton Beach Sân bay Northwest Florida Regional Northwest Florida Regional Airport / Eglin Air For Hoa kỳ United States US"
  },
  {
    "id": "FWA",
    "name": "Ft Wayne (FWA)",
    "country": "Hoa kỳ",
    "keywords": "FWA FWA Ft Wayne Ft Wayne Sân bay Fort Wayne Fort Wayne International Airport Hoa kỳ United States US"
  },
  {
    "id": "FTW",
    "name": "Ft Worth (FTW)",
    "country": "Hoa kỳ",
    "keywords": "FTW FTW Ft Worth Ft Worth Sân bay Fort Worth Meacham Fort Worth Meacham International Airport Hoa kỳ United States US"
  },
  {
    "id": "FUE",
    "name": "Fuerteventura (FUE)",
    "country": "Tây Ban Nha",
    "keywords": "FUE FUE Fuerteventura Fuerteventura Sân bay El Matorral El Matorral Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "FUJ",
    "name": "Fukue (FUJ)",
    "country": "Nhật bản",
    "keywords": "FUJ FUJ Fukue Fukue Sân bay Fukue Fukue Airport Nhật bản Japan JP"
  },
  {
    "id": "FUK",
    "name": "Fukuoka (FUK)",
    "country": "Nhật bản",
    "keywords": "FUK FUK Fukuoka Fukuoka Sân bay Fukuoka Fukuoka Airport Nhật bản Japan JP"
  },
  {
    "id": "FKS",
    "name": "Fukushima (FKS)",
    "country": "Nhật bản",
    "keywords": "FKS FKS Fukushima Fukushima Sân bay Fukushima Fukushima Airport Nhật bản Japan JP"
  },
  {
    "id": "FUN",
    "name": "Funafuti Atol (FUN)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "FUN FUN Funafuti Atol Funafuti Atol Sân bay Funafuti Funafuti International Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "FYJ",
    "name": "Fuyuan (FYJ)",
    "country": "Trung Quốc",
    "keywords": "FYJ FYJ Fuyuan Fuyuan Sân bay Fuyuan Fuyuan Airport Trung Quốc China CN"
  },
  {
    "id": "GBE",
    "name": "Gaborone (GBE)",
    "country": "Botswana",
    "keywords": "GBE GBE Gaborone Gaborone Sân bay Sir Seretse Khama Sir Seretse Khama International Airport Botswana Botswana BW"
  },
  {
    "id": "GNV",
    "name": "Gainesville (GNV)",
    "country": "Hoa kỳ",
    "keywords": "GNV GNV Gainesville Gainesville Sân bay Gainesville Regional Gainesville Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "GPS",
    "name": "Galapagos Is (GPS)",
    "country": "Ecuador",
    "keywords": "GPS GPS Galapagos Is Galapagos Is Sân bay Seymour Seymour Airport Ecuador Ecuador EC"
  },
  {
    "id": "GAL",
    "name": "Galena (GAL)",
    "country": "Hoa kỳ",
    "keywords": "GAL GAL Galena Galena Sân bay Edward G. Pitka Sr. Edward G. Pitka Sr. Airport Hoa kỳ United States US"
  },
  {
    "id": "GMR",
    "name": "Gambier Is (GMR)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "GMR GMR Gambier Is Gambier Is Sân bay Totegegie Totegegie Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "YQX",
    "name": "Gander (YQX)",
    "country": "Canada",
    "keywords": "YQX YQX Gander Gander Sân bay Gander Gander International Airport / CFB Gander Canada Canada CA"
  },
  {
    "id": "GXH",
    "name": "Gannan Xiahe (GXH)",
    "country": "Trung Quốc",
    "keywords": "GXH GXH Gannan Xiahe Gannan Xiahe Sân bay Gannan Xiahe Gannan Xiahe Airport Trung Quốc China CN"
  },
  {
    "id": "GCK",
    "name": "Garden City (GCK)",
    "country": "Hoa kỳ",
    "keywords": "GCK GCK Garden City Garden City Sân bay Garden City Regional Garden City Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "GOU",
    "name": "Garoua (GOU)",
    "country": "Cộng hòa Cameroon",
    "keywords": "GOU GOU Garoua Garoua Sân bay Garoua Garoua International Airport Cộng hòa Cameroon United Republic Of Cameroon CM"
  },
  {
    "id": "GYY",
    "name": "Gary (GYY)",
    "country": "Hoa kỳ",
    "keywords": "GYY GYY Gary Gary Sân bay Gary/Chicago Gary/Chicago International Airport Hoa kỳ United States US"
  },
  {
    "id": "YGP",
    "name": "Gaspe (YGP)",
    "country": "Canada",
    "keywords": "YGP YGP Gaspe Gaspe Sân bay Michel-Pouliot Gaspé Michel-Pouliot Gaspé Airport Canada Canada CA"
  },
  {
    "id": "ELQ",
    "name": "Gassim (ELQ)",
    "country": "Ả rập xê út",
    "keywords": "ELQ ELQ Gassim Gassim Sân bay Gassim Regional Gassim Regional Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "YND",
    "name": "Gatineau Hull (YND)",
    "country": "Canada",
    "keywords": "YND YND Gatineau Hull Gatineau Hull Sân bay Gatineau-Ottawa Executive Gatineau-Ottawa Executive Airport Canada Canada CA"
  },
  {
    "id": "GVX",
    "name": "Gavle (GVX)",
    "country": "Thụy điển",
    "keywords": "GVX GVX Gavle Gavle Sân bay Gävle-Sandviken Gävle-Sandviken Airport Thụy điển Sweden SE"
  },
  {
    "id": "GAU",
    "name": "Gawahati (GAU)",
    "country": "Ấn độ",
    "keywords": "GAU GAU Gawahati Gawahati Sân bay Lokpriya Gopinath Bordoloi Lokpriya Gopinath Bordoloi International Airport Ấn độ India IN"
  },
  {
    "id": "GAY",
    "name": "Gaya (GAY)",
    "country": "Ấn độ",
    "keywords": "GAY GAY Gaya Gaya Sân bay Gaya Gaya Airport Ấn độ India IN"
  },
  {
    "id": "GZT",
    "name": "Gaziantep (GZT)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "GZT GZT Gaziantep Gaziantep Sân bay Oguzeli Oğuzeli Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "GDN",
    "name": "Gdansk (GDN)",
    "country": "Ba Lan",
    "keywords": "GDN GDN Gdansk Gdansk Sân bay Gdansk Lech Walesa Gdansk Lech Walesa Airport Ba Lan Poland PL"
  },
  {
    "id": "GES",
    "name": "General Santos (GES)",
    "country": "Philippines",
    "keywords": "GES GES General Santos General Santos Sân bay General Santos General Santos International Airport Philippines Philippines PH"
  },
  {
    "id": "GVA",
    "name": "Geneva (GVA)",
    "country": "Thụy sỹ",
    "keywords": "GVA GVA Geneva Geneva Sân bay Cointrin Cointrin International Airport Thụy sỹ Switzerland CH"
  },
  {
    "id": "GOA",
    "name": "Genoa (GOA)",
    "country": "Ý",
    "keywords": "GOA GOA Genoa Genoa Sân bay Cristoforo Colombo Cristoforo Colombo Airport Ý Italy IT"
  },
  {
    "id": "GRJ",
    "name": "George (GRJ)",
    "country": "Nam Phi",
    "keywords": "GRJ GRJ George George Sân bay George George Airport Nam Phi South Africa ZA"
  },
  {
    "id": "GGT",
    "name": "George Town (GGT)",
    "country": "Bahamas",
    "keywords": "GGT GGT George Town George Town Sân bay Exuma Exuma International Airport Bahamas Bahamas BS"
  },
  {
    "id": "GEO",
    "name": "Georgetown (GEO)",
    "country": "Guyana",
    "keywords": "GEO GEO Georgetown Georgetown Sân bay Cheddi Jagan Cheddi Jagan International Airport Guyana Guyana GY"
  },
  {
    "id": "GET",
    "name": "Geraldton (GET)",
    "country": "Úc",
    "keywords": "GET GET Geraldton Geraldton Sân bay Geraldton Geraldton Airport Úc Australia AU"
  },
  {
    "id": "GRO",
    "name": "Gerona (GRO)",
    "country": "Tây Ban Nha",
    "keywords": "GRO GRO Gerona Gerona Sân bay Girona-Costa Brava Girona-Costa Brava Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "ZGS",
    "name": "Gethsemanie (ZGS)",
    "country": "Canada",
    "keywords": "ZGS ZGS Gethsemanie Gethsemanie Sân bay Gethsemani Gethsemani Airport Canada Canada CA"
  },
  {
    "id": "GHA",
    "name": "Ghardaia (GHA)",
    "country": "An giê ri",
    "keywords": "GHA GHA Ghardaia Ghardaia Sân bay Noumérat – Moufdi Zakaria Noumérat – Moufdi Zakaria Airport An giê ri Algeria DZ"
  },
  {
    "id": "JGN",
    "name": "Gia Dụ Quan (JGN)",
    "country": "Trung Quốc",
    "keywords": "JGN JGN Gia Dụ Quan Jiayuguan Sân bay Jiayuguan Jiayuguan Airport Trung Quốc China CN"
  },
  {
    "id": "JMU",
    "name": "Giai Mộc Tư (JMU)",
    "country": "Trung Quốc",
    "keywords": "JMU JMU Giai Mộc Tư JIAMUSI Sân bay Jiamusi JIAMUSI Trung Quốc China CN"
  },
  {
    "id": "GIB",
    "name": "Gibraltar (GIB)",
    "country": "Gibraltar",
    "keywords": "GIB GIB Gibraltar Gibraltar Sân bay Gibraltar Gibraltar Airport Gibraltar Gibraltar GI"
  },
  {
    "id": "GIL",
    "name": "Gilgit (GIL)",
    "country": "Pakistan",
    "keywords": "GIL GIL Gilgit Gilgit Sân bay Gilgit Gilgit Airport Pakistan Pakistan PK"
  },
  {
    "id": "YGX",
    "name": "Gillam (YGX)",
    "country": "Canada",
    "keywords": "YGX YGX Gillam Gillam Sân bay Gillam Gillam Airport Canada Canada CA"
  },
  {
    "id": "GCC",
    "name": "Gillette (GCC)",
    "country": "Hoa kỳ",
    "keywords": "GCC GCC Gillette Gillette Sân bay Gillette-Campbell County Gillette-Campbell County Airport Hoa kỳ United States US"
  },
  {
    "id": "GIS",
    "name": "Gisborne (GIS)",
    "country": "Niu di lân",
    "keywords": "GIS GIS Gisborne Gisborne Sân bay Gisborne Gisborne Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "GIZ",
    "name": "Gizan (GIZ)",
    "country": "Ả rập xê út",
    "keywords": "GIZ GIZ Gizan Gizan Sân bay Prince Abdullah Bin Abdulaziz Prince Abdullah Bin Abdulaziz Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "GZO",
    "name": "Gizo (GZO)",
    "country": "Niu di lân",
    "keywords": "GZO GZO Gizo Gizo Sân bay Nusatupe Nusatupe Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "YHK",
    "name": "Gjoa Haven (YHK)",
    "country": "Canada",
    "keywords": "YHK YHK Gjoa Haven Gjoa Haven Sân bay Gjoa Haven Gjoa Haven Airport Canada Canada CA"
  },
  {
    "id": "GST",
    "name": "Glacier Bay (GST)",
    "country": "Hoa kỳ",
    "keywords": "GST GST Glacier Bay Glacier Bay Sân bay Gustavus Gustavus Airport Hoa kỳ United States US"
  },
  {
    "id": "GLT",
    "name": "Gladstone (GLT)",
    "country": "Úc",
    "keywords": "GLT GLT Gladstone Gladstone Sân bay Gladstone Gladstone Airport Úc Australia AU"
  },
  {
    "id": "GGW",
    "name": "Glasgow (GGW)",
    "country": "Malta",
    "keywords": "GGW GGW Glasgow Glasgow Sân bay Glasgow Glasgow Airport Malta Malta MT"
  },
  {
    "id": "GLA",
    "name": "Glasgow (GLA)",
    "country": "Anh quốc",
    "keywords": "GLA GLA Glasgow Glasgow Sân bay quốc tế Glasgow Glasgow Intl Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "PIK",
    "name": "Glasgow (PIK)",
    "country": "Anh quốc",
    "keywords": "PIK GLA Glasgow Glasgow Sân bay Glasgow Prestwick Glasgow Prestwick International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "GLO",
    "name": "Gloucester (GLO)",
    "country": "Anh quốc",
    "keywords": "GLO GLO Gloucester Gloucester Sân bay Gloucester Gloucester Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "GOI",
    "name": "Goa In (GOI)",
    "country": "Ấn độ",
    "keywords": "GOI GOI Goa In Goa In Sân bay Goa Goa International Airport Ấn độ India IN"
  },
  {
    "id": "GYN",
    "name": "Goiania (GYN)",
    "country": "Bra xin",
    "keywords": "GYN GYN Goiania Goiania Sân bay Santa Genoveva Santa Genoveva Airport Bra xin Brazil BR"
  },
  {
    "id": "OOL",
    "name": "Gold Coast (OOL)",
    "country": "Úc",
    "keywords": "OOL OOL Gold Coast Gold Coast Sân bay Gold Coast Gold Coast Airport Úc Australia AU"
  },
  {
    "id": "GOQ",
    "name": "Golmud (GOQ)",
    "country": "Trung Quốc",
    "keywords": "GOQ GOQ Golmud Golmud Sân bay Golmud Golmud Airport Trung Quốc China CN"
  },
  {
    "id": "GME",
    "name": "Gomel (GME)",
    "country": "Bê la rút",
    "keywords": "GME GME Gomel Gomel Sân bay Gomel Gomel Airport Bê la rút Belarus BY"
  },
  {
    "id": "YYR",
    "name": "Goose Bay (YYR)",
    "country": "Canada",
    "keywords": "YYR YYR Goose Bay Goose Bay Sân bay CFB Goose Bay / Goose Bay CFB Goose Bay / Goose Bay Airport Canada Canada CA"
  },
  {
    "id": "GKA",
    "name": "Goroka (GKA)",
    "country": "Papua niu ghi nê",
    "keywords": "GKA GKA Goroka Goroka Sân bay Goroka Goroka Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "GTO",
    "name": "Gorontalo (GTO)",
    "country": "Indonesia",
    "keywords": "GTO GTO Gorontalo Gorontalo Sân bay Jalaluddin Jalaluddin Airport Indonesia Indonesia ID"
  },
  {
    "id": "GOT",
    "name": "Gothenburg (GOT)",
    "country": "Thụy điển",
    "keywords": "GOT GOT Gothenburg Gothenburg Sân bay Gothenburg-Landvetter Göteborg Landvetter Airport Thụy điển Sweden SE"
  },
  {
    "id": "GSE",
    "name": "Gothenburg (GSE)",
    "country": "Thụy điển",
    "keywords": "GSE GOT Gothenburg Gothenburg Sân bay Gothenburg City Gothenburg City Airport Thụy điển Sweden SE"
  },
  {
    "id": "GOV",
    "name": "Gove (GOV)",
    "country": "Úc",
    "keywords": "GOV GOV Gove Gove Sân bay Nhulunbuy Nhulunbuy Airport Úc Australia AU"
  },
  {
    "id": "GHB",
    "name": "Governor S Harbour (GHB)",
    "country": "Bahamas",
    "keywords": "GHB GHB Governor S Harbour Governor S Harbour Sân bay Governor's Harbour Governor's Harbour Airport Bahamas Bahamas BS"
  },
  {
    "id": "GRW",
    "name": "Graciosa Island (GRW)",
    "country": "Bồ đào nha",
    "keywords": "GRW GRW Graciosa Island Graciosa Island Sân bay Graciosa Island Graciosa Island Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "GFN",
    "name": "Grafton (GFN)",
    "country": "Úc",
    "keywords": "GFN GFN Grafton Grafton Sân bay Grafton Grafton Airport Úc Australia AU"
  },
  {
    "id": "LPA",
    "name": "Gran Canaria (LPA)",
    "country": "Tây Ban Nha",
    "keywords": "LPA LPA Gran Canaria Gran Canaria Sân bay Gran Canaria Gran Canaria International Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "GRX",
    "name": "Granada (GRX)",
    "country": "Tây Ban Nha",
    "keywords": "GRX GRX Granada Granada Sân bay Granada Jaén Granada Jaén Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "GCN",
    "name": "Grand Canyon (GCN)",
    "country": "Hoa kỳ",
    "keywords": "GCN GCN Grand Canyon Grand Canyon Sân bay Grand Canyon National Park Grand Canyon National Park Airport Hoa kỳ United States US"
  },
  {
    "id": "GCM",
    "name": "Grand Cayman Island (GCM)",
    "country": "Cayman Islands",
    "keywords": "GCM GCM Grand Cayman Island Grand Cayman Island Sân bay Owen Roberts Owen Roberts International Airport Cayman Islands Cayman Islands KY"
  },
  {
    "id": "GFK",
    "name": "Grand Forks (GFK)",
    "country": "Hoa kỳ",
    "keywords": "GFK GFK Grand Forks Grand Forks Sân bay Grand Forks Grand Forks International Airport Hoa kỳ United States US"
  },
  {
    "id": "GRI",
    "name": "Grand Island (GRI)",
    "country": "Hoa kỳ",
    "keywords": "GRI GRI Grand Island Grand Island Sân bay Central Nebraska Regional Central Nebraska Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "GJT",
    "name": "Grand Junction (GJT)",
    "country": "Hoa kỳ",
    "keywords": "GJT GJT Grand Junction Grand Junction Sân bay Grand Junction Regional Grand Junction Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "GRR",
    "name": "Grand Rapids (GRR)",
    "country": "Hoa kỳ",
    "keywords": "GRR GRR Grand Rapids Grand Rapids Sân bay Gerald R. Ford Gerald R. Ford International Airport Hoa kỳ United States US"
  },
  {
    "id": "YQU",
    "name": "Grande Prairie (YQU)",
    "country": "Canada",
    "keywords": "YQU YQU Grande Prairie Grande Prairie Sân bay Grande Prairie Grande Prairie Airport Canada Canada CA"
  },
  {
    "id": "GRZ",
    "name": "Graz (GRZ)",
    "country": "Áo",
    "keywords": "GRZ GRZ Graz Graz Sân bay Graz Graz Airport Áo Austria AT"
  },
  {
    "id": "GBD",
    "name": "Great Bend (GBD)",
    "country": "Hoa kỳ",
    "keywords": "GBD GBD Great Bend Great Bend Sân bay Great Bend Municipal Great Bend Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "GTF",
    "name": "Great Falls (GTF)",
    "country": "Hoa kỳ",
    "keywords": "GTF GTF Great Falls Great Falls Sân bay Great Falls Great Falls International Airport Hoa kỳ United States US"
  },
  {
    "id": "GRB",
    "name": "Green Bay (GRB)",
    "country": "Hoa kỳ",
    "keywords": "GRB GRB Green Bay Green Bay Sân bay Austin Straubel Austin Straubel International Airport Hoa kỳ United States US"
  },
  {
    "id": "LWB",
    "name": "Greenbrier (LWB)",
    "country": "Hoa kỳ",
    "keywords": "LWB LWB Greenbrier Greenbrier Sân bay Greenbrier Valley Greenbrier Valley Airport Hoa kỳ United States US"
  },
  {
    "id": "GSO",
    "name": "Greensboro (GSO)",
    "country": "Hoa kỳ",
    "keywords": "GSO GSO Greensboro Greensboro Sân bay Piedmont Triad Piedmont Triad International Airport Hoa kỳ United States US"
  },
  {
    "id": "GLH",
    "name": "Greenville (GLH)",
    "country": "Montserrat",
    "keywords": "GLH GLH Greenville Greenville Sân bay Mid-Delta Regional Mid-Delta Regional Airport Montserrat Montserrat MS"
  },
  {
    "id": "GMU",
    "name": "Greenville (GMU)",
    "country": "Seychelles Islands",
    "keywords": "GMU GSP Greenville Greenville Sân bay Greenville Downtown Greenville Downtown Airport Seychelles Islands Seychelles Islands SC"
  },
  {
    "id": "PGV",
    "name": "Greenville (PGV)",
    "country": "New Caledonia",
    "keywords": "PGV PGV Greenville Greenville Sân bay Pitt-Greenville Pitt-Greenville Airport New Caledonia New Caledonia NC"
  },
  {
    "id": "SPA",
    "name": "Greenville (SPA)",
    "country": "Seychelles Islands",
    "keywords": "SPA GSP Greenville Greenville Sân bay Spartanburg Downtown Memorial Spartanburg Downtown Memorial Airport Seychelles Islands Seychelles Islands SC"
  },
  {
    "id": "GND",
    "name": "Grenada (GND)",
    "country": "Grenada",
    "keywords": "GND GND Grenada Grenada Sân bay Maurice Bishop Maurice Bishop International Airport Grenada Grenada GD"
  },
  {
    "id": "GNB",
    "name": "Grenoble (GNB)",
    "country": "Pháp",
    "keywords": "GNB GNB Grenoble Grenoble Sân bay Grenoble-Isère Grenoble-Isère Airport Pháp France FR"
  },
  {
    "id": "GFF",
    "name": "Griffith (GFF)",
    "country": "Úc",
    "keywords": "GFF GFF Griffith Griffith Sân bay Griffith Griffith Airport Úc Australia AU"
  },
  {
    "id": "GRQ",
    "name": "Groningen (GRQ)",
    "country": "Hà Lan",
    "keywords": "GRQ GRQ Groningen Groningen Sân bay Groningen Groningen Airport Eelde Hà Lan Netherlands NL"
  },
  {
    "id": "GTE",
    "name": "Groote Eylandt (GTE)",
    "country": "Úc",
    "keywords": "GTE GTE Groote Eylandt Groote Eylandt Sân bay Groote Eylandt Groote Eylandt Airport Úc Australia AU"
  },
  {
    "id": "GDL",
    "name": "Guadalajara (GDL)",
    "country": "Mê hi cô",
    "keywords": "GDL GDL Guadalajara Guadalajara Sân bay Don Miguel Hidalgo y Costilla Don Miguel Hidalgo y Costilla International Airpor Mê hi cô MEXICO MX"
  },
  {
    "id": "GUM",
    "name": "Guam (GUM)",
    "country": "Guam",
    "keywords": "GUM GUM Guam Guam Sân bay Antonio B. Won Pat Antonio B. Won Pat International Airport Guam Guam GU"
  },
  {
    "id": "UAM",
    "name": "Guam (UAM)",
    "country": "Guam",
    "keywords": "UAM UAM Guam Guam Andersen Air Force Base Andersen Air Force Base Guam Guam GU"
  },
  {
    "id": "GUA",
    "name": "Guatemala City (GUA)",
    "country": "Guatemala",
    "keywords": "GUA GUA Guatemala City Guatemala City Sân bay La Aurora La Aurora International Airport Guatemala Guatemala GT"
  },
  {
    "id": "GYE",
    "name": "Guayaquil (GYE)",
    "country": "Ecuador",
    "keywords": "GYE GYE Guayaquil Guayaquil Sân bay José Joaquín de Olmedo José Joaquín de Olmedo International Airport Ecuador Ecuador EC"
  },
  {
    "id": "GCI",
    "name": "Guernsey (GCI)",
    "country": "Anh quốc",
    "keywords": "GCI GCI Guernsey Guernsey Sân bay Guernsey Guernsey Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "GPT",
    "name": "Gulfport (GPT)",
    "country": "Hoa kỳ",
    "keywords": "GPT GPT Gulfport Gulfport Sân bay Gulfport-Biloxi Gulfport-Biloxi International Airport Hoa kỳ United States US"
  },
  {
    "id": "GUC",
    "name": "Gunnison (GUC)",
    "country": "Hoa kỳ",
    "keywords": "GUC GUC Gunnison Gunnison Sân bay Gunnison-Crested Butte Regional Gunnison-Crested Butte Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "XMN",
    "name": "Hạ Môn (XMN)",
    "country": "Trung Quốc",
    "keywords": "XMN XMN Hạ Môn Xiamen Sân bay Xiamen Gaoqi Xiamen Gaoqi International Airport Trung Quốc China CN"
  },
  {
    "id": "HAN",
    "name": "Hà Nội (HAN)",
    "country": "Việt Nam",
    "keywords": "HAN HAN Hà Nội Hanoi Sân bay Nội Bài Noi Bai International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "HAC",
    "name": "Hachijo Jima (HAC)",
    "country": "Nhật bản",
    "keywords": "HAC HAC Hachijo Jima Hachijo Jima Sân bay Hachijojima Hachijojima Airport Nhật bản Japan JP"
  },
  {
    "id": "HGR",
    "name": "Hagerstown (HGR)",
    "country": "Hoa kỳ",
    "keywords": "HGR HGR Hagerstown Hagerstown Sân bay Hagerstown Regional Hagerstown Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "HAK",
    "name": "Hải Khẩu (HAK)",
    "country": "Trung Quốc",
    "keywords": "HAK HAK Hải Khẩu Haikou Sân bay Haikou Meilan Haikou Meilan International Airport Trung Quốc China CN"
  },
  {
    "id": "HPH",
    "name": "Hải Phòng (HPH)",
    "country": "Việt Nam",
    "keywords": "HPH HPH Hải Phòng Haiphong Sân bay Cát Bi Cat Bi International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "HAS",
    "name": "Hail (HAS)",
    "country": "Ả rập xê út",
    "keywords": "HAS HAS Hail Hail Sân bay Ha'il Regional Ha'il Regional Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "HLD",
    "name": "Hailar (HLD)",
    "country": "Trung Quốc",
    "keywords": "HLD HLD Hailar Hailar Sân bay Hailar Dongshan Hailar Dongshan Airport Trung Quốc China CN"
  },
  {
    "id": "HNS",
    "name": "Haines (HNS)",
    "country": "Hoa kỳ",
    "keywords": "HNS HNS Haines Haines Sân bay Haines Haines Airport Hoa kỳ United States US"
  },
  {
    "id": "HKD",
    "name": "Hakodate (HKD)",
    "country": "Nhật bản",
    "keywords": "HKD HKD Hakodate Hakodate Sân bay Hakodate Hakodate Airport Nhật bản Japan JP"
  },
  {
    "id": "YHZ",
    "name": "Halifax (YHZ)",
    "country": "Canada",
    "keywords": "YHZ YHZ Halifax Halifax Sân bay Halifax Stanfield Halifax Stanfield International Airport Canada Canada CA"
  },
  {
    "id": "YUX",
    "name": "Hall Beach (YUX)",
    "country": "Canada",
    "keywords": "YUX YUX Hall Beach Hall Beach Sân bay Hall Beach Hall Beach Airport Canada Canada CA"
  },
  {
    "id": "HAD",
    "name": "Halmstad (HAD)",
    "country": "Thụy điển",
    "keywords": "HAD HAD Halmstad Halmstad Sân bay Halmstad Halmstad Airport Thụy điển Sweden SE"
  },
  {
    "id": "HMI",
    "name": "Hami (HMI)",
    "country": "Trung Quốc",
    "keywords": "HMI HMI Hami Hami Sân bay Hami Hami Airport Trung Quốc China CN"
  },
  {
    "id": "HLZ",
    "name": "Hamilton (HLZ)",
    "country": "Niu di lân",
    "keywords": "HLZ HLZ Hamilton Hamilton Sân bay Hamilton Hamilton International Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "YHM",
    "name": "Hamilton (YHM)",
    "country": "Canada",
    "keywords": "YHM YHM Hamilton Hamilton Sân bay John C. Munro Hamilton John C. Munro Hamilton International Airport Canada Canada CA"
  },
  {
    "id": "HTI",
    "name": "Hamilton Island (HTI)",
    "country": "Úc",
    "keywords": "HTI HTI Hamilton Island Hamilton Island Sân bay Great Barrier Reef Great Barrier Reef Airport Úc Australia AU"
  },
  {
    "id": "HFT",
    "name": "Hammerfest (HFT)",
    "country": "Na Uy",
    "keywords": "HFT HFT Hammerfest Hammerfest Sân bay Hammerfest Hammerfest Airport Na Uy Norway NO"
  },
  {
    "id": "HDG",
    "name": "Hàn Đạm (HDG)",
    "country": "Trung Quốc",
    "keywords": "HDG HDG Hàn Đạm Handan Sân bay Handan Handan Airport Trung Quốc China CN"
  },
  {
    "id": "HZG",
    "name": "Hán Trọng (HZG)",
    "country": "Trung Quốc",
    "keywords": "HZG HZG Hán Trọng Hanzhong Sân bay Hanzhong Hanzhong Airport Trung Quốc China CN"
  },
  {
    "id": "HNM",
    "name": "Hana (HNM)",
    "country": "Hoa kỳ",
    "keywords": "HNM HNM Hana Hana Sân bay Hana Hana Airport Hoa kỳ United States US"
  },
  {
    "id": "HGH",
    "name": "Hàng Châu (HGH)",
    "country": "Trung Quốc",
    "keywords": "HGH HGH Hàng Châu Hangzhou Sân bay HANGZHOU Hangzhou Xiaoshan International Airport Trung Quốc China CN"
  },
  {
    "id": "HAJ",
    "name": "Hanover (HAJ)",
    "country": "Đức",
    "keywords": "HAJ HAJ Hanover Hanover Sân bay Hannover Hannover Airport Đức Germany DE"
  },
  {
    "id": "HOI",
    "name": "Hao Island (HOI)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "HOI HOI Hao Island Hao Island Sân bay Hao Hao Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "HRE",
    "name": "Harare (HRE)",
    "country": "Zim ba bu ê",
    "keywords": "HRE HRE Harare Harare Sân bay Harare Harare International Airport Zim ba bu ê Zimbabwe ZW"
  },
  {
    "id": "HGA",
    "name": "Hargeisa (HGA)",
    "country": "Somalia",
    "keywords": "HGA HGA Hargeisa Hargeisa Sân bay Egal Egal International Airport Somalia Somalia SO"
  },
  {
    "id": "HRL",
    "name": "Harlingen (HRL)",
    "country": "Hoa kỳ",
    "keywords": "HRL HRL Harlingen Harlingen Sân bay Valley Valley International Airport Hoa kỳ United States US"
  },
  {
    "id": "MDT",
    "name": "Harrisburg (MDT)",
    "country": "Panama",
    "keywords": "MDT HAR Harrisburg Harrisburg Sân bay Harrisburg Harrisburg International Airport Panama Panama PA"
  },
  {
    "id": "HRO",
    "name": "Harrison (HRO)",
    "country": "Hoa kỳ",
    "keywords": "HRO HRO Harrison Harrison Sân bay Boone County Boone County Airport Hoa kỳ United States US"
  },
  {
    "id": "EVE",
    "name": "Harstad Narvik (EVE)",
    "country": "Na Uy",
    "keywords": "EVE EVE Harstad Narvik Harstad Narvik Sân bay Harstad/Narvik Harstad/Narvik Airport, Evenes Na Uy Norway NO"
  },
  {
    "id": "BDL",
    "name": "Hartford (BDL)",
    "country": "Hoa kỳ",
    "keywords": "BDL HFD Hartford Hartford Sân bay Bradley Bradley International Airport Hoa kỳ United States US"
  },
  {
    "id": "HME",
    "name": "Hassi Messaoud (HME)",
    "country": "An giê ri",
    "keywords": "HME HME Hassi Messaoud Hassi Messaoud Sân bay Oued Irara Oued Irara Airport An giê ri Algeria DZ"
  },
  {
    "id": "HDY",
    "name": "Hat Yai (HDY)",
    "country": "Thái Lan",
    "keywords": "HDY HDY Hat Yai Hat Yai Sân bay Hat Yai Hat Yai International Airport Thái Lan Thailand TH"
  },
  {
    "id": "HTY",
    "name": "Hatay (HTY)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "HTY HTY Hatay Hatay Sân bay Hatay Hatay Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "HAU",
    "name": "Haugesund (HAU)",
    "country": "Na Uy",
    "keywords": "HAU HAU Haugesund Haugesund Sân bay Haugesund Haugesund Airport, Karmøy Na Uy Norway NO"
  },
  {
    "id": "HAV",
    "name": "Havana (HAV)",
    "country": "Cuba",
    "keywords": "HAV HAV Havana Havana Sân bay José Martí José Martí International Airport Cuba Cuba CU"
  },
  {
    "id": "HVR",
    "name": "Havre (HVR)",
    "country": "Hoa kỳ",
    "keywords": "HVR HVR Havre Havre Sân bay Havre City-County Havre City-County Airport Hoa kỳ United States US"
  },
  {
    "id": "YHY",
    "name": "Hay River (YHY)",
    "country": "Canada",
    "keywords": "YHY YHY Hay River Hay River Sân bay Hay River/Merlyn Carter Hay River/Merlyn Carter Airport Canada Canada CA"
  },
  {
    "id": "HDN",
    "name": "Hayden (HDN)",
    "country": "Hoa kỳ",
    "keywords": "HDN HDN Hayden Hayden Sân bay Yampa Valley Yampa Valley Airport Hoa kỳ United States US"
  },
  {
    "id": "HIS",
    "name": "Hayman Island (HIS)",
    "country": "Úc",
    "keywords": "HIS HIS Hayman Island Hayman Island Hayman Island Resort Seaplace Base Hayman Island Resort Seaplace Base Úc Australia AU"
  },
  {
    "id": "HYS",
    "name": "Hays (HYS)",
    "country": "Hoa kỳ",
    "keywords": "HYS HYS Hays Hays Sân bay Hays Regional Hays Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "HEK",
    "name": "Hắc Hà (HEK)",
    "country": "Trung Quốc",
    "keywords": "HEK HEK Hắc Hà HEIHE Sân bay Heihe Heihe Airport Trung Quốc China CN"
  },
  {
    "id": "HAM",
    "name": "Hăm-buốc (HAM)",
    "country": "Đức",
    "keywords": "HAM HAM Hăm-buốc Hamburg Sân bay Hamburg Hamburg Airport Đức Germany DE"
  },
  {
    "id": "HNY",
    "name": "Hằng Dương (HNY)",
    "country": "Trung Quốc",
    "keywords": "HNY HNY Hằng Dương Hengyang Sân bay Hengyang Hengyang Airport Trung Quốc China CN"
  },
  {
    "id": "HEH",
    "name": "Heho (HEH)",
    "country": "Myanmar",
    "keywords": "HEH HEH Heho Heho Sân bay Heho Heho Airport Myanmar Myanmar MM"
  },
  {
    "id": "HLN",
    "name": "Helena (HLN)",
    "country": "Malta",
    "keywords": "HLN HLN Helena Helena Sân bay Helena Regional Helena Regional Airport Malta Malta MT"
  },
  {
    "id": "HEL",
    "name": "Helsinki (HEL)",
    "country": "Phần lan",
    "keywords": "HEL HEL Helsinki Helsinki Sân bay Helsinki Helsinki Airport Phần lan Finland FI"
  },
  {
    "id": "HER",
    "name": "Heraklion (HER)",
    "country": "Hy lạp",
    "keywords": "HER HER Heraklion Heraklion Sân bay Heraklion Heraklion International Airport, \"Nikos Kazantzaki Hy lạp Greece GR"
  },
  {
    "id": "HDF",
    "name": "Heringsdorf (HDF)",
    "country": "Đức",
    "keywords": "HDF HDF Heringsdorf Heringsdorf Sân bay Heringsdorf Heringsdorf Airport Đức Germany DE"
  },
  {
    "id": "HMO",
    "name": "Hermosillo (HMO)",
    "country": "Mê hi cô",
    "keywords": "HMO HMO Hermosillo Hermosillo Sân bay General Ignacio Pesqueira Garcia General Ignacio Pesqueira Garcia International Air Mê hi cô MEXICO MX"
  },
  {
    "id": "HVB",
    "name": "Hervey Bay (HVB)",
    "country": "Úc",
    "keywords": "HVB HVB Hervey Bay Hervey Bay Sân bay Hervey Bay Hervey Bay Airport Úc Australia AU"
  },
  {
    "id": "HIB",
    "name": "Hibbing (HIB)",
    "country": "Hoa kỳ",
    "keywords": "HIB HIB Hibbing Hibbing Sân bay Chisholm-Hibbing Chisholm-Hibbing Airport Hoa kỳ United States US"
  },
  {
    "id": "YOJ",
    "name": "High Level (YOJ)",
    "country": "Canada",
    "keywords": "YOJ YOJ High Level High Level Sân bay High Level High Level Airport Canada Canada CA"
  },
  {
    "id": "ITO",
    "name": "Hilo (ITO)",
    "country": "Hoa kỳ",
    "keywords": "ITO ITO Hilo Hilo Sân bay Hilo Hilo International Airport Hoa kỳ United States US"
  },
  {
    "id": "HHH",
    "name": "Hilton Head (HHH)",
    "country": "Hoa kỳ",
    "keywords": "HHH HHH Hilton Head Hilton Head Sân bay Hilton Head Hilton Head Airport Hoa kỳ United States US"
  },
  {
    "id": "HIJ",
    "name": "Hiroshima (HIJ)",
    "country": "Nhật bản",
    "keywords": "HIJ HIJ Hiroshima Hiroshima Sân bay Hiroshima Hiroshima Airport Nhật bản Japan JP"
  },
  {
    "id": "HJJ",
    "name": "Hoài Hóa (HJJ)",
    "country": "Trung Quốc",
    "keywords": "HJJ HJJ Hoài Hóa Zhi Jiang Sân bay Zhi Jiang Zhi Jiang Airport Trung Quốc China CN"
  },
  {
    "id": "TXN",
    "name": "Hoàng Sơn (TXN)",
    "country": "Trung Quốc",
    "keywords": "TXN TXN Hoàng Sơn HUANGSHAN Sân bay Huangshan Tunxi Huangshan Tunxi Airport Trung Quốc China CN"
  },
  {
    "id": "HYN",
    "name": "Hoàng Yên (HYN)",
    "country": "Trung Quốc",
    "keywords": "HYN HYN Hoàng Yên Huangyan Sân bay Taizhou Luqiao Taizhou Luqiao Airport Trung Quốc China CN"
  },
  {
    "id": "HBA",
    "name": "Hobart (HBA)",
    "country": "Úc",
    "keywords": "HBA HBA Hobart Hobart Sân bay Hobart Hobart Airport Úc Australia AU"
  },
  {
    "id": "HOB",
    "name": "Hobbs (HOB)",
    "country": "Hoa kỳ",
    "keywords": "HOB HOB Hobbs Hobbs Sân bay Lea County Regional Lea County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "HOD",
    "name": "Hodeidah (HOD)",
    "country": "Yemen",
    "keywords": "HOD HOD Hodeidah Hodeidah Sân bay Hodeida Hodeida International Airport Yemen Yemen YE"
  },
  {
    "id": "HDS",
    "name": "Hoedspruit (HDS)",
    "country": "Nam Phi",
    "keywords": "HDS HDS Hoedspruit Hoedspruit Sân bay Hoedspruit Hoedspruit Airport Nam Phi South Africa ZA"
  },
  {
    "id": "HKK",
    "name": "Hokitika (HKK)",
    "country": "Niu di lân",
    "keywords": "HKK HKK Hokitika Hokitika Sân bay Hokitika Hokitika Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "HOG",
    "name": "Holguin (HOG)",
    "country": "Cuba",
    "keywords": "HOG HOG Holguin Holguin Sân bay Frank País Frank País Airport Cuba Cuba CU"
  },
  {
    "id": "HOM",
    "name": "Homer (HOM)",
    "country": "Hoa kỳ",
    "keywords": "HOM HOM Homer Homer Sân bay Homer Homer Airport Hoa kỳ United States US"
  },
  {
    "id": "HIR",
    "name": "Honiara (HIR)",
    "country": "Solomon Islands",
    "keywords": "HIR HIR Honiara Honiara Sân bay Honiara Honiara International Airport Solomon Islands Solomon Islands SB"
  },
  {
    "id": "HVG",
    "name": "Honningsvag (HVG)",
    "country": "Na Uy",
    "keywords": "HVG HVG Honningsvag Honningsvag Sân bay Honningsvåg Honningsvåg Airport, Valan Na Uy Norway NO"
  },
  {
    "id": "HIK",
    "name": "Honolulu (HIK)",
    "country": "Hoa kỳ",
    "keywords": "HIK HNL Honolulu Honolulu Hickam Air Force Base Hickam Air Force Base Hoa kỳ United States US"
  },
  {
    "id": "HNL",
    "name": "Honolulu (HNL)",
    "country": "Hoa kỳ",
    "keywords": "HNL HNL Honolulu Honolulu Sân bay quốc tế Honolulu Honolulu International Airport Hoa kỳ United States US"
  },
  {
    "id": "MKK",
    "name": "Hoolehua (MKK)",
    "country": "Hoa kỳ",
    "keywords": "MKK MKK Hoolehua Hoolehua Sân bay Molokai Molokai Airport Hoa kỳ United States US"
  },
  {
    "id": "HNH",
    "name": "Hoonah (HNH)",
    "country": "Hoa kỳ",
    "keywords": "HNH HNH Hoonah Hoonah Sân bay Hoonah Hoonah Airport Hoa kỳ United States US"
  },
  {
    "id": "YHO",
    "name": "Hopedale (YHO)",
    "country": "Canada",
    "keywords": "YHO YHO Hopedale Hopedale Sân bay Hopedale Hopedale Airport Canada Canada CA"
  },
  {
    "id": "HID",
    "name": "Horn Island (HID)",
    "country": "Úc",
    "keywords": "HID HID Horn Island Horn Island Sân bay Horn Island Horn Island Airport Úc Australia AU"
  },
  {
    "id": "HOR",
    "name": "Horta (HOR)",
    "country": "Bồ đào nha",
    "keywords": "HOR HOR Horta Horta Sân bay Horta Horta Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "HKN",
    "name": "Hoskins (HKN)",
    "country": "Papua niu ghi nê",
    "keywords": "HKN HKN Hoskins Hoskins Sân bay Kimbe Kimbe Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "HOT",
    "name": "Hot Springs (HOT)",
    "country": "Ác Hen Tina",
    "keywords": "HOT HOT Hot Springs Hot Springs Sân bay Memorial Field Memorial Field Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "HTN",
    "name": "Hotan (HTN)",
    "country": "Trung Quốc",
    "keywords": "HTN HTN Hotan Hotan Sân bay Hotan Hotan Airport Trung Quốc China CN"
  },
  {
    "id": "CMX",
    "name": "Houghton (CMX)",
    "country": "Hoa kỳ",
    "keywords": "CMX CMX Houghton Houghton Sân bay Houghton County Memorial Houghton County Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "AAP",
    "name": "Houston (AAP)",
    "country": "Hoa kỳ",
    "keywords": "AAP AAP Houston Houston Sân bay Andrau Airpark Andrau Airpark Hoa kỳ United States US"
  },
  {
    "id": "DWH",
    "name": "Houston (DWH)",
    "country": "Hoa kỳ",
    "keywords": "DWH HOU Houston Houston Sân bay David Wayne Hooks Memorial David Wayne Hooks Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "EFD",
    "name": "Houston (EFD)",
    "country": "Hoa kỳ",
    "keywords": "EFD HOU Houston Houston Ellington Field Ellington Field Hoa kỳ United States US"
  },
  {
    "id": "HOU",
    "name": "Houston (HOU)",
    "country": "Hoa kỳ",
    "keywords": "HOU AAP Houston Houston Sân bay Houston Houston Hobby Airport Hoa kỳ United States US"
  },
  {
    "id": "IAH",
    "name": "Houston (IAH)",
    "country": "Hoa kỳ",
    "keywords": "IAH HOU Houston Houston Sân bay George Bush Intercontinental George Bush Intercontinental Airport Hoa kỳ United States US"
  },
  {
    "id": "IWS",
    "name": "Houston (IWS)",
    "country": "Hoa kỳ",
    "keywords": "IWS HOU Houston Houston Sân bay West Houston West Houston Airport Hoa kỳ United States US"
  },
  {
    "id": "SGN",
    "name": "Hồ Chí Minh (SGN)",
    "country": "Việt Nam",
    "keywords": "SGN SGN Hồ Chí Minh Ho Chi Minh City Sân bay Tân Sơn Nhất Tan Son Nhat International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "HET",
    "name": "Hô Hòa Hạo Đặc (HET)",
    "country": "Trung Quốc",
    "keywords": "HET HET Hô Hòa Hạo Đặc Hohhot Sân bay Hohhot Baita Hohhot Baita International Airport Trung Quốc China CN"
  },
  {
    "id": "HUZ",
    "name": "Hồi Châu (HUZ)",
    "country": "Trung Quốc",
    "keywords": "HUZ HUZ Hồi Châu Huizhou Sân bay Huizhou Huizhou Airport Trung Quốc China CN"
  },
  {
    "id": "HKG",
    "name": "Hồng Kông (HKG)",
    "country": "Hồng kông",
    "keywords": "HKG HKG Hồng Kông Hongkong Sân bay Hong Kong Hong Kong International Airport Hồng kông Hong Kong HK"
  },
  {
    "id": "HFE",
    "name": "Hợp Phì (HFE)",
    "country": "Trung Quốc",
    "keywords": "HFE HFE Hợp Phì Hefei Sân bay Hefei Luogang Hefei Luogang International Airport Trung Quốc China CN"
  },
  {
    "id": "HHQ",
    "name": "Hua Hin (HHQ)",
    "country": "Thái Lan",
    "keywords": "HHQ HHQ Hua Hin Hua Hin Sân bay Hua Hin Hua Hin Airport Thái Lan Thailand TH"
  },
  {
    "id": "HUH",
    "name": "Huahine (HUH)",
    "country": "Niu di lân",
    "keywords": "HUH HUH Huahine Huahine Sân bay Fare Fare Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "HIA",
    "name": "Huai An (HIA)",
    "country": "Trung Quốc",
    "keywords": "HIA HIA Huai An Huai An Sân bay Huai An Huai An Airport Trung Quốc China CN"
  },
  {
    "id": "HUN",
    "name": "Hualien (HUN)",
    "country": "Đài Loan",
    "keywords": "HUN HUN Hualien Hualien Sân bay Hualien Hualien Airport Đài Loan Taiwan TW"
  },
  {
    "id": "HUV",
    "name": "Hudiksvall (HUV)",
    "country": "Thụy điển",
    "keywords": "HUV HUV Hudiksvall Hudiksvall Sân bay Hudiksvall Hudiksvall Airport Thụy điển Sweden SE"
  },
  {
    "id": "HUI",
    "name": "Huế (HUI)",
    "country": "Việt Nam",
    "keywords": "HUI HUI Huế Hue Sân bay Phú Bài Phu Bai International Airport Việt Nam Vietnam VN"
  },
  {
    "id": "HGD",
    "name": "Hughenden (HGD)",
    "country": "Úc",
    "keywords": "HGD HGD Hughenden Hughenden Sân bay Hughenden Hughenden Airport Úc Australia AU"
  },
  {
    "id": "HUS",
    "name": "Hughes (HUS)",
    "country": "Hoa kỳ",
    "keywords": "HUS HUS Hughes Hughes Sân bay Hughes Hughes Airport Hoa kỳ United States US"
  },
  {
    "id": "HUC",
    "name": "Humacao (HUC)",
    "country": "Puerto Rico",
    "keywords": "HUC HUC Humacao Humacao Sân bay Humacao Humacao Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "HUY",
    "name": "Humberside (HUY)",
    "country": "Anh quốc",
    "keywords": "HUY HUY Humberside Humberside Sân bay Humberside Humberside Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "HSV",
    "name": "Huntsville (HSV)",
    "country": "Hoa kỳ",
    "keywords": "HSV HSV Huntsville Huntsville Sân bay Huntsville Huntsville International Airport Hoa kỳ United States US"
  },
  {
    "id": "HRG",
    "name": "Hurghada (HRG)",
    "country": "Ai Cập",
    "keywords": "HRG HRG Hurghada Hurghada Sân bay Hurghada Hurghada International Airport Ai Cập Egypt EG"
  },
  {
    "id": "HON",
    "name": "Huron (HON)",
    "country": "Hoa kỳ",
    "keywords": "HON HON Huron Huron Sân bay Huron Regional Huron Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "HSL",
    "name": "Huslia (HSL)",
    "country": "Hoa kỳ",
    "keywords": "HSL HSL Huslia Huslia Sân bay Huslia Huslia Airport Hoa kỳ United States US"
  },
  {
    "id": "ACX",
    "name": "Hưng Nghi (ACX)",
    "country": "Trung Quốc",
    "keywords": "ACX ACX Hưng Nghi Xingyi Sân bay Xingyi Xingyi Airport Trung Quốc China CN"
  },
  {
    "id": "HYA",
    "name": "Hyannis (HYA)",
    "country": "Hoa kỳ",
    "keywords": "HYA HYA Hyannis Hyannis Sân bay Barnstable Municipal Barnstable Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "HYD",
    "name": "Hyderabad (HYD)",
    "country": "Ấn độ",
    "keywords": "HYD HYD Hyderabad Hyderabad Sân bay Rajiv Gandhi Rajiv Gandhi International Airport Ấn độ India IN"
  },
  {
    "id": "IBZ",
    "name": "Ibiza (IBZ)",
    "country": "Tây Ban Nha",
    "keywords": "IBZ IBZ Ibiza Ibiza Sân bay Ibiza Ibiza Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "IDA",
    "name": "Idaho Falls (IDA)",
    "country": "Hoa kỳ",
    "keywords": "IDA IDA Idaho Falls Idaho Falls Sân bay Idaho Falls Regional Idaho Falls Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YGT",
    "name": "Igloolik (YGT)",
    "country": "Canada",
    "keywords": "YGT YGT Igloolik Igloolik Sân bay Igloolik Igloolik Airport Canada Canada CA"
  },
  {
    "id": "IGU",
    "name": "Iguassu Falls (IGU)",
    "country": "Bra xin",
    "keywords": "IGU IGU Iguassu Falls Iguazu Falls Sân bay Foz do Iguaçu Foz do Iguaçu International Airport Bra xin Brazil BR"
  },
  {
    "id": "IGR",
    "name": "Iguazu (IGR)",
    "country": "Ác Hen Tina",
    "keywords": "IGR IGR Iguazu Iguazu Sân bay Cataratas del Iguazú Cataratas del Iguazú International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "JIK",
    "name": "Ikaria Island (JIK)",
    "country": "Hy lạp",
    "keywords": "JIK JIK Ikaria Island Ikaria Island Sân bay Ikaria Ikaria Airport Hy lạp Greece GR"
  },
  {
    "id": "YGR",
    "name": "Iles De Madeleine (YGR)",
    "country": "Canada",
    "keywords": "YGR YGR Iles De Madeleine Iles De Madeleine Sân bay Îles-de-la-Madeleine Îles-de-la-Madeleine Airport Canada Canada CA"
  },
  {
    "id": "IOS",
    "name": "Ilheus (IOS)",
    "country": "Bra xin",
    "keywords": "IOS IOS Ilheus Ilheus Sân bay Ilhéus Jorge Amado Ilhéus Jorge Amado Airport Bra xin Brazil BR"
  },
  {
    "id": "ILO",
    "name": "Iloilo (ILO)",
    "country": "Philippines",
    "keywords": "ILO ILO Iloilo Iloilo Sân bay Iloilo Iloilo International Airport Philippines Philippines PH"
  },
  {
    "id": "JAV",
    "name": "Ilulissat (JAV)",
    "country": "Greenland",
    "keywords": "JAV JAV Ilulissat Ilulissat Sân bay Ilulissat Ilulissat Airport Greenland Greenland GL"
  },
  {
    "id": "IMP",
    "name": "Imperatriz (IMP)",
    "country": "Bra xin",
    "keywords": "IMP IMP Imperatriz Imperatriz Sân bay Imperatriz Imperatriz Airport Bra xin Brazil BR"
  },
  {
    "id": "IND",
    "name": "Indianapolis (IND)",
    "country": "Hoa kỳ",
    "keywords": "IND IND Indianapolis Indianapolis Sân bay Indianapolis Indianapolis International Airport Hoa kỳ United States US"
  },
  {
    "id": "IDR",
    "name": "Indore (IDR)",
    "country": "Ấn độ",
    "keywords": "IDR IDR Indore Indore Sân bay Devi Ahilyabai Holkar Devi Ahilyabai Holkar International Airport Ấn độ India IN"
  },
  {
    "id": "INN",
    "name": "Innsbruck (INN)",
    "country": "Áo",
    "keywords": "INN INN Innsbruck Innsbruck Sân bay Innsbruck Innsbruck Airport Áo Austria AT"
  },
  {
    "id": "INL",
    "name": "International Falls (INL)",
    "country": "Hoa kỳ",
    "keywords": "INL INL International Falls International Falls Sân bay Falls Falls International Airport Hoa kỳ United States US"
  },
  {
    "id": "YPH",
    "name": "Inukjuak (YPH)",
    "country": "Canada",
    "keywords": "YPH YPH Inukjuak Inukjuak Sân bay Inukjuak Inukjuak Airport Canada Canada CA"
  },
  {
    "id": "YEV",
    "name": "Inuvik (YEV)",
    "country": "Canada",
    "keywords": "YEV YEV Inuvik Inuvik Inuvik Inuvik Canada Canada CA"
  },
  {
    "id": "IVC",
    "name": "Invercargill (IVC)",
    "country": "Niu di lân",
    "keywords": "IVC IVC Invercargill Invercargill Sân bay Invercargill Invercargill Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "INV",
    "name": "Inverness (INV)",
    "country": "Anh quốc",
    "keywords": "INV INV Inverness Inverness Sân bay Inverness Inverness Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "IYK",
    "name": "Inyokern (IYK)",
    "country": "Hoa kỳ",
    "keywords": "IYK IYK Inyokern Inyokern Sân bay Inyokern Inyokern Airport Hoa kỳ United States US"
  },
  {
    "id": "IOA",
    "name": "Ioannina (IOA)",
    "country": "Hy lạp",
    "keywords": "IOA IOA Ioannina Ioannina Sân bay Ioannina National Ioannina National Airport Hy lạp Greece GR"
  },
  {
    "id": "IPH",
    "name": "Ipoh (IPH)",
    "country": "Malaysia",
    "keywords": "IPH IPH Ipoh Ipoh Sân bay Sultan Azlan Shah Sultan Azlan Shah Airport Malaysia Malaysia MY"
  },
  {
    "id": "YFB",
    "name": "Iqaluit (YFB)",
    "country": "Canada",
    "keywords": "YFB YFB Iqaluit Iqaluit Sân bay Iqaluit Iqaluit Airport Canada Canada CA"
  },
  {
    "id": "IQQ",
    "name": "Iqueque (IQQ)",
    "country": "Chi lê",
    "keywords": "IQQ IQQ Iqueque Iquique Sân bay Diego Aracena Diego Aracena International Airport Chi lê Chile CL"
  },
  {
    "id": "IQT",
    "name": "Iquitos (IQT)",
    "country": "Peru",
    "keywords": "IQT IQT Iquitos Iquitos Sân bay Crnl. FAP Francisco Secada Vignetta Crnl. FAP Francisco Secada Vignetta International Peru Peru PE"
  },
  {
    "id": "IKT",
    "name": "Irkutsk (IKT)",
    "country": "Nga",
    "keywords": "IKT IKT Irkutsk Irkutsk Sân bay Irkutsk Irkutsk International Airport Nga Russia RU"
  },
  {
    "id": "IMT",
    "name": "Iron Mountain (IMT)",
    "country": "Hoa kỳ",
    "keywords": "IMT IMT Iron Mountain Iron Mountain Sân bay Ford Ford Airport Hoa kỳ United States US"
  },
  {
    "id": "IWD",
    "name": "Ironwood (IWD)",
    "country": "Hoa kỳ",
    "keywords": "IWD IWD Ironwood Ironwood Sân bay Gogebic-Iron County Gogebic-Iron County Airport Hoa kỳ United States US"
  },
  {
    "id": "IFN",
    "name": "Isfahan (IFN)",
    "country": "Iran",
    "keywords": "IFN IFN Isfahan Isfahan Sân bay Esfahan Shahid Beheshti Esfahan Shahid Beheshti International Airport Iran Iran IR"
  },
  {
    "id": "ISG",
    "name": "Ishigaki (ISG)",
    "country": "Nhật bản",
    "keywords": "ISG ISG Ishigaki Ishigaki Sân bay Ishigaki Ishigaki Airport Nhật bản Japan JP"
  },
  {
    "id": "ISB",
    "name": "Islamabad (ISB)",
    "country": "Pakistan",
    "keywords": "ISB ISB Islamabad Islamabad Sân bay Benazir Bhutto Benazir Bhutto International Airport Pakistan Pakistan PK"
  },
  {
    "id": "ILY",
    "name": "Islay (ILY)",
    "country": "Anh quốc",
    "keywords": "ILY ILY Islay Islay Sân bay Port Ellen Port Ellen Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "IOM",
    "name": "Isle Of Man (IOM)",
    "country": "Anh quốc",
    "keywords": "IOM IOM Isle Of Man Isle Of Man Sân bay Isle of Man Isle of Man Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "ISP",
    "name": "Islip (ISP)",
    "country": "Hoa kỳ",
    "keywords": "ISP ISP Islip Islip Sân bay Long Island MacArthur Long Island MacArthur Airport Hoa kỳ United States US"
  },
  {
    "id": "IST",
    "name": "Istanbul (IST)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "IST IST Istanbul Istanbul Sân bay Istanbul Atatürk Istanbul Atatürk Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ITH",
    "name": "Ithaca (ITH)",
    "country": "Hoa kỳ",
    "keywords": "ITH ITH Ithaca Ithaca Sân bay Ithaca Tompkins Regional Ithaca Tompkins Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "IVL",
    "name": "Ivalo (IVL)",
    "country": "Phần lan",
    "keywords": "IVL IVL Ivalo Ivalo Sân bay Ivalo Ivalo Airport Phần lan Finland FI"
  },
  {
    "id": "IFO",
    "name": "Ivano Frankovsk (IFO)",
    "country": "U-krai-na",
    "keywords": "IFO IFO Ivano Frankovsk Ivano Frankovsk Sân bay Ivano-Frankivsk Ivano-Frankivsk Airport U-krai-na Ukraine UA"
  },
  {
    "id": "YIK",
    "name": "Ivujivik (YIK)",
    "country": "Canada",
    "keywords": "YIK YIK Ivujivik Ivujivik Sân bay Ivujivik Ivujivik Airport Canada Canada CA"
  },
  {
    "id": "IWJ",
    "name": "Iwami (IWJ)",
    "country": "Nhật bản",
    "keywords": "IWJ IWJ Iwami Iwami Sân bay Iwami Iwami Airport Nhật bản Japan JP"
  },
  {
    "id": "ADB",
    "name": "Izmir (ADB)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ADB IZM Izmir Izmir Sân bay Adnan Menderes Adnan Menderes International Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "IGL",
    "name": "Izmir (IGL)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "IGL IZM Izmir Izmir Sân bay Çigli Çigli Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "IZO",
    "name": "Izumo (IZO)",
    "country": "Nhật bản",
    "keywords": "IZO IZO Izumo Izumo Sân bay Izumo Izumo Airport Nhật bản Japan JP"
  },
  {
    "id": "HKS",
    "name": "Jackson (HKS)",
    "country": "Montserrat",
    "keywords": "HKS JAN Jackson Jackson Hawkins Field Hawkins Field Montserrat Montserrat MS"
  },
  {
    "id": "JAC",
    "name": "Jackson (JAC)",
    "country": "Hoa kỳ",
    "keywords": "JAC JAC Jackson Jackson Sân bay Jackson Hole Jackson Hole Airport Hoa kỳ United States US"
  },
  {
    "id": "JXN",
    "name": "Jackson (JXN)",
    "country": "Hoa kỳ",
    "keywords": "JXN JXN Jackson Jackson Sân bay Jackson County Jackson County Airport Hoa kỳ United States US"
  },
  {
    "id": "MKL",
    "name": "Jackson (MKL)",
    "country": "Tuy ni di",
    "keywords": "MKL MKL Jackson Jackson Sân bay McKellar-Sipes Regional McKellar-Sipes Regional Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "CRG",
    "name": "Jacksonville (CRG)",
    "country": "Hoa kỳ",
    "keywords": "CRG JAX Jacksonville Jacksonville Sân bay Craig Municipal Craig Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "NIP",
    "name": "Jacksonville (NIP)",
    "country": "Hoa kỳ",
    "keywords": "NIP JAX Jacksonville Jacksonville NAS Jacksonville NAS Jacksonville Hoa kỳ United States US"
  },
  {
    "id": "NZC",
    "name": "Jacksonville (NZC)",
    "country": "Hoa kỳ",
    "keywords": "NZC JAX Jacksonville Jacksonville Sân bay Maria Reiche Neuman Maria Reiche Neuman Airport Hoa kỳ United States US"
  },
  {
    "id": "OAJ",
    "name": "Jacksonville (OAJ)",
    "country": "New Caledonia",
    "keywords": "OAJ OAJ Jacksonville Jacksonville Sân bay Albert J. Ellis Albert J. Ellis Airport New Caledonia New Caledonia NC"
  },
  {
    "id": "JAI",
    "name": "Jaipur (JAI)",
    "country": "Ấn độ",
    "keywords": "JAI JAI Jaipur Jaipur Sân bay Jaipur Jaipur Airport Ấn độ India IN"
  },
  {
    "id": "CGK",
    "name": "Jakarta (CGK)",
    "country": "Indonesia",
    "keywords": "CGK JKT Jakarta Jakarta Sân bay Soekarno–Hatta Soekarno–Hatta International Airport Indonesia Indonesia ID"
  },
  {
    "id": "HLP",
    "name": "Jakarta (HLP)",
    "country": "Indonesia",
    "keywords": "HLP JKT Jakarta Jakarta Sân bay Halim Perdanakusuma Halim Perdanakusuma International Airport Indonesia Indonesia ID"
  },
  {
    "id": "JKT",
    "name": "Jakarta (JKT)",
    "country": "Indonesia",
    "keywords": "JKT JKT Jakarta Jakarta Tất cả các sân bay All Airports Indonesia Indonesia ID"
  },
  {
    "id": "DJB",
    "name": "Jambi (DJB)",
    "country": "Indonesia",
    "keywords": "DJB DJB Jambi Jambi Sân bay Sultan Thaha Sultan Thaha Airport Indonesia Indonesia ID"
  },
  {
    "id": "JHW",
    "name": "Jamestown (JHW)",
    "country": "Hoa kỳ",
    "keywords": "JHW JHW Jamestown Jamestown Sân bay Chautauqua County-Jamestown Chautauqua County-Jamestown Airport Hoa kỳ United States US"
  },
  {
    "id": "JMS",
    "name": "Jamestown (JMS)",
    "country": "Hoa kỳ",
    "keywords": "JMS JMS Jamestown Jamestown Sân bay Jamestown Regional Jamestown Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "IXJ",
    "name": "Jammu (IXJ)",
    "country": "Ấn độ",
    "keywords": "IXJ IXJ Jammu Jammu Sân bay Jammu Jammu Airport Ấn độ India IN"
  },
  {
    "id": "JGA",
    "name": "Jamnagar (JGA)",
    "country": "Ấn độ",
    "keywords": "JGA JGA Jamnagar Jamnagar Sân bay Jamnagar Jamnagar Airport Ấn độ India IN"
  },
  {
    "id": "JED",
    "name": "Jeddah (JED)",
    "country": "Ả rập xê út",
    "keywords": "JED JED Jeddah Jeddah Sân bay King Abdulaziz King Abdulaziz International Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "JEF",
    "name": "Jefferson City (JEF)",
    "country": "Hoa kỳ",
    "keywords": "JEF JEF Jefferson City Jefferson City Sân bay Jefferson City Memorial Jefferson City Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "CJU",
    "name": "Jeju City (CJU)",
    "country": "Hàn quốc",
    "keywords": "CJU CJU Jeju City Jeju City Sân bay Jeju Jeju International Airport Hàn quốc Korea KR"
  },
  {
    "id": "JSP",
    "name": "Jeju City (JSP)",
    "country": "Triều tiên",
    "keywords": "JSP JSP Jeju City Jeju City Sogwipo Heliport Sogwipo Heliport Triều tiên Korea (North) KP"
  },
  {
    "id": "XRY",
    "name": "Jerez De La Frontera (XRY)",
    "country": "Tây Ban Nha",
    "keywords": "XRY XRY Jerez De La Frontera Jerez De La Frontera Sân bay Jerez Jerez Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "JJD",
    "name": "Jericoacoara (JJD)",
    "country": "Bra xin",
    "keywords": "JJD JJD Jericoacoara Jericoacoara Jericoacoara Jericoacoara Bra xin Brazil BR"
  },
  {
    "id": "JER",
    "name": "Jersey (JER)",
    "country": "Anh quốc",
    "keywords": "JER JER Jersey Jersey Sân bay Jersey Jersey Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "JGD",
    "name": "Jia ge da qi (JGD)",
    "country": "Trung Quốc",
    "keywords": "JGD JGD Jia ge da qi Jia ge da qi Sân bay Jia ge da qi Jia ge da qi Airport Trung Quốc China CN"
  },
  {
    "id": "JIM",
    "name": "Jimma (JIM)",
    "country": "E ti ô pia",
    "keywords": "JIM JIM Jimma Jimma Sân bay Aba Segud Aba Segud Airport E ti ô pia Ethiopia ET"
  },
  {
    "id": "JIU",
    "name": "Jiujiang (JIU)",
    "country": "Trung Quốc",
    "keywords": "JIU JIU Jiujiang Jiujiang Sân bay Jiujiang Lushan Jiujiang Lushan Airport Trung Quốc China CN"
  },
  {
    "id": "JXA",
    "name": "Jixi Shi (JXA)",
    "country": "Trung Quốc",
    "keywords": "JXA JXA Jixi Shi Jixi Shi Sân bay Jixi Shi Jixi Shi Airport Trung Quốc China CN"
  },
  {
    "id": "JPA",
    "name": "Joao Pessoa (JPA)",
    "country": "Bra xin",
    "keywords": "JPA JPA Joao Pessoa Joao Pessoa Sân bay Presidente Castro Pinto Presidente Castro Pinto International Airport Bra xin Brazil BR"
  },
  {
    "id": "JDH",
    "name": "Jodhpur (JDH)",
    "country": "Ấn độ",
    "keywords": "JDH JDH Jodhpur Jodhpur Sân bay Jodhpur Jodhpur Airport Ấn độ India IN"
  },
  {
    "id": "JOE",
    "name": "Joensuu (JOE)",
    "country": "Phần lan",
    "keywords": "JOE JOE Joensuu Joensuu Sân bay Joensuu Joensuu Airport Phần lan Finland FI"
  },
  {
    "id": "GCJ",
    "name": "Johannesburg (GCJ)",
    "country": "Nam Phi",
    "keywords": "GCJ JNB Johannesburg Johannesburg Sân bay Grand Central Grand Central Airport Nam Phi South Africa ZA"
  },
  {
    "id": "JNB",
    "name": "Johannesburg (JNB)",
    "country": "Nam Phi",
    "keywords": "JNB JNB Johannesburg Johannesburg Sân bay OR Tambo OR Tambo International Airport Nam Phi South Africa ZA"
  },
  {
    "id": "QRA",
    "name": "Johannesburg (QRA)",
    "country": "Nam Phi",
    "keywords": "QRA JNB Johannesburg Johannesburg Sân bay Rand/Germiston Rand/Germiston Airport Nam Phi South Africa ZA"
  },
  {
    "id": "JST",
    "name": "Johnstown (JST)",
    "country": "Hoa kỳ",
    "keywords": "JST JST Johnstown Johnstown Sân bay John Murtha Johnstown-Cambria County John Murtha Johnstown-Cambria County Airport Hoa kỳ United States US"
  },
  {
    "id": "JHB",
    "name": "Johor Bahru (JHB)",
    "country": "Malaysia",
    "keywords": "JHB JHB Johor Bahru Johor Bahru Sân bay Sultan Ismail Sultan Ismail International Airport Malaysia Malaysia MY"
  },
  {
    "id": "JOI",
    "name": "Joinville (JOI)",
    "country": "Bra xin",
    "keywords": "JOI JOI Joinville Joinville Sân bay Joinville Joinville Airport Bra xin Brazil BR"
  },
  {
    "id": "JBR",
    "name": "Jonesboro (JBR)",
    "country": "Hoa kỳ",
    "keywords": "JBR JBR Jonesboro Jonesboro Sân bay Jonesboro Municipal Jonesboro Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "JKG",
    "name": "Jonkoping (JKG)",
    "country": "Thụy điển",
    "keywords": "JKG JKG Jonkoping Jonkoping Sân bay Jönköping Jönköping Airport Thụy điển Sweden SE"
  },
  {
    "id": "JLN",
    "name": "Joplin (JLN)",
    "country": "Hoa kỳ",
    "keywords": "JLN JLN Joplin Joplin Sân bay Joplin Regional Joplin Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "JDO",
    "name": "Juazeiro Do Norte (JDO)",
    "country": "Bra xin",
    "keywords": "JDO JDO Juazeiro Do Norte Juazeiro Do Norte Sân bay Cariri Regional Cariri Regional Airport Bra xin Brazil BR"
  },
  {
    "id": "JUB",
    "name": "Juba (JUB)",
    "country": "Sudan",
    "keywords": "JUB JUB Juba Juba Sân bay Juba Juba Airport Sudan Sudan SD"
  },
  {
    "id": "JUJ",
    "name": "Jujuy (JUJ)",
    "country": "Ác Hen Tina",
    "keywords": "JUJ JUJ Jujuy Jujuy Sân bay Gobernador Horacio Guzmán Gobernador Horacio Guzmán International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "JCK",
    "name": "Julia Creek (JCK)",
    "country": "Úc",
    "keywords": "JCK JCK Julia Creek Julia Creek Sân bay Julia Creek Julia Creek Airport Úc Australia AU"
  },
  {
    "id": "JUL",
    "name": "Juliaca (JUL)",
    "country": "Peru",
    "keywords": "JUL JUL Juliaca Juliaca Sân bay Inca Manco Capac Inca Manco Capac Airport Peru Peru PE"
  },
  {
    "id": "JNU",
    "name": "Juneau (JNU)",
    "country": "Hoa kỳ",
    "keywords": "JNU JNU Juneau Juneau Sân bay Juneau Juneau International Airport Hoa kỳ United States US"
  },
  {
    "id": "JYV",
    "name": "Jyvaskyla (JYV)",
    "country": "Phần lan",
    "keywords": "JYV JYV Jyvaskyla Jyvaskyla Sân bay Jyväskylä Jyväskylä Airport Phần lan Finland FI"
  },
  {
    "id": "KBL",
    "name": "Kabul (KBL)",
    "country": "Afghanistan",
    "keywords": "KBL KBL Kabul Kabul Sân bay Kabul Kabul International Airport Afghanistan Afghanistan AF"
  },
  {
    "id": "KOJ",
    "name": "Kagoshima (KOJ)",
    "country": "Nhật bản",
    "keywords": "KOJ KOJ Kagoshima Kagoshima Sân bay Kagoshima Kagoshima Airport Nhật bản Japan JP"
  },
  {
    "id": "KAT",
    "name": "Kaitaia (KAT)",
    "country": "Niu di lân",
    "keywords": "KAT KAT Kaitaia Kaitaia Sân bay Kaitaia Kaitaia Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "KAJ",
    "name": "Kajaani (KAJ)",
    "country": "Phần lan",
    "keywords": "KAJ KAJ Kajaani Kajaani Sân bay Kajaani Kajaani Airport Phần lan Finland FI"
  },
  {
    "id": "KAE",
    "name": "Kake (KAE)",
    "country": "Hoa kỳ",
    "keywords": "KAE KAE Kake Kake Sân bay Kake Kake Airport Hoa kỳ United States US"
  },
  {
    "id": "KLX",
    "name": "Kalamata (KLX)",
    "country": "Hy lạp",
    "keywords": "KLX KLX Kalamata Kalamata Sân bay Kalamata Kalamata Airport Hy lạp Greece GR"
  },
  {
    "id": "AZO",
    "name": "Kalamazoo (AZO)",
    "country": "Hoa kỳ",
    "keywords": "AZO AZO Kalamazoo Kalamazoo Sân bay Kalamazoo/Battle Creek Kalamazoo/Battle Creek International Airport Hoa kỳ United States US"
  },
  {
    "id": "KGI",
    "name": "Kalgoorlie (KGI)",
    "country": "Úc",
    "keywords": "KGI KGI Kalgoorlie Kalgoorlie Sân bay Kalgoorlie-Boulder Kalgoorlie-Boulder Airport Úc Australia AU"
  },
  {
    "id": "KLO",
    "name": "Kalibo (KLO)",
    "country": "Philippines",
    "keywords": "KLO KLO Kalibo Kalibo Sân bay Kalibo Kalibo Airport Philippines Philippines PH"
  },
  {
    "id": "KGD",
    "name": "Kaliningrad (KGD)",
    "country": "Nga",
    "keywords": "KGD KGD Kaliningrad Kaliningrad Sân bay Khrabrovo Khrabrovo Airport Nga Russia RU"
  },
  {
    "id": "FCA",
    "name": "Kalispell (FCA)",
    "country": "Hoa kỳ",
    "keywords": "FCA FCA Kalispell Kalispell Sân bay Glacier Park Glacier Park International Airport Hoa kỳ United States US"
  },
  {
    "id": "KLR",
    "name": "Kalmar (KLR)",
    "country": "Thụy điển",
    "keywords": "KLR KLR Kalmar Kalmar Sân bay Kalmar Kalmar Airport Thụy điển Sweden SE"
  },
  {
    "id": "KLG",
    "name": "Kalskag (KLG)",
    "country": "Hoa kỳ",
    "keywords": "KLG KLG Kalskag Kalskag Sân bay Kalskag Kalskag Airport Hoa kỳ United States US"
  },
  {
    "id": "YKA",
    "name": "Kamloops (YKA)",
    "country": "Canada",
    "keywords": "YKA YKA Kamloops Kamloops Sân bay Kamloops Kamloops Airport Canada Canada CA"
  },
  {
    "id": "MUE",
    "name": "Kamuela (MUE)",
    "country": "Hoa kỳ",
    "keywords": "MUE MUE Kamuela Kamuela Sân bay Waimea-Kohala Waimea-Kohala Airport Hoa kỳ United States US"
  },
  {
    "id": "KGT",
    "name": "Kangding (KGT)",
    "country": "Trung Quốc",
    "keywords": "KGT KGT Kangding Kangding Sân bay Kangding Kangding Airport Trung Quốc China CN"
  },
  {
    "id": "SFJ",
    "name": "Kangerlussuaq (SFJ)",
    "country": "Greenland",
    "keywords": "SFJ SFJ Kangerlussuaq Kangerlussuaq Sân bay Kangerlussuaq Kangerlussuaq Airport Greenland Greenland GL"
  },
  {
    "id": "XGR",
    "name": "Kangiqsualujjuaq (XGR)",
    "country": "Canada",
    "keywords": "XGR XGR Kangiqsualujjuaq Kangiqsualujjuaq Kangiqsualujjuaq Kangiqsualujjuaq Canada Canada CA"
  },
  {
    "id": "YWB",
    "name": "Kangiqsujuaq (YWB)",
    "country": "Canada",
    "keywords": "YWB YWB Kangiqsujuaq Kangiqsujuaq Sân bay Wakeham Bay Wakeham Bay Airport Canada Canada CA"
  },
  {
    "id": "YKG",
    "name": "Kangirsuk (YKG)",
    "country": "Canada",
    "keywords": "YKG YKG Kangirsuk Kangirsuk Sân bay Kangirsuk Kangirsuk Airport Canada Canada CA"
  },
  {
    "id": "KAN",
    "name": "Kano (KAN)",
    "country": "Ni giê ria",
    "keywords": "KAN KAN Kano Kano Sân bay Mallam Aminu Kano Mallam Aminu Kano International Airport Ni giê ria Nigeria NG"
  },
  {
    "id": "JCI",
    "name": "Kansas City (JCI)",
    "country": "Hoa kỳ",
    "keywords": "JCI JCI Kansas City Kansas City New Century AirCenter New Century AirCenter Hoa kỳ United States US"
  },
  {
    "id": "MCI",
    "name": "Kansas City (MCI)",
    "country": "Hoa kỳ",
    "keywords": "MCI MKC Kansas City Kansas City Sân bay Kansas City Kansas City International Airport Hoa kỳ United States US"
  },
  {
    "id": "MKC",
    "name": "Kansas City (MKC)",
    "country": "Hoa kỳ",
    "keywords": "MKC MKC Kansas City Kansas City Sân bay Kansas City Downtown Kansas City Downtown Airport Hoa kỳ United States US"
  },
  {
    "id": "OJC",
    "name": "Kansas City (OJC)",
    "country": "Nga",
    "keywords": "OJC KCK Kansas City Kansas City Sân bay Johnson County Executive Johnson County Executive Airport Nga Russia RU"
  },
  {
    "id": "JHM",
    "name": "Kapalua (JHM)",
    "country": "Hoa kỳ",
    "keywords": "JHM JHM Kapalua Kapalua Sân bay Kapalua Kapalua Airport Hoa kỳ United States US"
  },
  {
    "id": "YYU",
    "name": "Kapuskasing (YYU)",
    "country": "Canada",
    "keywords": "YYU YYU Kapuskasing Kapuskasing Sân bay Kapuskasing Kapuskasing Airport Canada Canada CA"
  },
  {
    "id": "KHI",
    "name": "Karachi (KHI)",
    "country": "Pakistan",
    "keywords": "KHI KHI Karachi Karachi Sân bay Jinnah Jinnah International Airport Pakistan Pakistan PK"
  },
  {
    "id": "KGF",
    "name": "Karaganda (KGF)",
    "country": "Kazakstan",
    "keywords": "KGF KGF Karaganda Karaganda Sân bay Sary-Arka Sary-Arka Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "KRY",
    "name": "Karamay (KRY)",
    "country": "Trung Quốc",
    "keywords": "KRY KRY Karamay Karamay Sân bay Karamay Karamay Airport Trung Quốc China CN"
  },
  {
    "id": "KLV",
    "name": "Karlovy Vary (KLV)",
    "country": "Cộng hòa Séc",
    "keywords": "KLV KLV Karlovy Vary Karlovy Vary Sân bay Karlovy Vary Karlovy Vary Airport Cộng hòa Séc Czech Republic CZ"
  },
  {
    "id": "FKB",
    "name": "Karlsruhe Baden Baden (FKB)",
    "country": "Đức",
    "keywords": "FKB FKB Karlsruhe Baden Baden Karlsruhe Baden Baden Baden Airpark Baden Airpark Đức Germany DE"
  },
  {
    "id": "KSD",
    "name": "Karlstad (KSD)",
    "country": "Thụy điển",
    "keywords": "KSD KSD Karlstad Karlstad Sân bay Karlstad Karlstad Airport Thụy điển Sweden SE"
  },
  {
    "id": "AOK",
    "name": "Karpathos (AOK)",
    "country": "Hy lạp",
    "keywords": "AOK AOK Karpathos Karpathos Sân bay Karpathos Karpathos Airport Hy lạp Greece GR"
  },
  {
    "id": "KTA",
    "name": "Karratha (KTA)",
    "country": "Úc",
    "keywords": "KTA KTA Karratha Karratha Sân bay Karratha Karratha Airport Úc Australia AU"
  },
  {
    "id": "KSY",
    "name": "Kars (KSY)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "KSY KSY Kars Kars Sân bay Kars Kars Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "KRP",
    "name": "Karup (KRP)",
    "country": "Ðan Mạch",
    "keywords": "KRP KRP Karup Karup Sân bay Karup Karup Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "BBK",
    "name": "Kasane (BBK)",
    "country": "Botswana",
    "keywords": "BBK BBK Kasane Kasane Sân bay Kasane Kasane Airport Botswana Botswana BW"
  },
  {
    "id": "KHG",
    "name": "Kashi (KHG)",
    "country": "Trung Quốc",
    "keywords": "KHG KHG Kashi Kashi Sân bay Kashi Kashi Airport Trung Quốc China CN"
  },
  {
    "id": "KSF",
    "name": "Kassel (KSF)",
    "country": "Đức",
    "keywords": "KSF KSF Kassel Kassel Sân bay Kassel Calden Kassel Calden Airport Đức Germany DE"
  },
  {
    "id": "KZS",
    "name": "Kastelorizo (KZS)",
    "country": "Hy lạp",
    "keywords": "KZS KZS Kastelorizo Kastelorizo Sân bay Kastelorizo Island Public Kastelorizo Island Public Airport Hy lạp Greece GR"
  },
  {
    "id": "KTM",
    "name": "Kathmandu (KTM)",
    "country": "Nepal",
    "keywords": "KTM KTM Kathmandu Kathmandu Sân bay Tribhuvan Tribhuvan International Airport Nepal Nepal NP"
  },
  {
    "id": "KTW",
    "name": "Katowice (KTW)",
    "country": "Ba Lan",
    "keywords": "KTW KTW Katowice Katowice Sân bay Katowice Katowice Airport Ba Lan Poland PL"
  },
  {
    "id": "KUN",
    "name": "Kaunas (KUN)",
    "country": "Lithuania",
    "keywords": "KUN KUN Kaunas Kaunas Sân bay Kaunas Kaunas International Airport Lithuania Lithuania LT"
  },
  {
    "id": "KVA",
    "name": "Kavalla (KVA)",
    "country": "Hy lạp",
    "keywords": "KVA KVA Kavalla Kavalla Sân bay Kavala Kavala International Airport, \"Megas Alexandros\" Hy lạp Greece GR"
  },
  {
    "id": "KVG",
    "name": "Kavieng (KVG)",
    "country": "Papua niu ghi nê",
    "keywords": "KVG KVG Kavieng Kavieng Sân bay Kavieng Kavieng Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "ASR",
    "name": "Kayseri (ASR)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "ASR ASR Kayseri Kayseri Sân bay Erkilet Erkilet International Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "KZN",
    "name": "Kazan (KZN)",
    "country": "Nga",
    "keywords": "KZN KZN Kazan Kazan Sân bay Kazan Kazan International Airport Nga Russia RU"
  },
  {
    "id": "EAR",
    "name": "Kearney (EAR)",
    "country": "Hoa kỳ",
    "keywords": "EAR EAR Kearney Kearney Sân bay Kearney Regional Kearney Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "EFL",
    "name": "Kefalonia (EFL)",
    "country": "Hy lạp",
    "keywords": "EFL EFL Kefalonia Kefalonia Sân bay Argostolion Argostolion Airport Hy lạp Greece GR"
  },
  {
    "id": "ZKG",
    "name": "Kegaska (ZKG)",
    "country": "Canada",
    "keywords": "ZKG ZKG Kegaska Kegaska Sân bay Kegaska Kegaska Airport Canada Canada CA"
  },
  {
    "id": "YLW",
    "name": "Kelowna (YLW)",
    "country": "Canada",
    "keywords": "YLW YLW Kelowna Kelowna Sân bay Kelowna Kelowna International Airport Canada Canada CA"
  },
  {
    "id": "KEJ",
    "name": "Kemerovo (KEJ)",
    "country": "Nga",
    "keywords": "KEJ KEJ Kemerovo Kemerovo Sân bay Kemerovo Kemerovo Airport Nga Russia RU"
  },
  {
    "id": "KEM",
    "name": "Kemi (KEM)",
    "country": "Phần lan",
    "keywords": "KEM KEM Kemi Kemi Sân bay Kemi-Tornio Kemi-Tornio Airport Phần lan Finland FI"
  },
  {
    "id": "ENA",
    "name": "Kenai (ENA)",
    "country": "Hoa kỳ",
    "keywords": "ENA ENA Kenai Kenai Sân bay Kenai Municipal Kenai Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "YQK",
    "name": "Kenora (YQK)",
    "country": "Canada",
    "keywords": "YQK YQK Kenora Kenora Sân bay Kenora Kenora Airport Canada Canada CA"
  },
  {
    "id": "KKE",
    "name": "Kerikeri (KKE)",
    "country": "Niu di lân",
    "keywords": "KKE KKE Kerikeri Kerikeri Sân bay Bay of Islands Bay of Islands Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "KER",
    "name": "Kerman (KER)",
    "country": "Iran",
    "keywords": "KER KER Kerman Kerman Sân bay Kerman Kerman Airport Iran Iran IR"
  },
  {
    "id": "KSH",
    "name": "Kermanshah (KSH)",
    "country": "Iran",
    "keywords": "KSH KSH Kermanshah Kermanshah Sân bay Shahid Ashrafi Esfahani Shahid Ashrafi Esfahani Airport Iran Iran IR"
  },
  {
    "id": "KIR",
    "name": "Kerry County (KIR)",
    "country": "Cộng hòa Ai len",
    "keywords": "KIR KIR Kerry County Kerry County Sân bay Kerry Kerry Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "KTE",
    "name": "Kerteh (KTE)",
    "country": "Malaysia",
    "keywords": "KTE KTE Kerteh Kerteh Sân bay Kerteh Kerteh Airport Malaysia Malaysia MY"
  },
  {
    "id": "KTN",
    "name": "Ketchikan (KTN)",
    "country": "Hoa kỳ",
    "keywords": "KTN KTN Ketchikan Ketchikan Sân bay Ketchikan Ketchikan International Airport Hoa kỳ United States US"
  },
  {
    "id": "EYW",
    "name": "Key West (EYW)",
    "country": "Hoa kỳ",
    "keywords": "EYW EYW Key West Key West Sân bay Key West Key West International Airport Hoa kỳ United States US"
  },
  {
    "id": "KHV",
    "name": "Khabarovsk (KHV)",
    "country": "Nga",
    "keywords": "KHV KHV Khabarovsk Khabarovsk Sân bay Khabarovsk Novy Khabarovsk Novy Airport Nga Russia RU"
  },
  {
    "id": "HJR",
    "name": "Khajuraho (HJR)",
    "country": "Ấn độ",
    "keywords": "HJR HJR Khajuraho Khajuraho Sân bay Khajuraho Khajuraho Airport Ấn độ India IN"
  },
  {
    "id": "HRK",
    "name": "Kharkov (HRK)",
    "country": "U-krai-na",
    "keywords": "HRK HRK Kharkov Kharkov Sân bay Kharkiv Kharkiv International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "KRT",
    "name": "Khartoum (KRT)",
    "country": "Sudan",
    "keywords": "KRT KRT Khartoum Khartoum Sân bay Khartoum Khartoum International Airport Sudan Sudan SD"
  },
  {
    "id": "KKC",
    "name": "Khon Kaen (KKC)",
    "country": "Thái Lan",
    "keywords": "KKC KKC Khon Kaen Khon Kaen Sân bay Khon Kaen Khon Kaen Airport Thái Lan Thailand TH"
  },
  {
    "id": "KHD",
    "name": "Khorramabad (KHD)",
    "country": "Iran",
    "keywords": "KHD KHD Khorramabad Khorramabad Sân bay Khorramabad Khorramabad Airport Iran Iran IR"
  },
  {
    "id": "KCA",
    "name": "Khố Xa (KCA)",
    "country": "Trung Quốc",
    "keywords": "KCA KCA Khố Xa Kuqa Sân bay Kuqa Kuqa Airport Trung Quốc China CN"
  },
  {
    "id": "KEL",
    "name": "Kiel (KEL)",
    "country": "Đức",
    "keywords": "KEL KEL Kiel Kiel Sân bay Kiel Holtenau Kiel Holtenau Airport Đức Germany DE"
  },
  {
    "id": "IEV",
    "name": "Kiev (IEV)",
    "country": "U-krai-na",
    "keywords": "IEV IEV Kiev Kiev Sân bay Kiev Kiev International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "KBP",
    "name": "Kiev (KBP)",
    "country": "U-krai-na",
    "keywords": "KBP IEV Kiev Kiev Sân bay Boryspil Boryspil International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "VKG",
    "name": "Kiên Giang (VKG)",
    "country": "Việt Nam",
    "keywords": "VKG VKG Kiên Giang Rach Gia Sân bay Rạch Giá Rach Gia Airport Việt Nam Vietnam VN"
  },
  {
    "id": "KGL",
    "name": "Kigali (KGL)",
    "country": "Rwanda",
    "keywords": "KGL KGL Kigali Kigali Sân bay Kigali Kigali International Airport Rwanda Rwanda RW"
  },
  {
    "id": "JRO",
    "name": "Kilimanjaro (JRO)",
    "country": "Tanzania",
    "keywords": "JRO JRO Kilimanjaro Kilimanjaro Sân bay Kilimanjaro Kilimanjaro International Airport Tanzania Tanzania TZ"
  },
  {
    "id": "GRK",
    "name": "Killeen (GRK)",
    "country": "Hoa kỳ",
    "keywords": "GRK GRK Killeen Killeen Sân bay Killeen-Fort Hood Regional Killeen-Fort Hood Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ILE",
    "name": "Killeen (ILE)",
    "country": "Hoa kỳ",
    "keywords": "ILE ILE Killeen Killeen Skylark Field Skylark Field Hoa kỳ United States US"
  },
  {
    "id": "JNZ",
    "name": "Kim Châu (JNZ)",
    "country": "Trung Quốc",
    "keywords": "JNZ JNZ Kim Châu Jinzhou Sân bay Jinzhou Jinzhou Airport Trung Quốc China CN"
  },
  {
    "id": "KIM",
    "name": "Kimberley (KIM)",
    "country": "Nam Phi",
    "keywords": "KIM KIM Kimberley Kimberley Sân bay Kimberley Kimberley Airport Nam Phi South Africa ZA"
  },
  {
    "id": "YLC",
    "name": "Kimmirut/Lake Harbour (YLC)",
    "country": "Canada",
    "keywords": "YLC YLC Kimmirut/Lake Harbour Kimmirut/Lake Harbour Sân bay Kimmirut Kimmirut Airport Canada Canada CA"
  },
  {
    "id": "KNS",
    "name": "King Island (KNS)",
    "country": "Úc",
    "keywords": "KNS KNS King Island King Island Sân bay King Island King Island Airport Úc Australia AU"
  },
  {
    "id": "KMC",
    "name": "King Khalid Military City (KMC)",
    "country": "Ả rập xê út",
    "keywords": "KMC KMC King Khalid Military City King Khalid Military City Sân bay King Khaled Military City King Khaled Military City Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "SHO",
    "name": "King Mswati III Intl (SHO)",
    "country": "Eswatini",
    "keywords": "SHO SHO King Mswati III Intl King Mswati III Intl King Mswati III Intl King Mswati III Intl Eswatini Eswatini SZ"
  },
  {
    "id": "AKN",
    "name": "King Salmon (AKN)",
    "country": "Hoa kỳ",
    "keywords": "AKN AKN King Salmon King Salmon Sân bay King Salmon King Salmon Airport Hoa kỳ United States US"
  },
  {
    "id": "IGM",
    "name": "Kingman (IGM)",
    "country": "Hoa kỳ",
    "keywords": "IGM IGM Kingman Kingman Sân bay Kingman Kingman Airport Hoa kỳ United States US"
  },
  {
    "id": "KGC",
    "name": "Kingscote (KGC)",
    "country": "Úc",
    "keywords": "KGC KGC Kingscote Kingscote Sân bay Kingscote Kingscote Airport Úc Australia AU"
  },
  {
    "id": "KTP",
    "name": "Kingston (KTP)",
    "country": "Jamaica",
    "keywords": "KTP KIN Kingston Kingston Tinson Pen Aerodrome Tinson Pen Aerodrome Jamaica Jamaica JM"
  },
  {
    "id": "YGK",
    "name": "Kingston (YGK)",
    "country": "Canada",
    "keywords": "YGK YGK Kingston Kingston Sân bay Kingston/Norman Rogers Kingston/Norman Rogers Airport Canada Canada CA"
  },
  {
    "id": "JHG",
    "name": "Kinh Hoằng (JHG)",
    "country": "Trung Quốc",
    "keywords": "JHG JHG Kinh Hoằng Jinghong Sân bay Xishuangbanna Gasa Xishuangbanna Gasa Airport Trung Quốc China CN"
  },
  {
    "id": "FIH",
    "name": "Kinshasa (FIH)",
    "country": "Congo",
    "keywords": "FIH FIH Kinshasa Kinshasa Sân bay N'djili N'djili Airport Congo Congo CG"
  },
  {
    "id": "KKN",
    "name": "Kirkenes (KKN)",
    "country": "Na Uy",
    "keywords": "KKN KKN Kirkenes Kirkenes Sân bay Kirkenes Kirkenes Airport, Høybuktmoen Na Uy Norway NO"
  },
  {
    "id": "IRK",
    "name": "Kirksville (IRK)",
    "country": "Hoa kỳ",
    "keywords": "IRK IRK Kirksville Kirksville Sân bay Kirksville Regional Kirksville Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "KOI",
    "name": "Kirkwall (KOI)",
    "country": "Anh quốc",
    "keywords": "KOI KOI Kirkwall Kirkwall Sân bay Kirkwall Kirkwall Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "KRN",
    "name": "Kiruna (KRN)",
    "country": "Thụy điển",
    "keywords": "KRN KRN Kiruna Kiruna Sân bay Kiruna Kiruna Airport Thụy điển Sweden SE"
  },
  {
    "id": "KIS",
    "name": "Kisumu (KIS)",
    "country": "Kenya",
    "keywords": "KIS KIS Kisumu Kisumu Sân bay Kisumu Kisumu Airport Kenya Kenya KE"
  },
  {
    "id": "KKJ",
    "name": "Kita Kyushu (KKJ)",
    "country": "Nhật bản",
    "keywords": "KKJ KKJ Kita Kyushu Kita Kyushu Sân bay Kokura Kokura Airport Nhật bản Japan JP"
  },
  {
    "id": "YKF",
    "name": "Kitchener (YKF)",
    "country": "Canada",
    "keywords": "YKF YKF Kitchener Kitchener Sân bay Region of Waterloo Region of Waterloo International Airport Canada Canada CA"
  },
  {
    "id": "KIT",
    "name": "Kithira (KIT)",
    "country": "Hy lạp",
    "keywords": "KIT KIT Kithira Kithira Sân bay Kithira Kithira Airport Hy lạp Greece GR"
  },
  {
    "id": "KTT",
    "name": "Kittila (KTT)",
    "country": "Phần lan",
    "keywords": "KTT KTT Kittila Kittila Sân bay Kittilä Kittilä Airport Phần lan Finland FI"
  },
  {
    "id": "KLU",
    "name": "Klagenfurt (KLU)",
    "country": "Áo",
    "keywords": "KLU KLU Klagenfurt Klagenfurt Sân bay Klagenfurt Klagenfurt Airport Áo Austria AT"
  },
  {
    "id": "PLQ",
    "name": "Klaipeda/Palanga (PLQ)",
    "country": "Lithuania",
    "keywords": "PLQ PLQ Klaipeda/Palanga Klaipeda/Palanga Sân bay Palanga Palanga International Airport Lithuania Lithuania LT"
  },
  {
    "id": "LMT",
    "name": "Klamath Falls (LMT)",
    "country": "Hoa kỳ",
    "keywords": "LMT LMT Klamath Falls Klamath Falls Sân bay Klamath Falls Klamath Falls Airport Hoa kỳ United States US"
  },
  {
    "id": "KLW",
    "name": "Klawock (KLW)",
    "country": "Hoa kỳ",
    "keywords": "KLW KLW Klawock Klawock Sân bay Klawock Klawock Airport Hoa kỳ United States US"
  },
  {
    "id": "NOC",
    "name": "Knock (NOC)",
    "country": "Anh quốc",
    "keywords": "NOC NOC Knock Knock Sân bay Knock Knock International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "TYS",
    "name": "Knoxville (TYS)",
    "country": "Hoa kỳ",
    "keywords": "TYS TYS Knoxville Knoxville Sân bay McGhee Tyson McGhee Tyson Airport Hoa kỳ United States US"
  },
  {
    "id": "UKB",
    "name": "Kobe (UKB)",
    "country": "Nhật bản",
    "keywords": "UKB UKB Kobe Kobe Sân bay Kobe Kobe Airport Nhật bản Japan JP"
  },
  {
    "id": "COK",
    "name": "Kochi (COK)",
    "country": "Ấn độ",
    "keywords": "COK COK Kochi Kochi Sân bay Cochin Cochin International Airport Ấn độ India IN"
  },
  {
    "id": "KCZ",
    "name": "Kochi (KCZ)",
    "country": "Nhật bản",
    "keywords": "KCZ KCZ Kochi Kochi Sân bay Kochi Ryoma Kōchi Ryōma Airport Nhật bản Japan JP"
  },
  {
    "id": "ADQ",
    "name": "Kodiak (ADQ)",
    "country": "Hoa kỳ",
    "keywords": "ADQ ADQ Kodiak Kodiak Sân bay Kodiak Kodiak Airport Hoa kỳ United States US"
  },
  {
    "id": "KDK",
    "name": "Kodiak (KDK)",
    "country": "Hoa kỳ",
    "keywords": "KDK ADQ Kodiak Kodiak Sân bay Kodiak Municipal Kodiak Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "USM",
    "name": "Koh Samui (USM)",
    "country": "Thái Lan",
    "keywords": "USM USM Koh Samui Koh Samui Sân bay Samui Samui Airport Thái Lan Thailand TH"
  },
  {
    "id": "KOK",
    "name": "Kokkola (KOK)",
    "country": "Phần lan",
    "keywords": "KOK KOK Kokkola Kokkola Sân bay Kokkola-Pietarsaari Kokkola-Pietarsaari Airport Phần lan Finland FI"
  },
  {
    "id": "CCU",
    "name": "Kolkata (CCU)",
    "country": "Ấn độ",
    "keywords": "CCU CCU Kolkata Kolkata Sân bay Netaji Subhas Chandra Bose Netaji Subhas Chandra Bose International Airport Ấn độ India IN"
  },
  {
    "id": "KMQ",
    "name": "Komatsu (KMQ)",
    "country": "Nhật bản",
    "keywords": "KMQ KMQ Komatsu Komatsu Sân bay Komatsu Komatsu Airport Nhật bản Japan JP"
  },
  {
    "id": "KOA",
    "name": "Kona (KOA)",
    "country": "Hoa kỳ",
    "keywords": "KOA KOA Kona Kona Sân bay Kona Kona International Airport Hoa kỳ United States US"
  },
  {
    "id": "KYA",
    "name": "Konya (KYA)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "KYA KYA Konya Konya Sân bay Konya Konya Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "KRL",
    "name": "Korla (KRL)",
    "country": "Trung Quốc",
    "keywords": "KRL KRL Korla Korla Sân bay Korla Korla Airport Trung Quốc China CN"
  },
  {
    "id": "ROR",
    "name": "Koror (ROR)",
    "country": "Micronesia",
    "keywords": "ROR ROR Koror Koror Sân bay Babelthuap Babelthuap Airport Micronesia Micronesia FM"
  },
  {
    "id": "KGS",
    "name": "Kos Gr (KGS)",
    "country": "Hy lạp",
    "keywords": "KGS KGS Kos Gr Kos Gr Sân bay Kos Island Kos Island International Airport Hy lạp Greece GR"
  },
  {
    "id": "KSC",
    "name": "Kosice (KSC)",
    "country": "Slovakia",
    "keywords": "KSC KSC Kosice Kosice Sân bay Košice Košice Airport Slovakia Slovakia SK"
  },
  {
    "id": "KSN",
    "name": "Kostanay (KSN)",
    "country": "Kazakstan",
    "keywords": "KSN KSN Kostanay Kostanay Sân bay Kostanay Kostanay Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "KBR",
    "name": "Kota Bharu (KBR)",
    "country": "Malaysia",
    "keywords": "KBR KBR Kota Bharu Kota Bharu Sân bay Sultan Ismail Petra Sultan Ismail Petra Airport Malaysia Malaysia MY"
  },
  {
    "id": "BKI",
    "name": "Kota Kinabalu (BKI)",
    "country": "Malaysia",
    "keywords": "BKI BKI Kota Kinabalu Kota Kinabalu Sân bay Kota Kinabalu Kota Kinabalu International Airport Malaysia Malaysia MY"
  },
  {
    "id": "OTZ",
    "name": "Kotzebue (OTZ)",
    "country": "Hoa kỳ",
    "keywords": "OTZ OTZ Kotzebue Kotzebue Sân bay Ralph Wien Memorial Ralph Wien Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "CCJ",
    "name": "Kozhikode (CCJ)",
    "country": "Ấn độ",
    "keywords": "CCJ CCJ Kozhikode Kozhikode Sân bay Calicut Calicut Airport Ấn độ India IN"
  },
  {
    "id": "KBV",
    "name": "Krabi (KBV)",
    "country": "Thái Lan",
    "keywords": "KBV KBV Krabi Krabi Sân bay Krabi Krabi Airport Thái Lan Thailand TH"
  },
  {
    "id": "KRK",
    "name": "Krakow (KRK)",
    "country": "Ba Lan",
    "keywords": "KRK KRK Krakow Krakow Sân bay John Paul II John Paul II International Airport Ba Lan Poland PL"
  },
  {
    "id": "KRR",
    "name": "Krasnodar (KRR)",
    "country": "Nga",
    "keywords": "KRR KRR Krasnodar Krasnodar Sân bay Pashkovsky Pashkovsky Airport Nga Russia RU"
  },
  {
    "id": "KJA",
    "name": "Krasnoyarsk (KJA)",
    "country": "Nga",
    "keywords": "KJA KJA Krasnoyarsk Krasnoyarsk Sân bay Krasnoyarsk Yemelyanovo Krasnoyarsk Yemelyanovo Airport Nga Russia RU"
  },
  {
    "id": "KRS",
    "name": "Kristiansand (KRS)",
    "country": "Na Uy",
    "keywords": "KRS KRS Kristiansand Kristiansand Sân bay Kristiansand Kristiansand Airport, Kjevik Na Uy Norway NO"
  },
  {
    "id": "KID",
    "name": "Kristianstad (KID)",
    "country": "Thụy điển",
    "keywords": "KID KID Kristianstad Kristianstad Sân bay Kristianstad Kristianstad Airport Thụy điển Sweden SE"
  },
  {
    "id": "KSU",
    "name": "Kristiansund (KSU)",
    "country": "Na Uy",
    "keywords": "KSU KSU Kristiansund Kristiansund Sân bay Kristiansund Kristiansund Airport, Kvernberget Na Uy Norway NO"
  },
  {
    "id": "KWG",
    "name": "Krivoy Rog (KWG)",
    "country": "U-krai-na",
    "keywords": "KWG KWG Krivoy Rog Krivoy Rog Sân bay Lozovatka Lozovatka Airport U-krai-na Ukraine UA"
  },
  {
    "id": "KUL",
    "name": "Kuala Lumpur (KUL)",
    "country": "Malaysia",
    "keywords": "KUL KUL Kuala Lumpur Kuala Lumpur Sân bay Kuala Lumpur Kuala Lumpur Airport Malaysia Malaysia MY"
  },
  {
    "id": "SZB",
    "name": "Kuala Lumpur (SZB)",
    "country": "Malaysia",
    "keywords": "SZB KUL Kuala Lumpur Kuala Lumpur Sân bay Sultan Abdul Aziz Shah Sultan Abdul Aziz Shah Airport Malaysia Malaysia MY"
  },
  {
    "id": "KUA",
    "name": "Kuantan (KUA)",
    "country": "Malaysia",
    "keywords": "KUA KUA Kuantan Kuantan Sân bay Sultan Haji Ahmad Shah Sultan Haji Ahmad Shah Airport Malaysia Malaysia MY"
  },
  {
    "id": "KCH",
    "name": "Kuching (KCH)",
    "country": "Malaysia",
    "keywords": "KCH KCH Kuching Kuching Sân bay Kuching Kuching International Airport Malaysia Malaysia MY"
  },
  {
    "id": "KUD",
    "name": "Kudat (KUD)",
    "country": "Malaysia",
    "keywords": "KUD KUD Kudat Kudat Sân bay Kudat Kudat Airport Malaysia Malaysia MY"
  },
  {
    "id": "YCO",
    "name": "Kugluktuk/Coppermine (YCO)",
    "country": "Canada",
    "keywords": "YCO YCO Kugluktuk/Coppermine Kugluktuk/Coppermine Sân bay Kugluktuk Kugluktuk Airport Canada Canada CA"
  },
  {
    "id": "KUU",
    "name": "Kulu (KUU)",
    "country": "Ấn độ",
    "keywords": "KUU KUU Kulu Kulu Sân bay Bhuntar Bhuntar Airport Ấn độ India IN"
  },
  {
    "id": "KUS",
    "name": "Kulusuk (KUS)",
    "country": "Greenland",
    "keywords": "KUS KUS Kulusuk Kulusuk Sân bay Kulusuk Kulusuk Airport Greenland Greenland GL"
  },
  {
    "id": "KMJ",
    "name": "Kumamoto (KMJ)",
    "country": "Nhật bản",
    "keywords": "KMJ KMJ Kumamoto Kumamoto Sân bay Kumamoto Kumamoto Airport Nhật bản Japan JP"
  },
  {
    "id": "KUV",
    "name": "Kunsan (KUV)",
    "country": "Hàn quốc",
    "keywords": "KUV KUV Kunsan Kunsan Sân bay Gunsan Gunsan Airport Hàn quốc Korea KR"
  },
  {
    "id": "KNX",
    "name": "Kununurra (KNX)",
    "country": "Úc",
    "keywords": "KNX KNX Kununurra Kununurra Sân bay Kununurra Kununurra Airport Úc Australia AU"
  },
  {
    "id": "KUO",
    "name": "Kuopio (KUO)",
    "country": "Phần lan",
    "keywords": "KUO KUO Kuopio Kuopio Sân bay Kuopio Kuopio Airport Phần lan Finland FI"
  },
  {
    "id": "URS",
    "name": "Kursk (URS)",
    "country": "Nga",
    "keywords": "URS URS Kursk Kursk Sân bay Kursk Vostochny Kursk Vostochny Airport Nga Russia RU"
  },
  {
    "id": "KUH",
    "name": "Kushiro (KUH)",
    "country": "Nhật bản",
    "keywords": "KUH KUH Kushiro Kushiro Sân bay Kushiro Kushiro Airport Nhật bản Japan JP"
  },
  {
    "id": "YVP",
    "name": "Kuujjuaq (YVP)",
    "country": "Canada",
    "keywords": "YVP YVP Kuujjuaq Kuujjuaq Sân bay Kuujjuaq Kuujjuaq Airport Canada Canada CA"
  },
  {
    "id": "YGW",
    "name": "Kuujjuarapik (YGW)",
    "country": "Canada",
    "keywords": "YGW YGW Kuujjuarapik Kuujjuarapik Sân bay Kuujjuarapik Kuujjuarapik Airport Canada Canada CA"
  },
  {
    "id": "KAO",
    "name": "Kuusamo (KAO)",
    "country": "Phần lan",
    "keywords": "KAO KAO Kuusamo Kuusamo Sân bay Kuusamo Kuusamo Airport Phần lan Finland FI"
  },
  {
    "id": "KWA",
    "name": "Kwajalein (KWA)",
    "country": "Marshall Islands",
    "keywords": "KWA KWA Kwajalein Kwajalein Bucholz Army Airfield Bucholz Army Airfield Marshall Islands MARSHALL ISLANDS MH"
  },
  {
    "id": "KWJ",
    "name": "Kwangju (KWJ)",
    "country": "Hàn quốc",
    "keywords": "KWJ KWJ Kwangju Kwangju Sân bay Gwangju Gwangju Airport Hàn quốc Korea KR"
  },
  {
    "id": "LCE",
    "name": "La Ceiba (LCE)",
    "country": "Honduras",
    "keywords": "LCE LCE La Ceiba La Ceiba Sân bay Golosón Golosón International Airport Honduras Honduras HN"
  },
  {
    "id": "LCG",
    "name": "La Coruna (LCG)",
    "country": "Tây Ban Nha",
    "keywords": "LCG LCG La Coruna La Coruna Sân bay La Coruña La Coruña Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "LSE",
    "name": "La Crosse (LSE)",
    "country": "Hoa kỳ",
    "keywords": "LSE LSE La Crosse La Crosse Sân bay La Crosse Regional La Crosse Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YGL",
    "name": "La Grande (YGL)",
    "country": "Canada",
    "keywords": "YGL YGL La Grande La Grande Sân bay La Grande Rivière La Grande Rivière Airport Canada Canada CA"
  },
  {
    "id": "SPC",
    "name": "La Palma (SPC)",
    "country": "Tây Ban Nha",
    "keywords": "SPC SPC La Palma La Palma Sân bay La Palma La Palma Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "LAP",
    "name": "La Paz (LAP)",
    "country": "Mê hi cô",
    "keywords": "LAP LAP La Paz La Paz Sân bay Manuel Márquez de León Manuel Márquez de León International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LPB",
    "name": "La Paz (LPB)",
    "country": "Bolivia",
    "keywords": "LPB LPB La Paz La Paz Sân bay El Alto El Alto International Airport Bolivia Bolivia BO"
  },
  {
    "id": "LPG",
    "name": "La Plata (LPG)",
    "country": "Ác Hen Tina",
    "keywords": "LPG LPG La Plata La Plata Sân bay La Plata La Plata International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "IRJ",
    "name": "La Rioja (IRJ)",
    "country": "Ác Hen Tina",
    "keywords": "IRJ IRJ La Rioja La Rioja Sân bay Capitán Vicente Almandos Almonacid Capitán Vicente Almandos Almonacid Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "LRH",
    "name": "La Rochelle (LRH)",
    "country": "Pháp",
    "keywords": "LRH LRH La Rochelle La Rochelle Sân bay La Rochelle - Île de Ré La Rochelle - Île de Ré Airport Pháp France FR"
  },
  {
    "id": "LRM",
    "name": "La Romana (LRM)",
    "country": "Cộng hòa Dominicana",
    "keywords": "LRM LRM La Romana La Romana Sân bay La Romana La Romana International Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "LSC",
    "name": "La Serena (LSC)",
    "country": "Chi lê",
    "keywords": "LSC LSC La Serena La Serena Sân bay La Florida La Florida Airport Chi lê Chile CL"
  },
  {
    "id": "ZLT",
    "name": "La Tabatiere (ZLT)",
    "country": "Canada",
    "keywords": "ZLT ZLT La Tabatiere La Tabatiere Sân bay La Tabatière La Tabatière Airport Canada Canada CA"
  },
  {
    "id": "LBS",
    "name": "Labasa (LBS)",
    "country": "Fiji Islands",
    "keywords": "LBS LBS Labasa Labasa Sân bay Labasa Labasa Airport Fiji Islands Fiji Islands FJ"
  },
  {
    "id": "LBU",
    "name": "Labuan (LBU)",
    "country": "Malaysia",
    "keywords": "LBU LBU Labuan Labuan Sân bay Labuan Labuan Airport Malaysia Malaysia MY"
  },
  {
    "id": "LYA",
    "name": "Lạc Dương (LYA)",
    "country": "Trung Quốc",
    "keywords": "LYA LYA Lạc Dương Luoyang Sân bay Luoyang Beijiao Luoyang Beijiao Airport Trung Quốc China CN"
  },
  {
    "id": "LAE",
    "name": "Lae Pg (LAE)",
    "country": "Papua niu ghi nê",
    "keywords": "LAE LAE Lae Pg Lae Pg Sân bay Lae Nadzab Lae Nadzab Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "ARA",
    "name": "Lafayette (ARA)",
    "country": "Lào",
    "keywords": "ARA LFT Lafayette Lafayette Sân bay Acadiana Regional Acadiana Regional Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "LOS",
    "name": "Lagos (LOS)",
    "country": "Ni giê ria",
    "keywords": "LOS LOS Lagos Lagos Sân bay Murtala Muhammed Murtala Muhammed International Airport Ni giê ria Nigeria NG"
  },
  {
    "id": "LDU",
    "name": "Lahad Datu (LDU)",
    "country": "Malaysia",
    "keywords": "LDU LDU Lahad Datu Lahad Datu Sân bay Lahad Datu Lahad Datu Airport Malaysia Malaysia MY"
  },
  {
    "id": "LHE",
    "name": "Lahore (LHE)",
    "country": "Pakistan",
    "keywords": "LHE LHE Lahore Lahore Sân bay Allama Iqbal Allama Iqbal International Airport Pakistan Pakistan PK"
  },
  {
    "id": "LCH",
    "name": "Lake Charles (LCH)",
    "country": "Hoa kỳ",
    "keywords": "LCH LCH Lake Charles Lake Charles Sân bay Lake Charles Regional Lake Charles Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TVL",
    "name": "Lake Tahoe (TVL)",
    "country": "Hoa kỳ",
    "keywords": "TVL TVL Lake Tahoe Lake Tahoe Sân bay Lake Tahoe Lake Tahoe Airport Hoa kỳ United States US"
  },
  {
    "id": "LKL",
    "name": "Lakselv (LKL)",
    "country": "Na Uy",
    "keywords": "LKL LKL Lakselv Lakselv Sân bay Lakselv Lakselv Airport, Banak Na Uy Norway NO"
  },
  {
    "id": "SUF",
    "name": "Lamezia Terme (SUF)",
    "country": "Ý",
    "keywords": "SUF SUF Lamezia Terme Lamezia Terme Sân bay Lamezia Terme Lamezia Terme International Airport Ý Italy IT"
  },
  {
    "id": "LPT",
    "name": "Lampang (LPT)",
    "country": "Thái Lan",
    "keywords": "LPT LPT Lampang Lampang Sân bay Lampang Lampang Airport Thái Lan Thailand TH"
  },
  {
    "id": "LMP",
    "name": "Lampedusa (LMP)",
    "country": "Ý",
    "keywords": "LMP LMP Lampedusa Lampedusa Sân bay Lampedusa Lampedusa Airport Ý Italy IT"
  },
  {
    "id": "LAU",
    "name": "Lamu (LAU)",
    "country": "Kenya",
    "keywords": "LAU LAU Lamu Lamu Sân bay Mwana Mwana Airport Kenya Kenya KE"
  },
  {
    "id": "LHW",
    "name": "Lan Châu (LHW)",
    "country": "Trung Quốc",
    "keywords": "LHW LHW Lan Châu Lanzhou Sân bay Lanzhou Zhongchuan Lanzhou Zhongchuan Airport Trung Quốc China CN"
  },
  {
    "id": "LNY",
    "name": "Lanai (LNY)",
    "country": "Hoa kỳ",
    "keywords": "LNY LNY Lanai Lanai Sân bay Lanai Lanai Airport Hoa kỳ United States US"
  },
  {
    "id": "LNS",
    "name": "Lancaster (LNS)",
    "country": "Hoa kỳ",
    "keywords": "LNS LNS Lancaster Lancaster Sân bay Lancaster Lancaster Airport Hoa kỳ United States US"
  },
  {
    "id": "JLD",
    "name": "Landskrona (JLD)",
    "country": "Thụy điển",
    "keywords": "JLD JLD Landskrona Landskrona Landskrona Heliport Landskrona Heliport Thụy điển Sweden SE"
  },
  {
    "id": "LGK",
    "name": "Langkawi (LGK)",
    "country": "Malaysia",
    "keywords": "LGK LGK Langkawi Langkawi Sân bay Langkawi Langkawi International Airport Malaysia Malaysia MY"
  },
  {
    "id": "LAI",
    "name": "Lannion (LAI)",
    "country": "Pháp",
    "keywords": "LAI LAI Lannion Lannion Sân bay Lannion - Côte de Granit Lannion - Côte de Granit Airport Pháp France FR"
  },
  {
    "id": "HLA",
    "name": "Lanseria (HLA)",
    "country": "Nam Phi",
    "keywords": "HLA HLA Lanseria Lanseria Sân bay Lanseria Lanseria Airport Nam Phi South Africa ZA"
  },
  {
    "id": "LAN",
    "name": "Lansing (LAN)",
    "country": "Hoa kỳ",
    "keywords": "LAN LAN Lansing Lansing Sân bay Capital Region Capital Region International Airport Hoa kỳ United States US"
  },
  {
    "id": "ACE",
    "name": "Lanzarote (ACE)",
    "country": "Tây Ban Nha",
    "keywords": "ACE ACE Lanzarote Lanzarote Sân bay Lanzarote Lanzarote Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "LAO",
    "name": "Laoag (LAO)",
    "country": "Philippines",
    "keywords": "LAO LAO Laoag Laoag Sân bay Laoag Laoag International Airport Philippines Philippines PH"
  },
  {
    "id": "LPP",
    "name": "Lappeenranta (LPP)",
    "country": "Phần lan",
    "keywords": "LPP LPP Lappeenranta Lappeenranta Sân bay Lappeenranta Lappeenranta Airport Phần lan Finland FI"
  },
  {
    "id": "LRD",
    "name": "Laredo (LRD)",
    "country": "Hoa kỳ",
    "keywords": "LRD LRD Laredo Laredo Sân bay Laredo Laredo International Airport Hoa kỳ United States US"
  },
  {
    "id": "LCA",
    "name": "Larnaca (LCA)",
    "country": "Cộng hòa Síp",
    "keywords": "LCA LCA Larnaca Larnaca Sân bay Larnaca Larnaca International Airport Cộng hòa Síp Cyprus CY"
  },
  {
    "id": "LSP",
    "name": "Las Piedras (LSP)",
    "country": "Vê nê du ê la",
    "keywords": "LSP LSP Las Piedras Las Piedras Sân bay Josefa Camejo Josefa Camejo International Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "BLD",
    "name": "Las Vegas (BLD)",
    "country": "Hoa kỳ",
    "keywords": "BLD BLD Las Vegas Las Vegas Sân bay Boulder City Municipal Boulder City Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "HSH",
    "name": "Las Vegas (HSH)",
    "country": "Hoa kỳ",
    "keywords": "HSH HSH Las Vegas Las Vegas Sân bay Henderson Executive Henderson Executive Airport Hoa kỳ United States US"
  },
  {
    "id": "LAS",
    "name": "Las Vegas (LAS)",
    "country": "Hoa kỳ",
    "keywords": "LAS HSH Las Vegas Las Vegas Sân bay quốc tế McCarran McCarran International Airport Hoa kỳ United States US"
  },
  {
    "id": "VGT",
    "name": "Las Vegas (VGT)",
    "country": "Hoa kỳ",
    "keywords": "VGT LAS Las Vegas Las Vegas Sân bay North Las Vegas North Las Vegas Airport Hoa kỳ United States US"
  },
  {
    "id": "IAS",
    "name": "lasi (IAS)",
    "country": "Rumani",
    "keywords": "IAS IAS lasi Iasi Sân bay Ia?i Iași International Airport Rumani Romania RO"
  },
  {
    "id": "LTK",
    "name": "Latakia (LTK)",
    "country": "Syria",
    "keywords": "LTK LTK Latakia Latakia Sân bay Bassel Al-Assad Bassel Al-Assad International Airport Syria Syria SY"
  },
  {
    "id": "LBE",
    "name": "Latrobe (LBE)",
    "country": "Hoa kỳ",
    "keywords": "LBE LBE Latrobe Latrobe Sân bay Arnold Palmer Regional Arnold Palmer Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "LST",
    "name": "Launceston (LST)",
    "country": "Úc",
    "keywords": "LST LST Launceston Launceston Sân bay Launceston Launceston Airport Úc Australia AU"
  },
  {
    "id": "PIB",
    "name": "Laurel (PIB)",
    "country": "Hoa kỳ",
    "keywords": "PIB LUL Laurel Laurel Sân bay Hattiesburg-Laurel Regional Hattiesburg-Laurel Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "LWY",
    "name": "Lawas (LWY)",
    "country": "Malaysia",
    "keywords": "LWY LWY Lawas Lawas Sân bay Lawas Lawas Airport Malaysia Malaysia MY"
  },
  {
    "id": "LAW",
    "name": "Lawton (LAW)",
    "country": "Hoa kỳ",
    "keywords": "LAW LAW Lawton Lawton Sân bay Lawton-Fort Sill Regional Lawton-Fort Sill Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "LZC",
    "name": "Lazaro Cardenas Michoacan (LZC)",
    "country": "Mê hi cô",
    "keywords": "LZC LZC Lazaro Cardenas Michoacan Lazaro Cardenas Michoacan Sân bay Lázaro Cárdenas Lázaro Cárdenas Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LNJ",
    "name": "Lâm Cảng (LNJ)",
    "country": "Trung Quốc",
    "keywords": "LNJ LNJ Lâm Cảng Lincang Sân bay Lincang Lincang Airport Trung Quốc China CN"
  },
  {
    "id": "LYI",
    "name": "Lâm Nghi (LYI)",
    "country": "Trung Quốc",
    "keywords": "LYI LYI Lâm Nghi Linyi Sân bay Linyi Shubuling Linyi Shubuling Airport Trung Quốc China CN"
  },
  {
    "id": "LZY",
    "name": "Lâm Tri (LZY)",
    "country": "Trung Quốc",
    "keywords": "LZY LZY Lâm Tri Lin Zhi Sân bay Lin Zhi Lin Zhi Airport Trung Quốc China CN"
  },
  {
    "id": "LEH",
    "name": "Le Havre (LEH)",
    "country": "Pháp",
    "keywords": "LEH LEH Le Havre Le Havre Sân bay Le Havre Octeville Le Havre Octeville Airport Pháp France FR"
  },
  {
    "id": "LME",
    "name": "Le Mans (LME)",
    "country": "Pháp",
    "keywords": "LME LME Le Mans Le Mans Sân bay Le Mans Arnage Le Mans Arnage Airport Pháp France FR"
  },
  {
    "id": "LPY",
    "name": "Le Puy (LPY)",
    "country": "Pháp",
    "keywords": "LPY LPY Le Puy Le Puy Sân bay Loudes Loudes Airport Pháp France FR"
  },
  {
    "id": "LEA",
    "name": "Learmonth (LEA)",
    "country": "Úc",
    "keywords": "LEA LEA Learmonth Learmonth Sân bay Learmonth Learmonth Airport Úc Australia AU"
  },
  {
    "id": "LBA",
    "name": "Leeds (LBA)",
    "country": "Anh quốc",
    "keywords": "LBA LBA Leeds Leeds Sân bay Leeds Bradford Leeds Bradford International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LGP",
    "name": "Legazpi (LGP)",
    "country": "Philippines",
    "keywords": "LGP LGP Legazpi Legazpi Sân bay Legazpi Legazpi Airport Philippines Philippines PH"
  },
  {
    "id": "IXL",
    "name": "Leh (IXL)",
    "country": "Ấn độ",
    "keywords": "IXL IXL Leh Leh Sân bay Leh Kushok Bakula Rimpochee Leh Kushok Bakula Rimpochee Airport Ấn độ India IN"
  },
  {
    "id": "LKN",
    "name": "Leknes (LKN)",
    "country": "Na Uy",
    "keywords": "LKN LKN Leknes Leknes Sân bay Leknes Leknes Airport Na Uy Norway NO"
  },
  {
    "id": "BJX",
    "name": "Leon (BJX)",
    "country": "Mê hi cô",
    "keywords": "BJX BJX Leon Leon Sân bay Del Bajío Del Bajío International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LEN",
    "name": "Leon (LEN)",
    "country": "Tây Ban Nha",
    "keywords": "LEN LEN Leon Leon Sân bay León León Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "LEJ",
    "name": "Lép-zíc (LEJ)",
    "country": "Đức",
    "keywords": "LEJ LEJ Lép-zíc Leipzig Sân bay Leipzig/Halle Leipzig/Halle Airport Đức Germany DE"
  },
  {
    "id": "LRS",
    "name": "Leros (LRS)",
    "country": "Hy lạp",
    "keywords": "LRS LRS Leros Leros Sân bay Leros Island National Leros Island National Airport Hy lạp Greece GR"
  },
  {
    "id": "LSI",
    "name": "Lerwick (LSI)",
    "country": "Anh quốc",
    "keywords": "LSI LSI Lerwick Lerwick Sân bay Sumburgh Sumburgh Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LWK",
    "name": "Lerwick (LWK)",
    "country": "Anh quốc",
    "keywords": "LWK LSI Lerwick Lerwick Sân bay Tingwall Tingwall Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YQL",
    "name": "Lethbridge (YQL)",
    "country": "Canada",
    "keywords": "YQL YQL Lethbridge Lethbridge Sân bay Lethbridge County Lethbridge County Airport Canada Canada CA"
  },
  {
    "id": "LET",
    "name": "Leticia (LET)",
    "country": "Colombia",
    "keywords": "LET LET Leticia Leticia Sân bay Alfredo Vásquez Cobo Alfredo Vásquez Cobo International Airport Colombia Colombia CO"
  },
  {
    "id": "LWS",
    "name": "Lewiston (LWS)",
    "country": "Hoa kỳ",
    "keywords": "LWS LWS Lewiston Lewiston Sân bay Lewiston-Nez Perce County Lewiston-Nez Perce County Airport Hoa kỳ United States US"
  },
  {
    "id": "LEX",
    "name": "Lexington (LEX)",
    "country": "Cayman Islands",
    "keywords": "LEX LEX Lexington Lexington Sân bay Blue Grass Blue Grass Airport Cayman Islands Cayman Islands KY"
  },
  {
    "id": "LXA",
    "name": "Lhasa (LXA)",
    "country": "Trung Quốc",
    "keywords": "LXA LXA Lhasa Lhasa Sân bay Lhasa Gonggar Lhasa Gonggar Airport Trung Quốc China CN"
  },
  {
    "id": "LBL",
    "name": "Liberal (LBL)",
    "country": "Hoa kỳ",
    "keywords": "LBL LBL Liberal Liberal Sân bay Liberal Municipal Liberal Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "LIR",
    "name": "Liberia (LIR)",
    "country": "Costa Rica",
    "keywords": "LIR LIR Liberia Liberia Sân bay Daniel Oduber Quirós Daniel Oduber Quirós International Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "LLB",
    "name": "Libo (LLB)",
    "country": "Trung Quốc",
    "keywords": "LLB LLB Libo Libo Sân bay Libo Libo Airport Trung Quốc China CN"
  },
  {
    "id": "LBV",
    "name": "Libreville (LBV)",
    "country": "Gabon",
    "keywords": "LBV LBV Libreville Libreville Sân bay Libreville Libreville International Airport Gabon Gabon GA"
  },
  {
    "id": "LYG",
    "name": "Liên Vân Cảng (LYG)",
    "country": "Trung Quốc",
    "keywords": "LYG LYG Liên Vân Cảng Lianyungang Sân bay Lianyungang Baitabu Lianyungang Baitabu Airport Trung Quốc China CN"
  },
  {
    "id": "LZH",
    "name": "Liễu Châu (LZH)",
    "country": "Trung Quốc",
    "keywords": "LZH LZH Liễu Châu Liuzhou Sân bay Liuzhou Bailian Liuzhou Bailian Airport Trung Quốc China CN"
  },
  {
    "id": "LNV",
    "name": "Lihir Island (LNV)",
    "country": "Papua niu ghi nê",
    "keywords": "LNV LNV Lihir Island Lihir Island Sân bay Lihir Island Lihir Island Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "LIH",
    "name": "Lihue (LIH)",
    "country": "Hoa kỳ",
    "keywords": "LIH LIH Lihue Lihue Sân bay Lihue Lihue Airport Hoa kỳ United States US"
  },
  {
    "id": "LIL",
    "name": "Lille (LIL)",
    "country": "Pháp",
    "keywords": "LIL LIL Lille Lille Sân bay Lille Lesquin Lille Lesquin International Airport Pháp France FR"
  },
  {
    "id": "LLW",
    "name": "Lilongwe (LLW)",
    "country": "Malawi",
    "keywords": "LLW LLW Lilongwe Lilongwe Sân bay Lilongwe Lilongwe International Airport Malawi Malawi MW"
  },
  {
    "id": "LIM",
    "name": "Lima (LIM)",
    "country": "Peru",
    "keywords": "LIM LIM Lima Lima Sân bay Jorge Chávez Jorge Chávez International Airport Peru Peru PE"
  },
  {
    "id": "LMN",
    "name": "Limbang (LMN)",
    "country": "Malaysia",
    "keywords": "LMN LMN Limbang Limbang Sân bay Limbang Limbang Airport Malaysia Malaysia MY"
  },
  {
    "id": "LXS",
    "name": "Limnos (LXS)",
    "country": "Hy lạp",
    "keywords": "LXS LXS Limnos Limnos Sân bay Lemnos Lemnos Airport Hy lạp Greece GR"
  },
  {
    "id": "LIG",
    "name": "Limoges (LIG)",
    "country": "Pháp",
    "keywords": "LIG LIG Limoges Limoges Sân bay Bellegarde Bellegarde Airport Pháp France FR"
  },
  {
    "id": "LNK",
    "name": "Lincoln (LNK)",
    "country": "Hoa kỳ",
    "keywords": "LNK LNK Lincoln Lincoln Sân bay Lincoln Lincoln Airport Hoa kỳ United States US"
  },
  {
    "id": "LPI",
    "name": "Linkoping (LPI)",
    "country": "Thụy điển",
    "keywords": "LPI LPI Linkoping Linkoping Sân bay SAAB SAAB Airport Thụy điển Sweden SE"
  },
  {
    "id": "LNZ",
    "name": "Linz (LNZ)",
    "country": "Áo",
    "keywords": "LNZ LNZ Linz Linz Sân bay Linz Linz Airport Áo Austria AT"
  },
  {
    "id": "LIS",
    "name": "Lisbon (LIS)",
    "country": "Bồ đào nha",
    "keywords": "LIS LIS Lisbon Lisbon Sân bay Lisbon Portela Lisbon Portela Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "LSY",
    "name": "Lismore (LSY)",
    "country": "Úc",
    "keywords": "LSY LSY Lismore Lismore Sân bay Lismore Lismore Airport Úc Australia AU"
  },
  {
    "id": "LYB",
    "name": "Little Cayman (LYB)",
    "country": "Cayman Islands",
    "keywords": "LYB LYB Little Cayman Little Cayman Edward Bodden Airfield Edward Bodden Airfield Cayman Islands Cayman Islands KY"
  },
  {
    "id": "LIT",
    "name": "Little Rock (LIT)",
    "country": "Hoa kỳ",
    "keywords": "LIT LIT Little Rock Little Rock Sân bay Little Rock National Little Rock National Airport Hoa kỳ United States US"
  },
  {
    "id": "LPF",
    "name": "Liupanshui (LPF)",
    "country": "Trung Quốc",
    "keywords": "LPF LPF Liupanshui Liupanshui Sân bay Liupanshui Liupanshui Airport Trung Quốc China CN"
  },
  {
    "id": "LPL",
    "name": "Liverpool (LPL)",
    "country": "Anh quốc",
    "keywords": "LPL LPL Liverpool Liverpool Sân bay Liverpool John Lennon Liverpool John Lennon Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LVI",
    "name": "Livingstone (LVI)",
    "country": "Zambia",
    "keywords": "LVI LVI Livingstone Livingstone Sân bay Livingstone Livingstone Airport Zambia Zambia ZM"
  },
  {
    "id": "LJU",
    "name": "Ljubljana (LJU)",
    "country": "Slovenia",
    "keywords": "LJU LJU Ljubljana Ljubljana Sân bay Ljubljana Jože Pucnik Ljubljana Jože Pucnik Airport Slovenia Slovenia SI"
  },
  {
    "id": "YLL",
    "name": "Lloydminster (YLL)",
    "country": "Canada",
    "keywords": "YLL YLL Lloydminster Lloydminster Sân bay Lloydminster Lloydminster Airport Canada Canada CA"
  },
  {
    "id": "IRG",
    "name": "Lockhart River (IRG)",
    "country": "Úc",
    "keywords": "IRG IRG Lockhart River Lockhart River Sân bay Lockhart River Lockhart River Airport Úc Australia AU"
  },
  {
    "id": "LCJ",
    "name": "Lodz (LCJ)",
    "country": "Ba Lan",
    "keywords": "LCJ LCJ Lodz Lodz Sân bay Lódz Wladyslaw Reymont Łódź Władysław Reymont Airport Ba Lan Poland PL"
  },
  {
    "id": "LOE",
    "name": "Loei (LOE)",
    "country": "Thái Lan",
    "keywords": "LOE LOE Loei Loei Sân bay Loei Loei Airport Thái Lan Thailand TH"
  },
  {
    "id": "LOP",
    "name": "Lombok (LOP)",
    "country": "Indonesia",
    "keywords": "LOP LOP Lombok Lombok Sân bay quốc tế Lombok Lombok International Airport Indonesia Indonesia ID"
  },
  {
    "id": "LFW",
    "name": "Lome (LFW)",
    "country": "Togo",
    "keywords": "LFW LFW Lome Lome Sân bay Lomé-Tokoin Lomé-Tokoin Airport Togo Togo TG"
  },
  {
    "id": "BQH",
    "name": "London (BQH)",
    "country": "Anh quốc",
    "keywords": "BQH BQH London London Sân bay London Biggin Hill London Biggin Hill Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YXU",
    "name": "London (YXU)",
    "country": "Canada",
    "keywords": "YXU YXU London London Sân bay London London International Airport Canada Canada CA"
  },
  {
    "id": "LDB",
    "name": "Londrina (LDB)",
    "country": "Bra xin",
    "keywords": "LDB LDB Londrina Londrina Sân bay Londrina Londrina Airport Bra xin Brazil BR"
  },
  {
    "id": "LGB",
    "name": "Long Beach (LGB)",
    "country": "Hoa kỳ",
    "keywords": "LGB LGB Long Beach Long Beach Sân bay Long Beach Long Beach Airport Hoa kỳ United States US"
  },
  {
    "id": "LGI",
    "name": "Long Island (LGI)",
    "country": "Bahamas",
    "keywords": "LGI LGI Long Island Long Island Sân bay Deadman's Cay Deadman's Cay Airport Bahamas Bahamas BS"
  },
  {
    "id": "LGL",
    "name": "Long Lellang (LGL)",
    "country": "Malaysia",
    "keywords": "LGL LGL Long Lellang Long Lellang Sân bay Long Lellang Long Lellang Airport Malaysia Malaysia MY"
  },
  {
    "id": "LTH",
    "name": "Long Thành (LTH)",
    "country": "Việt Nam",
    "keywords": "long thanh lth san bay long thanh"
  },
  {
    "id": "LCX",
    "name": "Long Yên (LCX)",
    "country": "Trung Quốc",
    "keywords": "LCX LCX Long Yên Longyan Sân bay Longyan Longyan Airport Trung Quốc China CN"
  },
  {
    "id": "LRE",
    "name": "Longreach (LRE)",
    "country": "Úc",
    "keywords": "LRE LRE Longreach Longreach Sân bay Longreach Longreach Airport Úc Australia AU"
  },
  {
    "id": "GGG",
    "name": "Longview (GGG)",
    "country": "Hoa kỳ",
    "keywords": "GGG GGG Longview Longview Sân bay East Texas Regional East Texas Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "LYR",
    "name": "Longyearbyen (LYR)",
    "country": "Na Uy",
    "keywords": "LYR LYR Longyearbyen Longyearbyen Sân bay Svalbard Svalbard Airport, Longyear Na Uy Norway NO"
  },
  {
    "id": "LPS",
    "name": "Lopez Island (LPS)",
    "country": "Hoa kỳ",
    "keywords": "LPS LPS Lopez Island Lopez Island Fishermans Bay/LPS Seaplane Base Fishermans Bay/LPS Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "LDH",
    "name": "Lord Howe Island (LDH)",
    "country": "Úc",
    "keywords": "LDH LDH Lord Howe Island Lord Howe Island Sân bay Lord Howe Island Lord Howe Island Airport Úc Australia AU"
  },
  {
    "id": "LTO",
    "name": "Loreto (LTO)",
    "country": "Mê hi cô",
    "keywords": "LTO LTO Loreto Loreto Sân bay Loreto Loreto International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LRT",
    "name": "Lorient (LRT)",
    "country": "Pháp",
    "keywords": "LRT LRT Lorient Lorient Sân bay Lorient South Brittany Lorient South Brittany Airport Pháp France FR"
  },
  {
    "id": "LAM",
    "name": "Los Alamos (LAM)",
    "country": "Hoa kỳ",
    "keywords": "LAM LAM Los Alamos Los Alamos Sân bay Los Alamos County Los Alamos County Airport Hoa kỳ United States US"
  },
  {
    "id": "JBP",
    "name": "Los Angeles (JBP)",
    "country": "Hoa kỳ",
    "keywords": "JBP JBP Los Angeles Los Angeles Commerce Business Park Heliport Commerce Business Park Heliport Hoa kỳ United States US"
  },
  {
    "id": "LAX",
    "name": "Los Angeles (LAX)",
    "country": "Hoa kỳ",
    "keywords": "LAX LAX Los Angeles Los Angeles Tất cả các sân bay All airports Hoa kỳ United States US"
  },
  {
    "id": "VNY",
    "name": "Los Angeles (VNY)",
    "country": "Hoa kỳ",
    "keywords": "VNY LAX Los Angeles Los Angeles Sân bay Van Nuys Van Nuys Airport Hoa kỳ United States US"
  },
  {
    "id": "LMM",
    "name": "Los Mochis (LMM)",
    "country": "Mê hi cô",
    "keywords": "LMM LMM Los Mochis Los Mochis Sân bay Federal del Valle del Fuerte Federal del Valle del Fuerte International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LOU",
    "name": "Louisville (LOU)",
    "country": "Hoa kỳ",
    "keywords": "LOU LOU Louisville Louisville Bowman Field Bowman Field Hoa kỳ United States US"
  },
  {
    "id": "SDF",
    "name": "Louisville (SDF)",
    "country": "Cayman Islands",
    "keywords": "SDF SDF Louisville Louisville Sân bay Louisville Louisville International Airport Cayman Islands Cayman Islands KY"
  },
  {
    "id": "LDE",
    "name": "Lourdes (LDE)",
    "country": "Pháp",
    "keywords": "LDE LDE Lourdes Lourdes Sân bay Tarbes - Lourdes Pyrenees Tarbes - Lourdes Pyrenees Airport Pháp France FR"
  },
  {
    "id": "LUM",
    "name": "Lô Tịch (LUM)",
    "country": "Trung Quốc",
    "keywords": "LUM LUM Lô Tịch Luxi Sân bay Luxi Luxi Airport Trung Quốc China CN"
  },
  {
    "id": "LUX",
    "name": "Lu-xăm-bua (LUX)",
    "country": "Lúc xăm bua",
    "keywords": "LUX LUX Lu-xăm-bua Luxembourg Sân bay Luxembourg Findel Luxembourg Findel Airport Lúc xăm bua Luxembourg LU"
  },
  {
    "id": "LAD",
    "name": "Luanda (LAD)",
    "country": "Ăng gô la",
    "keywords": "LAD LAD Luanda Luanda Sân bay Quatro de Fevereiro Quatro de Fevereiro Airport Ăng gô la Angola AO"
  },
  {
    "id": "LCY",
    "name": "Luân Đôn (LCY)",
    "country": "Anh quốc",
    "keywords": "LCY LON Luân Đôn London Sân bay London City London City Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LGW",
    "name": "Luân Đôn (LGW)",
    "country": "Anh quốc",
    "keywords": "LGW LON Luân Đôn London Sân bay London Gatwick London Gatwick Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LHR",
    "name": "Luân Đôn (LHR)",
    "country": "Anh quốc",
    "keywords": "LHR LON Luân Đôn London Sân bay London Heathrow London Heathrow Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LON",
    "name": "Luân Đôn (LON)",
    "country": "Anh quốc",
    "keywords": "LON LON Luân Đôn London Tất cả các sân bay All Airports Anh quốc United Kingdom GB"
  },
  {
    "id": "LTN",
    "name": "Luân Đôn (LTN)",
    "country": "Anh quốc",
    "keywords": "LTN LON Luân Đôn London Sân bay London Luton London Luton Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "STN",
    "name": "Luân Đôn (STN)",
    "country": "Anh quốc",
    "keywords": "STN LON Luân Đôn London Sân bay London Stansted London Stansted Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "LBB",
    "name": "Lubbock (LBB)",
    "country": "Hoa kỳ",
    "keywords": "LBB LBB Lubbock Lubbock Sân bay Lubbock Preston Smith Lubbock Preston Smith International Airport Hoa kỳ United States US"
  },
  {
    "id": "FBM",
    "name": "Lubumbashi (FBM)",
    "country": "Congo",
    "keywords": "FBM FBM Lubumbashi Lubumbashi Sân bay Lubumbashi Lubumbashi International Airport Congo Congo CG"
  },
  {
    "id": "LKO",
    "name": "Lucknow (LKO)",
    "country": "Ấn độ",
    "keywords": "LKO LKO Lucknow Lucknow Sân bay Amausi Amausi Airport Ấn độ India IN"
  },
  {
    "id": "LUD",
    "name": "Luderitz (LUD)",
    "country": "Namibia",
    "keywords": "LUD LUD Luderitz Luderitz Sân bay Luderitz Luderitz Airport Namibia Namibia NA"
  },
  {
    "id": "LUH",
    "name": "Ludhiana (LUH)",
    "country": "Ấn độ",
    "keywords": "LUH LUH Ludhiana Ludhiana Sân bay Ludhiana Ludhiana Airport Ấn độ India IN"
  },
  {
    "id": "LBC",
    "name": "Luebeck (LBC)",
    "country": "Đức",
    "keywords": "LBC LBC Luebeck Luebeck Sân bay Lübeck Lübeck Airport Đức Germany DE"
  },
  {
    "id": "LUG",
    "name": "Lugano (LUG)",
    "country": "Thụy sỹ",
    "keywords": "LUG LUG Lugano Lugano Sân bay Lugano Lugano Airport Thụy sỹ Switzerland CH"
  },
  {
    "id": "VSG",
    "name": "Lugansk (VSG)",
    "country": "U-krai-na",
    "keywords": "VSG VSG Lugansk Lugansk Sân bay Luhansk Luhansk Airport U-krai-na Ukraine UA"
  },
  {
    "id": "LLA",
    "name": "Lulea (LLA)",
    "country": "Thụy điển",
    "keywords": "LLA LLA Lulea Lulea Sân bay Luleå Luleå Airport Thụy điển Sweden SE"
  },
  {
    "id": "LLV",
    "name": "Luliang (LLV)",
    "country": "Trung Quốc",
    "keywords": "LLV LLV Luliang Luliang Sân bay Luliang Luliang Airport Trung Quốc China CN"
  },
  {
    "id": "LPQ",
    "name": "Luông pra băng (LPQ)",
    "country": "Lào",
    "keywords": "LPQ LPQ Luông pra băng Luang Prabang Sân bay Luang Prabang Luang Prabang International Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "LUN",
    "name": "Lusaka (LUN)",
    "country": "Zambia",
    "keywords": "LUN LUN Lusaka Lusaka Sân bay Lusaka Lusaka International Airport Zambia Zambia ZM"
  },
  {
    "id": "LXR",
    "name": "Luxor (LXR)",
    "country": "Ai Cập",
    "keywords": "LXR LXR Luxor Luxor Sân bay Luxor Luxor International Airport Ai Cập Egypt EG"
  },
  {
    "id": "LZO",
    "name": "Lư Châu (LZO)",
    "country": "Trung Quốc",
    "keywords": "LZO LZO Lư Châu Luzhou Sân bay Luzhou Lantian Luzhou Lantian Airport Trung Quốc China CN"
  },
  {
    "id": "LWO",
    "name": "Lvov (LWO)",
    "country": "U-krai-na",
    "keywords": "LWO LWO Lvov Lvov Sân bay Lviv Danylo Halytskyi Lviv Danylo Halytskyi International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "HZH",
    "name": "Lý Bình (HZH)",
    "country": "Trung Quốc",
    "keywords": "HZH HZH Lý Bình Liping City Sân bay Liping City Liping City Airport Trung Quốc China CN"
  },
  {
    "id": "LJG",
    "name": "Ly Giang (LJG)",
    "country": "Trung Quốc",
    "keywords": "LJG LJG Ly Giang LIJIANG Sân bay Lijiang LIJIANG Trung Quốc China CN"
  },
  {
    "id": "LYC",
    "name": "Lycksele (LYC)",
    "country": "Thụy điển",
    "keywords": "LYC LYC Lycksele Lycksele Sân bay Lycksele Lycksele Airport Thụy điển Sweden SE"
  },
  {
    "id": "LYH",
    "name": "Lynchburg (LYH)",
    "country": "Hoa kỳ",
    "keywords": "LYH LYH Lynchburg Lynchburg Sân bay Lynchburg Regional Lynchburg Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YYL",
    "name": "Lynn Lake (YYL)",
    "country": "Canada",
    "keywords": "YYL YYL Lynn Lake Lynn Lake Sân bay Lynn Lake Lynn Lake Airport Canada Canada CA"
  },
  {
    "id": "LYN",
    "name": "Lyon (LYN)",
    "country": "Pháp",
    "keywords": "LYN LYS Lyon Lyon Sân bay Lyon Bron Lyon Bron Airport Pháp France FR"
  },
  {
    "id": "LYS",
    "name": "Lyon (LYS)",
    "country": "Pháp",
    "keywords": "LYS LYS Lyon Lyon Sân bay Lyon-Saint Exupéry Lyon-Saint Exupéry Airport Pháp France FR"
  },
  {
    "id": "XYD",
    "name": "Lyon (XYD)",
    "country": "Pháp",
    "keywords": "XYD LYS Lyon Lyon Trạm xe lửa Lyon Part-Dieu Lyon Part-Dieu Railway Station Pháp France FR"
  },
  {
    "id": "MST",
    "name": "Maastricht (MST)",
    "country": "Hà Lan",
    "keywords": "MST MST Maastricht Maastricht Sân bay Maastricht Aachen Maastricht Aachen Airport Hà Lan Netherlands NL"
  },
  {
    "id": "MRS",
    "name": "Mác-xây (MRS)",
    "country": "Pháp",
    "keywords": "MRS MRS Mác-xây Marseille Sân bay Marseille Provence Marseille Provence Airport Pháp France FR"
  },
  {
    "id": "XRF",
    "name": "Mác-xây (XRF)",
    "country": "Pháp",
    "keywords": "XRF MRS Mác-xây Marseille Marseille Railway Station Marseille Railway Station Pháp France FR"
  },
  {
    "id": "MCP",
    "name": "Macapa (MCP)",
    "country": "Bra xin",
    "keywords": "MCP MCP Macapa Macapa Sân bay Macapá Macapá International Airport Bra xin Brazil BR"
  },
  {
    "id": "MFM",
    "name": "Macau (MFM)",
    "country": "Macau",
    "keywords": "MFM MFM Macau Macau Sân bay Macau Macau International Airport Macau Macau MO"
  },
  {
    "id": "MCZ",
    "name": "Maceio (MCZ)",
    "country": "Bra xin",
    "keywords": "MCZ MCZ Maceio Maceio Sân bay Zumbi dos Palmares Zumbi dos Palmares Airport Bra xin Brazil BR"
  },
  {
    "id": "MKY",
    "name": "Mackay (MKY)",
    "country": "Úc",
    "keywords": "MKY MKY Mackay Mackay Sân bay Mackay Mackay Airport Úc Australia AU"
  },
  {
    "id": "MCN",
    "name": "Macon (MCN)",
    "country": "Hoa kỳ",
    "keywords": "MCN MCN Macon Macon Sân bay Middle Georgia Regional Middle Georgia Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MAG",
    "name": "Madang (MAG)",
    "country": "Papua niu ghi nê",
    "keywords": "MAG MAG Madang Madang Sân bay Madang Madang Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "FNC",
    "name": "Madeira (FNC)",
    "country": "Bồ đào nha",
    "keywords": "FNC FNC Madeira Madeira Sân bay Madeira Madeira Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "MED",
    "name": "Madinah (MED)",
    "country": "Ả rập xê út",
    "keywords": "MED MED Madinah Madinah Sân bay Prince Mohammad Bin Abdulaziz Prince Mohammad Bin Abdulaziz Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "MSN",
    "name": "Madison (MSN)",
    "country": "Hoa kỳ",
    "keywords": "MSN MSN Madison Madison Sân bay Dane County Regional Dane County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MAD",
    "name": "Madrid (MAD)",
    "country": "Tây Ban Nha",
    "keywords": "MAD MAD Madrid Madrid Sân bay Madrid–Barajas Madrid–Barajas Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "XOC",
    "name": "Madrid (XOC)",
    "country": "Tây Ban Nha",
    "keywords": "XOC MAD Madrid Madrid Sân bay Madrid Atocha Rail st Madrid Atocha Rail st Tây Ban Nha Spain ES"
  },
  {
    "id": "IXM",
    "name": "Madurai (IXM)",
    "country": "Ấn độ",
    "keywords": "IXM IXM Madurai Madurai Sân bay Madurai Madurai Airport Ấn độ India IN"
  },
  {
    "id": "HGN",
    "name": "Mae Hongson (HGN)",
    "country": "Thái Lan",
    "keywords": "HGN HGN Mae Hongson Mae Hongson Sân bay Mae Hong Son Mae Hong Son Airport Thái Lan Thailand TH"
  },
  {
    "id": "MAQ",
    "name": "Mae Sot (MAQ)",
    "country": "Thái Lan",
    "keywords": "MAQ MAQ Mae Sot Mae Sot Sân bay Mae Sot Mae Sot Airport Thái Lan Thailand TH"
  },
  {
    "id": "GDX",
    "name": "Magadan (GDX)",
    "country": "Nga",
    "keywords": "GDX GDX Magadan Magadan Sân bay Sokol Sokol Airport Nga Russia RU"
  },
  {
    "id": "SEZ",
    "name": "Mahe Island (SEZ)",
    "country": "Seychelles Islands",
    "keywords": "SEZ SEZ Mahe Island Mahe Island Sân bay Seychelles Seychelles International Airport Seychelles Islands Seychelles Islands SC"
  },
  {
    "id": "MXZ",
    "name": "Mai Huyện (MXZ)",
    "country": "Trung Quốc",
    "keywords": "MXZ MXZ Mai Huyện Meixian Sân bay Meixian Meixian Airport Trung Quốc China CN"
  },
  {
    "id": "MMO",
    "name": "Maio (MMO)",
    "country": "Cape Verde",
    "keywords": "MMO MMO Maio Maio Sân bay Maio Maio Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "MJN",
    "name": "Majunga (MJN)",
    "country": "Madagascar",
    "keywords": "MJN MJN Majunga Majunga Sân bay Amborovy Amborovy Airport Madagascar Madagascar MG"
  },
  {
    "id": "MAJ",
    "name": "Majuro (MAJ)",
    "country": "Marshall Islands",
    "keywords": "MAJ MAJ Majuro Majuro Sân bay Marshall Islands Marshall Islands International Airport Marshall Islands MARSHALL ISLANDS MH"
  },
  {
    "id": "YMN",
    "name": "Makkovik (YMN)",
    "country": "Canada",
    "keywords": "YMN YMN Makkovik Makkovik Sân bay Makkovik Makkovik Airport Canada Canada CA"
  },
  {
    "id": "SSG",
    "name": "Malabo (SSG)",
    "country": "Equatorial Guinea",
    "keywords": "SSG SSG Malabo Malabo Sân bay Malabo Malabo International Airport Equatorial Guinea Equatorial Guinea GQ"
  },
  {
    "id": "AGP",
    "name": "Malaga (AGP)",
    "country": "Tây Ban Nha",
    "keywords": "AGP AGP Malaga Malaga Sân bay Pablo Ruiz Picasso Pablo Ruiz Picasso Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "MLX",
    "name": "Malatya (MLX)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "MLX MLX Malatya Malatya Sân bay Erhac Erhac Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "MLE",
    "name": "Male (MLE)",
    "country": "Maldives",
    "keywords": "MLE MLE Male Male Sân bay Malé Male International Airport Maldives Maldives MV"
  },
  {
    "id": "MYD",
    "name": "Malindi (MYD)",
    "country": "Kenya",
    "keywords": "MYD MYD Malindi Malindi Sân bay Malindi Malindi Airport Kenya Kenya KE"
  },
  {
    "id": "PMI",
    "name": "Mallorca (PMI)",
    "country": "Tây Ban Nha",
    "keywords": "PMI PMI Mallorca Mallorca Sân bay Palma de Mallorca Palma de Mallorca Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "HMA",
    "name": "Malmo (HMA)",
    "country": "Thụy điển",
    "keywords": "HMA MMA Malmo Malmo Sân bay Khanty-Mansiysk Khanty-Mansiysk Airport Thụy điển Sweden SE"
  },
  {
    "id": "JMM",
    "name": "Malmo (JMM)",
    "country": "Thụy điển",
    "keywords": "JMM JMM Malmo Malmo Malmö Harbour Heliport Malmö Harbour Heliport Thụy điển Sweden SE"
  },
  {
    "id": "MMA",
    "name": "Malmo (MMA)",
    "country": "Thụy điển",
    "keywords": "MMA MMA Malmo Malmo Tất cả các sân bay All Airports Thụy điển Sweden SE"
  },
  {
    "id": "MMX",
    "name": "Malmo (MMX)",
    "country": "Thụy điển",
    "keywords": "MMX MMA Malmo Malmo Sân bay Malmö-Sturup Malmö-Sturup Airport Thụy điển Sweden SE"
  },
  {
    "id": "MLA",
    "name": "Malta (MLA)",
    "country": "Malta",
    "keywords": "MLA MLA Malta Malta Sân bay Malta Malta International Airport Malta Malta MT"
  },
  {
    "id": "MMH",
    "name": "Mammoth Lakes (MMH)",
    "country": "Hoa kỳ",
    "keywords": "MMH MMH Mammoth Lakes Mammoth Lakes Sân bay Mammoth Yosemite Mammoth Yosemite Airport Hoa kỳ United States US"
  },
  {
    "id": "MGA",
    "name": "Managua (MGA)",
    "country": "Nicaragua",
    "keywords": "MGA MGA Managua Managua Sân bay Augusto C. Sandino Augusto C. Sandino International Airport Nicaragua Nicaragua NI"
  },
  {
    "id": "MAO",
    "name": "Manaus (MAO)",
    "country": "Bra xin",
    "keywords": "MAO MAO Manaus Manaus Sân bay Eduardo Gomes Eduardo Gomes International Airport Bra xin Brazil BR"
  },
  {
    "id": "MAN",
    "name": "Manchester (MAN)",
    "country": "Anh quốc",
    "keywords": "MAN MAN Manchester Manchester Sân bay Manchester Manchester Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "MHT",
    "name": "Manchester (MHT)",
    "country": "Hoa kỳ",
    "keywords": "MHT MHT Manchester Manchester Sân bay Manchester-Boston Regional Manchester-Boston Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MDL",
    "name": "Mandalay (MDL)",
    "country": "Myanmar",
    "keywords": "MDL MDL Mandalay Mandalay Sân bay Mandalay Mandalay International Airport Myanmar Myanmar MM"
  },
  {
    "id": "IXE",
    "name": "Mangalore (IXE)",
    "country": "Ấn độ",
    "keywords": "IXE IXE Mangalore Mangalore Sân bay Mangalore Mangalore International Airport Ấn độ India IN"
  },
  {
    "id": "MHK",
    "name": "Manhattan (MHK)",
    "country": "Hoa kỳ",
    "keywords": "MHK MHK Manhattan Manhattan Sân bay Manhattan Regional Manhattan Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "JSU",
    "name": "Maniitsoq (JSU)",
    "country": "Greenland",
    "keywords": "JSU JSU Maniitsoq Maniitsoq Sân bay Maniitsoq Maniitsoq Airport Greenland Greenland GL"
  },
  {
    "id": "MNL",
    "name": "Manila (MNL)",
    "country": "Philippines",
    "keywords": "MNL MNL Manila Manila Sân bay Ninoy Aquino Ninoy Aquino International Airport Philippines Philippines PH"
  },
  {
    "id": "MBL",
    "name": "Manistee (MBL)",
    "country": "Hoa kỳ",
    "keywords": "MBL MBL Manistee Manistee Sân bay Manistee County-Blacker Manistee County-Blacker Airport Hoa kỳ United States US"
  },
  {
    "id": "MZL",
    "name": "Manizales (MZL)",
    "country": "Colombia",
    "keywords": "MZL MZL Manizales Manizales Sân bay La Nubia La Nubia Airport Colombia Colombia CO"
  },
  {
    "id": "MSE",
    "name": "Manston (MSE)",
    "country": "Anh quốc",
    "keywords": "MSE MSE Manston Manston Sân bay Kent Kent International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "MEC",
    "name": "Manta (MEC)",
    "country": "Ecuador",
    "keywords": "MEC MEC Manta Manta Sân bay Eloy Alfaro Eloy Alfaro International Airport Ecuador Ecuador EC"
  },
  {
    "id": "MAS",
    "name": "Manus Island (MAS)",
    "country": "Papua niu ghi nê",
    "keywords": "MAS MAS Manus Island Manus Island Sân bay Momote Momote Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "MZO",
    "name": "Manzanillo (MZO)",
    "country": "Cuba",
    "keywords": "MZO MZO Manzanillo Manzanillo Sân bay Sierra Maestra Sierra Maestra Airport Cuba Cuba CU"
  },
  {
    "id": "ZLO",
    "name": "Manzanillo (ZLO)",
    "country": "Mê hi cô",
    "keywords": "ZLO ZLO Manzanillo Manzanillo Sân bay Playa de Oro Playa de Oro International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "NZH",
    "name": "Manzhouli Xijiao (NZH)",
    "country": "Trung Quốc",
    "keywords": "NZH NZH Manzhouli Xijiao Manzhouli Xijiao Sân bay Manzhouli Xijiao Manzhouli Xijiao Airport Trung Quốc China CN"
  },
  {
    "id": "MTS",
    "name": "Manzini (MTS)",
    "country": "Eswatini",
    "keywords": "MTS MTS Manzini Manzini Sân bay Matsapha Matsapha Airport Eswatini Eswatini SZ"
  },
  {
    "id": "MPM",
    "name": "Maputo (MPM)",
    "country": "Mozambique",
    "keywords": "MPM MPM Maputo Maputo Sân bay Maputo Maputo International Airport Mozambique Mozambique MZ"
  },
  {
    "id": "MDQ",
    "name": "Mar Del Plata (MDQ)",
    "country": "Ác Hen Tina",
    "keywords": "MDQ MDQ Mar Del Plata Mar Del Plata Sân bay Ástor Piazzola Ástor Piazzola International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "MRE",
    "name": "Mara Lodges (MRE)",
    "country": "Kenya",
    "keywords": "MRE MRE Mara Lodges Mara Lodges Sân bay Mara Serena Mara Serena Airport Kenya Kenya KE"
  },
  {
    "id": "MAB",
    "name": "Maraba (MAB)",
    "country": "Bra xin",
    "keywords": "MAB MAB Maraba Maraba Sân bay Marabá Marabá Airport Bra xin Brazil BR"
  },
  {
    "id": "MAR",
    "name": "Maracaibo (MAR)",
    "country": "Vê nê du ê la",
    "keywords": "MAR MAR Maracaibo Maracaibo Sân bay La Chinita La Chinita International Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "MQM",
    "name": "Mardin (MQM)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "MQM MQM Mardin Mardin Sân bay Mardin Mardin Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "MHQ",
    "name": "Mariehamn (MHQ)",
    "country": "Phần lan",
    "keywords": "MHQ MHQ Mariehamn Mariehamn Sân bay Mariehamn Mariehamn Airport Phần lan Finland FI"
  },
  {
    "id": "MGF",
    "name": "Maringa (MGF)",
    "country": "Bra xin",
    "keywords": "MGF MGF Maringa Maringa Sân bay Maringá - Sílvio Name Júnior Regional Maringá - Sílvio Name Júnior Regional Airport Bra xin Brazil BR"
  },
  {
    "id": "MWA",
    "name": "Marion (MWA)",
    "country": "Hoa kỳ",
    "keywords": "MWA MWA Marion Marion Sân bay Williamson County Regional Williamson County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MCY",
    "name": "Maroochydore (MCY)",
    "country": "Úc",
    "keywords": "MCY MCY Maroochydore Maroochydore Sân bay Sunshine Coast Sunshine Coast Airport Úc Australia AU"
  },
  {
    "id": "MVR",
    "name": "Maroua (MVR)",
    "country": "Cộng hòa Cameroon",
    "keywords": "MVR MVR Maroua Maroua Sân bay Salak Salak Airport Cộng hòa Cameroon United Republic Of Cameroon CM"
  },
  {
    "id": "MQT",
    "name": "Marquette (MQT)",
    "country": "Hoa kỳ",
    "keywords": "MQT MQT Marquette Marquette Sân bay Sawyer Sawyer International Airport Hoa kỳ United States US"
  },
  {
    "id": "RAK",
    "name": "Marrakech (RAK)",
    "country": "Ma rốc",
    "keywords": "RAK RAK Marrakech Marrakech Sân bay Menara Menara International Airport Ma rốc Morocco MA"
  },
  {
    "id": "RMF",
    "name": "Marsa Alam (RMF)",
    "country": "Ai Cập",
    "keywords": "RMF RMF Marsa Alam Marsa Alam Marsa Alam Marsa Alam Ai Cập Egypt EG"
  },
  {
    "id": "MHH",
    "name": "Marsh Harbour (MHH)",
    "country": "Bahamas",
    "keywords": "MHH MHH Marsh Harbour Marsh Harbour Sân bay Marsh Harbour Marsh Harbour Airport Bahamas Bahamas BS"
  },
  {
    "id": "MVY",
    "name": "Martha S Vineyard (MVY)",
    "country": "Hoa kỳ",
    "keywords": "MVY MVY Martha S Vineyard Martha S Vineyard Sân bay Martha's Vineyard Martha's Vineyard Airport Hoa kỳ United States US"
  },
  {
    "id": "MUR",
    "name": "Marudi (MUR)",
    "country": "Malaysia",
    "keywords": "MUR MUR Marudi Marudi Sân bay Marudi Marudi Airport Malaysia Malaysia MY"
  },
  {
    "id": "YMH",
    "name": "MARY`S H (YMH)",
    "country": "Canada",
    "keywords": "YMH YMH MARY`S H MARY`S H Sân bay Mary's Harbour Mary's Harbour Airport Canada Canada CA"
  },
  {
    "id": "MSU",
    "name": "Maseru (MSU)",
    "country": "Lesotho",
    "keywords": "MSU MSU Maseru Maseru Sân bay Moshoeshoe Moshoeshoe International Airport Lesotho Lesotho LS"
  },
  {
    "id": "MHD",
    "name": "Mashad (MHD)",
    "country": "Iran",
    "keywords": "MHD MHD Mashad Mashad Sân bay Mashhad Mashhad International Airport Iran Iran IR"
  },
  {
    "id": "MCW",
    "name": "Mason City (MCW)",
    "country": "Hoa kỳ",
    "keywords": "MCW MCW Mason City Mason City Sân bay Mason City Municipal Mason City Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "MSS",
    "name": "Massena (MSS)",
    "country": "Hoa kỳ",
    "keywords": "MSS MSS Massena Massena Sân bay Massena Massena International Airport Hoa kỳ United States US"
  },
  {
    "id": "MRO",
    "name": "Masterton (MRO)",
    "country": "Niu di lân",
    "keywords": "MRO MRO Masterton Masterton Hood Aerodrome Hood Aerodrome Niu di lân New Zealand NZ"
  },
  {
    "id": "BKA",
    "name": "Mát-xờ-cơ-va (BKA)",
    "country": "Nga",
    "keywords": "BKA MOW Mát-xờ-cơ-va Moscow Sân bay Bykovo Bykovo Airport Nga Russia RU"
  },
  {
    "id": "DME",
    "name": "Mát-xờ-cơ-va (DME)",
    "country": "Nga",
    "keywords": "DME MOW Mát-xờ-cơ-va Moscow Sân bay Domodedovo Domodedovo International Airport Nga Russia RU"
  },
  {
    "id": "MOW",
    "name": "Mát-xờ-cơ-va (MOW)",
    "country": "Nga",
    "keywords": "MOW MOW Mát-xờ-cơ-va Moscow Tất cả các sân bay All Airports Nga Russia RU"
  },
  {
    "id": "SVO",
    "name": "Mát-xờ-cơ-va (SVO)",
    "country": "Nga",
    "keywords": "SVO MOW Mát-xờ-cơ-va Moscow Sân bay Sheremetyevo Sheremetyevo International Airport Nga Russia RU"
  },
  {
    "id": "VKO",
    "name": "Mát-xờ-cơ-va (VKO)",
    "country": "Nga",
    "keywords": "VKO MOW Mát-xờ-cơ-va Moscow Sân bay Vnukovo Vnukovo International Airport Nga Russia RU"
  },
  {
    "id": "MAM",
    "name": "Matamoros (MAM)",
    "country": "Mê hi cô",
    "keywords": "MAM MAM Matamoros Matamoros Sân bay General Servando Canales General Servando Canales International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MMJ",
    "name": "Matsumoto (MMJ)",
    "country": "Nhật bản",
    "keywords": "MMJ MMJ Matsumoto Matsumoto Sân bay Matsumoto Matsumoto Airport Nhật bản Japan JP"
  },
  {
    "id": "MYJ",
    "name": "Matsuyama (MYJ)",
    "country": "Nhật bản",
    "keywords": "MYJ MYJ Matsuyama Matsuyama Sân bay Matsuyama Matsuyama Airport Nhật bản Japan JP"
  },
  {
    "id": "MUN",
    "name": "Maturin (MUN)",
    "country": "Vê nê du ê la",
    "keywords": "MUN MUN Maturin Maturin Sân bay Maturín Maturín Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "OGG",
    "name": "Maui (OGG)",
    "country": "Hoa kỳ",
    "keywords": "OGG OGG Maui Maui Sân bay Kahului Kahului Airport Hoa kỳ United States US"
  },
  {
    "id": "MUB",
    "name": "Maun (MUB)",
    "country": "Botswana",
    "keywords": "MUB MUB Maun Maun Sân bay Maun Maun Airport Botswana Botswana BW"
  },
  {
    "id": "MRU",
    "name": "Mauritius (MRU)",
    "country": "Mauritius",
    "keywords": "MRU MRU Mauritius Mauritius Sân bay Sir Seewoosagur Ramgoolam Sir Seewoosagur Ramgoolam International Airport Mauritius Mauritius MU"
  },
  {
    "id": "MAZ",
    "name": "Mayaguez (MAZ)",
    "country": "Puerto Rico",
    "keywords": "MAZ MAZ Mayaguez Mayaguez Sân bay Eugenio Maria de Hostos Eugenio Maria de Hostos Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "MZT",
    "name": "Mazatlan (MZT)",
    "country": "Mê hi cô",
    "keywords": "MZT MZT Mazatlan Mazatlan Sân bay General Rafael Buelna General Rafael Buelna International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MDG",
    "name": "Mẫu Đơn Giang (MDG)",
    "country": "Trung Quốc",
    "keywords": "MDG MDG Mẫu Đơn Giang Mudanjiang Sân bay Mudanjiang Mudanjiang Airport Trung Quốc China CN"
  },
  {
    "id": "MFE",
    "name": "McAllen (MFE)",
    "country": "Hoa kỳ",
    "keywords": "MFE MFE McAllen McAllen Sân bay McAllen-Miller McAllen-Miller International Airport Hoa kỳ United States US"
  },
  {
    "id": "MCV",
    "name": "Mcarthur River (MCV)",
    "country": "Úc",
    "keywords": "MCV MCV Mcarthur River Mcarthur River Sân bay McArthur River McArthur River Airport Úc Australia AU"
  },
  {
    "id": "MCK",
    "name": "McCook (MCK)",
    "country": "Hoa kỳ",
    "keywords": "MCK MCK McCook McCook Sân bay McCook Regional McCook Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "KNO",
    "name": "Medan (KNO)",
    "country": "Indonesia",
    "keywords": "KNO MES Medan Medan Sân bay Medan Medan Airport Indonesia Indonesia ID"
  },
  {
    "id": "MES",
    "name": "Medan (MES)",
    "country": "Indonesia",
    "keywords": "MES MES Medan Medan Sân bay Polania Polania International Airport Indonesia Indonesia ID"
  },
  {
    "id": "EOH",
    "name": "Medellin (EOH)",
    "country": "Colombia",
    "keywords": "EOH MDE Medellin Medellin Sân bay Olaya Herrera Olaya Herrera Airport Colombia Colombia CO"
  },
  {
    "id": "MFR",
    "name": "Medford (MFR)",
    "country": "Hoa kỳ",
    "keywords": "MFR MFR Medford Medford Sân bay Rogue Valley International-Medford Rogue Valley International-Medford Airport Hoa kỳ United States US"
  },
  {
    "id": "YXH",
    "name": "Medicine Hat (YXH)",
    "country": "Canada",
    "keywords": "YXH YXH Medicine Hat Medicine Hat Sân bay Medicine Hat Medicine Hat Airport Canada Canada CA"
  },
  {
    "id": "MEH",
    "name": "Mehamn (MEH)",
    "country": "Na Uy",
    "keywords": "MEH MEH Mehamn Mehamn Sân bay Mehamn Mehamn Airport Na Uy Norway NO"
  },
  {
    "id": "MLB",
    "name": "Melbourne (MLB)",
    "country": "Hoa kỳ",
    "keywords": "MLB MLB Melbourne Melbourne Sân bay Melbourne Melbourne International Airport Hoa kỳ United States US"
  },
  {
    "id": "MLN",
    "name": "Melilla (MLN)",
    "country": "Tây Ban Nha",
    "keywords": "MLN MLN Melilla Melilla Sân bay Melilla Melilla Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "MMB",
    "name": "Memambetsu (MMB)",
    "country": "Nhật bản",
    "keywords": "MMB MMB Memambetsu Memambetsu Sân bay Memanbetsu Memanbetsu Airport Nhật bản Japan JP"
  },
  {
    "id": "MEM",
    "name": "Memphis (MEM)",
    "country": "Hoa kỳ",
    "keywords": "MEM MEM Memphis Memphis Sân bay Memphis Memphis International Airport Hoa kỳ United States US"
  },
  {
    "id": "NQA",
    "name": "Memphis (NQA)",
    "country": "Hoa kỳ",
    "keywords": "NQA MEM Memphis Memphis Millington Regional Jetport Millington Regional Jetport Hoa kỳ United States US"
  },
  {
    "id": "MEB",
    "name": "Men-bơn (MEB)",
    "country": "Úc",
    "keywords": "MEB MEL Men-bơn Melbourne Sân bay Essendon Essendon Airport Úc Australia AU"
  },
  {
    "id": "MEL",
    "name": "Men-bơn (MEL)",
    "country": "Úc",
    "keywords": "MEL MEL Men-bơn Melbourne Sân bay Melbourne Melbourne Airport Úc Australia AU"
  },
  {
    "id": "MDC",
    "name": "Menado (MDC)",
    "country": "Indonesia",
    "keywords": "MDC MDC Menado Menado Sân bay Sam Ratulangi Sam Ratulangi International Airport Indonesia Indonesia ID"
  },
  {
    "id": "MDU",
    "name": "Mendi (MDU)",
    "country": "Papua niu ghi nê",
    "keywords": "MDU MDU Mendi Mendi Sân bay Mendi Mendi Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "MDZ",
    "name": "Mendoza (MDZ)",
    "country": "Ác Hen Tina",
    "keywords": "MDZ MDZ Mendoza Mendoza Sân bay Gov. Francisco Gabrielli Gov. Francisco Gabrielli International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "MAH",
    "name": "Menorca (MAH)",
    "country": "Tây Ban Nha",
    "keywords": "MAH MAH Menorca Menorca Sân bay Mahon Mahon Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "MCE",
    "name": "Merced (MCE)",
    "country": "Hoa kỳ",
    "keywords": "MCE MCE Merced Merced Sân bay Merced Municipal Merced Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "MID",
    "name": "Merida (MID)",
    "country": "Mê hi cô",
    "keywords": "MID MID Merida Merida Sân bay Manuel Crescencio Rejón Manuel Crescencio Rejón International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MRD",
    "name": "Merida (MRD)",
    "country": "Vê nê du ê la",
    "keywords": "MRD MRD Merida Merida Sân bay Alberto Carnevalli Alberto Carnevalli Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "MEI",
    "name": "Meridian (MEI)",
    "country": "Hoa kỳ",
    "keywords": "MEI MEI Meridian Meridian Key Field Key Field Hoa kỳ United States US"
  },
  {
    "id": "MIM",
    "name": "Merimbula (MIM)",
    "country": "Úc",
    "keywords": "MIM MIM Merimbula Merimbula Sân bay Merimbula Merimbula Airport Úc Australia AU"
  },
  {
    "id": "MZM",
    "name": "Metz (MZM)",
    "country": "Pháp",
    "keywords": "MZM MZM Metz Metz Sân bay Frescaty Frescaty Airport Pháp France FR"
  },
  {
    "id": "ETZ",
    "name": "Metz Nancy (ETZ)",
    "country": "Pháp",
    "keywords": "ETZ ETZ Metz Nancy Metz Nancy Sân bay Metz-Nancy-Lorraine Metz-Nancy-Lorraine Airport Pháp France FR"
  },
  {
    "id": "MXL",
    "name": "Mexicali (MXL)",
    "country": "Mê hi cô",
    "keywords": "MXL MXL Mexicali Mexicali Sân bay General Rodolfo Sánchez Taboada General Rodolfo Sánchez Taboada International Airp Mê hi cô MEXICO MX"
  },
  {
    "id": "MEX",
    "name": "Mexico City (MEX)",
    "country": "Mê hi cô",
    "keywords": "MEX MEX Mexico City Mexico City Sân bay Mexico City Mexico City International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MIA",
    "name": "Miami (MIA)",
    "country": "Hoa kỳ",
    "keywords": "MIA MIA Miami Miami Sân bay quốc tế Miami Miami International Airport Hoa kỳ United States US"
  },
  {
    "id": "MPB",
    "name": "Miami (MPB)",
    "country": "Hoa kỳ",
    "keywords": "MPB MIA Miami Miami Miami Seaplane Base Miami Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "OPF",
    "name": "Miami (OPF)",
    "country": "Hoa kỳ",
    "keywords": "OPF MIA Miami Miami Sân bay Opa-locka Opa-locka Airport Hoa kỳ United States US"
  },
  {
    "id": "TMB",
    "name": "Miami (TMB)",
    "country": "Hoa kỳ",
    "keywords": "TMB MIA Miami Miami Sân bay Kendall-Tamiami Executive Kendall-Tamiami Executive Airport Hoa kỳ United States US"
  },
  {
    "id": "MAF",
    "name": "Midland (MAF)",
    "country": "Hoa kỳ",
    "keywords": "MAF MAF Midland Midland Sân bay Midland Midland International Airport Hoa kỳ United States US"
  },
  {
    "id": "MIG",
    "name": "Miên Dương (MIG)",
    "country": "Trung Quốc",
    "keywords": "MIG MIG Miên Dương Mian Yang Sân bay Mianyang Nanjiao Mianyang Nanjiao Airport Trung Quốc China CN"
  },
  {
    "id": "BGY",
    "name": "Milan (BGY)",
    "country": "Ý",
    "keywords": "BGY MIL Milan Milan Sân bay Orio al Serio Orio al Serio Airport Ý Italy IT"
  },
  {
    "id": "LIN",
    "name": "Milan (LIN)",
    "country": "Ý",
    "keywords": "LIN MIL Milan Milan Sân bay Linate Linate Airport Ý Italy IT"
  },
  {
    "id": "MIL",
    "name": "Milan (MIL)",
    "country": "Ý",
    "keywords": "MIL MIL Milan Milan Tất cả các sân bay All Airports Ý Italy IT"
  },
  {
    "id": "MXP",
    "name": "Milan (MXP)",
    "country": "Ý",
    "keywords": "MXP MIL Milan Milan Sân bay Malpensa Malpensa Airport Ý Italy IT"
  },
  {
    "id": "MQL",
    "name": "Mildura (MQL)",
    "country": "Úc",
    "keywords": "MQL MQL Mildura Mildura Sân bay Mildura Mildura Airport Úc Australia AU"
  },
  {
    "id": "MTT",
    "name": "Minatitlan (MTT)",
    "country": "Mê hi cô",
    "keywords": "MTT MTT Minatitlan Minatitlan Sân bay Minatitlán/Coatzacoalcos National Minatitlán/Coatzacoalcos National Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MRV",
    "name": "Mineralnye Vody (MRV)",
    "country": "Nga",
    "keywords": "MRV MRV Mineralnye Vody Mineralnye Vody Sân bay Mineralnye Vody Mineralnye Vody Airport Nga Russia RU"
  },
  {
    "id": "FCM",
    "name": "Minneapolis (FCM)",
    "country": "Hoa kỳ",
    "keywords": "FCM FCM Minneapolis Minneapolis Sân bay Flying Cloud Flying Cloud Airport Hoa kỳ United States US"
  },
  {
    "id": "MIC",
    "name": "Minneapolis (MIC)",
    "country": "Hoa kỳ",
    "keywords": "MIC MIC Minneapolis Minneapolis Sân bay Crystal Crystal Airport Hoa kỳ United States US"
  },
  {
    "id": "MSP",
    "name": "Minneapolis (MSP)",
    "country": "Hoa kỳ",
    "keywords": "MSP MSP Minneapolis Minneapolis Sân bay Minneapolis–Saint Paul Minneapolis–Saint Paul International Airport Hoa kỳ United States US"
  },
  {
    "id": "MOT",
    "name": "Minot (MOT)",
    "country": "Hoa kỳ",
    "keywords": "MOT MOT Minot Minot Sân bay Minot Minot International Airport Hoa kỳ United States US"
  },
  {
    "id": "MHP",
    "name": "Minsk (MHP)",
    "country": "Bê la rút",
    "keywords": "MHP MHP Minsk Minsk Sân bay Minsk-1 Minsk-1 Airport Bê la rút Belarus BY"
  },
  {
    "id": "MSQ",
    "name": "Minsk (MSQ)",
    "country": "Bê la rút",
    "keywords": "MSQ MSQ Minsk Minsk Sân bay Minsk Minsk International Airport Bê la rút Belarus BY"
  },
  {
    "id": "MYY",
    "name": "Miri (MYY)",
    "country": "Malaysia",
    "keywords": "MYY MYY Miri Miri Sân bay Miri Miri International Airport Malaysia Malaysia MY"
  },
  {
    "id": "MSJ",
    "name": "Misawa (MSJ)",
    "country": "Nhật bản",
    "keywords": "MSJ MSJ Misawa Misawa Misawa Air Base Misawa Air Base Nhật bản Japan JP"
  },
  {
    "id": "MSO",
    "name": "Missoula (MSO)",
    "country": "Hoa kỳ",
    "keywords": "MSO MSO Missoula Missoula Sân bay Missoula Missoula International Airport Hoa kỳ United States US"
  },
  {
    "id": "MMY",
    "name": "Miyako Jima (MMY)",
    "country": "Nhật bản",
    "keywords": "MMY MMY Miyako Jima Miyako Jima Sân bay Miyako Miyako Airport Nhật bản Japan JP"
  },
  {
    "id": "KMI",
    "name": "Miyazaki (KMI)",
    "country": "Nhật bản",
    "keywords": "KMI KMI Miyazaki Miyazaki Sân bay Miyazaki Miyazaki Airport Nhật bản Japan JP"
  },
  {
    "id": "MQN",
    "name": "Mo I Rana (MQN)",
    "country": "Na Uy",
    "keywords": "MQN MQN Mo I Rana Mo I Rana Sân bay Mo i Rana Mo i Rana Airport, Røssvoll Na Uy Norway NO"
  },
  {
    "id": "CNY",
    "name": "Moab (CNY)",
    "country": "Hoa kỳ",
    "keywords": "CNY CNY Moab Moab Canyonlands Field Canyonlands Field Hoa kỳ United States US"
  },
  {
    "id": "MOB",
    "name": "Mobile (MOB)",
    "country": "Hoa kỳ",
    "keywords": "MOB MOB Mobile Mobile Sân bay Mobile Regional Mobile Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MOD",
    "name": "Modesto (MOD)",
    "country": "Hoa kỳ",
    "keywords": "MOD MOD Modesto Modesto Sân bay Modesto City-County Modesto City-County Airport Hoa kỳ United States US"
  },
  {
    "id": "MGL",
    "name": "Moenchengladbach (MGL)",
    "country": "Đức",
    "keywords": "MGL MGL Moenchengladbach Moenchengladbach Sân bay Düsseldorf-Mönchengladbach Düsseldorf-Mönchengladbach Airport Đức Germany DE"
  },
  {
    "id": "OHE",
    "name": "Mohe Gulian (OHE)",
    "country": "Trung Quốc",
    "keywords": "OHE OHE Mohe Gulian Mohe Gulian Sân bay Mohe Gulian Mohe Gulian Airport Trung Quốc China CN"
  },
  {
    "id": "MJD",
    "name": "Mohenjodaro (MJD)",
    "country": "Pakistan",
    "keywords": "MJD MJD Mohenjodaro Mohenjodaro Sân bay Moenjodaro Moenjodaro Airport Pakistan Pakistan PK"
  },
  {
    "id": "MOL",
    "name": "Molde (MOL)",
    "country": "Na Uy",
    "keywords": "MOL MOL Molde Molde Sân bay Molde Molde Airport, Årø Na Uy Norway NO"
  },
  {
    "id": "MLI",
    "name": "Moline (MLI)",
    "country": "Hoa kỳ",
    "keywords": "MLI MLI Moline Moline Sân bay Quad City Quad City International Airport Hoa kỳ United States US"
  },
  {
    "id": "MBA",
    "name": "Mombasa (MBA)",
    "country": "Kenya",
    "keywords": "MBA MBA Mombasa Mombasa Sân bay Moi Moi International Airport Kenya Kenya KE"
  },
  {
    "id": "MIR",
    "name": "Monastir (MIR)",
    "country": "Tuy ni di",
    "keywords": "MIR MIR Monastir Monastir Sân bay Monastir Habib Bourguiba Monastir Habib Bourguiba International Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "MBE",
    "name": "Monbetsu, Hokkaido (MBE)",
    "country": "Nhật bản",
    "keywords": "MBE MBE Monbetsu, Hokkaido Monbetsu, Hokkaido Sân bay Monbetsu Monbetsu Airport Nhật bản Japan JP"
  },
  {
    "id": "YQM",
    "name": "Moncton (YQM)",
    "country": "Canada",
    "keywords": "YQM YQM Moncton Moncton Sân bay Greater Moncton Greater Moncton International Airport Canada Canada CA"
  },
  {
    "id": "MLU",
    "name": "Monroe (MLU)",
    "country": "Hoa kỳ",
    "keywords": "MLU MLU Monroe Monroe Sân bay Monroe Regional Monroe Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ROB",
    "name": "Monrovia (ROB)",
    "country": "Liberia",
    "keywords": "ROB MLW Monrovia Monrovia Sân bay Roberts Roberts International Airport Liberia Liberia LR"
  },
  {
    "id": "YYY",
    "name": "Mont Joli (YYY)",
    "country": "Canada",
    "keywords": "YYY YYY Mont Joli Mont Joli Sân bay Mont-Joli Mont-Joli Airport Canada Canada CA"
  },
  {
    "id": "MCM",
    "name": "Monte Carlo (MCM)",
    "country": "Monaco",
    "keywords": "MCM MCM Monte Carlo Monte Carlo Monaco Heliport Monaco Heliport Monaco MONACO MC"
  },
  {
    "id": "MBJ",
    "name": "Montego Bay (MBJ)",
    "country": "Jamaica",
    "keywords": "MBJ MBJ Montego Bay Montego Bay Sân bay Sangster Sangster International Airport Jamaica Jamaica JM"
  },
  {
    "id": "MRY",
    "name": "Monterey (MRY)",
    "country": "Hoa kỳ",
    "keywords": "MRY MRY Monterey Monterey Sân bay Monterey Regional Monterey Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MTR",
    "name": "Monteria (MTR)",
    "country": "Colombia",
    "keywords": "MTR MTR Monteria Monteria Sân bay Los Garzones Los Garzones Airport Colombia Colombia CO"
  },
  {
    "id": "MTY",
    "name": "Monterrey (MTY)",
    "country": "Mê hi cô",
    "keywords": "MTY MTY Monterrey Monterrey Sân bay General Mariano Escobedo General Mariano Escobedo International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MOC",
    "name": "Montes Claros (MOC)",
    "country": "Bra xin",
    "keywords": "MOC MOC Montes Claros Montes Claros Sân bay Montes Claros Montes Claros Airport Bra xin Brazil BR"
  },
  {
    "id": "MVD",
    "name": "Montevideo (MVD)",
    "country": "Uruguay",
    "keywords": "MVD MVD Montevideo Montevideo Sân bay Carrasco Gral. Cesáreo L. Berisso Carrasco Gral. Cesáreo L. Berisso International Ai Uruguay Uruguay UY"
  },
  {
    "id": "MGM",
    "name": "Montgomery (MGM)",
    "country": "Hoa kỳ",
    "keywords": "MGM MGM Montgomery Montgomery Sân bay Montgomery Regional Montgomery Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MPL",
    "name": "Montpellier (MPL)",
    "country": "Pháp",
    "keywords": "MPL MPL Montpellier Montpellier Sân bay Mediterranée Mediterranée Airport Pháp France FR"
  },
  {
    "id": "YHU",
    "name": "Montreal (YHU)",
    "country": "Canada",
    "keywords": "YHU YMQ Montreal Montreal Sân bay Montréal/Saint-Hubert Montréal/Saint-Hubert Airport Canada Canada CA"
  },
  {
    "id": "YMQ",
    "name": "Montreal (YMQ)",
    "country": "Canada",
    "keywords": "YMQ YMQ Montreal Montreal Tất cả các sân bay All Airports Canada Canada CA"
  },
  {
    "id": "YMX",
    "name": "Montreal (YMX)",
    "country": "Canada",
    "keywords": "YMX YMQ Montreal Montreal Sân bay Montréal-Mirabel Montréal-Mirabel International Airport Canada Canada CA"
  },
  {
    "id": "YUL",
    "name": "Montreal (YUL)",
    "country": "Canada",
    "keywords": "YUL YMQ Montreal Montreal Sân bay Montréal–Pierre Elliott Trudeau Montréal–Pierre Elliott Trudeau International Airp Canada Canada CA"
  },
  {
    "id": "MTJ",
    "name": "Montrose (MTJ)",
    "country": "Hoa kỳ",
    "keywords": "MTJ MTJ Montrose Montrose Sân bay Montrose Regional Montrose Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MOZ",
    "name": "Moorea (MOZ)",
    "country": "Niu di lân",
    "keywords": "MOZ MOZ Moorea Moorea Sân bay Moorea Moorea Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "YMO",
    "name": "Moosonee (YMO)",
    "country": "Canada",
    "keywords": "YMO YMO Moosonee Moosonee Sân bay Moosonee Moosonee Airport Canada Canada CA"
  },
  {
    "id": "MXX",
    "name": "Mora (MXX)",
    "country": "Thụy điển",
    "keywords": "MXX MXX Mora Mora Sân bay Mora Mora Airport Thụy điển Sweden SE"
  },
  {
    "id": "MOV",
    "name": "Moranbah (MOV)",
    "country": "Úc",
    "keywords": "MOV MOV Moranbah Moranbah Sân bay Moranbah Moranbah Airport Úc Australia AU"
  },
  {
    "id": "MRZ",
    "name": "Moree (MRZ)",
    "country": "Úc",
    "keywords": "MRZ MRZ Moree Moree Sân bay Moree Moree Airport Úc Australia AU"
  },
  {
    "id": "MLM",
    "name": "Morelia (MLM)",
    "country": "Mê hi cô",
    "keywords": "MLM MLM Morelia Morelia Sân bay General Francisco J. Mujica General Francisco J. Mujica International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "MGW",
    "name": "Morgantown (MGW)",
    "country": "Hoa kỳ",
    "keywords": "MGW MGW Morgantown Morgantown Sân bay Morgantown Municipal Morgantown Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "HNA",
    "name": "Morioka (HNA)",
    "country": "Nhật bản",
    "keywords": "HNA HNA Morioka Morioka Sân bay Hanamaki Hanamaki Airport Nhật bản Japan JP"
  },
  {
    "id": "HAH",
    "name": "Moroni (HAH)",
    "country": "Comoros",
    "keywords": "HAH YVA Moroni Moroni Sân bay Prince Said Ibrahim Prince Said Ibrahim International Airport Comoros Comoros KM"
  },
  {
    "id": "YVA",
    "name": "Moroni (YVA)",
    "country": "Comoros",
    "keywords": "YVA YVA Moroni Moroni Sân bay Iconi Iconi Airport Comoros Comoros KM"
  },
  {
    "id": "MMU",
    "name": "Morristown (MMU)",
    "country": "Hoa kỳ",
    "keywords": "MMU MMU Morristown Morristown Sân bay Morristown Municipal Morristown Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "MYA",
    "name": "Moruya (MYA)",
    "country": "Úc",
    "keywords": "MYA MYA Moruya Moruya Sân bay Moruya Moruya Airport Úc Australia AU"
  },
  {
    "id": "MJF",
    "name": "Mosjoen (MJF)",
    "country": "Na Uy",
    "keywords": "MJF MJF Mosjoen Mosjoen Sân bay Mosjøen Mosjøen Airport, Kjærstad Na Uy Norway NO"
  },
  {
    "id": "ISA",
    "name": "Mount Isa (ISA)",
    "country": "Úc",
    "keywords": "ISA ISA Mount Isa Mount Isa Sân bay Mount Isa Mount Isa Airport Úc Australia AU"
  },
  {
    "id": "MPN",
    "name": "Mount Pleasant (MPN)",
    "country": "Falkland Islands",
    "keywords": "MPN MPN Mount Pleasant Mount Pleasant RAF Mount Pleasant RAF Mount Pleasant Falkland Islands FALKLAND ISLANDS FK"
  },
  {
    "id": "MOU",
    "name": "Mountain Village (MOU)",
    "country": "Hoa kỳ",
    "keywords": "MOU MOU Mountain Village Mountain Village Sân bay Mountain Village Mountain Village Airport Hoa kỳ United States US"
  },
  {
    "id": "MGB",
    "name": "Mt Gambier (MGB)",
    "country": "Úc",
    "keywords": "MGB MGB Mt Gambier Mt Gambier Sân bay Mount Gambier Mount Gambier Airport Úc Australia AU"
  },
  {
    "id": "HGU",
    "name": "Mt Hagen (HGU)",
    "country": "Papua niu ghi nê",
    "keywords": "HGU HGU Mt Hagen Mt Hagen Sân bay Mount Hagen Mount Hagen Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "MYW",
    "name": "Mtwara (MYW)",
    "country": "Tanzania",
    "keywords": "MYW MYW Mtwara Mtwara Sân bay Mtwara Mtwara Airport Tanzania Tanzania TZ"
  },
  {
    "id": "AGB",
    "name": "Mu-ních (AGB)",
    "country": "Đức",
    "keywords": "AGB MUC Mu-ních Munich Sân bay Augsburg Augsburg Airport Đức Germany DE"
  },
  {
    "id": "MUC",
    "name": "Mu-ních (MUC)",
    "country": "Đức",
    "keywords": "MUC MUC Mu-ních Munich Sân bay Munich Munich Airport Đức Germany DE"
  },
  {
    "id": "DGE",
    "name": "Mudgee (DGE)",
    "country": "Úc",
    "keywords": "DGE DGE Mudgee Mudgee Sân bay Mudgee Mudgee Airport Úc Australia AU"
  },
  {
    "id": "FMO",
    "name": "Muenster (FMO)",
    "country": "Đức",
    "keywords": "FMO FMO Muenster Muenster Sân bay Münster Osnabrück Münster Osnabrück International Airport Đức Germany DE"
  },
  {
    "id": "MKM",
    "name": "Mukah (MKM)",
    "country": "Malaysia",
    "keywords": "MKM MKM Mukah Mukah Sân bay Mukah Mukah Airport Malaysia Malaysia MY"
  },
  {
    "id": "EAP",
    "name": "Mulhouse (EAP)",
    "country": "Thụy sỹ",
    "keywords": "EAP EAP Mulhouse Mulhouse Tất cả các sân bay All Airports Thụy sỹ Switzerland CH"
  },
  {
    "id": "MLH",
    "name": "Mulhouse (MLH)",
    "country": "Pháp",
    "keywords": "MLH MLH Mulhouse Mulhouse Sân bay Euro EuroAirport Basel-Mulhouse-Freiburg Pháp France FR"
  },
  {
    "id": "MUX",
    "name": "Multan (MUX)",
    "country": "Pakistan",
    "keywords": "MUX MUX Multan Multan Sân bay Multan Multan International Airport Pakistan Pakistan PK"
  },
  {
    "id": "MZV",
    "name": "Mulu, Sarawak (MZV)",
    "country": "Malaysia",
    "keywords": "MZV MZV Mulu, Sarawak Mulu, Sarawak Sân bay Mulu Mulu Airport Malaysia Malaysia MY"
  },
  {
    "id": "BOM",
    "name": "Mumbai (BOM)",
    "country": "Ấn độ",
    "keywords": "BOM BOM Mumbai Mumbai Sân bay Chhatrapati Shivaji Chhatrapati Shivaji International Airport Ấn độ India IN"
  },
  {
    "id": "MUA",
    "name": "Munda (MUA)",
    "country": "Solomon Islands",
    "keywords": "MUA MUA Munda Munda Sân bay Munda Munda Airport Solomon Islands Solomon Islands SB"
  },
  {
    "id": "MJV",
    "name": "Murcia (MJV)",
    "country": "Tây Ban Nha",
    "keywords": "MJV MJV Murcia Murcia Sân bay Murcia-San Javier Murcia-San Javier Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "MMK",
    "name": "Murmansk (MMK)",
    "country": "Nga",
    "keywords": "MMK MMK Murmansk Murmansk Sân bay Murmansk Murmansk Airport Nga Russia RU"
  },
  {
    "id": "MSR",
    "name": "Mus (MSR)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "MSR MSR Mus Mus Sân bay Mus Muş Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "MCT",
    "name": "Muscat (MCT)",
    "country": "Oman",
    "keywords": "MCT MCT Muscat Muscat Sân bay Muscat Muscat International Airport Oman Oman OM"
  },
  {
    "id": "MSL",
    "name": "Muscle Shoals (MSL)",
    "country": "Hoa kỳ",
    "keywords": "MSL MSL Muscle Shoals Muscle Shoals Sân bay Northwest Alabama Regional Northwest Alabama Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "MKG",
    "name": "Muskegon (MKG)",
    "country": "Hoa kỳ",
    "keywords": "MKG MKG Muskegon Muskegon Sân bay Muskegon County Muskegon County Airport Hoa kỳ United States US"
  },
  {
    "id": "MWZ",
    "name": "Mwanza (MWZ)",
    "country": "Tanzania",
    "keywords": "MWZ MWZ Mwanza Mwanza Sân bay Mwanza Mwanza Airport Tanzania Tanzania TZ"
  },
  {
    "id": "JMK",
    "name": "Mykonos (JMK)",
    "country": "Hy lạp",
    "keywords": "JMK JMK Mykonos Mykonos Sân bay Mykonos Island National Mykonos Island National Airport Hy lạp Greece GR"
  },
  {
    "id": "CRE",
    "name": "Myrtle Beach (CRE)",
    "country": "Hoa kỳ",
    "keywords": "CRE MYR Myrtle Beach Myrtle Beach Sân bay Grand Strand Grand Strand Airport Hoa kỳ United States US"
  },
  {
    "id": "MYQ",
    "name": "Mysore (MYQ)",
    "country": "Ấn độ",
    "keywords": "MYQ MYQ Mysore Mysore Sân bay Mysore Mysore Airport Ấn độ India IN"
  },
  {
    "id": "MJT",
    "name": "Mytilene (MJT)",
    "country": "Hy lạp",
    "keywords": "MJT MJT Mytilene Mytilene Sân bay Mytilene Mytilene International Airport Hy lạp Greece GR"
  },
  {
    "id": "NDJ",
    "name": "N Djamena (NDJ)",
    "country": "Chad",
    "keywords": "NDJ NDJ N Djamena N Djamena Sân bay N'Djamena N'Djamena International Airport Chad Chad TD"
  },
  {
    "id": "NLA",
    "name": "N Dola (NLA)",
    "country": "Zambia",
    "keywords": "NLA NLA N Dola N Dola Sân bay Ndola Ndola Airport Zambia Zambia ZM"
  },
  {
    "id": "NBC",
    "name": "Naberevnye Chelny (NBC)",
    "country": "Nga",
    "keywords": "NBC NBC Naberevnye Chelny Naberevnye Chelny Sân bay Begishevo Begishevo Airport Nga Russia RU"
  },
  {
    "id": "NAN",
    "name": "Nadi (NAN)",
    "country": "Fiji Islands",
    "keywords": "NAN NAN Nadi Nadi Sân bay Nadi Nadi International Airport Fiji Islands Fiji Islands FJ"
  },
  {
    "id": "NDR",
    "name": "Nador (NDR)",
    "country": "Ma rốc",
    "keywords": "NDR NDR Nador Nador Sân bay Arwi Arwi Airport Ma rốc Morocco MA"
  },
  {
    "id": "NGS",
    "name": "Nagasaki (NGS)",
    "country": "Nhật bản",
    "keywords": "NGS NGS Nagasaki Nagasaki Sân bay Nagasaki Nagasaki Airport Nhật bản Japan JP"
  },
  {
    "id": "NGO",
    "name": "Nagoya (NGO)",
    "country": "Nhật bản",
    "keywords": "NGO NGO Nagoya Nagoya Sân bay Chubu Centrair Chubu Centrair International Airport Nhật bản Japan JP"
  },
  {
    "id": "NKM",
    "name": "Nagoya (NKM)",
    "country": "Nhật bản",
    "keywords": "NKM NKM Nagoya Nagoya Nagoya Airfield Nagoya Airfield Nhật bản Japan JP"
  },
  {
    "id": "NAG",
    "name": "Nagpur (NAG)",
    "country": "Ấn độ",
    "keywords": "NAG NAG Nagpur Nagpur Sân bay Dr. Babasaheb Ambedkar Dr. Babasaheb Ambedkar International Airport Ấn độ India IN"
  },
  {
    "id": "YDP",
    "name": "Nain (YDP)",
    "country": "Canada",
    "keywords": "YDP YDP Nain Nain Sân bay Nain Nain Airport Canada Canada CA"
  },
  {
    "id": "NBO",
    "name": "Nairobi (NBO)",
    "country": "Kenya",
    "keywords": "NBO NBO Nairobi Nairobi Sân bay quốc tế Jomo Kenyatta Jomo Kenyatta International Airport Kenya Kenya KE"
  },
  {
    "id": "WIL",
    "name": "Nairobi (WIL)",
    "country": "Kenya",
    "keywords": "WIL NBO Nairobi Nairobi Sân bay Wilson Wilson Airport Kenya Kenya KE"
  },
  {
    "id": "SHB",
    "name": "Nakashibetsu (SHB)",
    "country": "Nhật bản",
    "keywords": "SHB SHB Nakashibetsu Nakashibetsu Sân bay Nakashibetsu Nakashibetsu Airport Nhật bản Japan JP"
  },
  {
    "id": "KOP",
    "name": "Nakhon Phanom (KOP)",
    "country": "Thái Lan",
    "keywords": "KOP KOP Nakhon Phanom Nakhon Phanom Sân bay Nakhon Phanom Nakhon Phanom Airport Thái Lan Thailand TH"
  },
  {
    "id": "NAL",
    "name": "Nalchik (NAL)",
    "country": "Nga",
    "keywords": "NAL NAL Nalchik Nalchik Sân bay Nalchik Nalchik Airport Nga Russia RU"
  },
  {
    "id": "NNY",
    "name": "Nam Dương (NNY)",
    "country": "Trung Quốc",
    "keywords": "NNY NNY Nam Dương NANYANG Sân bay Nanyang Jiangying Nanyang Jiangying Airport Trung Quốc China CN"
  },
  {
    "id": "NKG",
    "name": "Nam Kinh (NKG)",
    "country": "Trung Quốc",
    "keywords": "NKG NKG Nam Kinh Nanjing Sân bay Nanjing Lukou Nanjing Lukou International Airport Trung Quốc China CN"
  },
  {
    "id": "NNG",
    "name": "Nam Ninh (NNG)",
    "country": "Trung Quốc",
    "keywords": "NNG NNG Nam Ninh Nanning Sân bay Nanning Wuxu Nanning Wuxu International Airport Trung Quốc China CN"
  },
  {
    "id": "NTG",
    "name": "Nam Thông (NTG)",
    "country": "Trung Quốc",
    "keywords": "NTG NTG Nam Thông NANTONG Sân bay Nantong Xingdong Nantong Xingdong Airport Trung Quốc China CN"
  },
  {
    "id": "NAO",
    "name": "Nam Trọng (NAO)",
    "country": "Trung Quốc",
    "keywords": "NAO NAO Nam Trọng Nanchong Sân bay Nanchong Nanchong Airport Trung Quốc China CN"
  },
  {
    "id": "KHN",
    "name": "Nam Xương (KHN)",
    "country": "Trung Quốc",
    "keywords": "KHN KHN Nam Xương Nanchang Sân bay Nanchang Changbei Nanchang Changbei International Airport Trung Quốc China CN"
  },
  {
    "id": "APL",
    "name": "Nampula (APL)",
    "country": "Mozambique",
    "keywords": "APL APL Nampula Nampula Sân bay Nampula Nampula Airport Mozambique Mozambique MZ"
  },
  {
    "id": "OSY",
    "name": "Namsos (OSY)",
    "country": "Na Uy",
    "keywords": "OSY OSY Namsos Namsos Sân bay Namsos Namsos Airport, Høknesøra Na Uy Norway NO"
  },
  {
    "id": "ZNA",
    "name": "Nanaimo (ZNA)",
    "country": "Canada",
    "keywords": "ZNA YCD Nanaimo Nanaimo Sân bay Nanaimo Harbour Water Nanaimo Harbour Water Airport Canada Canada CA"
  },
  {
    "id": "ENC",
    "name": "Nancy (ENC)",
    "country": "Pháp",
    "keywords": "ENC ENC Nancy Nancy Sân bay Essey Essey Airport Pháp France FR"
  },
  {
    "id": "JNN",
    "name": "Nanortalik (JNN)",
    "country": "Greenland",
    "keywords": "JNN JNN Nanortalik Nanortalik Nanortalik Heliport Nanortalik Heliport Greenland Greenland GL"
  },
  {
    "id": "NTE",
    "name": "Nantes (NTE)",
    "country": "Pháp",
    "keywords": "NTE NTE Nantes Nantes Sân bay Nantes Atlantique Nantes Atlantique Airport Pháp France FR"
  },
  {
    "id": "QJZ",
    "name": "Nantes (QJZ)",
    "country": "Pháp",
    "keywords": "QJZ NTE Nantes Nantes Sân bay Nantes Nantes Airport Pháp France FR"
  },
  {
    "id": "ACK",
    "name": "Nantucket (ACK)",
    "country": "Hoa kỳ",
    "keywords": "ACK ACK Nantucket Nantucket Sân bay Nantucket Memorial Nantucket Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "NYK",
    "name": "Nanyuki (NYK)",
    "country": "Kenya",
    "keywords": "NYK NYK Nanyuki Nanyuki Sân bay Nanyuki Nanyuki Airport Kenya Kenya KE"
  },
  {
    "id": "NPE",
    "name": "Napier Hastings (NPE)",
    "country": "Niu di lân",
    "keywords": "NPE NPE Napier Hastings Napier Hastings Sân bay Napier Napier Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "APF",
    "name": "Naples (APF)",
    "country": "Hoa kỳ",
    "keywords": "APF APF Naples Naples Sân bay Naples Municipal Naples Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "NAP",
    "name": "Naples (NAP)",
    "country": "Ý",
    "keywords": "NAP NAP Naples Naples Sân bay Naples Naples Airport Ý Italy IT"
  },
  {
    "id": "JNS",
    "name": "Narsaq (JNS)",
    "country": "Greenland",
    "keywords": "JNS JNS Narsaq Narsaq Narsaq Heliport Narsaq Heliport Greenland Greenland GL"
  },
  {
    "id": "UAK",
    "name": "Narsarsuaq (UAK)",
    "country": "Greenland",
    "keywords": "UAK UAK Narsarsuaq Narsarsuaq Sân bay Narsarsuaq Narsarsuaq Airport Greenland Greenland GL"
  },
  {
    "id": "NVK",
    "name": "Narvik (NVK)",
    "country": "Na Uy",
    "keywords": "NVK NVK Narvik Narvik Sân bay Narvik Narvik Airport, Framnes Na Uy Norway NO"
  },
  {
    "id": "BNA",
    "name": "Nashville (BNA)",
    "country": "Hoa kỳ",
    "keywords": "BNA BNA Nashville Nashville Sân bay Nashville Nashville International Airport Hoa kỳ United States US"
  },
  {
    "id": "PID",
    "name": "Nassau (PID)",
    "country": "Bahamas",
    "keywords": "PID NAS Nassau Nassau Sân bay Paradise Island Paradise Island Airport Bahamas Bahamas BS"
  },
  {
    "id": "NAT",
    "name": "Natal (NAT)",
    "country": "Bra xin",
    "keywords": "NAT NAT Natal Natal Sân bay Augusto Severo Augusto Severo International Airport Bra xin Brazil BR"
  },
  {
    "id": "YNA",
    "name": "Natashquan (YNA)",
    "country": "Canada",
    "keywords": "YNA YNA Natashquan Natashquan Sân bay Natashquan Natashquan Airport Canada Canada CA"
  },
  {
    "id": "NVT",
    "name": "Navegantes (NVT)",
    "country": "Bra xin",
    "keywords": "NVT NVT Navegantes Navegantes Sân bay Ministro Victor Konder Ministro Victor Konder International Airport Bra xin Brazil BR"
  },
  {
    "id": "JNX",
    "name": "Naxos (JNX)",
    "country": "Hy lạp",
    "keywords": "JNX JNX Naxos Naxos Sân bay Naxos Island National Naxos Island National Airport Hy lạp Greece GR"
  },
  {
    "id": "NYT",
    "name": "Nay Pyi Taw (NYT)",
    "country": "Myanmar",
    "keywords": "NYT NYT Nay Pyi Taw Nay Pyi Taw Sân bay Nay Pyi Taw Nay Pyi Taw Airport Myanmar Myanmar MM"
  },
  {
    "id": "EAM",
    "name": "Nejran (EAM)",
    "country": "Ả rập xê út",
    "keywords": "EAM EAM Nejran Nejran Sân bay Najran Domestic Najran Domestic Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "NSN",
    "name": "Nelson (NSN)",
    "country": "Niu di lân",
    "keywords": "NSN NSN Nelson Nelson Sân bay Nelson Nelson Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "MQP",
    "name": "Nelspruit (MQP)",
    "country": "Nam Phi",
    "keywords": "MQP MQP Nelspruit Nelspruit Sân bay Kruger Mpumalanga Kruger Mpumalanga International Airport Nam Phi South Africa ZA"
  },
  {
    "id": "NQN",
    "name": "Neuquen (NQN)",
    "country": "Ác Hen Tina",
    "keywords": "NQN NQN Neuquen Neuquen Sân bay Presidente Perón Presidente Perón International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "NEV",
    "name": "Nevis (NEV)",
    "country": "Anh quốc",
    "keywords": "NEV NEV Nevis Nevis Sân bay Vance W. Amory Vance W. Amory International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "NAV",
    "name": "Nevsehir (NAV)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "NAV NAV Nevsehir Nevsehir Sân bay Kapadokya Kapadokya Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "EWB",
    "name": "New Bedford (EWB)",
    "country": "Hoa kỳ",
    "keywords": "EWB EWB New Bedford New Bedford Sân bay New Bedford Regional New Bedford Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "EWN",
    "name": "New Bern (EWN)",
    "country": "Hoa kỳ",
    "keywords": "EWN EWN New Bern New Bern Sân bay Craven County Regional Craven County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "HVN",
    "name": "New Haven (HVN)",
    "country": "Hoa kỳ",
    "keywords": "HVN HVN New Haven New Haven Sân bay Tweed-New Haven Tweed-New Haven Airport Hoa kỳ United States US"
  },
  {
    "id": "MSY",
    "name": "New Orleans (MSY)",
    "country": "Hoa kỳ",
    "keywords": "MSY MSY New Orleans New Orleans Sân bay Louis Armstrong New Orleans Louis Armstrong New Orleans International Airport Hoa kỳ United States US"
  },
  {
    "id": "NEW",
    "name": "New Orleans (NEW)",
    "country": "Hoa kỳ",
    "keywords": "NEW MSY New Orleans New Orleans Sân bay New Orleans Lakefront New Orleans Lakefront Airport Hoa kỳ United States US"
  },
  {
    "id": "NPL",
    "name": "New Plymouth (NPL)",
    "country": "Niu di lân",
    "keywords": "NPL NPL New Plymouth New Plymouth Sân bay New Plymouth New Plymouth Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "EWR",
    "name": "New York (EWR)",
    "country": "Hoa kỳ",
    "keywords": "EWR NYC New York New York Sân bay Newark Liberty Newark Liberty International Airport Hoa kỳ United States US"
  },
  {
    "id": "JFK",
    "name": "New York (JFK)",
    "country": "Hoa kỳ",
    "keywords": "JFK NYC New York New York Sân bay John F. Kennedy John F. Kennedy International Airport Hoa kỳ United States US"
  },
  {
    "id": "JRE",
    "name": "New York (JRE)",
    "country": "Hoa kỳ",
    "keywords": "JRE JRE New York New York East 60th Street Heliport East 60th Street Heliport Hoa kỳ United States US"
  },
  {
    "id": "LGA",
    "name": "New York (LGA)",
    "country": "Hoa kỳ",
    "keywords": "LGA NYC New York New York Sân bay LaGuardia LaGuardia Airport Hoa kỳ United States US"
  },
  {
    "id": "NYC",
    "name": "New York (NYC)",
    "country": "Hoa kỳ",
    "keywords": "NYC NYC New York New York Tất cả các sân bay All Airports Hoa kỳ United States US"
  },
  {
    "id": "TSS",
    "name": "New York (TSS)",
    "country": "Hoa kỳ",
    "keywords": "TSS TSS New York New York East 34th Street Heliport East 34th Street Heliport Hoa kỳ United States US"
  },
  {
    "id": "SWF",
    "name": "Newburgh (SWF)",
    "country": "Hoa kỳ",
    "keywords": "SWF SWF Newburgh Newburgh Sân bay Stewart Stewart International Airport Hoa kỳ United States US"
  },
  {
    "id": "BEO",
    "name": "Newcastle (BEO)",
    "country": "Úc",
    "keywords": "BEO NTL Newcastle Newcastle Sân bay Newcastle - Belmont Newcastle - Belmont Airport Úc Australia AU"
  },
  {
    "id": "NCL",
    "name": "Newcastle (NCL)",
    "country": "Anh quốc",
    "keywords": "NCL NCL Newcastle Newcastle Sân bay Newcastle Newcastle Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "ZNE",
    "name": "Newman (ZNE)",
    "country": "Úc",
    "keywords": "ZNE ZNE Newman Newman Sân bay Newman Newman Airport Úc Australia AU"
  },
  {
    "id": "PHF",
    "name": "Newport News (PHF)",
    "country": "Hoa kỳ",
    "keywords": "PHF PHF Newport News Newport News Sân bay Newport News/Williamsburg Newport News/Williamsburg International Airport Hoa kỳ United States US"
  },
  {
    "id": "NQY",
    "name": "Newquay (NQY)",
    "country": "Anh quốc",
    "keywords": "NQY NQY Newquay Newquay Sân bay Newquay Cornwall Newquay Cornwall International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "INC",
    "name": "Ngân Châu (INC)",
    "country": "Trung Quốc",
    "keywords": "INC INC Ngân Châu Yinchuan Sân bay Yinchuan Hedong Yinchuan Airport Trung Quốc China CN"
  },
  {
    "id": "YIN",
    "name": "Nghi Ninh (YIN)",
    "country": "Trung Quốc",
    "keywords": "YIN YIN Nghi Ninh Yining Sân bay Yining Yining Airport Trung Quốc China CN"
  },
  {
    "id": "YBP",
    "name": "Nghi Tân (YBP)",
    "country": "Trung Quốc",
    "keywords": "YBP YBP Nghi Tân Yibin Sân bay Yibin Caiba Yibin Caiba Airport Trung Quốc China CN"
  },
  {
    "id": "YIH",
    "name": "Nghị Xương (YIH)",
    "country": "Trung Quốc",
    "keywords": "YIH YIH Nghị Xương Yichang Sân bay Yichang Sanxia Yichang Sanxia Airport Trung Quốc China CN"
  },
  {
    "id": "YIW",
    "name": "Nghĩa Vu (YIW)",
    "country": "Trung Quốc",
    "keywords": "YIW YIW Nghĩa Vu Yiwu Sân bay Yiwu Yiwu Airport Trung Quốc China CN"
  },
  {
    "id": "CXR",
    "name": "Nha Trang (CXR)",
    "country": "Việt Nam",
    "keywords": "CXR NHA Nha Trang Nha Trang Sân bay Cam Ranh Cam Ranh Airport Việt Nam Vietnam VN"
  },
  {
    "id": "IAG",
    "name": "Niagara Falls (IAG)",
    "country": "Hoa kỳ",
    "keywords": "IAG IAG Niagara Falls Niagara Falls Sân bay Niagara Falls Niagara Falls International Airport Hoa kỳ United States US"
  },
  {
    "id": "NIM",
    "name": "Niamey (NIM)",
    "country": "Ni giê",
    "keywords": "NIM NIM Niamey Niamey Sân bay Diori Hamani Diori Hamani International Airport Ni giê Niger NE"
  },
  {
    "id": "NCE",
    "name": "Nice (NCE)",
    "country": "Pháp",
    "keywords": "NCE NCE Nice Nice Sân bay Côte d'Azur Côte d'Azur International Airport Pháp France FR"
  },
  {
    "id": "NRN",
    "name": "Niederrhein (NRN)",
    "country": "Đức",
    "keywords": "NRN NRN Niederrhein Niederrhein Sân bay Weeze Weeze Airport Đức Germany DE"
  },
  {
    "id": "KIJ",
    "name": "Niigata (KIJ)",
    "country": "Nhật bản",
    "keywords": "KIJ KIJ Niigata Niigata Sân bay Niigata Niigata Airport Nhật bản Japan JP"
  },
  {
    "id": "FNI",
    "name": "Nimes (FNI)",
    "country": "Pháp",
    "keywords": "FNI FNI Nimes Nimes Sân bay Garons Garons Airport Pháp France FR"
  },
  {
    "id": "NGB",
    "name": "Ninh Bộ (NGB)",
    "country": "Trung Quốc",
    "keywords": "NGB NGB Ninh Bộ Ningbo Sân bay Ningbo Lishe Ningbo Lishe International Airport Trung Quốc China CN"
  },
  {
    "id": "INI",
    "name": "Nis (INI)",
    "country": "Serbia",
    "keywords": "INI INI Nis Nis Sân bay Niš Constantine the Great Niš Constantine the Great Airport Serbia Serbia RS"
  },
  {
    "id": "IUE",
    "name": "Niue Island (IUE)",
    "country": "Niue",
    "keywords": "IUE IUE Niue Island Niue Island Sân bay Hanan Hanan International Airport Niue Niue NU"
  },
  {
    "id": "NJC",
    "name": "Nizhnevartovsk (NJC)",
    "country": "Nga",
    "keywords": "NJC NJC Nizhnevartovsk Nizhnevartovsk Sân bay Nizhnevartovsk Nizhnevartovsk Airport Nga Russia RU"
  },
  {
    "id": "GOJ",
    "name": "Nizhniy Novgorod (GOJ)",
    "country": "Nga",
    "keywords": "GOJ GOJ Nizhniy Novgorod Nizhniy Novgorod Sân bay Strigino Strigino Airport Nga Russia RU"
  },
  {
    "id": "OME",
    "name": "Nome (OME)",
    "country": "Hoa kỳ",
    "keywords": "OME OME Nome Nome Sân bay Nome Nome Airport Hoa kỳ United States US"
  },
  {
    "id": "NLK",
    "name": "Norfolk Island (NLK)",
    "country": "Úc",
    "keywords": "NLK NLK Norfolk Island Norfolk Island Sân bay Norfolk Island Norfolk Island Airport Úc Australia AU"
  },
  {
    "id": "ORF",
    "name": "Norfolk Newport News (ORF)",
    "country": "Hoa kỳ",
    "keywords": "ORF ORF Norfolk Newport News Norfolk Newport News Sân bay Norfolk Norfolk International Airport Hoa kỳ United States US"
  },
  {
    "id": "YVQ",
    "name": "Norman Wells (YVQ)",
    "country": "Canada",
    "keywords": "YVQ YVQ Norman Wells Norman Wells Sân bay Norman Wells Norman Wells Airport Canada Canada CA"
  },
  {
    "id": "NRK",
    "name": "Norrkoping (NRK)",
    "country": "Thụy điển",
    "keywords": "NRK NRK Norrkoping Norrkoping Sân bay Norrköping Norrköping Airport Thụy điển Sweden SE"
  },
  {
    "id": "YYB",
    "name": "North Bay (YYB)",
    "country": "Canada",
    "keywords": "YYB YYB North Bay North Bay Sân bay North Bay/Jack Garland North Bay/Jack Garland Airport Canada Canada CA"
  },
  {
    "id": "OTH",
    "name": "North Bend (OTH)",
    "country": "Hoa kỳ",
    "keywords": "OTH OTH North Bend North Bend Sân bay North Bend Municipal North Bend Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "ELH",
    "name": "North Eleuthera (ELH)",
    "country": "Bahamas",
    "keywords": "ELH ELH North Eleuthera North Eleuthera Sân bay North Eleuthera North Eleuthera Airport Bahamas Bahamas BS"
  },
  {
    "id": "LBF",
    "name": "North Platte (LBF)",
    "country": "Hoa kỳ",
    "keywords": "LBF LBF North Platte North Platte Sân bay North Platte Regional North Platte Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "NWI",
    "name": "Norwich (NWI)",
    "country": "Anh quốc",
    "keywords": "NWI NWI Norwich Norwich Sân bay Norwich Norwich International Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "EMA",
    "name": "Nottingham UK (EMA)",
    "country": "Anh quốc",
    "keywords": "EMA NQT Nottingham UK Nottingham UK Sân bay East Midlands East Midlands Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "NKC",
    "name": "Nouakchott (NKC)",
    "country": "Mauritania",
    "keywords": "NKC NKC Nouakchott Nouakchott Sân bay Nouakchott Nouakchott International Airport Mauritania Mauritania MR"
  },
  {
    "id": "GEA",
    "name": "Noumea (GEA)",
    "country": "New Caledonia",
    "keywords": "GEA NOU Noumea Noumea Sân bay Nouméa Magenta Nouméa Magenta Airport New Caledonia New Caledonia NC"
  },
  {
    "id": "NOU",
    "name": "Noumea (NOU)",
    "country": "New Caledonia",
    "keywords": "NOU NOU Noumea Noumea Sân bay Tontouta Tontouta Airport New Caledonia New Caledonia NC"
  },
  {
    "id": "NOZ",
    "name": "Novokuznetsk (NOZ)",
    "country": "Nga",
    "keywords": "NOZ NOZ Novokuznetsk Novokuznetsk Sân bay Novokuznetsk Spichenkovo Novokuznetsk Spichenkovo Airport Nga Russia RU"
  },
  {
    "id": "OVB",
    "name": "Novosibirsk (OVB)",
    "country": "Nga",
    "keywords": "OVB OVB Novosibirsk Novosibirsk Sân bay Novosibirsk Tolmachevo Novosibirsk Tolmachevo Airport Nga Russia RU"
  },
  {
    "id": "NLD",
    "name": "Nuevo Laredo (NLD)",
    "country": "Mê hi cô",
    "keywords": "NLD NLD Nuevo Laredo Nuevo Laredo Sân bay Quetzalcóatl Quetzalcóatl International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "TBU",
    "name": "Nuku Alofa (TBU)",
    "country": "Tonga",
    "keywords": "TBU TBU Nuku Alofa Nuku Alofa Sân bay Fua?amotu Fuaʻamotu International Airport Tonga Tonga TO"
  },
  {
    "id": "NUL",
    "name": "Nulato (NUL)",
    "country": "Hoa kỳ",
    "keywords": "NUL NUL Nulato Nulato Sân bay Nulato Nulato Airport Hoa kỳ United States US"
  },
  {
    "id": "NUE",
    "name": "Nuremberg (NUE)",
    "country": "Đức",
    "keywords": "NUE NUE Nuremberg Nuremberg Sân bay Nuremberg Nuremberg Airport Đức Germany DE"
  },
  {
    "id": "GOH",
    "name": "Nuuk (GOH)",
    "country": "Greenland",
    "keywords": "GOH GOH Nuuk Nuuk Sân bay Nuuk Nuuk Airport Greenland Greenland GL"
  },
  {
    "id": "NYU",
    "name": "Nyaung (NYU)",
    "country": "Myanmar",
    "keywords": "NYU NYU Nyaung Nyaung Sân bay Bagan Bagan Airport Myanmar Myanmar MM"
  },
  {
    "id": "JCE",
    "name": "Oakland (JCE)",
    "country": "Hoa kỳ",
    "keywords": "JCE JCE Oakland Oakland Oakland Convention Center Heliport Oakland Convention Center Heliport Hoa kỳ United States US"
  },
  {
    "id": "OAX",
    "name": "Oaxaca (OAX)",
    "country": "Mê hi cô",
    "keywords": "OAX OAX Oaxaca Oaxaca Sân bay Xoxocotlán Xoxocotlán International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "OBO",
    "name": "Obihiro (OBO)",
    "country": "Nhật bản",
    "keywords": "OBO OBO Obihiro Obihiro Sân bay Tokachi-Obihiro Tokachi-Obihiro Airport Nhật bản Japan JP"
  },
  {
    "id": "ONJ",
    "name": "Odate Noshiro (ONJ)",
    "country": "Nhật bản",
    "keywords": "ONJ ONJ Odate Noshiro Odate Noshiro Sân bay Odate-Noshiro Odate-Noshiro Airport Nhật bản Japan JP"
  },
  {
    "id": "ODS",
    "name": "Odessa (ODS)",
    "country": "U-krai-na",
    "keywords": "ODS ODS Odessa Odessa Sân bay Odessa Odessa International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "OGS",
    "name": "Ogdensburg (OGS)",
    "country": "Hoa kỳ",
    "keywords": "OGS OGS Ogdensburg Ogdensburg Sân bay Ogdensburg Ogdensburg International Airport Hoa kỳ United States US"
  },
  {
    "id": "OHD",
    "name": "Ohrid (OHD)",
    "country": "Macedonia",
    "keywords": "OHD OHD Ohrid Ohrid Sân bay Ohrid Ohrid Airport Macedonia Macedonia F Y R O M MK"
  },
  {
    "id": "OIT",
    "name": "Oita (OIT)",
    "country": "Nhật bản",
    "keywords": "OIT OIT Oita Oita Sân bay Oita Oita Airport Nhật bản Japan JP"
  },
  {
    "id": "OKJ",
    "name": "Okayama (OKJ)",
    "country": "Nhật bản",
    "keywords": "OKJ OKJ Okayama Okayama Sân bay Okayama Okayama Airport Nhật bản Japan JP"
  },
  {
    "id": "OKA",
    "name": "Okinawa (OKA)",
    "country": "Nhật bản",
    "keywords": "OKA OKA Okinawa Okinawa Sân bay Naha Naha Airport Nhật bản Japan JP"
  },
  {
    "id": "DWN",
    "name": "Oklahoma City (DWN)",
    "country": "Hoa kỳ",
    "keywords": "DWN OKC Oklahoma City Oklahoma City Downtown Airpark Downtown Airpark Hoa kỳ United States US"
  },
  {
    "id": "PWA",
    "name": "Oklahoma City (PWA)",
    "country": "Hoa kỳ",
    "keywords": "PWA OKC Oklahoma City Oklahoma City Sân bay Wiley Post Wiley Post Airport Hoa kỳ United States US"
  },
  {
    "id": "OLB",
    "name": "Olbia (OLB)",
    "country": "Ý",
    "keywords": "OLB OLB Olbia Olbia Sân bay Olbia – Costa Smeralda Olbia – Costa Smeralda Airport Ý Italy IT"
  },
  {
    "id": "MIQ",
    "name": "Omaha (MIQ)",
    "country": "Hoa kỳ",
    "keywords": "MIQ OMA Omaha Omaha Sân bay Millard Millard Airport Hoa kỳ United States US"
  },
  {
    "id": "OFF",
    "name": "Omaha (OFF)",
    "country": "Hoa kỳ",
    "keywords": "OFF OMA Omaha Omaha Sân bay Offutt Afb Offutt Afb Airport Hoa kỳ United States US"
  },
  {
    "id": "OMA",
    "name": "Omaha (OMA)",
    "country": "Hoa kỳ",
    "keywords": "OMA OMA Omaha Omaha Sân bay Epperly Epperly Airport Hoa kỳ United States US"
  },
  {
    "id": "OMS",
    "name": "Omsk (OMS)",
    "country": "Nga",
    "keywords": "OMS OMS Omsk Omsk Sân bay Omsk Omsk Airport Nga Russia RU"
  },
  {
    "id": "ONT",
    "name": "Ontario (ONT)",
    "country": "Hoa kỳ",
    "keywords": "ONT ONT Ontario Ontario Sân bay Ontario Ontario International Airport Hoa kỳ United States US"
  },
  {
    "id": "OMR",
    "name": "Oradea (OMR)",
    "country": "Rumani",
    "keywords": "OMR OMR Oradea Oradea Sân bay Oradea Oradea International Airport Rumani Romania RO"
  },
  {
    "id": "ORN",
    "name": "Oran (ORN)",
    "country": "An giê ri",
    "keywords": "ORN ORN Oran Oran Sân bay Oran Es Sénia Oran Es Sénia Airport An giê ri Algeria DZ"
  },
  {
    "id": "MCO",
    "name": "Orlando (MCO)",
    "country": "Hoa kỳ",
    "keywords": "MCO ORL Orlando Orlando Sân bay Orlando Orlando International Airport Hoa kỳ United States US"
  },
  {
    "id": "OER",
    "name": "Ornskoldsvik (OER)",
    "country": "Thụy điển",
    "keywords": "OER OER Ornskoldsvik Ornskoldsvik Sân bay Örnsköldsvik Örnsköldsvik Airport Thụy điển Sweden SE"
  },
  {
    "id": "HOV",
    "name": "Orsta Volda (HOV)",
    "country": "Na Uy",
    "keywords": "HOV HOV Orsta Volda Orsta Volda Sân bay Ørsta/Volda Ørsta/Volda Airport, Hovden Na Uy Norway NO"
  },
  {
    "id": "ITM",
    "name": "Osaka (ITM)",
    "country": "Nhật bản",
    "keywords": "ITM OSA Osaka Osaka Sân bay Osaka Osaka International Airport Nhật bản Japan JP"
  },
  {
    "id": "KIX",
    "name": "Osaka (KIX)",
    "country": "Nhật bản",
    "keywords": "KIX OSA Osaka Osaka Sân bay Kansai Kansai International Airport Nhật bản Japan JP"
  },
  {
    "id": "OSA",
    "name": "Osaka (OSA)",
    "country": "Nhật bản",
    "keywords": "OSA OSA Osaka Osaka Tất cả các sân bay All Airports Nhật bản Japan JP"
  },
  {
    "id": "OSL",
    "name": "Oslo (OSL)",
    "country": "Na Uy",
    "keywords": "OSL OSL Oslo Oslo Sân bay Oslo Oslo Airport, Gardermoen Na Uy Norway NO"
  },
  {
    "id": "RYG",
    "name": "Oslo (RYG)",
    "country": "Na Uy",
    "keywords": "RYG RYG Oslo Oslo Sân bay Moss Moss Airport, Rygge / Rygge Air Station Na Uy Norway NO"
  },
  {
    "id": "TRF",
    "name": "Oslo (TRF)",
    "country": "Na Uy",
    "keywords": "TRF OSL Oslo Oslo Sân bay Sandefjord Sandefjord Airport, Torp Na Uy Norway NO"
  },
  {
    "id": "ZOS",
    "name": "Osorno (ZOS)",
    "country": "Chi lê",
    "keywords": "ZOS ZOS Osorno Osorno Sân bay Cañal Bajo Carlos Hott Siebert Cañal Bajo Carlos Hott Siebert Airport Chi lê Chile CL"
  },
  {
    "id": "OST",
    "name": "Ostende (OST)",
    "country": "Bỉ",
    "keywords": "OST OST Ostende Ostende Sân bay Ostend-Bruges Ostend-Bruges International Airport Bỉ Belgium BE"
  },
  {
    "id": "OSD",
    "name": "Ostersund (OSD)",
    "country": "Thụy điển",
    "keywords": "OSD OSD Ostersund Ostersund Sân bay Åre Östersund Åre Östersund Airport Thụy điển Sweden SE"
  },
  {
    "id": "OSR",
    "name": "Ostrava (OSR)",
    "country": "Cộng hòa Séc",
    "keywords": "OSR OSR Ostrava Ostrava Sân bay Ostrava-Mosnov Ostrava-Mosnov International Airport Cộng hòa Séc Czech Republic CZ"
  },
  {
    "id": "YOW",
    "name": "Ottawa (YOW)",
    "country": "Canada",
    "keywords": "YOW YOW Ottawa Ottawa Sân bay Ottawa/Macdonald-Cartier Ottawa/Macdonald-Cartier International Airport Canada Canada CA"
  },
  {
    "id": "OUA",
    "name": "Ouagadougou (OUA)",
    "country": "Buốc ki na pha sô",
    "keywords": "OUA OUA Ouagadougou Ouagadougou Sân bay Ouagadougou Ouagadougou Airport Buốc ki na pha sô Burkina Faso BF"
  },
  {
    "id": "OUD",
    "name": "Oujda (OUD)",
    "country": "Ma rốc",
    "keywords": "OUD OUD Oujda Oujda Sân bay Angads Angads Airport Ma rốc Morocco MA"
  },
  {
    "id": "OUL",
    "name": "Oulu (OUL)",
    "country": "Phần lan",
    "keywords": "OUL OUL Oulu Oulu Sân bay Oulu Oulu Airport Phần lan Finland FI"
  },
  {
    "id": "OZZ",
    "name": "Ourzazate (OZZ)",
    "country": "Ma rốc",
    "keywords": "OZZ OZZ Ourzazate Ourzazate Sân bay Ouarzazate Ouarzazate Airport Ma rốc Morocco MA"
  },
  {
    "id": "VDA",
    "name": "Ovda (VDA)",
    "country": "Israel",
    "keywords": "VDA VDA Ovda Ovda Sân bay Ovda Ovda International Airport Israel Israel IL"
  },
  {
    "id": "OWB",
    "name": "Owensboro (OWB)",
    "country": "Hoa kỳ",
    "keywords": "OWB OWB Owensboro Owensboro Sân bay Owensboro-Daviess County Owensboro-Daviess County Airport Hoa kỳ United States US"
  },
  {
    "id": "BZZ",
    "name": "Oxford (BZZ)",
    "country": "Anh quốc",
    "keywords": "BZZ OXF Oxford Oxford RAF Brize Norton RAF Brize Norton Anh quốc United Kingdom GB"
  },
  {
    "id": "WNZ",
    "name": "Ôn Châu (WNZ)",
    "country": "Trung Quốc",
    "keywords": "WNZ WNZ Ôn Châu Wenzhou Sân bay Wenzhou Yongqiang Wenzhou Yongqiang Airport Trung Quốc China CN"
  },
  {
    "id": "PDG",
    "name": "Padang (PDG)",
    "country": "Indonesia",
    "keywords": "PDG PDG Padang Padang Sân bay Minangkabau Minangkabau International Airport Indonesia Indonesia ID"
  },
  {
    "id": "PAD",
    "name": "Paderborn (PAD)",
    "country": "Đức",
    "keywords": "PAD PAD Paderborn Paderborn Sân bay Paderborn/Lippstadt Paderborn/Lippstadt Airport Đức Germany DE"
  },
  {
    "id": "PAH",
    "name": "Paducah (PAH)",
    "country": "Hoa kỳ",
    "keywords": "PAH PAH Paducah Paducah Sân bay Barkley Regional Barkley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PAG",
    "name": "Pagadian (PAG)",
    "country": "Philippines",
    "keywords": "PAG PAG Pagadian Pagadian Pagadian Pagadian Philippines Philippines PH"
  },
  {
    "id": "PGA",
    "name": "Page (PGA)",
    "country": "Hoa kỳ",
    "keywords": "PGA PGA Page Page Sân bay Page Municipal Page Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "PPG",
    "name": "Pago Pago (PPG)",
    "country": "Samoa",
    "keywords": "PPG PPG Pago Pago Pago Pago Sân bay Pago Pago Pago Pago International Airport Samoa Independent State Of Samoa WS"
  },
  {
    "id": "PKZ",
    "name": "Pakse (PKZ)",
    "country": "Lào",
    "keywords": "PKZ PKZ Pakse Pakse Sân bay quốc tế Pakse Pakse International Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "YIF",
    "name": "Pakuashipi (YIF)",
    "country": "Canada",
    "keywords": "YIF YIF Pakuashipi Pakuashipi Sân bay Saint-Augustin Saint-Augustin Airport Canada Canada CA"
  },
  {
    "id": "PLM",
    "name": "Palembang (PLM)",
    "country": "Malaysia",
    "keywords": "PLM PLM Palembang Palembang Sân bay Sultan Mahmud Badaruddin II Sultan Mahmud Badaruddin II Airport Malaysia Malaysia MY"
  },
  {
    "id": "PMO",
    "name": "Palermo (PMO)",
    "country": "Ý",
    "keywords": "PMO PMO Palermo Palermo Sân bay Palermo Palermo Airport Ý Italy IT"
  },
  {
    "id": "UDD",
    "name": "Palm Desert (UDD)",
    "country": "Hoa kỳ",
    "keywords": "UDD UDD Palm Desert Palm Desert Sân bay Bermuda Dunes Bermuda Dunes Airport Hoa kỳ United States US"
  },
  {
    "id": "PSP",
    "name": "Palm Springs (PSP)",
    "country": "Hoa kỳ",
    "keywords": "PSP PSP Palm Springs Palm Springs Sân bay Palm Springs Palm Springs International Airport Hoa kỳ United States US"
  },
  {
    "id": "PMZ",
    "name": "Palmar (PMZ)",
    "country": "Costa Rica",
    "keywords": "PMZ PMZ Palmar Palmar Sân bay Palmar Sur Palmar Sur Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "PMR",
    "name": "Palmerston (PMR)",
    "country": "Niu di lân",
    "keywords": "PMR PMR Palmerston Palmerston Sân bay Palmerston North Palmerston North International Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "PNA",
    "name": "Pamplona (PNA)",
    "country": "Tây Ban Nha",
    "keywords": "PNA PNA Pamplona Pamplona Sân bay Pamplona Pamplona Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "PAC",
    "name": "Panama City (PAC)",
    "country": "Panama",
    "keywords": "PAC PTY Panama City Panama City Sân bay Albrook \"Marcos A. Gelabert\" Albrook \"Marcos A. Gelabert\" International Airport Panama Panama PA"
  },
  {
    "id": "PFN",
    "name": "Panama City (PFN)",
    "country": "Hoa kỳ",
    "keywords": "PFN PFN Panama City Panama City Sân bay Panama City-Bay County Panama City-Bay County International Airport Hoa kỳ United States US"
  },
  {
    "id": "PTY",
    "name": "Panama City (PTY)",
    "country": "Panama",
    "keywords": "PTY PTY Panama City Panama City Sân bay Tocumen Tocumen International Airport Panama Panama PA"
  },
  {
    "id": "YXP",
    "name": "Pangnirtung (YXP)",
    "country": "Canada",
    "keywords": "YXP YXP Pangnirtung Pangnirtung Sân bay Pangnirtung Pangnirtung Airport Canada Canada CA"
  },
  {
    "id": "PPT",
    "name": "Papeete (PPT)",
    "country": "Pô li sê ni thuộc Pháp",
    "keywords": "PPT PPT Papeete Papeete Sân bay Faa'a Faa'a International Airport Pô li sê ni thuộc Pháp French Polynesia PF"
  },
  {
    "id": "PFO",
    "name": "Paphos (PFO)",
    "country": "Cộng hòa Síp",
    "keywords": "PFO PFO Paphos Paphos Sân bay Paphos Paphos International Airport Cộng hòa Síp Cyprus CY"
  },
  {
    "id": "PBO",
    "name": "Paraburdoo (PBO)",
    "country": "Úc",
    "keywords": "PBO PBO Paraburdoo Paraburdoo Sân bay Paraburdoo Paraburdoo Airport Úc Australia AU"
  },
  {
    "id": "ORG",
    "name": "Paramaribo (ORG)",
    "country": "Suriname",
    "keywords": "ORG PBM Paramaribo Paramaribo Sân bay Zorg en Hoop Zorg en Hoop Airport Suriname Suriname SR"
  },
  {
    "id": "PBM",
    "name": "Paramaribo (PBM)",
    "country": "Suriname",
    "keywords": "PBM PBM Paramaribo Paramaribo Sân bay Johan Adolf Pengel Johan Adolf Pengel International Airport Suriname Suriname SR"
  },
  {
    "id": "PRA",
    "name": "Parana (PRA)",
    "country": "Ác Hen Tina",
    "keywords": "PRA PRA Parana Parana Sân bay General Justo José de Urquiza General Justo José de Urquiza Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "PPQ",
    "name": "Paraparaumu (PPQ)",
    "country": "Niu di lân",
    "keywords": "PPQ PPQ Paraparaumu Paraparaumu Sân bay Paraparaumu Paraparaumu Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "PED",
    "name": "Pardubice (PED)",
    "country": "Cộng hòa Séc",
    "keywords": "PED PED Pardubice Pardubice Sân bay Pardubice Pardubice Airport Cộng hòa Séc Czech Republic CZ"
  },
  {
    "id": "BVA",
    "name": "Paris (BVA)",
    "country": "Pháp",
    "keywords": "BVA PAR Paris Paris Sân bay Paris Beauvais Tillé Paris Beauvais Tillé Airport Pháp France FR"
  },
  {
    "id": "CDG",
    "name": "Paris (CDG)",
    "country": "Pháp",
    "keywords": "CDG PAR Paris Paris Sân bay Charles de Gaulle Charles de Gaulle Airport Pháp France FR"
  },
  {
    "id": "JDP",
    "name": "Paris (JDP)",
    "country": "Pháp",
    "keywords": "JDP PAR Paris Paris Paris - Issy-les-Moulineaux Heliport Paris - Issy-les-Moulineaux Heliport Pháp France FR"
  },
  {
    "id": "LBG",
    "name": "Paris (LBG)",
    "country": "Pháp",
    "keywords": "LBG PAR Paris Paris Sân bay Paris - Le Bourget Paris - Le Bourget Airport Pháp France FR"
  },
  {
    "id": "ORY",
    "name": "Paris (ORY)",
    "country": "Pháp",
    "keywords": "ORY PAR Paris Paris Sân bay Orly Orly International Airport Pháp France FR"
  },
  {
    "id": "PAR",
    "name": "Paris (PAR)",
    "country": "Pháp",
    "keywords": "PAR PAR Paris Paris Tất cả các sân bay All Airports Pháp France FR"
  },
  {
    "id": "XCR",
    "name": "Paris (XCR)",
    "country": "Pháp",
    "keywords": "XCR XCR Paris Paris Sân bay Vatry Vatry International Airport Pháp France FR"
  },
  {
    "id": "PKB",
    "name": "Parkersburg (PKB)",
    "country": "Hoa kỳ",
    "keywords": "PKB PKB Parkersburg Parkersburg Sân bay Mid-Ohio Valley Regional Mid-Ohio Valley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PMF",
    "name": "Parma (PMF)",
    "country": "Ý",
    "keywords": "PMF PMF Parma Parma Sân bay Parma Parma Airport Ý Italy IT"
  },
  {
    "id": "PAS",
    "name": "Paros (PAS)",
    "country": "Hy lạp",
    "keywords": "PAS PAS Paros Paros Sân bay Paros National Paros National Airport Hy lạp Greece GR"
  },
  {
    "id": "PSC",
    "name": "Pasco (PSC)",
    "country": "Hoa kỳ",
    "keywords": "PSC PSC Pasco Pasco Sân bay Tri-Cities Tri-Cities Airport Hoa kỳ United States US"
  },
  {
    "id": "PFB",
    "name": "Passo Fundo (PFB)",
    "country": "Bra xin",
    "keywords": "PFB PFB Passo Fundo Passo Fundo Sân bay Lauro Kurtz Lauro Kurtz Airport Bra xin Brazil BR"
  },
  {
    "id": "PSO",
    "name": "Pasto (PSO)",
    "country": "Colombia",
    "keywords": "PSO PSO Pasto Pasto Sân bay Antonio Nariño Antonio Nariño Airport Colombia Colombia CO"
  },
  {
    "id": "PAT",
    "name": "Patna (PAT)",
    "country": "Ấn độ",
    "keywords": "PAT PAT Patna Patna Sân bay Lok Nayak Jayaprakash Lok Nayak Jayaprakash Airport Ấn độ India IN"
  },
  {
    "id": "GPA",
    "name": "Patras (GPA)",
    "country": "Hy lạp",
    "keywords": "GPA GPA Patras Patras Sân bay Araxos Araxos Airport Hy lạp Greece GR"
  },
  {
    "id": "PUF",
    "name": "Pau Fr (PUF)",
    "country": "Pháp",
    "keywords": "PUF PUF Pau Fr Pau Fr Sân bay Pau Pyrénées Pau Pyrénées Airport Pháp France FR"
  },
  {
    "id": "PWQ",
    "name": "Pavlodar (PWQ)",
    "country": "Kazakstan",
    "keywords": "PWQ PWQ Pavlodar Pavlodar Sân bay Pavlodar Pavlodar Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "PKU",
    "name": "Pekanbaru (PKU)",
    "country": "Indonesia",
    "keywords": "PKU PKU Pekanbaru Pekanbaru Sân bay Sultan Syarif Kasim II Sultan Syarif Kasim II Airport Indonesia Indonesia ID"
  },
  {
    "id": "PLN",
    "name": "Pellston (PLN)",
    "country": "Hoa kỳ",
    "keywords": "PLN PLN Pellston Pellston Sân bay Pellston Regional Pellston Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YBB",
    "name": "Pelly Bay (YBB)",
    "country": "Canada",
    "keywords": "YBB YBB Pelly Bay Pelly Bay Sân bay Kugaaruk Kugaaruk Airport Canada Canada CA"
  },
  {
    "id": "PET",
    "name": "Pelotas (PET)",
    "country": "Bra xin",
    "keywords": "PET PET Pelotas Pelotas Sân bay Pelotas Pelotas International Airport Bra xin Brazil BR"
  },
  {
    "id": "POL",
    "name": "Pemba (POL)",
    "country": "Mozambique",
    "keywords": "POL POL Pemba Pemba Sân bay Pemba Pemba Airport Mozambique Mozambique MZ"
  },
  {
    "id": "PEN",
    "name": "Penang (PEN)",
    "country": "Malaysia",
    "keywords": "PEN PEN Penang Penang Sân bay Penang Penang International Airport Malaysia Malaysia MY"
  },
  {
    "id": "PDT",
    "name": "Pendleton (PDT)",
    "country": "Hoa kỳ",
    "keywords": "PDT PDT Pendleton Pendleton Sân bay Eastern Oregon Regional Eastern Oregon Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PNS",
    "name": "Pensacola (PNS)",
    "country": "Hoa kỳ",
    "keywords": "PNS PNS Pensacola Pensacola Sân bay Pensacola Pensacola International Airport Hoa kỳ United States US"
  },
  {
    "id": "YYF",
    "name": "Penticton (YYF)",
    "country": "Canada",
    "keywords": "YYF YYF Penticton Penticton Sân bay Penticton Penticton Airport Canada Canada CA"
  },
  {
    "id": "PEZ",
    "name": "Penza (PEZ)",
    "country": "Nga",
    "keywords": "PEZ PEZ Penza Penza Sân bay Penza Penza Airport Nga Russia RU"
  },
  {
    "id": "PIA",
    "name": "Peoria (PIA)",
    "country": "Hoa kỳ",
    "keywords": "PIA PIA Peoria Peoria Sân bay Greater Peoria Regional Greater Peoria Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PEI",
    "name": "Pereira (PEI)",
    "country": "Colombia",
    "keywords": "PEI PEI Pereira Pereira Sân bay Matecaña Matecaña International Airport Colombia Colombia CO"
  },
  {
    "id": "PGX",
    "name": "Perigueux (PGX)",
    "country": "Pháp",
    "keywords": "PGX PGX Perigueux Perigueux Sân bay Périgueux Bassillac Périgueux Bassillac Airport Pháp France FR"
  },
  {
    "id": "PEE",
    "name": "Perm (PEE)",
    "country": "Nga",
    "keywords": "PEE PEE Perm Perm Sân bay Bolshoye Savino Bolshoye Savino Airport Nga Russia RU"
  },
  {
    "id": "PGF",
    "name": "Perpignan (PGF)",
    "country": "Pháp",
    "keywords": "PGF PGF Perpignan Perpignan Sân bay Perpignan – Rivesaltes Perpignan – Rivesaltes Airport Pháp France FR"
  },
  {
    "id": "PER",
    "name": "Perth (PER)",
    "country": "Úc",
    "keywords": "PER PER Perth Perth Sân bay Perth Perth Airport Úc Australia AU"
  },
  {
    "id": "PEG",
    "name": "Perugia (PEG)",
    "country": "Ý",
    "keywords": "PEG PEG Perugia Perugia Sân bay San Egidio San Egidio Airport Ý Italy IT"
  },
  {
    "id": "PSR",
    "name": "Pescara (PSR)",
    "country": "Ý",
    "keywords": "PSR PSR Pescara Pescara Sân bay Pescara Pescara Airport Ý Italy IT"
  },
  {
    "id": "PEW",
    "name": "Peshawar (PEW)",
    "country": "Pakistan",
    "keywords": "PEW PEW Peshawar Peshawar Sân bay Peshawar Peshawar Airport Pakistan Pakistan PK"
  },
  {
    "id": "PSG",
    "name": "Petersburg (PSG)",
    "country": "Hoa kỳ",
    "keywords": "PSG PSG Petersburg Petersburg Sân bay Petersburg James A. Johnson Petersburg James A. Johnson Airport Hoa kỳ United States US"
  },
  {
    "id": "PNZ",
    "name": "Petrolina (PNZ)",
    "country": "Bra xin",
    "keywords": "PNZ PNZ Petrolina Petrolina Sân bay Senador Nilo Coelho Senador Nilo Coelho Airport Bra xin Brazil BR"
  },
  {
    "id": "PKC",
    "name": "Petropavlovsk-Kamchats (PKC)",
    "country": "Nga",
    "keywords": "PKC PKC Petropavlovsk-Kamchats Petropavlovsk-Kamchats Sân bay Yelizovo Yelizovo Airport Nga Russia RU"
  },
  {
    "id": "PHW",
    "name": "Phalaborwa (PHW)",
    "country": "Nam Phi",
    "keywords": "PHW PHW Phalaborwa Phalaborwa Sân bay Hendrik Van Eck Hendrik Van Eck Airport Nam Phi South Africa ZA"
  },
  {
    "id": "PZI",
    "name": "Phán Chi Hoa (PZI)",
    "country": "Trung Quốc",
    "keywords": "PZI PZI Phán Chi Hoa Pan Zhi Hua Sân bay Pan Zhi Hua Pan Zhi Hua Airport Trung Quốc China CN"
  },
  {
    "id": "PHL",
    "name": "Philadelphia (PHL)",
    "country": "Hoa kỳ",
    "keywords": "PHL PHL Philadelphia Philadelphia Sân bay Philadelphia Philadelphia International Airport Hoa kỳ United States US"
  },
  {
    "id": "PNE",
    "name": "Philadelphia (PNE)",
    "country": "Hoa kỳ",
    "keywords": "PNE PHL Philadelphia Philadelphia Sân bay Northeast Philadelphia Northeast Philadelphia Airport Hoa kỳ United States US"
  },
  {
    "id": "PNH",
    "name": "Phnôm Pênh (PNH)",
    "country": "Campuchia",
    "keywords": "PNH PNH Phnôm Pênh Phnom Penh Sân bay Phnom Penh Phnom Penh International Airport Campuchia Cambodia KH"
  },
  {
    "id": "AZA",
    "name": "Phoenix (AZA)",
    "country": "Hoa kỳ",
    "keywords": "AZA AZA Phoenix Phoenix Sân bay Phoenix-Mesa Gateway Phoenix-Mesa Gateway Airport Hoa kỳ United States US"
  },
  {
    "id": "DVT",
    "name": "Phoenix (DVT)",
    "country": "Hoa kỳ",
    "keywords": "DVT DVT Phoenix Phoenix Sân bay Phoenix Deer Valley Phoenix Deer Valley Airport Hoa kỳ United States US"
  },
  {
    "id": "PHX",
    "name": "Phoenix (PHX)",
    "country": "Hoa kỳ",
    "keywords": "PHX PHX Phoenix Phoenix Sân bay Phoenix Sky Harbor Phoenix Sky Harbor International Airport Hoa kỳ United States US"
  },
  {
    "id": "PRH",
    "name": "Phrae (PRH)",
    "country": "Thái Lan",
    "keywords": "PRH PRH Phrae Phrae Sân bay Phrae Phrae Airport Thái Lan Thailand TH"
  },
  {
    "id": "FUG",
    "name": "Phụ Dương (FUG)",
    "country": "Trung Quốc",
    "keywords": "FUG FUG Phụ Dương Fuyang Sân bay Fuyang Fuyang Airport Trung Quốc China CN"
  },
  {
    "id": "PQC",
    "name": "Phú Quốc (PQC)",
    "country": "Việt Nam",
    "keywords": "PQC PQC Phú Quốc Phu Quoc Sân bay Phú Quốc Phu Quoc Airport Việt Nam Vietnam VN"
  },
  {
    "id": "TBB",
    "name": "Phú Yên (TBB)",
    "country": "Việt Nam",
    "keywords": "TBB TBB Phú Yên Tuy Hoa Sân bay Tuy Hòa Tuy Hoa Airport Việt Nam Vietnam VN"
  },
  {
    "id": "FOC",
    "name": "Phúc Châu (FOC)",
    "country": "Trung Quốc",
    "keywords": "FOC FOC Phúc Châu Fuzhou Sân bay Fuzhou Changle Fuzhou Changle International Airport Trung Quốc China CN"
  },
  {
    "id": "FUO",
    "name": "Phục Sơn (FUO)",
    "country": "Trung Quốc",
    "keywords": "FUO FUO Phục Sơn Fuoshan Sân bay Fuoshan Fuoshan Airport Trung Quốc China CN"
  },
  {
    "id": "HKT",
    "name": "Phuket (HKT)",
    "country": "Thái Lan",
    "keywords": "HKT HKT Phuket Phuket Sân bay Phuket Phuket International Airport Thái Lan Thailand TH"
  },
  {
    "id": "PIX",
    "name": "Pico Island (PIX)",
    "country": "Bồ đào nha",
    "keywords": "PIX PIX Pico Island Pico Island Sân bay Pico Pico Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "PDS",
    "name": "Piedras Negras (PDS)",
    "country": "Mê hi cô",
    "keywords": "PDS PDS Piedras Negras Piedras Negras Sân bay Piedras Negras Piedras Negras International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "PIR",
    "name": "Pierre (PIR)",
    "country": "Hoa kỳ",
    "keywords": "PIR PIR Pierre Pierre Sân bay Pierre Regional Pierre Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PZB",
    "name": "Pietermaritzburg (PZB)",
    "country": "Nam Phi",
    "keywords": "PZB PZB Pietermaritzburg Pietermaritzburg Sân bay Pietermaritzburg Pietermaritzburg Airport Nam Phi South Africa ZA"
  },
  {
    "id": "PTG",
    "name": "Pietersburg (PTG)",
    "country": "Nam Phi",
    "keywords": "PTG PTG Pietersburg Pietersburg Sân bay Polokwane Polokwane International Airport Nam Phi South Africa ZA"
  },
  {
    "id": "PSA",
    "name": "Pisa (PSA)",
    "country": "Ý",
    "keywords": "PSA PSA Pisa Pisa Sân bay Galileo Galilei Galileo Galilei Airport Ý Italy IT"
  },
  {
    "id": "AGC",
    "name": "Pittsburgh (AGC)",
    "country": "Hoa kỳ",
    "keywords": "AGC PIT Pittsburgh Pittsburgh Sân bay Allegheny County Allegheny County Airport Hoa kỳ United States US"
  },
  {
    "id": "PIT",
    "name": "Pittsburgh (PIT)",
    "country": "Hoa kỳ",
    "keywords": "PIT PIT Pittsburgh Pittsburgh Sân bay quốc tế Pittsburgh Pittsburgh International Airport Hoa kỳ United States US"
  },
  {
    "id": "PIU",
    "name": "Piura (PIU)",
    "country": "Peru",
    "keywords": "PIU PIU Piura Piura Sân bay Piura Piura Airport Peru Peru PE"
  },
  {
    "id": "PLJ",
    "name": "Placencia (PLJ)",
    "country": "Belize",
    "keywords": "PLJ PLJ Placencia Placencia Sân bay Placencia Placencia Airport Belize Belize BZ"
  },
  {
    "id": "PBG",
    "name": "Plattsburgh (PBG)",
    "country": "Hoa kỳ",
    "keywords": "PBG PBG Plattsburgh Plattsburgh Sân bay Plattsburgh Plattsburgh International Airport Hoa kỳ United States US"
  },
  {
    "id": "PXU",
    "name": "PleiKu (PXU)",
    "country": "Việt Nam",
    "keywords": "PXU PXU PleiKu Pleiku Sân bay Pleiku Pleiku Airport Việt Nam Vietnam VN"
  },
  {
    "id": "PDV",
    "name": "Plovdiv (PDV)",
    "country": "Bun ga ri",
    "keywords": "PDV PDV Plovdiv Plovdiv Sân bay Plovdiv Plovdiv International Airport Bun ga ri Bulgaria BG"
  },
  {
    "id": "PIH",
    "name": "Pocatello (PIH)",
    "country": "Hoa kỳ",
    "keywords": "PIH PIH Pocatello Pocatello Sân bay Pocatello Regional Pocatello Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TGD",
    "name": "Podgorica (TGD)",
    "country": "Montenegro",
    "keywords": "TGD TGD Podgorica Podgorica Sân bay Podgorica Podgorica Airport Montenegro Montenegro ME"
  },
  {
    "id": "KPO",
    "name": "Pohang (KPO)",
    "country": "Hàn quốc",
    "keywords": "KPO KPO Pohang Pohang Sân bay Pohang Pohang Airport Hàn quốc Korea KR"
  },
  {
    "id": "PNI",
    "name": "Pohnpei (PNI)",
    "country": "Micronesia",
    "keywords": "PNI PNI Pohnpei Pohnpei Sân bay Pohnpei Pohnpei International Airport Micronesia Micronesia FM"
  },
  {
    "id": "PIZ",
    "name": "Point Lay (PIZ)",
    "country": "Hoa kỳ",
    "keywords": "PIZ PIZ Point Lay Point Lay Sân bay Point Lay LRRS Point Lay LRRS Airport Hoa kỳ United States US"
  },
  {
    "id": "PTP",
    "name": "Pointe A Pitre (PTP)",
    "country": "Guadeloupe",
    "keywords": "PTP PTP Pointe A Pitre Pointe A Pitre Sân bay Guadeloupe Pôle Caraïbes Guadeloupe Pôle Caraïbes Airport Guadeloupe Guadeloupe GP"
  },
  {
    "id": "PNR",
    "name": "Pointe Noire (PNR)",
    "country": "Công gô",
    "keywords": "PNR PNR Pointe Noire Pointe Noire Sân bay Pointe Noire Pointe Noire Airport Công gô Democratic Republic Of Congo CD"
  },
  {
    "id": "PIS",
    "name": "Poitiers (PIS)",
    "country": "Pháp",
    "keywords": "PIS PIS Poitiers Poitiers Sân bay Poitiers - Biard Poitiers - Biard Airport Pháp France FR"
  },
  {
    "id": "PKR",
    "name": "Pokhara (PKR)",
    "country": "Nepal",
    "keywords": "PKR PKR Pokhara Pokhara Sân bay Pokhara Pokhara Airport Nepal Nepal NP"
  },
  {
    "id": "PSE",
    "name": "Ponce (PSE)",
    "country": "Puerto Rico",
    "keywords": "PSE PSE Ponce Ponce Sân bay Mercedita Mercedita Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "PDL",
    "name": "Ponta Delgada (PDL)",
    "country": "Bồ đào nha",
    "keywords": "PDL PDL Ponta Delgada Ponta Delgada Sân bay João Paulo II João Paulo II Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "POX",
    "name": "Pontoise (POX)",
    "country": "Pháp",
    "keywords": "POX POX Pontoise Pontoise Sân bay Pontoise Pontoise Airport Pháp France FR"
  },
  {
    "id": "PPN",
    "name": "Popayan (PPN)",
    "country": "Colombia",
    "keywords": "PPN PPN Popayan Popayan Sân bay Guillermo León Valencia Guillermo León Valencia Airport Colombia Colombia CO"
  },
  {
    "id": "POR",
    "name": "Pori (POR)",
    "country": "Phần lan",
    "keywords": "POR POR Pori Pori Sân bay Pori Pori Airport Phần lan Finland FI"
  },
  {
    "id": "PMV",
    "name": "Porlamar (PMV)",
    "country": "Vê nê du ê la",
    "keywords": "PMV PMV Porlamar Porlamar Sân bay Del Caribe International General Santiago Del Caribe International General Santiago Marino A Vê nê du ê la Venezuela VE"
  },
  {
    "id": "CLM",
    "name": "Port Angeles (CLM)",
    "country": "Hoa kỳ",
    "keywords": "CLM CLM Port Angeles Port Angeles Sân bay William R. Fairchild William R. Fairchild International Airport Hoa kỳ United States US"
  },
  {
    "id": "PAP",
    "name": "Port Au Prince (PAP)",
    "country": "Haiti",
    "keywords": "PAP PAP Port Au Prince Port Au Prince Sân bay Port-au-Prince Port-au-Prince International Airport Haiti HAITI HT"
  },
  {
    "id": "IXZ",
    "name": "Port Blair (IXZ)",
    "country": "Ấn độ",
    "keywords": "IXZ IXZ Port Blair Port Blair Sân bay Vir Savarkar Vir Savarkar Airport Ấn độ India IN"
  },
  {
    "id": "PLZ",
    "name": "Port Elizabeth (PLZ)",
    "country": "Nam Phi",
    "keywords": "PLZ PLZ Port Elizabeth Port Elizabeth Sân bay Port Elizabeth Port Elizabeth Airport Nam Phi South Africa ZA"
  },
  {
    "id": "PHC",
    "name": "Port Harcourt (PHC)",
    "country": "Ni giê ria",
    "keywords": "PHC PHC Port Harcourt Port Harcourt Sân bay Port Harcourt Port Harcourt International Airport Ni giê ria Nigeria NG"
  },
  {
    "id": "YZT",
    "name": "Port Hardy (YZT)",
    "country": "Canada",
    "keywords": "YZT YZT Port Hardy Port Hardy Sân bay Port Hardy Port Hardy Airport Canada Canada CA"
  },
  {
    "id": "PHE",
    "name": "Port Hedland (PHE)",
    "country": "Úc",
    "keywords": "PHE PHE Port Hedland Port Hedland Sân bay Port Hedland Port Hedland International Airport Úc Australia AU"
  },
  {
    "id": "YHA",
    "name": "Port Hope Simpson (YHA)",
    "country": "Canada",
    "keywords": "YHA YHA Port Hope Simpson Port Hope Simpson Sân bay Port Hope Simpson Port Hope Simpson Airport Canada Canada CA"
  },
  {
    "id": "POM",
    "name": "Port Moresby (POM)",
    "country": "Papua niu ghi nê",
    "keywords": "POM POM Port Moresby Port Moresby Sân bay Jacksons Jacksons International Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "POS",
    "name": "Port Of Spain (POS)",
    "country": "Trinidad Và Tobago",
    "keywords": "POS POS Port Of Spain Port Of Spain Sân bay Piarco Piarco International Airport Trinidad Và Tobago Trinidad and Tobago TT"
  },
  {
    "id": "VLI",
    "name": "Port Vila (VLI)",
    "country": "Vanuatu",
    "keywords": "VLI VLI Port Vila Port Vila Sân bay Bauerfield Bauerfield International Airport Vanuatu Vanuatu VU"
  },
  {
    "id": "PWM",
    "name": "Portland (Maine) (PWM)",
    "country": "Hoa kỳ",
    "keywords": "PWM PWM Portland (Maine) Portland (Maine) Portland International Jetport Portland International Jetport Hoa kỳ United States US"
  },
  {
    "id": "PDX",
    "name": "Portland (Oregon) (PDX)",
    "country": "Hoa kỳ",
    "keywords": "PDX PDX Portland (Oregon) Portland (Oregon) Sân bay Portland Portland International Airport Hoa kỳ United States US"
  },
  {
    "id": "PTJ",
    "name": "Portland (PTJ)",
    "country": "Úc",
    "keywords": "PTJ PTJ Portland Portland Sân bay Portland Portland Airport Úc Australia AU"
  },
  {
    "id": "OPO",
    "name": "Porto (OPO)",
    "country": "Bồ đào nha",
    "keywords": "OPO OPO Porto Porto Sân bay Francisco Sá Carneiro Francisco Sá Carneiro Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "POA",
    "name": "Porto Alegre (POA)",
    "country": "Bra xin",
    "keywords": "POA POA Porto Alegre Porto Alegre Sân bay Salgado Filho Salgado Filho International Airport Bra xin Brazil BR"
  },
  {
    "id": "PXO",
    "name": "Porto Santo (PXO)",
    "country": "Bồ đào nha",
    "keywords": "PXO PXO Porto Santo Porto Santo Sân bay Porto Santo Porto Santo Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "BPS",
    "name": "Porto Seguro (BPS)",
    "country": "Bra xin",
    "keywords": "BPS BPS Porto Seguro Porto Seguro Sân bay Porto Seguro Porto Seguro Airport Bra xin Brazil BR"
  },
  {
    "id": "PVH",
    "name": "Porto Velho (PVH)",
    "country": "Bra xin",
    "keywords": "PVH PVH Porto Velho Porto Velho Sân bay Governador Jorge Teixeira de Oliveira Governador Jorge Teixeira de Oliveira Internationa Bra xin Brazil BR"
  },
  {
    "id": "PSM",
    "name": "Portsmouth (PSM)",
    "country": "Hoa kỳ",
    "keywords": "PSM PSM Portsmouth Portsmouth Pease International Tradeport Pease International Tradeport Hoa kỳ United States US"
  },
  {
    "id": "PSS",
    "name": "Posadas (PSS)",
    "country": "Ác Hen Tina",
    "keywords": "PSS PSS Posadas Posadas Sân bay Libertador General José de San Martín Libertador General José de San Martín Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "YSO",
    "name": "Postville (YSO)",
    "country": "Canada",
    "keywords": "YSO YSO Postville Postville Sân bay Postville Postville Airport Canada Canada CA"
  },
  {
    "id": "YPX",
    "name": "Povungnituk (YPX)",
    "country": "Canada",
    "keywords": "YPX YPX Povungnituk Povungnituk Sân bay Puvirnituq Puvirnituq Airport Canada Canada CA"
  },
  {
    "id": "YPW",
    "name": "Powell River (YPW)",
    "country": "Canada",
    "keywords": "YPW YPW Powell River Powell River Sân bay Powell River Powell River Airport Canada Canada CA"
  },
  {
    "id": "PAZ",
    "name": "Poza Rica (PAZ)",
    "country": "Mê hi cô",
    "keywords": "PAZ PAZ Poza Rica Poza Rica Sân bay El Tajín National El Tajín National Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "POZ",
    "name": "Poznan (POZ)",
    "country": "Ba Lan",
    "keywords": "POZ POZ Poznan Poznan Sân bay Poznan-Lawica Poznań-Ławica Airport Ba Lan Poland PL"
  },
  {
    "id": "PRG",
    "name": "Praha (PRG)",
    "country": "Cộng hòa Séc",
    "keywords": "PRG PRG Praha Prague Sân bay Václav Havel Václav Havel Airport Prague Cộng hòa Séc Czech Republic CZ"
  },
  {
    "id": "RAI",
    "name": "Praia (RAI)",
    "country": "Cape Verde",
    "keywords": "RAI RAI Praia Praia Sân bay Praia Praia International Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "PRI",
    "name": "Praslin Island (PRI)",
    "country": "Seychelles Islands",
    "keywords": "PRI PRI Praslin Island Praslin Island Sân bay Praslin Island Praslin Island Airport Seychelles Islands Seychelles Islands SC"
  },
  {
    "id": "PRC",
    "name": "Prescott (PRC)",
    "country": "Hoa kỳ",
    "keywords": "PRC PRC Prescott Prescott Ernest A. Love Field Ernest A. Love Field Hoa kỳ United States US"
  },
  {
    "id": "PPB",
    "name": "Presidente Prudente (PPB)",
    "country": "Bra xin",
    "keywords": "PPB PPB Presidente Prudente Presidente Prudente Sân bay Adhemar de Barros Adhemar de Barros Airport Bra xin Brazil BR"
  },
  {
    "id": "PQI",
    "name": "Presque Isle (PQI)",
    "country": "Hoa kỳ",
    "keywords": "PQI PQI Presque Isle Presque Isle Sân bay Northern Maine Regional Northern Maine Regional Airport at Presque Isle Hoa kỳ United States US"
  },
  {
    "id": "PVK",
    "name": "Preveza (PVK)",
    "country": "Hy lạp",
    "keywords": "PVK PVK Preveza Preveza Sân bay Aktion Aktion Airport Hy lạp Greece GR"
  },
  {
    "id": "YXS",
    "name": "Prince George (YXS)",
    "country": "Canada",
    "keywords": "YXS YXS Prince George Prince George Sân bay Prince George Prince George Airport Canada Canada CA"
  },
  {
    "id": "YPR",
    "name": "Prince Rupert (YPR)",
    "country": "Canada",
    "keywords": "YPR YPR Prince Rupert Prince Rupert Sân bay Prince Rupert Prince Rupert Airport Canada Canada CA"
  },
  {
    "id": "ZSW",
    "name": "Prince Rupert (ZSW)",
    "country": "Canada",
    "keywords": "ZSW YPR Prince Rupert Prince Rupert Sân bay Prince Rupert/Seal Cove Water Prince Rupert/Seal Cove Water Airport Canada Canada CA"
  },
  {
    "id": "HPV",
    "name": "Princeville (HPV)",
    "country": "Hoa kỳ",
    "keywords": "HPV HPV Princeville Princeville Sân bay Princeville Princeville Airport Hoa kỳ United States US"
  },
  {
    "id": "PRN",
    "name": "Prishtina (PRN)",
    "country": "Serbia",
    "keywords": "PRN PRN Prishtina Prishtina Sân bay Pristina Pristina International Airport Adem Jashari Serbia Serbia RS"
  },
  {
    "id": "PPP",
    "name": "Proserpine (PPP)",
    "country": "Úc",
    "keywords": "PPP PPP Proserpine Proserpine Sân bay Whitsunday Coast Whitsunday Coast Airport Úc Australia AU"
  },
  {
    "id": "PVD",
    "name": "Providence (PVD)",
    "country": "Hoa kỳ",
    "keywords": "PVD PVD Providence Providence Sân bay Theodore Francis Green State Theodore Francis Green State Airport Hoa kỳ United States US"
  },
  {
    "id": "PLS",
    "name": "Providenciales (PLS)",
    "country": "Turks Và Caicos Islands",
    "keywords": "PLS PLS Providenciales Providenciales Sân bay Providenciales Providenciales International Airport Turks Và Caicos Islands Turks and Caicos Islands TC"
  },
  {
    "id": "PVC",
    "name": "Provincetown (PVC)",
    "country": "Hoa kỳ",
    "keywords": "PVC PVC Provincetown Provincetown Sân bay Provincetown Municipal Provincetown Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "SCC",
    "name": "Prudhoe Bay Deadhorse (SCC)",
    "country": "Hoa kỳ",
    "keywords": "SCC SCC Prudhoe Bay Deadhorse Prudhoe Bay Deadhorse Sân bay Deadhorse Deadhorse Airport Hoa kỳ United States US"
  },
  {
    "id": "PQQ",
    "name": "Pt Macquarie (PQQ)",
    "country": "Úc",
    "keywords": "PQQ PQQ Pt Macquarie Pt Macquarie Sân bay Port Macquarie Port Macquarie Airport Úc Australia AU"
  },
  {
    "id": "PCL",
    "name": "Pucallpa (PCL)",
    "country": "Peru",
    "keywords": "PCL PCL Pucallpa Pucallpa Sân bay Captain Rolden Captain Rolden International Airport Peru Peru PE"
  },
  {
    "id": "PBC",
    "name": "Puebla (PBC)",
    "country": "Mê hi cô",
    "keywords": "PBC PBC Puebla Puebla Sân bay Hermanos Serdán Hermanos Serdán International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "PXM",
    "name": "Puerto Escondido (PXM)",
    "country": "Mê hi cô",
    "keywords": "PXM PXM Puerto Escondido Puerto Escondido Sân bay Puerto Escondido Puerto Escondido International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "PEM",
    "name": "Puerto Maldonado (PEM)",
    "country": "Peru",
    "keywords": "PEM PEM Puerto Maldonado Puerto Maldonado Sân bay Puerto Maldonado Puerto Maldonado International Airport Peru Peru PE"
  },
  {
    "id": "PMC",
    "name": "Puerto Montt (PMC)",
    "country": "Chi lê",
    "keywords": "PMC PMC Puerto Montt Puerto Montt Sân bay El Tepual El Tepual Airport Chi lê Chile CL"
  },
  {
    "id": "PZO",
    "name": "Puerto Ordaz (PZO)",
    "country": "Vê nê du ê la",
    "keywords": "PZO PZO Puerto Ordaz Puerto Ordaz Sân bay Manuel Carlos Piar Guayana Manuel Carlos Piar Guayana Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "PPE",
    "name": "Puerto Penasco (PPE)",
    "country": "Mê hi cô",
    "keywords": "PPE PPE Puerto Penasco Puerto Penasco Sân bay Mar de Cortés Mar de Cortés International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "POP",
    "name": "Puerto Plata (POP)",
    "country": "Cộng hòa Dominicana",
    "keywords": "POP POP Puerto Plata Puerto Plata Sân bay Puerto Plata Puerto Plata Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "PPS",
    "name": "Puerto Princesa (PPS)",
    "country": "Philippines",
    "keywords": "PPS PPS Puerto Princesa Puerto Princesa Sân bay Puerto Princesa Puerto Princesa Airport Philippines Philippines PH"
  },
  {
    "id": "PVR",
    "name": "Puerto Vallarta (PVR)",
    "country": "Mê hi cô",
    "keywords": "PVR PVR Puerto Vallarta Puerto Vallarta Sân bay Lic. Gustavo Díaz Ordaz Lic. Gustavo Díaz Ordaz International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "PUY",
    "name": "Pula (PUY)",
    "country": "Croatia",
    "keywords": "PUY PUY Pula Pula Sân bay Pula Pula Airport Croatia Croatia HR"
  },
  {
    "id": "PUW",
    "name": "Pullman (PUW)",
    "country": "Hoa kỳ",
    "keywords": "PUW PUW Pullman Pullman Sân bay Pullman-Moscow Regional Pullman-Moscow Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "PNQ",
    "name": "Pune (PNQ)",
    "country": "Ấn độ",
    "keywords": "PNQ PNQ Pune Pune Sân bay Pune Pune International Airport Ấn độ India IN"
  },
  {
    "id": "PUQ",
    "name": "Punta Arenas (PUQ)",
    "country": "Chi lê",
    "keywords": "PUQ PUQ Punta Arenas Punta Arenas Sân bay Carlos Ibanez Del Campo Carlos Ibanez Del Campo International Airport Chi lê Chile CL"
  },
  {
    "id": "PUJ",
    "name": "Punta Cana (PUJ)",
    "country": "Cộng hòa Dominicana",
    "keywords": "PUJ PUJ Punta Cana Punta Cana Sân bay Punta Cana Punta Cana International Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "PDP",
    "name": "Punta Del Este (PDP)",
    "country": "Uruguay",
    "keywords": "PDP PDP Punta Del Este Punta Del Este Sân bay C/C Carlos A. Curbelo de Laguna del Sauce C/C Carlos A. Curbelo de Laguna del Sauce Internat Uruguay Uruguay UY"
  },
  {
    "id": "PUS",
    "name": "Pusan (PUS)",
    "country": "Hàn quốc",
    "keywords": "PUS PUS Pusan Pusan Sân bay Gimhae Gimhae International Airport Hàn quốc Korea KR"
  },
  {
    "id": "AQI",
    "name": "Qaisumah (AQI)",
    "country": "Ả rập xê út",
    "keywords": "AQI AQI Qaisumah Qaisumah Sân bay Qaisumah Domestic Qaisumah Domestic Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "JJU",
    "name": "Qaqortoq (JJU)",
    "country": "Greenland",
    "keywords": "JJU JJU Qaqortoq Qaqortoq Qaqortoq Heliport Qaqortoq Heliport Greenland Greenland GL"
  },
  {
    "id": "JIQ",
    "name": "Qianjiang Wulingshan (JIQ)",
    "country": "Trung Quốc",
    "keywords": "JIQ JIQ Qianjiang Wulingshan Qianjiang Wulingshan Sân bay Qianjiang Wulingshan Qianjiang Wulingshan Airport Trung Quốc China CN"
  },
  {
    "id": "NDG",
    "name": "Qiqihar (NDG)",
    "country": "Trung Quốc",
    "keywords": "NDG NDG Qiqihar Qiqihar Sân bay Qiqihar Sanjiazi Qiqihar Sanjiazi Airport Trung Quốc China CN"
  },
  {
    "id": "VDH",
    "name": "Quảng Bình (VDH)",
    "country": "Việt Nam",
    "keywords": "VDH VDH Quảng Bình Quang Binh Sân bay Đồng Hới Dong Hoi Airport Việt Nam Vietnam VN"
  },
  {
    "id": "CAN",
    "name": "Quảng Châu (CAN)",
    "country": "Trung Quốc",
    "keywords": "CAN CAN Quảng Châu Guangzhou Sân bay Guangzhou Guangzhou Baiyun International Airport Trung Quốc China CN"
  },
  {
    "id": "VCL",
    "name": "Quảng Nam (VCL)",
    "country": "Việt Nam",
    "keywords": "VCL VCL Quảng Nam Quang Nam Sân bay Chu Lai Chu Lai Airport Việt Nam Vietnam VN"
  },
  {
    "id": "GYS",
    "name": "Quảng Nguyên (GYS)",
    "country": "Trung Quốc",
    "keywords": "GYS GYS Quảng Nguyên Guang Yuan Sân bay Guangyuan Guangyuan Airport Trung Quốc China CN"
  },
  {
    "id": "VDO",
    "name": "Quảng Ninh (VDO)",
    "country": "Việt Nam",
    "keywords": "VDO VDO Quảng Ninh Quangninh Sân bay Vân Đồn Van Don Airport Việt Nam Vietnam VN"
  },
  {
    "id": "YQC",
    "name": "Quaqtaq (YQC)",
    "country": "Canada",
    "keywords": "YQC YQC Quaqtaq Quaqtaq Sân bay Quaqtaq Quaqtaq Airport Canada Canada CA"
  },
  {
    "id": "YQB",
    "name": "Quebec (YQB)",
    "country": "Canada",
    "keywords": "YQB YQB Quebec Quebec Sân bay Québec/Jean Lesage Québec/Jean Lesage International Airport Canada Canada CA"
  },
  {
    "id": "ZQN",
    "name": "Queenstown (ZQN)",
    "country": "Niu di lân",
    "keywords": "ZQN ZQN Queenstown Queenstown Sân bay Queenstown Queenstown Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "UEL",
    "name": "Quelimane (UEL)",
    "country": "Mozambique",
    "keywords": "UEL UEL Quelimane Quelimane Sân bay Quelimane Quelimane Airport Mozambique Mozambique MZ"
  },
  {
    "id": "XQP",
    "name": "Quepos (XQP)",
    "country": "Costa Rica",
    "keywords": "XQP XQP Quepos Quepos Sân bay Quepos Managua Quepos Managua Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "QRO",
    "name": "Queretaro (QRO)",
    "country": "Mê hi cô",
    "keywords": "QRO QRO Queretaro Queretaro Sân bay Querétaro Querétaro International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "YQZ",
    "name": "Quesnel (YQZ)",
    "country": "Canada",
    "keywords": "YQZ YQZ Quesnel Quesnel Sân bay Quesnel Quesnel Airport Canada Canada CA"
  },
  {
    "id": "KWE",
    "name": "Quế Dương (KWE)",
    "country": "Trung Quốc",
    "keywords": "KWE KWE Quế Dương Guiyang Sân bay Guiyang Longdongbao Guiyang Longdongbao International Airport Trung Quốc China CN"
  },
  {
    "id": "KWL",
    "name": "Quế Lâm (KWL)",
    "country": "Trung Quốc",
    "keywords": "KWL KWL Quế Lâm Guilin Sân bay Guilin Liangjiang Guilin Liangjiang International Airport Trung Quốc China CN"
  },
  {
    "id": "UIH",
    "name": "Qui Nhơn (UIH)",
    "country": "Việt Nam",
    "keywords": "UIH UIH Qui Nhơn Qui Nhon Sân bay Phù Cát Phu Cat Airport Việt Nam Vietnam VN"
  },
  {
    "id": "UIP",
    "name": "Quimper (UIP)",
    "country": "Pháp",
    "keywords": "UIP UIP Quimper Quimper Sân bay Quimper - Cornouaille Quimper - Cornouaille Airport Pháp France FR"
  },
  {
    "id": "UIN",
    "name": "Quincy (UIN)",
    "country": "Hoa kỳ",
    "keywords": "UIN UIN Quincy Quincy Sân bay Quincy Regional Quincy Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "UIO",
    "name": "Quito (UIO)",
    "country": "Ecuador",
    "keywords": "UIO UIO Quito Quito Sân bay Mariscal Sucre Mariscal Sucre International Airport Ecuador Ecuador EC"
  },
  {
    "id": "RBA",
    "name": "Rabat (RBA)",
    "country": "Ma rốc",
    "keywords": "RBA RBA Rabat Rabat Sân bay Sale Sale Airport Ma rốc Morocco MA"
  },
  {
    "id": "RAB",
    "name": "Rabaul (RAB)",
    "country": "Papua niu ghi nê",
    "keywords": "RAB RAB Rabaul Rabaul Sân bay Tokua Tokua Airport Papua niu ghi nê Papua New Guinea (Niugini) PG"
  },
  {
    "id": "YOP",
    "name": "Rainbow Lake (YOP)",
    "country": "Canada",
    "keywords": "YOP YOP Rainbow Lake Rainbow Lake Sân bay Rainbow Lake Rainbow Lake Airport Canada Canada CA"
  },
  {
    "id": "RPR",
    "name": "Raipur (RPR)",
    "country": "Ấn độ",
    "keywords": "RPR RPR Raipur Raipur Sân bay Raipur Raipur Airport Ấn độ India IN"
  },
  {
    "id": "RAJ",
    "name": "Rajkot (RAJ)",
    "country": "Ấn độ",
    "keywords": "RAJ RAJ Rajkot Rajkot Sân bay Rajkot Rajkot Airport Ấn độ India IN"
  },
  {
    "id": "RDU",
    "name": "Raleigh (RDU)",
    "country": "Hoa kỳ",
    "keywords": "RDU RDU Raleigh Raleigh Sân bay Raleigh–Durham Raleigh–Durham International Airport Hoa kỳ United States US"
  },
  {
    "id": "IXR",
    "name": "Ranchi (IXR)",
    "country": "Ấn độ",
    "keywords": "IXR IXR Ranchi Ranchi Sân bay Birsa Munda Birsa Munda Airport Ấn độ India IN"
  },
  {
    "id": "YRT",
    "name": "Rankin Inlet (YRT)",
    "country": "Canada",
    "keywords": "YRT YRT Rankin Inlet Rankin Inlet Sân bay Rankin Inlet Rankin Inlet Airport Canada Canada CA"
  },
  {
    "id": "UNN",
    "name": "Ranong (UNN)",
    "country": "Thái Lan",
    "keywords": "UNN UNN Ranong Ranong Sân bay Ranong Ranong Airport Thái Lan Thailand TH"
  },
  {
    "id": "RAP",
    "name": "Rapid City (RAP)",
    "country": "Hoa kỳ",
    "keywords": "RAP RAP Rapid City Rapid City Sân bay Rapid City Regional Rapid City Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "RAR",
    "name": "Rarotonga (RAR)",
    "country": "Cook Islands",
    "keywords": "RAR RAR Rarotonga Rarotonga Sân bay Rarotonga Rarotonga International Airport Cook Islands Cook Islands CK"
  },
  {
    "id": "RKT",
    "name": "Ras Al Khaimah (RKT)",
    "country": "Ả rập thống nhất",
    "keywords": "RKT RKT Ras Al Khaimah Ras Al Khaimah Sân bay Ras Al Khaimah Ras Al Khaimah International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "REC",
    "name": "Recife (REC)",
    "country": "Bra xin",
    "keywords": "REC REC Recife Recife Sân bay Guararapes Guararapes International Airport Bra xin Brazil BR"
  },
  {
    "id": "YRL",
    "name": "Red Lake (YRL)",
    "country": "Canada",
    "keywords": "YRL YRL Red Lake Red Lake Sân bay Red Lake Red Lake Airport Canada Canada CA"
  },
  {
    "id": "RDM",
    "name": "Redmond Bend (RDM)",
    "country": "Hoa kỳ",
    "keywords": "RDM RDM Redmond Bend Redmond Bend Roberts Field Roberts Field Hoa kỳ United States US"
  },
  {
    "id": "REG",
    "name": "Reggio Calabria (REG)",
    "country": "Ý",
    "keywords": "REG REG Reggio Calabria Reggio Calabria Sân bay Reggio Calabria Reggio Calabria Airport Ý Italy IT"
  },
  {
    "id": "YQR",
    "name": "Regina (YQR)",
    "country": "Canada",
    "keywords": "YQR YQR Regina Regina Regina Regina Canada Canada CA"
  },
  {
    "id": "RNS",
    "name": "Rennes (RNS)",
    "country": "Pháp",
    "keywords": "RNS RNS Rennes Rennes Sân bay St. Jacques St. Jacques Airport Pháp France FR"
  },
  {
    "id": "RES",
    "name": "Resistencia (RES)",
    "country": "Ác Hen Tina",
    "keywords": "RES RES Resistencia Resistencia Sân bay Resistencia Resistencia International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "RUN",
    "name": "Reunion Island (RUN)",
    "country": "Reunion",
    "keywords": "RUN RUN Reunion Island Reunion Island Sân bay Roland Garros Roland Garros Airport Reunion Reunion RE"
  },
  {
    "id": "REU",
    "name": "Reus (REU)",
    "country": "Tây Ban Nha",
    "keywords": "REU REU Reus Reus Sân bay Reus Reus Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "KEF",
    "name": "Reykjavik (KEF)",
    "country": "Iceland",
    "keywords": "KEF REK Reykjavik Reykjavik Sân bay Keflavík Keflavík International Airport Iceland Iceland IS"
  },
  {
    "id": "RKV",
    "name": "Reykjavik (RKV)",
    "country": "Iceland",
    "keywords": "RKV RKV Reykjavik Reykjavik Sân bay Reykjavík Reykjavík Airport Iceland Iceland IS"
  },
  {
    "id": "REX",
    "name": "Reynosa (REX)",
    "country": "Mê hi cô",
    "keywords": "REX REX Reynosa Reynosa Sân bay General Lucio Blanco General Lucio Blanco International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "RHI",
    "name": "Rhinelander (RHI)",
    "country": "Hoa kỳ",
    "keywords": "RHI RHI Rhinelander Rhinelander Sân bay Rhinelander-Oneida County Rhinelander-Oneida County Airport Hoa kỳ United States US"
  },
  {
    "id": "RHO",
    "name": "Rhodes (RHO)",
    "country": "Hy lạp",
    "keywords": "RHO RHO Rhodes Rhodes Sân bay Rhodes Rhodes International Airport Hy lạp Greece GR"
  },
  {
    "id": "RAO",
    "name": "Ribeirao Preto (RAO)",
    "country": "Bra xin",
    "keywords": "RAO RAO Ribeirao Preto Ribeirao Preto Sân bay Leite Lopes Leite Lopes Airport Bra xin Brazil BR"
  },
  {
    "id": "RCB",
    "name": "Richards Bay (RCB)",
    "country": "Nam Phi",
    "keywords": "RCB RCB Richards Bay Richards Bay Sân bay Richards Bay Richards Bay Airport Nam Phi South Africa ZA"
  },
  {
    "id": "RIC",
    "name": "Richmond (RIC)",
    "country": "Hoa kỳ",
    "keywords": "RIC RIC Richmond Richmond Sân bay Richmond Richmond International Airport Hoa kỳ United States US"
  },
  {
    "id": "RIL",
    "name": "Rifle (RIL)",
    "country": "Hoa kỳ",
    "keywords": "RIL RIL Rifle Rifle Sân bay Garfield County Regional Garfield County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "RIX",
    "name": "Riga (RIX)",
    "country": "Latvia",
    "keywords": "RIX RIX Riga Riga Sân bay Riga Riga International Airport Latvia Latvia LV"
  },
  {
    "id": "RJK",
    "name": "Rijeka (RJK)",
    "country": "Croatia",
    "keywords": "RJK RJK Rijeka Rijeka Sân bay Rijeka Rijeka Airport Croatia Croatia HR"
  },
  {
    "id": "RKZ",
    "name": "Rikaze Peace (RKZ)",
    "country": "Trung Quốc",
    "keywords": "RKZ RKZ Rikaze Peace Rikaze Peace Sân bay Rikaze Peace Rikaze Peace Airport Trung Quốc China CN"
  },
  {
    "id": "RMI",
    "name": "Rimini (RMI)",
    "country": "Ý",
    "keywords": "RMI RMI Rimini Rimini Sân bay Federico Fellini Federico Fellini International Airport Ý Italy IT"
  },
  {
    "id": "RBR",
    "name": "Rio Branco (RBR)",
    "country": "Bra xin",
    "keywords": "RBR RBR Rio Branco Rio Branco Sân bay Rio Branco Rio Branco International Airport Bra xin Brazil BR"
  },
  {
    "id": "GIG",
    "name": "Rio De Janeiro (GIG)",
    "country": "Bra xin",
    "keywords": "GIG RIO Rio De Janeiro Rio De Janeiro Sân bay Rio de Janeiro-Galeão Rio de Janeiro-Galeão International Airport Bra xin Brazil BR"
  },
  {
    "id": "RIO",
    "name": "Rio De Janeiro (RIO)",
    "country": "Bra xin",
    "keywords": "RIO RIO Rio De Janeiro Rio De Janeiro Tất cả các sân bay All Airports Bra xin Brazil BR"
  },
  {
    "id": "SDU",
    "name": "Rio De Janeiro (SDU)",
    "country": "Bra xin",
    "keywords": "SDU RIO Rio De Janeiro Rio De Janeiro Sân bay Santos Dumont Santos Dumont Airport Bra xin Brazil BR"
  },
  {
    "id": "RGL",
    "name": "Rio Gallegos (RGL)",
    "country": "Ác Hen Tina",
    "keywords": "RGL RGL Rio Gallegos Rio Gallegos Sân bay Piloto Civil Norberto Fernández Piloto Civil Norberto Fernández International Airp Ác Hen Tina Argentina AR"
  },
  {
    "id": "RGA",
    "name": "Rio Grande (RGA)",
    "country": "Suriname",
    "keywords": "RGA RGA Rio Grande Rio Grande Sân bay Hermes Quijada Hermes Quijada International Airport Suriname Suriname SR"
  },
  {
    "id": "RIG",
    "name": "Rio Grande (RIG)",
    "country": "Bra xin",
    "keywords": "RIG RIG Rio Grande Rio Grande Sân bay Rio Grande Rio Grande Airport Bra xin Brazil BR"
  },
  {
    "id": "RIW",
    "name": "Riverton (RIW)",
    "country": "Hoa kỳ",
    "keywords": "RIW RIW Riverton Riverton Sân bay Riverton Regional Riverton Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "RUH",
    "name": "Riyadh (RUH)",
    "country": "Ả rập xê út",
    "keywords": "RUH RUH Riyadh Riyadh Sân bay King Khalid King Khalid International Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "ROA",
    "name": "Roanoke (ROA)",
    "country": "Hoa kỳ",
    "keywords": "ROA ROA Roanoke Roanoke Sân bay Roanoke Regional Roanoke Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "RTB",
    "name": "Roatan (RTB)",
    "country": "Honduras",
    "keywords": "RTB RTB Roatan Roatan Sân bay Juan Manuel Gálvez Juan Manuel Gálvez International Airport Honduras Honduras HN"
  },
  {
    "id": "RCE",
    "name": "Roche Harbor (RCE)",
    "country": "Hoa kỳ",
    "keywords": "RCE RCE Roche Harbor Roche Harbor Roche Harbor Seaplane Base Roche Harbor Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "ROC",
    "name": "Rochester (ROC)",
    "country": "Hoa kỳ",
    "keywords": "ROC ROC Rochester Rochester Sân bay Greater Rochester Greater Rochester International Airport Hoa kỳ United States US"
  },
  {
    "id": "RST",
    "name": "Rochester (RST)",
    "country": "Mông cổ",
    "keywords": "RST RST Rochester Rochester Sân bay Rochester Rochester International Airport Mông cổ Mongolia MN"
  },
  {
    "id": "RKS",
    "name": "Rock Springs (RKS)",
    "country": "Hoa kỳ",
    "keywords": "RKS RKS Rock Springs Rock Springs Sân bay Rock Springs – Sweetwater County Rock Springs – Sweetwater County Airport Hoa kỳ United States US"
  },
  {
    "id": "RFD",
    "name": "Rockford (RFD)",
    "country": "Hoa kỳ",
    "keywords": "RFD RFD Rockford Rockford Sân bay Chicago Rockford Chicago Rockford International Airport Hoa kỳ United States US"
  },
  {
    "id": "ROK",
    "name": "Rockhampton (ROK)",
    "country": "Úc",
    "keywords": "ROK ROK Rockhampton Rockhampton Sân bay Rockhampton Rockhampton Airport Úc Australia AU"
  },
  {
    "id": "RKD",
    "name": "Rockland (RKD)",
    "country": "Hoa kỳ",
    "keywords": "RKD RKD Rockland Rockland Sân bay Knox County Regional Knox County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "RDZ",
    "name": "Rodez (RDZ)",
    "country": "Pháp",
    "keywords": "RDZ RDZ Rodez Rodez Sân bay Rodez-Marcillac Rodez-Marcillac Airport Pháp France FR"
  },
  {
    "id": "RRG",
    "name": "Rodrigues Island (RRG)",
    "country": "Mauritius",
    "keywords": "RRG RRG Rodrigues Island Rodrigues Island Sân bay Sir Gaëtan Duval Sir Gaëtan Duval Airport Mauritius Mauritius MU"
  },
  {
    "id": "RVK",
    "name": "Roervik (RVK)",
    "country": "Na Uy",
    "keywords": "RVK RVK Roervik Roervik Sân bay Rørvik Rørvik Airport, Ryum Na Uy Norway NO"
  },
  {
    "id": "CIA",
    "name": "Rome (CIA)",
    "country": "Ý",
    "keywords": "CIA ROM Rome Rome Sân bay Rome Ciampino Rome Ciampino Airport Ý Italy IT"
  },
  {
    "id": "FCO",
    "name": "Rome (FCO)",
    "country": "Ý",
    "keywords": "FCO ROM Rome Rome Sân bay Leonardo da Vinci–Fiumicino Leonardo da Vinci–Fiumicino Airport Ý Italy IT"
  },
  {
    "id": "ROM",
    "name": "Rome (ROM)",
    "country": "Ý",
    "keywords": "ROM ROM Rome Rome Tất cả các sân bay All Airports Ý Italy IT"
  },
  {
    "id": "RNB",
    "name": "Ronneby (RNB)",
    "country": "Thụy điển",
    "keywords": "RNB RNB Ronneby Ronneby Sân bay Ronneby Ronneby Airport Thụy điển Sweden SE"
  },
  {
    "id": "RRS",
    "name": "Roros (RRS)",
    "country": "Na Uy",
    "keywords": "RRS RRS Roros Roros Sân bay Røros Røros Airport Na Uy Norway NO"
  },
  {
    "id": "ROS",
    "name": "Rosario (ROS)",
    "country": "Ác Hen Tina",
    "keywords": "ROS ROS Rosario Rosario Sân bay Rosario - Islas Malvinas Rosario - Islas Malvinas International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "RKE",
    "name": "Roskilde (RKE)",
    "country": "Ðan Mạch",
    "keywords": "RKE RKE Roskilde Roskilde Sân bay Roskilde Roskilde Airport Ðan Mạch Denmark DK"
  },
  {
    "id": "RLG",
    "name": "Rostock Laage (RLG)",
    "country": "Đức",
    "keywords": "RLG RLG Rostock Laage Rostock Laage Sân bay Rostock Laage Rostock Laage Airport Đức Germany DE"
  },
  {
    "id": "ROV",
    "name": "Rostov (ROV)",
    "country": "Nga",
    "keywords": "ROV ROV Rostov Rostov Sân bay Rostov-on-Don Rostov-on-Don Airport Nga Russia RU"
  },
  {
    "id": "ROW",
    "name": "Roswell (ROW)",
    "country": "Hoa kỳ",
    "keywords": "ROW ROW Roswell Roswell Roswell International Air Center Roswell International Air Center Hoa kỳ United States US"
  },
  {
    "id": "ROP",
    "name": "Rota (ROP)",
    "country": "Micronesia",
    "keywords": "ROP ROP Rota Rota Sân bay Rota Rota International Airport Micronesia Micronesia FM"
  },
  {
    "id": "ROT",
    "name": "Rotorua (ROT)",
    "country": "Niu di lân",
    "keywords": "ROT ROT Rotorua Rotorua Sân bay Rotorua Rotorua Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "RTM",
    "name": "Rotterdam (RTM)",
    "country": "Hà Lan",
    "keywords": "RTM RTM Rotterdam Rotterdam Sân bay Rotterdam The Hague Rotterdam The Hague Airport Hà Lan Netherlands NL"
  },
  {
    "id": "YUY",
    "name": "Rouyn Noranda (YUY)",
    "country": "Canada",
    "keywords": "YUY YUY Rouyn Noranda Rouyn Noranda Sân bay Rouyn-Noranda Rouyn-Noranda Airport Canada Canada CA"
  },
  {
    "id": "RVN",
    "name": "Rovaniemi (RVN)",
    "country": "Phần lan",
    "keywords": "RVN RVN Rovaniemi Rovaniemi Sân bay Rovaniemi Rovaniemi Airport Phần lan Finland FI"
  },
  {
    "id": "RXS",
    "name": "Roxas City (RXS)",
    "country": "Philippines",
    "keywords": "RXS RXS Roxas City Roxas City Sân bay Roxas Roxas Airport Philippines Philippines PH"
  },
  {
    "id": "RSH",
    "name": "Russian Mission (RSH)",
    "country": "Hoa kỳ",
    "keywords": "RSH RSH Russian Mission Russian Mission Sân bay Russian Mission Russian Mission Airport Hoa kỳ United States US"
  },
  {
    "id": "RUT",
    "name": "Rutland (RUT)",
    "country": "Hoa kỳ",
    "keywords": "RUT RUT Rutland Rutland Sân bay Rutland State Rutland State Airport Hoa kỳ United States US"
  },
  {
    "id": "RZE",
    "name": "Rzeszow (RZE)",
    "country": "Ba Lan",
    "keywords": "RZE RZE Rzeszow Rzeszow Sân bay Rzeszów-Jasionka Rzeszów-Jasionka Airport Ba Lan Poland PL"
  },
  {
    "id": "SCN",
    "name": "Saarbruecken (SCN)",
    "country": "Đức",
    "keywords": "SCN SCN Saarbruecken Saarbruecken Sân bay Saarbrücken Saarbrücken Airport Đức Germany DE"
  },
  {
    "id": "SAB",
    "name": "Saba Island (SAB)",
    "country": "Netherland Antilles",
    "keywords": "SAB SAB Saba Island Saba Island Sân bay Juancho E. Yrausquin Juancho E. Yrausquin Airport Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "SAW",
    "name": "Sabiha Gokcen (SAW)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "SAW SAW Sabiha Gokcen Sabiha Gokcen Sân bay Sabiha Gökçen Sabiha Gökçen International Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "MHR",
    "name": "Sacramento (MHR)",
    "country": "Hoa kỳ",
    "keywords": "MHR SAC Sacramento Sacramento Sân bay Sacramento Mather Sacramento Mather Airport Hoa kỳ United States US"
  },
  {
    "id": "SMF",
    "name": "Sacramento (SMF)",
    "country": "Hoa kỳ",
    "keywords": "SMF SAC Sacramento Sacramento Sân bay Sacramento Sacramento International Airport Hoa kỳ United States US"
  },
  {
    "id": "HSG",
    "name": "Saga (HSG)",
    "country": "Nhật bản",
    "keywords": "HSG HSG Saga Saga Sân bay Saga Saga Airport Nhật bản Japan JP"
  },
  {
    "id": "MBS",
    "name": "Saginaw (MBS)",
    "country": "Hoa kỳ",
    "keywords": "MBS MBS Saginaw Saginaw Sân bay MBS MBS International Airport Hoa kỳ United States US"
  },
  {
    "id": "STC",
    "name": "Saint Cloud (STC)",
    "country": "Hoa kỳ",
    "keywords": "STC STC Saint Cloud Saint Cloud Sân bay St. Cloud Regional St. Cloud Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SMS",
    "name": "Saint Marie (SMS)",
    "country": "Madagascar",
    "keywords": "SMS SMS Saint Marie Saint Marie Sân bay Sainte Marie Sainte Marie Airport Madagascar Madagascar MG"
  },
  {
    "id": "CCE",
    "name": "Saint Martin (CCE)",
    "country": "Saint Lucia",
    "keywords": "CCE CCE Saint Martin Saint Martin Sân bay L'Espérance L'Espérance Airport Saint Lucia Saint Lucia LC"
  },
  {
    "id": "SPN",
    "name": "Saipan (SPN)",
    "country": "Micronesia",
    "keywords": "SPN SPN Saipan Saipan Sân bay Saipan Saipan International Airport Micronesia Micronesia FM"
  },
  {
    "id": "SID",
    "name": "Sal Island (SID)",
    "country": "Cape Verde",
    "keywords": "SID SID Sal Island Sal Island Sân bay Amilcar Cabral Amilcar Cabral International Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "SLL",
    "name": "Salalah (SLL)",
    "country": "Oman",
    "keywords": "SLL SLL Salalah Salalah Sân bay Salalah Salalah Airport Oman Oman OM"
  },
  {
    "id": "SLM",
    "name": "Salamanca (SLM)",
    "country": "Tây Ban Nha",
    "keywords": "SLM SLM Salamanca Salamanca Sân bay Matacán Matacán Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "SLN",
    "name": "Salina (SLN)",
    "country": "Hoa kỳ",
    "keywords": "SLN SLN Salina Salina Sân bay Salina Municipal Salina Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "SBY",
    "name": "Salisbury Ocean City (SBY)",
    "country": "Hoa kỳ",
    "keywords": "SBY SBY Salisbury Ocean City Salisbury Ocean City Sân bay Salisbury-Ocean City Wicomico Regional Salisbury-Ocean City Wicomico Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YZG",
    "name": "Salluit (YZG)",
    "country": "Canada",
    "keywords": "YZG YZG Salluit Salluit Sân bay Salluit Salluit Airport Canada Canada CA"
  },
  {
    "id": "SLC",
    "name": "Salt Lake City (SLC)",
    "country": "Hoa kỳ",
    "keywords": "SLC SLC Salt Lake City Salt Lake City Sân bay Salt Lake City Salt Lake City International Airport Hoa kỳ United States US"
  },
  {
    "id": "SLA",
    "name": "Salta (SLA)",
    "country": "Ác Hen Tina",
    "keywords": "SLA SLA Salta Salta Sân bay Martín Miguel de Güemes Martín Miguel de Güemes International Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "SLW",
    "name": "Saltillo (SLW)",
    "country": "Mê hi cô",
    "keywords": "SLW SLW Saltillo Saltillo Sân bay Plan de Guadalupe Plan de Guadalupe International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "SSA",
    "name": "Salvador (SSA)",
    "country": "Bra xin",
    "keywords": "SSA SSA Salvador Salvador Sân bay Deputado Luís Eduardo Magalhães Deputado Luís Eduardo Magalhães International Airp Bra xin Brazil BR"
  },
  {
    "id": "SZG",
    "name": "Salzburg (SZG)",
    "country": "Áo",
    "keywords": "SZG SZG Salzburg Salzburg Sân bay Salzburg Salzburg Airport Áo Austria AT"
  },
  {
    "id": "KUF",
    "name": "Samara (KUF)",
    "country": "Nga",
    "keywords": "KUF KUF Samara Samara Sân bay Kurumoch Kurumoch Airport Nga Russia RU"
  },
  {
    "id": "SMI",
    "name": "Samos (SMI)",
    "country": "Hy lạp",
    "keywords": "SMI SMI Samos Samos Sân bay Samos Samos International Airport \"Aristarchos of Samos\" Hy lạp Greece GR"
  },
  {
    "id": "SZF",
    "name": "Samsun (SZF)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "SZF SSX Samsun Samsun Sân bay Carsamba Carsamba Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "ADZ",
    "name": "San Andres (ADZ)",
    "country": "Colombia",
    "keywords": "ADZ ADZ San Andres San Andres Sân bay Gustavo Rojas Pinilla Gustavo Rojas Pinilla International Airport Colombia Colombia CO"
  },
  {
    "id": "SJT",
    "name": "San Angelo (SJT)",
    "country": "Hoa kỳ",
    "keywords": "SJT SJT San Angelo San Angelo Sân bay San Angelo Regional San Angelo Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SAT",
    "name": "San Antonio (SAT)",
    "country": "Hoa kỳ",
    "keywords": "SAT SAT San Antonio San Antonio Sân bay San Antonio San Antonio International Airport Hoa kỳ United States US"
  },
  {
    "id": "SSF",
    "name": "San Antonio (SSF)",
    "country": "Hoa kỳ",
    "keywords": "SSF SSF San Antonio San Antonio Sân bay Stinson Municipal Stinson Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "BRC",
    "name": "San Carlos Bariloche (BRC)",
    "country": "Ác Hen Tina",
    "keywords": "BRC BRC San Carlos Bariloche San Carlos de Bariloche Sân bay San Carlos de Bariloche San Carlos de Bariloche Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "SCY",
    "name": "San Cristobal (SCY)",
    "country": "Ecuador",
    "keywords": "SCY SCY San Cristobal San Cristobal Sân bay San Cristóbal San Cristóbal Airport Ecuador Ecuador EC"
  },
  {
    "id": "MYF",
    "name": "San Diego (MYF)",
    "country": "Hoa kỳ",
    "keywords": "MYF SAN San Diego San Diego Montgomery Field Montgomery Field Hoa kỳ United States US"
  },
  {
    "id": "SAN",
    "name": "San Diego (SAN)",
    "country": "Hoa kỳ",
    "keywords": "SAN SAN San Diego San Diego Sân bay quốc tế San Diego San Diego International Airport Hoa kỳ United States US"
  },
  {
    "id": "SDM",
    "name": "San Diego (SDM)",
    "country": "Hoa kỳ",
    "keywords": "SDM SAN San Diego San Diego Sân bay Brown Field Municipal Brown Field Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "SEE",
    "name": "San Diego (SEE)",
    "country": "Hoa kỳ",
    "keywords": "SEE SEE San Diego San Diego Gillespie Field Gillespie Field Hoa kỳ United States US"
  },
  {
    "id": "OAK",
    "name": "San Francisco (OAK)",
    "country": "Hoa kỳ",
    "keywords": "OAK SFO San Francisco San Francisco Sân bay Oakland Oakland International Airport Hoa kỳ United States US"
  },
  {
    "id": "SFO",
    "name": "San Francisco (SFO)",
    "country": "Hoa kỳ",
    "keywords": "SFO SFO San Francisco San Francisco Sân bay San Francisco San Francisco International Airport Hoa kỳ United States US"
  },
  {
    "id": "SJC",
    "name": "San Francisco (SJC)",
    "country": "Hoa kỳ",
    "keywords": "SJC SFO San Francisco San Francisco Sân bay quốc tế San Jose Mineta San José International Airport Hoa kỳ United States US"
  },
  {
    "id": "RHV",
    "name": "San Jose (RHV)",
    "country": "Hoa kỳ",
    "keywords": "RHV SJC San Jose San Jose Sân bay Reid-Hillview Reid-Hillview Airport of Santa Clara County Hoa kỳ United States US"
  },
  {
    "id": "SYQ",
    "name": "San Jose (SYQ)",
    "country": "Costa Rica",
    "keywords": "SYQ SYQ San Jose San Jose Sân bay Tobías Bolaños Tobías Bolaños International Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "SJD",
    "name": "San Jose Cabo (SJD)",
    "country": "Mê hi cô",
    "keywords": "SJD SJD San Jose Cabo San Jose Cabo Sân bay Los Cabos Los Cabos International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "SIG",
    "name": "San Juan (SIG)",
    "country": "Puerto Rico",
    "keywords": "SIG SIG San Juan San Juan Sân bay Fernando Luis Ribas Dominicci Fernando Luis Ribas Dominicci Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "SJU",
    "name": "San Juan (SJU)",
    "country": "Puerto Rico",
    "keywords": "SJU SJU San Juan San Juan Sân bay Luis Muñoz Marín Luis Muñoz Marín International Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "UAQ",
    "name": "San Juan (UAQ)",
    "country": "Ác Hen Tina",
    "keywords": "UAQ UAQ San Juan San Juan Sân bay Domingo Faustino Sarmiento Domingo Faustino Sarmiento Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "LUQ",
    "name": "San Luis (LUQ)",
    "country": "Ác Hen Tina",
    "keywords": "LUQ LUQ San Luis San Luis Sân bay San Luis San Luis Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "CSL",
    "name": "San Luis Obispo (CSL)",
    "country": "Hoa kỳ",
    "keywords": "CSL CSL San Luis Obispo San Luis Obispo O'Sullivan Army Heliport O'Sullivan Army Heliport Hoa kỳ United States US"
  },
  {
    "id": "SBP",
    "name": "San Luis Obispo (SBP)",
    "country": "Hoa kỳ",
    "keywords": "SBP CSL San Luis Obispo San Luis Obispo Sân bay San Luis Obispo County Regional San Luis Obispo County Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SLP",
    "name": "San Luis Potosi (SLP)",
    "country": "Mê hi cô",
    "keywords": "SLP SLP San Luis Potosi San Luis Potosi Sân bay Ponciano Arriaga Ponciano Arriaga International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "SPR",
    "name": "San Pedro (SPR)",
    "country": "Belize",
    "keywords": "SPR SPR San Pedro San Pedro Sân bay San Pedro San Pedro Airport Belize Belize BZ"
  },
  {
    "id": "SAP",
    "name": "San Pedro Sula (SAP)",
    "country": "Honduras",
    "keywords": "SAP SAP San Pedro Sula San Pedro Sula Sân bay La Mesa La Mesa International Airport Honduras Honduras HN"
  },
  {
    "id": "AFA",
    "name": "San Rafael (AFA)",
    "country": "Ác Hen Tina",
    "keywords": "AFA AFA San Rafael San Rafael Sân bay San Rafael San Rafael Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "SAL",
    "name": "San Salvador (SAL)",
    "country": "El Salvador",
    "keywords": "SAL SAL San Salvador San Salvador Sân bay El Salvador El Salvador International Airport El Salvador El Salvador SV"
  },
  {
    "id": "ZSA",
    "name": "San Salvador (ZSA)",
    "country": "Bahamas",
    "keywords": "ZSA ZSA San Salvador San Salvador Sân bay San Salvador San Salvador Airport Bahamas Bahamas BS"
  },
  {
    "id": "GMZ",
    "name": "San Sebastian De La Gomera (GMZ)",
    "country": "Tây Ban Nha",
    "keywords": "GMZ GMZ San Sebastian De La Gomera San Sebastian De La Gomera Sân bay La Gomera La Gomera Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "EAS",
    "name": "San Sebastion (EAS)",
    "country": "Tây Ban Nha",
    "keywords": "EAS EAS San Sebastion San Sebastion Sân bay San Sebastián San Sebastián Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "SAH",
    "name": "Sanaa (SAH)",
    "country": "Yemen",
    "keywords": "SAH SAH Sanaa Sanaa Sân bay El Rahaba El Rahaba Airport Yemen Yemen YE"
  },
  {
    "id": "SDP",
    "name": "Sand Point (SDP)",
    "country": "Hoa kỳ",
    "keywords": "SDP SDP Sand Point Sand Point Sân bay Sand Point Sand Point Airport Hoa kỳ United States US"
  },
  {
    "id": "SDK",
    "name": "Sandakan (SDK)",
    "country": "Malaysia",
    "keywords": "SDK SDK Sandakan Sandakan Sân bay Sandakan Sandakan Airport Malaysia Malaysia MY"
  },
  {
    "id": "SDN",
    "name": "Sandane (SDN)",
    "country": "Na Uy",
    "keywords": "SDN SDN Sandane Sandane Sân bay Sandane Sandane Airport, Anda Na Uy Norway NO"
  },
  {
    "id": "SSJ",
    "name": "Sandnessjoen (SSJ)",
    "country": "Na Uy",
    "keywords": "SSJ SSJ Sandnessjoen Sandnessjoen Sân bay Sandnessjøen Sandnessjøen Airport, Stokka Na Uy Norway NO"
  },
  {
    "id": "YZP",
    "name": "Sandspit (YZP)",
    "country": "Canada",
    "keywords": "YZP YZP Sandspit Sandspit Sân bay Sandspit Sandspit Airport Canada Canada CA"
  },
  {
    "id": "SFB",
    "name": "Sanford (SFB)",
    "country": "Hoa kỳ",
    "keywords": "SFB SFB Sanford Sanford Sân bay Orlando Sanford Orlando Sanford International Airport Hoa kỳ United States US"
  },
  {
    "id": "YSK",
    "name": "Sanikiluaq (YSK)",
    "country": "Canada",
    "keywords": "YSK YSK Sanikiluaq Sanikiluaq Sân bay Sanikiluaq Sanikiluaq Airport Canada Canada CA"
  },
  {
    "id": "GNY",
    "name": "Sanliurfa (GNY)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "GNY SFQ Sanliurfa Sanliurfa Sân bay Sanliurfa GAP Şanlıurfa GAP Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "SNA",
    "name": "Santa Ana (SNA)",
    "country": "Hoa kỳ",
    "keywords": "SNA SNA Santa Ana Santa Ana Sân bay John Wayne John Wayne Airport Hoa kỳ United States US"
  },
  {
    "id": "SBA",
    "name": "Santa Barbara (SBA)",
    "country": "Hoa kỳ",
    "keywords": "SBA SBA Santa Barbara Santa Barbara Sân bay Santa Barbara Municipal Santa Barbara Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "SNU",
    "name": "Santa Clara (SNU)",
    "country": "Cuba",
    "keywords": "SNU SNU Santa Clara Santa Clara Sân bay Abel Santamaría Abel Santamaría Airport Cuba Cuba CU"
  },
  {
    "id": "VVI",
    "name": "Santa Cruz (VVI)",
    "country": "Bolivia",
    "keywords": "VVI SRZ Santa Cruz Santa Cruz Sân bay Viru Viru Viru Viru International Airport Bolivia Bolivia BO"
  },
  {
    "id": "FLW",
    "name": "Santa Cruz Flores (FLW)",
    "country": "Bồ đào nha",
    "keywords": "FLW FLW Santa Cruz Flores Santa Cruz Flores Sân bay Flores Flores Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "HUX",
    "name": "Santa Cruz Huatulco (HUX)",
    "country": "Mê hi cô",
    "keywords": "HUX HUX Santa Cruz Huatulco Santa Cruz Huatulco Sân bay Huatulco Huatulco International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "SAF",
    "name": "Santa Fe (SAF)",
    "country": "Hoa kỳ",
    "keywords": "SAF SAF Santa Fe Santa Fe Sân bay Santa Fe Municipal Santa Fe Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "SMA",
    "name": "Santa Maria (SMA)",
    "country": "Bồ đào nha",
    "keywords": "SMA SMA Santa Maria Santa Maria Sân bay Santa Maria Santa Maria Airport Bồ đào nha Portugal PT"
  },
  {
    "id": "SMR",
    "name": "Santa Marta (SMR)",
    "country": "Colombia",
    "keywords": "SMR SMR Santa Marta Santa Marta Sân bay Simón Bolívar Simón Bolívar International Airport Colombia Colombia CO"
  },
  {
    "id": "STS",
    "name": "Santa Rosa (STS)",
    "country": "Hoa kỳ",
    "keywords": "STS STS Santa Rosa Santa Rosa Sân bay Charles M. Schulz Sonoma County Charles M. Schulz Sonoma County Airport Hoa kỳ United States US"
  },
  {
    "id": "SDR",
    "name": "Santander (SDR)",
    "country": "Tây Ban Nha",
    "keywords": "SDR SDR Santander Santander Sân bay Santander Santander Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "STM",
    "name": "Santarem (STM)",
    "country": "Bra xin",
    "keywords": "STM STM Santarem Santarem Sân bay Santarém-Maestro Wilson Fonseca Santarém-Maestro Wilson Fonseca Airport Bra xin Brazil BR"
  },
  {
    "id": "SCL",
    "name": "Santiago (SCL)",
    "country": "Chi lê",
    "keywords": "SCL SCL Santiago Santiago Sân bay quốc tế Arturo Merino Benítez Arturo Merino Benítez International Airport Chi lê Chile CL"
  },
  {
    "id": "SCU",
    "name": "Santiago (SCU)",
    "country": "Cuba",
    "keywords": "SCU SCU Santiago Santiago Sân bay Antonio Maceo Antonio Maceo International Airport Cuba Cuba CU"
  },
  {
    "id": "STI",
    "name": "Santiago (STI)",
    "country": "Cộng hòa Dominicana",
    "keywords": "STI STI Santiago Santiago Sân bay Cibao Cibao International Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "ULC",
    "name": "Santiago (ULC)",
    "country": "Chi lê",
    "keywords": "ULC SCL Santiago Santiago Sân bay Los Cerrillos Los Cerrillos Airport Chi lê Chile CL"
  },
  {
    "id": "SCQ",
    "name": "Santiago De Compostela (SCQ)",
    "country": "Tây Ban Nha",
    "keywords": "SCQ SCQ Santiago De Compostela Santiago De Compostela Sân bay Santiago de Compostela Santiago de Compostela Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "SDE",
    "name": "Santiago Del Estero (SDE)",
    "country": "Ác Hen Tina",
    "keywords": "SDE SDE Santiago Del Estero Santiago Del Estero Sân bay Vicecomodoro Ángel de la Paz Aragonés Vicecomodoro Ángel de la Paz Aragonés Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "HEX",
    "name": "Santo Domingo (HEX)",
    "country": "Cộng hòa Dominicana",
    "keywords": "HEX HEX Santo Domingo Santo Domingo Sân bay Herrera Herrera International Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "SDQ",
    "name": "Santo Domingo (SDQ)",
    "country": "Cộng hòa Dominicana",
    "keywords": "SDQ SDQ Santo Domingo Santo Domingo Sân bay Las Américas Las Américas International Airport Cộng hòa Dominicana Dominican Republic DO"
  },
  {
    "id": "STD",
    "name": "Santo Domingo (STD)",
    "country": "Vê nê du ê la",
    "keywords": "STD STD Santo Domingo Santo Domingo Sân bay Mayor Buenaventura Vivas Mayor Buenaventura Vivas Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "SFL",
    "name": "Sao Filipe (SFL)",
    "country": "Cape Verde",
    "keywords": "SFL SFL Sao Filipe Sao Filipe Sân bay São Filipe São Filipe Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "SJP",
    "name": "Sao Jose Do Rio Preto (SJP)",
    "country": "Bra xin",
    "keywords": "SJP SJP Sao Jose Do Rio Preto Sao Jose Do Rio Preto Sân bay Prof. Eribelto Manoel Reino State Prof. Eribelto Manoel Reino State Airport Bra xin Brazil BR"
  },
  {
    "id": "SLZ",
    "name": "Sao Luiz (SLZ)",
    "country": "Bra xin",
    "keywords": "SLZ SLZ Sao Luiz Sao Luiz Sân bay Marechal Cunha Machado Marechal Cunha Machado International Airport Bra xin Brazil BR"
  },
  {
    "id": "SNE",
    "name": "Sao Nicolau (SNE)",
    "country": "Cape Verde",
    "keywords": "SNE SNE Sao Nicolau Sao Nicolau Sân bay Preguiça Preguiça Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "CGH",
    "name": "Sao Paulo (CGH)",
    "country": "Bra xin",
    "keywords": "CGH SAO Sao Paulo Sao Paulo Sân bay Congonhas/São Paulo National Congonhas/São Paulo National Airport Bra xin Brazil BR"
  },
  {
    "id": "GRU",
    "name": "Sao Paulo (GRU)",
    "country": "Bra xin",
    "keywords": "GRU SAO Sao Paulo Sao Paulo Sân bay São Paulo-Guarulhos São Paulo-Guarulhos International Airport Bra xin Brazil BR"
  },
  {
    "id": "SAO",
    "name": "Sao Paulo (SAO)",
    "country": "Bra xin",
    "keywords": "SAO SAO Sao Paulo Sao Paulo Tất cả các sân bay All Airports Bra xin Brazil BR"
  },
  {
    "id": "VCP",
    "name": "Sao Paulo (VCP)",
    "country": "Bra xin",
    "keywords": "VCP SAO Sao Paulo Sao Paulo Sân bay Viracopos-Campinas Viracopos-Campinas International Airport Bra xin Brazil BR"
  },
  {
    "id": "VXE",
    "name": "Sao Vicente (VXE)",
    "country": "Cape Verde",
    "keywords": "VXE VXE Sao Vicente Sao Vicente Sân bay Sao Pedro Sao Pedro Airport Cape Verde CAPE VERDE CV"
  },
  {
    "id": "CTS",
    "name": "Sapporo (CTS)",
    "country": "Nhật bản",
    "keywords": "CTS SPK Sapporo Sapporo Sân bay Chitose Chitose International Airport Nhật bản Japan JP"
  },
  {
    "id": "SPK",
    "name": "Sapporo (SPK)",
    "country": "Nhật bản",
    "keywords": "SPK SPK Sapporo Sapporo Tất cả các sân bay All Airports Nhật bản Japan JP"
  },
  {
    "id": "SJJ",
    "name": "Sarajevo (SJJ)",
    "country": "Bosnia Herzegovina",
    "keywords": "SJJ SJJ Sarajevo Sarajevo Sân bay Sarajevo Sarajevo International Airport Bosnia Herzegovina Bosnia Herzegovina BA"
  },
  {
    "id": "SLK",
    "name": "Saranac Lake (SLK)",
    "country": "Hoa kỳ",
    "keywords": "SLK SLK Saranac Lake Saranac Lake Sân bay Adirondack Regional Adirondack Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SRQ",
    "name": "Sarasota (SRQ)",
    "country": "Hoa kỳ",
    "keywords": "SRQ SRQ Sarasota Sarasota Sân bay Sarasota-Bradenton Sarasota-Bradenton International Airport Hoa kỳ United States US"
  },
  {
    "id": "RTW",
    "name": "Saratov (RTW)",
    "country": "Nga",
    "keywords": "RTW RTW Saratov Saratov Sân bay Saratov Tsentralny Saratov Tsentralny Airport Nga Russia RU"
  },
  {
    "id": "YZR",
    "name": "Sarnia (YZR)",
    "country": "Canada",
    "keywords": "YZR YZR Sarnia Sarnia Sân bay Sarnia Chris Hadfield Sarnia Chris Hadfield Airport Canada Canada CA"
  },
  {
    "id": "SUJ",
    "name": "Satu Mare (SUJ)",
    "country": "Rumani",
    "keywords": "SUJ SUJ Satu Mare Satu Mare Sân bay Satu Mare Satu Mare International Airport Rumani Romania RO"
  },
  {
    "id": "CIU",
    "name": "Sault Ste Marie (CIU)",
    "country": "Hoa kỳ",
    "keywords": "CIU SSM Sault Ste Marie Sault Ste Marie Sân bay Chippewa County Chippewa County International Airport Hoa kỳ United States US"
  },
  {
    "id": "YAM",
    "name": "Sault Ste Marie (YAM)",
    "country": "Canada",
    "keywords": "YAM YAM Sault Ste Marie Sault Ste Marie Sân bay Sault Ste. Marie Sault Ste. Marie Airport Canada Canada CA"
  },
  {
    "id": "SAV",
    "name": "Savannah (SAV)",
    "country": "Hoa kỳ",
    "keywords": "SAV SAV Savannah Savannah Sân bay Savannah/Hilton Head Savannah/Hilton Head International Airport Hoa kỳ United States US"
  },
  {
    "id": "ZVK",
    "name": "Savannakhet (ZVK)",
    "country": "Lào",
    "keywords": "ZVK ZVK Savannakhet Savannakhet Sân bay Savannakhet Savannakhet Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "YKL",
    "name": "Schefferville (YKL)",
    "country": "Canada",
    "keywords": "YKL YKL Schefferville Schefferville Sân bay Schefferville Schefferville Airport Canada Canada CA"
  },
  {
    "id": "BFF",
    "name": "Scottsbluff (BFF)",
    "country": "Hoa kỳ",
    "keywords": "BFF BFF Scottsbluff Scottsbluff Sân bay Western Nebraska Regional Western Nebraska Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SCF",
    "name": "Scottsdale (SCF)",
    "country": "Hoa kỳ",
    "keywords": "SCF SCF Scottsdale Scottsdale Sân bay Scottsdale Scottsdale Airport Hoa kỳ United States US"
  },
  {
    "id": "AVP",
    "name": "Scranton (AVP)",
    "country": "Hoa kỳ",
    "keywords": "AVP AVP Scranton Scranton Sân bay Wilkes-Barre/Scranton Wilkes-Barre/Scranton International Airport Hoa kỳ United States US"
  },
  {
    "id": "BFI",
    "name": "Seattle (BFI)",
    "country": "Hoa kỳ",
    "keywords": "BFI SEA Seattle Seattle Sân bay Boeing Field/King County Boeing Field/King County International Airport Hoa kỳ United States US"
  },
  {
    "id": "KEH",
    "name": "Seattle (KEH)",
    "country": "Hoa kỳ",
    "keywords": "KEH SEA Seattle Seattle Kenmore Air Harbor Kenmore Air Harbor Hoa kỳ United States US"
  },
  {
    "id": "LKE",
    "name": "Seattle (LKE)",
    "country": "Hoa kỳ",
    "keywords": "LKE SEA Seattle Seattle Kenmore Air Harbor Seaplane Base Kenmore Air Harbor Seaplane Base Hoa kỳ United States US"
  },
  {
    "id": "SEA",
    "name": "Seattle (SEA)",
    "country": "Hoa kỳ",
    "keywords": "SEA SEA Seattle Seattle Sân bay Seattle–Tacoma Seattle–Tacoma International Airport Hoa kỳ United States US"
  },
  {
    "id": "EGM",
    "name": "Sege (EGM)",
    "country": "Solomon Islands",
    "keywords": "EGM EGM Sege Sege Sân bay Sege Sege Airport Solomon Islands Solomon Islands SB"
  },
  {
    "id": "WLK",
    "name": "Selawik (WLK)",
    "country": "Hoa kỳ",
    "keywords": "WLK WLK Selawik Selawik Sân bay Selawik Selawik Airport Hoa kỳ United States US"
  },
  {
    "id": "SRG",
    "name": "Semarang (SRG)",
    "country": "Indonesia",
    "keywords": "SRG SRG Semarang Semarang Sân bay Achmad Yani Achmad Yani International Airport Indonesia Indonesia ID"
  },
  {
    "id": "SDJ",
    "name": "Sendai (SDJ)",
    "country": "Nhật bản",
    "keywords": "SDJ SDJ Sendai Sendai Sân bay Sendai Sendai Airport Nhật bản Japan JP"
  },
  {
    "id": "GMP",
    "name": "Seoul (GMP)",
    "country": "Hàn quốc",
    "keywords": "GMP SEL Seoul Seoul Sân bay Gimpo Gimpo International Airport Hàn quốc Korea KR"
  },
  {
    "id": "ICN",
    "name": "Seoul (ICN)",
    "country": "Hàn quốc",
    "keywords": "ICN SEL Seoul Seoul Sân bay Incheon Incheon International Airport Hàn quốc Korea KR"
  },
  {
    "id": "SEL",
    "name": "Seoul (SEL)",
    "country": "Hàn quốc",
    "keywords": "SEL SEL Seoul Seoul Sân bay All All Airports Hàn quốc Korea KR"
  },
  {
    "id": "YZV",
    "name": "Sept Iles (YZV)",
    "country": "Canada",
    "keywords": "YZV YZV Sept Iles Sept Iles Sân bay Sept-Îles Sept-Îles Airport Canada Canada CA"
  },
  {
    "id": "SVQ",
    "name": "Sevilla (SVQ)",
    "country": "Tây Ban Nha",
    "keywords": "SVQ SVQ Sevilla Sevilla Sân bay San Pablo San Pablo Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "SFA",
    "name": "Sfax (SFA)",
    "country": "Tuy ni di",
    "keywords": "SFA SFA Sfax Sfax Sân bay Thyna/El Maou Thyna/El Maou Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "SNN",
    "name": "Shannon (SNN)",
    "country": "Cộng hòa Ai len",
    "keywords": "SNN SNN Shannon Shannon Sân bay Shannon Shannon International Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "SHJ",
    "name": "Sharjah (SHJ)",
    "country": "Ả rập thống nhất",
    "keywords": "SHJ SHJ Sharjah Sharjah Sân bay Sharjah Sharjah International Airport Ả rập thống nhất United Arab Emirates AE"
  },
  {
    "id": "SSH",
    "name": "Sharm El Sheik (SSH)",
    "country": "Ai Cập",
    "keywords": "SSH SSH Sharm El Sheik Sharm El Sheik Sân bay Sharm el-Sheikh Sharm el-Sheikh International Airport Ai Cập Egypt EG"
  },
  {
    "id": "SHR",
    "name": "Sheridan (SHR)",
    "country": "Hoa kỳ",
    "keywords": "SHR SHR Sheridan Sheridan Sân bay Sheridan County Sheridan County Airport Hoa kỳ United States US"
  },
  {
    "id": "SCS",
    "name": "Shetland Islands Area (SCS)",
    "country": "Anh quốc",
    "keywords": "SCS SDZ Shetland Islands Area Shetland Islands Area Sân bay Scatsta Scatsta Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "CIT",
    "name": "Shimkent (CIT)",
    "country": "Kazakstan",
    "keywords": "CIT CIT Shimkent Shimkent Sân bay Shymkent Shymkent Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "NGQ",
    "name": "Shiquande Ngari Gunsa (NGQ)",
    "country": "Trung Quốc",
    "keywords": "NGQ NGQ Shiquande Ngari Gunsa Shiquande Ngari Gunsa Sân bay Shiquande Ngari Gunsa Shiquande Ngari Gunsa Airport Trung Quốc China CN"
  },
  {
    "id": "SYZ",
    "name": "Shiraz (SYZ)",
    "country": "Iran",
    "keywords": "SYZ SYZ Shiraz Shiraz Sân bay Shiraz Shiraz International Airport Iran Iran IR"
  },
  {
    "id": "SYO",
    "name": "Shonai (SYO)",
    "country": "Nhật bản",
    "keywords": "SYO SYO Shonai Shonai Sân bay Shonai Shonai Airport Nhật bản Japan JP"
  },
  {
    "id": "SOW",
    "name": "Show Low (SOW)",
    "country": "Hoa kỳ",
    "keywords": "SOW SOW Show Low Show Low Sân bay Show Low Regional Show Low Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "BAD",
    "name": "Shreveport (BAD)",
    "country": "Hoa kỳ",
    "keywords": "BAD BAD Shreveport Shreveport Barksdale Air Force Base Barksdale Air Force Base Hoa kỳ United States US"
  },
  {
    "id": "SHV",
    "name": "Shreveport (SHV)",
    "country": "Hoa kỳ",
    "keywords": "SHV SHV Shreveport Shreveport Sân bay Shreveport Regional Shreveport Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SKT",
    "name": "Sialkot (SKT)",
    "country": "Pakistan",
    "keywords": "SKT SKT Sialkot Sialkot Sân bay Sialkot Sialkot International Airport Pakistan Pakistan PK"
  },
  {
    "id": "SBZ",
    "name": "Sibiu (SBZ)",
    "country": "Rumani",
    "keywords": "SBZ SBZ Sibiu Sibiu Sân bay Sibiu Sibiu International Airport Rumani Romania RO"
  },
  {
    "id": "SBW",
    "name": "Sibu (SBW)",
    "country": "Malaysia",
    "keywords": "SBW SBW Sibu Sibu Sân bay Sibu Sibu Airport Malaysia Malaysia MY"
  },
  {
    "id": "SDY",
    "name": "Sidney (SDY)",
    "country": "Hoa kỳ",
    "keywords": "SDY SDY Sidney Sidney Sân bay Sidney-Richland Municipal Sidney-Richland Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "REP",
    "name": "Siem Reap (REP)",
    "country": "Campuchia",
    "keywords": "REP REP Siem Reap Siem Reap Sân bay Angkor Angkor International Airport Campuchia Cambodia KH"
  },
  {
    "id": "SAI",
    "name": "Siem Reap (SAI)",
    "country": "Campuchia",
    "keywords": "SAI REP Siem Reap Siem Reap Sân bay quốc tế Siem Reap–Angkor Siem Reap–Angkor International Airport Campuchia Cambodia KH"
  },
  {
    "id": "KOS",
    "name": "Sihanoukville (KOS)",
    "country": "Campuchia",
    "keywords": "KOS KOS Sihanoukville Sihanoukville Sân bay Sihanoukville Sihanoukville Airport Campuchia Cambodia KH"
  },
  {
    "id": "SVC",
    "name": "Silver City (SVC)",
    "country": "Hoa kỳ",
    "keywords": "SVC SVC Silver City Silver City Sân bay Grant County Grant County Airport Hoa kỳ United States US"
  },
  {
    "id": "SIP",
    "name": "Simferopol (SIP)",
    "country": "U-krai-na",
    "keywords": "SIP SIP Simferopol Simferopol Sân bay Simferopol Simferopol International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "SIN",
    "name": "Singapore (SIN)",
    "country": "Singapore",
    "keywords": "SIN SIN Singapore Singapore Sân bay Singapore Changi Singapore Changi Airport Singapore Singapore SG"
  },
  {
    "id": "SUX",
    "name": "Sioux City (SUX)",
    "country": "Hoa kỳ",
    "keywords": "SUX SUX Sioux City Sioux City Sân bay Sioux Gateway Sioux Gateway Airport Hoa kỳ United States US"
  },
  {
    "id": "FSD",
    "name": "Sioux Falls (FSD)",
    "country": "Hoa kỳ",
    "keywords": "FSD FSD Sioux Falls Sioux Falls Sân bay Sioux Falls Regional Sioux Falls Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YXL",
    "name": "Sioux Lookout (YXL)",
    "country": "Canada",
    "keywords": "YXL YXL Sioux Lookout Sioux Lookout Sân bay Sioux Lookout Sioux Lookout Airport Canada Canada CA"
  },
  {
    "id": "JHS",
    "name": "Sisimiut (JHS)",
    "country": "Greenland",
    "keywords": "JHS JHS Sisimiut Sisimiut Sân bay Sisimiut Sisimiut Airport Greenland Greenland GL"
  },
  {
    "id": "SIT",
    "name": "Sitka (SIT)",
    "country": "Hoa kỳ",
    "keywords": "SIT SIT Sitka Sitka Sân bay Sitka Rocky Gutierrez Sitka Rocky Gutierrez Airport Hoa kỳ United States US"
  },
  {
    "id": "VAS",
    "name": "Sivas (VAS)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "VAS VAS Sivas Sivas Sân bay Sivas Sivas Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "SGY",
    "name": "Skagway (SGY)",
    "country": "Hoa kỳ",
    "keywords": "SGY SGY Skagway Skagway Sân bay Skagway Skagway Airport Hoa kỳ United States US"
  },
  {
    "id": "SFT",
    "name": "Skelleftea (SFT)",
    "country": "Thụy điển",
    "keywords": "SFT SFT Skelleftea Skelleftea Sân bay Skellefteå Skellefteå Airport Thụy điển Sweden SE"
  },
  {
    "id": "JSI",
    "name": "Skiathos (JSI)",
    "country": "Hy lạp",
    "keywords": "JSI JSI Skiathos Skiathos Sân bay Skiathos Island National Skiathos Island National Airport Hy lạp Greece GR"
  },
  {
    "id": "SKE",
    "name": "Skien (SKE)",
    "country": "Na Uy",
    "keywords": "SKE SKE Skien Skien Sân bay Skien Skien Airport, Geiteryggen Na Uy Norway NO"
  },
  {
    "id": "SKP",
    "name": "Skopje (SKP)",
    "country": "Macedonia",
    "keywords": "SKP SKP Skopje Skopje Sân bay Skopje Skopje Airport Macedonia Macedonia F Y R O M MK"
  },
  {
    "id": "YYD",
    "name": "Smithers (YYD)",
    "country": "Canada",
    "keywords": "YYD YYD Smithers Smithers Sân bay Smithers Smithers Airport Canada Canada CA"
  },
  {
    "id": "SOF",
    "name": "Sofia (SOF)",
    "country": "Bun ga ri",
    "keywords": "SOF SOF Sofia Sofia Sân bay Sofia Sofia Airport Bun ga ri Bulgaria BG"
  },
  {
    "id": "SOG",
    "name": "Sogndal (SOG)",
    "country": "Na Uy",
    "keywords": "SOG SOG Sogndal Sogndal Sân bay Sogndal Sogndal Airport, Haukåsen Na Uy Norway NO"
  },
  {
    "id": "SOC",
    "name": "Solo (SOC)",
    "country": "Indonesia",
    "keywords": "SOC SOC Solo Solo Sân bay Adi Soemarmo Adi Soemarmo International Airport Indonesia Indonesia ID"
  },
  {
    "id": "SBN",
    "name": "South Bend (SBN)",
    "country": "Hoa kỳ",
    "keywords": "SBN SBN South Bend South Bend Sân bay South Bend Regional South Bend Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SOU",
    "name": "Southampton (SOU)",
    "country": "Anh quốc",
    "keywords": "SOU SOU Southampton Southampton Sân bay Southampton Southampton Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "SEN",
    "name": "Southend (SEN)",
    "country": "Anh quốc",
    "keywords": "SEN SEN Southend Southend Sân bay London Southend London Southend Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "SWA",
    "name": "Sơn Đầu (SWA)",
    "country": "Trung Quốc",
    "keywords": "SWA SWA Sơn Đầu Shantou Sân bay Jieyang Chaoshan Jieyang Chaoshan Airport Trung Quốc China CN"
  },
  {
    "id": "SPU",
    "name": "Split (SPU)",
    "country": "Croatia",
    "keywords": "SPU SPU Split Split Sân bay Split Split Airport Croatia Croatia HR"
  },
  {
    "id": "GEG",
    "name": "Spokane (GEG)",
    "country": "Hoa kỳ",
    "keywords": "GEG GEG Spokane Spokane Sân bay Spokane Spokane International Airport Hoa kỳ United States US"
  },
  {
    "id": "SFF",
    "name": "Spokane (SFF)",
    "country": "Hoa kỳ",
    "keywords": "SFF GEG Spokane Spokane Felts Field Felts Field Hoa kỳ United States US"
  },
  {
    "id": "SGF",
    "name": "Springfield (SGF)",
    "country": "Macau",
    "keywords": "SGF SGF Springfield Springfield Sân bay Springfield-Branson National Springfield-Branson National Airport Macau Macau MO"
  },
  {
    "id": "SPI",
    "name": "Springfield (SPI)",
    "country": "Hoa kỳ",
    "keywords": "SPI SPI Springfield Springfield Sân bay Abraham Lincoln Capital Abraham Lincoln Capital Airport Hoa kỳ United States US"
  },
  {
    "id": "SXR",
    "name": "Srinagar (SXR)",
    "country": "Ấn độ",
    "keywords": "SXR SXR Srinagar Srinagar Sân bay Srinagar Srinagar International Airport Ấn độ India IN"
  },
  {
    "id": "YAY",
    "name": "St Anthony (YAY)",
    "country": "Canada",
    "keywords": "YAY YAY St Anthony St Anthony Sân bay St. Anthony St. Anthony Airport Canada Canada CA"
  },
  {
    "id": "SBH",
    "name": "St Barthelemy (SBH)",
    "country": "Pháp",
    "keywords": "SBH SBH St Barthelemy St Barthelemy Sân bay Gustaf III Gustaf III Airport Pháp France FR"
  },
  {
    "id": "STX",
    "name": "St Croix (STX)",
    "country": "Virgin Islands",
    "keywords": "STX STX St Croix St Croix Sân bay Henry E. Rohlsen Henry E. Rohlsen Airport Virgin Islands Virgin Islands VI"
  },
  {
    "id": "EBU",
    "name": "St Etienne (EBU)",
    "country": "Pháp",
    "keywords": "EBU EBU St Etienne St Etienne Sân bay Saint-Étienne - Bouthéon Saint-Étienne - Bouthéon Airport Pháp France FR"
  },
  {
    "id": "EUX",
    "name": "St Eustatius (EUX)",
    "country": "Netherland Antilles",
    "keywords": "EUX EUX St Eustatius St Eustatius Sân bay F.D. Roosevelt F.D. Roosevelt Airport Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "SGU",
    "name": "St George (SGU)",
    "country": "Hoa kỳ",
    "keywords": "SGU SGU St George St George Sân bay St. George Municipal St. George Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "YSJ",
    "name": "St John (YSJ)",
    "country": "Canada",
    "keywords": "YSJ YSJ St John St John Sân bay Saint John Saint John Airport Canada Canada CA"
  },
  {
    "id": "YYT",
    "name": "St Johns (YYT)",
    "country": "Canada",
    "keywords": "YYT YYT St Johns St Johns Sân bay St. John's St. John's International Airport Canada Canada CA"
  },
  {
    "id": "CPS",
    "name": "St Louis (CPS)",
    "country": "Hoa kỳ",
    "keywords": "CPS STL St Louis St Louis Sân bay St. Louis Downtown St. Louis Downtown Airport Hoa kỳ United States US"
  },
  {
    "id": "STL",
    "name": "St Louis (STL)",
    "country": "Hoa kỳ",
    "keywords": "STL STL St Louis St Louis Sân bay quốc tế Lambert-St. Louis Lambert – St. Louis International Airport Hoa kỳ United States US"
  },
  {
    "id": "SUS",
    "name": "St Louis (SUS)",
    "country": "Hoa kỳ",
    "keywords": "SUS STL St Louis St Louis Sân bay Spirit of St. Louis Spirit of St. Louis Airport Hoa kỳ United States US"
  },
  {
    "id": "UVF",
    "name": "St Lucia (UVF)",
    "country": "Saint Lucia",
    "keywords": "UVF SLU St Lucia St Lucia Sân bay Hewanorra Hewanorra International Airport Saint Lucia Saint Lucia LC"
  },
  {
    "id": "SXM",
    "name": "St Maarten (SXM)",
    "country": "Netherland Antilles",
    "keywords": "SXM SXM St Maarten St Maarten Sân bay Princess Juliana Princess Juliana International Airport Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "MSB",
    "name": "St Martin (MSB)",
    "country": "Netherland Antilles",
    "keywords": "MSB MSB St Martin St Martin Marigot Seaplane Base Marigot Seaplane Base Netherland Antilles Netherland Antilles AN"
  },
  {
    "id": "SNR",
    "name": "St Nazaire (SNR)",
    "country": "Pháp",
    "keywords": "SNR SNR St Nazaire St Nazaire Sân bay Saint-Nazaire Montoir Saint-Nazaire Montoir Airport Pháp France FR"
  },
  {
    "id": "STP",
    "name": "St Paul (STP)",
    "country": "Hoa kỳ",
    "keywords": "STP STP St Paul St Paul Sân bay St. Paul Downtown St. Paul Downtown Airport Hoa kỳ United States US"
  },
  {
    "id": "PIE",
    "name": "St Petersburg (PIE)",
    "country": "Hoa kỳ",
    "keywords": "PIE PIE St Petersburg St Petersburg Sân bay St. Petersburg-Clearwater St. Petersburg-Clearwater International Airport Hoa kỳ United States US"
  },
  {
    "id": "RVH",
    "name": "St Petersburg (RVH)",
    "country": "Nga",
    "keywords": "RVH RVH St Petersburg St Petersburg Sân bay Rzhevka Rzhevka Airport Nga Russia RU"
  },
  {
    "id": "FSP",
    "name": "St Pierre (FSP)",
    "country": "Pháp",
    "keywords": "FSP FSP St Pierre St Pierre Sân bay Saint Pierre Saint Pierre Airport Pháp France FR"
  },
  {
    "id": "YPM",
    "name": "St Pierre (YPM)",
    "country": "Canada",
    "keywords": "YPM YPM St Pierre St Pierre Sân bay Pikangikum Pikangikum Airport Canada Canada CA"
  },
  {
    "id": "ZSE",
    "name": "St Pierre Dela Reunion (ZSE)",
    "country": "Reunion",
    "keywords": "ZSE ZSE St Pierre Dela Reunion St Pierre Dela Reunion Sân bay Pierrefonds Pierrefonds Airport Reunion Reunion RE"
  },
  {
    "id": "SSI",
    "name": "St Simons Is (SSI)",
    "country": "Hoa kỳ",
    "keywords": "SSI SSI St Simons Is St Simons Is Sân bay Malcolm McKinnon Malcolm McKinnon Airport Hoa kỳ United States US"
  },
  {
    "id": "STT",
    "name": "St Thomas (STT)",
    "country": "Virgin Islands",
    "keywords": "STT STT St Thomas St Thomas Sân bay Cyril E. King Cyril E. King Airport Virgin Islands Virgin Islands VI"
  },
  {
    "id": "LTT",
    "name": "St Tropez (LTT)",
    "country": "Pháp",
    "keywords": "LTT LTT St Tropez St Tropez Sân bay La Môle - Saint-Tropez La Môle - Saint-Tropez Airport Pháp France FR"
  },
  {
    "id": "SVD",
    "name": "St Vincent (SVD)",
    "country": "Saint Vincent Và Grenadines",
    "keywords": "SVD SVD St Vincent St Vincent Sân bay E.T. Joshua E.T. Joshua Airport Saint Vincent Và Grenadines Saint Vincent and the Grenadines VC"
  },
  {
    "id": "SCE",
    "name": "State College (SCE)",
    "country": "Hoa kỳ",
    "keywords": "SCE SCE State College State College Sân bay University Park University Park Airport Hoa kỳ United States US"
  },
  {
    "id": "SHD",
    "name": "Staunton (SHD)",
    "country": "Hoa kỳ",
    "keywords": "SHD SHD Staunton Staunton Sân bay Shenandoah Valley Regional Shenandoah Valley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "SVG",
    "name": "Stavanger (SVG)",
    "country": "Na Uy",
    "keywords": "SVG SVG Stavanger Stavanger Sân bay Stavanger Stavanger Airport, Sola Na Uy Norway NO"
  },
  {
    "id": "STW",
    "name": "Stavropol (STW)",
    "country": "Nga",
    "keywords": "STW STW Stavropol Stavropol Sân bay Stavropol Shpakovskoye Stavropol Shpakovskoye Airport Nga Russia RU"
  },
  {
    "id": "YJT",
    "name": "Stephenville (YJT)",
    "country": "Canada",
    "keywords": "YJT YJT Stephenville Stephenville Sân bay Stephenville Stephenville Airport Canada Canada CA"
  },
  {
    "id": "STE",
    "name": "Stevens Point (STE)",
    "country": "Hoa kỳ",
    "keywords": "STE STE Stevens Point Stevens Point Sân bay Stevens Point Municipal Stevens Point Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "ARN",
    "name": "Stockholm (ARN)",
    "country": "Thụy điển",
    "keywords": "ARN STO Stockholm Stockholm Sân bay Stockholm Arlanda Stockholm Arlanda Airport Thụy điển Sweden SE"
  },
  {
    "id": "BMA",
    "name": "Stockholm (BMA)",
    "country": "Thụy điển",
    "keywords": "BMA STO Stockholm Stockholm Sân bay Stockholm-Bromma Stockholm-Bromma Airport Thụy điển Sweden SE"
  },
  {
    "id": "NYO",
    "name": "Stockholm (NYO)",
    "country": "Thụy điển",
    "keywords": "NYO STO Stockholm Stockholm Sân bay Stockholm-Skavsta Stockholm-Skavsta Airport Thụy điển Sweden SE"
  },
  {
    "id": "STO",
    "name": "Stockholm (STO)",
    "country": "Thụy điển",
    "keywords": "STO STO Stockholm Stockholm Tất cả các sân bay All Airports Thụy điển Sweden SE"
  },
  {
    "id": "SCK",
    "name": "Stockton (SCK)",
    "country": "Hoa kỳ",
    "keywords": "SCK SCK Stockton Stockton Sân bay Stockton Metropolitan Stockton Metropolitan Airport Hoa kỳ United States US"
  },
  {
    "id": "SRP",
    "name": "Stord (SRP)",
    "country": "Na Uy",
    "keywords": "SRP SRP Stord Stord Sân bay Stord Stord Airport, Sørstokken Na Uy Norway NO"
  },
  {
    "id": "SKN",
    "name": "Storkmarknes (SKN)",
    "country": "Na Uy",
    "keywords": "SKN SKN Storkmarknes Stokmarknes Sân bay Stokmarknes Stokmarknes Airport, Skagen Na Uy Norway NO"
  },
  {
    "id": "SYY",
    "name": "Stornoway (SYY)",
    "country": "Anh quốc",
    "keywords": "SYY SYY Stornoway Stornoway Sân bay Stornoway Stornoway Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "SXB",
    "name": "Strasbourg (SXB)",
    "country": "Pháp",
    "keywords": "SXB SXB Strasbourg Strasbourg Sân bay Strasbourg Entzheim Strasbourg Entzheim International Airport Pháp France FR"
  },
  {
    "id": "STR",
    "name": "Stuttgart (STR)",
    "country": "Đức",
    "keywords": "STR STR Stuttgart Stuttgart Sân bay Stuttgart Stuttgart Airport Đức Germany DE"
  },
  {
    "id": "ZWS",
    "name": "Stuttgart (ZWS)",
    "country": "Đức",
    "keywords": "ZWS ZWS Stuttgart Stuttgart Stuttgart Hauptbahnhof Stuttgart Hauptbahnhof Đức Germany DE"
  },
  {
    "id": "SCV",
    "name": "Suceava (SCV)",
    "country": "Rumani",
    "keywords": "SCV SCV Suceava Suceava Sân bay Suceava Suceava Airport Rumani Romania RO"
  },
  {
    "id": "SRE",
    "name": "Sucre (SRE)",
    "country": "Bolivia",
    "keywords": "SRE SRE Sucre Sucre Sân bay Juana Azurduy de Padilla Juana Azurduy de Padilla International Airport Bolivia Bolivia BO"
  },
  {
    "id": "YSB",
    "name": "Sudbury (YSB)",
    "country": "Canada",
    "keywords": "YSB YSB Sudbury Sudbury Sân bay Sudbury Sudbury Airport Canada Canada CA"
  },
  {
    "id": "SGR",
    "name": "Sugar Land (SGR)",
    "country": "Hoa kỳ",
    "keywords": "SGR SGR Sugar Land Sugar Land Sân bay Sugar Land Regional Sugar Land Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "THS",
    "name": "Sukhothai (THS)",
    "country": "Thái Lan",
    "keywords": "THS THS Sukhothai Sukhothai Sân bay Sukhothai Sukhothai Airport Thái Lan Thailand TH"
  },
  {
    "id": "SUN",
    "name": "Sun Valley (SUN)",
    "country": "Hoa kỳ",
    "keywords": "SUN SUN Sun Valley Sun Valley Sân bay Friedman Memorial Friedman Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "SDL",
    "name": "Sundsvall (SDL)",
    "country": "Thụy điển",
    "keywords": "SDL SDL Sundsvall Sundsvall Sân bay Sundsvall-Härnösand Sundsvall-Härnösand Airport Thụy điển Sweden SE"
  },
  {
    "id": "SUB",
    "name": "Surabaya (SUB)",
    "country": "Indonesia",
    "keywords": "SUB SUB Surabaya Surabaya Sân bay Juanda Juanda International Airport Indonesia Indonesia ID"
  },
  {
    "id": "URT",
    "name": "Surat Thani (URT)",
    "country": "Thái Lan",
    "keywords": "URT URT Surat Thani Surat Thani Sân bay Surat Thani Surat Thani Airport Thái Lan Thailand TH"
  },
  {
    "id": "SGC",
    "name": "Surgut (SGC)",
    "country": "Nga",
    "keywords": "SGC SGC Surgut Surgut Sân bay Surgut Surgut Airport Nga Russia RU"
  },
  {
    "id": "SUV",
    "name": "Suva (SUV)",
    "country": "Fiji Islands",
    "keywords": "SUV SUV Suva Suva Sân bay Nausori Nausori International Airport Fiji Islands Fiji Islands FJ"
  },
  {
    "id": "EVG",
    "name": "Sveg (EVG)",
    "country": "Thụy điển",
    "keywords": "EVG EVG Sveg Sveg Sân bay Sveg Sveg Airport Thụy điển Sweden SE"
  },
  {
    "id": "SVJ",
    "name": "Svolvaer (SVJ)",
    "country": "Na Uy",
    "keywords": "SVJ SVJ Svolvaer Svolvaer Sân bay Svolvær Svolvær Airport, Helle Na Uy Norway NO"
  },
  {
    "id": "LBH",
    "name": "Sydney (LBH)",
    "country": "Úc",
    "keywords": "LBH SYD Sydney Sydney Palm Beach Seaplane Base Palm Beach Seaplane Base Úc Australia AU"
  },
  {
    "id": "SYD",
    "name": "Sydney (SYD)",
    "country": "Úc",
    "keywords": "SYD SYD Sydney Sydney Sân bay Kingsford Smith Kingsford Smith International Airport Úc Australia AU"
  },
  {
    "id": "YQY",
    "name": "Sydney (YQY)",
    "country": "Canada",
    "keywords": "YQY YQY Sydney Sydney Sân bay Sydney/J.A. Douglas McCurdy Sydney/J.A. Douglas McCurdy Airport Canada Canada CA"
  },
  {
    "id": "SCW",
    "name": "Syktyvkar (SCW)",
    "country": "Nga",
    "keywords": "SCW SCW Syktyvkar Syktyvkar Sân bay Syktyvkar Syktyvkar Airport Nga Russia RU"
  },
  {
    "id": "ZYL",
    "name": "Sylhet (ZYL)",
    "country": "Băng la đét",
    "keywords": "ZYL ZYL Sylhet Sylhet Sân bay Osmani Osmani International Airport Băng la đét Bangladesh BD"
  },
  {
    "id": "SYR",
    "name": "Syracuse (SYR)",
    "country": "Hoa kỳ",
    "keywords": "SYR SYR Syracuse Syracuse Sân bay Syracuse Hancock Syracuse Hancock International Airport Hoa kỳ United States US"
  },
  {
    "id": "JSY",
    "name": "Syros Island (JSY)",
    "country": "Hy lạp",
    "keywords": "JSY JSY Syros Island Syros Island Sân bay Syros Island Syros Island Airport Hy lạp Greece GR"
  },
  {
    "id": "SZZ",
    "name": "Szczecin (SZZ)",
    "country": "Ba Lan",
    "keywords": "SZZ SZZ Szczecin Szczecin Sân bay Szczecin-Goleniów \"Solidarnosc\" Szczecin-Goleniów \"Solidarnosc\" Airport Ba Lan Poland PL"
  },
  {
    "id": "TCP",
    "name": "Taba (TCP)",
    "country": "Ai Cập",
    "keywords": "TCP TCP Taba Taba Sân bay Taba Taba International Airport Ai Cập Egypt EG"
  },
  {
    "id": "TBJ",
    "name": "Tabarka (TBJ)",
    "country": "Tuy ni di",
    "keywords": "TBJ TBJ Tabarka Tabarka Sân bay Tabarka - 7 Novembre Tabarka - 7 Novembre International Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "TBZ",
    "name": "Tabriz (TBZ)",
    "country": "Iran",
    "keywords": "TBZ TBZ Tabriz Tabriz Sân bay Tabriz Tabriz International Airport Iran Iran IR"
  },
  {
    "id": "TUU",
    "name": "Tabuk (TUU)",
    "country": "Ả rập xê út",
    "keywords": "TUU TUU Tabuk Tabuk Sân bay Tabuk Regional Tabuk Regional Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "TAC",
    "name": "Tacloban (TAC)",
    "country": "Philippines",
    "keywords": "TAC TAC Tacloban Tacloban Sân bay Daniel Z. Romualdez Daniel Z. Romualdez Airport Philippines Philippines PH"
  },
  {
    "id": "RMQ",
    "name": "Taichung (RMQ)",
    "country": "Đài Loan",
    "keywords": "RMQ RMQ Taichung Taichung Sân bay Taichung Ching Chuan Kang Taichung Ching Chuan Kang Airport Đài Loan Taiwan TW"
  },
  {
    "id": "TIF",
    "name": "Taif (TIF)",
    "country": "Ả rập xê út",
    "keywords": "TIF TIF Taif Taif Sân bay Ta'if Ta'if Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "TTT",
    "name": "Taitung (TTT)",
    "country": "Đài Loan",
    "keywords": "TTT TTT Taitung Taitung Sân bay Taitung Taitung Airport Đài Loan Taiwan TW"
  },
  {
    "id": "TAK",
    "name": "Takamatsu (TAK)",
    "country": "Nhật bản",
    "keywords": "TAK TAK Takamatsu Takamatsu Sân bay Takamatsu Takamatsu Airport Nhật bản Japan JP"
  },
  {
    "id": "TLH",
    "name": "Tallahassee (TLH)",
    "country": "Hoa kỳ",
    "keywords": "TLH TLH Tallahassee Tallahassee Sân bay Tallahassee Regional Tallahassee Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TLL",
    "name": "Tallinn (TLL)",
    "country": "Estonia",
    "keywords": "TLL TLL Tallinn Tallinn Sân bay Lennart Meri Tallinn Lennart Meri Tallinn Airport Estonia Estonia EE"
  },
  {
    "id": "YYH",
    "name": "Taloyoak (YYH)",
    "country": "Canada",
    "keywords": "YYH YYH Taloyoak Taloyoak Sân bay Taloyoak Taloyoak Airport Canada Canada CA"
  },
  {
    "id": "SYX",
    "name": "Tam Á (SYX)",
    "country": "Trung Quốc",
    "keywords": "SYX SYX Tam Á Sanya Sân bay Sanya Phoenix Sanya Phoenix International Airport Trung Quốc China CN"
  },
  {
    "id": "TNO",
    "name": "Tamarindo (TNO)",
    "country": "Costa Rica",
    "keywords": "TNO TNO Tamarindo Tamarindo Sân bay Tamarindo Tamarindo Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "TMM",
    "name": "Tamatave (TMM)",
    "country": "Madagascar",
    "keywords": "TMM TMM Tamatave Tamatave Sân bay Toamasina Toamasina Airport Madagascar Madagascar MG"
  },
  {
    "id": "TMU",
    "name": "Tambor (TMU)",
    "country": "Costa Rica",
    "keywords": "TMU TMU Tambor Tambor Sân bay Tambor Tambor Airport Costa Rica COSTA RICA CR"
  },
  {
    "id": "TPA",
    "name": "Tampa (TPA)",
    "country": "Hoa kỳ",
    "keywords": "TPA TPA Tampa Tampa Sân bay Tampa Tampa Airport Hoa kỳ United States US"
  },
  {
    "id": "TPF",
    "name": "Tampa (TPF)",
    "country": "Hoa kỳ",
    "keywords": "TPF TPA Tampa Tampa Sân bay Peter O. Knight Peter O. Knight Airport Hoa kỳ United States US"
  },
  {
    "id": "TMP",
    "name": "Tampere (TMP)",
    "country": "Phần lan",
    "keywords": "TMP TMP Tampere Tampere Sân bay Tampere-Pirkkala Tampere-Pirkkala Airport Phần lan Finland FI"
  },
  {
    "id": "TAM",
    "name": "Tampico (TAM)",
    "country": "Mê hi cô",
    "keywords": "TAM TAM Tampico Tampico Sân bay General Francisco Javier Mina General Francisco Javier Mina International Airpor Mê hi cô MEXICO MX"
  },
  {
    "id": "TMW",
    "name": "Tamworth (TMW)",
    "country": "Úc",
    "keywords": "TMW TMW Tamworth Tamworth Sân bay Tamworth Tamworth Airport Úc Australia AU"
  },
  {
    "id": "TAL",
    "name": "Tanana (TAL)",
    "country": "Hoa kỳ",
    "keywords": "TAL TAL Tanana Tanana Sân bay Ralph M. Calhoun Memorial Ralph M. Calhoun Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "TNR",
    "name": "Tananarive (TNR)",
    "country": "Madagascar",
    "keywords": "TNR TNR Tananarive Tananarive Sân bay Ivato Ivato Airport Madagascar Madagascar MG"
  },
  {
    "id": "TNG",
    "name": "Tangier (TNG)",
    "country": "Ma rốc",
    "keywords": "TNG TNG Tangier Tangier Sân bay Ibn Batouta Ibn Batouta International Airport Ma rốc Morocco MA"
  },
  {
    "id": "TVS",
    "name": "Tangshan (TVS)",
    "country": "Trung Quốc",
    "keywords": "TVS TVS Tangshan Tangshan Sân bay Tangshan Tangshan Airport Trung Quốc China CN"
  },
  {
    "id": "TJQ",
    "name": "Tanjung Pandan (TJQ)",
    "country": "Indonesia",
    "keywords": "TJQ TJQ Tanjung Pandan Tanjung Pandan Sân bay Buluh Tumbang Buluh Tumbang Airport Indonesia Indonesia ID"
  },
  {
    "id": "TAP",
    "name": "Tapachula (TAP)",
    "country": "Mê hi cô",
    "keywords": "TAP TAP Tapachula Tapachula Sân bay Tapachula Tapachula International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "TRK",
    "name": "Tarakan (TRK)",
    "country": "Indonesia",
    "keywords": "TRK TRK Tarakan Tarakan Sân bay Juwata Juwata Airport Indonesia Indonesia ID"
  },
  {
    "id": "TRW",
    "name": "Tarawa (TRW)",
    "country": "Kiribati",
    "keywords": "TRW TRW Tarawa Tarawa Sân bay Bonriki Bonriki International Airport Kiribati Kiribati KI"
  },
  {
    "id": "TGM",
    "name": "Targu Mures (TGM)",
    "country": "Rumani",
    "keywords": "TGM TGM Targu Mures Targu Mures Sân bay Târgu Mures Târgu Mureş International Airport Rumani Romania RO"
  },
  {
    "id": "TJA",
    "name": "Tarija (TJA)",
    "country": "Bolivia",
    "keywords": "TJA TJA Tarija Tarija Sân bay Capitán Oriel Lea Plaza Capitán Oriel Lea Plaza Airport Bolivia Bolivia BO"
  },
  {
    "id": "TAY",
    "name": "Tartu (TAY)",
    "country": "Estonia",
    "keywords": "TAY TAY Tartu Tartu Sân bay Tartu-Ülenurme Tartu-Ülenurme Airport Estonia Estonia EE"
  },
  {
    "id": "TAS",
    "name": "Tashkent (TAS)",
    "country": "U dơ bê kis tan",
    "keywords": "TAS TAS Tashkent Tashkent Sân bay Tashkent Tashkent International Airport U dơ bê kis tan Uzbekistan UZ"
  },
  {
    "id": "YTQ",
    "name": "Tasiujuaq (YTQ)",
    "country": "Canada",
    "keywords": "YTQ YTQ Tasiujuaq Tasiujuaq Sân bay Tasiujaq Tasiujaq Airport Canada Canada CA"
  },
  {
    "id": "TUO",
    "name": "Taupo (TUO)",
    "country": "Niu di lân",
    "keywords": "TUO TUO Taupo Taupo Sân bay Taupo Taupo Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "TRG",
    "name": "Tauranga (TRG)",
    "country": "Niu di lân",
    "keywords": "TRG TRG Tauranga Tauranga Sân bay Tauranga Tauranga Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "TWU",
    "name": "Tawau (TWU)",
    "country": "Malaysia",
    "keywords": "TWU TWU Tawau Tawau Sân bay Tawau Tawau Airport Malaysia Malaysia MY"
  },
  {
    "id": "URC",
    "name": "Tân Cương (URC)",
    "country": "Trung Quốc",
    "keywords": "URC URC Tân Cương Urumqi Sân bay Urumqi Diwopu Urumqi Diwopu International Airport Trung Quốc China CN"
  },
  {
    "id": "JJN",
    "name": "Tân Giang (JJN)",
    "country": "Trung Quốc",
    "keywords": "JJN JJN Tân Giang Jinjiang Sân bay Quanzhou Jinjiang Quanzhou Jinjiang Airport Trung Quốc China CN"
  },
  {
    "id": "SHP",
    "name": "Tần Hoàng Đảo (SHP)",
    "country": "Trung Quốc",
    "keywords": "SHP SHP Tần Hoàng Đảo Qinhuangdao Sân bay Qinhuangdao Shanhaiguan Qinhuangdao Shanhaiguan Airport Trung Quốc China CN"
  },
  {
    "id": "NLT",
    "name": "Tân Viên (NLT)",
    "country": "Trung Quốc",
    "keywords": "NLT NLT Tân Viên Xinyuan Nalati Sân bay Xinyuan Nalati Xinyuan Nalati Airport Trung Quốc China CN"
  },
  {
    "id": "SIA",
    "name": "Tây An (SIA)",
    "country": "Trung Quốc",
    "keywords": "SIA SIA Tây An Xi An Sân bay Xiguan Xiguan Airport Trung Quốc China CN"
  },
  {
    "id": "XIY",
    "name": "Tây An (XIY)",
    "country": "Trung Quốc",
    "keywords": "XIY SIA Tây An Xi An Sân bay Xi'an Xianyang Xi'an Xianyang International Airport Trung Quốc China CN"
  },
  {
    "id": "XNN",
    "name": "Tây Ninh (XNN)",
    "country": "Trung Quốc",
    "keywords": "XNN XNN Tây Ninh Xining Sân bay Xining Caojiabu Xining Caojiabu Airport Trung Quốc China CN"
  },
  {
    "id": "XIC",
    "name": "Tây Xương (XIC)",
    "country": "Trung Quốc",
    "keywords": "XIC XIC Tây Xương Xichang Sân bay Xichang Qingshan Xichang Qingshan Airport Trung Quốc China CN"
  },
  {
    "id": "TBS",
    "name": "Tbilisi (TBS)",
    "country": "Georgia",
    "keywords": "TBS TBS Tbilisi Tbilisi Sân bay Tbilisi Tbilisi International Airport Georgia Georgia GE"
  },
  {
    "id": "MME",
    "name": "Teesside (MME)",
    "country": "Anh quốc",
    "keywords": "MME MME Teesside Teesside Sân bay Durham Tees Valley Durham Tees Valley Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "TGU",
    "name": "Tegucigalpa (TGU)",
    "country": "Honduras",
    "keywords": "TGU TGU Tegucigalpa Tegucigalpa Sân bay Toncontín Toncontín International Airport Honduras Honduras HN"
  },
  {
    "id": "IKA",
    "name": "Teheran (IKA)",
    "country": "Iran",
    "keywords": "IKA IKA Teheran Teheran Sân bay Tehran Imam Khomeini Tehran Imam Khomeini International Airport Iran Iran IR"
  },
  {
    "id": "THR",
    "name": "Teheran (THR)",
    "country": "Iran",
    "keywords": "THR THR Teheran Teheran Sân bay Mehrabad Mehrabad International Airport Iran Iran IR"
  },
  {
    "id": "SDV",
    "name": "Tel Aviv (SDV)",
    "country": "Israel",
    "keywords": "SDV TLV Tel Aviv Tel Aviv Sân bay Sde Dov Sde Dov Airport Israel Israel IL"
  },
  {
    "id": "TLV",
    "name": "Tel Aviv (TLV)",
    "country": "Israel",
    "keywords": "TLV TLV Tel Aviv Tel Aviv Sân bay Ben Gurion Ben Gurion International Airport Israel Israel IL"
  },
  {
    "id": "TEX",
    "name": "Telluride (TEX)",
    "country": "Hoa kỳ",
    "keywords": "TEX TEX Telluride Telluride Sân bay Telluride Regional Telluride Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ZCO",
    "name": "Temuco (ZCO)",
    "country": "Chi lê",
    "keywords": "ZCO ZCO Temuco Temuco Sân bay Maquehue Maquehue Airport Chi lê Chile CL"
  },
  {
    "id": "TCI",
    "name": "Tenerife (TCI)",
    "country": "Tây Ban Nha",
    "keywords": "TCI TCI Tenerife Tenerife Tất cả các sân bay All Airports Tây Ban Nha Spain ES"
  },
  {
    "id": "TFN",
    "name": "Tenerife (TFN)",
    "country": "Tây Ban Nha",
    "keywords": "TFN TCI Tenerife Tenerife Sân bay Tenerife North Tenerife North Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "TFS",
    "name": "Tenerife (TFS)",
    "country": "Tây Ban Nha",
    "keywords": "TFS TCI Tenerife Tenerife Sân bay Tenerife South Tenerife South Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "TPQ",
    "name": "Tepic (TPQ)",
    "country": "Mê hi cô",
    "keywords": "TPQ TPQ Tepic Tepic Sân bay Amado Nervo National Amado Nervo National Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "TER",
    "name": "Terceira (TER)",
    "country": "Bồ đào nha",
    "keywords": "TER TER Terceira Terceira Lajes Field Lajes Field Bồ đào nha Portugal PT"
  },
  {
    "id": "THE",
    "name": "Teresina (THE)",
    "country": "Bra xin",
    "keywords": "THE THE Teresina Teresina Sân bay Teresina Teresina Airport Bra xin Brazil BR"
  },
  {
    "id": "YXT",
    "name": "Terrace (YXT)",
    "country": "Canada",
    "keywords": "YXT YXT Terrace Terrace Sân bay Northwest Regional Northwest Regional Airport Canada Canada CA"
  },
  {
    "id": "TET",
    "name": "Tete (TET)",
    "country": "Mozambique",
    "keywords": "TET TET Tete Tete Sân bay Chingozi Chingozi Airport Mozambique Mozambique MZ"
  },
  {
    "id": "ZTB",
    "name": "Tete A La Baleine (ZTB)",
    "country": "Canada",
    "keywords": "ZTB ZTB Tete A La Baleine Tete A La Baleine Sân bay Tête-à-la-Baleine Tête-à-la-Baleine Airport Canada Canada CA"
  },
  {
    "id": "TEB",
    "name": "Teterboro (TEB)",
    "country": "Hoa kỳ",
    "keywords": "TEB TEB Teterboro Teterboro Sân bay Teterboro Teterboro Airport Hoa kỳ United States US"
  },
  {
    "id": "TXK",
    "name": "Texarkana (TXK)",
    "country": "Hoa kỳ",
    "keywords": "TXK TXK Texarkana Texarkana Sân bay Texarkana Regional Texarkana Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TNA",
    "name": "Tế Nam (TNA)",
    "country": "Trung Quốc",
    "keywords": "TNA TNA Tế Nam Jinan Sân bay Jinan Yaoqiang Jinan Yaoqiang International Airport Trung Quốc China CN"
  },
  {
    "id": "JNG",
    "name": "Tế Ninh (JNG)",
    "country": "Trung Quốc",
    "keywords": "JNG JNG Tế Ninh Jining Sân bay Jining Jining Airport Trung Quốc China CN"
  },
  {
    "id": "CIF",
    "name": "Tế Phong (CIF)",
    "country": "Trung Quốc",
    "keywords": "CIF CIF Tế Phong Chifeng Sân bay Chifeng Chifeng Airport Trung Quốc China CN"
  },
  {
    "id": "SJW",
    "name": "Thạch Gia Trang (SJW)",
    "country": "Trung Quốc",
    "keywords": "SJW SJW Thạch Gia Trang Shijiazhuang Sân bay Shijiazhuang Zhengding Shijiazhuang Zhengding International Airport Trung Quốc China CN"
  },
  {
    "id": "YTY",
    "name": "Thái Châu Dương Châu (YTY)",
    "country": "Trung Quốc",
    "keywords": "YTY YTY Thái Châu Dương Châu Yangzhou Sân bay Yangzhou Yangzhou Airport Trung Quốc China CN"
  },
  {
    "id": "TYN",
    "name": "Thái Nguyên (TYN)",
    "country": "Trung Quốc",
    "keywords": "TYN TYN Thái Nguyên Taiyuan Sân bay Taiyuan Wusu Taiyuan Wusu International Airport Trung Quốc China CN"
  },
  {
    "id": "IQN",
    "name": "Thanh Dương (IQN)",
    "country": "Trung Quốc",
    "keywords": "IQN IQN Thanh Dương Qingyang Sân bay Qingyang Qingyang Airport Trung Quốc China CN"
  },
  {
    "id": "TAO",
    "name": "Thanh Đảo (TAO)",
    "country": "Trung Quốc",
    "keywords": "TAO TAO Thanh Đảo Qingdao Sân bay Qingdao Liuting Qingdao Liuting International Airport Trung Quốc China CN"
  },
  {
    "id": "CTU",
    "name": "Thành Đô (CTU)",
    "country": "Trung Quốc",
    "keywords": "CTU CTU Thành Đô Chengdu Sân bay Chengdu Shuangliu Chengdu Shuangliu International Airport Trung Quốc China CN"
  },
  {
    "id": "TFU",
    "name": "Thành Đô (TFU)",
    "country": "Trung Quốc",
    "keywords": "TFU CTU Thành Đô Chengdu Sân bay quốc tế Thiên Phủ Thành Đô Chengdu Tianfu International Airport Trung Quốc China CN"
  },
  {
    "id": "THD",
    "name": "Thanh Hóa (THD)",
    "country": "Việt Nam",
    "keywords": "THD THD Thanh Hóa Thanh Hoa Sân bay Thọ Xuân Tho Xuan Airport Việt Nam Vietnam VN"
  },
  {
    "id": "XTG",
    "name": "Thargomindah (XTG)",
    "country": "Úc",
    "keywords": "XTG XTG Thargomindah Thargomindah Sân bay Thargomindah Thargomindah Airport Úc Australia AU"
  },
  {
    "id": "SHE",
    "name": "Thẩm Dương (SHE)",
    "country": "Trung Quốc",
    "keywords": "SHE SHE Thẩm Dương Shenyang Sân bay Shenyang Taoxian Shenyang Taoxian International Airport Trung Quốc China CN"
  },
  {
    "id": "ZHA",
    "name": "Thậm Giang (ZHA)",
    "country": "Trung Quốc",
    "keywords": "ZHA ZHA Thậm Giang Zhangjiang Sân bay Zhanjiang Zhanjiang Airport Trung Quốc China CN"
  },
  {
    "id": "SZX",
    "name": "Thâm Quyến (SZX)",
    "country": "Trung Quốc",
    "keywords": "SZX SZX Thâm Quyến Shenzhen Sân bay Shenzhen Bao'an Shenzhen Bao'an International Airport Trung Quốc China CN"
  },
  {
    "id": "YQD",
    "name": "The Pas (YQD)",
    "country": "Canada",
    "keywords": "YQD YQD The Pas The Pas Sân bay The Pas The Pas Airport Canada Canada CA"
  },
  {
    "id": "SKG",
    "name": "Thessaloniki (SKG)",
    "country": "Hy lạp",
    "keywords": "SKG SKG Thessaloniki Thessaloniki Sân bay Makedonia Makedonia Airport Hy lạp Greece GR"
  },
  {
    "id": "TVF",
    "name": "Thief River Falls (TVF)",
    "country": "Hoa kỳ",
    "keywords": "TVF TVF Thief River Falls Thief River Falls Sân bay Thief River Falls Regional Thief River Falls Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TSN",
    "name": "Thiên Tân (TSN)",
    "country": "Trung Quốc",
    "keywords": "TSN TSN Thiên Tân Tianjin Sân bay Tianjin Binhai Tianjin Binhai International Airport Trung Quốc China CN"
  },
  {
    "id": "JTR",
    "name": "Thira Island (JTR)",
    "country": "Hy lạp",
    "keywords": "JTR JTR Thira Island Thira Island Sân bay Santorini Santorini Airport Hy lạp Greece GR"
  },
  {
    "id": "TRV",
    "name": "Thiruvananthapuram (TRV)",
    "country": "Ấn độ",
    "keywords": "TRV TRV Thiruvananthapuram Thiruvananthapuram Sân bay Trivandrum Trivandrum International Airport Ấn độ India IN"
  },
  {
    "id": "YTH",
    "name": "Thompson (YTH)",
    "country": "Canada",
    "keywords": "YTH YTH Thompson Thompson Sân bay Thompson Thompson Airport Canada Canada CA"
  },
  {
    "id": "YQT",
    "name": "Thunder Bay OT (YQT)",
    "country": "Canada",
    "keywords": "YQT YQT Thunder Bay OT Thunder Bay Sân bay Thunder Bay Thunder Bay Airport Canada Canada CA"
  },
  {
    "id": "CZX",
    "name": "Thường Châu (CZX)",
    "country": "Trung Quốc",
    "keywords": "CZX CZX Thường Châu Changzhou Sân bay Changzhou Benniu Changzhou Benniu Airport Trung Quốc China CN"
  },
  {
    "id": "CGD",
    "name": "Thường Đức (CGD)",
    "country": "Trung Quốc",
    "keywords": "CGD CGD Thường Đức Changde Sân bay Changde Changde Airport Trung Quốc China CN"
  },
  {
    "id": "PVG",
    "name": "Thượng Hải (PVG)",
    "country": "Trung Quốc",
    "keywords": "PVG SHA Thượng Hải Shanghai Sân bay Shanghai Pudong Shanghai Pudong International Airport Trung Quốc China CN"
  },
  {
    "id": "SHA",
    "name": "Thượng Hải (SHA)",
    "country": "Trung Quốc",
    "keywords": "SHA SHA Thượng Hải Shanghai Sân bay Shanghai Hongqiao Shanghai Hongqiao International Airport Trung Quốc China CN"
  },
  {
    "id": "XIL",
    "name": "Tích Lâm Khiết Đặc (XIL)",
    "country": "Trung Quốc",
    "keywords": "XIL XIL Tích Lâm Khiết Đặc Xilinhot Sân bay Xilinhot Xilinhot Airport Trung Quốc China CN"
  },
  {
    "id": "TIJ",
    "name": "Tijuana (TIJ)",
    "country": "Mê hi cô",
    "keywords": "TIJ TIJ Tijuana Tijuana Sân bay General Abelardo L. Rodríguez General Abelardo L. Rodríguez International Airpor Mê hi cô MEXICO MX"
  },
  {
    "id": "TIU",
    "name": "Timaru (TIU)",
    "country": "Niu di lân",
    "keywords": "TIU TIU Timaru Timaru Sân bay Richard Pearse Richard Pearse Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "TSR",
    "name": "Timisoara (TSR)",
    "country": "Rumani",
    "keywords": "TSR TSR Timisoara Timisoara Sân bay Traian Vuia Traian Vuia International Airport Rumani Romania RO"
  },
  {
    "id": "YTS",
    "name": "Timmins (YTS)",
    "country": "Canada",
    "keywords": "YTS YTS Timmins Timmins Sân bay Timmins/Victor M. Power Timmins/Victor M. Power Airport Canada Canada CA"
  },
  {
    "id": "JDZ",
    "name": "Tĩnh Đức Trấn (JDZ)",
    "country": "Trung Quốc",
    "keywords": "JDZ JDZ Tĩnh Đức Trấn Jingdezhen Sân bay Jingdezhen Jingdezhen Airport Trung Quốc China CN"
  },
  {
    "id": "TOD",
    "name": "Tioman (TOD)",
    "country": "Malaysia",
    "keywords": "TOD TOD Tioman Tioman Sân bay Tioman Tioman Airport Malaysia Malaysia MY"
  },
  {
    "id": "TIA",
    "name": "Tirana (TIA)",
    "country": "Albani",
    "keywords": "TIA TIA Tirana Tirana Sân bay Tirana Tirana International Airport Albani Albania AL"
  },
  {
    "id": "TRE",
    "name": "Tiree (TRE)",
    "country": "Anh quốc",
    "keywords": "TRE TRE Tiree Tiree Sân bay Tiree Tiree Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "TRZ",
    "name": "Tiruchirapally (TRZ)",
    "country": "Ấn độ",
    "keywords": "TRZ TRZ Tiruchirapally Tiruchirapally Sân bay Tiruchirapalli international Tiruchirapalli international Airport Ấn độ India IN"
  },
  {
    "id": "TIR",
    "name": "Tirupati (TIR)",
    "country": "Ấn độ",
    "keywords": "TIR TIR Tirupati Tirupati Sân bay Tirupati Tirupati Airport Ấn độ India IN"
  },
  {
    "id": "TIV",
    "name": "Tivat (TIV)",
    "country": "Montenegro",
    "keywords": "TIV TIV Tivat Tivat Sân bay Tivat Tivat Airport Montenegro Montenegro ME"
  },
  {
    "id": "TAB",
    "name": "Tobago (TAB)",
    "country": "Trinidad Và Tobago",
    "keywords": "TAB TAB Tobago Tobago Sân bay Crown Point Crown Point International Airport Trinidad Và Tobago Trinidad and Tobago TT"
  },
  {
    "id": "TKS",
    "name": "Tokushima (TKS)",
    "country": "Nhật bản",
    "keywords": "TKS TKS Tokushima Tokushima Sân bay Tokushima Tokushima Awaodori Airport Nhật bản Japan JP"
  },
  {
    "id": "HND",
    "name": "Tokyo (HND)",
    "country": "Nhật bản",
    "keywords": "HND TYO Tokyo Tokyo Sân bay Haneda Haneda Airport Nhật bản Japan JP"
  },
  {
    "id": "NRT",
    "name": "Tokyo (NRT)",
    "country": "Nhật bản",
    "keywords": "NRT TYO Tokyo Tokyo Sân bay Narita Narita International Airport Nhật bản Japan JP"
  },
  {
    "id": "TYO",
    "name": "Tokyo (TYO)",
    "country": "Nhật bản",
    "keywords": "TYO TYO Tokyo Tokyo Tất cả các sân bay All Airports Nhật bản Japan JP"
  },
  {
    "id": "TOL",
    "name": "Toledo (TOL)",
    "country": "Hoa kỳ",
    "keywords": "TOL TOL Toledo Toledo Sân bay Toledo Express Toledo Express Airport Hoa kỳ United States US"
  },
  {
    "id": "TLC",
    "name": "Toluca (TLC)",
    "country": "Mê hi cô",
    "keywords": "TLC TLC Toluca Toluca Sân bay Lic. Adolfo López Mateos Lic. Adolfo López Mateos International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "TOF",
    "name": "Tomsk (TOF)",
    "country": "Nga",
    "keywords": "TOF TOF Tomsk Tomsk Sân bay Bogashevo Bogashevo Airport Nga Russia RU"
  },
  {
    "id": "FOE",
    "name": "Topeka (FOE)",
    "country": "Hoa kỳ",
    "keywords": "FOE TOP Topeka Topeka Forbes Field Forbes Field Hoa kỳ United States US"
  },
  {
    "id": "YKZ",
    "name": "Toronto (YKZ)",
    "country": "Canada",
    "keywords": "YKZ YTO Toronto Toronto Sân bay Toronto/Buttonville Municipal Toronto/Buttonville Municipal Airport Canada Canada CA"
  },
  {
    "id": "YTO",
    "name": "Toronto (YTO)",
    "country": "Canada",
    "keywords": "YTO YTO Toronto Toronto Tất cả các sân bay All Airports Canada Canada CA"
  },
  {
    "id": "YTZ",
    "name": "Toronto (YTZ)",
    "country": "Canada",
    "keywords": "YTZ YTO Toronto Toronto Sân bay Billy Bishop Toronto City Billy Bishop Toronto City Airport Canada Canada CA"
  },
  {
    "id": "YYZ",
    "name": "Toronto (YYZ)",
    "country": "Canada",
    "keywords": "YYZ YTO Toronto Toronto Sân bay Toronto Pearson Toronto Pearson International Airport Canada Canada CA"
  },
  {
    "id": "TRC",
    "name": "Torreon (TRC)",
    "country": "Mê hi cô",
    "keywords": "TRC TRC Torreon Torreon Sân bay Francisco Sarabia Francisco Sarabia International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "TLN",
    "name": "Toulon (TLN)",
    "country": "Pháp",
    "keywords": "TLN TLN Toulon Toulon Sân bay Toulon-Hyères Toulon-Hyères Airport Pháp France FR"
  },
  {
    "id": "TLS",
    "name": "Toulouse (TLS)",
    "country": "Pháp",
    "keywords": "TLS TLS Toulouse Toulouse Sân bay Toulouse Blagnac Toulouse Blagnac International Airport Pháp France FR"
  },
  {
    "id": "TUF",
    "name": "Tours (TUF)",
    "country": "Pháp",
    "keywords": "TUF TUF Tours Tours Sân bay Tours Val de Loire Tours Val de Loire Airport Pháp France FR"
  },
  {
    "id": "TSV",
    "name": "Townsville (TSV)",
    "country": "Úc",
    "keywords": "TSV TSV Townsville Townsville Sân bay Townsville Townsville Airport Úc Australia AU"
  },
  {
    "id": "TOY",
    "name": "Toyama (TOY)",
    "country": "Nhật bản",
    "keywords": "TOY TOY Toyama Toyama Sân bay Toyama Toyama Airport Nhật bản Japan JP"
  },
  {
    "id": "TOE",
    "name": "Tozeur (TOE)",
    "country": "Tuy ni di",
    "keywords": "TOE TOE Tozeur Tozeur Tozeur, Tunisia Tozeur, Tunisia Tuy ni di Tunisia TN"
  },
  {
    "id": "TZX",
    "name": "Trabzon (TZX)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "TZX TZX Trabzon Trabzon Sân bay Trabzon Trabzon Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "TST",
    "name": "Trang (TST)",
    "country": "Thái Lan",
    "keywords": "TST TST Trang Trang Sân bay Trang Trang Airport Thái Lan Thailand TH"
  },
  {
    "id": "TPS",
    "name": "Trapani (TPS)",
    "country": "Ý",
    "keywords": "TPS TPS Trapani Trapani Sân bay Trapani-Birgi Trapani-Birgi Airport Ý Italy IT"
  },
  {
    "id": "TVC",
    "name": "Traverse City (TVC)",
    "country": "Hoa kỳ",
    "keywords": "TVC TVC Traverse City Traverse City Sân bay Cherry Capital Cherry Capital Airport Hoa kỳ United States US"
  },
  {
    "id": "TCB",
    "name": "Treasure Cay (TCB)",
    "country": "Bahamas",
    "keywords": "TCB TCB Treasure Cay Treasure Cay Sân bay Treasure Cay Treasure Cay Airport Bahamas Bahamas BS"
  },
  {
    "id": "REL",
    "name": "Trelew (REL)",
    "country": "Ác Hen Tina",
    "keywords": "REL REL Trelew Trelew Sân bay Almirante Marco Andrés Zar Almirante Marco Andrés Zar Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "TTN",
    "name": "Trenton (TTN)",
    "country": "Hoa kỳ",
    "keywords": "TTN TTN Trenton Trenton Sân bay Trenton-Mercer Trenton-Mercer Airport Hoa kỳ United States US"
  },
  {
    "id": "TSF",
    "name": "Treviso (TSF)",
    "country": "Ý",
    "keywords": "TSF TSF Treviso Treviso Sân bay Treviso Treviso Airport Ý Italy IT"
  },
  {
    "id": "JUH",
    "name": "Trì Châu Cửu Hoa Sơn (JUH)",
    "country": "Trung Quốc",
    "keywords": "JUH JUH Trì Châu Cửu Hoa Sơn Chizhou Sân bay Chizhou Chizhou Airport Trung Quốc China CN"
  },
  {
    "id": "TRS",
    "name": "Trieste (TRS)",
    "country": "Ý",
    "keywords": "TRS TRS Trieste Trieste Sân bay Friuli Venezia Giulia Friuli Venezia Giulia Airport Ý Italy IT"
  },
  {
    "id": "CHG",
    "name": "Triều Dương (CHG)",
    "country": "Trung Quốc",
    "keywords": "CHG CHG Triều Dương Chaoyang Sân bay Chaoyang Chaoyang Airport Trung Quốc China CN"
  },
  {
    "id": "ZAT",
    "name": "Triều Đông (ZAT)",
    "country": "Trung Quốc",
    "keywords": "ZAT ZAT Triều Đông Zhaotong Sân bay Zhaotong Zhaotong Airport Trung Quốc China CN"
  },
  {
    "id": "CGO",
    "name": "Trịnh Châu (CGO)",
    "country": "Trung Quốc",
    "keywords": "CGO CGO Trịnh Châu Zhengzhou Sân bay Zhengzhou Xinzheng Zhengzhou Xinzheng International Airport Trung Quốc China CN"
  },
  {
    "id": "TIP",
    "name": "Tripoli (TIP)",
    "country": "Libi",
    "keywords": "TIP TIP Tripoli Tripoli Sân bay Tripoli Tripoli International Airport Libi Libya LY"
  },
  {
    "id": "THN",
    "name": "Trollhattan (THN)",
    "country": "Thụy điển",
    "keywords": "THN THN Trollhattan Trollhattan Sân bay Trollhättan-Vänersborg Trollhättan-Vänersborg Airport Thụy điển Sweden SE"
  },
  {
    "id": "TOS",
    "name": "Tromso (TOS)",
    "country": "Na Uy",
    "keywords": "TOS TOS Tromso Tromso Sân bay Tromsø Tromsø Airport Na Uy Norway NO"
  },
  {
    "id": "TRD",
    "name": "Trondheim (TRD)",
    "country": "Na Uy",
    "keywords": "TRD TRD Trondheim Trondheim Sân bay Trondheim Trondheim Airport, Værnes Na Uy Norway NO"
  },
  {
    "id": "TRU",
    "name": "Trujillo (TRU)",
    "country": "Peru",
    "keywords": "TRU TRU Trujillo Trujillo Sân bay Cap. FAP Carlos Martínez de Pinillos Cap. FAP Carlos Martínez de Pinillos International Peru Peru PE"
  },
  {
    "id": "TKK",
    "name": "Truk (TKK)",
    "country": "Tokelau",
    "keywords": "TKK TKK Truk Truk Sân bay Chuuk Chuuk International Airport Tokelau Tokelau TK"
  },
  {
    "id": "CKG",
    "name": "Trùng Khánh (CKG)",
    "country": "Trung Quốc",
    "keywords": "CKG CKG Trùng Khánh Chongqing Sân bay CHONGQING Chongqing Jiangbei International Airport Trung Quốc China CN"
  },
  {
    "id": "DYG",
    "name": "Trương Gia Giới (DYG)",
    "country": "Trung Quốc",
    "keywords": "DYG DYG Trương Gia Giới ZHANGJIAJIE Sân bay Zhangjiajie Hehua Zhangjiajie Hehua Airport Trung Quốc China CN"
  },
  {
    "id": "CSX",
    "name": "Trường Sa (CSX)",
    "country": "Trung Quốc",
    "keywords": "CSX CSX Trường Sa Changsha Sân bay Changsha Huanghua Changsha Huanghua International Airport Trung Quốc China CN"
  },
  {
    "id": "CIH",
    "name": "Trường Trị (CIH)",
    "country": "Trung Quốc",
    "keywords": "CIH CIH Trường Trị CHANGZHI Sân bay CHANGZHI CHANGZHI Trung Quốc China CN"
  },
  {
    "id": "CGQ",
    "name": "Trường Xuân (CGQ)",
    "country": "Trung Quốc",
    "keywords": "CGQ CGQ Trường Xuân Changchun Sân bay Changchun Longjia Changchun Longjia International Airport Trung Quốc China CN"
  },
  {
    "id": "ZYI",
    "name": "Tuân Nghĩa (ZYI)",
    "country": "Trung Quốc",
    "keywords": "ZYI ZYI Tuân Nghĩa Zunyi Sân bay Zunyi Zunyi Airport Trung Quốc China CN"
  },
  {
    "id": "TUS",
    "name": "Tucson (TUS)",
    "country": "Hoa kỳ",
    "keywords": "TUS TUS Tucson Tucson Sân bay Tucson Tucson International Airport Hoa kỳ United States US"
  },
  {
    "id": "TUC",
    "name": "Tucuman (TUC)",
    "country": "Ác Hen Tina",
    "keywords": "TUC TUC Tucuman Tucuman Sân bay Teniente General Benjamín Matienzo Teniente General Benjamín Matienzo International A Ác Hen Tina Argentina AR"
  },
  {
    "id": "TUG",
    "name": "Tuguegarao (TUG)",
    "country": "Philippines",
    "keywords": "TUG TUG Tuguegarao Tuguegarao Sân bay Tuguegarao Tuguegarao Airport Philippines Philippines PH"
  },
  {
    "id": "TUL",
    "name": "Tulsa (TUL)",
    "country": "Hoa kỳ",
    "keywords": "TUL TUL Tulsa Tulsa Sân bay Tulsa Tulsa International Airport Hoa kỳ United States US"
  },
  {
    "id": "TBP",
    "name": "Tumbes (TBP)",
    "country": "Peru",
    "keywords": "TBP TBP Tumbes Tumbes Sân bay Cap. FAP Pedro Canga Rodríguez Cap. FAP Pedro Canga Rodríguez Airport Peru Peru PE"
  },
  {
    "id": "TUN",
    "name": "Tunis (TUN)",
    "country": "Tuy ni di",
    "keywords": "TUN TUN Tunis Tunis Sân bay Tunis–Carthage Tunis–Carthage International Airport Tuy ni di Tunisia TN"
  },
  {
    "id": "TUP",
    "name": "Tupelo (TUP)",
    "country": "Hoa kỳ",
    "keywords": "TUP TUP Tupelo Tupelo Sân bay Tupelo Regional Tupelo Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TKU",
    "name": "Turku (TKU)",
    "country": "Phần lan",
    "keywords": "TKU TKU Turku Turku Sân bay Turku Turku Airport Phần lan Finland FI"
  },
  {
    "id": "TGZ",
    "name": "Tuxtla Gutierrez (TGZ)",
    "country": "Mê hi cô",
    "keywords": "TGZ TGZ Tuxtla Gutierrez Tuxtla Gutierrez Sân bay Angel Albino Corzo Angel Albino Corzo International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "JGS",
    "name": "Từ An (JGS)",
    "country": "Trung Quốc",
    "keywords": "JGS JGS Từ An Ji an ji an Sân bay Ji an ji an Ji an ji an Airport Trung Quốc China CN"
  },
  {
    "id": "XUZ",
    "name": "Từ Châu (XUZ)",
    "country": "Trung Quốc",
    "keywords": "XUZ XUZ Từ Châu Xuzhou Sân bay Xuzhou Xuzhou Airport Trung Quốc China CN"
  },
  {
    "id": "SYM",
    "name": "Tư Miêu (SYM)",
    "country": "Trung Quốc",
    "keywords": "SYM SYM Tư Miêu Simao Sân bay Simao Simao Airport Trung Quốc China CN"
  },
  {
    "id": "XFN",
    "name": "Tương Phàn (XFN)",
    "country": "Trung Quốc",
    "keywords": "XFN XFN Tương Phàn Xiangfan Sân bay Xiangfan Xiangfan Airport Trung Quốc China CN"
  },
  {
    "id": "TWF",
    "name": "Twin Falls (TWF)",
    "country": "Hoa kỳ",
    "keywords": "TWF TWF Twin Falls Twin Falls Sân bay Magic Valley Regional Magic Valley Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TYR",
    "name": "Tyler (TYR)",
    "country": "Hoa kỳ",
    "keywords": "TYR TYR Tyler Tyler Sân bay Tyler Pounds Regional Tyler Pounds Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "TJM",
    "name": "Tyumen (TJM)",
    "country": "Nga",
    "keywords": "TJM TJM Tyumen Tyumen Sân bay Roschino Roschino Airport Nga Russia RU"
  },
  {
    "id": "UTP",
    "name": "U Tapao (UTP)",
    "country": "Thái Lan",
    "keywords": "UTP UTP U Tapao U Tapao Sân bay U-Tapao U-Tapao International Airport Thái Lan Thailand TH"
  },
  {
    "id": "ULN",
    "name": "U-lan-ba-to (ULN)",
    "country": "Mông cổ",
    "keywords": "ULN ULN U-lan-ba-to Ulaanbaatar Sân bay Chinggis Khaan Chinggis Khaan International Airport Mông cổ Mongolia MN"
  },
  {
    "id": "UBJ",
    "name": "Ube Jp (UBJ)",
    "country": "Nhật bản",
    "keywords": "UBJ UBJ Ube Jp Ube Jp Sân bay Yamaguchi Ube Yamaguchi Ube Airport Nhật bản Japan JP"
  },
  {
    "id": "UDI",
    "name": "Uberlandia (UDI)",
    "country": "Bra xin",
    "keywords": "UDI UDI Uberlandia Uberlandia Sân bay Uberlandia Uberlandia Airport Bra xin Brazil BR"
  },
  {
    "id": "UBP",
    "name": "Ubon Ratchath (UBP)",
    "country": "Thái Lan",
    "keywords": "UBP UBP Ubon Ratchath Ubon Ratchath Sân bay Ubon Ratchathani Ubon Ratchathani Airport Thái Lan Thailand TH"
  },
  {
    "id": "UDR",
    "name": "Udaipur (UDR)",
    "country": "Ấn độ",
    "keywords": "UDR UDR Udaipur Udaipur Sân bay Udaipur Udaipur Airport Ấn độ India IN"
  },
  {
    "id": "UTH",
    "name": "Udon Thani (UTH)",
    "country": "Thái Lan",
    "keywords": "UTH UTH Udon Thani Udon Thani Sân bay Udon Thani Udon Thani International Airport Thái Lan Thailand TH"
  },
  {
    "id": "UFA",
    "name": "Ufa (UFA)",
    "country": "Nga",
    "keywords": "UFA UFA Ufa Ufa Sân bay Ufa Ufa Airport Nga Russia RU"
  },
  {
    "id": "UPG",
    "name": "Ujung Pandang (UPG)",
    "country": "Indonesia",
    "keywords": "UPG UPG Ujung Pandang Ujung Pandang Sân bay Sultan Hasanuddin Sultan Hasanuddin International Airport Indonesia Indonesia ID"
  },
  {
    "id": "UUD",
    "name": "Ulan Ude (UUD)",
    "country": "Nga",
    "keywords": "UUD UUD Ulan Ude Ulan Ude Sân bay Ulan-Ude Ulan-Ude Airport Nga Russia RU"
  },
  {
    "id": "HLH",
    "name": "Ulanhot (HLH)",
    "country": "Trung Quốc",
    "keywords": "HLH HLH Ulanhot Ulanhot Sân bay Ulanhot Ulanhot Airport Trung Quốc China CN"
  },
  {
    "id": "USN",
    "name": "Ulsan (USN)",
    "country": "Hàn quốc",
    "keywords": "USN USN Ulsan Ulsan Sân bay Ulsan Ulsan Airport Hàn quốc Korea KR"
  },
  {
    "id": "UME",
    "name": "Umea (UME)",
    "country": "Thụy điển",
    "keywords": "UME UME Umea Umea Sân bay Umeå City Umeå City Airport Thụy điển Sweden SE"
  },
  {
    "id": "YUD",
    "name": "Umiujaq (YUD)",
    "country": "Canada",
    "keywords": "YUD YUD Umiujaq Umiujaq Sân bay Umiujaq Umiujaq Airport Canada Canada CA"
  },
  {
    "id": "UTT",
    "name": "Umtata (UTT)",
    "country": "Nam Phi",
    "keywords": "UTT UTT Umtata Umtata Sân bay Mthatha Mthatha Airport Nam Phi South Africa ZA"
  },
  {
    "id": "UNK",
    "name": "Unalakleet (UNK)",
    "country": "Hoa kỳ",
    "keywords": "UNK UNK Unalakleet Unalakleet Sân bay Unalakleet Unalakleet Airport Hoa kỳ United States US"
  },
  {
    "id": "UTN",
    "name": "Upington (UTN)",
    "country": "Nam Phi",
    "keywords": "UTN UTN Upington Upington Sân bay Upington Upington Airport Nam Phi South Africa ZA"
  },
  {
    "id": "USH",
    "name": "Ushuaia (USH)",
    "country": "Ác Hen Tina",
    "keywords": "USH USH Ushuaia Ushuaia Sân bay Ushuaia - Malvinas Argentinas Ushuaia - Malvinas Argentinas International Airpor Ác Hen Tina Argentina AR"
  },
  {
    "id": "UKK",
    "name": "Ust Kamenogorsk (UKK)",
    "country": "Kazakstan",
    "keywords": "UKK UKK Ust Kamenogorsk Ust Kamenogorsk Sân bay Oskemen Oskemen Airport Kazakstan Kazakstan KZ"
  },
  {
    "id": "WEH",
    "name": "Uy Hải (WEH)",
    "country": "Trung Quốc",
    "keywords": "WEH WEH Uy Hải Weihai Sân bay Weihai Dashuibo Weihai Dashuibo Airport Trung Quốc China CN"
  },
  {
    "id": "VAA",
    "name": "Vaasa (VAA)",
    "country": "Phần lan",
    "keywords": "VAA VAA Vaasa Vaasa Sân bay Vaasa Vaasa Airport Phần lan Finland FI"
  },
  {
    "id": "BDQ",
    "name": "Vadodara (BDQ)",
    "country": "Ấn độ",
    "keywords": "BDQ BDQ Vadodara Vadodara Sân bay Vadodara Vadodara Airport Ấn độ India IN"
  },
  {
    "id": "VDS",
    "name": "Vadso (VDS)",
    "country": "Na Uy",
    "keywords": "VDS VDS Vadso Vadso Sân bay Vadsø Vadsø Airport Na Uy Norway NO"
  },
  {
    "id": "YVO",
    "name": "Val D Or (YVO)",
    "country": "Canada",
    "keywords": "YVO YVO Val D Or Val D Or Sân bay Val-d'Or Val-d'Or Airport Canada Canada CA"
  },
  {
    "id": "VDZ",
    "name": "Valdez (VDZ)",
    "country": "Hoa kỳ",
    "keywords": "VDZ VDZ Valdez Valdez Sân bay Valdez Valdez Airport Hoa kỳ United States US"
  },
  {
    "id": "ZAL",
    "name": "Valdivia (ZAL)",
    "country": "Chi lê",
    "keywords": "ZAL ZAL Valdivia Valdivia Sân bay Pichoy Pichoy Airport Chi lê Chile CL"
  },
  {
    "id": "VLD",
    "name": "Valdosta (VLD)",
    "country": "Hoa kỳ",
    "keywords": "VLD VLD Valdosta Valdosta Sân bay Valdosta Regional Valdosta Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "VAF",
    "name": "Valence (VAF)",
    "country": "Pháp",
    "keywords": "VAF VAF Valence Valence Sân bay Valence-Chabeuil Valence-Chabeuil Airport Pháp France FR"
  },
  {
    "id": "VLC",
    "name": "Valencia (VLC)",
    "country": "Tây Ban Nha",
    "keywords": "VLC VLC Valencia Valencia Sân bay Valencia Valencia Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "VLN",
    "name": "Valencia (VLN)",
    "country": "Vê nê du ê la",
    "keywords": "VLN VLN Valencia Valencia Sân bay Arturo Michelena Arturo Michelena International Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "VLV",
    "name": "Valera (VLV)",
    "country": "Vê nê du ê la",
    "keywords": "VLV VLV Valera Valera Sân bay Dr. Antonio Nicolás Briceno Dr. Antonio Nicolás Briceno Airport Vê nê du ê la Venezuela VE"
  },
  {
    "id": "VLL",
    "name": "Valladolid (VLL)",
    "country": "Tây Ban Nha",
    "keywords": "VLL VLL Valladolid Valladolid Sân bay Valladolid Valladolid Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "VAN",
    "name": "Van (VAN)",
    "country": "Thổ nhĩ kỳ",
    "keywords": "VAN VAN Van Van Sân bay Ferit Melen Ferit Melen Airport Thổ nhĩ kỳ Turkey TR"
  },
  {
    "id": "WXN",
    "name": "Vạn Tiên (WXN)",
    "country": "Trung Quốc",
    "keywords": "WXN WXN Vạn Tiên Wanxian Sân bay Wanzhou Wuqiao Wanzhou Wuqiao Airport Trung Quốc China CN"
  },
  {
    "id": "CXH",
    "name": "Vancouver (CXH)",
    "country": "Canada",
    "keywords": "CXH YVR Vancouver Vancouver Vancouver Harbour Water Aerodrome Vancouver Harbour Water Aerodrome Canada Canada CA"
  },
  {
    "id": "YVR",
    "name": "Vancouver (YVR)",
    "country": "Canada",
    "keywords": "YVR YVR Vancouver Vancouver Vancouver International Airport Vancouver International Airport Canada Canada CA"
  },
  {
    "id": "VRA",
    "name": "Varadero (VRA)",
    "country": "Cuba",
    "keywords": "VRA VRA Varadero Varadero Sân bay Juan Gualberto Gómez Juan Gualberto Gómez Airport Cuba Cuba CU"
  },
  {
    "id": "VNS",
    "name": "Varanasi (VNS)",
    "country": "Ấn độ",
    "keywords": "VNS VNS Varanasi Varanasi Sân bay Varanasi Varanasi Airport Ấn độ India IN"
  },
  {
    "id": "VAW",
    "name": "Vardoe (VAW)",
    "country": "Na Uy",
    "keywords": "VAW VAW Vardoe Vardoe Sân bay Vardø Vardø Airport, Svartnes Na Uy Norway NO"
  },
  {
    "id": "VRK",
    "name": "Varkaus (VRK)",
    "country": "Phần lan",
    "keywords": "VRK VRK Varkaus Varkaus Sân bay Varkaus Varkaus Airport Phần lan Finland FI"
  },
  {
    "id": "VAR",
    "name": "Varna (VAR)",
    "country": "Bun ga ri",
    "keywords": "VAR VAR Varna Varna Sân bay Varna Varna Airport Bun ga ri Bulgaria BG"
  },
  {
    "id": "VST",
    "name": "Vasteras (VST)",
    "country": "Thụy điển",
    "keywords": "VST VST Vasteras Vasteras Sân bay Stockholm-Västerås Stockholm-Västerås Airport Thụy điển Sweden SE"
  },
  {
    "id": "VXO",
    "name": "Vaxjo (VXO)",
    "country": "Thụy điển",
    "keywords": "VXO VXO Vaxjo Vaxjo Sân bay Växjö Växjö Airport Thụy điển Sweden SE"
  },
  {
    "id": "YCU",
    "name": "Vân Thành (YCU)",
    "country": "Trung Quốc",
    "keywords": "YCU YCU Vân Thành Yun Cheng Sân bay Yuncheng Guangong Yuncheng Guangong Airport Trung Quốc China CN"
  },
  {
    "id": "VCE",
    "name": "Venice (VCE)",
    "country": "Ý",
    "keywords": "VCE VCE Venice Venice Sân bay Venice Marco Polo Venice Marco Polo Airport Ý Italy IT"
  },
  {
    "id": "VER",
    "name": "Veracruz (VER)",
    "country": "Mê hi cô",
    "keywords": "VER VER Veracruz Veracruz Sân bay General Heriberto Jara General Heriberto Jara International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "VEL",
    "name": "Vernal (VEL)",
    "country": "Hoa kỳ",
    "keywords": "VEL VEL Vernal Vernal Sân bay Vernal Vernal Airport Hoa kỳ United States US"
  },
  {
    "id": "VRN",
    "name": "Verona (VRN)",
    "country": "Ý",
    "keywords": "VRN VRN Verona Verona Sân bay Verona Verona Airport Ý Italy IT"
  },
  {
    "id": "VCT",
    "name": "Victoria (VCT)",
    "country": "Hoa kỳ",
    "keywords": "VCT VCT Victoria Victoria Sân bay Victoria Regional Victoria Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "YWH",
    "name": "Victoria (YWH)",
    "country": "Canada",
    "keywords": "YWH YYJ Victoria Victoria Sân bay Victoria Inner Harbour Victoria Inner Harbour Airport Canada Canada CA"
  },
  {
    "id": "YYJ",
    "name": "Victoria (YYJ)",
    "country": "Canada",
    "keywords": "YYJ YYJ Victoria Victoria Sân bay Victoria Victoria International Airport Canada Canada CA"
  },
  {
    "id": "VFA",
    "name": "Victoria Falls (VFA)",
    "country": "Zim ba bu ê",
    "keywords": "VFA VFA Victoria Falls Victoria Falls Sân bay Victoria Falls Victoria Falls Airport Zim ba bu ê Zimbabwe ZW"
  },
  {
    "id": "VDM",
    "name": "Viedma (VDM)",
    "country": "Ác Hen Tina",
    "keywords": "VDM VDM Viedma Viedma Sân bay Gobernador Edgardo Castello Gobernador Edgardo Castello Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "VQS",
    "name": "Vieques (VQS)",
    "country": "Puerto Rico",
    "keywords": "VQS VQS Vieques Vieques Sân bay Antonio Rivera Rodriguez Antonio Rivera Rodriguez Airport Puerto Rico PUERTO RICO PR"
  },
  {
    "id": "VIE",
    "name": "Viên (VIE)",
    "country": "Áo",
    "keywords": "VIE VIE Viên Vienna Sân bay Vienna Vienna International Airport Áo Austria AT"
  },
  {
    "id": "VTE",
    "name": "Viên Chăn (VTE)",
    "country": "Lào",
    "keywords": "VTE VTE Viên Chăn Vientiane Sân bay Wattay Wattay International Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "VGO",
    "name": "Vigo (VGO)",
    "country": "Tây Ban Nha",
    "keywords": "VGO VGO Vigo Vigo Sân bay Vigo-Peinador Vigo-Peinador Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "VGA",
    "name": "Vijayawada (VGA)",
    "country": "Ấn độ",
    "keywords": "VGA VGA Vijayawada Vijayawada Sân bay Vijayawada Vijayawada Airport Ấn độ India IN"
  },
  {
    "id": "VNX",
    "name": "Vilanculos (VNX)",
    "country": "Mozambique",
    "keywords": "VNX VNX Vilanculos Vilanculos Sân bay Vilankulo Vilankulo Airport Mozambique Mozambique MZ"
  },
  {
    "id": "VHM",
    "name": "Vilhelmina (VHM)",
    "country": "Thụy điển",
    "keywords": "VHM VHM Vilhelmina Vilhelmina Sân bay Vilhelmina Vilhelmina Airport Thụy điển Sweden SE"
  },
  {
    "id": "VME",
    "name": "Villa Mercedes (VME)",
    "country": "Ác Hen Tina",
    "keywords": "VME VME Villa Mercedes Villa Mercedes Sân bay Pringles Pringles Airport Ác Hen Tina Argentina AR"
  },
  {
    "id": "VSA",
    "name": "Villahermosa (VSA)",
    "country": "Mê hi cô",
    "keywords": "VSA VSA Villahermosa Villahermosa Sân bay Carlos Rovirosa Pérez Carlos Rovirosa Pérez International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "VNO",
    "name": "Vilnius (VNO)",
    "country": "Lithuania",
    "keywords": "VNO VNO Vilnius Vilnius Sân bay Vilnius Vilnius International Airport Lithuania Lithuania LT"
  },
  {
    "id": "VII",
    "name": "Vinh (VII)",
    "country": "Việt Nam",
    "keywords": "VII VII Vinh Vinh Sân bay Vinh Vinh Airport Việt Nam Vietnam VN"
  },
  {
    "id": "LLF",
    "name": "Vĩnh Châu (LLF)",
    "country": "Trung Quốc",
    "keywords": "LLF LLF Vĩnh Châu Ling Ling Sân bay Yongzhou Lingling Yongzhou Lingling Airport Trung Quốc China CN"
  },
  {
    "id": "VIN",
    "name": "Vinnitsa (VIN)",
    "country": "U-krai-na",
    "keywords": "VIN VIN Vinnitsa Vinnitsa Gavryshivka International Gavryshivka International U-krai-na Ukraine UA"
  },
  {
    "id": "VIJ",
    "name": "Virgin Gorda (VIJ)",
    "country": "British Virgin Islands",
    "keywords": "VIJ VIJ Virgin Gorda Virgin Gorda Sân bay Virgin Gorda Virgin Gorda Airport British Virgin Islands British Virgin Islands VG"
  },
  {
    "id": "VIS",
    "name": "Visalia (VIS)",
    "country": "Hoa kỳ",
    "keywords": "VIS VIS Visalia Visalia Sân bay Visalia Municipal Visalia Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "VBY",
    "name": "Visby (VBY)",
    "country": "Thụy điển",
    "keywords": "VBY VBY Visby Visby Sân bay Visby Visby Airport Thụy điển Sweden SE"
  },
  {
    "id": "VTZ",
    "name": "Vishakhapatanam (VTZ)",
    "country": "Ấn độ",
    "keywords": "VTZ VTZ Vishakhapatanam Vishakhapatanam Sân bay Visakhapatnam Visakhapatnam Airport Ấn độ India IN"
  },
  {
    "id": "VIT",
    "name": "Vitoria (VIT)",
    "country": "Tây Ban Nha",
    "keywords": "VIT VIT Vitoria Vitoria Sân bay Vitoria Foronda Vitoria Foronda International Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "VIX",
    "name": "Vitoria (VIX)",
    "country": "Bra xin",
    "keywords": "VIX VIX Vitoria Vitoria Sân bay Eurico de Aguiar Salles Eurico de Aguiar Salles Airport Bra xin Brazil BR"
  },
  {
    "id": "VVO",
    "name": "Vladivostok (VVO)",
    "country": "Nga",
    "keywords": "VVO VVO Vladivostok Vladivostok Sân bay Vladivostok Vladivostok International Airport Nga Russia RU"
  },
  {
    "id": "VOG",
    "name": "Volgograd (VOG)",
    "country": "Nga",
    "keywords": "VOG VOG Volgograd Volgograd Sân bay Gumrak Gumrak Airport Nga Russia RU"
  },
  {
    "id": "VOL",
    "name": "Volos (VOL)",
    "country": "Hy lạp",
    "keywords": "VOL VOL Volos Volos Sân bay International Airport of Central Greece Hy lạp Greece GR"
  },
  {
    "id": "VOZ",
    "name": "Voronezh (VOZ)",
    "country": "Nga",
    "keywords": "VOZ VOZ Voronezh Voronezh Sân bay Voronezh Voronezh International Airport Nga Russia RU"
  },
  {
    "id": "WUX",
    "name": "Vô Tích (WUX)",
    "country": "Trung Quốc",
    "keywords": "WUX WUX Vô Tích WUXI Sân bay Wuxi Wuxi Trung Quốc China CN"
  },
  {
    "id": "WUS",
    "name": "Vũ Di Sơn (WUS)",
    "country": "Trung Quốc",
    "keywords": "WUS WUS Vũ Di Sơn WUYISHAN Sân bay Wuyishan Wuyishan Airport Trung Quốc China CN"
  },
  {
    "id": "WUA",
    "name": "Vũ Hải (WUA)",
    "country": "Trung Quốc",
    "keywords": "WUA WUA Vũ Hải Wuhai Sân bay Wuhai Wuhai Airport Trung Quốc China CN"
  },
  {
    "id": "WUH",
    "name": "Vũ Hán (WUH)",
    "country": "Trung Quốc",
    "keywords": "WUH WUH Vũ Hán Wuhan Sân bay Wuhan Tianhe Wuhan Tianhe International Airport Trung Quốc China CN"
  },
  {
    "id": "UYN",
    "name": "Vũ Lâm (UYN)",
    "country": "Trung Quốc",
    "keywords": "UYN UYN Vũ Lâm Yulin Yuyang Sân bay Yulin Yuyang Yulin Yuyang Airport Trung Quốc China CN"
  },
  {
    "id": "YWK",
    "name": "Wabush (YWK)",
    "country": "Canada",
    "keywords": "YWK YWK Wabush Wabush Sân bay Wabush Wabush Airport Canada Canada CA"
  },
  {
    "id": "ACT",
    "name": "Waco (ACT)",
    "country": "Hoa kỳ",
    "keywords": "ACT ACT Waco Waco Sân bay Waco Regional Waco Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "WGA",
    "name": "Wagga Wagga (WGA)",
    "country": "Úc",
    "keywords": "WGA WGA Wagga Wagga Wagga Wagga Sân bay Wagga Wagga Wagga Wagga Airport Úc Australia AU"
  },
  {
    "id": "AIN",
    "name": "Wainwright (AIN)",
    "country": "Hoa kỳ",
    "keywords": "AIN AIN Wainwright Wainwright Sân bay Wainwright Wainwright Airport Hoa kỳ United States US"
  },
  {
    "id": "WKJ",
    "name": "Wakkanai (WKJ)",
    "country": "Nhật bản",
    "keywords": "WKJ WKJ Wakkanai Wakkanai Sân bay Wakkanai Wakkanai Airport Nhật bản Japan JP"
  },
  {
    "id": "ALW",
    "name": "Walla Walla (ALW)",
    "country": "Hoa kỳ",
    "keywords": "ALW ALW Walla Walla Walla Walla Sân bay Walla Walla Regional Walla Walla Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "WVB",
    "name": "Walvis Bay (WVB)",
    "country": "Namibia",
    "keywords": "WVB WVB Walvis Bay Walvis Bay Sân bay Walvis Bay Walvis Bay Airport Namibia Namibia NA"
  },
  {
    "id": "WKA",
    "name": "Wanaka (WKA)",
    "country": "Niu di lân",
    "keywords": "WKA WKA Wanaka Wanaka Sân bay Wanaka Wanaka Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "WAG",
    "name": "Wanganui (WAG)",
    "country": "Niu di lân",
    "keywords": "WAG WAG Wanganui Wanganui Sân bay Wanganui Wanganui Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "WAW",
    "name": "Warsaw (WAW)",
    "country": "Ba Lan",
    "keywords": "WAW WAW Warsaw Warsaw Sân bay Frederic Chopin Frederic Chopin International Airport Ba Lan Poland PL"
  },
  {
    "id": "DCA",
    "name": "Washington (DCA)",
    "country": "Hoa kỳ",
    "keywords": "DCA WAS Washington Washington Sân bay Ronald Reagan Washington National Ronald Reagan Washington National Airport Hoa kỳ United States US"
  },
  {
    "id": "IAD",
    "name": "Washington (IAD)",
    "country": "Hoa kỳ",
    "keywords": "IAD WAS Washington Washington Sân bay Washington Dulles Washington Dulles International Airport Hoa kỳ United States US"
  },
  {
    "id": "WAS",
    "name": "Washington (WAS)",
    "country": "Hoa kỳ",
    "keywords": "WAS WAS Washington Washington Tất cả các sân bay All Airports Hoa kỳ United States US"
  },
  {
    "id": "YKQ",
    "name": "Waskaganish (YKQ)",
    "country": "Canada",
    "keywords": "YKQ YKQ Waskaganish Waskaganish Sân bay Waskaganish Waskaganish Airport Canada Canada CA"
  },
  {
    "id": "WAT",
    "name": "Waterford (WAT)",
    "country": "Cộng hòa Ai len",
    "keywords": "WAT WAT Waterford Waterford Sân bay Waterford Waterford Airport Cộng hòa Ai len Republic of Ireland IE"
  },
  {
    "id": "ALO",
    "name": "Waterloo (ALO)",
    "country": "Hoa kỳ",
    "keywords": "ALO ALO Waterloo Waterloo Sân bay Waterloo Regional Waterloo Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ART",
    "name": "Watertown (ART)",
    "country": "Hoa kỳ",
    "keywords": "ART ART Watertown Watertown Sân bay Watertown Watertown International Airport Hoa kỳ United States US"
  },
  {
    "id": "ATY",
    "name": "Watertown (ATY)",
    "country": "Hoa kỳ",
    "keywords": "ATY ATY Watertown Watertown Sân bay Watertown Regional Watertown Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "CWA",
    "name": "Wausau (CWA)",
    "country": "Hoa kỳ",
    "keywords": "CWA AUW Wausau Wausau Sân bay Central Wisconsin Central Wisconsin Airport Hoa kỳ United States US"
  },
  {
    "id": "WEI",
    "name": "Weipa (WEI)",
    "country": "Úc",
    "keywords": "WEI WEI Weipa Weipa Sân bay Weipa Weipa Airport Úc Australia AU"
  },
  {
    "id": "WLG",
    "name": "Wellington (WLG)",
    "country": "Niu di lân",
    "keywords": "WLG WLG Wellington Wellington Sân bay Wellington Wellington International Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "EAT",
    "name": "Wenatchee (EAT)",
    "country": "Hoa kỳ",
    "keywords": "EAT EAT Wenatchee Wenatchee Sân bay Pangborn Memorial Pangborn Memorial Airport Hoa kỳ United States US"
  },
  {
    "id": "WNH",
    "name": "Wenshan (WNH)",
    "country": "Trung Quốc",
    "keywords": "WNH WNH Wenshan Wenshan Sân bay Wenshan Wenshan Airport Trung Quốc China CN"
  },
  {
    "id": "LNA",
    "name": "West Palm Beach (LNA)",
    "country": "Hoa kỳ",
    "keywords": "LNA PBI West Palm Beach West Palm Beach Sân bay Palm Beach County Park Palm Beach County Park Airport Hoa kỳ United States US"
  },
  {
    "id": "PBI",
    "name": "West Palm Beach (PBI)",
    "country": "Hoa kỳ",
    "keywords": "PBI PBI West Palm Beach West Palm Beach Sân bay Palm Beach Palm Beach International Airport Hoa kỳ United States US"
  },
  {
    "id": "WYS",
    "name": "West Yellowstone (WYS)",
    "country": "Hoa kỳ",
    "keywords": "WYS WYS West Yellowstone West Yellowstone Sân bay Yellowstone Yellowstone Airport Hoa kỳ United States US"
  },
  {
    "id": "GWT",
    "name": "Westerland (GWT)",
    "country": "Đức",
    "keywords": "GWT GWT Westerland Westerland Sân bay Sylt Sylt Airport Đức Germany DE"
  },
  {
    "id": "WSZ",
    "name": "Westport (WSZ)",
    "country": "Niu di lân",
    "keywords": "WSZ WSZ Westport Westport Sân bay Westport Westport Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "WHK",
    "name": "Whakatane (WHK)",
    "country": "Niu di lân",
    "keywords": "WHK WHK Whakatane Whakatane Sân bay Whakatane Whakatane Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "YXN",
    "name": "Whale Cove (YXN)",
    "country": "Canada",
    "keywords": "YXN YXN Whale Cove Whale Cove Sân bay Whale Cove Whale Cove Airport Canada Canada CA"
  },
  {
    "id": "WRE",
    "name": "Whangarei (WRE)",
    "country": "Niu di lân",
    "keywords": "WRE WRE Whangarei Whangarei Sân bay Whangarei Whangarei Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "HPN",
    "name": "White Plains (HPN)",
    "country": "Hoa kỳ",
    "keywords": "HPN HPN White Plains White Plains Sân bay Westchester County Westchester County Airport Hoa kỳ United States US"
  },
  {
    "id": "YXY",
    "name": "Whitehorse (YXY)",
    "country": "Canada",
    "keywords": "YXY YXY Whitehorse Whitehorse Sân bay Erik Nielsen Whitehorse Erik Nielsen Whitehorse International Airport Canada Canada CA"
  },
  {
    "id": "ICT",
    "name": "Wichita (ICT)",
    "country": "Hoa kỳ",
    "keywords": "ICT ICT Wichita Wichita Sân bay Wichita Mid-Continent Wichita Mid-Continent Airport Hoa kỳ United States US"
  },
  {
    "id": "SPS",
    "name": "Wichita Falls (SPS)",
    "country": "Hoa kỳ",
    "keywords": "SPS SPS Wichita Falls Wichita Falls Sân bay Sheppard AFB / Wichita Falls Municipal Sheppard AFB / Wichita Falls Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "WIC",
    "name": "Wick (WIC)",
    "country": "Anh quốc",
    "keywords": "WIC WIC Wick Wick Sân bay Wick Wick Airport Anh quốc United Kingdom GB"
  },
  {
    "id": "YWL",
    "name": "Williams Lake (YWL)",
    "country": "Canada",
    "keywords": "YWL YWL Williams Lake Williams Lake Sân bay Williams Lake Williams Lake Airport Canada Canada CA"
  },
  {
    "id": "IPT",
    "name": "Williamsport (IPT)",
    "country": "Hoa kỳ",
    "keywords": "IPT IPT Williamsport Williamsport Sân bay Williamsport Regional Williamsport Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "ISN",
    "name": "Williston (ISN)",
    "country": "Hoa kỳ",
    "keywords": "ISN ISN Williston Williston Sân bay Sloulin Field Sloulin Field International Airport Hoa kỳ United States US"
  },
  {
    "id": "ILG",
    "name": "Wilmington (ILG)",
    "country": "Hoa kỳ",
    "keywords": "ILG ILG Wilmington Wilmington Sân bay New Castle New Castle Airport Hoa kỳ United States US"
  },
  {
    "id": "ILM",
    "name": "Wilmington (ILM)",
    "country": "Hoa kỳ",
    "keywords": "ILM ILM Wilmington Wilmington Sân bay Wilmington Wilmington International Airport Hoa kỳ United States US"
  },
  {
    "id": "ERS",
    "name": "Windhoek (ERS)",
    "country": "Namibia",
    "keywords": "ERS WDH Windhoek Windhoek Sân bay Eros Eros Airport Namibia Namibia NA"
  },
  {
    "id": "WDH",
    "name": "Windhoek (WDH)",
    "country": "Namibia",
    "keywords": "WDH WDH Windhoek Windhoek Sân bay Windhoek Hosea Kutako Windhoek Hosea Kutako International Airport Namibia Namibia NA"
  },
  {
    "id": "YQG",
    "name": "Windsor (YQG)",
    "country": "Canada",
    "keywords": "YQG YQG Windsor Windsor Sân bay Windsor Windsor Airport Canada Canada CA"
  },
  {
    "id": "YWG",
    "name": "Winnipeg MN (YWG)",
    "country": "Canada",
    "keywords": "YWG YWG Winnipeg MN Winnipeg Sân bay Winnipeg James Armstrong Richardson Winnipeg James Armstrong Richardson International Canada Canada CA"
  },
  {
    "id": "INT",
    "name": "Winston-Salem (INT)",
    "country": "Hoa kỳ",
    "keywords": "INT INT Winston-Salem Winston-Salem Sân bay Smith Reynolds Smith Reynolds Airport Hoa kỳ United States US"
  },
  {
    "id": "ORH",
    "name": "Worcester (ORH)",
    "country": "Hoa kỳ",
    "keywords": "ORH ORH Worcester Worcester Sân bay Worcester Regional Worcester Regional Airport Hoa kỳ United States US"
  },
  {
    "id": "WRL",
    "name": "Worland (WRL)",
    "country": "Hoa kỳ",
    "keywords": "WRL WRL Worland Worland Sân bay Worland Municipal Worland Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "WRG",
    "name": "Wrangell (WRG)",
    "country": "Hoa kỳ",
    "keywords": "WRG WRG Wrangell Wrangell Sân bay Wrangell Wrangell Airport Hoa kỳ United States US"
  },
  {
    "id": "WRO",
    "name": "Wroclaw (WRO)",
    "country": "Ba Lan",
    "keywords": "WRO WRO Wroclaw Wroclaw Sân bay Copernicus Copernicus Airport Wroclaw Ba Lan Poland PL"
  },
  {
    "id": "JAL",
    "name": "Xalapa (JAL)",
    "country": "Mê hi cô",
    "keywords": "JAL JAL Xalapa Xalapa Sân bay El Lencero El Lencero Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "LED",
    "name": "Xanh Pê-téc-bua (LED)",
    "country": "Nga",
    "keywords": "LED LED Xanh Pê-téc-bua St Petersburg Sân bay Pulkovo Pulkovo Airport Nga Russia RU"
  },
  {
    "id": "XKH",
    "name": "Xiêng Khoảng (XKH)",
    "country": "Lào",
    "keywords": "XKH XKH Xiêng Khoảng Xieng Khouang Sân bay Xieng Khouang Xieng Khouang Airport Lào Lao, People's Dem. Rep. LA"
  },
  {
    "id": "YKM",
    "name": "Yakima (YKM)",
    "country": "Hoa kỳ",
    "keywords": "YKM YKM Yakima Yakima Yakima Air Terminal Yakima Air Terminal Hoa kỳ United States US"
  },
  {
    "id": "YAK",
    "name": "Yakutat (YAK)",
    "country": "Hoa kỳ",
    "keywords": "YAK YAK Yakutat Yakutat Sân bay Yakutat Yakutat Airport Hoa kỳ United States US"
  },
  {
    "id": "YKS",
    "name": "Yakutsk (YKS)",
    "country": "Nga",
    "keywords": "YKS YKS Yakutsk Yakutsk Sân bay Yakutsk Yakutsk Airport Nga Russia RU"
  },
  {
    "id": "GAJ",
    "name": "Yamagata (GAJ)",
    "country": "Nhật bản",
    "keywords": "GAJ GAJ Yamagata Yamagata Sân bay Yamagata Yamagata Airport Nhật bản Japan JP"
  },
  {
    "id": "ENY",
    "name": "Yan'an (ENY)",
    "country": "Trung Quốc",
    "keywords": "ENY ENY Yan'an Yan'an Sân bay Yan'an Ershilibao Yan'an Ershilibao Airport Trung Quốc China CN"
  },
  {
    "id": "YNB",
    "name": "Yanbo (YNB)",
    "country": "Ả rập xê út",
    "keywords": "YNB YNB Yanbo Yanbo Sân bay Yanbu Yanbu Airport Ả rập xê út Saudi Arabia SA"
  },
  {
    "id": "RGN",
    "name": "Yangon (RGN)",
    "country": "Myanmar",
    "keywords": "RGN RGN Yangon Yangon Sân bay Yangon Yangon International Airport Myanmar Myanmar MM"
  },
  {
    "id": "NSI",
    "name": "Yaounde (NSI)",
    "country": "Cộng hòa Cameroon",
    "keywords": "NSI YAO Yaounde Yaounde Sân bay Yaoundé Nsimalen Yaoundé Nsimalen International Airport Cộng hòa Cameroon United Republic Of Cameroon CM"
  },
  {
    "id": "YAO",
    "name": "Yaounde (YAO)",
    "country": "Cộng hòa Cameroon",
    "keywords": "YAO YAO Yaounde Yaounde Sân bay Yaoundé Yaoundé Airport Cộng hòa Cameroon United Republic Of Cameroon CM"
  },
  {
    "id": "YAP",
    "name": "Yap, Caroline Islands (YAP)",
    "country": "Niu di lân",
    "keywords": "YAP YAP Yap, Caroline Islands Yap, Caroline Islands Sân bay Yap Yap International Airport Niu di lân New Zealand NZ"
  },
  {
    "id": "AZD",
    "name": "Yazd (AZD)",
    "country": "Iran",
    "keywords": "AZD AZD Yazd Yazd Sân bay Yazd Shahid Sadooghi Yazd Shahid Sadooghi Airport Iran Iran IR"
  },
  {
    "id": "YZF",
    "name": "Yellowknife (YZF)",
    "country": "Canada",
    "keywords": "YZF YZF Yellowknife Yellowknife Sân bay Yellowknife Yellowknife Airport Canada Canada CA"
  },
  {
    "id": "YNT",
    "name": "Yên Đài (YNT)",
    "country": "Trung Quốc",
    "keywords": "YNT YNT Yên Đài Yantai Sân bay Yantai Laishan Yantai Laishan International Airport Trung Quốc China CN"
  },
  {
    "id": "YIC",
    "name": "Yichun (YIC)",
    "country": "Trung Quốc",
    "keywords": "YIC YIC Yichun Yichun Sân bay Yichun Yichun Airport Trung Quốc China CN"
  },
  {
    "id": "LDS",
    "name": "Yichun Shi (LDS)",
    "country": "Trung Quốc",
    "keywords": "LDS LDS Yichun Shi Yichun Shi Sân bay Yichun Shi Yichun Shi Airport Trung Quốc China CN"
  },
  {
    "id": "JOG",
    "name": "Yogjakarta (JOG)",
    "country": "Indonesia",
    "keywords": "JOG JOG Yogjakarta Yogjakarta Sân bay Adisucipto Adisucipto International Airport Indonesia Indonesia ID"
  },
  {
    "id": "YGJ",
    "name": "Yonago (YGJ)",
    "country": "Nhật bản",
    "keywords": "YGJ YGJ Yonago Yonago Sân bay Miho-Yonago Miho-Yonago Airport Nhật bản Japan JP"
  },
  {
    "id": "YUM",
    "name": "Yuma (YUM)",
    "country": "Hoa kỳ",
    "keywords": "YUM YUM Yuma Yuma Sân bay Yuma Yuma International Airport / MCAS Yuma Hoa kỳ United States US"
  },
  {
    "id": "UUS",
    "name": "Yuzhno Sakhalinsk (UUS)",
    "country": "Nga",
    "keywords": "UUS UUS Yuzhno Sakhalinsk Yuzhno Sakhalinsk Sân bay Yuzhno-Sakhalinsk Yuzhno-Sakhalinsk Airport Nga Russia RU"
  },
  {
    "id": "ZCL",
    "name": "Zacatecas (ZCL)",
    "country": "Mê hi cô",
    "keywords": "ZCL ZCL Zacatecas Zacatecas Sân bay General Leobardo C. Ruiz General Leobardo C. Ruiz International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "ZAD",
    "name": "Zadar (ZAD)",
    "country": "Croatia",
    "keywords": "ZAD ZAD Zadar Zadar Sân bay Zadar Zadar Airport Croatia Croatia HR"
  },
  {
    "id": "ZAG",
    "name": "Zagreb (ZAG)",
    "country": "Croatia",
    "keywords": "ZAG ZAG Zagreb Zagreb Sân bay Zagreb Zagreb Airport Croatia Croatia HR"
  },
  {
    "id": "ZTH",
    "name": "Zakynthos (ZTH)",
    "country": "Hy lạp",
    "keywords": "ZTH ZTH Zakynthos Zakynthos Sân bay Zakynthos Zakynthos International Airport, \"Dionysios Solomo Hy lạp Greece GR"
  },
  {
    "id": "ZZV",
    "name": "Zanesville (ZZV)",
    "country": "Hoa kỳ",
    "keywords": "ZZV ZZV Zanesville Zanesville Sân bay Zanesville Municipal Zanesville Municipal Airport Hoa kỳ United States US"
  },
  {
    "id": "ZNZ",
    "name": "Zanzibar (ZNZ)",
    "country": "Tanzania",
    "keywords": "ZNZ ZNZ Zanzibar Zanzibar Sân bay Zanzibar Zanzibar Airport Tanzania Tanzania TZ"
  },
  {
    "id": "OZH",
    "name": "Zaporozhe (OZH)",
    "country": "U-krai-na",
    "keywords": "OZH OZH Zaporozhe Zaporozhe Sân bay Zaporizhia Zaporizhia International Airport U-krai-na Ukraine UA"
  },
  {
    "id": "XZZ",
    "name": "Zaragoza (XZZ)",
    "country": "Tây Ban Nha",
    "keywords": "XZZ ZAZ Zaragoza Zaragoza Zaragoza Delicias Rail Zaragoza Delicias Rail Tây Ban Nha Spain ES"
  },
  {
    "id": "ZAZ",
    "name": "Zaragoza (ZAZ)",
    "country": "Tây Ban Nha",
    "keywords": "ZAZ ZAZ Zaragoza Zaragoza Sân bay Zaragoza Zaragoza Airport Tây Ban Nha Spain ES"
  },
  {
    "id": "ZQZ",
    "name": "Zhangjiakou (ZQZ)",
    "country": "Trung Quốc",
    "keywords": "ZQZ ZQZ Zhangjiakou Zhangjiakou Sân bay Zhangjiakou Zhangjiakou Airport Trung Quốc China CN"
  },
  {
    "id": "YZY",
    "name": "Zhangye Ganzhou (YZY)",
    "country": "Trung Quốc",
    "keywords": "YZY YZY Zhangye Ganzhou Zhangye Ganzhou Sân bay Zhangye Ganzhou Zhangye Ganzhou Airport Trung Quốc China CN"
  },
  {
    "id": "PZH",
    "name": "Zhob (PZH)",
    "country": "Pakistan",
    "keywords": "PZH PZH Zhob Zhob Sân bay Zhob Zhob Airport Pakistan Pakistan PK"
  },
  {
    "id": "ZHY",
    "name": "Zhongwei (ZHY)",
    "country": "Trung Quốc",
    "keywords": "ZHY ZHY Zhongwei Zhongwei Sân bay Zhongwei Zhongwei Airport Trung Quốc China CN"
  },
  {
    "id": "ZIG",
    "name": "Ziguinchor (ZIG)",
    "country": "Senegal",
    "keywords": "ZIG ZIG Ziguinchor Ziguinchor Sân bay Ziguinchor Ziguinchor Airport Senegal Senegal SN"
  },
  {
    "id": "ZIH",
    "name": "Zihuatanejo (ZIH)",
    "country": "Mê hi cô",
    "keywords": "ZIH ZIH Zihuatanejo Zihuatanejo Sân bay Ixtapa-Zihuatanejo Ixtapa-Zihuatanejo International Airport Mê hi cô MEXICO MX"
  },
  {
    "id": "ZRH",
    "name": "Zurich (ZRH)",
    "country": "Thụy sỹ",
    "keywords": "ZRH ZRH Zurich Zurich Sân bay Zurich Zurich Airport Thụy sỹ Switzerland CH"
  }
];
