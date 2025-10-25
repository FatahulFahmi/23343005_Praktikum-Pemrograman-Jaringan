<h1 align="center">23343005_Praktikum-Pemrograman-Jaringan</h1>

<h1 align="center">Fatahul Fahmi - 23343005</h1>

<p align="center">
  <a href="mailto:fatahulfahmi1234@gmail.com"><img src="https://img.shields.io/badge/📧_Email-fatahulfahmi1234%40gmail.com-blue?style=for-the-badge"></a>
  <img src="https://img.shields.io/badge/🎓_Universitas_Negeri_Padang-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/💻_Teknik_Informatika-green?style=for-the-badge">
</p>

---


##  Kontak Saya
| Platform | Informasi |
|-----------|------------|
| ✉️ Email | [fatahulfahmi1234@gmail.com](mailto:fatahulfahmi1234@gmail.com) |
| 💻 GitHub | [github.com/FatahulFahmi](https://github.com/FatahulFahmi) |
| 🏫 Kampus | Universitas Negeri Padang (UNP) |
| 🧾 NIM | 23343005 |

---

###  Jobsheet 1 – Pengantar Node.js 

####  Deskripsi Singkat
Jobsheet ini memperkenalkan dasar **pemrograman berbasis jaringan** dengan menggunakan **Node.js**, sebuah lingkungan runtime JavaScript yang memungkinkan eksekusi kode di sisi server.  
Fokus utama jobsheet ini adalah memahami konsep **komunikasi client–server**, mengenal arsitektur jaringan modern, dan membuat proyek Node.js sederhana.

---

####  Tujuan Pembelajaran
- Memahami konsep komunikasi antara **client dan server** dalam jaringan komputer.  
- Mengenal lingkungan kerja **Node.js** dan prinsip **event-driven & non-blocking I/O**.  
- Menjelaskan bagaimana Node.js dapat digunakan untuk membangun **aplikasi web dan jaringan yang responsif**.  
- Melakukan instalasi dan uji coba Node.js melalui program sederhana.

---

####  Langkah-Langkah Praktikum

1. **Instalasi Tools**
   - Unduh dan pasang **Visual Studio Code** sebagai text editor utama.  
   - Unduh dan instal **Node.js** sesuai sistem operasi.  
   - Verifikasi instalasi:
     ```bash
     node -v
     npm -v
     ```

2. **Membuat Proyek Baru**
   - Buat folder proyek, misalnya `PBJ1`, lalu buka dengan Visual Studio Code.  
   - Tambahkan file `hello.js` berisi:
     ```javascript
     console.log('Welcome to Node.js!');
     ```
     Jalankan:
     ```bash
     node hello.js
     ```

3. **Membangun Server Sederhana**
   - Buat file baru `hello-world.js`:
     ```javascript
     const http = require('http');

     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Hello World\n');
     });

     server.listen(3000, '127.0.0.1', () => {
       console.log('Server running at http://127.0.0.1:3000/');
     });
     ```
   - Jalankan perintah:
     ```bash
     node hello-world.js
     ```
   - Buka browser dan akses `http://127.0.0.1:3000` untuk melihat hasilnya.

---

####  Konsep yang Dipelajari
- **Client–Server Architecture:** Dasar interaksi dua arah antara klien dan peladen.  
- **Protokol Jaringan:** Aturan komunikasi data seperti HTTP dan TCP/IP.  
- **Socket Programming:** Penghubung antara aplikasi untuk saling bertukar data melalui jaringan.  
- **Asynchronous Programming:** Node.js memungkinkan proses berjalan tanpa harus menunggu operasi lain selesai (*non-blocking I/O*).  
- **Event Loop:** Mekanisme utama Node.js untuk menangani banyak koneksi secara efisien.

---

####  Tugas
> Jelaskan perbedaan antara **JavaScript Engine (V8)** dengan **Node.js**.

**Penjelasan singkat:**  
- **V8 Engine**: Mesin eksekusi JavaScript buatan Google yang digunakan di browser Chrome.  
- **Node.js**: Platform yang menggunakan V8 agar JavaScript bisa berjalan di luar browser, seperti di server.  
  Node.js menambahkan modul tambahan seperti `http`, `fs`, dan `net` yang tidak tersedia di browser.

---

