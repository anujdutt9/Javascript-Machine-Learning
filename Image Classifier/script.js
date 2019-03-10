// Script to load the MobileNet model and setup for Inference

// Define a Model Variable
let model;

// Function to get the id of the image selected by clicking on it.
function imageSelected(image_id){
  console.log("Selected Image: " + image_id);
  app(image_id);
}

// Function to Load the Model, get the image and make predictions
async function app(selectedImageID) {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById(selectedImageID);
  const result = await net.classify(imgEl);
  console.log("Image: " + selectedImageID + "; Predictions: " + result.length);
  for (let j=0; j<result.length; j++){
    console.log("ClassName: " + result[j].className + "; " + "Probability: " + result[j].probability);
  }
}
