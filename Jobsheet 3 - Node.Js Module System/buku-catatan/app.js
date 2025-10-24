// Import modul yang dibutuhkan
const { hideBin } = require("yargs/helpers");
const yargs = require("yargs/yargs")(hideBin(process.argv));
const catatan = require("./catatan.js");

// Kustomisasi versi yargs
yargs.version("10.1.0");

// Command: tambah catatan
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Judul: " + argv.judul);
    console.log("Isi: " + argv.isi);
  },
});

// Command: hapus catatan
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  handler: function () {
    console.log("Catatan berhasil dihapus");
  },
});

// Command: tampilkan semua catatan
yargs.command({
  command: "list",
  describe: "menampilkan daftar semua catatan",
  handler: function () {
    console.log("Menampilkan semua catatan...");
  },
});

// Command: baca catatan
yargs.command({
  command: "baca",
  describe: "membaca sebuah catatan",
  handler: function () {
    console.log("Membaca catatan...");
  },
});

// Jalankan parser Yargs
yargs.parse();
