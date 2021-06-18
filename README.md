# Geeks-Social

## Problem Statement:

Climate change has always been a persistent and fatal issue and the problem with tackling it is that there’s no efficient means to check if one’s role in saving the environment is efficient. We have seen quite a lot of people with noble motives to plant saplings, but the problem is that oftentimes such groups of individuals end up planting all these saplings in areas that already have an abundance of trees, due to this even though their cause is good, their efforts turn out vain.

## Solution:

A mobile application to allow the users to create an account and share their activities relating to the betterment of the environment, like planting trees, using bicycle and avoiding vechicles that emit harmful gases, and cleaning their environment.

The users will be able to plant trees, use bicycles and clean the environment. Using our EcoVille app, The users will be able to see the locations where the no of trees are sparse and where the trees are in abundance. This allows the users to plant the trees where there is need for it. Using the [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/maptypes) provided by Google the locations having dense and sparse of trees will be marked.

The users will be uploading the image of the plant before digging the soil and after planting the seed inside the soil or plant,then the image will be sent for validation the admin panel will verify the images and once the validation is successful the user will be rewarded with eco points, As the user base grows exponentially we'll allow the verified users who have crossed a milestone, to do peer review and validate along with the admin panel where they will be awarded with eco ponits which inturn they can later convert it into money.

If the user is unaware wheather the soil is suitable for planting, they can upload the image of the soil which will be verified using the Deep Learning algorithm developed using [IBM watson studio](https://www.ibm.com/in-en/cloud/watson-studio) in the provided Juypter Notebook Environment.

<img src="https://raw.githubusercontent.com/hareesh-r/Geeks-Social/main/DNN.jpg"/>

The model.h5 file will be produced by using a Deep Neural Network (DNN) with 7 Layers to train with Soil images, The layers will be trained using a Sequential model and relevent images. We will be using [Tensorflow](https://www.tensorflow.org/) module provided by Google, specifically Keras API to implement the Sequential training using Deep Learning Techniques like Convo2D , Dense , Flatten , MaxPooling, DropOut , SoftMax and Batch Normalization and for Activation we chose "elu". After populating the model.h5 file that will be integrated with our React Native App using ["tfjs-react-native"](https://www.npmjs.com/package/@tensorflow/tfjs-react-native) library. Once the image is verified and if it's suitable for planting the message will be displayed to the user notifying that the soil is suitable for planting.



An app that uses deep learning to suggest people which localities near them are best suited for planting trees, encourages people to post about what they’ve planted to gain points which enable them to get coupons and cash prizes, Anyone using Ecoville can plant trees without even leaving their home, the app takes an order and plants a tree on your behalf and assigns you points for that too! Additionally, it also encourages them to cycle instead of using automobiles, clean trash etc. etc. Doing all these ecofriendly activities would gain them points as well.
