(() => {
  'use strict';
  const itchUrl = 'https://strfvckrzg-applab.itch.io/investment-portfolio-public-beta-10';
  const translations = {
    hr: {
      navNews: "Novosti",
      updatesTitle: "Što je novo u Investment Portfoliju",
      updatesIntro: "Javna beta 1.1 dostupna je na itch.io. Novi prikaz portfelja i regionalni porezni pregledi pripremaju se za sljedeće javno izdanje.",
      updatesAvailable: "Dostupno sada",
      updatesBeta: "Javna beta 1.1 za Android",
      updatesBetaCopy: "Upravljaj portfeljima, bilježi transakcije i prati povijest ulaganja. Beta 1.1 prikazuje kada je cijena spremljena i odakle dolazi te omogućuje nastavak nedovršenog unosa. Hrvatski FIFO pregled dostupan je uz odabranu Hrvatsku.",
      updatesInProgress: "U razvoju za javnu betu",
      updatesVisual: "Novi pregled i privatni prikaz",
      updatesVisualCopy: "Istaknutija ukupna vrijednost portfelja, čitljiviji graf i kartice ulaganja te ikona oka za privremeno skrivanje iznosa tijekom pokazivanja zaslona.",
      updatesTax: "Porezni pregled prema rezidentnosti",
      updatesTaxCopy: "Razvojna beta ima izbor porezne rezidentnosti za svih 27 država EU-a, 25 najvećih gospodarstava prema nominalnom BDP-u za 2026. i druga područja. Rezidentnost biraš u postavkama, neovisno o jeziku, valuti ili banci. CSV izvoz obuhvaća kupnje, prodaje, naknade i dividende otvorenog ulaganja.",
      updatesScopeTitle: "Regionalno porezno pokriće",
      updatesScopeIntro: "Hrvatski FIFO već je u javnoj beti. Ostali navedeni pregledi za 2025. i 2026. još se pripremaju za javno izdanje i pokrivaju sljedeće slučajeve.",
      updatesArea: "Porezno područje",
      updatesScope: "Podržani pregled",
      updatesHR: "Hrvatska",
      updatesHRScope: "Informativni FIFO i pregled roka držanja u javnoj beti.",
      updatesSI: "Slovenija",
      updatesSIScope: "Procjena prodaje dionica i ETF-ova na običnom računu, prije godišnjeg prebijanja gubitaka.",
      updatesRS: "Srbija",
      updatesRSScope: "Procjena dokumentirane prodaje dionica uz ručni unos provjerenih iznosa u dinarima.",
      updatesME: "Crna Gora",
      updatesMEScope: "FIFO procjena državnog poreza za otvorenu dionicu, bez općinskog prireza.",
      updatesMK: "Sjeverna Makedonija",
      updatesMKScope: "Procjena za dokumentirani dio prodaje dionice ili udjela u fondu, uz ručni unos u denarima.",
      updatesXK: "Kosovo",
      updatesXKScope: "Procjena dodatnog godišnjeg poreza od prodaje dionica, prema ukupnoj poreznoj osnovici.",
      updatesBAFB: "Federacija BiH",
      updatesBAFBScope: "Procjena za prodaju poslovnog udjela u d.o.o.",
      updatesBARS: "Republika Srpska",
      updatesBARSScope: "Procjena za uobičajenu domaću prodaju dionica uz dokumentiranu ponderiranu nabavnu vrijednost.",
      updatesBABD: "Brčko distrikt",
      updatesBABDScope: "Informacija o izuzeću za obuhvaćene financijske instrumente.",
      updatesNotice: "Porezni pregledi služe kao pomoć pri evidenciji. Procjene za pojedine prodaje mogu izostaviti gubitke iz drugih ulaganja, olakšice i inozemne porezne kredite.",
      faqRoadmapQ: "Jesu li novi regionalni porezni pregledi već dostupni?",
      faqRoadmapA: "Hrvatski FIFO već je u javnoj beti 1.1. Ostali regionalni pregledi, prošireni izbor porezne rezidentnosti i opći CSV izvoz u pripremi su za javno izdanje.",
      skip:'Preskoči na sadržaj',navFeatures:'Mogućnosti',navScreens:'Aplikacija',navPrivacy:'Privatnost',navFaq:'Pitanja',navDownload:'Preuzmi beta',
      heroBadge:'PUBLIC BETA 1.1 · ANDROID',heroFree:'BESPLATNO',heroLine1:'Tvoje investicije.',heroLine2:'Jasnija slika.',heroDesc:'Jedno pregledno mjesto za ETF-ove, dionice i kriptovalute. Prati uplate, vrijednost i rezultate — bez povezivanja bankovnog ili brokerskog računa.',heroCta:'Isprobaj Android betu',heroSecondary:'Pogledaj aplikaciju',assure1:'Podaci na uređaju',assure2:'Bez obvezne registracije',floatingOne:'Jasan pregled portfelja',floatingTwo:'Tvoja evidencija.',floatingThree:'Pod tvojom kontrolom.',demoFoot:'Stvarna snimka aplikacije · izmišljeni testni podaci',heroBottom:'EVIDENCIJA ULAGANJA, BEZ NEPOTREBNE SLOŽENOSTI',
      tickerLead:'JEDNA APLIKACIJA. VIŠE VRSTA ULAGANJA.',tickerStocks:'DIONICE',tickerCrypto:'KRIPTOVALUTE',tickerOther:'RAZLIČITI PORTFELJI',
      featuresKicker:'ŠTO MOŽEŠ RADITI',featuresTitleOne:'Manje tablica.',featuresTitleTwo:'Više jasnoće.',featuresIntro:'Od prve uplate do dugoročnog praćenja — pregledne funkcije za osobnu evidenciju ulaganja, bez nepotrebne buke.',
      f1Title:'Svi portfelji. Jedan pregled.',f1Desc:'Prati više portfelja i ulaganja te ukupno uloženo, vrijednost i ostvareni rezultat.',f2Title:'Grafikoni i povijest',f2Desc:'Vizualiziraj zabilježene procjene vrijednosti, uplate i kretanje vlastitog portfelja.',f3Title:'Kupnje, prodaje i naknade',f3Desc:'Zabilježi transakcije ručno, uključujući količinu udjela, datume i troškove.',f4Title:'FIFO i razdoblje držanja',f4Desc:'Informativni prikaz FIFO evidencije i dvogodišnjeg razdoblja za korisnike s hrvatskom poreznom rezidentnošću.',f5Title:'Lokalni podaci i biometrija',f5Desc:'Evidencija ostaje na uređaju. Android biometrija može pružiti dodatnu zaštitu pristupa.',f6Title:'Sigurnosne kopije',f6Desc:'Izvezi evidenciju u JSON datoteku i vrati je po potrebi. Mjesto čuvanja biraš sam.',
      screensKicker:'STVARNA APLIKACIJA',screensTitle1:'Bez renderiranih obećanja.',screensTitle2:'Pogledaj sučelje.',screensIntro:'Četiri originalne snimke zaslona iz razvojne verzije. Klikni za prikaz u punoj veličini.',shot1:'Pregled portfelja',shot2:'Grafikoni i povijest',shot3:'Dvogodišnje razdoblje',shot4:'Unos transakcije',screensDisclaimer:'Snimke prikazuju razvojno/testno sučelje i isključivo izmišljene podatke. Izgled aktualne javne bete može se razlikovati.',
      demoKicker:'ISPROBAJ PRIKAZ',demoTitleOne:'Brojke imaju',demoTitleTwo:'svoju priču.',demoCopy:'Pogledaj kako može izgledati jednostavno praćenje ulaganja. Promijeni razdoblje i pregledaj demonstracijski grafikon.',demoNote:'Interaktivni prikaz na webu. Nije povezan s aplikacijom niti sa stvarnim tržišnim podacima.',demoPanel:'Pregled vrijednosti',demoBadge:'DEMO PODACI',demoValueLabel:'Ukupna vrijednost',legendName:'Vrijednost portfelja',
      privacyKicker:'PRIVATNOST JE TEMELJ',privacyTitle1:'Nije potrebno dijeliti',privacyTitle2:'financijske podatke.',privacyDesc:'Investment Portfolio čuva evidenciju ulaganja lokalno na tvojem Android uređaju. Za praćenje vlastitih ulaganja ne trebaš povezivati banku, brokera ni otvoriti račun kod nas.',privacyOne:'Lokalna evidencija ulaganja',privacyTwo:'Ručno izvezive sigurnosne kopije',privacyThree:'Bez obveznih bankovnih prijava',privacyCaveat:'Opcionalne tržišne cijene i tečajevi mogu zahtijevati komunikaciju s vanjskim pružateljima podataka. Sigurnosne kopije zaštiti kao i druge osjetljive datoteke.',privacyLink:'Pročitaj politiku privatnosti ↗',
      stepsKicker:'KAKO ZAPOČETI',stepsTitle:'Tri jednostavna koraka.',step1Title:'Preuzmi beta aplikaciju',step1Desc:'Otvori službenu itch.io stranicu i preuzmi APK za Android.',step2Title:'Dodaj vlastiti portfelj',step2Desc:'Ručno unesi ulaganja i transakcije, bez povezivanja računa.',step3Title:'Prati i sačuvaj evidenciju',step3Desc:'Provjeravaj prikaze te redovito izvozi sigurnosnu kopiju.',
      faqKicker:'DOBRO JE ZNATI',faqTitle1:'Pitanja?',faqTitle2:'Imamo odgovore.',faqIntro:'Važne informacije prije instalacije javne beta-verzije.',faq1Q:'Je li aplikacija besplatna?',faq1A:'Da. Trenutačna javna beta 1.1 besplatna je, bez pretplate i oglasa. Budući uvjeti novih verzija mogu se promijeniti.',faq2Q:'Treba li povezati banku ili brokerski račun?',faq2A:'Ne. Uplate, prodaje i ostale podatke možeš unijeti ručno. Nema obvezne registracije ni povezivanja bankovnog računa.',faq3Q:'Jesu li cijene i izračuni uvijek točni?',faq3A:'Ne nužno. Podaci se mogu unositi ručno, a tržišni podaci mogu kasniti ili biti nepotpuni. Prije donošenja financijskih ili poreznih odluka važne iznose provjeri neovisno.',faq4Q:'Mogu li koristiti aplikaciju za poreznu prijavu?',faq4A:'Aplikacija može pomoći pri osobnoj evidenciji. Hrvatski FIFO i razdoblja držanja prikazani su informativno i nisu porezni savjet ili službena potvrda porezne obveze.',faq5Q:'Kako nadograditi s bete 1.0 na 1.1?',faq5A:'Prema uputama izdavača, beta 1.1 instalira se preko verzije 1.0 bez prethodnog uklanjanja. Prije nadogradnje svejedno napravi sigurnosnu kopiju važnih podataka.',
      hashKicker:'PROVJERA DATOTEKE',hashTitle:'Provjeri originalni APK.',hashDesc:'Izdavač je objavio SHA-256 kontrolni zbroj za Public Beta 1.1. Usporedi ga sa zbrojem preuzete datoteke.',hashCopy:'Kopiraj',hashCopied:'Kopirano',hashCaveat:'Podudaranje kontrolnog zbroja potvrđuje istovjetnost datoteke, a ne jamči odsutnost sigurnosnih ranjivosti.',
      closingBadge:'PUBLIC BETA 1.1 · ANDROID',closingTitle1:'Vrijeme je za',closingTitle2:'bolji pregled.',closingText:'Preuzmi besplatnu beta-verziju, isprobaj aplikaciju i podijeli povratnu informaciju na službenoj stranici projekta.',closingButton:'Otvori službeno preuzimanje',downloadNote:'Za Android · besplatna javna beta · APK se preuzima s itch.io',
      footerTagline:'Neovisna Android aplikacija za osobnu evidenciju ulaganja.',privacyPolicy:'Privatnost',footerLocation:'Zagreb, Hrvatska.',madeInEu:'Napravljeno u EU',footerDisclaimer:'Beta softver · nije financijski ili porezni savjet.',backTop:'Na vrh',dialogDemo:'Izmišljeni testni podaci · razvojna verzija aplikacije',
      legalKicker:'TRANSPARENTNO O PODACIMA',legalTitle:'Politika privatnosti',legalIntro:'Kako aplikacija Investment Portfolio i ova web-stranica postupaju s informacijama. Zadnje ažuriranje: 15. studenoga 2026.',
      legal1Title:'1. Što aplikacija pohranjuje',legal1:'Evidencija ulaganja koju unosiš u Android aplikaciju čuva se lokalno na uređaju. Za osnovno korištenje nije potrebna registracija, povezivanje banke ili brokera, niti slanje evidencije izdavaču.',
      legal2Title:'2. Opcionalne vanjske usluge',legal2:'Ako uključiš dohvat tržišnih cijena ili tečajeva, aplikacija može kontaktirati vanjske pružatelje podataka. Ti pružatelji mogu obrađivati tehničke podatke o zahtjevu prema vlastitim pravilima. Vrijednosti i izračune provjeri neovisno.',
      legal3Title:'3. Biometrijska zaštita',legal3:'Aplikacija može koristiti Androidov mehanizam biometrijske provjere ili vjerodajnice uređaja. Ovom web-stranicom ne prikupljaju se biometrijski podaci.',
      legal4Title:'4. Sigurnosne kopije',legal4:'Ako izvoziš sigurnosnu kopiju u JSON formatu, sam biraš gdje se ona sprema. Datoteka može sadržavati osjetljive financijske podatke. Čuvaj je na sigurnom mjestu i ne dijeli je javno.',
      legal5Title:'5. Ova web-stranica',legal5:'Ova statična web-stranica ne zahtijeva korisnički račun niti prikuplja podatke o tvojim ulaganjima. Koristi Cloudflare Web Analytics za statistiku posjeta i performansi, bez analitičkih i marketinških kolačića. Cloudflare obrađuje tehničke podatke potrebne za rad stranice i statistiku posjeta. U pregledniku se mogu spremiti odabrani jezik i tema. Klikom na preuzimanje prelaziš na itch.io, gdje vrijede njihova pravila privatnosti.',
      legal6Title:'6. Izmjene i kontakt',legal6:'Ovo je informativna verzija politike za javnu beta-aplikaciju. Informacije se mogu ažurirati zajedno s novim izdanjima. Za pitanja i povratne informacije koristi službenu itch.io stranicu projekta.',legalBack:'← Povratak na početnu'
    },
    en: {
      navNews: "Updates",
      updatesTitle: "What’s new in Investment Portfolio",
      updatesIntro: "Public Beta 1.1 is available on itch.io. A redesigned portfolio view and regional tax previews are being prepared for a future public release.",
      updatesAvailable: "Available now",
      updatesBeta: "Public Beta 1.1 for Android",
      updatesBetaCopy: "Manage portfolios, log transactions and view investment history. Beta 1.1 shows when prices were saved and where they came from, and lets you resume unfinished entries. The Croatian FIFO overview is available when Croatia is selected.",
      updatesInProgress: "In development for public beta",
      updatesVisual: "Redesigned overview and privacy view",
      updatesVisualCopy: "A more prominent portfolio value, clearer charts and investment cards, and an eye icon to temporarily hide amounts when showing your screen.",
      updatesTax: "Tax previews by tax residence",
      updatesTaxCopy: "The development beta offers a tax residence selector covering all 27 EU countries, the 25 largest economies by 2026 nominal GDP and other jurisdictions. Choose your residence in settings independently of language, currency or bank. CSV export covers purchases, sales, fees and dividends for the open investment.",
      updatesScopeTitle: "Regional tax coverage",
      updatesScopeIntro: "Croatian FIFO is already in the public beta. The other previews listed below cover 2025 and 2026 and are still being prepared for public release.",
      updatesArea: "Tax jurisdiction",
      updatesScope: "Supported preview",
      updatesHR: "Croatia",
      updatesHRScope: "Informational FIFO and holding-period view in the public beta.",
      updatesSI: "Slovenia",
      updatesSIScope: "Estimate for stock and ETF sales in a regular account, before annual loss offsets.",
      updatesRS: "Serbia",
      updatesRSScope: "Estimate for a documented stock sale with verified dinar amounts entered manually.",
      updatesME: "Montenegro",
      updatesMEScope: "FIFO-based national tax estimate for the open stock, excluding local surtax.",
      updatesMK: "North Macedonia",
      updatesMKScope: "Estimate for a documented portion of a stock or fund sale with manual entry in denars.",
      updatesXK: "Kosovo",
      updatesXKScope: "Estimate of the additional annual income tax from a stock sale, based on total taxable income.",
      updatesBAFB: "Federation of Bosnia and Herzegovina",
      updatesBAFBScope: "Estimate for the sale of an interest in a limited liability company.",
      updatesBARS: "Republika Srpska",
      updatesBARSScope: "Estimate for an ordinary domestic stock sale with documented weighted acquisition cost.",
      updatesBABD: "Brčko District",
      updatesBABDScope: "Information about the exclusion for covered financial instruments.",
      updatesNotice: "Tax previews support record-keeping. Individual sale estimates may exclude losses on other holdings, reliefs and foreign tax credits.",
      faqRoadmapQ: "Are the new regional tax previews available yet?",
      faqRoadmapA: "Croatian FIFO is already in Public Beta 1.1. The other regional previews, expanded tax residence selector and general CSV export are in preparation for public release.",
      skip:'Skip to content',navFeatures:'Features',navScreens:'The app',navPrivacy:'Privacy',navFaq:'FAQ',navDownload:'Get the beta',
      heroBadge:'PUBLIC BETA 1.1 · ANDROID',heroFree:'FREE TO TRY',heroLine1:'Your investments.',heroLine2:'A clearer picture.',heroDesc:'One organized place for ETFs, stocks and crypto. Track contributions, value and performance — without linking your bank or brokerage account.',heroCta:'Get the Android beta',heroSecondary:'Explore the app',assure1:'Data on your device',assure2:'No account required',floatingOne:'Your portfolio at a glance',floatingTwo:'Your records.',floatingThree:'Your control.',demoFoot:'Real app screenshot · fictional test data',heroBottom:'INVESTMENT RECORD-KEEPING, WITHOUT THE CLUTTER',
      tickerLead:'ONE APP. MANY TYPES OF INVESTMENTS.',tickerStocks:'STOCKS',tickerCrypto:'CRYPTO',tickerOther:'MULTIPLE PORTFOLIOS',
      featuresKicker:'WHAT YOU CAN DO',featuresTitleOne:'Less spreadsheet.',featuresTitleTwo:'More clarity.',featuresIntro:'From your first contribution to long-term tracking — practical tools to organize personal investment records without unnecessary noise.',
      f1Title:'All portfolios. One view.',f1Desc:'Track multiple portfolios and investments, including invested capital, portfolio value and performance.',f2Title:'Charts & history',f2Desc:'Visualize recorded portfolio valuations, contributions and historical changes.',f3Title:'Trades & fees',f3Desc:'Log purchases and sales manually, including units, dates and fees.',f4Title:'FIFO & holding periods',f4Desc:'Informational FIFO and two-year holding period views for users with Croatian tax residency.',f5Title:'Local data & biometrics',f5Desc:'Your investment records stay on-device. Android biometric authentication can add another layer of access protection.',f6Title:'Backup & restore',f6Desc:'Export your records to JSON and restore them when necessary. You choose where the file is stored.',
      screensKicker:'THE REAL APP',screensTitle1:'No imaginary mockups.',screensTitle2:'See the interface.',screensIntro:'Four original screenshots from a development build. Tap any image to view it full size.',shot1:'Portfolio overview',shot2:'Charts & history',shot3:'Two-year holding period',shot4:'Record a transaction',screensDisclaimer:'Screenshots show an earlier development/test interface with fictional investment figures only. The current public beta may look different.',
      demoKicker:'EXPLORE THE VIEW',demoTitleOne:'Every number',demoTitleTwo:'tells a story.',demoCopy:'See how simple investment tracking might look. Switch time ranges in this interactive sample chart.',demoNote:'Interactive website illustration. Not linked to the app or any real market data.',demoPanel:'Portfolio performance',demoBadge:'DEMO DATA',demoValueLabel:'Total portfolio value',legendName:'Portfolio value',
      privacyKicker:'PRIVACY BY DESIGN',privacyTitle1:'Your financial records',privacyTitle2:'stay yours.',privacyDesc:'Investment Portfolio stores your investment records locally on your Android device. You do not need to connect a bank or broker or create an account with us to track your investments.',privacyOne:'On-device investment records',privacyTwo:'Manually exportable backups',privacyThree:'No required bank connections',privacyCaveat:'Optional market prices and exchange rates may contact external data providers. Protect your backup files as you would other sensitive documents.',privacyLink:'Read the privacy policy ↗',
      stepsKicker:'GETTING STARTED',stepsTitle:'Three simple steps.',step1Title:'Download the public beta',step1Desc:'Visit the official itch.io page to download the APK for Android.',step2Title:'Create your portfolio',step2Desc:'Add investments and transactions manually. No account connection needed.',step3Title:'Track & back up',step3Desc:'Review your portfolio and regularly export a backup of your data.',
      faqKicker:'GOOD TO KNOW',faqTitle1:'Questions?',faqTitle2:'Here are answers.',faqIntro:'Key information before you install the public beta.',faq1Q:'Is Investment Portfolio free?',faq1A:'Yes. The current public beta 1.1 is free to use, with no subscription or advertisements. Terms for future releases may change.',faq2Q:'Do I need to connect a bank or broker?',faq2A:'No. You can add contributions, sales and other records manually. Neither registration nor bank account linking is required.',faq3Q:'Are prices and calculations always accurate?',faq3A:'Not necessarily. Values may be entered manually, and third-party market information may be delayed or incomplete. Independently verify important figures before making financial or tax decisions.',faq4Q:'Can the app file my taxes?',faq4A:'The app can help with personal record-keeping. Croatian FIFO and holding-period information is illustrative and does not constitute tax advice or official confirmation of tax liability.',faq5Q:'How do I update from beta 1.0 to 1.1?',faq5A:'According to the publisher, you can install beta 1.1 directly over beta 1.0 without uninstalling. Make a backup of important data first.',
      hashKicker:'FILE INTEGRITY',hashTitle:'Verify the official APK.',hashDesc:'The publisher provides a SHA-256 checksum for Public Beta 1.1. Compare it against the downloaded APK file.',hashCopy:'Copy',hashCopied:'Copied',hashCaveat:'Matching a checksum establishes file identity, not an absence of security vulnerabilities.',
      closingBadge:'PUBLIC BETA 1.1 · ANDROID',closingTitle1:'Make room for',closingTitle2:'a clearer view.',closingText:'Get the free beta, try out the app and share feedback on the official project page.',closingButton:'Go to official download',downloadNote:'Android only · free public beta · APK hosted on itch.io',
      footerTagline:'Independent Android app for personal investment record-keeping.',privacyPolicy:'Privacy',footerLocation:'Zagreb, Croatia.',madeInEu:'Made in the EU',footerDisclaimer:'Beta software · not financial or tax advice.',backTop:'Back to top',dialogDemo:'Fictional test data · development app build',
      legalKicker:'TRANSPARENCY ABOUT DATA',legalTitle:'Privacy policy',legalIntro:'How Investment Portfolio and this website handle information. Last updated: November 15, 2026.',
      legal1Title:'1. What the app stores',legal1:'Investment records that you enter in the Android app are stored locally on your device. Basic use does not require registration, connecting a bank or broker, or sending your portfolio data to the publisher.',
      legal2Title:'2. Optional external services',legal2:'If you enable market price or exchange-rate lookup, the app may contact external data providers. Those services may process technical request information under their own policies. Verify values and calculations independently.',
      legal3Title:'3. Biometric authentication',legal3:'The app may use Android biometric authentication or device credentials. This website does not collect biometric information.',
      legal4Title:'4. Backups',legal4:'If you export a JSON backup, you choose where it is saved. The backup may contain sensitive financial information. Store it securely and do not share it publicly.',
      legal5Title:'5. This website',legal5:'This static website requires no account and does not collect your investment records. It uses Cloudflare Web Analytics for traffic and performance statistics without analytics or marketing cookies. Cloudflare processes technical information needed to serve the website and measure visits. Your language and theme preferences may be stored locally in your browser. The download link leads to itch.io, where its own privacy policies apply.',
      legal6Title:'6. Changes & contact',legal6:'This is an informational privacy notice for the public beta. It may be updated as new versions are published. For questions and feedback, use the official itch.io project page.',legalBack:'← Return to homepage'
    }
  };
  let currentLang = 'hr';
  try { if (localStorage.getItem('ip-lang') === 'en') currentLang = 'en'; } catch(_e) { /* Storage can be unavailable in private mode. */ }
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch(_e) { /* Optional. */ } };
  const setLanguage = (language) => {
    currentLang = language === 'en' ? 'en' : 'hr';
    document.documentElement.lang = currentLang;
    $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (translations[currentLang][key]) el.textContent = translations[currentLang][key]; });
    const languageButton = $('#langToggle');
    if (languageButton) {
      $('.lang-current').textContent = currentLang.toUpperCase();
      $('.lang-other').textContent = currentLang === 'hr' ? 'EN' : 'HR';
      languageButton.setAttribute('aria-label', currentLang === 'hr' ? 'Switch to English' : 'Prebaci na hrvatski');
    }
    document.title = currentLang === 'hr' ? 'Investment Portfolio — Investicije pod kontrolom' : 'Investment Portfolio — Know where you stand';
    const desc = $('meta[name="description"]');
    if(desc) desc.content = currentLang === 'hr' ? 'Besplatna Android beta aplikacija za praćenje ETF-ova, dionica i kriptovaluta. Ručni unos, grafikoni, FIFO pregled i lokalne sigurnosne kopije.' : 'Free Android beta to track ETFs, stocks and crypto. Manual entries, portfolio charts, FIFO view and local backups.';
    $$('[data-period]').forEach(button => button.setAttribute('aria-label', `${currentLang === 'hr' ? 'Razdoblje' : 'Time period'} ${button.textContent}`));
    const gallery = $('#gallery');
    if(gallery) gallery.setAttribute('aria-label',currentLang === 'hr' ? 'Snimke zaslona aplikacije' : 'App screenshots');
    if($('#imageDialog')?.open) updateDialogCaption();
    updateChart();
    savePreference('ip-lang', currentLang);
  };
  $('#langToggle')?.addEventListener('click', () => setLanguage(currentLang === 'hr' ? 'en' : 'hr'));
  const prefersLight = matchMedia('(prefers-color-scheme: light)').matches;
  let theme = prefersLight ? 'light' : 'dark';
  try { const saved = localStorage.getItem('ip-theme'); if(saved === 'light' || saved === 'dark') theme = saved; } catch(_e) { /* Optional. */ }
  const setTheme = (value) => {
    theme = value === 'light' ? 'light' : 'dark';
    document.body.classList.toggle('light', theme === 'light');
    $('#themeToggle')?.setAttribute('aria-label', currentLang === 'hr' ? (theme === 'light' ? 'Uključi tamnu temu' : 'Uključi svijetlu temu') : (theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'));
    const themeIcon = $('.theme-icon');
    if(themeIcon) themeIcon.innerHTML = theme === 'dark' ? '<path d="M20.2 15.5A8 8 0 0 1 8.5 3.8a8.2 8.2 0 1 0 11.7 11.7Z"/>' : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>';
    savePreference('ip-theme', theme);
  };
  setTheme(theme);
  $('#themeToggle')?.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));

  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');
  const closeMenu = () => { if (mobileMenu) mobileMenu.hidden = true; if(menuToggle) menuToggle.setAttribute('aria-expanded','false'); };
  menuToggle?.addEventListener('click', () => { if (!mobileMenu) return; mobileMenu.hidden = !mobileMenu.hidden; menuToggle.setAttribute('aria-expanded',String(!mobileMenu.hidden)); });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (innerWidth > 900) closeMenu(); });

  // Demonstration-only chart. All financial values below are synthetic.
  const chartSets = {
    '1m': {values:[11630,11710,11690,11930,11880,12120,12090,12480],start:'01',mid:'15',end:'30',invested:11100},
    '6m': {values:[10420,10680,10540,11030,11370,11120,11500,11870,11720,12120,12480],start:'SVIB',mid:'KOL',end:'STU',invested:11100},
    '1y': {values:[8600,9060,8940,9630,9520,10200,10350,10120,10980,11250,11140,11770,12480],start:'SIJ',mid:'LIP',end:'STU',invested:11100}
  };
  let activePeriod = '1y';
  function updateChart() {
    if (!$('#chartLine')) return;
    const v = chartSets[activePeriod];
    const all = v.values, min = Math.min(...all) - 700, max = Math.max(...all) + 700;
    const points = all.map((n, i) => [15 + i * 530 / (all.length - 1), 220 - ((n - min) / (max - min)) * 195]);
    const line = points.map((point,i) => `${i===0?'M':'L'}${point[0].toFixed(1)} ${point[1].toFixed(1)}`).join(' ');
    $('#chartLine').setAttribute('d',line);
    $('#chartArea').setAttribute('d',`${line} L545 220 L15 220 Z`);
    const last = points[points.length-1]; $('#chartDot').setAttribute('cx',last[0]); $('#chartDot').setAttribute('cy',last[1]);
    const locale = currentLang === 'hr' ? 'hr-HR' : 'en-IE';
    const num = n => new Intl.NumberFormat(locale, {style:'currency',currency:'EUR',minimumFractionDigits:2}).format(n);
    const gain = all[all.length - 1] - v.invested;
    $('#demoValue').textContent = num(all[all.length - 1]);
    $('#demoGain').textContent = `${gain >= 0 ? '+' : ''}${num(gain)} (${gain >= 0 ? '+' : ''}${(gain / v.invested * 100).toLocaleString(locale,{minimumFractionDigits:2,maximumFractionDigits:2})}%)`;
    $('#axisStart').textContent = currentLang === 'en' && activePeriod === '1y' ? 'JAN' : currentLang === 'en' && activePeriod === '6m' ? 'MAY' : v.start;
    $('#axisMid').textContent = currentLang === 'en' && activePeriod === '1y' ? 'JUN' : currentLang === 'en' && activePeriod === '6m' ? 'AUG' : v.mid;
    $('#axisEnd').textContent = currentLang === 'en' && activePeriod !== '1m' ? 'NOV' : v.end;
    $$('[data-period]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.period===activePeriod)));
  }
  $$('[data-period]').forEach(button => button.addEventListener('click', () => {activePeriod = button.dataset.period;updateChart();}));
  $('#copyHash')?.addEventListener('click', async () => {
    const button = $('#copyHash');
    const hash = $('#apkHash')?.textContent;
    if(!hash) return;
    try {
      await navigator.clipboard.writeText(hash);
      button.textContent = translations[currentLang].hashCopied;
    } catch(_error) {
      // Clipboard permissions vary, so never claim copying succeeded.
      button.textContent = currentLang === 'hr' ? 'Označi zbroj za kopiranje' : 'Select the hash to copy';
      const r = document.createRange();r.selectNodeContents($('#apkHash'));
      const sel = window.getSelection();sel.removeAllRanges();sel.addRange(r);
    }
  });
  $('#galleryPrev')?.addEventListener('click',()=>$('#gallery')?.scrollBy({left:-280,behavior:'smooth'}));
  $('#galleryNext')?.addEventListener('click',()=>$('#gallery')?.scrollBy({left:280,behavior:'smooth'}));
  const dialog = $('#imageDialog');
  let activeScreenshot = null;
  function updateDialogCaption() {
    if (!activeScreenshot) return;
    $('#dialogCaption').textContent = activeScreenshot.dataset[currentLang === 'hr' ? 'captionHr' : 'captionEn'];
  }
  $$('.screenshot-item').forEach(item => item.addEventListener('click', () => {
    if (!dialog) return;
    activeScreenshot = item;
    const image = $('#dialogImage');
    image.src = item.dataset.image;
    updateDialogCaption();
    image.alt = $('#dialogCaption').textContent;
    dialog.showModal();
    $('#closeDialog')?.focus();
  }));
  $('#closeDialog')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', e => { if(e.target === dialog) dialog.close(); });
  setLanguage(currentLang);
  // Keep external links centralized on the publisher's verified page.
  $$('[data-official-download]').forEach(a => {a.href = itchUrl;});
})();