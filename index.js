'use strict';

const APIkey = "";

function getRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
  $('#results-list').empty()
  .then(response => { 
      if (response.ok){
        return response.json();
    } 
    throw new Error(response.error);
    })
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('No repos found for that user-name. Try again later'));
 
  
}

function displayResults(responseJson) {
  console.log(responseJson);

    for (let i = 0; i < responseJson.public_repos; i++){
     $('.results-list').append(`
    <li><a href="${responseJson.message[i].html_url}">
    <h2>${responseJson.message[i].name}</h2></a></li>`);
    }
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    let username = $('.username-input').val();
    getRepos(username);
  });
}

function main(){
  console.log("App Loaded! waiting for submit!");
  watchForm();
}

$(main);