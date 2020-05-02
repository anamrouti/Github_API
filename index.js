'use strict';

const APIkey = "";

function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => { 
      if (response.ok) {
        return response.json();
        } 
    throw new Error(response.statusText);
    })
    .then(responseJson => 
        displayResults(responseJson))
    .catch(error => alert('No repos found for that user-name. Try again later'));   
}

function displayResults(responseJson, username) {
  console.log(responseJson);

    for (let i = 0; i < responseJson.items.length; i++){
     
        $('#results-list').append(`
        <li><a href="${responseJson.item[i].url}">
        <h2>${responseJson.item[i].name}</h2></a></li>`);
    }
  //display the results section
  $("#results").removeClass("hidden");
}

function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    const username = $('#username-input').val();
    getRepos(username);
  });
}

function main(){
  console.log("App Loaded! waiting for submit!");
  watchForm();
}

$(main);