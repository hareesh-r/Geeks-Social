# Geeks-Social

## Problem Statement:

Climate change has always been a persistent and fatal issue and the problem with tackling it is that there’s no efficient means to check if one’s role in saving the environment is efficient. We have seen quite a lot of people with noble motives to plant saplings, but the problem is that oftentimes such groups of individuals end up planting all these saplings in areas that already have an abundance of trees, due to this even though their cause is good, their efforts turn out vain.

## Team Name:Geeks Social 
                Members : 1) D.Harshitha Reddy
                          2) G.Harshini Naidu
                          3) T.Gejashree
                          4) R.Hareesh
                          5) A.Maaz Hussain
                          
                Mentor :  M.P. Karthikeyan
                
 ## Submission Name:     Eco Ville,a mobile application to make a difference!        

## [Link to the Demo Video](https://youtu.be/40ZY_vaVn3w)
    

## Long Description
A mobile application to allow the users to create an account and share their activities relating to the betterment of the environment, like planting trees, using bicycle and avoiding vechicles that emit harmful gases, and cleaning their surroundings.

Using our EcoVille app,The users will be able to see the locations where the number of trees are sparse and where the trees are in abundance. This allows the users to plant the trees where there is need for it. Using the [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/maptypes) provided by Google the locations having dense and sparse of trees will be marked.

The users will be uploading the image of the plant before and after planting the seed,then the image will be sent for validation the admin panel will verify the images and once the validation is successful the user will be rewarded with eco points, As the user base grows exponentially we'll allow the verified users who have crossed a milestone, to do peer review and validate along with the admin panel where they will be awarded with eco ponits which inturn they can later convert it into money.

If the user is unaware whether the soil is suitable for planting, they can upload the image of the soil which will be verified using the Deep Learning algorithm developed using [IBM watson studio](https://www.ibm.com/in-en/cloud/watson-studio) in the provided Juypter Notebook Environment.

<img src="https://raw.githubusercontent.com/Harshithaa-G/Geeks-Social/main/DNN.jpg"/>

The model.h5 file will be produced by using a **Deep Neural Network (DNN)** with 7 Layers to train with Soil images, The layers will be trained using a Sequential model and relevent images. We will be using [Tensorflow](https://www.tensorflow.org/) module provided by Google, specifically Keras API to implement the Sequential training using Deep Learning Techniques like 
``Convo2D , Dense , Flatten , MaxPooling, DropOut , SoftMax and Batch Normalization and for Activation we chose "elu".``

After populating the model.h5 file that will be integrated with our React Native App using ["tfjs-react-native"](https://www.npmjs.com/package/@tensorflow/tfjs-react-native) library. Once the image is verified and if it's suitable for planting the message will be displayed to the user notifying that the soil is suitable for planting.


## IBM SERVICES TO BE USED WHILE IMPLEMENTING THE APP

>1. Watson Studio (Jupyter Notebook)- For training the model using Deep Learning for predicting the soil.

>2. Watson Assistant - For Voice Chat Bots to show when the user reach the destination for planting trees and the cycling destination.
    - Bot will be able to tell the distance left and distance covered and the expected time to reach the destination.

>3. Cloudant - For storing the details of every user joining the App.
    - Login Credentials
    - Points each user have
     - Datas about the activities each user has done.

>4. API Gateway - For having a bridge between the frontend and backend, API gateway will be created for fetching the datas from Cloudant and display it back to the front end.

>5. Dedicated host for VPC - A website for Eco Ville will be hosted in the Dedicated Hosting platform provided by IBM, for user friendly experience. 

>6. Email Delivery, powered by Sendgrid (PAID) - For sending users remainder mails,after a month of planting the plant, to remind them about watering it.

>7. Push Notifications - To send notifications in mobile as well as website.

>8. Telstra Messaging API -  To send SMS/MMS messages globally using Telstra's enterprise grade Messaging API.

>9. IBM Cloud Monitoring - To  manage enterprise grade monitoring service by providing operational visibility into the performance and health of applications, services and infrastructure.

<img src="https://raw.githubusercontent.com/Harshithaa-G/Geeks-Social/main/Web%201920%20%E2%80%93%201.png" />

