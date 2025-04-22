// Import required dependencies
const express = require("express");
const line = require("@line/bot-sdk");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { title } = require("process");
require("dotenv").config(); // To load environment variables from a .env file

// Initialize the express application
const app = express();

// LINE Bot Configuration
const config = {
  channelAccessToken: process.env.token, // Your LINE bot's channel access token
  channelSecret: process.env.secretcode, // Your LINE bot's channel secret
};

// OpenAI API Configuration
const OPENAI_API_KEY = process.env.openAI;
const openaiEndpoint = "https://api.openai.com/v1/chat/completions";

// Initialize the LINE client
const client = new line.Client(config);

// Use JSON middleware to parse incoming requests
app.use(express.json());

const keywordResponses = {
  FIFASTRA: {
    title: "FIFASTRA",
    text: "Pembiayaan kendaraan roda dua baru dan bekas dengan proses mudah dan cepat.",
    // image: "../image/image1.jpg",
  },
  SPEKTRA: {
    title: "SPEKTRA",
    text: "Pembiayaan barang elektronik, gadget, dan perabot rumah tangga.",
    // image: "../image/image2.jepg",
  },
  DANASTRA: {
    title: "DANASTRA",
    text: "Pembiayaan multiguna untuk berbagai kebutuhan seperti pendidikan dan modal usaha.",
    // image: "../image/image3.jpg",
  },
  BranchList: {
    title: "Branch List",
    text: "Berikut adalah daftar cabang FIFGROUP yang ada di Indonesia:\n\n" +
      [
        "Sukabumi", "Pekanbaru", "Tegal", "Lampung", "Karawang", "Banyuwangi", "Lamongan",
        "Samarinda", "Sidoarjo", "Makassar", "Bandar Jaya", "Kepanjen", "Jata 2", "Jata 1",
        "Bogor", "Kudus", "Purwakarta", "Semarang", "Probolinggo", "Jata 3", "Surabaya",
        "Madiun", "Palembang", "Malang", "Denpasar", "Bekasi", "Yogyakarta", "Medan",
        "Bandung", "Cimahi", "Solo", "Martapura", "Bojonegoro", "Cilegon", "Manado",
        "Mataram", "Pematang Siantar", "Pontianak", "Purwokerto", "Rangkasbitung"
      ].map(city => `- ${city}`).join("\n"),
  },
  SupportingBranch: {
    title: "Supporting Branch",
    text: "Berikut adalah daftar cabang pendukung FIFGROUP di Indonesia:\n\n" +
      [
        "Bandung", "Bekasi", "Depok", "Jakarta", "Tangerang", "Semarang", "Surabaya",
        "Lampung", "Palembang", "Metro", "Lampung Tengah", "Bogor", "Karawang",
        "Kab. Bekasi", "Cikampek", "Subang", "Malang", "Batu", "Medan", "Binjai",
        "Lubuk Pakam", "Gresik", "Mojokerto", "Lamongan", "Jombang", "Samarinda",
        "Balikpapan", "Tenggarong", "Tegal", "Brebes", "Pekalongan", "Pemalang",
        "Yogyakarta", "Solo", "Magelang", "Jember", "Banyuwangi", "Situbondo",
        "Kediri", "Madiun", "Blitar", "Tulungagung", "Nganjuk", "Kudus", "Jepara",
        "Pati", "Purwodadi", "Makassar", "Maros", "Gowa", "Pekanbaru", "Ujung Batu",
        "Pangkalan Kerinci", "Probolinggo", "Lumajang", "Pasuruan", "Bandar Jaya",
        "Pringsewu", "Metro", "Pringsewu"
      ].map(city => `- ${city}`).join("\n"),
  },
  SectorFinatra: {
    "Pengecer Berbagai Barang (Makanan, Minuman, Tembakau)": {
      title: "Pengecer Berbagai Barang",
      text: "Didominasi oleh makanan, minuman, dan tembakau.",
      percentage: "33.84%",
    },
    "Pengecer Komoditi Lainnya": {
      title: "Pengecer Komoditi Lainnya",
      text: "Bukan makanan, minuman, atau tembakau.",
      percentage: "16.95%",
    },
    "Penyediaan Makan Minum Lainnya": {
      title: "Penyediaan Makan Minum",
      text: "Sektor penyediaan makanan dan minuman lainnya.",
      percentage: "14.09%",
    },
    "Jasa Layanan Profesional": {
      title: "Jasa Layanan Profesional",
      text: "Layanan profesional dalam berbagai bidang.",
      percentage: "9.94%",
    },
    "Perkebunan Buah-Buahan Penghasil Minyak": {
      title: "Perkebunan Buah",
      text: "Perkebunan buah-buahan yang menghasilkan minyak.",
      percentage: "3.77%",
    },
    "Tekstil dan Pakaian": {
      title: "Tekstil dan Pakaian",
      text: "Sektor tekstil dan pakaian.",
      percentage: "3.26%",
    },
    "Persewaan Lain-Lain": {
      title: "Persewaan Lain-Lain",
      text: "Layanan persewaan berbagai barang.",
      percentage: "3.03%",
    },
    "Produk Retail Lainnya": {
      title: "Produk Retail Lainnya",
      text: "Sektor produk retail yang beragam.",
      percentage: "2.99%",
    },
    "Peternakan Sapi dan Kerbau": {
      title: "Peternakan Sapi dan Kerbau",
      text: "Sektor peternakan sapi dan kerbau.",
      percentage: "2.22%",
    },
    "Pengecer Bahan Konstruksi": {
      title: "Pengecer Bahan Konstruksi",
      text: "Sektor pengecer bahan bangunan dan konstruksi.",
      percentage: "2.20%",
    },
    "Peternakan Domba dan Kambing": {
      title: "Peternakan Domba dan Kambing",
      text: "Sektor peternakan domba dan kambing.",
      percentage: "2.05%",
    },
    "Peternakan Unggas": {
      title: "Peternakan Unggas",
      text: "Sektor peternakan unggas.",
      percentage: "1.43%",
    },
    "Pemutaran dan Pergudangan": {
      title: "Pemutaran dan Pergudangan",
      text: "Layanan pergudangan dan penyimpanan.",
      percentage: "1.05%",
    },
    "Pengecer Suku Cadang dan Alat Transportasi": {
      title: "Pengecer Suku Cadang",
      text: "Termasuk alat-alat transportasi.",
      percentage: "0.72%",
    },
    "Alat Tulis dan Peralatan": {
      title: "Alat Tulis dan Peralatan",
      text: "Sektor penjualan alat tulis dan peralatan kantor.",
      percentage: "0.45%",
    },
    "Persewaan Alat Transportasi Darat": {
      title: "Persewaan Alat Transportasi",
      text: "Sewa kendaraan darat.",
      percentage: "0.38%",
    },
    "Hotel": {
      title: "Hotel",
      text: "Sektor perhotelan.",
      percentage: "0.34%",
    },
    "Persewaan Mesin Pertanian dan Peralatannya": {
      title: "Persewaan Mesin Pertanian",
      text: "Sewa alat dan mesin pertanian.",
      percentage: "0.32%",
    },
    "Perumahan": {
      title: "Perumahan",
      text: "Sektor properti dan perumahan.",
      percentage: "0.30%",
    },
    "Transportasi Non-Penumpang": {
      title: "Transportasi Non-Penumpang",
      text: "Transportasi untuk barang atau logistik.",
      percentage: "0.26%",
    },
    "Transportasi Penumpang dan Perjalanan": {
      title: "Transportasi Penumpang",
      text: "Sektor transportasi dan perjalanan.",
      percentage: "0.21%",
    },
    "Peternakan Babi": {
      title: "Peternakan Babi",
      text: "Sektor peternakan babi.",
      percentage: "0.21%",
    },
  },
};

