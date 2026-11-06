// ============================================================================
// SCENERY.JS — VISUAL SVG SCENERY HABITAT & HOLOGRAM BIO-SCANNER
// Menyediakan ilustrasi vektor 2D untuk 8 habitat satwa Indonesia
// sebelum aset foto/video asli dimasukkan.
// ============================================================================

const HOLO_SCENERY = {
  getHabitatSVG(animalId, accent = "#00f0ff") {
    const scenes = {
      "harimau-sumatera": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <defs>
            <linearGradient id="sumBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#04221b"/>
              <stop offset="100%" stop-color="#020c0e"/>
            </linearGradient>
          </defs>
          <rect width="800" height="450" fill="url(#sumBg)"/>
          <circle cx="650" cy="95" r="45" fill="rgba(16,185,129,0.18)" stroke="${accent}" stroke-dasharray="4 4"/>
          <path d="M0,320 Q180,220 350,290 T800,260 L800,450 L0,450 Z" fill="rgba(16,185,129,0.12)" stroke="${accent}" stroke-width="1"/>
          <path d="M0,360 Q260,290 520,350 T800,330 L800,450 L0,450 Z" fill="rgba(6,95,70,0.28)" stroke="${accent}" stroke-width="1.5"/>
          <!-- Siluet Pepohonan Hutan Hujan Sumatera -->
          <g stroke="${accent}" stroke-width="1.2" fill="rgba(16,185,129,0.1)">
            <polygon points="90,360 120,210 150,360"/>
            <polygon points="135,365 175,180 215,365"/>
            <polygon points="610,355 650,190 690,355"/>
            <polygon points="670,365 710,220 750,365"/>
          </g>
        </svg>`,
      "badak-jawa": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#041824"/>
          <!-- Siluet Gunung Krakatau di Kejauhan & Rawa Ujung Kulon -->
          <polygon points="520,310 630,150 740,310" fill="rgba(56,189,248,0.12)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M0,310 L800,310" stroke="${accent}" stroke-dasharray="6 4" stroke-width="1"/>
          <path d="M0,340 Q200,320 400,345 T800,335 L800,450 L0,450 Z" fill="rgba(14,116,144,0.25)" stroke="${accent}" stroke-width="1.5"/>
          <circle cx="210" cy="110" r="38" fill="rgba(56,189,248,0.15)" stroke="${accent}"/>
        </svg>`,
      "elang-jawa": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#181206"/>
          <circle cx="400" cy="120" r="65" fill="rgba(245,158,11,0.16)" stroke="${accent}" stroke-dasharray="5 5"/>
          <!-- Puncak Pegunungan Jawa -->
          <polygon points="40,380 240,140 440,380" fill="rgba(245,158,11,0.12)" stroke="${accent}" stroke-width="1.5"/>
          <polygon points="310,380 540,110 760,380" fill="rgba(217,119,6,0.16)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M0,380 L800,380" stroke="${accent}" stroke-width="1.5"/>
        </svg>`,
      "orangutan-kalimantan": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#041e12"/>
          <!-- Kanopi Pohon Raksasa & Sulur Liana Kalimantan -->
          <path d="M120,0 L120,450 M680,0 L680,450" stroke="${accent}" stroke-width="18" opacity="0.2"/>
          <path d="M120,80 Q400,190 680,60" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="6 4"/>
          <path d="M120,150 Q380,260 680,140" fill="none" stroke="${accent}" stroke-width="1.5"/>
          <circle cx="150" cy="60" r="110" fill="rgba(34,197,94,0.15)" stroke="${accent}"/>
          <circle cx="650" cy="70" r="120" fill="rgba(34,197,94,0.15)" stroke="${accent}"/>
        </svg>`,
      "pesut-mahakam": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#031b26"/>
          <!-- Gelombang Air Sungai Mahakam & Sonar Ekolokasi -->
          <path d="M0,160 Q200,130 400,160 T800,150" fill="none" stroke="${accent}" stroke-width="2"/>
          <path d="M0,240 Q200,210 400,240 T800,230" fill="none" stroke="${accent}" stroke-width="1.2" opacity="0.6"/>
          <circle cx="400" cy="240" r="50" fill="none" stroke="${accent}" stroke-dasharray="4 4"/>
          <circle cx="400" cy="240" r="95" fill="none" stroke="${accent}" stroke-dasharray="6 6" opacity="0.6"/>
          <circle cx="400" cy="240" r="145" fill="none" stroke="${accent}" stroke-dasharray="8 8" opacity="0.35"/>
        </svg>`,
      "anoa-sulawesi": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#130924"/>
          <!-- Tebing Karst & Hutan Wallacea Sulawesi -->
          <path d="M60,370 L110,160 L210,160 L250,370 Z" fill="rgba(168,85,247,0.14)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M540,370 L585,130 L690,145 L730,370 Z" fill="rgba(168,85,247,0.14)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M0,370 Q400,340 800,370 L800,450 L0,450 Z" fill="rgba(126,34,206,0.22)" stroke="${accent}"/>
        </svg>`,
      "komodo-ntt": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#210909"/>
          <!-- Matahari Terik & Bukit Sabana Kering Pulau Komodo -->
          <circle cx="620" cy="115" r="55" fill="rgba(239,68,68,0.22)" stroke="${accent}" stroke-width="2"/>
          <path d="M0,330 Q220,210 460,320 T800,270 L800,450 L0,450 Z" fill="rgba(239,68,68,0.14)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M0,375 Q360,310 800,370 L800,450 L0,450 Z" fill="rgba(185,28,28,0.22)" stroke="${accent}"/>
        </svg>`,
      "cenderawasih-merah": `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="scenery-svg">
          <rect width="800" height="450" fill="#1f0718"/>
          <!-- Gugusan Pulau Karst Raja Ampat & Kanopi Papua -->
          <path d="M80,340 Q140,220 200,340 Z" fill="rgba(236,72,153,0.16)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M230,340 Q310,180 390,340 Z" fill="rgba(236,72,153,0.2)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M560,340 Q635,200 710,340 Z" fill="rgba(236,72,153,0.16)" stroke="${accent}" stroke-width="1.5"/>
          <path d="M0,340 L800,340" stroke="${accent}" stroke-width="1.5"/>
          <circle cx="460" cy="110" r="45" fill="rgba(236,72,153,0.15)" stroke="${accent}" stroke-dasharray="4 4"/>
        </svg>`
    };

    return scenes[animalId] || scenes["harimau-sumatera"];
  }
};
