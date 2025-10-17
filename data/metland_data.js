// data/metland_data.js
const tenantDatabase = `
AZKO - Lt2 unit 11,12
AFRO - Lt1
AGM (American Giant Mattress) - LG2
AION - UG
ANDREW SHOES - UG unit 10
ARISTY WEDDING - Lt4
ARNOLD PALMER - Lt1
ATM BNI - LG1
ATM BRI - LG1
ATM CIMB NIAGA - LG1
ATM DANAMON - LG1
ATM MEGA - LG1
ATM OCBC NISP - LG1
ATM PANIN - LG1
AUTO GLAZE - LG1
ADIDAS -
BANK MANDIRI - UG unit 20
BASKIN ROBBINS - Lt1 unit 25b
BASO A FUNG - Lt3
BATA - Lt1 unit 7,8
BATIK KERIS - Lt1
BENANG JARUM - UG unit 2,3
BIKE & CO - LG2
BOLDE - LG2
BONIA - GF unit 2
BRAHOUSE - Lt2
BRIDGES EYEWEAR - Lt1
BUTTONSCARVES - UG unit 2,3
BOWLING -
CASIO STORE - UG
CENTURY HEALTHCARE - LG2 unit 5
CHARLES & KEITH - GF unit 24
CHATERAISE - LG2
CHATIME - LG2 unit 4
CINEMA XXI - Lt3 unit 1
COCO SUMER & SUPERJUICE - LG2
CONVERSE - UG unit 5
COOL KIDS - Lt2 unit 8
CREPE SIGNATURE - LG2
CROCS - Lt1 unit 17A
C&F PERFUMERY - LG2 unit 2A
COFFEE BEAN & TEA LEAF -
CIAK TIAM -
DIGIPLUS - Upper Ground
DIRNOSAURUS - Lt2
DPARIS -
DUM DUM THAI - LG unit 4A
DCOST VIP - Lt1 unit 21
DPAX BARBERSHOP - LG unit 1B
DMOZE -
EASTERN KOPI TM - Lt3 unit 18
EATS & CO - Lt3 unit 7
EXCELSO - GF unit 16
FARMERS MARKET - LG2 unit 3
FOSSIL - GF unit 6
FUN WORLD - Lt2,Lt3
BOWLING - Lt2
FUN&FIT -
ATM BCA - LG unit 6b
GINO MARIANI - UG
GIORDANO - GF unit 21,22,23
GOGO KARTING - Lt2
GOLDEN LAMIAN - L1
GOLDS GYM - Lt4
GRAMEDIA - LG2
GRIYA ARISTY - Lt4
GS SHOP - Lt2 no 17
GUARDIAN - LG2 no 3A
G-FACTORY - Lt1 no 24
H&M - GF
HAIRCODE SALON - Lt2 unit 5
HUSH PUPPIES - UG no 11A
HOP HOP - Lt3 unit 15
HARTADINATA ABADI - GF unit 1
HYUNDAI - Lt1
IBOX - UG
ICHIBAN SUSHI - Lt3
IMPERIAL KITCHEN - UG unit 31
INFORMA - Lt1
IM NOT TRASH - Lt2
JACO - LG2 unit 8
JENAHARA - UG
JHONNY ANDREAN SALON - Lt2 unit 3
JCO DONUT&COFFEE - GF unit 17
JREP - Lt1 unit 6
KAMI IDEA - UG
KASOEM - Lt1
KENES - UG
KFC - Lt3 unit 8b
KIDZILLA - Lt2 unit 10A
KIDZ STATION - Lt2 unit 18
KIMUKATSU - GF unit 25
KLIKNKLIK - Lt1
KOBA - Lt2 unit 2
KOPI JANJI JIWA - UG unit 32
KRISPY KREME - LG2
LEVIS - GF unit 13,14
LOLYPOLY - Lt2 unit 19A
LUMIERE - Lt3
MAGIC PHOTO - Lt1
MAKE OVER - GF unit 16
MAKO - GF unit 20
MAMAROZ - LG2
MARKS & SPENCER - GF unit 15B
MAX FASHION - UG
MEGA WATCH - Lt1 no 10
MINIMAL - UG unit 18,19
MINISO - UG unit 29
MOCHI MOCHIO - LG2
MONTATO - LG2
OBERMAIN - UG unit 6
OHSOME - GF
OPTIK MELAWAI - UG unit 27
OPTIK SEIS - UG unit 11B
ORPIN - Lt2
OWNDAYS - Lt1 unit 14
OEMAH BOTO -
PANLANDWOO - UG
PAN & CO - Lt2
PAYLESS - Lt1 unit 16
PEPPER LUNCH - Lt2 unit 23
PHO 24 - Lt3 unit 8A
PUYO - LG2 unit 3
RAA CHA - Lt1 unit 27
RANDOL - Lt2
REJUVE - LG2
RESOLVER - LG2
RICA RICO - LG2
ROCKSTAR ACADEMY - LG2
ROPA STORE - Lt2
ROTI UNYIL VENUS -
SAMSUNG - Lt2 unit 4
SATE KHAS SENAYAN - UG unit 28
SCOOP - UG unit 23
SHABURI & KINTAN BUFFET - UG
SHABU HACHI - Lt3
SHAFIRA - Lt1 unit 4
SHAKE SHAKE - LG2
SHILIN TAIWAN STREET SNACKS - Lt1 unit 30
SHIRATTO - LG2
SKECHERS - Lt1 unit 15
SKIN+ - LG2
SOESLELO - UG
SOLARIA - Lt2 unit 21,22
SOUR SALLY - Lt1
SPORS STATION - Lt1 unit 17
STACCATO - GF unit 12
STARBUCKS - GF unit 26
STARLEAD - UG
STAR TIME - UG
STEAK 21 - Lt1 unit 26
SWATCH - GF unit 15A
TAWAN - Lt3 unit 9,10
THAI STREET - Lt1 unit 1
THE BODY SHOP - LG2 unit 2B
THE COFFEE BEAN & TEA LEAF - GF unit 27,28
THE EXECUTIVE - UG unit 17
THE GOOD PROTEIN - Lt4
THE LITTLE THINGS SHE NEEDS - Lt1 unit 23
TOYS KINGDOM - Lt 2 unit 13
TEH KOTJOK -
THE PIER -
UNIQLO - GF
URBAN & CO - Upper Ground
WACOOL - Lt1 unit 5
WATSONS - LG2 unit 9,10
XIAOMI STORE - UG
YAKINIKU LIKE - GF
YAMAHA SMILE MUSIC - LG2 unit 1A , 11
YOSHINOYA - Lt1 unit 29
ZENBU - UG
`;

