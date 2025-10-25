const request = require("postman-request");

const lokasi = "padang";
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
  lokasi
)}.json?access_token=pk.eyJ1IjoiZmFobWlrZXJlbiIsImEiOiJjbWg1aHkxeDkwOHhlMmpyMDl6a3RsanM2In0.ByKV-_w4MPgfsKYLiUlk5w&limit=1`;

// 🔹 Ambil data lokasi dari Mapbox
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Tidak dapat terhubung ke layanan lokasi!");
  } else if (response.body.features.length === 0) {
    console.log("Lokasi tidak ditemukan!");
  } else {
    const data = response.body.features[0];
    const latitude = data.center[1];
    const longitude = data.center[0];
    const placeName = data.place_name;
    const placeType = data.place_type[0];

    console.log("Koordinat lokasi anda adalah " + latitude + ", " + longitude);
    console.log("Data yang anda cari adalah: " + lokasi);
    console.log("Data yang ditemukan adalah: " + placeName);
    console.log("Tipe lokasi adalah: " + placeType);

    // 🔹 Panggil API Weatherstack berdasarkan koordinat dari Mapbox
    const urlCuaca = `http://api.weatherstack.com/current?access_key=a312b67d032b38eb848b936d84bea20d&query=${latitude},${longitude}`;

    request({ url: urlCuaca, json: true }, (error, response) => {
      if (error) {
        console.log("Tidak dapat terhubung ke layanan cuaca!");
      } else if (response.body.error) {
        console.log("Terjadi kesalahan: " + response.body.error.info);
      } else {
        const suhu = response.body.current.temperature;
        const hujan = response.body.current.precip;

        console.log(
          `Saat ini suhu di ${lokasi} mencapai ${suhu} derajat celcius.`
        );
        console.log(`Kemungkinan terjadinya hujan adalah ${hujan}%`);
      }
    });
  }
});
