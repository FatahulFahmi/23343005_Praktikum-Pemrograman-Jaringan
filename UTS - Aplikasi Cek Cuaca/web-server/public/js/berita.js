fetch("/api/berita")
  .then((response) => response.json())
  .then((data) => {
    const divBerita = document.querySelector("#list-berita");

    // Kalau error dari API
    if (data.error) {
      divBerita.innerHTML = `<p>${data.error}</p>`;
      return;
    }

    // Kosongkan dulu isi container
    divBerita.innerHTML = "";

    // Buat setiap card berita horizontal
    data.forEach((item, i) => {
      const card = document.createElement("div");
      card.classList.add("berita-card"); // ← gunakan CSS class

      card.innerHTML = `
        <h4>${i + 1}. ${item.title || "Tanpa Judul"}</h4>
        <p>${item.description || "Tidak ada deskripsi berita."}</p>
        <div class="source"><b>Sumber:</b> ${
          item.source || "Tidak diketahui"
        }</div>
      `;

      divBerita.appendChild(card);
    });
  })
  .catch((error) => {
    document.querySelector("#list-berita").innerHTML = `
      <p>Gagal memuat berita: ${error.message}</p>
    `;
  });