const Toilet = `
- Toilet Lantai LG2 = Samping Rockstar Academy
- Toilet Lantai LG1 = Samping Tenant Makeover, Samping Kimukatsu, Area mall extension
- Toilet Lantai UG = Samping tenant Oh!Some, samping tenan Optik Melawai, didalam 
area Toba Ballroom
- Toilet Lantai 1 = Samping tenant Batik Keris, samping tenant Baskin Robbins
- Toilet Lantai 2 = Samping tenant Kidzlandia, samping tenant Pan & Co
- Toilet Lantai 3 = Samping tenant Cinema XXI, samping tenant KFC
- Toilet Lantai 4 = Disekitar Lift gedung parkir, didalam area Kapuas Ballroom
`;

const Parkir = `
- Basement LG1,LG2
- Gedung Parkir = P1 lantai UG
- Gedung Parkir = P3 lantai Lantai 1
- Gedung Parkir = P5 lantai Lantai 2
- Gedung Parkir = P7 lantai Lantai 3
- Gedung Parkir = P9 lantai Lantai 4
- Charging Station tersedia di basement lantai LG1 dan gedung parkir lantai P1 
`;

const NursingRoom = `
- Lantai LG2 = Samping tenant Rockstar Academy
- Lantai 2 = Samping tenant Kidzlandia
`;

const TarifParkir = `
- Mobil : enam ribu rupiah untuk 1 jam pertama dan tiga ribu rupiah setiap jam berikutnya
- Motor : tiga ribu rupiah Untuk 1 jam pertama dan dua ribu rupiah setiap jam berikutnya, Maksimal 
sembilan belas ribu rupiah
`;

const PromoProgram = `SAVE BIG and STAY CHIC : Setiap belanja minimal dua ratus ribu rupiah di tenant F&B dapat E-voucher seratus ribu rupiah (berlaku di H&M, MAX Fashions, The Little Things She Needs).
LUXURY SHOPPING, PRECIOUS REWARDS : Top Spender bulanan (minimal seratus juta rupiah) mendapat logam mulia lima gram.`;

const Bazaar = `
1 - 30 September 2025 : Kids Icon (LG2)
1 - 28 September 2025 : Gramedia (LG2)
1 - 21 September 2025 : Transmarco (GF)
1 - 30 September 2025 : VR FUN (GF)
1 - 30 September 2025 : Informa (GF)
15 - 30 September 2025 : Minimal (GF)
1 - 30 September 2025 : Lena Batik (GF)
`;

module.exports = {
  tenantDatabase,
  Toilet,
  Parkir,
  NursingRoom,
  TarifParkir,
  PromoProgram,
  Bazaar,
};
