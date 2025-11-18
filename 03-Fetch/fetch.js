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

    static post(url,data) {
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

        static put(url,data) {
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
}
