// finatra_keywords.js
const keywordResponses = {
  FIFASTRA: {
    title: "FIFASTRA",
    text: "Pembiayaan motor baru/bekas, proses mudah dan cepat.",
  },
  SPEKTRA: {
    title: "SPEKTRA",
    text: "Pembiayaan elektronik, gadget, dan perabot.",
  },
  DANASTRA: {
    title: "DANASTRA",
    text: "Pembiayaan multiguna: pendidikan, renovasi, modal usaha.",
  },
  BranchList: {
    title: "Branch List",
    text:
      "Daftar cabang FIFGROUP:\n\n" +
      [
        "Sukabumi", "Pekanbaru", "Tegal", "Lampung", "Karawang", "Banyuwangi",
        "Lamongan", "Samarinda", "Sidoarjo", "Makassar", "Bandar Jaya", "Kepanjen",
        "Jata 2", "Jata 1", "Bogor", "Kudus", "Purwakarta", "Semarang", "Probolinggo",
        "Jata 3", "Surabaya", "Madiun", "Palembang", "Malang", "Denpasar", "Bekasi",
        "Yogyakarta", "Medan", "Bandung", "Cimahi", "Solo", "Martapura", "Bojonegoro",
        "Cilegon", "Manado", "Mataram", "Pematang Siantar", "Pontianak", "Purwokerto",
        "Rangkasbitung",
      ].map((c) => `- ${c}`).join("\n"),
  },
};

module.exports = { keywordResponses };