// Function to interact with OpenAI API
async function sendToOpenAI(prompt) {
  try {
    //khusus alvin
    if (prompt.toLowerCase().includes("input")) {
      return "I don't know this guy.";
    }

    const context = `
    Anda adalah chatbot informasi untuk FIF Astra dan selalu berbicara dalam bahasa Indonesia. Anda juga perempuan jadi bersikap seperti perempuan
    Berikut adalah informasi referensi yang harus selalu Anda gunakan dalam menjawab pertanyaan:

    //UMUM
    - **Didirikan**: Berdiri sejak tahun 1989 untuk memberikan layanan pembiayaan kendaraan bermotor kepada masyarakat Indonesia.
    - **Prestasi**: FIF Group telah meraih berbagai penghargaan atas layanan keuangan yang inovatif dan kepuasan pelanggan.
    - **Visi**: Menjadi pemimpin industri yang dikagumi secara nasional
    - **Misi**: Membawa kehidupan yang lebih baik untuk masyarakat
    - **Nilai-nilai**: Teamwork, Excellence, Integrity, dan Microfinancing
    - **Tagline**: "One FIFGROUP to be one"

    //LAYANAN FIFGROUP
    - **FIFASTRA**: Pembiayaan kendaraan roda dua baru dan bekas dengan proses mudah dan cepat.
    - **SPEKTRA**: Pembiayaan barang elektronik, gadget, dan perabot rumah tangga.
    - **DANASTRA**: Pembiayaan multiguna untuk berbagai kebutuhan seperti pendidikan, renovasi rumah, dan modal usaha.
    - **AMITRA**: Pembiayaan syariah untuk perjalanan ibadah seperti Umroh dan Haji.
    - **FINATRA**: layanan pembiayaan dari FIFGROUP yang fokus pada pendanaan untuk UMKM dan pengusaha mikro.

    //INFORMASI FIFGROUP
    - **Instagram**: Instagram kami: https://www.instagram.com/growingatfifgroup/
    - **LinkedIn**: LinkedIn kami: https://www.linkedin.com/company/pt.-federal-international-finance
    - **Youtube**: Youtube kami: https://www.youtube.com/@growingatfifgroup
    - **Website**: Website kami: https://www.fifgroup.co.id
    - **Whatsapp** :
      - +62 21-769-8899
      - +62 21-759-05599

    //PENCAPAIAN FIFGROUP
    - **Mitra**: 5200+ mitra bisnis
    - **Kantor Cabang**: 243 Kantor Cabang
    - **Karyawan**: 14.279 total karyawan
    - **Kontrak**: 3.812.576 kontrak aktif
    - **Customer**: 19 juta ++ customer
    
     // FINATRA - Produk Pembiayaan FIFGROUP
    - **Apa itu FINATRA?**: Finatra adalah layanan pembiayaan dari FIFGROUP yang fokus pada pendanaan untuk UMKM dan pengusaha mikro.

    - **Tujuan**: Memberikan akses keuangan yang mudah dan fleksibel bagi UMKM untuk mendukung pertumbuhan bisnis UMKM.

    - **Pencapaian Finatra**:
        - Kontribusi laba bersih sebesar 16.1% dari seluruh perusahaan pembiayaan
        - Kontribusi asset 7.5% dari total asset selutuh perusahaan pembiayaan

    - **Total Asset** : 1.355 Triliun
    - **Total Kontrak** : 22.807 Unit

    - **Jenis Pembiayaan**:
      - **Finatra Modal Usaha**: Pembiayaan modal kerja bagi pemilik usaha mikro dengan pencairan dana cepat.
      - **Finatra Investasi**: Pembiayaan untuk pengembangan usaha, termasuk pembelian aset seperti peralatan dan kendaraan operasional.

    - **Target Sektor**
      - Grosir, Tekstil & Pakaian
      - Suku Cadang & Perbaikan Kendaraan
      - Restoran
      - Penyewaan Peralatan Transportasi Darat
      - Pertanian
          
    - **Keunggulan FINATRA**:
      - Proses pengajuan mudah dan cepat.
      - Mendapat 100% yang pencairan.
      - Scoring konsumen akurat.
      - Mudah bertransaksi.
      - Proses pencairan cepat.
      - Top up mudah
      - Pengalaman dan reputasi FIFGROUP di bidang pembiayaan.
      - Terintegrasi secara digital.  

    - **Syarat Pengajuan FINATRA**:
      - Warga Negara Indonesia (WNI) berusia minimal 21 tahun.
      - Memiliki usaha yang sudah berjalan minimal 1 tahun.
      - Dokumen yang diperlukan: KTP, NPWP, SIUP/TDP, dan dokumen pendukung lainnya.

    // MANFAAT PRODUK FINATRA
    - Membantu pengusaha mikro berkembang dengan akses pembiayaan yang lebih mudah.
    - Mendukung pertumbuhan ekonomi lokal dengan memberikan solusi keuangan bagi UMKM.
    - Memberikan solusi pembiayaan dengan bunga kompetitif dan proses persetujuan cepat.

    // CARA PENGAJUAN FINATRA
    - Pengajuan bisa dilakukan secara online melalui aplikasi FIFGROUP atau langsung di cabang terdekat.
    - Proses verifikasi dan pencairan dana dalam waktu singkat.
    - Pembayaran cicilan dapat dilakukan dengan berbagai metode, termasuk mobile banking dan e-wallet.

    // MAIN BRANCH FINATRA
    - Branch FIFGROUP Finatra terletak diberbagai lokasi, jika ingin melihat lebih lengkap, ketik "branch list"

    // SEKTOR Finatra
    - Persebaran sektor finatra berupa hotel, pedagang besar dan ritel, pertanian, peternakan, perumahan, transportasi dan pergudangan. untuk lebih lengkapnya ketik "sector list"








    
    //STRUKTUR ORGANISASI
    - **Manajemen FIF Group**: Tim eksekutif yang mengelola dan mengembangkan bisnis FIF Group.
    - **Divisi Layanan**: Fokus pada inovasi layanan pelanggan dan pengembangan produk.
    - **Divisi Keuangan**: Mengelola aspek keuangan dan investasi perusahaan.
    - **Divisi Teknologi Informasi**: Mengembangkan solusi digital untuk meningkatkan layanan FIF Group.
    - **Divisi Sumber Daya Manusia**: Membangun dan mengembangkan tenaga kerja profesional di FIF Group.

    //ACARA & PROGRAM
    - **FIFGROUP GREBEG**: Program promo pembiayaan yang diadakan di berbagai daerah di Indonesia.
    - **FIFGROUP PEDULI**: Program CSR untuk memberikan bantuan sosial kepada masyarakat yang membutuhkan.
    - **FIFGROUP FESTIVAL**: Event promosi besar dengan berbagai penawaran menarik bagi pelanggan.
    - **TRAINING & PELATIHAN**: Pelatihan untuk karyawan dan mitra guna meningkatkan kualitas layanan.

    //PROSES PEMBIAYAAN
    - **Pengajuan Kredit**: Ajukan pembiayaan secara online atau langsung di cabang terdekat.
    - **Persetujuan & Verifikasi**: Proses verifikasi cepat dengan analisis kredit yang transparan.
    - **Pencairan Dana**: Dana akan dicairkan setelah proses administrasi selesai.
    - **Pembayaran Cicilan**: Pembayaran dapat dilakukan melalui berbagai metode, termasuk mobile banking dan e-wallet.
    - **Penyelesaian Kredit**: Pelunasan dapat dilakukan sesuai dengan jangka waktu yang dipilih.

    //FAQ
    - **Bagaimana cara mengajukan pembiayaan?**
      Anda dapat mengajukan pembiayaan melalui aplikasi FIFGROUP, situs web resmi, atau datang langsung ke kantor cabang terdekat.

    - **Berapa lama proses persetujuan kredit?**
      Proses persetujuan umumnya memakan waktu 1-3 hari kerja setelah semua dokumen lengkap diterima.

    - **Apa saja syarat untuk mengajukan pembiayaan kendaraan?**
      Syarat utama termasuk KTP, slip gaji, dan dokumen pendukung lainnya sesuai dengan jenis pembiayaan yang diajukan.

    - **Bagaimana jika saya mengalami kesulitan dalam pembayaran cicilan?**
      Jika mengalami kendala dalam pembayaran, segera hubungi layanan pelanggan FIFGROUP untuk mendapatkan solusi terbaik.

    - **Apakah FIFGROUP memiliki layanan syariah?**
      Ya, FIFGROUP memiliki layanan syariah melalui AMITRA untuk pembiayaan berbasis prinsip syariah.

      Saat menjawab pertanyaan user, buat jawaban dari pertanyaan sesuai dengan informasi dan buat percakapan selalu natural, tidak perlu menjawab panjang jika tidak diperlukan.
      jika user bertanya hal yang tidak berhubungan, arahkan kembali ke topik yang berhubungan dengan FIFGROUP.
    - 
    
    `;
    const response = await axios.post(
      openaiEndpoint,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: context },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.message);
    return "I'm sorry, something went wrong with OpenAI. Please try again later.";
  }
}

