// variable to define the song/audio file name
var song;


// Function to load files that you want to have before setup function
function preload(){
  // Load audio file using P5.js built in function
  song = loadSound("audio.wav");
}

// Setup function to initialize everything
function setup(){
  // Create a blank canvas with dimensions (x,y)
  createCanvas(250,250);
  song.play();
}

// Draw Function: loops over and over to draw something on canvas defined above
function draw(){
  background(0);
}
