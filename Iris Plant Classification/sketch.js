// ******************************************
// Load and Process Training and Test Dataset
// ******************************************
// Training Dataset
let train_data = [{"sepal_length": 5.6, "sepal_width": 2.7, "petal_length": 4.2, "petal_width": 1.3, "species": 1}, {"sepal_length": 7.7, "sepal_width": 3.0, "petal_length": 6.1, "petal_width": 2.3, "species": 2}, {"sepal_length": 5.1, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.4, "species": 0}, {"sepal_length": 4.6, "sepal_width": 3.6, "petal_length": 1.0, "petal_width": 0.2, "species": 0}, {"sepal_length": 4.7, "sepal_width": 3.2, "petal_length": 1.6, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.7, "sepal_width": 3.0, "petal_length": 5.0, "petal_width": 1.7, "species": 1}, {"sepal_length": 5.6, "sepal_width": 3.0, "petal_length": 4.5, "petal_width": 1.5, "species": 1}, {"sepal_length": 4.3, "sepal_width": 3.0, "petal_length": 1.1, "petal_width": 0.1, "species": 0}, {"sepal_length": 7.1, "sepal_width": 3.0, "petal_length": 5.9, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 4.1, "petal_width": 1.0, "species": 1}, {"sepal_length": 4.9, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.1, "sepal_width": 2.5, "petal_length": 3.0, "petal_width": 1.1, "species": 1}, {"sepal_length": 5.6, "sepal_width": 2.5, "petal_length": 3.9, "petal_width": 1.1, "species": 1}, {"sepal_length": 5.1, "sepal_width": 3.3, "petal_length": 1.7, "petal_width": 0.5, "species": 0}, {"sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.9, "species": 2}, {"sepal_length": 5.0, "sepal_width": 3.6, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 4.9, "sepal_width": 2.4, "petal_length": 3.3, "petal_width": 1.0, "species": 1}, {"sepal_length": 6.7, "sepal_width": 2.5, "petal_length": 5.8, "petal_width": 1.8, "species": 2}, {"sepal_length": 5.8, "sepal_width": 2.6, "petal_length": 4.0, "petal_width": 1.2, "species": 1}, {"sepal_length": 4.9, "sepal_width": 3.6, "petal_length": 1.4, "petal_width": 0.1, "species": 0}, {"sepal_length": 5.1, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.1, "sepal_width": 3.0, "petal_length": 4.6, "petal_width": 1.4, "species": 1}, {"sepal_length": 4.6, "sepal_width": 3.4, "petal_length": 1.4, "petal_width": 0.3, "species": 0}, {"sepal_length": 6.4, "sepal_width": 3.2, "petal_length": 4.5, "petal_width": 1.5, "species": 1}, {"sepal_length": 7.7, "sepal_width": 2.6, "petal_length": 6.9, "petal_width": 2.3, "species": 2}, {"sepal_length": 6.3, "sepal_width": 3.4, "petal_length": 5.6, "petal_width": 2.4, "species": 2}, {"sepal_length": 5.4, "sepal_width": 3.0, "petal_length": 4.5, "petal_width": 1.5, "species": 1}, {"sepal_length": 5.8, "sepal_width": 4.0, "petal_length": 1.2, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.0, "sepal_width": 2.9, "petal_length": 4.5, "petal_width": 1.5, "species": 1}, {"sepal_length": 4.6, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.9, "species": 2}, {"sepal_length": 6.9, "sepal_width": 3.2, "petal_length": 5.7, "petal_width": 2.3, "species": 2}, {"sepal_length": 6.0, "sepal_width": 3.4, "petal_length": 4.5, "petal_width": 1.6, "species": 1}, {"sepal_length": 6.2, "sepal_width": 3.4, "petal_length": 5.4, "petal_width": 2.3, "species": 2}, {"sepal_length": 6.6, "sepal_width": 2.9, "petal_length": 4.6, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.3, "sepal_width": 3.3, "petal_length": 6.0, "petal_width": 2.5, "species": 2}, {"sepal_length": 4.7, "sepal_width": 3.2, "petal_length": 1.3, "petal_width": 0.2, "species": 0}, {"sepal_length": 4.8, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.3, "species": 0}, {"sepal_length": 4.9, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.1, "species": 0}, {"sepal_length": 6.5, "sepal_width": 2.8, "petal_length": 4.6, "petal_width": 1.5, "species": 1}, {"sepal_length": 4.6, "sepal_width": 3.2, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.6, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.0, "sepal_width": 3.4, "petal_length": 1.6, "petal_width": 0.4, "species": 0}, {"sepal_length": 7.4, "sepal_width": 2.8, "petal_length": 6.1, "petal_width": 1.9, "species": 2}, {"sepal_length": 5.2, "sepal_width": 3.5, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.4, "sepal_width": 3.4, "petal_length": 1.7, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.0, "sepal_width": 3.0, "petal_length": 4.8, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.2, "sepal_width": 2.8, "petal_length": 4.8, "petal_width": 1.8, "species": 2}, {"sepal_length": 4.8, "sepal_width": 3.1, "petal_length": 1.6, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.0, "sepal_width": 3.2, "petal_length": 1.2, "petal_width": 0.2, "species": 0}, {"sepal_length": 7.2, "sepal_width": 3.2, "petal_length": 6.0, "petal_width": 1.8, "species": 2}, {"sepal_length": 7.2, "sepal_width": 3.6, "petal_length": 6.1, "petal_width": 2.5, "species": 2}, {"sepal_length": 5.7, "sepal_width": 2.5, "petal_length": 5.0, "petal_width": 2.0, "species": 2}, {"sepal_length": 4.8, "sepal_width": 3.4, "petal_length": 1.9, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.7, "sepal_width": 2.6, "petal_length": 3.5, "petal_width": 1.0, "species": 1}, {"sepal_length": 6.8, "sepal_width": 3.2, "petal_length": 5.9, "petal_width": 2.3, "species": 2}, {"sepal_length": 5.1, "sepal_width": 3.5, "petal_length": 1.4, "petal_width": 0.3, "species": 0}, {"sepal_length": 4.8, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.1, "species": 0}, {"sepal_length": 6.0, "sepal_width": 2.2, "petal_length": 5.0, "petal_width": 1.5, "species": 2}, {"sepal_length": 6.4, "sepal_width": 2.8, "petal_length": 5.6, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.7, "sepal_width": 4.4, "petal_length": 1.5, "petal_width": 0.4, "species": 0}, {"sepal_length": 6.1, "sepal_width": 2.8, "petal_length": 4.0, "petal_width": 1.3, "species": 1}, {"sepal_length": 5.7, "sepal_width": 3.8, "petal_length": 1.7, "petal_width": 0.3, "species": 0}, {"sepal_length": 4.9, "sepal_width": 2.5, "petal_length": 4.5, "petal_width": 1.7, "species": 2}, {"sepal_length": 7.7, "sepal_width": 3.8, "petal_length": 6.7, "petal_width": 2.2, "species": 2}, {"sepal_length": 4.4, "sepal_width": 3.0, "petal_length": 1.3, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.3, "sepal_width": 2.9, "petal_length": 5.6, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.3, "sepal_width": 3.3, "petal_length": 4.7, "petal_width": 1.6, "species": 1}, {"sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 4.9, "petal_width": 1.5, "species": 1}, {"sepal_length": 6.7, "sepal_width": 3.3, "petal_length": 5.7, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.0, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 5.4, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.2, "sepal_width": 3.4, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.7, "sepal_width": 2.8, "petal_length": 4.1, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.3, "sepal_width": 2.8, "petal_length": 5.1, "petal_width": 1.5, "species": 2}, {"sepal_length": 5.5, "sepal_width": 3.5, "petal_length": 1.3, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.0, "sepal_width": 2.2, "petal_length": 4.0, "petal_width": 1.0, "species": 1}, {"sepal_length": 4.4, "sepal_width": 2.9, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 5.6, "petal_width": 2.4, "species": 2}, {"sepal_length": 6.1, "sepal_width": 2.8, "petal_length": 4.7, "petal_width": 1.2, "species": 1}, {"sepal_length": 7.6, "sepal_width": 3.0, "petal_length": 6.6, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.1, "sepal_width": 3.5, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.7, "sepal_width": 3.3, "petal_length": 5.7, "petal_width": 2.5, "species": 2}, {"sepal_length": 7.3, "sepal_width": 2.9, "petal_length": 6.3, "petal_width": 1.8, "species": 2}, {"sepal_length": 5.9, "sepal_width": 3.0, "petal_length": 5.1, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.8, "sepal_width": 2.8, "petal_length": 4.8, "petal_width": 1.4, "species": 1}, {"sepal_length": 5.4, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.5, "petal_width": 0.3, "species": 0}, {"sepal_length": 5.6, "sepal_width": 2.8, "petal_length": 4.9, "petal_width": 2.0, "species": 2}, {"sepal_length": 6.3, "sepal_width": 2.5, "petal_length": 4.9, "petal_width": 1.5, "species": 1}, {"sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.9, "petal_width": 0.4, "species": 0}, {"sepal_length": 5.2, "sepal_width": 2.7, "petal_length": 3.9, "petal_width": 1.4, "species": 1}, {"sepal_length": 7.9, "sepal_width": 3.8, "petal_length": 6.4, "petal_width": 2.0, "species": 2}, {"sepal_length": 6.4, "sepal_width": 3.2, "petal_length": 5.3, "petal_width": 2.3, "species": 2}, {"sepal_length": 6.4, "sepal_width": 2.7, "petal_length": 5.3, "petal_width": 1.9, "species": 2}, {"sepal_length": 6.0, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.6, "species": 1}, {"sepal_length": 5.0, "sepal_width": 3.3, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 5.1, "petal_width": 2.3, "species": 2}, {"sepal_length": 5.4, "sepal_width": 3.9, "petal_length": 1.7, "petal_width": 0.4, "species": 0}, {"sepal_length": 6.5, "sepal_width": 3.2, "petal_length": 5.1, "petal_width": 2.0, "species": 2}, {"sepal_length": 5.0, "sepal_width": 2.0, "petal_length": 3.5, "petal_width": 1.0, "species": 1}, {"sepal_length": 6.7, "sepal_width": 3.0, "petal_length": 5.2, "petal_width": 2.3, "species": 2}, {"sepal_length": 6.4, "sepal_width": 2.8, "petal_length": 5.6, "petal_width": 2.2, "species": 2}, {"sepal_length": 5.0, "sepal_width": 3.5, "petal_length": 1.3, "petal_width": 0.3, "species": 0}, {"sepal_length": 6.4, "sepal_width": 3.1, "petal_length": 5.5, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.6, "sepal_width": 3.0, "petal_length": 4.4, "petal_width": 1.4, "species": 1}, {"sepal_length": 6.3, "sepal_width": 2.3, "petal_length": 4.4, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.1, "sepal_width": 2.9, "petal_length": 4.7, "petal_width": 1.4, "species": 1}, {"sepal_length": 5.9, "sepal_width": 3.2, "petal_length": 4.8, "petal_width": 1.8, "species": 1}, {"sepal_length": 5.5, "sepal_width": 2.4, "petal_length": 3.7, "petal_width": 1.0, "species": 1}, {"sepal_length": 4.8, "sepal_width": 3.4, "petal_length": 1.6, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.7, "sepal_width": 3.0, "petal_length": 4.2, "petal_width": 1.2, "species": 1}]

// Test Data
let test_data = [{"sepal_length": 5.5, "sepal_width": 4.2, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.4, "sepal_width": 3.9, "petal_length": 1.3, "petal_width": 0.4, "species": 0}, {"sepal_length": 5.0, "sepal_width": 3.5, "petal_length": 1.6, "petal_width": 0.6, "species": 0}, {"sepal_length": 7.2, "sepal_width": 3.0, "petal_length": 5.8, "petal_width": 1.6, "species": 2}, {"sepal_length": 7.0, "sepal_width": 3.2, "petal_length": 4.7, "petal_width": 1.4, "species": 1}, {"sepal_length": 6.3, "sepal_width": 2.7, "petal_length": 4.9, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.2, "sepal_width": 2.2, "petal_length": 4.5, "petal_width": 1.5, "species": 1}, {"sepal_length": 5.5, "sepal_width": 2.3, "petal_length": 4.0, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.3, "sepal_width": 2.5, "petal_length": 5.0, "petal_width": 1.9, "species": 2}, {"sepal_length": 4.9, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.2, "petal_width": 2.0, "species": 2}, {"sepal_length": 5.2, "sepal_width": 4.1, "petal_length": 1.5, "petal_width": 0.1, "species": 0}, {"sepal_length": 5.4, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.4, "species": 0}, {"sepal_length": 7.7, "sepal_width": 2.8, "petal_length": 6.7, "petal_width": 2.0, "species": 2}, {"sepal_length": 6.1, "sepal_width": 3.0, "petal_length": 4.9, "petal_width": 1.8, "species": 2}, {"sepal_length": 6.4, "sepal_width": 2.9, "petal_length": 4.3, "petal_width": 1.3, "species": 1}, {"sepal_length": 5.6, "sepal_width": 3.0, "petal_length": 4.1, "petal_width": 1.3, "species": 1}, {"sepal_length": 5.7, "sepal_width": 2.9, "petal_length": 4.2, "petal_width": 1.3, "species": 1}, {"sepal_length": 4.4, "sepal_width": 3.2, "petal_length": 1.3, "petal_width": 0.2, "species": 0}, {"sepal_length": 6.1, "sepal_width": 2.6, "petal_length": 5.6, "petal_width": 1.4, "species": 2}, {"sepal_length": 5.5, "sepal_width": 2.4, "petal_length": 3.8, "petal_width": 1.1, "species": 1}, {"sepal_length": 5.3, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.2, "species": 0}, {"sepal_length": 5.5, "sepal_width": 2.6, "petal_length": 4.4, "petal_width": 1.2, "species": 1}, {"sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 4.4, "petal_width": 1.4, "species": 1}, {"sepal_length": 6.2, "sepal_width": 2.9, "petal_length": 4.3, "petal_width": 1.3, "species": 1}, {"sepal_length": 5.6, "sepal_width": 2.9, "petal_length": 3.6, "petal_width": 1.3, "species": 1}, {"sepal_length": 5.0, "sepal_width": 2.3, "petal_length": 3.3, "petal_width": 1.0, "species": 1}, {"sepal_length": 5.8, "sepal_width": 2.8, "petal_length": 5.1, "petal_width": 2.4, "species": 2}, {"sepal_length": 5.0, "sepal_width": 3.0, "petal_length": 1.6, "petal_width": 0.2, "species": 0}, {"sepal_length": 4.5, "sepal_width": 2.3, "petal_length": 1.3, "petal_width": 0.3, "species": 0}, {"sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.8, "petal_width": 2.2, "species": 2}, {"sepal_length": 5.5, "sepal_width": 2.5, "petal_length": 4.0, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.5, "petal_width": 1.8, "species": 2}, {"sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 3.9, "petal_width": 1.2, "species": 1}, {"sepal_length": 6.8, "sepal_width": 3.0, "petal_length": 5.5, "petal_width": 2.1, "species": 2}, {"sepal_length": 5.7, "sepal_width": 2.8, "petal_length": 4.5, "petal_width": 1.3, "species": 1}, {"sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 4.7, "petal_width": 1.5, "species": 1}, {"sepal_length": 5.9, "sepal_width": 3.0, "petal_length": 4.2, "petal_width": 1.5, "species": 1}]

// Load Training Data
const trainingData = tf.tensor2d(train_data.map(item => [
  item.sepal_length, item.sepal_width, item.petal_length, item.petal_width
]));

// Load Training Labels as One Hot Encoded Values
const trainingLabels = tf.tensor2d(train_data.map(item => [
  item.species == 0 ? 1 : 0,
  item.species == 1 ? 1 : 0,
  item.species == 2 ? 1 : 0
]));

// Load Testing Data
const testingData = tf.tensor2d(test_data.map(item => [
  item.sepal_length, item.sepal_width, item.petal_length, item.petal_width
]));

// Load Test Labels as One Hot Encoded Values
const testingLabels = tf.tensor2d(test_data.map(item => [
  item.species == 0 ? 1 : 0,
  item.species == 1 ? 1 : 0,
  item.species == 2 ? 1 : 0
]));

//console.log(testingLabels.toString());


// ******************************************
// Neural Network Architecture
// ******************************************
// Define Sequential Model
//const model = tf.sequential()
let model;
let model_loss;
let trainingTime;

tf.tidy(() => {
  model = tf.sequential()

  // Input Layer to Hidden Layer
  // Add a dense layer to the Model
  model.add(tf.layers.dense({
    // 4 items in Input
    inputShape: [4],
    // Sigmoid Activation: Good for classification problems
    activation: "sigmoid",
    // Hidden Layer Neurons: 5
    units: 5
  }));

  // Hidden Layer to Output Layer
  model.add(tf.layers.dense({
    // Hidden Layer Neurons: 5
    inputShape: [5],
    // Sigmoid Activation Function
    activation: "sigmoid",
    // Number of Output Neurons: 3
    units: 3
  }));

  // Compile the Model using MSE Loss and Adam Optimizer
  model.compile({
    loss: "meanSquaredError",
    optimizer: tf.train.adam(0.01)
  });

  // Timekeeping
  const startTime = Date.now()

  //console.log("Memory Before: ", tf.memory().numTensors);
  // Train the model
  // history: Loss history object storing all loss history
  model.fit(trainingData, trainingLabels, {epochs: 100})
    .then((history) => {document.getElementById("status").innerHTML = "Model Training Completed...".bold(); model_loss =  history.history.loss; trainingTime = (Date.now()-startTime); predictLabels()});
})


// Function to make predictions on the Test data using Trained Model
function predictLabels(){
  let y_pred;
  let pred;
  let predLabel;
  tf.tidy(() => {
    y_pred = model.predict(testingData);
    //const correctPredictions = tf.equal(y_pred.argMax(1), testingLabels.argMax(1));
    //document.getElementById("modelLoss").innerHTML = "Model Training Loss: ".bold() + model_loss[model_loss.length-1];
    //document.getElementById("trainingTime").innerHTML = "Model Training Total Time: ".bold() + trainingTime/1000 + " seconds";
    pred = y_pred.dataSync();
    predLabel = y_pred.argMax(1).dataSync();
  })

  // ************* To DO: Show Predicted Labels for Values in Table ***************
  var table1 = document.getElementById("table1");
  var row1 = table1.insertRow(0);
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  cell1.innerHTML = "Prediction Probabilities".bold();
  cell2.innerHTML = "Predicted Label".bold();
  // Fill in the table rows and columns with values
  for (let j = 0; j<pred.length/2; j+=3){
    var row1 = table1.insertRow(1);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell1.innerHTML = "[ " + Math.round(pred.slice(j,j+3)[0]*1000)/1000 + " , " + Math.round(pred.slice(j,j+3)[1]*1000)/1000 + " , " + Math.round(pred.slice(j,j+3)[2]*1000)/1000 + " ]";
    if (predLabel[j/3] == 0){
      cell2.innerHTML = predLabel[j/3] + "  =>  " + "Iris Setosa";
    }
    else if (predLabel[j/3] == 1){
      cell2.innerHTML = predLabel[j/3] + "  =>  " + "Iris Versicolour";
    }
    else if (predLabel[j/3] == 2){
      cell2.innerHTML = predLabel[j/3] + "  =>  " + "Iris Virginica";
    }
  }

  var table2 = document.getElementById("table2");
  var row2 = table2.insertRow(0);
  var cell3 = row2.insertCell(0);
  var cell4 = row2.insertCell(1);
  cell3.innerHTML = "Prediction Probabilities".bold();
  cell4.innerHTML = "Predicted Label".bold();
  // Fill in the table rows and columns with values
  for (let j = pred.length/2; j<pred.length; j+=3){
    var row2 = table2.insertRow(1);
    var cell3 = row2.insertCell(0);
    var cell4 = row2.insertCell(1);
    cell3.innerHTML = "[ " + Math.round(pred.slice(j,j+3)[0]*1000)/1000 + " , " + Math.round(pred.slice(j,j+3)[1]*1000)/1000 + " , " + Math.round(pred.slice(j,j+3)[2]*1000)/1000 + " ]";
    if (predLabel[j/3] == 0){
      cell4.innerHTML = predLabel[j/3] + "  =>  " + "Iris Setosa";
    }
    else if (predLabel[j/3] == 1){
      cell4.innerHTML = predLabel[j/3] + "  =>  " + "Iris Versicolour";
    }
    else if (predLabel[j/3] == 2){
      cell4.innerHTML = predLabel[j/3] + "  =>  " + "Iris Virginica";
    }
  }
  //document.getElementById("status").innerHTML = "Test Data Label Prediction Completed...".bold();
  console.log("Number of Tensors Before Cleanup: ", tf.memory().numTensors);
  //document.getElementById("tensorsBefore").innerHTML = "Number of Allocated Tensors Before Optimization: ".bold() + tf.memory().numTensors;
  model.dispose();
  y_pred.dispose();
  console.log("Number of Tensors After Cleanup: ", tf.memory().numTensors);
  //document.getElementById("tensorsAfter").innerHTML = "Number of Allocated Tensors After Optimization: ".bold() + tf.memory().numTensors;
}
