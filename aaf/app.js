// AJAX ...
document.getElementById('btn').addEventListener('click', loadGitUserAjax);
let output = document.getElementById('output');

function loadGitUserAjax(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)

            let html = '';
            response.forEach(post => {
                html += `
                    <h1> <a href="${post.html_url}">${post.html_url}</a></h1>
                    <img src="${post.avatar_url}" alt=''>
                `
            });

            output.innerHTML = html;
            console.log(response)

        }
    }

    // send the request
    xhr.send()

}

// Axios ...
document.getElementById('btn2').addEventListener('click', loadGitUserAxios);

function loadGitUserAxios(){
    axios.get('https://api.github.com/users')
    .then(function(response) {
        return response.data
    })

    .then(function(response) {

        let html = '';
        response.forEach(post => {
            html += `
                <h1> <a href="${post.html_url}">${post.html_url}</a></h1>
                <img src="${post.avatar_url}" alt=''>
            `
        });

        output.innerHTML = html;
        console.log(response)

    })
    .catch(err => {
        console.log(err)
    })

}


// Fetch api ...
document.getElementById('btn3').addEventListener('click', loadGitUserFetch);

function loadGitUserFetch(){
    fetch('https://api.github.com/users')
    .then(function(response) {
        return response.json()
    })

    .then(function(response) {

        let html = '';
        response.forEach(post => {
            html += `
                <h1> <a href="${post.html_url}">${post.html_url}</a></h1>
                <img src="${post.avatar_url}" alt=''>
            `
        });

        output.innerHTML = html;
        console.log(response)

    })
    .catch(err => {
        console.log(err)
    })

}