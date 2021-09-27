// Basic data fatch 
document.getElementById('btn').addEventListener('click', loadData);
let output = document.getElementById('output');

function loadData() {
    fetch('index.txt')
    .then(function(response) {
       return response.text(); 
    })
    .then(function(data) {
        output.innerHTML = `<h1>${data}</h1>`
    })
    .catch(function(error){
        console.log(error)
    })
}

// fetch own data 
document.getElementById('btn2').addEventListener('click', loadDatajson);
function loadDatajson() {
    fetch('info.json')
    .then(function(response) {
       return response.json(); 
    })
    .then(function(info) {
        
        let html = '';
        
        info.forEach(function(post) {
            html += `
                 <h1>${post.balance}</h1>
                 <h3>${post.name}</h3>
                 <h4><a href = "mailto: abc@example.com">${post.email}</a></h4>
                 <h3>friend name : ${post.friends[0].name}</h3>
                 <img src="${post.picture}" alt="">
            `;
       });
        output.innerHTML = html
        console.log(info)
    })
    .catch(function(error){
        console.log(error)
    })
}


// fetch json data 
document.getElementById('btn3').addEventListener('click', loadDataJsonApi);
function loadDataJsonApi() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(response) {
       return response.json()
    })
    .then(function(images) {
        
        let html = '';
        
        images.forEach(function(post) {
            html += `
                 <h1>${post.id}</h1>
                 <h3>${post.title}</h3>
                 <img src="${post.url}" alt="">
                 <img src="${post.thumbnailUrl}" alt="">
            `;
       });
      output.innerHTML = html;
      console.log(images);

    })
    .catch(function(error){
        console.log(error)
    })
}


// ajax
document.querySelector('#btn4').addEventListener('click',  loadGitUser);
function loadGitUser() {
     // Create the object
     const xhr = new XMLHttpRequest();

      // Open the connection
      xhr.open('GET', 'https://api.github.com/users', true);

      // Execute the function
      xhr.onload = function() {
           if(this.status === 200) {
                const response = JSON.parse( this.responseText );
 
                // print the contents
                let html = '';
                response.forEach(function(post) {
                    html += `
                          <h1><a href="${post.html_url}">${post.html_url}</a></h1>
                          <img src="${post.avatar_url}" alt="">
                     `;
                });
                output.innerHTML = html;
                console.log(response);
           }
      }
 
      // Send the request
      xhr.send();
}

// axios https://api.github.com/users
document.querySelector('#btn5').addEventListener('click',  loadGitUserAxios);
function loadGitUserAxios() {
        axios.get('https://api.github.com/users')
        .then(function(response){
            return response.data;

        })
        .then(function(gitUser) {
        
            let html = '';
            
            gitUser.forEach(function(post) {
                html += `
                      <h1><a href="${post.html_url}">${post.html_url}</a></h1>
                      <img src="${post.avatar_url}" alt="">
                 `;
            });
          output.innerHTML = html;
          console.log(gitUser)
        })
       
    .catch((err) =>{
        console.log(err)
    })
}

// axios planet https://swapi.dev/api/planets/

// document.querySelector('#btn6').addEventListener('click',  loadGitUserAxiosPlanet);
// function loadGitUserAxiosPlanet() {
//         axios.get('https://swapi.dev/api/planets')
//         .then(function(response){
//             return response.data;

//         })
//         .then(function(infoPlanet) {
        
//             let html = '';
            
//             infoPlanet.forEach(function(post) {
//                 html += `
//                       <h1>${post.name}</h1>
//                  `;
//             });
//           output.innerHTML = html;
//           console.log(infoPlanet)
//         })
       
//     .catch((err) =>{
//         console.log(err)
//     })
// }