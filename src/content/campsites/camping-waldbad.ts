import type { CampsiteConfig } from "../types";

/**
 * Camping am Waldbad — Dellach im Drautal, Kärnten (Oberes Drautal).
 * Alle Texte/Fakten belegt aus camping-waldbad.at (Stand-Scrape 2026-06,
 * DE-Seiten + IT/EN/NL-Unterseiten für identische Fakten).
 * Bilder = ausschließlich eigene Fotos des Platzes (Galerien/Header/Slider),
 * jedes per Vision geprüft; generische Stock-/Pixabay-Motive bewusst verworfen.
 * EHRLICH: KEIN See am Platz — das "Bad" ist das angeschlossene Erlebnis-FREIBAD
 * (Waldbad); der Platz liegt am Waldrand & neben der Drau (Fluss). Darum kein
 * `see`-Feld. Mobilehomes existieren (18 Stk.), aber es lagen KEINE eigenen
 * Mobilehome-Fotos vor → Mobilheim-Sektion ausgelassen, nur in Text/Preis erwähnt.
 * PREISE: einzige auf den gescrapten Seiten belegte Übernachtungsrate ist der
 * Bestdeal-Tarif „ab EUR 25" (ACSI/ADAC, Stellplatz, Vor-/Nachsaison) → genutzt,
 * NICHT als Platzhalter. Standard-/Mobilehome-Preise lagen nicht vor (siehe REPORT).
 */
const IMG = "/campsites/camping-waldbad";

