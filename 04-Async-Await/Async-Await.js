class Request {
    static async get(url) {
        const response =await fetch(url); 
        // ne zaman geleceğini bilmediğimiz için await kullanıyorum
    
    if (!response.ok) { // response not okeyse
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // json ı parse ederek data ya atıyorum
    return data;
}

// JavaScript single-thread olduğu için
//  paralel işlem yapamaz ama event loop sayesinde asenkron işlemleri yönetir

   static async post(url, data) {
        const response=await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
            }
        } 


    static async put---// devam burdan

// Request.get("https://jsonplaceholder.typicode.com/posts")
// .then((data)=> data.map((post)=> console.log(post.title))
// );


        
      
    Request.post("https://jsonplaceholder.typicode.com/posts", {
        userId:23456,
        title:" ipek gözlek",
        body: "ipek",
    })
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error)
);