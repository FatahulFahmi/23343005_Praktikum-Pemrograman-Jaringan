//  Import package chalk
const chalk = require("chalk");

// Cetak teks berwarna biru
console.log(chalk.green("teks berubah jadi hijau!"));

console.log(chalk.red.bold("Ini teks merah tebal"));
console.log(chalk.green.underline("Teks hijau bergaris bawah"));
console.log(chalk.yellow.bgBlue("Teks kuning dengan background biru"));
console.log(chalk.magenta.inverse("Teks magenta terbalik"));
console.log(chalk.cyanBright("Teks cyan terang"));

console.log("ayam");
