document.getElementById("veri").addEventListener("click", function() {
    // XMLHttpRequest nesnesi oluşturma
    const xhr = new XMLHttpRequest();
     console.log(xhr);

     xhr.onreadystatechange = function(){
            //onreadystatechange olayı, readyState her değiştiğinde tetiklenir.
            // readyState 0-4 arası değer alır.
            // 0: İstek başlatılmadı 0: request not initialized
            // 1: İstek başlatıldı 1: server connection established
            // 2: İstek alındı 2: request received
            // 3: İstek işleniyor 3: processing request
            // 4: İstek tamamlandı ve yanıt hazır  4: request finished and response is ready 

        console.log(xhr.readyState);
        if(xhr.readyState === 4 && xhr.status === 200){
                // İstek tamamlandı ve yanıt başarılı
                     console.log("İstek başarılı,data geldi",xhr.responseText);
      
         }
    };

     xhr.open("GET", "text.txt", true); // true: Asenkron istek yani cevap beklenmeden kod çalışmaya devam eder.
     // isteği göndermek için önce open ile açtık sonra send ile gönderiyoruz.
     xhr.send();
});



