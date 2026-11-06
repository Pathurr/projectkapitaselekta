// ============================================================================
// APP.JS — LOGIKA UTAMA NUSANTARA BIO-HOLOGRAM
// ============================================================================

const STORAGE_KEY = "nusantara_holo_explored_v1";

const app = {
  currentScene: "scene-start",
  introIndex: 0,
  exploredIds: [],

  // State Detail Hewan Aktif
  activeAnimal: null,
  revealedParagraphCount: 1,
  miniQuizAnswered: false,

  // State Tes Ilmu Pengetahuan (10 Soal Random)
  testQuestions: [],
  testCurrentIndex: 0,
  testScore: 0,
  testLocked: false,

  init() {
    this.loadProgress();
    this.populateDevAnimalDropdown();
    this.renderIntroSlide();
    this.renderMapWaypointsAndCards();
    this.updateProgressBarUI();
  },

  // --------------------------------------------------------------------------
  // STORAGE & PROGRESS BAR EKSPLORASI
  // --------------------------------------------------------------------------
  loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          this.exploredIds = parsed;
        }
      }
    } catch (e) {
      this.exploredIds = [];
    }
  },

  saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.exploredIds));
    } catch (e) {
      // Abaikan jika mode private/storage penuh
    }
    this.updateProgressBarUI();
    this.renderMapWaypointsAndCards();
  },

  markAnimalExplored(animalId) {
    if (!this.exploredIds.includes(animalId)) {
      this.exploredIds.push(animalId);
      this.saveProgress();
    }
  },

  updateProgressBarUI() {
    const total = APP_DATA.animals.length;
    const count = this.exploredIds.length;
    const percent = Math.round((count / total) * 100);

    const hudText = document.getElementById("hudProgressText");
    const hudBar = document.getElementById("hudProgressBar");
    const startStat = document.getElementById("startExploredStat");

    if (hudText) hudText.textContent = `${count} / ${total} Tereksplorasi (${percent}%)`;
    if (hudBar) hudBar.style.width = `${percent}%`;
    if (startStat) startStat.textContent = `${count} / ${total}`;
  },

  // --------------------------------------------------------------------------
  // NAVIGASI SCENE (1 PAGE KE MANA PUN)
  // --------------------------------------------------------------------------
  goToScene(sceneId) {
    if (typeof holoSFX !== "undefined") holoSFX.playClick();
    // Reset zoom peta jika kembali ke scene-map
    const svgMap = document.getElementById("holoMapSvg");
    const zoomOverlay = document.getElementById("mapZoomOverlay");
    if (svgMap) svgMap.style.transform = "translate(0px, 0px) scale(1)";
    if (zoomOverlay) zoomOverlay.classList.remove("active");

    document.querySelectorAll(".scene").forEach((el) => {
      el.classList.remove("active");
    });
    const target = document.getElementById(sceneId);
    if (target) {
      target.classList.add("active");
      this.currentScene = sceneId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (sceneId === "scene-map") {
      this.renderMapWaypointsAndCards();
    }
  },

  startExplorationFlow() {
    this.introIndex = 0;
    this.renderIntroSlide();
    this.goToScene("scene-intro");
  },

  // --------------------------------------------------------------------------
  // SCENE 2: PEMBUKAAN (INTRO SLIDES)
  // --------------------------------------------------------------------------
  renderIntroSlide() {
    const slides = APP_DATA.introSlides;
    const slide = slides[this.introIndex];
    if (!slide) return;

    document.getElementById("introSubtitle").textContent = slide.subtitle;
    document.getElementById("introTitle").textContent = slide.title;
    document.getElementById("introText").textContent = slide.text;
    document.getElementById("introHighlight").textContent = slide.highlight;

    // Render indikator titik
    const dotsContainer = document.getElementById("introDotsContainer");
    dotsContainer.innerHTML = slides
      .map((_, idx) => `<div class="intro-dot ${idx <= this.introIndex ? "active" : ""}"></div>`)
      .join("");

    // Update tombol Prev / Next
    const prevBtn = document.getElementById("introPrevBtn");
    const nextBtn = document.getElementById("introNextBtn");
    prevBtn.disabled = this.introIndex === 0;

    if (this.introIndex === slides.length - 1) {
      nextBtn.innerHTML = "🗺️ Buka Peta Hologram Indonesia →";
    } else {
      nextBtn.innerHTML = "Selanjutnya →";
    }
  },

  nextIntroSlide() {
    if (this.introIndex < APP_DATA.introSlides.length - 1) {
      this.introIndex++;
      this.renderIntroSlide();
    } else {
      this.goToScene("scene-map");
    }
  },

  prevIntroSlide() {
    if (this.introIndex > 0) {
      this.introIndex--;
      this.renderIntroSlide();
    }
  },

  // --------------------------------------------------------------------------
  // SCENE 3: PETA HOLOGRAM 2D INDONESIA & WAYPOINTS
  // --------------------------------------------------------------------------
  renderMapWaypointsAndCards() {
    const svgLayer = document.getElementById("mapWaypointsLayer");
    const cardsGrid = document.getElementById("mapAnimalCardsGrid");
    if (!svgLayer || !cardsGrid) return;

    // 1. Render Waypoints di atas SVG Peta Indonesia
    svgLayer.innerHTML = APP_DATA.animals
      .map((animal, idx) => {
        const isExplored = this.exploredIds.includes(animal.id);
        const { x, y } = animal.coords;
        const labelWidth = animal.name.length * 6.8 + 34;
        const labelX = x - labelWidth / 2;
        const labelY = y - 34;

        return `
          <g class="waypoint-group ${isExplored ? "explored" : ""}"
             onmouseenter="if(typeof holoSFX!=='undefined') holoSFX.playHover()"
             onclick="app.selectWaypointWithZoom('${animal.id}')">
            <circle class="waypoint-pulse" cx="${x}" cy="${y}" r="18" />
            <circle class="waypoint-core" cx="${x}" cy="${y}" r="11" />
            <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#fff" font-size="10" font-family="monospace" font-weight="bold">
              ${isExplored ? "✓" : idx + 1}
            </text>
            <rect class="waypoint-label-bg" x="${labelX}" y="${labelY}" width="${labelWidth}" height="22" />
            <text class="waypoint-label-text" x="${x}" y="${labelY + 15}" text-anchor="middle">
              ${animal.iconEmoji} ${animal.name}
            </text>
          </g>
        `;
      })
      .join("");

    // 2. Render Kartu Daftar Waypoint di bawah Peta
    cardsGrid.innerHTML = APP_DATA.animals
      .map((animal, idx) => {
        const isExplored = this.exploredIds.includes(animal.id);
        return `
          <div class="animal-mini-card ${isExplored ? "explored" : ""}" onclick="app.selectWaypointWithZoom('${animal.id}')">
            <div class="animal-mini-left">
              <span class="animal-mini-emoji">${animal.iconEmoji}</span>
              <div>
                <div class="animal-mini-name">${idx + 1}. ${animal.name}</div>
                <div class="animal-mini-status">${animal.status}</div>
              </div>
            </div>
            <span class="status-pill">${isExplored ? "✓ Selesai" : "Pindai →"}</span>
          </div>
        `;
      })
      .join("");
  },

  selectWaypointWithZoom(animalId) {
    const animal = APP_DATA.animals.find((a) => a.id === animalId);
    if (!animal) return;

    if (typeof holoSFX !== "undefined") holoSFX.playWaypointScan();

    const svgMap = document.getElementById("holoMapSvg");
    const zoomOverlay = document.getElementById("mapZoomOverlay");
    const zoomText = document.getElementById("mapZoomTargetText");

    if (svgMap && this.currentScene === "scene-map") {
      const scale = 2.4;
      const offsetX = (500 - animal.coords.x) * 0.55;
      const offsetY = (225 - animal.coords.y) * 0.55;
      svgMap.style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;

      if (zoomText) {
        zoomText.textContent = `🎯 MEMINDAI HABITAT: ${animal.name.toUpperCase()}...`;
      }
      if (zoomOverlay) {
        zoomOverlay.classList.add("active");
      }

      setTimeout(() => {
        this.openAnimalDetail(animalId);
      }, 650);
    } else {
      this.openAnimalDetail(animalId);
    }
  },

  // --------------------------------------------------------------------------
  // SCENE 4: DETAIL HEWAN (HABITAT SCENERY + MEDIA KIRI + PARAGRAF BERTAHAP & QUIZ)
  // --------------------------------------------------------------------------
  openAnimalDetail(animalId) {
    const animal = APP_DATA.animals.find((a) => a.id === animalId);
    if (!animal) return;

    this.activeAnimal = animal;
    this.revealedParagraphCount = 1; // Mulai dari 1 paragraf pertama
    this.miniQuizAnswered = false;

    // 1. Set Scenery Habitat (Background & Banner)
    const sceneContainer = document.getElementById("animalSceneContainer");
    if (sceneContainer && animal.habitatTheme) {
      sceneContainer.style.background = animal.habitatTheme.bgGradient;
      sceneContainer.style.borderColor = animal.habitatTheme.accent;
    }

    document.getElementById("animalHabitatBanner").textContent = `🏞️ HABITAT: ${animal.habitatName.toUpperCase()}`;

    const isExplored = this.exploredIds.includes(animal.id);
    const badgeEl = document.getElementById("animalExploredBadge");
    badgeEl.textContent = isExplored ? "✓ SUDAH TEREKSPLORASI" : "⏳ SEDANG DIPINDAI";
    badgeEl.style.borderColor = isExplored ? "var(--holo-emerald)" : "var(--holo-cyan)";
    badgeEl.style.color = isExplored ? "#6ee7b7" : "var(--holo-cyan)";

    // 2. Set Media (Kiri: Foto / Video atau Hologram Placeholder)
    const mediaFrame = document.getElementById("animalMediaFrame");
    if (animal.mediaUrl && animal.mediaUrl.trim() !== "") {
      if (animal.mediaType === "video") {
        mediaFrame.innerHTML = `<video src="${animal.mediaUrl}" controls autoplay muted loop></video>`;
      } else {
        mediaFrame.innerHTML = `<img src="${animal.mediaUrl}" alt="${animal.name}" />`;
      }
    } else {
      const scenerySvg =
        typeof HOLO_SCENERY !== "undefined"
          ? HOLO_SCENERY.getHabitatSVG(animal.id, animal.habitatTheme.accent)
          : "";
      mediaFrame.innerHTML = `
        ${scenerySvg}
        <div class="placeholder-holo-avatar">${animal.iconEmoji}</div>
        <div style="font-weight:700; color:#fff; font-size:1.05rem;">Hologram Visual: ${animal.name}</div>
        <div style="font-size:0.8rem; color:var(--holo-cyan); margin-top:0.2rem;">${animal.habitatTheme.sceneryLabel}</div>
        <div class="placeholder-asset-note">
          📁 Tempat Aset Foto/Video:<br/>
          <code>assets/images/animals/${animal.id}.jpg</code>
        </div>
      `;
    }

    // 3. Set Metadata Kiri
    document.getElementById("animalMetaRegion").textContent = animal.region;
    document.getElementById("animalMetaStatus").textContent = animal.status;
    document.getElementById("animalMetaPop").textContent = animal.population;

    // 4. Set Judul & Paragraf Bertahap (Kanan)
    document.getElementById("animalTitle").textContent = `${animal.iconEmoji} ${animal.name}`;
    document.getElementById("animalLatin").textContent = animal.latin;

    this.renderAnimalParagraphsAndQuiz();
    this.goToScene("scene-animal");
  },

  renderAnimalParagraphsAndQuiz() {
    const animal = this.activeAnimal;
    if (!animal) return;

    const totalParas = animal.paragraphs.length;
    const feedEl = document.getElementById("paragraphsFeed");
    const counterEl = document.getElementById("paragraphCounter");
    const controlsEl = document.getElementById("storyControls");
    const quizBoxEl = document.getElementById("animalMiniQuizBox");

    counterEl.textContent = `Paragraf ${this.revealedParagraphCount} / ${totalParas}`;

    // Tampilkan paragraf dari indeks 0 sampai revealedParagraphCount - 1
    feedEl.innerHTML = animal.paragraphs
      .slice(0, this.revealedParagraphCount)
      .map((pText, idx) => `
        <div class="story-paragraph-item">
          <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--holo-cyan); margin-bottom:0.25rem;">
            DATA LOG #0${idx + 1}
          </div>
          <div>${pText}</div>
        </div>
      `)
      .join("");

    // Cek apakah semua paragraf sudah ditampilkan
    if (this.revealedParagraphCount < totalParas) {
      controlsEl.style.display = "flex";
      quizBoxEl.style.display = "none";
      document.getElementById("nextParagraphBtn").innerHTML =
        `📖 Lanjut Baca Paragraf ${this.revealedParagraphCount + 1} / ${totalParas} →`;
    } else {
      // Semua paragraf sudah terbuka -> sembunyikan tombol paragraf & munculkan Mini Quiz!
      controlsEl.style.display = "none";
      quizBoxEl.style.display = "block";
      this.renderMiniQuiz();
    }
  },

  revealNextParagraph() {
    if (!this.activeAnimal) return;
    if (this.revealedParagraphCount < this.activeAnimal.paragraphs.length) {
      if (typeof holoSFX !== "undefined") holoSFX.playParagraphReveal();
      this.revealedParagraphCount++;
      this.renderAnimalParagraphsAndQuiz();
    }
  },

  renderMiniQuiz() {
    const quiz = this.activeAnimal.miniQuiz;
    document.getElementById("miniQuizQuestion").textContent = quiz.question;

    const optionsContainer = document.getElementById("miniQuizOptions");
    const feedbackBox = document.getElementById("miniQuizFeedback");
    feedbackBox.style.display = "none";
    feedbackBox.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    optionsContainer.innerHTML = quiz.options
      .map(
        (opt, idx) => `
        <button class="quiz-option-btn" id="miniOptBtn_${idx}" onclick="app.answerMiniQuiz(${idx})">
          <strong style="color:var(--holo-cyan); font-family:var(--font-mono);">[${letters[idx]}]</strong>
          <span>${opt}</span>
        </button>
      `
      )
      .join("");
  },

  answerMiniQuiz(selectedIndex) {
    if (this.miniQuizAnswered || !this.activeAnimal) return;
    this.miniQuizAnswered = true;

    const quiz = this.activeAnimal.miniQuiz;
    const isCorrect = selectedIndex === quiz.correctIndex;
    if (typeof holoSFX !== "undefined") {
      isCorrect ? holoSFX.playQuizCorrect() : holoSFX.playQuizWrong();
    }

    // Tandai tombol jawaban (jika salah pun tetap ditunjukkan jawaban yang benar)
    quiz.options.forEach((_, idx) => {
      const btn = document.getElementById(`miniOptBtn_${idx}`);
      if (!btn) return;
      btn.disabled = true;
      if (idx === quiz.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    // Tandai hewan ini telah selesai dieksplorasi & tambah progress bar!
    this.markAnimalExplored(this.activeAnimal.id);

    const badgeEl = document.getElementById("animalExploredBadge");
    badgeEl.textContent = "✓ SUDAH TEREKSPLORASI";
    badgeEl.style.borderColor = "var(--holo-emerald)";
    badgeEl.style.color = "#6ee7b7";

    // Cari hewan berikutnya yang belum dieksplorasi (opsional untuk tombol cepat)
    const nextUnexplored = APP_DATA.animals.find((a) => !this.exploredIds.includes(a.id));

    const feedbackBox = document.getElementById("miniQuizFeedback");
    feedbackBox.style.display = "block";
    feedbackBox.innerHTML = `
      <div style="font-weight:700; font-size:1.02rem; margin-bottom:0.4rem; color:${isCorrect ? "#6ee7b7" : "#fde68a"};">
        ${
          isCorrect
            ? "✅ Jawabanmu Tepat Sekali!"
            : `💡 Belum Tepat — Tidak apa-apa! Jawaban yang benar adalah: "${quiz.options[quiz.correctIndex]}"`
        }
      </div>
      <p style="font-size:0.92rem; color:var(--text-main); margin-bottom:1rem;">
        ${quiz.explanation}
      </p>
      <div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; justify-content:space-between; border-top:1px solid rgba(0,240,255,0.2); padding-top:0.85rem;">
        <span style="font-family:var(--font-mono); font-size:0.8rem; color:#6ee7b7;">
          📈 Progress Eksplorasi Bertambah: ${this.exploredIds.length} / ${APP_DATA.animals.length} Satwa
        </span>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
          <button class="btn-holo emerald sm" onclick="app.goToScene('scene-map')">
            🗺️ Kembali ke Peta Hologram
          </button>
          ${
            nextUnexplored
              ? `<button class="btn-holo primary sm" onclick="app.openAnimalDetail('${nextUnexplored.id}')">
                  Lanjut ke ${nextUnexplored.iconEmoji} ${nextUnexplored.name} →
                 </button>`
              : `<button class="btn-holo amber sm" onclick="app.startRandomKnowledgeTest()">
                  🏆 Semua Satwa Selesai! Coba Tes 10 Soal →
                 </button>`
          }
        </div>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // SCENE 5: TES ILMU PENGETAHUAN (10 SOAL RANDOM DARI START MENU)
  // --------------------------------------------------------------------------
  startRandomKnowledgeTest() {
    // Gabungkan soal dari 8 hewan + bank soal ekstra
    const combinedPool = [
      ...APP_DATA.animals.map((a) => ({
        category: `${a.iconEmoji} ${a.name}`,
        question: a.miniQuiz.question,
        options: [...a.miniQuiz.options],
        correctIndex: a.miniQuiz.correctIndex,
        explanation: a.miniQuiz.explanation
      })),
      ...APP_DATA.extraQuizPool.map((q) => ({
        category: `🌿 ${q.category}`,
        question: q.question,
        options: [...q.options],
        correctIndex: q.correctIndex,
        explanation: q.explanation
      }))
    ];

    // Acak urutan soal menggunakan Fisher-Yates Shuffle & ambil 10 soal
    for (let i = combinedPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedPool[i], combinedPool[j]] = [combinedPool[j], combinedPool[i]];
    }

    this.testQuestions = combinedPool.slice(0, 10).map((q) => {
      // Acak juga posisi opsi jawaban A/B/C/D supaya tidak bisa dihafal posisinya
      const optionPairs = q.options.map((text, idx) => ({
        text,
        isCorrect: idx === q.correctIndex
      }));
      for (let i = optionPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionPairs[i], optionPairs[j]] = [optionPairs[j], optionPairs[i]];
      }
      return {
        category: q.category,
        question: q.question,
        options: optionPairs.map((p) => p.text),
        correctIndex: optionPairs.findIndex((p) => p.isCorrect),
        explanation: q.explanation
      };
    });

    this.testCurrentIndex = 0;
    this.testScore = 0;
    this.testLocked = false;

    document.getElementById("testQuestionStage").style.display = "block";
    document.getElementById("testResultStage").style.display = "none";

    this.renderCurrentTestQuestion();
    this.goToScene("scene-test");
  },

  renderCurrentTestQuestion() {
    const total = this.testQuestions.length;
    const q = this.testQuestions[this.testCurrentIndex];
    if (!q) return;

    this.testLocked = false;
    document.getElementById("testProgressPill").textContent = `Soal ${this.testCurrentIndex + 1} / ${total}`;
    document.getElementById("testScorePill").textContent = `Benar: ${this.testScore}`;
    document.getElementById("testCategoryBadge").textContent = q.category;
    document.getElementById("testQuestionText").textContent = q.question;

    const feedbackBox = document.getElementById("testFeedbackBox");
    feedbackBox.style.display = "none";
    feedbackBox.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    document.getElementById("testOptionsList").innerHTML = q.options
      .map(
        (opt, idx) => `
        <button class="quiz-option-btn" id="testOptBtn_${idx}" onclick="app.answerTestQuestion(${idx})">
          <strong style="color:var(--holo-cyan); font-family:var(--font-mono);">[${letters[idx]}]</strong>
          <span>${opt}</span>
        </button>
      `
      )
      .join("");
  },

  answerTestQuestion(selectedIndex) {
    if (this.testLocked) return;
    this.testLocked = true;

    const q = this.testQuestions[this.testCurrentIndex];
    const isCorrect = selectedIndex === q.correctIndex;
    if (typeof holoSFX !== "undefined") {
      isCorrect ? holoSFX.playQuizCorrect() : holoSFX.playQuizWrong();
    }
    if (isCorrect) {
      this.testScore++;
    }

    document.getElementById("testScorePill").textContent = `Benar: ${this.testScore}`;

    q.options.forEach((_, idx) => {
      const btn = document.getElementById(`testOptBtn_${idx}`);
      if (!btn) return;
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    const isLast = this.testCurrentIndex === this.testQuestions.length - 1;
    const feedbackBox = document.getElementById("testFeedbackBox");
    feedbackBox.style.display = "block";
    feedbackBox.innerHTML = `
      <div style="font-weight:700; margin-bottom:0.35rem; color:${isCorrect ? "#6ee7b7" : "#fca5a5"};">
        ${
          isCorrect
            ? "✅ BENAR! (+10 Poin)"
            : `❌ SALAH! Jawaban yang benar adalah: "${q.options[q.correctIndex]}"`
        }
      </div>
      <p style="font-size:0.9rem; color:var(--text-main); margin-bottom:0.9rem;">
        ${q.explanation}
      </p>
      <div style="text-align:right;">
        <button class="btn-holo primary sm" onclick="app.nextTestQuestion()">
          ${isLast ? "📊 Lihat Hasil Akhir Tes →" : "Soal Berikutnya →"}
        </button>
      </div>
    `;
  },

  nextTestQuestion() {
    if (this.testCurrentIndex < this.testQuestions.length - 1) {
      this.testCurrentIndex++;
      this.renderCurrentTestQuestion();
    } else {
      this.showTestResults();
    }
  },

  showTestResults() {
    document.getElementById("testQuestionStage").style.display = "none";
    const resultStage = document.getElementById("testResultStage");
    resultStage.style.display = "block";

    const finalPoints = this.testScore * 10;
    document.getElementById("testFinalScoreNumber").textContent = `${finalPoints} / 100`;

    let msg = "";
    if (this.testScore >= 9) {
      msg = `Luar biasa! Kamu menjawab benar ${this.testScore} dari 10 soal. Kamu layak menyandang gelar Duta Konservasi Nusantara!`;
    } else if (this.testScore >= 7) {
      msg = `Bagus sekali! Kamu menjawab benar ${this.testScore} dari 10 soal. Wawasanmu tentang satwa terancam punah Indonesia sudah sangat baik.`;
    } else if (this.testScore >= 5) {
      msg = `Cukup baik! Kamu menjawab benar ${this.testScore} dari 10 soal. Yuk, jelajahi lagi titik waypoint di Peta Hologram agar makin paham!`;
    } else {
      msg = `Kamu menjawab benar ${this.testScore} dari 10 soal. Jangan menyerah! Mari buka Peta Hologram dan pelajari kisah 8 satwa langka kita.`;
    }
    document.getElementById("testFinalMessage").textContent = msg;
  },

  // --------------------------------------------------------------------------
  // PANEL FRONT-END (DEV / QUICK-JUMP PANEL UNTUK PENGECEKAN)
  // --------------------------------------------------------------------------
  toggleDevPanel() {
    const panel = document.getElementById("devQuickPanel");
    if (panel) {
      panel.classList.toggle("open");
    }
  },

  populateDevAnimalDropdown() {
    const select = document.getElementById("devAnimalSelect");
    if (!select) return;
    select.innerHTML =
      `<option value="">-- Pilih Hewan untuk Cek Langsung --</option>` +
      APP_DATA.animals
        .map((a, idx) => `<option value="${a.id}">${idx + 1}. ${a.iconEmoji} ${a.name}</option>`)
        .join("");
  },

  devUnlockAllAnimals() {
    this.exploredIds = APP_DATA.animals.map((a) => a.id);
    this.saveProgress();
    if (this.currentScene === "scene-animal" && this.activeAnimal) {
      this.openAnimalDetail(this.activeAnimal.id);
    }
  },

  devResetProgress() {
    this.exploredIds = [];
    this.saveProgress();
    if (this.currentScene === "scene-animal" && this.activeAnimal) {
      this.openAnimalDetail(this.activeAnimal.id);
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  app.init();
});

