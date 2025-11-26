document.getElementById("veri").addEventListener("click", function() {
    // XMLHttpRequest nesnesi oluşturma
    const xhr = new XMLHttpRequest();
     console.log(xhr);

     xhr.open("GET", "text.txt?nocache=", true); // true: Asenkron istek yani cevap beklenmeden kod çalışmaya devam eder.
     // isteği göndermek için önce open ile açtık sonra send ile gönderiyoruz.
     xhr.send();
});

// console.log(veri);