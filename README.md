# Fitness-Tracker

## GOAL

The goal of this project was to code the back-end to a Fitness Tracker app. We were provided with the front-end of the code. The assignment required us to create a Mongo database with a Mongoose schema and handle routes with Express. 

Once finalized, the Fitness Tracker app provides the user with a space to view, create, and track daily workouts. The user has to be able to log resistance or cardio exercises in a workout on any given day. The user should also be able to track the name, type, weight, sets, reps, and duration of each exercise. In a cardio exercise, the user can also track the distance travelled. 

## PROCESS

After looking through the assignment instructions, I carefully looked over the starter code, trying to understand how all of the pieces fit together. I simultaneously looked over the material from the last unit, which was about MongoDB and Mongoose. I also went back and reviewed Express. 

I then created the folders and files I thought would be necessary for the app to work correctly. I had to eventually make changes to my initial folder/file structure, but this allowed me to better vistualize my first version of pseudo code. 

I started actually coding in the models folder, which holds the index.js and the workout.js files. I then moved over to the routes folder, and started coding the apiRoutes.js and the htmlRoutes.js files. I tested the code in the browser continuously, by seeding the database with "npm run seed" and started the server with "npm run start", and made adjustments as needed. 

The last few steps involved testing the app for desired functionality and making sure it fulfilled all of the assignment requirements. I then made sure that the app could be deployed on Heroku. 

Here is a walkthrough-video of the Fitness Tracker app: 

[Fitness-Tracker Walkthrough Video](https://drive.google.com/file/d/1-x4dayxRKJFWsA_T8RcoV3464dIKqs8L/view)

## USAGE

The Fitness-Tracker app is deployed in Heroku under the [Fitness-Tracker Heroku link]().

The user can also access the app in VS Code after the Fitness-Tracker repository has been cloned from GitHub. After installing node modules and all of the necessary dependencies, simply seed the database by running "npm run seed" in the Terminal, and then starting the router using "npm run start". This will start the router in localhost:3001 in the user's browser. 

## CONCLUSION

Each assigment becomes more and more challenging, which is not surprising. There are a lot of concepts to keep track of now, and finding bugs or simple mistakes that influence the whole app's functionality can be quite frustrating and time-consuming. That being said, I do understand that the process of debugging is a big part of coding, so I am also aware that this is good practice. With each new assignment, the importance of collaboration with other coders becomes more and more evident. Whether it be to vent about frustrations or have them help you look through your code for that additional period that is breaking the whole app, being a part of a team of coders is essential. 
