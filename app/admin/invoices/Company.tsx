"use client";

export default function CompanyStamp() {
  return (
    <div className="w-[500px] max-w-full aspect-square">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-full w-full text-[#d71920]"
      >
        <defs>
          {/* =====================================================
              ĐƯỜNG CONG CHỮ PHÍA TRÊN
              ===================================================== */}

          <path
            id="stampTopPath"
            d="M 30,100 A 70,70 0 1,1 170,100"
            fill="none"
          />

          {/* =====================================================
              ĐƯỜNG CONG CHỮ PHÍA DƯỚI
              ===================================================== */}

          <path
            id="stampBottomPath"
            d="M 30,100 A 70,70 0 0,0 170,100"
            fill="none"
          />

          {/* =====================================================
              HIỆU ỨNG MỰC CON DẤU
              ===================================================== */}

          <filter
            id="stampInk"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              seed="8"
              result="noise"
            />

            <feGaussianBlur
              in="noise"
              stdDeviation="0.35"
              result="blurNoise"
            />

            <feBlend
              in="SourceGraphic"
              in2="blurNoise"
              mode="multiply"
              result="inkBlend"
            />

            <feComponentTransfer in="inkBlend">
              <feFuncR
                type="linear"
                slope="1.05"
              />

              <feFuncG
                type="linear"
                slope="1.05"
              />

              <feFuncB
                type="linear"
                slope="1.05"
              />

              <feFuncA
                type="linear"
                slope="0.92"
              />
            </feComponentTransfer>
          </filter>
        </defs>

        {/* =====================================================
            TOÀN BỘ CON DẤU
            ===================================================== */}

        <g
          style={{
            filter: "url(#stampInk)",
          }}
        >
          {/* ===================================================
              VÒNG NGOÀI CÙNG
              =================================================== */}

          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* ===================================================
              VÒNG NGOÀI THỨ 2
              =================================================== */}

          <circle
            cx="100"
            cy="100"
            r="89"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* ===================================================
              VÒNG TRONG
              =================================================== */}

          <circle
            cx="100"
            cy="100"
            r="69"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* ===================================================
              CHỮ PHÍA TRÊN
              =================================================== */}

          <text
            fill="currentColor"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="9.5"
            fontWeight="900"
            letterSpacing="0.8"
          >
            <textPath
              href="#stampTopPath"
              startOffset="50%"
              textAnchor="middle"
            >
              CÔNG TY TNHH VÉ MÁY BAY 24H - C.T.T.N.H.H
            </textPath>
          </text>

          {/* ===================================================
              CHỮ PHÍA DƯỚI
              =================================================== */}

          <text
            fill="currentColor"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="9.5"
            fontWeight="900"
            letterSpacing="0.7"
          >
            <textPath
              href="#stampBottomPath"
              startOffset="50%"
              textAnchor="middle"
            >
              CÔNG TY TNHH VÉ MÁY BAY 24H
            </textPath>
          </text>

          {/* ===================================================
              NGÔI SAO TRÁI
              =================================================== */}

          <polygon
            fill="currentColor"
            points="
              20,93
              22.2,97
              26.8,97.4
              23.4,100.4
              24.5,105
              20,102.7
              15.5,105
              16.6,100.4
              13.2,97.4
              17.8,97
            "
          />

          {/* ===================================================
              NGÔI SAO PHẢI
              =================================================== */}

          <polygon
            fill="currentColor"
            points="
              180,93
              182.2,97
              186.8,97.4
              183.4,100.4
              184.5,105
              180,102.7
              175.5,105
              176.6,100.4
              173.2,97.4
              177.8,97
            "
          />

          {/* ===================================================
              NỘI DUNG CHÍNH
              =================================================== */}

          <g
            fill="currentColor"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="900"
          >
            {/* CÔNG TY */}

            <text
              x="100"
              y="69"
              fontSize="15"
              letterSpacing="1"
            >
              CÔNG TY
            </text>

            {/* TNHH */}

            <text
              x="100"
              y="93"
              fontSize="15"
              letterSpacing="1"
            >
              TNHH
            </text>

            {/* VÉ MÁY BAY */}

            <text
              x="100"
              y="117"
              fontSize="13.5"
              letterSpacing="0.7"
            >
              VÉ MÁY BAY
            </text>

            {/* 24H */}

            <text
              x="100"
              y="144"
              fontSize="18"
              letterSpacing="2"
            >
              24H
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}