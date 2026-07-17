# Alat debug html di mobile
**Untuk memunculkan keyboard di mobile**

Biasanya, kalau kita ingin munculin keyboard di html mobile, harus buat input dulu di html nya. Tujuan ini dibuat agar tidak perlu buat input lagi di html nya.
Nah, kita tinggal masukin seperti ini:
```html
<script src="https://cdn.jsdelivr.net/gh/salierisafi/toolshtml-mobile@main/keyboard.js"></script>
```
di html nya, jika kita klik halaman web nya, maka langsung muncul keyboard.  

Nah, untuk script mengambil input keyboard kita, itu agak beda, karena di hp, ketika kita mengetikkan printable character, hasil dari `e.key` nya malah Unidentified.  

Kita akan pakai fungsi `getChar` dari kode yang telah kita buat dan menggunakan async-await untuk menunggu output keluar.
```javascript
document.addEventListener('keydown', async (e) => {
let char = await getChar(e);
console.log(char); // ganti dengan kode kalian
});
```
***
**Munculin console.log di html mobile**

Saya buat
```html
<script src="https://cdn.jsdelivr.net/gh/salierisafi/toolshtml-mobile@main/tesconsole.js"></script>
```
Tapi tidak disarankan memakai ini, disarankan pakai Dev-tools seperti eruda dan vConsole yang telah saya sebutkan di Dev-tools.md
