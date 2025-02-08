// Ország adatok – a kulcsok nagybetűs formában szerepelnek.
// Ezeket módosíthatod, vagy bővítheted további információkkal.
const countryData = {
  AT: {
    name: 'Ausztria',
    info: 'Ausztria EU tag, fővárosa Bécs.'
  },
  BE: {
    name: 'Belgium',
    info: 'Belgium EU tag, fővárosa Brüsszel.'
  },
  BG: {
    name: 'Bulgária',
    info: 'Bulgária EU tag, fővárosa Szófia.'
  },
  HR: {
    name: 'Horvátország',
    info: 'Horvátország EU tag, fővárosa Zágráb.'
  },
  CY: {
    name: 'Ciprus',
    info: 'Ciprus EU tag, fővárosa Nicosia.'
  },
  CZ: {
    name: 'Csehország',
    info: 'Csehország EU tag, fővárosa Prága.'
  },
  DK: {
    name: 'Dánia',
    info: 'Dánia EU tag, fővárosa Koppenhága.'
  },
  EE: {
    name: 'Észtország',
    info: 'Észtország EU tag, fővárosa Tallinn.'
  },
  FI: {
    name: 'Finnország',
    info: 'Finnország EU tag, fővárosa Helsinki.'
  },
  FR: {
    name: 'Franciaország',
    info: 'Franciaország EU tag, fővárosa Párizs.'
  },
  DE: {
    name: 'Németország',
    info: 'Németország EU tag, fővárosa Berlin.'
  },
  GR: {
    name: 'Görögország',
    info: 'Görögország EU tag, fővárosa Athén.'
  },
  HU: {
    name: 'Magyarország',
    info: 'Magyarország EU tag, fővárosa Budapest.'
  },
  IE: {
    name: 'Írország',
    info: 'Írország EU tag, fővárosa Dublin.'
  },
  IT: {
    name: 'Olaszország',
    info: 'Olaszország EU tag, fővárosa Róma.'
  },
  LV: {
    name: 'Lettország',
    info: 'Lettország EU tag, fővárosa Riga.'
  },
  LT: {
    name: 'Litvánia',
    info: 'Litvánia EU tag, fővárosa Vilnius.'
  },
  LU: {
    name: 'Luxemburg',
    info: 'Luxemburg EU tag, fővárosa Luxemburg.'
  },
  MT: {
    name: 'Málta',
    info: 'Málta EU tag, fővárosa Valletta.'
  },
  NL: {
    name: 'Hollandia',
    info: 'Hollandia EU tag, fővárosa Amszterdam.'
  },
  PL: {
    name: 'Lengyelország',
    info: 'Lengyelország EU tag, fővárosa Varsó.'
  },
  PT: {
    name: 'Portugália',
    info: 'Portugália EU tag, fővárosa Lisszabon.'
  },
  RO: {
    name: 'Románia',
    info: 'Románia EU tag, fővárosa Bukarest.'
  },
  SK: {
    name: 'Szlovákia',
    info: 'Szlovákia EU tag, fővárosa Bratislava.'
  },
  SI: {
    name: 'Szlovénia',
    info: 'Szlovénia EU tag, fővárosa Ljubljana.'
  },
  ES: {
    name: 'Spanyolország',
    info: 'Spanyolország EU tag, fővárosa Madrid.'
  },
  SE: {
    name: 'Svédország',
    info: 'Svédország EU tag, fővárosa Stockholm.'
  }
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

// Az SVG betöltése után dolgozunk vele
svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument;
  if (!svgDoc) {
    console.error('Nem sikerült betölteni az SVG dokumentumot.');
    return;
  }
  
  // Lekérjük az összes olyan elemet, amelyek rendelkeznek id attribútummal.
  const interactiveElements = svgDoc.querySelectorAll('[id]');
  
  interactiveElements.forEach((elem) => {
    // Az elem id-jét lekérjük, majd nagybetűssé alakítjuk.
    let countryCode = elem.getAttribute('id').trim().toUpperCase();
    
    // Csak azokat az elemeket dolgozzuk fel, amelyekhez van adat a countryData objektumban.
    if (!countryData.hasOwnProperty(countryCode)) {
      return;
    }
    
    // Biztosítjuk, hogy az elem fogadja a pointer eseményeket, és a kurzor mutató legyen.
    elem.style.pointerEvents = 'all';
    elem.style.cursor = 'pointer';
    
    // Megállapítjuk, hogy az elem egyedi <path> vagy egy <g> csoport, és ennek megfelelően gyűjtjük a releváns <path> elemeket.
    let childPaths = [];
    if (elem.tagName.toLowerCase() === 'g') {
      childPaths = elem.querySelectorAll('path');
    } else if (elem.tagName.toLowerCase() === 'path') {
      childPaths = [elem];
    }
    
    // Minden érintett <path> esetén elmentjük az eredeti fill színt, hogy később vissza lehessen állítani.
    childPaths.forEach(child => {
      let orig = child.getAttribute('fill') || window.getComputedStyle(child).fill;
      child.dataset.originalFill = orig;
    });
    
    // Hover események: amikor az egér az elem fölé kerül, a benne lévő <path> elemek fill színét világos sárgára állítjuk.
    elem.addEventListener('mouseenter', () => {
      childPaths.forEach(child => {
        child.style.fill = '#ffeb3b'; // világos sárga
      });
    });
    
    // Amikor az egér elhagyja az elemet, visszaállítjuk az eredeti színeket.
    elem.addEventListener('mouseleave', () => {
      childPaths.forEach(child => {
        child.style.fill = child.dataset.originalFill;
      });
    });
    
    // Kattintás esemény: megjelenítjük az adott ország információit.
    elem.addEventListener('click', () => {
      showCountryInfo(countryCode);
    });
  });
});
