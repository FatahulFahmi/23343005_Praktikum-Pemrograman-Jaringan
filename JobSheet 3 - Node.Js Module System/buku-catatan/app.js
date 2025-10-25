const { hideBin } = require("yargs/helpers");
const yargs = require("yargs/yargs")(hideBin(process.argv));
const catatan = require("./catatan.js");

// Kustom versi aplikasi
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
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});

// Command: hapus catatan
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul);
  },
});

// Command: tampilkan semua catatan
yargs.command({
  command: "list",
  describe: "menampilkan semua catatan",
  handler: function () {
    catatan.listCatatan();
  },
});

// Command: baca catatan tertentu
yargs.command({
  command: "baca",
  describe: "membaca sebuah catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang ingin dibaca",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul);
  },
});

yargs.parse();
