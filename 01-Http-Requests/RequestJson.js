document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
    const xhr=new XMLHttpRequest();
    xhr.open("GET","users.json",true);
    xhr.onload=function(){
        let tableBody = document.getElementById("employees");
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            data.forEach((user) => {
                //+= butona bastıktan sonra veri eklemeye devam eder alt alta 
                tableBody.innerHTML += ` 
                <tr>
                <td>${user.name}</td>
                <td>${user.department}</td>
                <td>${user.salary}</td>
            </tr>
                `;
            });
        } else {
            tableBody.innerHTML = "<tr><td colspan='3'>Veri alınamadı</td></tr>";
            console.error("Data alınamadı. Status:",xhr.status);
        }
};
xhr.send();
}