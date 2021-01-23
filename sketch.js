var canvas;
var gameState = 0, playerCount = 0, database;
var form, game, player;

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
  
  game = new Game()
  game.start()
  

}


function draw(){

  
}