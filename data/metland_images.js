  // data/metland_images.js
  // Use EXACT paths from RAW_MAP (no PNG generalization)

  // 1) Your mapping (keep it exactly as your files under /public)
  const RAW_MAP = {
    "AZKO": "/assets/metland/AZKO.png",
    "AFRO": "/assets/metland/AFRO.png",
    "AGM (American Giant Mattress)": "/assets/metland/AGM.png",
    "AION": "/assets/metland/AION.png",
    "ANDREW SHOES": "/assets/metland/ANDREW-SHOES.png",
    "ARISTY WEDDING": "/assets/metland/ARISTY-WEDDING.png",
    "ARNOLD PALMER": "/assets/metland/ARNOLD-PALMER.png",
    "ATM BNI": "/assets/metland/ATM-BNI.png",
    "ATM BRI": "/assets/metland/ATM-BRI.png",
    "ATM CIMB NIAGA": "/assets/metland/ATM-CIMB-NIAGA.png",
    "ATM DANAMON": "/assets/metland/ATM-DANAMON.png",
    "ATM MEGA": "/assets/metland/ATM-MEGA.png",
    "ATM OCBC NISP": "/assets/metland/ATM-OCBC-NISP.png",
    // NOTE: Your original had "ATM -ANIN.png" (space/typo). Ensure the filename really exists:
    "ATM PANIN": "/assets/metland/ATM-PANIN.png",
    "AUTO GLAZE": "/assets/metland/AUTO-GLAZE.png",
    // "ADIDAS": "/assets/metland/ADIDAS.png",
    "BANK MANDIRI": "/assets/metland/BANK-MANDIRI.png",
    // Ensure your real file name matches spelling:
    "BASKIN ROBBINS": "/assets/metland/BASKIN-ROBBINS.png",
    "BASO A FUNG": "/assets/metland/BAKSO-A-FUNG.png",
    "BATA": "/assets/metland/BATA.png",
    "BATIK KERIS": "/assets/metland/BATIK-KERIS.png",
    "BENANG JARUM": "/assets/metland/BENANG-JARUM.png",
    "BIKE & CO": "/assets/metland/BIKE&CO.png",
    "BOLDE": "/assets/metland/BOLDE.png",
    "BONIA": "/assets/metland/BONIA.png",
    "BRAHOUSE": "/assets/metland/BRAHOUSE.png",
    "BRIDGES EYEWEAR": "/assets/metland/BRIDGES-EYEWEAR.png",
    "BUTTONSCARVES": "/assets/metland/BUTTONSCARVES.png",
    "BOWLING": "/assets/metland/FUNWORLD-BOWLING.png",
    "CASIO STORE": "/assets/metland/CASIO-STORE.png",
    "CENTURY HEALTHCARE": "/assets/metland/CENTURY.png",
    "CHARLES & KEITH": "/assets/metland/CHARLES&KEITH.png",
    "CHATERAISE": "/assets/metland/CHATERAISE.png",
    "CHATIME": "/assets/metland/CHATIME.png",
    "CINEMA XXI": "/assets/metland/CINEMA-XXI.png",
    "COCO SUMER & SUPERJUICE": "/assets/metland/COCO-SUMER&SUPERJUICE.png",
    "CONVERSE": "/assets/metland/CONVERSE.png",
    "COOL KIDS": "/assets/metland/COOLKIDS.png",
    "CREPE SIGNATURE": "/assets/metland/CREPE-SIGNATURE.png",
    "CROCS": "/assets/metland/CROCS.png",
    "C&F PERFUMERY": "/assets/metland/C&F-PERFUMERY.png",
    // "COFFEE BEAN & TEA LEAF": "/assets/metland/COFFEE BEAN & TEA LEAF.png",
    // "CIAK TIAM": "/assets/metland/CIAK TIAM.png",
    "DIGIPLUS": "/assets/metland/DIGIPLUS.jpeg",
    "DIRNOSAURUS": "/assets/metland/DIRNOSAURUS.jpeg",
    "DPARIS": "/assets/metland/DPARIS.jpg",
    "DUM DUM THAI": "/assets/metland/DUM-DUM-THAI.jpg",
    "DCOST VIP": "/assets/metland/DCOST-VIP.jpg",
    "DPAX BARBERSHOP": "/assets/metland/DPAX-BARBERSHOP.jpg",
    // "DMOZE": "/assets/metland/DMOZE.jpg",
    "EASTERN KOPI TM": "/assets/metland/EASTERN-KOPI-TM.jpg",
    "EATS & CO": "/assets/metland/EATS&CO.jpg",
    "EXCELSO": "/assets/metland/EXCELSO.jpg",
    "FARMERS MARKET": "/assets/metland/FARMERS-MARKET.jpg",
    "FOSSIL": "/assets/metland/FOSSIL.jpg",
    "FUN WORLD": "/assets/metland/FUNWORLD.jpg",
    "FUNWORLD BOWLING": "/assets/metland/FUNWORLD-BOWLING.jpg",
    // "FUN&FIT": "/assets/metland/FUN&FIT.jpg",
    // "ATM BCA": "/assets/metland/ATM BCA.jpg",
    "GINO MARIANI": "/assets/metland/GINO-MARIANI.jpg",
    "GIORDANO": "/assets/metland/GIORDANO.jpg",
    "GOGO KARTING": "/assets/metland/GOGO-KARTING.jpg",
    "GOLDEN LAMIAN": "/assets/metland/GOLDEN-LAMIAN.jpg",
    "GOLDS GYM": "/assets/metland/GOLDS-GYM.jpg",
    "GRAMEDIA": "/assets/metland/GRAMEDIA.jpg",
    "GRIYA ARISTY": "/assets/metland/GRIYA-ARISTY.jpg",
    "GS SHOP": "/assets/metland/GS-SHOP.jpg",
    "GUARDIAN": "/assets/metland/GUARDIAN.jpg",
    "G-FACTORY": "/assets/metland/G-FACTORY.jpg",
    "H&M": "/assets/metland/H&M.jpg",
    "HAIRCODE SALON": "/assets/metland/HAIRCODE-SALON.jpeg",
    "HUSH PUPPIES": "/assets/metland/HUSH PUPPIES.jpeg",
    "HOP HOP": "/assets/metland/HOP-HOP.jpg",
    "HARTADINATA ABADI": "/assets/metland/HARTADINATA-ABADI.jpeg",
    "HYUNDAI": "/assets/metland/HYUNDAI.jpg",
    "IBOX": "/assets/metland/IBOX.png",
    "ICHIBAN SUSHI": "/assets/metland/ICHIBAN-SUSHI.jpg",
    "IMPERIAL KITCHEN": "/assets/metland/IMPERIAL-KITCHEN.jpg",
    "INFORMA": "/assets/metland/INFORMA.jpg",
    "IM NOT TRASH": "/assets/metland/I-NOT-TRASH.jpg",
    "JACO": "/assets/metland/JACO.jpg",
    "JENAHARA": "/assets/metland/JENAHARA.png",
    "JHONNY ANDREAN SALON": "/assets/metland/JHONNY-ANDREAN-SALON.jpg",
    "JCO DONUT&COFFEE": "/assets/metland/JCO-DONUT&COFFEE.jpg",
    "JREP": "/assets/metland/JREP.jpg",
    "KAMI IDEA": "/assets/metland/KAMI-IDEA.jpeg",
    "KASOEM": "/assets/metland/KASOEM.jpg",
    "KENES": "/assets/metland/KENES.jpg",
    "KFC": "/assets/metland/KFC.jpeg",
    "KIDZILLA": "/assets/metland/KIDZILLA.jpg",
    "KIDZ STATION": "/assets/metland/KIDZ-STATION.jpg",
    "KIMUKATSU": "/assets/metland/KIMUKATSU.jpg",
    "KLIKNKLIK": "/assets/metland/KLIKNKLIK.jpg",
    "KOBA": "/assets/metland/KOBA.jpg",
    "KOPI JANJI JIWA": "/assets/metland/KOPI-JANJI-JIWA.jpeg",
    "KRISPY KREME": "/assets/metland/KRISPY-KREME.jpeg",
    "LEVIS": "/assets/metland/LEVIS.jpg",
    "LOLYPOLY": "/assets/metland/LOLYPOLY.jpg",
    "LUMIERE": "/assets/metland/LUMIERE.jpg",
    "MAGIC PHOTO": "/assets/metland/MAGIC-PHOTO.jpeg",
    "MAKE OVER": "/assets/metland/MAKE-OVER.jpg",
    "MAKO": "/assets/metland/MAKO.jpeg",
    "MAMAROZ": "/assets/metland/MAMAROZ.jpg",
    "MARKS & SPENCER": "/assets/metland/MARKS&SPENCER.jpg",
    "MAX FASHION": "/assets/metland/MAX-FASHION.jpg",
    "MEGA WATCH": "/assets/metland/MEGA-WATCH.jpg",
    "MINIMAL": "/assets/metland/MINIMAL.jpg",
    "MINISO": "/assets/metland/MINISO.jpg",
    "MOCHI MOCHIO": "/assets/metland/MOCHI-MOCHIO.jpg",
    "MONTATO": "/assets/metland/MONTATO.jpeg",
    "OBERMAIN": "/assets/metland/OBERMAIN.jpeg",
    "OHSOME": "/assets/metland/OHSOME.jpeg",
    "OPTIK MELAWAI": "/assets/metland/OPTIK-MELAWAI.jpg",
    "OPTIK SEIS": "/assets/metland/OPTIK-SEIS.jpg",
    // "ORPIN": "/assets/metland/ORPIN.jpg",
    "OWNDAYS": "/assets/metland/OWNDAYS.jpeg",
    // "OEMAH BOTO": "/assets/metland/OEMAH BOTO.jpg",
    "PANLANDWOO": "/assets/metland/PANLANDWOO.jpeg",
    "PAN & CO": "/assets/metland/PAN&CO.jpg",
    "PAYLESS": "/assets/metland/PAYLESS.jpg",
    "PEPPER LUNCH": "/assets/metland/PEPPER-LUNCH.jpg",
    "PHO 24": "/assets/metland/PHO24.jpg",
    "PUYO": "/assets/metland/PUYO.jpg",
    "RAA CHA": "/assets/metland/RAA-CHA.jpg",
    "RANDOL": "/assets/metland/RANDOL.jpeg",
    "REJUVE": "/assets/metland/REJUVE.jpg",
    "RESOLVER": "/assets/metland/RESOLVER.jpg",
    "RICA RICO": "/assets/metland/RICA RICO.jpg",
    "ROCKSTAR ACADEMY": "/assets/metland/ROCKSTAR-ACADEMY.jpg",
    "ROPA STORE": "/assets/metland/ROPA-STORE.jpg",
    // "ROTI UNYIL VENUS": "/assets/metland/ROTI UNYIL VENUS.jpg",
    "SAMSUNG": "/assets/metland/SAMSUNG.jpg",
    "SATE KHAS SENAYAN": "/assets/metland/SATE-KHAS-SENAYAN.jpg",
    "SCOOP": "/assets/metland/SCOOP.jpeg",
    "SHABURI & KINTAN BUFFET": "/assets/metland/SHABURI&KINTAN-BUFFET.jpg",
    "SHABU HACHI": "/assets/metland/SHABU-HACHI.jpg",
    "SHAFIRA": "/assets/metland/SHAFIRA.jpg",
    "SHAKE SHAKE": "/assets/metland/SHAKE-SHAKE.jpeg",
    "SHILIN TAIWAN STREET SNACKS": "/assets/metland/SHILIN-TAIWAN-STREET-SNACKS.jpg",
    "SHIRATTO": "/assets/metland/SHIRATTO.jpg",
    "SKECHERS": "/assets/metland/SKECHERS.jpg",
    "SKIN+": "/assets/metland/SKIN+.jpg",
    "SOESLELO": "/assets/metland/SOESLELO.jpeg",
    "SOLARIA": "/assets/metland/SOLARIA.jpg",
    "SOUR SALLY": "/assets/metland/SOUR-SALLY.jpeg",
    "SPORS STATION": "/assets/metland/SPORS-STATION.jpg",
    "STACCATO": "/assets/metland/STACCATO.jpg",
    "STARBUCKS": "/assets/metland/STARBUCKS.jpg",
    "STARLEAD": "/assets/metland/STARLEAD.jpeg",
    "STAR TIME": "/assets/metland/STAR-TIME.jpg",
    "STEAK 21": "/assets/metland/STEAK-21.jpg",
    "SWATCH": "/assets/metland/SWATCH.jpg",
    "TAWAN": "/assets/metland/TAWAN.jpg",
    "THAI STREET": "/assets/metland/THAI-STREET.jpg",
    "THE BODY SHOP": "/assets/metland/THE-BODY-SHOP.jpg",
    "THE COFFEE BEAN & TEA LEAF": "/assets/metland/THE-COFFEE-BEAN&TEA-LEAF.jpg",
    "THE EXECUTIVE": "/assets/metland/THE-EXECUTIVE.jpg",
    "THE GOOD PROTEIN": "/assets/metland/THE-GOOD-PROTEIN.jpg",
    // "THE LITTLE THINGS SHE NEEDS": "/assets/metland/THE LITTLE THINGS SHE NEEDS.jpg",
    "TOYS KINGDOM": "/assets/metland/TOYS-KINGDOM.jpg",
    // "TEH KOTJOK": "/assets/metland/TEH KOTJOK.jpg",
    // "THE PIER": "/assets/metland/THE PIER.jpg",
    "UNIQLO": "/assets/metland/UNIQLO.jpg",
    "URBAN & CO": "/assets/metland/URBAN&CO.jpg",
    "WACOOL": "/assets/metland/WACOAL.jpg", // make sure this name matches your real file
    "WATSONS": "/assets/metland/WATSONS.jpg",
    "XIAOMI STORE": "/assets/metland/XIAOMI-STORE.jpg",
    "YAKINIKU LIKE": "/assets/metland/YAKINIKU-LIKE.jpeg",
    "YAMAHA SMILE MUSIC": "/assets/metland/YAMAHA-SMILE-MUSIC.jpg",
    "YOSHINOYA": "/assets/metland/YOSHINOYA.png",
    "ZENBU": "/assets/metland/ZENBU.jpg"
  };

  // 2) Optional: fix common model outputs → your canonical keys
  const FIXUPS = {
    "JCO DONUT & COFFEE": "JCO DONUT&COFFEE",
    "J.CO DONUT & COFFEE": "JCO DONUT&COFFEE",
    "J.CO DONUT&COFFEE": "JCO DONUT&COFFEE",
    "FUN WORLD BOWLING": "FUNWORLD BOWLING",
    "ATM-PANIN": "ATM PANIN",
    "BASKIN-ROBBINS": "BASKIN ROBBINS"
  };

  function normalizeKey(key) {
    if (!key) return key;
    const k = key.trim();
    return FIXUPS[k] || k;
  }

  // 3) Build absolute HTTPS URL (Vercel public assets)
  function toAbsoluteUrl(req, relPath) {
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host  = req.headers["x-forwarded-host"] || req.headers.host;
    // encode each segment so spaces, +, & are safe
    const enc = relPath
      .split("/")
      .map((seg) => encodeURIComponent(seg))
      .join("/")
      .replace(/^%2F/, "/");
    return `${proto}://${host}${enc}`;
  }

  /**
   * FINAL: resolveTenantImageUrl
   * - NO PNG GUESSING. We only return a URL if the key exists in RAW_MAP.
   */
  function resolveTenantImageUrl(req, key) {
    if (!key || typeof key !== "string") return null;
    const k = normalizeKey(key);
    const relPath = RAW_MAP[k];
    if (!relPath) return null; // not found in your map
    return toAbsoluteUrl(req, relPath);
  }

  module.exports = { resolveTenantImageUrl, RAW_MAP };
