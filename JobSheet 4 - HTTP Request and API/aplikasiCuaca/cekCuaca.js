const request = require("postman-request");

const urlCuaca =
  "http://api.weatherstack.com/current?access_key=a312b67d032b38eb848b936d84bea20d&query=-0.89716,100.35071";

request({ url: urlCuaca, json: true }, (error, response) => {
  // Ambil data dari API
  const suhu = response.body.current.temperature;
  const hujan = response.body.current.precip;
  const deskripsi = response.body.current.weather_descriptions[0]; // karena bentuknya array

  // Tampilkan informasi cuaca
  console.log(
    "Cuaca saat ini: " +
      deskripsi +
      "\n Suhu di luar mencapai " +
      suhu +
      "°C" +
      "\n Kemungkinan hujan: " +
      hujan +
      "%"
  );
});
