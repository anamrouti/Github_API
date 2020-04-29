'use strict';


function getRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson, username))
   .then(response => {
    if (response.ok)
      return response.json()
    throw Error()
  })
  .catch(error => alert('No repos found for that user-name. Try again later'));
 
  
}

function displayResults(responseJson, username) {
  console.log(responseJson.message);

    for (let i = 0; i < responseJson.public_repos; i++){
    $('#results-repo').append(`
    <li><a href="${responseJson.message[i].html_url}">
    <h2>${responseJson.message[i].name}</h2></a>`);
    }
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    let selectedUsername = $('.username-input').val();
    getRepos(selectedUsername);
    
  });
}

function main(){
  console.log("App Loaded! waiting for submit!");
  watchForm();
}

$(main);