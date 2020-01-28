"use strict";

function getRepos() {
  let user = $('input[name="username"]').val();
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  //remove previous results
  $("#results-list").empty();
  //iterate through user's repos
  for (let i = 0; i < responseJson.message.length; i++) {
    //display each repo from user
    //this is all fucked up... i need to figure out it i need to reference the data as
    // responseJson.message[i]'etc' not sure
    $("#results-list").append(
      `<li>${responseJson.message[i].name}
            <a href="${responseJson.message[i].html_url}"
            `
    );
  }
}

function resetSearch() {}