// Ensure directory for user logs exists
const userLogsDir = path.join(__dirname, "user_logs");
if (!fs.existsSync(userLogsDir)) {
  fs.mkdirSync(userLogsDir);
}

// Webhook endpoint for receiving events from LINE
app.post(
  "/webhook",
  (req, res, next) => {
    req.body = JSON.stringify(req.body); // Stringify the request body for middleware validation
    line.middleware(config)(req, res, next);
  },
  async (req, res) => {
    try {
      const events = req.body.events;
      await Promise.all(events.map(handleEvents)); // Handle all incoming events
      res.status(200).end(); // Respond with HTTP 200 OK
    } catch (err) {
      console.error("Error handling webhook:", err);
      res.status(500).end(); // Respond with HTTP 500 Internal Server Error
    }
  }
);

// Event handling function
// async function handleEvents(event) {
//   if (event.type === "message" && event.message.type === "text") {
//     const userId = event.source.userId;
//     //const messageText = event.message.text.toUpperCase();
//     const userFile = path.join(userLogsDir, `${userId}.txt`);
//     const logEntry = `User: ${messageText}\n`;

//     fs.appendFile(userFile, logEntry, (err) => {
//       if (err) console.error("Error writing to user log file:", err);
//     });

//     const messageText = event.message.text.toUpperCase();

