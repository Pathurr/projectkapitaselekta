// ============================================================================
// DATA KONTEN & KONFIGURASI: NUSANTARA BIO-HOLOGRAM (HEWAN TERANCAM PUNAH)
// File ini dibuat terpisah agar kamu mudah mengganti teks, foto/video, dan quiz
// ============================================================================

const APP_DATA = {
  // 1. Teks Pembukaan (Intro sebelum masuk ke Peta Hologram)
  introSlides: [
    {
      title: "Darurat Keanekaragaman Hayati Nusantara",
      subtitle: "MENGAPA MEREKA TERANCAM PUNAH?",
      text: "Indonesia adalah salah satu negara megabiodiversitas terbesar di dunia. Namun, ratusan spesies satwa endemik kita kini berada di ambang kepunahan akibat penyusutan hutan, perburuan liar, dan perubahan iklim.",
      highlight: "Setiap spesies yang punah memutuskan satu mata rantai ekosistem yang tak tergantikan."
    },
    {
      title: "Mengenal Status Konservasi",
      subtitle: "DARI RENTAN HINGGA KRITIS",
      text: "Lembaga konservasi dunia (IUCN) mengelompokkan satwa terancam ke dalam beberapa kategori seperti Vulnerable (Rentan), Endangered (Terancam), hingga Critically Endangered (Kritis — satu langkah sebelum punah di alam liar).",
      highlight: "Di peta hologram berikut, kamu akan menjelajahi 8 satwa ikonik Indonesia dari Sumatera hingga Papua."
    },
    {
      title: "Misi Eksplorasi Kamu",
      subtitle: "CARA MENGGUNAKAN SISTEM HOLOGRAM",
      text: "Pilih titik koordinat (waypoint) yang menyala di Peta Hologram Indonesia untuk memindai habitat satwa. Bacalah informasi secara bertahap dan selesaikan kuis singkat di setiap titik untuk mengisi Bar Progress Eksplorasi hingga 100%!",
      highlight: "Siap memulai pemindaian? Tekan tombol di bawah untuk membuka Peta Hologram Indonesia."
    }
  ],

  // 2. Data 8 Hewan Terancam Punah di Indonesia (Beserta Koordinat Peta Hologram 2D)
  animals: [
    {
      id: "harimau-sumatera",
      name: "Harimau Sumatera",
      latin: "Panthera tigris sumatrae",
      region: "Pulau Sumatera (Taman Nasional Kerinci Seblat & Gunung Leuser)",
      status: "Critically Endangered (Kritis)",
      statusCode: "CR",
      population: "± 400 - 600 individu di alam liar",
      // Koordinat dalam persentase (x, y) pada kanvas Peta Indonesia (1000x450)
      coords: { x: 165, y: 210 },
      habitatName: "Hutan Hujan Tropis & Rawa Gambut Sumatera",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#10b981",
        sceneryLabel: "SCENERY PLACEHOLDER: Hutan Hujan Lembab Sumatera"
      },
      // Ganti mediaUrl dengan path file kamu nanti, misal: "assets/images/animals/harimau.jpg" atau ".mp4"
      mediaType: "image", // "image" atau "video"
      mediaUrl: "",
      iconEmoji: "🐅",
      paragraphs: [
        "Harimau Sumatera adalah satu-satunya subspesies harimau yang masih bertahan hidup di Indonesia setelah Harimau Bali dan Harimau Jawa dinyatakan punah pada abad ke-20.",
        "Dibandingkan harimau benua lainnya, Harimau Sumatera memiliki ukuran tubuh paling kecil dengan warna kulit oranye yang lebih gelap serta garis-garis belang hitam yang lebih rapat. Ciri fisik ini membantunya berkamuflase sempurna di balik rapatnya vegetasi hutan hujan tropis.",
        "Keberadaan mereka sangat penting sebagai predator puncak (apex predator) yang menjaga keseimbangan populasi mangsa herbivora agar hutan tetap lestari.",
        "Sayangnya, alih fungsi hutan menjadi perkebunan serta perburuan liar membuat populasinya kini berstatus Kritis (Critically Endangered) dengan jumlah kurang dari 600 ekor di alam liar."
      ],
      miniQuiz: {
        question: "Mengapa garis belang pada tubuh Harimau Sumatera lebih rapat dibandingkan harimau lainnya?",
        options: [
          "Untuk membantu berkamuflase di hutan hujan tropis yang rapat",
          "Karena hidup di daerah bersalju yang dingin",
          "Agar mudah terlihat oleh kelompoknya dari kejauhan",
          "Karena makanan utamanya adalah tumbuhan paku"
        ],
        correctIndex: 0,
        explanation: "Garis belang yang rapat dan warna kulit yang lebih gelap adalah adaptasi evolusi untuk menyatu dengan bayangan semak dan pepohonan lebat di hutan Sumatera."
      }
    },
    {
      id: "badak-jawa",
      name: "Badak Jawa",
      latin: "Rhinoceros sondaicus",
      region: "Taman Nasional Ujung Kulon, Banten (Ujung Barat Pulau Jawa)",
      status: "Critically Endangered (Kritis)",
      statusCode: "CR",
      population: "± 70 - 80 individu di alam liar",
      coords: { x: 265, y: 335 },
      habitatName: "Hutan Hujan Dataran Rendah Ujung Kulon",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#38bdf8",
        sceneryLabel: "SCENERY PLACEHOLDER: Rawa & Hutan Pantai Ujung Kulon"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🦏",
      paragraphs: [
        "Badak Jawa atau Badak Bercula Satu Kecil merupakan salah satu mamalia paling langka di muka bumi. Saat ini, seluruh populasi liarnya hanya tersisa di satu tempat di dunia, yaitu Taman Nasional Ujung Kulon, Banten.",
        "Berbeda dengan Badak Sumatera yang memiliki dua cula, Badak Jawa hanya memiliki satu cula dengan panjang rata-rata sekitar 20–25 cm pada individu jantan, sementara betina seringkali tidak memiliki cula atau hanya berupa tonjolan kecil.",
        "Kulitnya yang tebal memiliki lipatan-lipatan khas yang menyerupai baju zirah kuno. Mereka adalah hewan soliter (penyendiri) yang gemar berkubang di lumpur untuk menjaga suhu tubuh dan melindungi kulit dari parasit.",
        "Karena hanya hidup di satu lokasi tunggal, Badak Jawa sangat rentan terhadap ancaman bencana alam seperti letusan Gunung Anak Krakatau, penyakit menular, serta invasi tanaman Langkap yang mendesak tanaman pakan mereka."
      ],
      miniQuiz: {
        question: "Di manakah satu-satunya habitat alami Badak Jawa yang tersisa di dunia saat ini?",
        options: [
          "Taman Nasional Way Kambas, Lampung",
          "Taman Nasional Ujung Kulon, Banten",
          "Taman Nasional Baluran, Jawa Timur",
          "Taman Nasional Komodo, NTT"
        ],
        correctIndex: 1,
        explanation: "Taman Nasional Ujung Kulon di ujung barat Pulau Jawa adalah benteng terakhir bagi seluruh populasi Badak Jawa di alam liar."
      }
    },
    {
      id: "elang-jawa",
      name: "Elang Jawa",
      latin: "Nisaetus bartelsi",
      region: "Pegunungan Hutan Pulau Jawa (Gede Pangrango, Halimun Salak, Bromo Tengger)",
      status: "Endangered (Terancam)",
      statusCode: "EN",
      population: "± 300 - 500 pasang dewasa",
      coords: { x: 350, y: 355 },
      habitatName: "Kanopi Hutan Pegunungan Pulau Jawa",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#f59e0b",
        sceneryLabel: "SCENERY PLACEHOLDER: Puncak Kanopi Pegunungan Jawa"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🦅",
      paragraphs: [
        "Elang Jawa adalah burung pemangsa endemik Pulau Jawa yang memiliki kemiripan sangat kuat dengan lambang negara Indonesia, yaitu Burung Garuda. Di bagian atas kepalanya terdapat jambul khas yang terdiri dari 2 hingga 4 helai bulu panjang.",
        "Burung ini menghuni hutan hujan tropis di lereng-lereng pegunungan Pulau Jawa. Mereka dikenal sangat setia pada pasangannya (monogami) dan bersama-sama menjaga wilayah teritorial sarang di pohon-pohon raksasa.",
        "Laju reproduksi Elang Jawa sangat lambat: seekor betina umumnya hanya bertelur satu butir setiap dua tahun sekali, dengan masa asuh anak yang memakan waktu hampir satu tahun penuh.",
        "Hilangnya pohon-pohon tinggi akibat deforestasi di Pulau Jawa serta perburuan liar untuk perdagangan satwa peliharaan ilegal menjadi ancaman terbesar bagi kelangsungan hidup Sang Garuda di alam bebas."
      ],
      miniQuiz: {
        question: "Mengapa populasi Elang Jawa sangat sulit bertambah dengan cepat secara alami?",
        options: [
          "Karena Elang Jawa tidak bisa terbang tinggi",
          "Karena betina hanya bertelur 1 butir setiap 2 tahun sekali",
          "Karena mereka hanya makan buah-buahan musiman",
          "Karena mereka bermigrasi ke benua Australia setiap bulan"
        ],
        correctIndex: 1,
        explanation: "Siklus reproduksi yang lambat (1 telur setiap 2 tahun) membuat kehilangan satu individu saja berdampak besar pada populasi Elang Jawa."
      }
    },
    {
      id: "orangutan-kalimantan",
      name: "Orangutan Kalimantan",
      latin: "Pongo pygmaeus",
      region: "Hutan Tropis Pulau Kalimantan (Tanjung Puting, Kutai, Betung Kerihun)",
      status: "Critically Endangered (Kritis)",
      statusCode: "CR",
      population: "± 55.000 - 65.000 individu (menurun drastis)",
      coords: { x: 395, y: 195 },
      habitatName: "Tajuk Hutan Tropis & Gambut Kalimantan",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#22c55e",
        sceneryLabel: "SCENERY PLACEHOLDER: Tajuk Pohon Tinggi Hutan Kalimantan"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🦧",
      paragraphs: [
        "Orangutan Kalimantan adalah kera besar asli Asia yang menghabiskan hampir seluruh hidupnya di atas pepohonan (arboreal). Nama 'Orangutan' berasal dari bahasa Melayu/Indonesia yang berarti 'Manusia Hutan'.",
        "Mereka memiliki kecerdasan luar biasa: mampu menggunakan ranting sebagai alat untuk mengambil serangga atau madu, serta membuat sarang tidur baru yang nyaman dari dedaunan setiap malam di atas dahan pohon.",
        "Orangutan dijuluki sebagai 'Petani Hutan Terbaik'. Saat memakan buah-buahan hutan dan berpindah tempat di tajuk pohon, mereka menyebarkan biji-bijian yang menumbuhkan kembali pohon-pohon besar di hutan Kalimantan.",
        "Kebakaran hutan gambut serta pembukaan lahan secara masif telah memutus koridor hutan tempat mereka berpindah, membuat spesies cerdas yang berbagi 97% DNA dengan manusia ini berstatus Kritis."
      ],
      miniQuiz: {
        question: "Apa peran ekologis utama Orangutan sehingga mereka dijuluki sebagai 'Petani Hutan'?",
        options: [
          "Menebang pohon tua agar rumput bisa tumbuh",
          "Menyebarkan biji-bijian buah ke seluruh penjuru hutan",
          "Menggali tanah untuk membuat saluran air",
          "Memangsa hewan herbivora di dasar hutan"
        ],
        correctIndex: 1,
        explanation: "Orangutan memakan ratusan jenis buah hutan dan menyebarkan bijinya melalui kotoran saat menjelajah, sehingga meregenerasi hutan secara alami."
      }
    },
    {
      id: "pesut-mahakam",
      name: "Pesut Mahakam",
      latin: "Orcaella brevirostris",
      region: "Sungai Mahakam, Kalimantan Timur",
      status: "Critically Endangered (Kritis)",
      statusCode: "CR",
      population: "± 60 - 70 individu tersisa",
      coords: { x: 475, y: 205 },
      habitatName: "Perairan Sungai Air Tawar Mahakam & Danau Semayang",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.28), rgba(6, 20, 31, 0.95))",
        accent: "#06b6d4",
        sceneryLabel: "SCENERY PLACEHOLDER: Aliran Sungai Mahakam Kalimantan Timur"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🐬",
      paragraphs: [
        "Pesut Mahakam adalah mamalia air tawar (lumba-lumba sungai) yang sangat langka dan menjadi maskot kebanggaan Provinsi Kalimantan Timur. Berbeda dengan lumba-lumba laut pada umumnya, pesut tidak memiliki moncong panjang melainkan dahi yang membulat.",
        "Karena hidup di perairan Sungai Mahakam yang keruh dan berlumpur, penglihatan Pesut Mahakam tidak terlalu tajam. Sebagai gantinya, mereka mengandalkan sistem sonar (ekolokasi) yang sangat canggih untuk bernavigasi dan mendeteksi keberadaan ikan.",
        "Mereka sering terlihat menyemburkan air dari mulutnya untuk menggiring kawanan ikan kecil sebelum menangkapnya, serta berkomunikasi dengan sesama kawanannya melalui bunyi klik dan siulan frekuensi tinggi.",
        "Kini populasinya hanya tersisa sekitar 60–70 ekor saja! Ancaman utamanya adalah terjerat jaring insang nelayan (rengge), polusi suara dari lalu lintas kapal tongkang batu bara yang mengganggu sonar mereka, serta pencemaran sungai."
      ],
      miniQuiz: {
        question: "Bagaimana cara Pesut Mahakam mencari makan dan bernavigasi di air Sungai Mahakam yang keruh?",
        options: [
          "Menggunakan indra penciuman jarak jauh di bawah air",
          "Menggunakan pantulan gelombang suara (ekolokasi/sonar)",
          "Mengikuti cahaya matahari di dasar sungai",
          "Berenang mengikuti perahu nelayan"
        ],
        correctIndex: 1,
        explanation: "Pesut Mahakam mengandalkan gelombang sonar (ekolokasi). Itu sebabnya kebisingan baling-baling kapal besar di sungai sangat mengganggu navigasi mereka."
      }
    },
    {
      id: "anoa-sulawesi",
      name: "Anoa Dataran Rendah",
      latin: "Bubalus depressicornis",
      region: "Hutan Pulau Sulawesi & Pulau Buton",
      status: "Endangered (Terancam)",
      statusCode: "EN",
      population: "< 2.500 individu dewasa",
      coords: { x: 585, y: 235 },
      habitatName: "Hutan Primer & Rawa Pulau Sulawesi",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#a855f7",
        sceneryLabel: "SCENERY PLACEHOLDER: Hutan Wallacea Sulawesi"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🐃",
      paragraphs: [
        "Anoa sering dijuluki sebagai 'Kerbau Kerdil' karena merupakan spesies sapi liar terkecil di dunia. Satwa endemik kawasan Wallacea ini hanya dapat ditemukan di Pulau Sulawesi dan Pulau Buton.",
        "Meskipun bertubuh mungil dengan tinggi bahu hanya sekitar 75–90 cm, Anoa memiliki sepasang tanduk lurus meruncing ke belakang yang sangat tajam. Ketika merasa terancam atau terpojok, Anoa dikenal sangat pemberani dan agresif untuk mempertahankan diri.",
        "Anoa menyukai hutan lebat yang belum terjamah manusia dan dekat dengan sumber air atau kubangan lumpur. Mereka memakan berbagai jenis tunas muda, pakis, rumput, dan buah-buahan yang jatuh di lantai hutan.",
        "Perburuan liar untuk diambil daging dan tanduknya, ditambah dengan pembukaan hutan untuk pemukiman dan pertambangan di Sulawesi, membuat populasi Anoa terus menyusut tajam dari tahun ke tahun."
      ],
      miniQuiz: {
        question: "Julukan apakah yang sering diberikan kepada Anoa karena ukuran tubuhnya yang unik?",
        options: [
          "Rusa Raksasa Sulawesi",
          "Kerbau Kerdil (Sapi Liar Terkecil di Dunia)",
          "Kambing Hutan Bakau",
          "Banteng Pegunungan Salju"
        ],
        correctIndex: 1,
        explanation: "Anoa adalah kerabat dekat kerbau dan sapi liar namun memiliki ukuran tubuh paling mungil di dunia, sehingga dijuluki Kerbau Kerdil."
      }
    },
    {
      id: "komodo-ntt",
      name: "Komodo",
      latin: "Varanus komodoensis",
      region: "Kepulauan Nusa Tenggara Timur (Pulau Komodo, Rinca, Gili Motang, Flores)",
      status: "Endangered (Terancam)",
      statusCode: "EN",
      population: "± 3.000 - 3.300 individu",
      coords: { x: 545, y: 365 },
      habitatName: "Sabana Kering & Pesisir Kepulauan Komodo, NTT",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#ef4444",
        sceneryLabel: "SCENERY PLACEHOLDER: Bukit Sabana & Pantai Pulau Komodo"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🦎",
      paragraphs: [
        "Komodo adalah spesies kadal terbesar di dunia yang masih hidup hingga saat ini. Panjang tubuhnya dapat mencapai 3 meter dengan berat lebih dari 70 kilogram, menjadikannya fosil hidup purba kebanggaan Indonesia.",
        "Komodo berburu dengan strategi penyergapan yang sabar. Mereka menjulurkan lidah bercabangnya ke udara untuk menangkap partikel bau mangsa seperti rusa, babi hutan, dan kerbau dari jarak hingga beberapa kilometer.",
        "Penelitian modern mengungkap bahwa rahang bawah Komodo memiliki kelenjar bisa (venom) yang menghasilkan zat антиkoagulan. Bisa ini mencegah pembekuan darah mangsanya sehingga mangsa mengalami pendarahan hebat dan syok.",
        "Pada tahun 2021, IUCN menaikkan status keterancaman Komodo menjadi Endangered (Terancam). Naiknya permukaan air laut akibat pemanasan global diperkirakan akan menyusutkan habitat dataran rendah Pulau Komodo hingga 30% dalam beberapa dekade mendatang."
      ],
      miniQuiz: {
        question: "Apa fungsi utama lidah bercabang yang sering dijulurkan oleh Komodo ke udara?",
        options: [
          "Untuk mendinginkan suhu tubuh saat cuaca panas",
          "Untuk mendeteksi partikel bau mangsa dari jarak jauh",
          "Untuk mengeluarkan suara desisan ultrasonik",
          "Untuk menyerap uap air dari udara pantai"
        ],
        correctIndex: 1,
        explanation: "Komodo menggunakan lidah bercabangnya bersama organ Jacobson di langit-langit mulut untuk mencium bau bangkai atau mangsa dari jarak beberapa kilometer."
      }
    },
    {
      id: "cenderawasih-merah",
      name: "Cenderawasih Merah",
      latin: "Paradisaea rubra",
      region: "Kepulauan Raja Ampat (Pulau Waigeo & Batanta), Papua Barat Daya",
      status: "Near Threatened / Terancam Perburuan",
      statusCode: "NT",
      population: "Terbatas secara geografis di kepulauan kecil",
      coords: { x: 815, y: 215 },
      habitatName: "Hutan Hujan Dataran Rendah Kepulauan Raja Ampat, Papua",
      habitatTheme: {
        bgGradient: "radial-gradient(circle at 30% 40%, rgba(236, 72, 153, 0.25), rgba(6, 20, 31, 0.95))",
        accent: "#ec4899",
        sceneryLabel: "SCENERY PLACEHOLDER: Hutan Tropis Kepulauan Raja Ampat Papua"
      },
      mediaType: "image",
      mediaUrl: "",
      iconEmoji: "🦜",
      paragraphs: [
        "Dijuluki sebagai 'Bird of Paradise' (Burung Surga), Cenderawasih Merah adalah salah satu spesies burung paling memesona di dunia yang hanya hidup secara endemik di hutan Pulau Waigeo dan Batanta, kawasan Raja Ampat, Papua.",
        "Burung jantan memiliki bulu hias berwarna merah darah yang berkilau di sisi tubuhnya, kepala berwarna kuning zamrud, serta sepasang bulu ekor panjang menyerupai pita plastik hitam yang melengkung anggun.",
        "Pada musim kawin, para pejantan akan berkumpul di dahan pohon khusus dan melakukan tarian akrobatik yang rumit sambil mengembangkan bulu merahnya untuk memikat perhatian burung betina.",
        "Karena wilayah sebarannya sangat sempit di pulau-pulau kecil, Cenderawasih Merah sangat rentan terhadap penebangan hutan dan perburuan liar untuk diambil bulu indahnya sebagai hiasan."
      ],
      miniQuiz: {
        question: "Apa tujuan burung Cenderawasih Merah jantan memiliki bulu berwarna mencolok dan melakukan tarian di atas pohon?",
        options: [
          "Untuk menakut-nakuti ular pemangsa di pohon",
          "Untuk memikat perhatian burung betina saat musim kawin",
          "Untuk menandai pohon yang memiliki banyak buah",
          "Untuk melatih otot sayap sebelum terbang lintas samudra"
        ],
        correctIndex: 1,
        explanation: "Seleksi seksual membuat Cenderawasih jantan berevolusi memiliki bulu indah dan ritual tarian rumit demi menarik hati betina."
      }
    }
  ],

  // 3. Bank Soal Tambahan untuk Mode "Tes Ilmu Pengetahuan" (10 Soal Random di Start Menu)
  // Digabung dengan miniQuiz dari 8 hewan di atas sehingga total ada 16 soal yang diacak!
  extraQuizPool: [
    {
      category: "Konservasi Umum",
      question: "Apa arti dari status konservasi 'Critically Endangered' (Kritis) menurut IUCN?",
      options: [
        "Populasi satwa sudah sangat banyak dan aman di alam liar",
        "Satwa menghadapi risiko kepunahan yang sangat tinggi di alam liar dalam waktu dekat",
        "Satwa tersebut hanya hidup di kebun binatang luar negeri",
        "Satwa tersebut baru saja ditemukan oleh para ilmuwan"
      ],
      correctIndex: 1,
      explanation: "Critically Endangered (CR) adalah kategori paling mengkhawatirkan bagi spesies liar sebelum dinyatakan Punah di Alam Liar (Extinct in the Wild)."
    },
    {
      category: "Harimau Indonesia",
      question: "Subspesies harimau asli Indonesia mana sajakah yang sayangnya sudah dinyatakan PUNAH pada abad ke-20?",
      options: [
        "Harimau Kalimantan dan Harimau Sulawesi",
        "Harimau Bali dan Harimau Jawa",
        "Harimau Sumatera dan Harimau Malaya",
        "Harimau Papua dan Harimau Flores"
      ],
      correctIndex: 1,
      explanation: "Harimau Bali punah sekitar tahun 1930-an dan Harimau Jawa dinyatakan punah sekitar tahun 1980-an, menyisakan Harimau Sumatera sebagai satu-satunya yang bertahan."
    },
    {
      category: "Badak Indonesia",
      question: "Apa perbedaan fisik paling mencolok antara Badak Jawa dan Badak Sumatera?",
      options: [
        "Badak Jawa bercula satu, sedangkan Badak Sumatera bercula dua",
        "Badak Jawa berbulu tebal seperti domba, sedangkan Badak Sumatera gundul",
        "Badak Jawa hidup di laut, sedangkan Badak Sumatera di gunung es",
        "Badak Jawa memakan daging, sedangkan Badak Sumatera memakan rumput"
      ],
      correctIndex: 0,
      explanation: "Badak Jawa memiliki satu cula (Rhinoceros sondaicus), sedangkan Badak Sumatera adalah badak terkecil di dunia yang memiliki dua cula (Dicerorhinus sumatrensis)."
    },
    {
      category: "Komodo",
      question: "Bagaimana cara Komodo melumpuhkan mangsa berukuran besar seperti rusa atau kerbau?",
      options: [
        "Melilit tubuh mangsanya seperti ular piton",
        "Menggunakan gigitan bergerigi tajam dan kelenjar bisa (venom) yang menghambat pembekuan darah",
        "Menyemburkan api dari dalam mulutnya",
        "Menjatuhkan batu dari atas pohon ke arah mangsa"
      ],
      correctIndex: 1,
      explanation: "Komodo memiliki gigi tajam bergerigi serta kelenjar bisa di rahang bawahnya yang membuat mangsa kehabisan darah dan mengalami penurunan tekanan darah drastis."
    },
    {
      category: "Pesut Mahakam",
      question: "Manakah di bawah ini yang merupakan ancaman utama bagi kelangsungan hidup Pesut Mahakam di Kalimantan Timur?",
      options: [
        "Suhu air sungai yang membeku menjadi es",
        "Terjerat jaring nelayan (rengge) dan polusi suara kapal tongkang batu bara",
        "Serangan hiu putih besar di hulu sungai",
        "Kekurangan garam di perairan Sungai Mahakam"
      ],
      correctIndex: 1,
      explanation: "Jaring insang yang dipasang melintang di sungai serta kebisingan lalu lintas kapal tongkang menjadi penyebab kematian dan stres tertinggi bagi Pesut Mahakam."
    },
    {
      category: "Geografi Satwa",
      question: "Garis khayal biogeografi yang memisahkan fauna tipe Asiatis (Indonesia Barat) dengan wilayah peralihan (Sulawesi & Nusa Tenggara) disebut...",
      options: [
        "Garis Khatulistiwa",
        "Garis Wallace",
        "Garis Bujur Timur",
        "Garis Pantai Selatan"
      ],
      correctIndex: 1,
      explanation: "Garis Wallace yang ditemukan oleh Alfred Russel Wallace memisahkan fauna tipe Asiatis (seperti Harimau & Orangutan) dengan fauna unik zona Wallacea (seperti Anoa & Komodo)."
    },
    {
      category: "Elang Jawa",
      question: "Ciri fisik khas apakah di kepala Elang Jawa yang membuatnya diidentikkan dengan sosok Burung Garuda?",
      options: [
        "Memiliki paruh sepanjang satu meter",
        "Memiliki jambul tegak yang terdiri dari 2–4 helai bulu di mahkota kepalanya",
        "Memiliki empat pasang mata yang menyala dalam gelap",
        "Memiliki tanduk tulang di atas hidungnya"
      ],
      correctIndex: 1,
      explanation: "Jambul khas di atas kepala Elang Jawa serta posturnya yang gagah menjadikannya inspirasi biologis lambang Garuda Pancasila."
    },
    {
      category: "Aksi Pelajar",
      question: "Langkah nyata apa yang paling tepat dilakukan pelajar untuk ikut membantu pelestarian satwa terancam punah di Indonesia?",
      options: [
        "Membeli satwa langka yang dilindungi untuk dipelihara di kandang rumah",
        "Tidak membeli produk dari satwa liar yang dilindungi serta ikut menyebarkan edukasi konservasi",
        "Menangkap satwa liar di hutan untuk dibawa ke sekolah",
        "Membuang sampah plastik ke sungai agar dimakan ikan"
      ],
      correctIndex: 1,
      explanation: "Menolak perdagangan satwa liar ilegal (tidak membeli/memelihara satwa dilindungi) akan menghentikan permintaan pasar bagi para pemburu liar."
    }
  ]
};

