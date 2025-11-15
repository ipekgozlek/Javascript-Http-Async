document.getElementById("veri").addEventListener("click", getData);

function getData() {
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.onload=function(){ // onload ile data geldikten sonra outputDiv in içini dolduracağım
        let outputDiv=document.getElementById("output"); // html içindeki output id li boş divi OutpuDiv e atadım çnkü onun innerHTML ine veri ekleyeceğim
       if (this.status===200) { 
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        data.forEach((item)=> {
           outputDiv.innerHTML += `
           <div>
        <h2 class="bg-success-subtle text-center">${item.title}</h2>
        <p class="text-center" style="color: #eb7cd5ff;">${item.body}</p>
    </div>
    <hr>`
        });
    }
    };
   

    xhr.send();
}