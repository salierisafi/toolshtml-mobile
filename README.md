# Buat munculin keyboard di mobile

Biasanya, kan kita kalau munculin keyboard di html mobile, harus buat input dulu di html nya.  
Nah, ini tinggal masukin :
```
<script src="https://cdn.jsdelivr.net/gh/salierisafi/toolshtml-mobile@main/keyboard.js"></script>
```
di html nya, jika kita klik halaman web nya, maka langsung muncul keyboard.  

Nah, untuk script agak beda, karena di hp, ketika kita mengetikkan printable character , hasil dari e.key nya malah unidentified.  

kita pakai fungsi getChar dan menggunakan async-await untuk menunggu output keluar.
```
document.addEventListener('keydown', async (e) => {
let char = await getChar(e);
console.log(char);
});
```

