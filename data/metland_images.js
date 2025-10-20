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
    "DIGIPLUS": "/assets/metland/DIGIPLUS.png",
    "DIRNOSAURUS": "/assets/metland/DIRNOSAURUS.png",
    "DPARIS": "/assets/metland/DPARIS.png",
    "DUM DUM THAI": "/assets/metland/DUM-DUM-THAI.png",
    "DCOST VIP": "/assets/metland/DCOST-VIP.png",
    "DPAX BARBERSHOP": "/assets/metland/DPAX-BARBERSHOP.png",
    // "DMOZE": "/assets/metland/DMOZE.png",
    "EASTERN KOPI TM": "/assets/metland/EASTERN-KOPI-TM.png",
    "EATS & CO": "/assets/metland/EATS&CO.png",
    "EXCELSO": "/assets/metland/EXCELSO.png",
    "FARMERS MARKET": "/assets/metland/FARMERS-MARKET.png",
    "FOSSIL": "/assets/metland/FOSSIL.png",
    "FUN WORLD": "/assets/metland/FUNWORLD.png",
    "FUNWORLD BOWLING": "/assets/metland/FUNWORLD-BOWLING.png",
    // "FUN&FIT": "/assets/metland/FUN&FIT.png",
    // "ATM BCA": "/assets/metland/ATM BCA.png",
    "GINO MARIANI": "/assets/metland/GINO-MARIANI.png",
    "GIORDANO": "/assets/metland/GIORDANO.png",
    "GOGO KARTING": "/assets/metland/GOGO-KARTING.png",
    "GOLDEN LAMIAN": "/assets/metland/GOLDEN-LAMIAN.png",
    "GOLDS GYM": "/assets/metland/GOLDS-GYM.png",
    "GRAMEDIA": "/assets/metland/GRAMEDIA.png",
    "GRIYA ARISTY": "/assets/metland/GRIYA-ARISTY.png",
    "GS SHOP": "/assets/metland/GS-SHOP.png",
    "GUARDIAN": "/assets/metland/GUARDIAN.png",
    "G-FACTORY": "/assets/metland/G-FACTORY.png",
    "H&M": "/assets/metland/H&M.png",
    "HAIRCODE SALON": "/assets/metland/HAIRCODE-SALON.png",
    "HUSH PUPPIES": "/assets/metland/HUSH PUPPIES.png",
    "HOP HOP": "/assets/metland/HOP-HOP.png",
    "HARTADINATA ABADI": "/assets/metland/HARTADINATA-ABADI.png",
    "HYUNDAI": "/assets/metland/HYUNDAI.png",
    "IBOX": "/assets/metland/IBOX.png",
    "ICHIBAN SUSHI": "/assets/metland/ICHIBAN-SUSHI.png",
    "IMPERIAL KITCHEN": "/assets/metland/IMPERIAL-KITCHEN.png",
    "INFORMA": "/assets/metland/INFORMA.png",
    "IM NOT TRASH": "/assets/metland/I-NOT-TRASH.png",
    "JACO": "/assets/metland/JACO.png",
    "JENAHARA": "/assets/metland/JENAHARA.png",
    "JHONNY ANDREAN SALON": "/assets/metland/JHONNY-ANDREAN-SALON.png",
    "JCO DONUT&COFFEE": "/assets/metland/JCO-DONUT&COFFEE.png",
    "JREP": "/assets/metland/JREP.png",
    "KAMI IDEA": "/assets/metland/KAMI-IDEA.png",
    "KASOEM": "/assets/metland/KASOEM.png",
    "KENES": "/assets/metland/KENES.png",
    "KFC": "/assets/metland/KFC.png",
    "KIDZILLA": "/assets/metland/KIDZILLA.png",
    "KIDZ STATION": "/assets/metland/KIDZ-STATION.png",
    "KIMUKATSU": "/assets/metland/KIMUKATSU.png",
    "KLIKNKLIK": "/assets/metland/KLIKNKLIK.png",
    "KOBA": "/assets/metland/KOBA.png",
    "KOPI JANJI JIWA": "/assets/metland/KOPI-JANJI-JIWA.png",
    "KRISPY KREME": "/assets/metland/KRISPY-KREME.png",
    "LEVIS": "/assets/metland/LEVIS.png",
    "LOLYPOLY": "/assets/metland/LOLYPOLY.png",
    "LUMIERE": "/assets/metland/LUMIERE.png",
    "MAGIC PHOTO": "/assets/metland/MAGIC-PHOTO.png",
    "MAKE OVER": "/assets/metland/MAKE-OVER.png",
    "MAKO": "/assets/metland/MAKO.png",
    "MAMAROZ": "/assets/metland/MAMAROZ.png",
    "MARKS & SPENCER": "/assets/metland/MARKS&SPENCER.png",
    "MAX FASHION": "/assets/metland/MAX-FASHION.png",
    "MEGA WATCH": "/assets/metland/MEGA-WATCH.png",
    "MINIMAL": "/assets/metland/MINIMAL.png",
    "MINISO": "/assets/metland/MINISO.png",
    "MOCHI MOCHIO": "/assets/metland/MOCHI-MOCHIO.png",
    "MONTATO": "/assets/metland/MONTATO.png",
    "OBERMAIN": "/assets/metland/OBERMAIN.png",
    "OHSOME": "/assets/metland/OHSOME.png",
    "OPTIK MELAWAI": "/assets/metland/OPTIK-MELAWAI.png",
    "OPTIK SEIS": "/assets/metland/OPTIK-SEIS.png",
    // "ORPIN": "/assets/metland/ORPIN.png",
    "OWNDAYS": "/assets/metland/OWNDAYS.png",
    // "OEMAH BOTO": "/assets/metland/OEMAH BOTO.png",
    "PANLANDWOO": "/assets/metland/PANLANDWOO.png",
    "PAN & CO": "/assets/metland/PAN&CO.png",
    "PAYLESS": "/assets/metland/PAYLESS.png",
    "PEPPER LUNCH": "/assets/metland/PEPPER-LUNCH.png",
    "PHO 24": "/assets/metland/PHO24.png",
    "PUYO": "/assets/metland/PUYO.png",
    "RAA CHA": "/assets/metland/RAA-CHA.png",
    "RANDOL": "/assets/metland/RANDOL.png",
    "REJUVE": "/assets/metland/REJUVE.png",
    "RESOLVER": "/assets/metland/RESOLVER.png",
    "RICA RICO": "/assets/metland/RICA RICO.png",
    "ROCKSTAR ACADEMY": "/assets/metland/ROCKSTAR-ACADEMY.png",
    "ROPA STORE": "/assets/metland/ROPA-STORE.png",
    // "ROTI UNYIL VENUS": "/assets/metland/ROTI UNYIL VENUS.png",
    "SAMSUNG": "/assets/metland/SAMSUNG.png",
    "SATE KHAS SENAYAN": "/assets/metland/SATE-KHAS-SENAYAN.png",
    "SCOOP": "/assets/metland/SCOOP.png",
    "SHABURI & KINTAN BUFFET": "/assets/metland/SHABURI&KINTAN-BUFFET.png",
    "SHABU HACHI": "/assets/metland/SHABU-HACHI.png",
    "SHAFIRA": "/assets/metland/SHAFIRA.png",
    "SHAKE SHAKE": "/assets/metland/SHAKE-SHAKE.png",
    "SHILIN TAIWAN STREET SNACKS": "/assets/metland/SHILIN-TAIWAN-STREET-SNACKS.png",
    "SHIRATTO": "/assets/metland/SHIRATTO.png",
    "SKECHERS": "/assets/metland/SKECHERS.png",
    "SKIN+": "/assets/metland/SKIN+.png",
    "SOESLELO": "/assets/metland/SOESLELO.png",
    "SOLARIA": "/assets/metland/SOLARIA.png",
    "SOUR SALLY": "/assets/metland/SOUR-SALLY.png",
    "SPORS STATION": "/assets/metland/SPORS-STATION.png",
    "STACCATO": "/assets/metland/STACCATO.png",
    "STARBUCKS": "/assets/metland/STARBUCKS.png",
    "STARLEAD": "/assets/metland/STARLEAD.png",
    "STAR TIME": "/assets/metland/STAR-TIME.png",
    "STEAK 21": "/assets/metland/STEAK-21.png",
    "SWATCH": "/assets/metland/SWATCH.png",
    "TAWAN": "/assets/metland/TAWAN.png",
    "THAI STREET": "/assets/metland/THAI-STREET.png",
    "THE BODY SHOP": "/assets/metland/THE-BODY-SHOP.png",
    "THE COFFEE BEAN & TEA LEAF": "/assets/metland/THE-COFFEE-BEAN&TEA-LEAF.png",
    "THE EXECUTIVE": "/assets/metland/THE-EXECUTIVE.png",
    "THE GOOD PROTEIN": "/assets/metland/THE-GOOD-PROTEIN.png",
    // "THE LITTLE THINGS SHE NEEDS": "/assets/metland/THE LITTLE THINGS SHE NEEDS.png",
    "TOYS KINGDOM": "/assets/metland/TOYS-KINGDOM.png",
    // "TEH KOTJOK": "/assets/metland/TEH KOTJOK.png",
    // "THE PIER": "/assets/metland/THE PIER.png",
    "UNIQLO": "/assets/metland/UNIQLO.png",
    "URBAN & CO": "/assets/metland/URBAN&CO.png",
    "WACOOL": "/assets/metland/WACOAL.png", // make sure this name matches your real file
    "WATSONS": "/assets/metland/WATSONS.png",
    "XIAOMI STORE": "/assets/metland/XIAOMI-STORE.png",
    "YAKINIKU LIKE": "/assets/metland/YAKINIKU-LIKE.png",
    "YAMAHA SMILE MUSIC": "/assets/metland/YAMAHA-SMILE-MUSIC.png",
    "YOSHINOYA": "/assets/metland/YOSHINOYA.png",
    "ZENBU": "/assets/metland/ZENBU.png"
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
