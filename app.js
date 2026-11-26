// Lógica de renderizado con separación explícita entre Trabajos Individuales y Trabajos Grupales (Grupo 6)
// + Ondas laterales con movimiento continuo y fluido en un solo sentido al scrollear (sin retroceder ni cortarse)
// + Punto de la "i" en "Dana Graziano" que arranca en la "a" y rebota hasta la "i"

document.addEventListener("DOMContentLoaded", () => {
  const worksGrid = document.getElementById("worksGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const toggleAllBtn = document.getElementById("toggleAllBtn");
  const worksCountLabel = document.getElementById("worksCountLabel");

  // Integrantes del Grupo 6
  const groupMembersText = "Dana Graziano, Agostina Melegari y Daniela Benítez";

  // =========================================================================
  // CONTROLADOR INTERACTIVO 3D: LIBRO CERRADO CON 2 CLICS
  // 1er Clic: Abre la tapa y muestra la página interior
  // 2do Clic: Hace zoom hacia adentro y entra al portafolio
  // =========================================================================
  const bookOverlay = document.getElementById("bookIntroOverlay");
  const bookStage = document.getElementById("bookStage");
  const bookSkipBtn = document.getElementById("bookSkipBtn");
  const bookClickHint = document.getElementById("bookClickHint");

  let bookState = "closed"; // 'closed' | 'opened' | 'zooming' | 'done'
  let lastClickTime = 0;

  // Bloquear scroll mientras el libro esté en pantalla
  if (bookOverlay) {
    document.body.style.overflow = "hidden";
  }

  // Inicializar contadores en 0
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  statNumbers.forEach((el) => {
    const padZero = el.getAttribute("data-pad") === "true";
    el.textContent = padZero ? "00" : "0";
  });

  function startCountersAnimation() {
    statNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      const padZero = el.getAttribute("data-pad") === "true";
      const duration = 1200; // ms
      const startTime = performance.now();

      function formatValue(val) {
        return padZero ? String(val).padStart(2, "0") : String(val);
      }

      function stepCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Curva easeOutCubic para que suba fluido desde 0
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(eased * target);
        el.textContent = formatValue(currentVal);
        if (progress < 1) {
          window.requestAnimationFrame(stepCounter);
        } else {
          el.textContent = formatValue(target);
        }
      }

      window.requestAnimationFrame(stepCounter);
    });
  }

  function finishBookIntro() {
    if (bookState === "done") return;
    bookState = "done";

    if (bookOverlay) {
      bookOverlay.classList.add("intro-hidden");
      setTimeout(() => {
        bookOverlay.style.display = "none";
      }, 500);
    }
    document.body.style.overflow = "";

    // Iniciar contadores apenas se entra al portafolio web
    startCountersAnimation();
  }

  function handleBookInteraction() {
    const now = Date.now();

    // 1er Clic: Abrir la tapa del libro
    if (bookState === "closed") {
      bookState = "opened";
      lastClickTime = now;
      if (bookStage) {
        bookStage.classList.add("is-opened");
      }
      if (bookClickHint) {
        bookClickHint.innerHTML = `
          <span class="hint-icon">✨</span>
          <span class="hint-text">Hacé clic para entrar al portafolio</span>
        `;
      }
      return;
    }

    // 2do Clic: Hacer zoom y entrar a la página web
    if (bookState === "opened") {
      // Pequeño retardo de seguridad (350ms) para que empiece a abrirse con gracia
      if (now - lastClickTime < 350) return;

      bookState = "zooming";
      if (bookClickHint) {
        bookClickHint.classList.add("hint-faded");
      }
      if (bookStage) {
        bookStage.classList.add("is-zooming");
      }
      if (bookOverlay) {
        bookOverlay.classList.add("fade-out");
      }

      // Al completar el zoom (1.1s) revelamos la web y disparamos los números
      setTimeout(() => {
        finishBookIntro();
      }, 1100);
    }
  }

  if (bookOverlay) {
    // Permitir clic en el libro o en cualquier parte del escenario para avanzar
    bookOverlay.addEventListener("click", (e) => {
      // Evitar que el botón de saltar interfiera
      if (e.target && e.target.closest("#bookSkipBtn")) return;
      handleBookInteraction();
    });

    // Botón para saltar directamente sin esperar los clics
    if (bookSkipBtn) {
      bookSkipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        finishBookIntro();
      });
    }
  } else {
    startCountersAnimation();
  }

  // Flores azules y líneas de ondas laterales (se mueven SOLO con el evento scroll, sin retroceder)
  const artFlowerTL = document.getElementById("artFlowerTL");
  const artLinesL1 = document.getElementById("artLinesL1");
  const artFlowerBL = document.getElementById("artFlowerBL");
  const artLinesR1 = document.getElementById("artLinesR1");
  const artFlowerMR = document.getElementById("artFlowerMR");
  const artLinesBR = document.getElementById("artLinesBR");
  const scrollDrawLines = document.querySelectorAll(".scroll-draw-line");

  let activeFilter = "todos"; // 'todos' | 'individual' | 'grupal' | 'simulaciones'
  let searchQuery = "";
  let expandedIds = new Set();

  // =========================================================================
  // ANIMACIÓN DEL PUNTO DE LA "i" DESDE LA "a" HASTA LA "i" EN "Dana Graziano"
  // =========================================================================
  const footerGiantWord = document.getElementById("footerGiantWord");
  const charStartA = document.getElementById("charStartA");
  const charI = document.getElementById("charI");
  const iBouncingDot = document.getElementById("iBouncingDot");
  let dotHasSettled = false;

  function updateDotStartDistance() {
    if (!charStartA || !charI || !iBouncingDot) return;
    const rectA = charStartA.getBoundingClientRect();
    const rectI = charI.getBoundingClientRect();
    const deltaX = (rectA.left + rectA.width * 0.5) - (rectI.left + rectI.width * 0.5);
    iBouncingDot.style.setProperty("--start-x", `${deltaX.toFixed(1)}px`);
  }

  if (footerGiantWord && iBouncingDot) {
    updateDotStartDistance();
    window.addEventListener("resize", updateDotStartDistance);

    const footerDotObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dotHasSettled) {
            updateDotStartDistance();
            iBouncingDot.classList.add("bounce-to-i");
            dotHasSettled = true;
          } else if (!entry.isIntersecting) {
            iBouncingDot.classList.remove("bounce-to-i");
            dotHasSettled = false;
          }
        });
      },
      { threshold: 0.25 }
    );
    footerDotObserver.observe(footerGiantWord);
  }

  // =========================================================================
  // GENERADOR DE ONDAS CONTINUAS EN UN SOLO SENTIDO AL SCROLLEAR
  // (Avanza fluidamente hacia adelante sin cortarse nunca y sin retroceder)
  // =========================================================================
  function buildContinuousWavePath(height, centerX, amplitude, wavelength, phase) {
    const step = 6;
    let d = "";
    for (let y = 16; y <= height - 16; y += step) {
      const angle = (y / wavelength) * Math.PI * 2 - phase;
      const x = centerX + Math.sin(angle) * amplitude + Math.cos(angle * 0.5) * (amplitude * 0.22);
      if (y === 16) {
        d += `M ${x.toFixed(1)},${y}`;
      } else {
        d += ` L ${x.toFixed(1)},${y}`;
      }
    }
    return d;
  }

  let ticking = false;

  function updateOnScrollOnly() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Flores orgánicas azules de 5 pétalos: giran suavemente en un solo sentido al scrollear
    if (artFlowerTL) {
      const rot = scrollY * 0.22;
      artFlowerTL.style.transform = `rotate(${rot.toFixed(1)}deg)`;
    }

    if (artFlowerMR) {
      const rot = scrollY * 0.24;
      artFlowerMR.style.transform = `rotate(${rot.toFixed(1)}deg)`;
    }

    if (artFlowerBL) {
      const rot = scrollY * 0.2;
      artFlowerBL.style.transform = `rotate(${rot.toFixed(1)}deg)`;
    }

    // Líneas en forma de ondas largas a los costados: avanzan en un único sentido de forma continua y fluida sin retroceder ni cortarse
    const forwardPhase = scrollY * 0.022;

    if (scrollDrawLines[0]) {
      scrollDrawLines[0].setAttribute(
        "d",
        buildContinuousWavePath(350, 68, 42, 125, forwardPhase)
      );
    }
    if (scrollDrawLines[1]) {
      scrollDrawLines[1].setAttribute(
        "d",
        buildContinuousWavePath(345, 76, 42, 125, forwardPhase + 1.2)
      );
    }
    if (scrollDrawLines[2]) {
      scrollDrawLines[2].setAttribute(
        "d",
        buildContinuousWavePath(300, 74, 38, 115, forwardPhase + 2.4)
      );
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScrollOnly);
        ticking = true;
      }
    },
    { passive: true }
  );

  // =========================================================================
  // RENDERIZADO DE TARJETAS Y SIMULACIONES CON IA
  // =========================================================================
  function renderSimulationFullContent(work) {
    const bubblesHtml = work.chatMessages
      .map((msg) => {
        const isAi = msg.sender === "ai";
        const rowClass = isAi ? "speaker-ai" : "speaker-student";
        const formattedText = msg.text.replace(/\n/g, "<br>");
        return `
          <div class="chat-bubble-row ${rowClass}">
            <span class="chat-sender-label">${msg.name}</span>
            <div class="chat-bubble">${formattedText}</div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="sim-scenario-banner">
        <h4>📋 Contexto y Escenario de la Simulación</h4>
        <p>${work.scenarioText}</p>
      </div>

      <div class="sim-chat-container">
        <div class="sim-chat-header">
          <div class="sim-chat-person">
            <div class="sim-avatar">${work.interviewee.initials}</div>
            <div class="sim-person-info">
              <h4>Conversación de Elicitación con ${work.interviewee.name}</h4>
              <span>${work.interviewee.role} ↔ ${work.interviewee.studentRole}</span>
            </div>
          </div>
          <span class="sim-ai-tag">💬 Simulación Conversación con IA (${work.chatMessages.length} intervenciones)</span>
        </div>
        <div class="sim-chat-messages">
          ${bubblesHtml}
        </div>
      </div>

      <div class="sim-documentation-wrapper">
        <div class="sim-doc-header">
          <h4>📝 Documentación y Especificación de Requerimientos</h4>
          <span class="sim-doc-author-tag">Producción Individual · Autora: Dana Graziano</span>
        </div>
        <div class="sim-doc-body">
          ${work.documentationHtml}
        </div>
      </div>
    `;
  }

  function renderSingleCard(work) {
    const isExpanded = expandedIds.has(work.id);
    const isGrupal = work.modality === "grupal";

    const authorshipText = isGrupal
      ? `Producción Grupal (Grupo 6) · Integrantes: ${groupMembersText}`
      : `Producción Individual · Autora: Dana Graziano`;

    const fullInnerHtml = work.isSimulation
      ? renderSimulationFullContent(work)
      : `<div class="sim-documentation-wrapper">
           <div class="sim-doc-header">
             <h4>📖 Desarrollo Completo del Trabajo</h4>
             <span class="sim-doc-author-tag">${authorshipText}</span>
           </div>
           <div class="sim-doc-body">${work.fullContentHtml}</div>
         </div>`;

    const pillsHtml = work.highlights
      .map((h) => `<span class="highlight-pill">${h}</span>`)
      .join("");

    const chatTeaserHtml =
      work.isSimulation && work.chatTeaser
        ? `<div class="mini-chat-teaser">💬 <strong>Vista previa de la entrevista con IA:</strong> ${work.chatTeaser}</div>`
        : "";

    const isIntegrador = work.isIntegrador === true || work.activityType === "integrador";
    const modalityBadgeClass = isIntegrador ? "badge-integrador" : isGrupal ? "badge-grupal" : "badge-individual";

    return `
      <article class="work-card ${work.isSimulation ? "is-simulation" : ""} ${isGrupal ? "is-grupal" : ""} ${isIntegrador ? "is-integrador" : ""} ${isExpanded ? "expanded" : ""}" id="card-${work.id}">
        <div class="work-card-top">
          <div class="work-badges">
            <span class="work-number">${work.number}</span>
            <span class="work-modality-badge ${modalityBadgeClass}">${work.modalityLabel}</span>
            <span class="work-category-badge">${work.categoryLabel}</span>
          </div>
          <span class="work-source-file">📄 ${work.sourceFileName}</span>
        </div>

        <div class="work-card-body">
          <h3 class="work-title">${work.title}</h3>
          <p class="work-subtitle">${work.subtitle}</p>

          <div class="work-preview-box">
            <span class="preview-label">Descripción del Trabajo · ${isIntegrador ? "Trabajo Práctico Integrador (Grupo 6)" : isGrupal ? "Producción Grupal de Cursada (Grupo 6)" : "Producción Individual"}</span>
            <p class="preview-summary">${work.previewSummary}</p>
            <p style="font-size: 0.86rem; font-weight: 700; color: var(--blue-royal); margin-bottom: 10px;">
              ${isGrupal ? `👥 Integrantes del Grupo 6: ${groupMembersText} · Docente: Prof. Marcela Samela` : `👤 Producción Individual — Autora: Dana Graziano`}
            </p>
            <div class="preview-highlights">${pillsHtml}</div>
            ${chatTeaserHtml}
          </div>

          <div class="work-card-actions">
            <button class="btn-dollop ${isIntegrador || isGrupal ? "btn-yellow" : ""} toggle-work-btn" data-id="${work.id}">
              ${isExpanded ? "Contraer trabajo ✕" : "Extender trabajo completo ✿"}
            </button>
            <a href="${work.sourceFile}" target="_blank" class="file-link-secondary">
              Abrir archivo original (${work.sourceFileName}) ↗
            </a>
          </div>

          <div class="work-full-content" id="content-${work.id}">
            ${fullInnerHtml}
          </div>
        </div>
      </article>
    `;
  }

  function renderWorks() {
    const filtered = PORTFOLIO_WORKS.filter((w) => {
      let matchesFilter = true;
      if (activeFilter === "integrador") {
        matchesFilter = w.isIntegrador === true || w.activityType === "integrador";
      } else if (activeFilter === "individual") {
        matchesFilter = w.modality === "individual";
      } else if (activeFilter === "grupal") {
        matchesFilter = w.modality === "grupal";
      } else if (activeFilter === "simulaciones") {
        matchesFilter = w.isSimulation === true;
      }

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesFilter;
      const haystack = `${w.title} ${w.subtitle} ${w.previewSummary} ${w.modalityLabel} ${w.categoryLabel} ${w.highlights.join(" ")}`.toLowerCase();
      return matchesFilter && haystack.includes(q);
    });

    if (worksCountLabel) {
      const indCount = filtered.filter((w) => w.modality === "individual").length;
      const tpiCount = filtered.filter((w) => w.isIntegrador).length;
      const grpCursadaCount = filtered.filter((w) => w.modality === "grupal" && !w.isIntegrador).length;
      worksCountLabel.textContent = `Mostrando ${filtered.length} de ${PORTFOLIO_WORKS.length} trabajos (${indCount} individuales · ${grpCursadaCount} grupales de cursada · ${tpiCount} de TP Integrador)`;
    }

    if (filtered.length === 0) {
      worksGrid.innerHTML = `
        <div class="work-card" style="padding: 36px; text-align: center;">
          <h3 class="work-title">No se encontraron trabajos con ese criterio</h3>
          <p style="margin-top:8px;">Probá limpiando el buscador o seleccionando la pestaña «Todos los trabajos (19)».</p>
        </div>
      `;
      return;
    }

    const integradorWorks = filtered.filter((w) => w.isIntegrador);
    const individuales = filtered.filter((w) => w.modality === "individual");
    const grupalesCursada = filtered.filter((w) => w.modality === "grupal" && !w.isIntegrador);

    let html = "";

    // 1. SECCIÓN ESPECIAL: TRABAJO PRÁCTICO INTEGRADOR (A PARTE DE LA CURSADA)
    if (integradorWorks.length > 0) {
      html += `
        <div class="modality-group-block" id="bloque-integrador">
          <div class="modality-banner integrador-banner">
            <div class="banner-pill-row">
              <span class="banner-pill-gold">🎙️ ACTIVIDAD ESPECIAL GRUPAL A PARTE DE LA CURSADA</span>
              <span class="banner-pill-uai">UAI · INGENIERÍA DE REQUERIMIENTOS</span>
            </div>
            <h2 class="modality-banner-title">🎙️ Trabajo Práctico Integrador — «Podcast del Ingeniero» (Caso Havanna)</h2>
            <span class="modality-banner-sub">Producción Grupal · Grupo 6: ${groupMembersText} · Docente: Prof. Marcela Samela (${integradorWorks.length} entregas sucesivas)</span>
          </div>
          <div class="works-grid">
            ${integradorWorks.map(renderSingleCard).join("")}
          </div>
        </div>
      `;
    }

    // 2. SECCIÓN: PRODUCCIONES INDIVIDUALES DE LA CURSADA
    if (individuales.length > 0) {
      html += `
        <div class="modality-group-block" id="bloque-individuales">
          <div class="modality-banner individual-banner">
            <h2 class="modality-banner-title">👤 Producciones Individuales de la Cursada · Dana Graziano</h2>
            <span class="modality-banner-sub">${individuales.length} entregas individuales de la cursada</span>
          </div>
          <div class="works-grid">
            ${individuales.map(renderSingleCard).join("")}
          </div>
        </div>
      `;
    }

    // 3. SECCIÓN: PRODUCCIONES GRUPALES DE LA CURSADA (GRUPO 6)
    if (grupalesCursada.length > 0) {
      html += `
        <div class="modality-group-block" id="bloque-grupales">
          <div class="modality-banner grupal-banner">
            <h2 class="modality-banner-title">👥 Producciones Grupales de la Cursada · Grupo 6</h2>
            <span class="modality-banner-sub">Integrantes: ${groupMembersText} (${grupalesCursada.length} entregas de clase a clase)</span>
          </div>
          <div class="works-grid">
            ${grupalesCursada.map(renderSingleCard).join("")}
          </div>
        </div>
      `;
    }

    worksGrid.innerHTML = html;

    // Bind individual toggle buttons
    document.querySelectorAll(".toggle-work-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const card = document.getElementById(`card-${id}`);
        if (expandedIds.has(id)) {
          expandedIds.delete(id);
          card.classList.remove("expanded");
          btn.textContent = "Extender trabajo completo ✿";
        } else {
          expandedIds.add(id);
          card.classList.add("expanded");
          btn.textContent = "Contraer trabajo ✕";
        }
        updateToggleAllBtnText();
      });
    });
  }

  function updateToggleAllBtnText() {
    if (!toggleAllBtn) return;
    const allExpanded = expandedIds.size === PORTFOLIO_WORKS.length;
    toggleAllBtn.textContent = allExpanded ? "Contraer todos ✕" : "Extender todos ✿";
  }

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderWorks();
    });
  });

  // Helper to apply filter from anywhere on the page
  window.applyModalityFilter = function (filterType) {
    activeFilter = filterType;
    filterBtns.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-filter") === filterType);
    });
    renderWorks();
    const explorer = document.getElementById("explorador-trabajos");
    if (explorer) {
      explorer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderWorks();
    });
  }

  // Expand / Collapse all
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", () => {
      if (expandedIds.size === PORTFOLIO_WORKS.length) {
        expandedIds.clear();
      } else {
        PORTFOLIO_WORKS.forEach((w) => expandedIds.add(w.id));
      }
      renderWorks();
      updateToggleAllBtnText();
    });
  }

  // Global helper to jump to a specific work and expand it
  window.jumpToWork = function (workId) {
    activeFilter = "todos";
    filterBtns.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "todos");
    });
    expandedIds.add(workId);
    renderWorks();
    updateToggleAllBtnText();
    setTimeout(() => {
      const targetCard = document.getElementById(`card-${workId}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.classList.add("highlight-card-pulse");
        setTimeout(() => targetCard.classList.remove("highlight-card-pulse"), 3200);
      }
    }, 60);
  };

  // =========================================================================
  // CONTROLADOR DEL ÍNDICE FLOTANTE
  // =========================================================================
  const floatingIndexBtn = document.getElementById("floatingIndexBtn");
  const floatingIndexDrawer = document.getElementById("floatingIndexDrawer");
  const floatingIndexClose = document.getElementById("floatingIndexClose");
  const floatingIndexList = document.getElementById("floatingIndexScrollList");
  const floatingIndexSearchInput = document.getElementById("floatingIndexSearchInput");
  const floatingIndexFilterChips = document.querySelectorAll(".floating-index-filter-chips .index-chip");

  let floatingIndexFilter = "all";
  let floatingIndexQuery = "";

  window.toggleFloatingIndex = function (forceState) {
    if (!floatingIndexDrawer) return;
    const shouldOpen = typeof forceState === "boolean" 
      ? forceState 
      : !floatingIndexDrawer.classList.contains("is-open");
    
    floatingIndexDrawer.classList.toggle("is-open", shouldOpen);
    floatingIndexDrawer.setAttribute("aria-hidden", (!shouldOpen).toString());
    if (floatingIndexBtn) {
      floatingIndexBtn.setAttribute("aria-expanded", shouldOpen.toString());
    }
    if (shouldOpen && floatingIndexSearchInput) {
      setTimeout(() => floatingIndexSearchInput.focus(), 150);
    }
  };

  function renderFloatingIndexList() {
    if (!floatingIndexList || typeof PORTFOLIO_WORKS === "undefined") return;

    const filtered = PORTFOLIO_WORKS.filter((w) => {
      // Filter by modality
      if (floatingIndexFilter === "integrador" && !w.isIntegrador) return false;
      if (floatingIndexFilter === "individual" && (w.modality !== "individual" || w.isIntegrador)) return false;
      if (floatingIndexFilter === "grupal" && (w.modality !== "grupal" || w.isIntegrador)) return false;
      if (floatingIndexFilter === "simulacion" && !w.isSimulation) return false;

      // Filter by search query
      if (floatingIndexQuery.trim()) {
        const q = floatingIndexQuery.toLowerCase().trim();
        const textToMatch = `${w.number} ${w.title} ${w.subtitle || ""} ${w.categoryLabel || ""}`.toLowerCase();
        return textToMatch.includes(q);
      }
      return true;
    });

    if (filtered.length === 0) {
      floatingIndexList.innerHTML = `
        <div style="text-align: center; padding: 24px 10px; color: rgba(250,243,230,0.7); font-size: 0.85rem;">
          No se encontraron trabajos con ese criterio de búsqueda.
        </div>
      `;
      return;
    }

    floatingIndexList.innerHTML = filtered.map((w) => {
      let badgeClass = "ind";
      let badgeLabel = "👤 IND";
      if (w.isIntegrador) {
        badgeClass = "tpi";
        badgeLabel = "🎙️ TPI";
      } else if (w.modality === "grupal") {
        badgeClass = "grup";
        badgeLabel = "👥 G6";
      } else if (w.isSimulation) {
        badgeClass = "sim";
        badgeLabel = "💬 IA";
      }

      return `
        <div class="floating-index-item" onclick="handleIndexItemClick('${w.id}')" role="button" tabindex="0">
          <div class="floating-item-left">
            <div class="floating-item-row">
              <span class="floating-item-badge ${badgeClass}">${badgeLabel}</span>
              <span style="font-size: 0.74rem; font-weight: 800; color: var(--yellow-butter);">${w.number}</span>
            </div>
            <h5 class="floating-item-title" title="${w.title}">${w.title}</h5>
            <span class="floating-item-sub">${w.subtitle || w.categoryLabel}</span>
          </div>
          <span class="floating-item-arrow">➔</span>
        </div>
      `;
    }).join("");
  }

  window.handleIndexItemClick = function (workId) {
    window.toggleFloatingIndex(false);
    window.jumpToWork(workId);
  };

  if (floatingIndexBtn) {
    floatingIndexBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.toggleFloatingIndex();
    });
  }

  if (floatingIndexClose) {
    floatingIndexClose.addEventListener("click", (e) => {
      e.stopPropagation();
      window.toggleFloatingIndex(false);
    });
  }

  // Close floating drawer when clicking outside
  document.addEventListener("click", (e) => {
    if (floatingIndexDrawer && floatingIndexDrawer.classList.contains("is-open")) {
      if (!floatingIndexDrawer.contains(e.target) && !floatingIndexBtn.contains(e.target)) {
        window.toggleFloatingIndex(false);
      }
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && floatingIndexDrawer && floatingIndexDrawer.classList.contains("is-open")) {
      window.toggleFloatingIndex(false);
    }
  });

  // Floating Index Chips
  floatingIndexFilterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      floatingIndexFilterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      floatingIndexFilter = chip.getAttribute("data-modality") || "all";
      renderFloatingIndexList();
    });
  });

  // Floating Index Search
  if (floatingIndexSearchInput) {
    floatingIndexSearchInput.addEventListener("input", (e) => {
      floatingIndexQuery = e.target.value;
      renderFloatingIndexList();
    });
  }

  // Initial render
  renderWorks();
  renderFloatingIndexList();
  updateOnScrollOnly();
});
