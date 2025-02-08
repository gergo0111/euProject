// Előre definiált tömb a path elemek sorrendjének megfelelően.
// Fontos: ezt a tömböt neked kell pontosan úgy összeállítani, hogy az SVG-ben a path-ok sorrendje megfeleljen a tömb elemeinek.
const countryOrder = ['FI', 'SE', 'IT', 'ES']; // stb. – add meg a megfelelő országkódokat az SVG-ben szereplő sorrend szerint

// Példa ország adatok
const countryData = {
  FI: {
    name: 'Finnország',
    info: 'Franciaország fővárosa Párizs, híres a kultúrájáról és gasztronómiájáról.'
  },
  SE: {
    name: 'Svédország',
    info: 'Németország fővárosa Berlin, jelentős gazdasági és ipari központ.'
  },
  IT: {
    name: 'Olaszország',
    info: 'Olaszország fővárosa Róma, otthont adva a reneszánsz művészetnek és kultúrának.'
  },
  ES: {
    name: 'Spanyolország',
    info: 'Spanyolország fővárosa Madrid, gazdag történelemmel és kultúrával rendelkezik.'
  }
  // További országok adatai, ha szükséges...
};

const infoCard = document.getElementById('info-card');
const countryNameEl = document.getElementById('country-name');
const countryInfoEl = document.getElementById('country-info');
const closeCardBtn = document.getElementById('close-card');
const svgObject = document.getElementById('europe-svg');

// Az információs kártya bezárása
closeCardBtn.addEventListener('click', () => {
  infoCard.style.display = 'none';
});

function showCountryInfo(countryCode) {
  const data = countryData[countryCode];
  if (data) {
    countryNameEl.textContent = data.name;
    countryInfoEl.textContent = data.info;
  } else {
    countryNameEl.textContent = 'Nincs információ';
    countryInfoEl.textContent = 'Ez az ország nem tagja az Európai Uniónak.';
  }
  infoCard.style.display = 'block';
}

svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument;
  if (!svgDoc) {
    console.error('Nem sikerült betölteni az SVG dokumentumot.');
    return;
  }
  
  // Lekérjük az összes <path> elemet – feltételezzük, hogy ezek az interaktív országok
  const pathElements = svgDoc.querySelectorAll('path');
  
  // Végigiterálunk a path elemek sorrendjén, és a countryOrder tömb alapján hozzárendeljük az eseményeket
  pathElements.forEach((elem, index) => {
    // Csak akkor dolgozunk vele, ha van megfelelő országkód (tehát a countryOrder tömbben van ilyen index)
    const countryCode = countryOrder[index];
    if (!countryCode) {
      return; // ha nincs hozzárendelve ország, kihagyjuk az elemet
    }
    
    // Biztosítjuk, hogy az elem reagáljon a pointer eseményekre, és a kurzor mutató legyen
    elem.style.pointerEvents = 'all';
    elem.style.cursor = 'pointer';
    
    // Az eredeti fill szín kinyerése:
    let originalFill = elem.getAttribute('fill');
    if (!originalFill) {
      originalFill = window.getComputedStyle(elem).fill;
    }
    elem.dataset.originalFill = originalFill;
    
    // Hover események: 
    elem.addEventListener('mouseenter', () => {
      // A style.fill tulajdonság használata biztosítja, hogy az inline stílus felülírja a korábbi beállításokat
      elem.style.fill = '#ffeb3b'; // világos sárga
    });
    
    elem.addEventListener('mouseleave', () => {
      elem.style.fill = elem.dataset.originalFill;
    });
    
    // Kattintás: információs kártya megjelenítése
    elem.addEventListener('click', () => {
      showCountryInfo(countryCode);
    });
  });
});
