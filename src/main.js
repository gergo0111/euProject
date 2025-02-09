const countryData = {
  AT: { name: 'Ausztria', info: 'Ausztria 1995-ben csatlakozott az EU-hoz. Bécs fontos diplomáciai központ, és az ország aktív szereplő az uniós döntéshozatalban.', accessionYear: 1995, accessionDisplay: '1995' },
  BE: { name: 'Belgium', info: 'Belgium az EU egyik alapító tagja, 1958-ban csatlakozott. Brüsszel az Európai Bizottság és az Európai Parlament központja.', accessionYear: 1958, accessionDisplay: '1958' },
  BG: { name: 'Bulgária', info: 'Bulgária 2007-ben csatlakozott az EU-hoz. Az ország fejlődését uniós források támogatják.', accessionYear: 2007, accessionDisplay: '2007' },
  HR: { name: 'Horvátország', info: 'Horvátország 2013-ban vált az EU tagjává, és dinamikusan fejlődő turisztikai, valamint gazdasági központ.', accessionYear: 2013, accessionDisplay: '2013' },
  CY: { name: 'Ciprus', info: 'Ciprus stratégiai elhelyezkedése és kulturális öröksége miatt fontos uniós szereplő, bár kihívásokkal küzd a földrajzi elkülönültség miatt.', accessionYear: 2004, accessionDisplay: '2004' },
  CZ: { name: 'Csehország', info: 'Csehország 2004 óta tagja az EU-nak, Prága egyre jelentősebb gazdasági és kulturális központ.', accessionYear: 2004, accessionDisplay: '2004' },
  DK: { name: 'Dánia', info: 'Dánia 1973-ban csatlakozott az EU-hoz, magas életminőségével és innovációs képességével kiemelkedő uniós partner.', accessionYear: 1973, accessionDisplay: '1973' },
  EE: { name: 'Észtország', info: 'Észtország 2004-ben csatlakozott, és vezető szerepet tölt be a digitális innovációban.', accessionYear: 2004, accessionDisplay: '2004' },
  FI: { name: 'Finnország', info: 'Finnország 1995-ben csatlakozott az EU-hoz, fejlett oktatási és innovációs rendszerével meghatározó szereplő.', accessionYear: 1995, accessionDisplay: '1995' },
  FR: { name: 'Franciaország', info: 'Franciaország az EU egyik alapító tagja, Párizs globális kulturális és gazdasági központként játszik meghatározó szerepet az uniós politikában.', accessionYear: 1958, accessionDisplay: '1958' },
  DE: { name: 'Németország', info: 'Németország az EU motorja, jelentős gazdasági erejével és politikai befolyásával irányt mutat az uniós döntéshozatalban.', accessionYear: 1958, accessionDisplay: '1958' },
  GR: { name: 'Görögország', info: 'Görögország 1981 óta tagja az EU-nak, gazdag történelmi öröksége miatt meghatározó a mediterrán térség integrációjában.', accessionYear: 1981, accessionDisplay: '1981' },
  HU: { name: 'Magyarország', info: 'Magyarország 2004-ben csatlakozott az EU-hoz, Budapest jelentős kulturális és gazdasági központként szerepel az uniós integrációban.', accessionYear: 2004, accessionDisplay: '2004' },
  IE: { name: 'Írország', info: 'Írország 1973-ban csatlakozott, gazdasági növekedése és innovációja révén fontos uniós partner.', accessionYear: 1973, accessionDisplay: '1973' },
  IT: { name: 'Olaszország', info: 'Olaszország az EU egyik alapító tagja, Róma és Milánó kulturális, valamint gazdasági központokkal.', accessionYear: 1958, accessionDisplay: '1958' },
  LV: { name: 'Lettország', info: 'Lettország 2004-ben csatlakozott, fővárosa Riga gyorsan fejlődő központként ismert.', accessionYear: 2004, accessionDisplay: '2004' },
  LT: { name: 'Litvánia', info: 'Litvánia 2004-ben vált az EU tagjává, Vilnius modern infrastruktúrája révén egyre meghatározóbbá válik.', accessionYear: 2004, accessionDisplay: '2004' },
  LU: { name: 'Luxemburg', info: 'Luxemburg az EU egyik alapító tagja, kis mérete ellenére fontos pénzügyi és politikai szereplő.', accessionYear: 1958, accessionDisplay: '1958' },
  MT: { name: 'Málta', info: 'Málta 2004-ben csatlakozott, stratégiai elhelyezkedésével a mediterrán térségben meghatározó uniós szereplő.', accessionYear: 2004, accessionDisplay: '2004' },
  NL: { name: 'Hollandia', info: 'Hollandia az EU alapító tagja, Amszterdam globális pénzügyi és kulturális központként ismert.', accessionYear: 1958, accessionDisplay: '1958' },
  PL: { name: 'Lengyelország', info: 'Lengyelország 2004-ben csatlakozott, gyors gazdasági növekedésével és regionális vezető szerepével kiemelkedik.', accessionYear: 2004, accessionDisplay: '2004' },
  PT: { name: 'Portugália', info: 'Portugália 1986 óta tagja az EU-nak, Lisszabon és Porto meghatározó kulturális és gazdasági központok.', accessionYear: 1986, accessionDisplay: '1986' },
  RO: { name: 'Románia', info: 'Románia 2007-ben csatlakozott az EU-hoz. Az ország átalakuló gazdasága és kulturális öröksége egyre fontosabbá válik az uniós integrációban.', accessionYear: 2007, accessionDisplay: '2007' },
  SK: { name: 'Szlovákia', info: 'Szlovákia 2004-ben csatlakozott, fővárosa, Bratislava, gyorsan fejlődő központként ismert.', accessionYear: 2004, accessionDisplay: '2004' },
  SI: { name: 'Szlovénia', info: 'Szlovénia 2004-ben vált az EU tagjává, Ljubljana modern infrastruktúrája mellett fontos uniós partner.', accessionYear: 2004, accessionDisplay: '2004' },
  ES: { name: 'Spanyolország', info: 'Spanyolország 1986 óta tagja az EU-nak, Madrid és Barcelona jelentős kulturális és gazdasági központok.', accessionYear: 1986, accessionDisplay: '1986' },
  SE: { name: 'Svédország', info: 'Svédország 1995-ben csatlakozott, Stockholm innovatív technológiai és pénzügyi központként ismert.', accessionYear: 1995, accessionDisplay: '1995' },
  AL: { name: 'Albánia', info: 'Albánia hivatalos EU-csatlakozási tárgyaló jelölt, aktív reformok révén igyekszik teljesíteni az uniós normákat.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  MK: { name: 'Észak‑Macedónia', info: 'Észak‑Macedónia hivatalos EU-csatlakozási tárgyaló jelölt, elkötelezett az uniós értékek mellett és folyamatosan reformokat hajt végre.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  ME: { name: 'Montenegró', info: 'Montenegró hivatalos EU-csatlakozási tárgyaló jelölt, dinamikus gazdasággal és strukturális reformokkal rendelkezik.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  RS: { name: 'Szerbia', info: 'Szerbia hivatalos EU-csatlakozási tárgyaló jelölt, aktívan dolgozik a jogállamiság és a gazdasági reformok terén.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  BA: { name: 'Bosznia‑Hercegovina', info: 'Bosznia‑Hercegovina jelentkezett az EU-tagságra, de még nem kapott hivatalos candidate státuszt. További reformokra és intézményi fejlesztésekre vár.', accessionYear: 3001, accessionDisplay: 'Applied' },
  TR: { name: 'Törökország', info: 'Törökország hosszú ideje hivatalos EU-csatlakozási tárgyaló jelölt, de a tárgyalások politikai és gazdasági nézeteltérések miatt gyakorlatilag fagyasztva lettek.', accessionYear: 3002, accessionDisplay: 'Frozen' },
  XK: {
    name: 'Kosovo',
    info: 'Kosovo jelentkezett az EU-tagságra, és jelenleg az uniós csatlakozási folyamat előkészítése zajlik, bár több politikai és jogi kérdés még rendezésre vár.',
    accessionYear: 3001,
    accessionDisplay: 'Applied'
  },
  UA: { name: 'Ukrajna', info: 'Ukrajna hivatalos EU-csatlakozási candidate, és jelentős reformokat hajt végre a jogállamiság és gazdasági integráció terén.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  MD: { name: 'Moldova', info: 'Moldova hivatalos EU-csatlakozási candidate, az elmúlt években jelentős reformokat hajtott végre az uniós normák elérésére.', accessionYear: 3000, accessionDisplay: 'Candidate' },
  GE: { name: 'Grúzia', info: 'Grúzia hivatalos EU-csatlakozási candidate, jelentős reformokat hajt végre a jogállamiság és gazdasági integráció terén.', accessionYear: 3000, accessionDisplay: 'Candidate' }
  
};

const infoCard = document.getElementById('info-card');
const countryNameEl = document.getElementById('country-name');
const countryInfoEl = document.getElementById('country-info');
const closeCardBtn = document.getElementById('close-card');
const svgObject = document.getElementById('europe-svg');
const tableBody = document.querySelector('#country-table tbody');
const countryModalEl = document.getElementById('countryModal');
const countryModal = new bootstrap.Modal(countryModalEl);

function showCountryInfo(countryCode) {
  const data = countryData[countryCode];
  if (data) {
    document.getElementById('countryModalLabel').textContent = data.name;
    document.getElementById('countryModalBody').textContent = data.info;
  } else {
    document.getElementById('countryModalLabel').textContent = 'Nincs információ';
    document.getElementById('countryModalBody').textContent = 'Nincs elérhető adat az adott országról.';
  }
  countryModal.show();
}

svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument;
  if (!svgDoc) {
    console.error('Nem sikerült betölteni az SVG dokumentumot.');
    return;
  }
  const interactiveElements = svgDoc.querySelectorAll('[id]');
  interactiveElements.forEach((elem) => {
    let countryCode = elem.getAttribute('id').trim().toUpperCase();
    if (!countryData.hasOwnProperty(countryCode)) return;
    elem.style.pointerEvents = 'all';
    elem.style.cursor = 'pointer';
    let childPaths = [];
    if (elem.tagName.toLowerCase() === 'g') {
      childPaths = elem.querySelectorAll('path');
    } else if (elem.tagName.toLowerCase() === 'path') {
      childPaths = [elem];
    }
    childPaths.forEach(child => {
      let orig = child.getAttribute('fill') || window.getComputedStyle(child).fill;
      child.dataset.originalFill = orig;
    });
    elem.addEventListener('mouseenter', () => {
      childPaths.forEach(child => {
        child.style.fill = '#ffeb3b';
      });
    });
    elem.addEventListener('mouseleave', () => {
      childPaths.forEach(child => {
        child.style.fill = child.dataset.originalFill;
      });
    });
    elem.addEventListener('click', () => {
      showCountryInfo(countryCode);
    });
  });
});

function getCountriesArray() {
  return Object.keys(countryData)
    .filter(code => countryData[code].hasOwnProperty('accessionYear'))
    .map(code => ({ code, ...countryData[code] }));
}

function renderTable(countries) {
  tableBody.innerHTML = '';
  countries.forEach(country => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = country.name;
    const tdAccession = document.createElement('td');
    tdAccession.textContent = country.accessionDisplay;
    tr.appendChild(tdName);
    tr.appendChild(tdAccession);
    tableBody.appendChild(tr);
  });
}

function sortByTime(countries) {
  return countries.sort((a, b) => a.accessionYear - b.accessionYear);
}

function sortByAlpha(countries) {
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

document.getElementById('sort-time').addEventListener('click', () => {
  const countries = getCountriesArray();
  renderTable(sortByTime(countries));
});

document.getElementById('sort-alpha').addEventListener('click', () => {
  const countries = getCountriesArray();
  renderTable(sortByAlpha(countries));
});

renderTable(sortByTime(getCountriesArray()));

const svgContainer = document.getElementById('svg-container');
const zoomBtn = document.getElementById('zoom-btn');
const closeFullscreenBtn = document.getElementById('close-fullscreen-btn');

zoomBtn.addEventListener('click', () => {
  if (svgContainer.requestFullscreen) {
    svgContainer.requestFullscreen();
  }
});

closeFullscreenBtn.addEventListener('click', () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    closeFullscreenBtn.style.display = 'block';
    zoomBtn.style.display = 'none';
  } else {
    closeFullscreenBtn.style.display = 'none';
    zoomBtn.style.display = 'block';
  }
});
