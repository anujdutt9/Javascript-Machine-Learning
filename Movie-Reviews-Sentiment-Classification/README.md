# Converting Keras Model to TensorFlow.js Model

To convert the saved Keras model into TensorFlow.js model, run the following command:

```
tensorflowjs_converter --input_format keras ./Keras Model/saved_model.h5 ./tfjs_model/
```

**NOTE:** For this conversion to work, TensorFlow.js installation is required.

```
pip install tensorflowjs
```
