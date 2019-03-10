# Converting Custom Keras Model to TensorFlow.js Model

To convert the saved Keras model into TensorFlow.js model, run the following command:

```
tensorflowjs_converter --input_format keras ./Keras Model/saved_model.h5 ./tfjs_model/
```

**NOTE:** For this conversion to work, TensorFlow.js installation is required.

```
pip install tensorflowjs
```

# Hosting a TensorFlow.js Model

To use your custom TensorFlow.js model, you need to load the model in your code. To load the model using a URL, host the model on GitHub for free. Follow these steps:
```
1. Go to Settings in your project repository on GitHub.

2. Go to GitHub Pages and under Source, select Master Branch.

3. Your model is now hosted at address:
   
   "https://<YOUR_GitHub_USERNAME>.github.io/REPOSITORY_NAME/NAME_OF_FOLDER_CONTAINING_TF.JS_MODEL/model.json"

4. Use this URL in your code to fetch and load the model. For Example:
   
   const model = await tf.loadLayersModel("https://anujdutt9.github.io/Javascript-Machine-Learning/Movie-Reviews-Sentiment-Classification/tfjs_model/model.json");
```