export const campingWaldbad: CampsiteConfig = {
  name: "Camping am Waldbad",
  shortName: "Waldbad",
  slug: "camping-waldbad",
  ort: "Dellach im Drautal",
  region: "Kärnten",
  brandKind: "Camping & Mobilehomes",
  regionLong: "Oberes Drautal · Kärnten · Österreich",

  claim: "Dein Familienurlaub am Waldbad im Oberen Drautal",
  claimEmphasis: "am Waldbad",
  intro:
    "Moderner Campingplatz am Waldrand und direkt neben der Drau — 186 Stellplätze, 18 Mobilehomes und ein kostenloses Erlebnis-Freibad, mitten im Luftkurort Dellach im Drautal.",

  logo: { src: `${IMG}/logo.png`, alt: "Logo Camping am Waldbad Dellach im Drautal" },

  statement: {
    text: "Bei uns ist Campingerlebnis pur — mit Waldbad, Restaurant und Animation mitten in der Kärntner Natur.",
    emphasis: "Campingerlebnis pur",
  },

  pillars: [
    { title: "Am Waldrand & an der Drau", text: "Direkt am Waldrand und neben der herrlichen Drau, mitten im Luftkurort Dellach — eingebettet in eine große, parkartige Freizeit- und Sportanlage.", image: { src: `${IMG}/lage-stellplatz.webp`, alt: "Wohnmobil auf einem Stellplatz am Waldrand mit Blick auf die Berge des Oberen Drautals" } },
    { title: "Kostenloses Erlebnis-Freibad", text: "Das angeschlossene Erlebnis-Freibad mit Sport- und Erlebnisbecken, Riesen-Wasserrutsche und Kinderbecken ist für Campinggäste gratis.", image: { src: `${IMG}/waldbad-panorama.webp`, alt: "Erlebnis-Freibad am Camping Waldbad mit Wasserrutsche und Becken" } },
    { title: "Freizeit für die ganze Familie", text: "Pumptrack, Skaterpark und Fußballplatz in der großen Freizeitanlage direkt vor dem Platz — dazu Abenteuerspielplatz und Animation.", image: { src: `${IMG}/pumptrack.webp`, alt: "Mountainbiker auf dem Pumptrack in der Freizeitanlage vor dem Campingplatz" } },
  ],

  usps: [
    "186 Stellplätze & 18 Mobilehomes",
    "Erlebnis-Freibad gratis für Gäste",
    "Direkt am Drauradweg & Draupaddelweg",
    "Abenteuerspielplatz auf ca. 1.700 m²",
    "Animationsprogramm im Juli & August",
    "Gratis Bahnfahren mit der Gästekarte",
  ],

  trust: {
    heading: "Worauf du dich am Waldbad verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Sigrid Goldberger, modernst ausgestattete Sanitäranlagen und faire Bestdeals in der Vor- und Nachsaison — der touristische Leitbetrieb in Dellach im Drautal, anerkannt von ADAC, ANWB und ACSI.",
  },

  awards: [
    { label: "ADAC Tipp 2026", image: { src: `${IMG}/award-adac-2026.png`, alt: "ADAC Tipp 2026" } },
    { label: "ANWB Erkende Camping 2026", image: { src: `${IMG}/award-anwb-2026.png`, alt: "ANWB Erkende Camping 2026" } },
    { label: "ACSI", image: { src: `${IMG}/award-acsi.png`, alt: "ACSI" } },
  ],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-uebersicht.webp`, alt: "Camping am Waldbad in Dellach im Drautal: Stellplätze, Wiesen und Berge" },
  },

  camping: {
    heading: "Camping am Waldbad",
    intro:
      "186 großzügige Stellplätze für Zelt, Wohnwagen und Wohnmobil — mit Strom und Wasser in unmittelbarer Nähe, modernst ausgestatteten Sanitäranlagen und allem, was Campingurlaub südlich der Alpen ausmacht.",
    features: [
      { title: "Camping mitten in der Natur", text: "Ebene Stellplätze am Waldrand, umgeben von Wäldern und den Bergen des Oberen Drautals — Campingerlebnis pur in einer großen, parkartigen Anlage.", image: { src: `${IMG}/camping-allee.webp`, alt: "Campingplatz Waldbad mit Wohnwagen und Vorzelten zwischen Wiesen und Bergen" } },
      { title: "186 ebene Stellplätze", text: "Schöne, ebene Plätze für Zelt, Wohnwagen und Wohnmobil — Strom und Wasser sind in unmittelbarer Nähe.", image: { src: `${IMG}/stellplaetze.webp`, alt: "Ebene Stellplätze mit Wohnwagen und Vorzelten am Camping Waldbad" } },
      { title: "Moderne Sanitäranlagen", text: "Modernst ausgestattete Sanitäranlagen mit Warmwasser — die Warmwasserversorgung läuft seit Kurzem über eine umweltfreundliche Wärmepumpe.", image: { src: `${IMG}/sanitaer.webp`, alt: "Überdachte Spülküche mit Edelstahlbecken am Camping Waldbad" } },
      { title: "Gepflegte Anlage", text: "Eine liebevoll gepflegte Anlage mit modernen Gebäuden und einem Wildbach mit Stauvorrichtung zum Spielen.", image: { src: `${IMG}/anlagen-wildbach.webp`, alt: "Modernes Platzgebäude mit Wildbach-Wasserspielanlage am Camping Waldbad" } },
      { title: "Herzlich willkommen", text: "Schon am Eingang heißt dich der blumengeschmückte Willkommensstein willkommen — hier fühlt sich die ganze Familie wohl.", image: { src: `${IMG}/willkommen.webp`, alt: "Blumengeschmückter Willkommensstein am Eingang des Camping Waldbad" } },
      { title: "Erlebnis-Freibad inklusive", text: "Das angeschlossene Erlebnis-Freibad mit Riesen-Wasserrutsche ist für Campinggäste kostenlos – Pritscheln & Plantschen direkt am Platz.", image: { src: `${IMG}/wasserrutsche.webp`, alt: "Gelbe Riesen-Wasserrutsche im Erlebnis-Freibad am Camping Waldbad" } },
    ],
  },

  kinder: {
    heading: "Für Kinder & Familien",
    intro:
      "Auf dem Abenteuerspielplatz mit rund 1.700 m² ist für jedes Alter etwas dabei — dazu im Juli und August ein buntes Animationsprogramm mit geführten Wanderungen, Kinder-Canyoning, Kinderdisco und Piratenpartys.",
    features: [
      { title: "Abenteuerspielplatz", text: "Rund 1.700 m² zum Austoben: Sandkiste mit Sandaufzug, Karussell, Schaukeln, Geländerutsche, Beachvolleyball und eine Slackline-Anlage.", image: { src: `${IMG}/spielplatz-slackline.webp`, alt: "Kinder auf der Slackline am Spielplatz mit Freibad im Hintergrund" } },
      { title: "Zwei Seilbahnen", text: "Auf den beiden Seilbahnen sausen die Kinder über den Platz — eines der Highlights am Erlebnisspielplatz.", image: { src: `${IMG}/spielplatz-seilbahn.webp`, alt: "Kind fährt auf der Seilbahn am Spielplatz des Camping Waldbad" } },
      { title: "Für die Kleinsten", text: "Rutschen, ein Wildbach mit Stauvorrichtung und ein überdachter Bereich mit Tischtennis sorgen dafür, dass keine Langeweile aufkommt.", image: { src: `${IMG}/spielplatz-rutsche.webp`, alt: "Kleinkind rutscht am Spielplatz des Camping Waldbad" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv im Oberen Drautal",
    intro:
      "Die Drau, der Drauradweg und die Berge der Gailtaler Alpen liegen direkt vor der Tür — rund um den Platz wird es nie langweilig.",
    items: [
      { title: "Draupaddeln & Kanu", text: "Direkt vom Platz auf den Draupaddelweg: mit dem Kanu die türkise Drau hinunter und mit Bahn oder Rad wieder zurück.", image: { src: `${IMG}/draupaddeln.webp`, alt: "Paddeln auf der türkisen Drau bei Dellach im Drautal" } },
      { title: "Drauradweg & E-Bike", text: "Der beliebte Drauradweg führt direkt neben dem Campingplatz vorbei — der Radverleih ist gleich am Platz.", image: { src: `${IMG}/drauradweg.webp`, alt: "Radfahrer auf dem Drauradweg in der Region Dellach im Drautal" } },
      { title: "Geführte Wanderungen", text: "Von April bis Oktober führt Bergwanderführer Wolfi auf die Gipfel der Umgebung — gratis für alle Gäste.", image: { src: `${IMG}/wandern.webp`, alt: "Geführte Wanderung mit Gruppe auf einer Alm über dem Drautal" } },
      { title: "Baden im Erlebnis-Freibad", text: "Sport- und Erlebnisbecken, Riesen-Wasserrutsche und Kinderbecken — für Campinggäste gratis.", image: { src: `${IMG}/freibad-rutsche-splash.webp`, alt: "Badespaß auf der Wasserrutsche im Erlebnis-Freibad am Camping Waldbad" } },
      { title: "Golf im Drautal", text: "Der Golfplatz Drautal in der Umgebung lädt zum Spielen ein — eingebettet in die Bergkulisse des Oberen Drautals.", image: { src: `${IMG}/golf.webp`, alt: "Golfplatz Drautal mit Bergkulisse" } },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die Drautal Straße (B100) ins Obere Drautal nach Dellach — Raßnig 8, 9772 Dellach im Drautal." },
      { title: "Bahn & Postbus-Shuttle", text: "Mit dem Postbus-Shuttle Oberes Drautal erreichst du über rund 300 Haltestellen in Dellach, Berg, Irschen und Greifenburg viele Orte der Umgebung bequem und flexibel." },
      { title: "Gratis mit der Gästekarte", text: "Mit der Gästekarte fährst du während deines Aufenthalts gratis mit der S-Bahn durch ganz Kärnten bis nach Lienz." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Waldbad",
    headingEmphasis: "Waldbad",
    intro:
      "Camping am Waldrand, das Erlebnis-Freibad und die Drau vor der Tür — ein paar Eindrücke aus Dellach im Drautal.",
    tag: "April bis Oktober",
    images: [
      { src: `${IMG}/galerie-radtour.webp`, alt: "Radfahrer vor einem blumengeschmückten Bauernhaus im Drautal" },
      { src: `${IMG}/galerie-waldbad.webp`, alt: "Erlebnis-Freibad am Camping Waldbad mit Wasserrutsche und Liegewiese" },
      { src: `${IMG}/galerie-camping.webp`, alt: "Stellplätze zwischen Bäumen am Camping Waldbad" },
      { src: `${IMG}/galerie-familie.webp`, alt: "Kinder beim Animationsprogramm auf der Wiese beim Erlebnis-Freibad am Camping Waldbad" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum und Personenzahl — wir melden uns mit deiner persönlichen Verfügbarkeit und dem passenden Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preis = ACSI/ADAC-Bestdeal-Tarif für einen Stellplatz (2 Personen) in der Vor- und Nachsaison. Hauptsaison-, Mobilehome- und Pauschalpreise auf Anfrage.",
    highlight: {
      title: "Beste Deals & gratis Waldbad",
      text: "Mit ACSI, ADAC und der Best Deal Camping Card gibt es Spezial-Tarife — und das Erlebnis-Freibad ist für Campinggäste immer gratis.",
    },
    categories: [
      // Einzige auf der gescrapten Quelle belegte Übernachtungsrate: „Best Deals ab EUR 25,00" (ACSI/ADAC, Stellplatz, Vor-/Nachsaison).
      { id: "stellplatz", label: "Stellplatz", perNight: 25 },
    ],
  },

  kontakt: {
    tel: "+43 4714 288",
    telHref: "tel:+434714288",
    mail: "info@camping-waldbad.at",
    facebook: "https://www.facebook.com/camping.amwaldbad",
    adresse: "Raßnig 8 · 9772 Dellach im Drautal · Kärnten",
    coords: { lat: 46.730716, lng: 13.07854 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Mobilehomes", href: "#booking" },
      ],
    },
    {
      label: "Freibad",
      href: "#aktivitaeten",
      children: [
        { label: "Erlebnis-Freibad", href: "#aktivitaeten" },
        { label: "Riesen-Wasserrutsche", href: "#aktivitaeten" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Abenteuerspielplatz", href: "#kinder" },
        { label: "Seilbahnen", href: "#kinder" },
        { label: "Animation", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Draupaddeln", href: "#aktivitaeten" },
        { label: "Drauradweg", href: "#aktivitaeten" },
        { label: "Wandern", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingWaldbad;
