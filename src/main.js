// Példa mapping, ha nincs data-country attribútum az SVG-ben
const idToCountry = {
  'path7009': 'FR'
  // További mapping: 'másikId': 'országkód'
};

// Példa ország adatok
const countryData = {
  FR: {
    name: 'Franciaország',
    info: 'Franciaország fővárosa Párizs, híres a kultúrájáról és gasztronómiájáról.'
  },
  DE: {
    name: 'Németország',
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
  // További országok...
};

const infoCard = document.getElementById('info-card');
const countryNameEl = document.getElementById('country-name');
const countryInfoEl = document.getElementById('country-info');
const closeCardBtn = document.getElementById('close-card');
const svgObject = document.getElementById('europe-svg');

// Kártya bezárása
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

  // Az összes <path> elem lekérése
  const pathElements = svgDoc.querySelectorAll('path');
  pathElements.forEach((elem) => {
    // Biztosítjuk, hogy az elem reagáljon a pointer eseményekre
    elem.style.pointerEvents = 'all';
    elem.style.cursor = 'pointer';

    // Megpróbáljuk az elemről kiolvasni a data-country attribútumot
    let countryCode = elem.getAttribute('data-country');
    if (!countryCode && idToCountry && idToCountry.hasOwnProperty(elem.id)) {
      countryCode = idToCountry[elem.id];
    }

    if (countryCode) {
      // Az eredeti fill szín lekérése:
      let originalFill = elem.getAttribute('fill');
      if (!originalFill) {
        // Ha nincs inline fill attribútum, lekérjük a számított értéket
        originalFill = window.getComputedStyle(elem).fill;
      }
      // Ezt eltároljuk az elem dataset-jében
      elem.dataset.originalFill = originalFill;

      // mouseenter: módosítjuk a fill színt sárgára
      elem.addEventListener('mouseenter', () => {
        elem.setAttribute('fill', '#ffeb3b'); // világos sárga
      });

      // mouseleave: visszaállítjuk az eredeti színt
      elem.addEventListener('mouseleave', () => {
        elem.setAttribute('fill', elem.dataset.originalFill);
      });

      // Kattintás esemény
      elem.addEventListener('click', () => {
        showCountryInfo(countryCode);
      });
    }
  });
});
