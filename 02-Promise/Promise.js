function getData(data) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => { // simüle edilmiş gecikme Promise mantığını öğrenmek için
            if (typeof data=== "number") {
                let result =`Sonuç: ${data*2}`;
                resolve(result);
            }
            else {
                reject("Lütfen bir sayı giriniz");
            }
    }, 2000 // gecikme süresi milisaniye cinsinden
);
    });
}

getData(20)
.then((response)=> console.log(response)) // then ile burda yakalayabilmek için promise i retun yaptım başta 
.catch((error)=> console.error(error));

// gerçek yapı:

// fetch(url)
//   .then(resolve)
//   .catch(reject);
