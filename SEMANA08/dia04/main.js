//https://jsonplaceholder.typicode.com/
//https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=es&utm_source=ext_sidebar

const url= 'https://jsonplaceholder.typicode.com/todos/'

fetch(url)
    .then(response=>{return response.json()})
    .then(data =>{
        console.log(data)
        console.log(data[0].title)}
    )
 