//     const foundKeyword = Object.keys(keywordResponses).find(
//       (key) => key.toUpperCase() === messageText
//     );

//     if (foundKeyword) {
//       const card = keywordResponses[foundKeyword];
//       const responseMessage = {
//         type: "template",
//         altText: card.title,
//         template: {
//           type: "buttons",
//           thumbnailImageUrl: card.image || "https://via.placeholder.com/1024", // Replace with valid image or default placeholder
//           title: card.title,
//           text: card.text,
//           actions: [
//             {
//               type: "uri",
//               label: "Info Lebih Lanjut",
//               uri: "https://www.fifgroup.co.id",
//             },
//           ],
//         },
//       };

//       fs.appendFile(userFile, `Bot: ${card.title}\n\n`, (err) => {
//         if (err) console.error("Error writing bot response to file:", err);
//       });

//       return client.replyMessage(event.replyToken, responseMessage);
//     }

//     const openAIResponse = await sendToOpenAI(messageText);
//     const responseLogEntry = `Bot: ${openAIResponse}\n\n`;
//     fs.appendFile(userFile, responseLogEntry, (err) => {
//       if (err) console.error("Error writing bot response to file:", err);
//     });

//     return client.replyMessage(event.replyToken, {
//       type: "text",
//       text: openAIResponse,
//     });
//   }
// }

