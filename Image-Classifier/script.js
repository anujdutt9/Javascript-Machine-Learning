// Function to get the id of the image selected by clicking on it.
function imageSelected(image_id){
  console.log("Selected Image: " + image_id);
  if (image_id != " "){
    app(image_id);
  }
}

// Function to Resize the selected image to MobileNet Input Size
function processImage(image_id){
  // Code to Resize the selected image to MobileNet Input Size
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = document.getElementById(image_id).src;
  img.width = 224;
  img.height = 224;
  return img;
}

// Function to Load the Model, get the image and make predictions
async function app(selectedImageID) {
  console.log('Loading mobilenet..');
  // Perform Image Pre-processing
  var img = processImage(selectedImageID);
  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  // Placeholder for presenting the r
  var predText = " ";
  // Make a prediction through the model on our image.
  const result = await net.classify(img);
  console.log("Image: " + selectedImageID + "; Predictions: " + result.length);
  for (let j=0; j<result.length; j++){
    console.log("ClassName: " + result[j].className + "; " + "Probability: " + result[j].probability);
    predText += "The model is " + Math.round(result[j].probability*100).toString().bold() +
                "% sure that the image contains a " + result[j].className.bold() + ". <br/><br/>"
   }

   if (selectedImageID <= 8){
     document.getElementById("prediction1").innerHTML = predText;
    }
  else if (selectedImageID > 8){
    document.getElementById("prediction2").innerHTML = predText;
  }
}
