$(document).ready(initializeApp);


var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var attempt = 0;
var accuracy = 0;
var max_matches = null;
var games_played = 0;
var x;

function initializeApp() {
  $('#easy-button').on('click', () => {shuffleCards("easy"); $(".difficulty-select").hide();$('.selection-container').show();});
  $('#medium-button').on('click', () => {shuffleCards("medium"); $('.difficulty-select').hide(); $('.selection-container').show();});
  $('#hard-button').on('click', () => {shuffleCards("hard"); $(".difficulty-select").hide();$('.selection-container').show();});
  $("#start-game-button").on("click", () => {$(".body-container").show();$(".welcome-page").hide();});
  $('body').on('click','.back', handleCardClick);
  $(".play-again, #main-menu-button").on("click", () => {$(".end-page, .selection-container, .body-container").hide();$(".welcome-page, .difficulty-select").show();resetGame();});
  $('#back-button').on('click', ()=>{$('.difficulty-select').show(); $('.selection-container').hide()})
}

function handleCardClick(event) {
  if (firstCardClicked !== null && secondCardClicked !== null) {
    return;
  }

  if (!firstCardClicked) {
    firstCardClicked = $(event.currentTarget);
    firstCardClicked.addClass("hidden");
    firstCardClicked.parent().removeClass("cursor hvr-pulse");
  }
  else {
    secondCardClicked = $(event.currentTarget);
    secondCardClicked.addClass("hidden");
    secondCardClicked.parent().removeClass("cursor hvr-pulse");
    attempt++;
    displayStats();
    var firstImage = firstCardClicked.siblings().css("background-image");
    var secondImage = secondCardClicked.siblings().css("background-image");
    if (firstImage === secondImage) {
      matches++;
      if (matches !== max_matches) {
        displayStats();
        firstCardClicked = null;
        secondCardClicked = null;
      }
      else {
        games_played++;
        endGame();
        displayStats();
        firstCardClicked = null;
        secondCardClicked = null;
        shuffleCards(x);
      }
    }
    else {
      displayStats();
      setTimeout(function () {
        firstCardClicked.removeClass("hidden");
        secondCardClicked.removeClass("hidden");
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1000);
      firstCardClicked.parent().addClass("cursor hvr-pulse");
      secondCardClicked.parent().addClass("cursor hvr-pulse");
    }

  }
}

function calculateAccuracy() {
  accuracy = parseInt((matches / attempt) * 100);
  if(isNaN(accuracy)){
  accuracy = 0;
  }
  return;
}

function displayStats() {
  calculateAccuracy();
  $('.stats-box:nth-child(5)').text(attempt);
  $('.stats-box:nth-child(7)').text(`${accuracy}%`);
  $('.stats-box:nth-child(3)').text(games_played);
}

function endGame() {
  $('.body-container').hide();
  $('.end-page').show();
}

function resetGame(){
  matches = 0;
  attempt = 0;
  displayStats();
  var allCards = $(".back");
  allCards.removeClass("hidden");
}


function shuffleCards(difficulty) {
  $('.cards').remove();
  x = difficulty;
  var randomNumber;
  var randomCard;
  switch (x){
    case "easy":
    max_matches = 6;
    var easyCards = [
        'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun', 'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun'];
    while(easyCards.length){
      randomNumber = Math.floor(Math.random()*easyCards.length);
      randomCard = easyCards.splice(randomNumber,1);
      $(".cards-container").append(
        $('<div class = "cards cursor hvr-pulse">')
          .append($('<div class = "front">').addClass(randomCard))
          .append($('<div class = "back">'))
      );
      }
      break;
    case "medium":
    max_matches = 9;
    var mediumCards = [
    'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun', 'uranus', 'venus', 'asteroid', 'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun', 'uranus', 'venus', 'asteroid'];
    while(mediumCards.length){
    randomNumber = Math.floor(Math.random() * mediumCards.length);
    randomCard = mediumCards.splice(randomNumber,1);
    $(".cards-container").append(
      $('<div class = "cards cursor hvr-pulse">')
        .append($('<div class = "front">').addClass(randomCard))
        .append($('<div class = "back cursor hvr-pulse">'))
    );
  }
      break;
    case "hard":
    max_matches = 12;
    var hardCards = [
        'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun', 'uranus', 'venus', 'asteroid', 'earth', 'mars', 'jupiter', 'saturn', 'mercury', 'moon', 'neptune', 'pluto', 'sun', 'uranus', 'venus', 'asteroid', 'earth', 'mars', 'jupiter'];
    while (hardCards.length) {
    randomNumber = Math.floor(Math.random() * hardCards.length);
    randomCard = hardCards.splice(randomNumber, 1);
    $(".cards-container").append(
      $('<div class = "cards cursor hvr-pulse">')
        .append($('<div class = "front">').addClass(randomCard))
        .append($('<div class = "back cursor hvr-pulse">'))
    );
      }
      break;
  }
}