async function handleEvents(event) {
  if (event.type === "message" && event.message.type === "text") {
    const userId = event.source.userId;
    const messageText = event.message.text.toUpperCase(); // Ensure this is declared before use

    const userFile = path.join(userLogsDir, `${userId}.txt`);
    const logEntry = `User: ${messageText}\n`;

    fs.appendFile(userFile, logEntry, (err) => {
      if (err) console.error("Error writing to user log:", err);
    });

    // Check if the message matches a predefined keyword
    if (keywordResponses[messageText]) {
      const response = keywordResponses[messageText];

      await client.replyMessage(event.replyToken, [
        {
          type: "text",
          text: `${response.title}\n${response.text}`,
        },
        {
          type: "sticker",
          packageId: "446",
          stickerId: "1988",
        },
        {
          type: "location",
          title: "my location",
          address: "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282, Japan",
          latitude: 35.67966,
          longitude: 139.73669,
        },
        {
          type: "template",
          altText: "This is a buttons template",
          template: {
            type: "buttons",
            thumbnailImageUrl: "https://example.com/bot/images/image.jpg",
            imageAspectRatio: "rectangle",
            imageSize: "cover",
            imageBackgroundColor: "#FFFFFF",
            title: "Menu",
            text: "Please select",
            defaultAction: {
              type: "uri",
              label: "View detail",
              uri: "http://example.com/page/123",
            },
            actions: [
              {
                type: "postback",
                label: "Buy",
                data: "action=buy&itemid=123",
              },
              {
                type: "postback",
                label: "Add to cart",
                data: "action=add&itemid=123",
              },
              {
                type: "uri",
                label: "View detail",
                uri: "http://example.com/page/123",
              },
            ],
          },
        },
      ]);

      return;
    }

    // If keyword is not found, send to OpenAI
    const aiResponse = await sendToOpenAI(messageText);
    await client.replyMessage(event.replyToken, {
      type: "text",
      text: aiResponse,
    });
  }
}

// Test endpoint to confirm the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
