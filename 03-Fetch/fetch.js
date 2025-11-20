// function getTextFile() {
//     fetch("text.txt").then((response) => console.log(response.text()))
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// // fetch ettiğim dosyayı response olarak cevabı aldım ve text() metodu ile dosyanın içeriğini okuyorum
// //sonra o içeriği data olarak alıp console.log ile yazdırıyorum

//  getTextFile();

// function getJSONFile() {
//     fetch("users.json").then((response)=> response.json())
//     .then((data) => data.map((user) => console.log(user.name,user.department,user.salary)))
//     .catch((error) => console.error(error));
// }
// //response.json parse ederek json dosyasını javascript objesine çeviriyor
// getJSONFile();


class Request {
    static get(url) {
        return new Promise((resolve,reject)=> {
            fetch(url)
            .then((response)=> response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    static post(url,data) { // post datayı yükler
        return new Promise((resolve,reject)=> {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),  
                })
            .then((response)=> response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

        static put(url,data) {  // id verip zaten olan datayı update
        return new Promise((resolve,reject)=> {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),  
                })
            .then((response)=> response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    static delete(url) {  //delete de header,body,data göndermeye gerek yok
        return new Promise((resolve,reject)=> {
            fetch(url, {
                method: "DELETE",
                })
            .then((response)=> response.json())
            .then((data) => resolve("veri silme işlemi başarılı")) // resolve da data olmayacağı için mesaj yazdırdım
            .catch((error) => reject(error, "Veri silme işlemi başarısız"));
        });
    }
}

// Request.get("https://jsonplaceholder.typicode.com/posts").then((data)=>
//    data.map((post)=> console.log(post.title))
// )
// .catch((error)=> console.log(error));


// Request.post("https://jsonplaceholder.typicode.com/posts", {
//     userId:234567,
//     title: "İpek gözlek"
// })
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error));


// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//     userId:2,
//     title: "Cem Sertel",
//     body: "loremmmmm"
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//   Request.delete("https://jsonplaceholder.typicode.com/posts/1") //sadece url ve url ye ek id yi yazıyorum delete de
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

