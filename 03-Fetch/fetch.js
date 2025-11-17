// function getTextFile() {
//     fetch("text.txt").then((response) => console.log(response.text()))
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// // fetch ettiğim dosyayı response olarak cevabı aldım ve text() metodu ile dosyanın içeriğini okuyorum
// //sonra o içeriği data olarak alıp console.log ile yazdırıyorum

//  getTextFile();

function getJSONFile() {
    fetch("users.json").then((response)=> response.json()).then((data) => console.log(data));
}
getJSONFile();